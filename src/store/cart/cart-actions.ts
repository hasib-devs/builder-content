import { LineItem } from '../../types/order';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import cartApi, { CartPayload } from '../../api/cart-api';
import {
  setCartTotal,
  setDiscountTotal,
  setCartId,
  setCoupons,
  setCartCustomerEmail,
  setLineItems, resetCart,
} from './cart-slice';
import { setNotes } from '../checkout/checkout-slice';
import Axios from 'axios';



export const incrementCartItem = createAsyncThunk('cart/incrementCartItem', async (cartItem: LineItem, thunkApi): Promise<any> => {
  const { dispatch, getState } = thunkApi;

  const { cart, checkout } = getState() as RootState;

  if (cart.cartId) {
    const foundItem = cart.lineItems.find((lineItem) => {
      if (lineItem.product.id === cartItem.product.id) {
        if (!lineItem?.variation) {
          return true;
        }

        if (cartItem?.variation && cartItem.variation.id === lineItem.variation.id) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });

    if (foundItem) {
      if (foundItem.variation) {
        try {
          const payload = {
            lineItems: cart.lineItems.map((lineItem) =>
              lineItem.product.id === foundItem.product.id && lineItem.variation?.id === cartItem.variation?.id
                ? {
                  quantity: lineItem.quantity + cartItem.quantity,
                  productId: lineItem.product.id,
                  variationId: lineItem.variation?.id,
                }
                : { quantity: lineItem.quantity, productId: lineItem.product.id, variationId: lineItem.variation?.id }
            ),
          };
          const cartResponse = await cartApi.updateCartItem(cart.cartId, payload);
          dispatch(setCartTotal(cartResponse?.data?.data?.totalPrice ?? 0));
          dispatch(setDiscountTotal(cartResponse?.data?.data?.discount ?? 0));
          dispatch(setLineItems(cartResponse?.data?.data?.lineItems ?? []));
        } catch (error) {
          if( Axios.isAxiosError(error) && error?.response?.status === 404 ) {
            dispatch(resetCart());
          }
          return thunkApi.rejectWithValue('could not update item');
        }
      }

      if (!foundItem.variation) {
        try {
          const payload = {
            lineItems: cart.lineItems.map((lineItem) =>
              lineItem.product.id === foundItem.product.id
                ? { quantity: lineItem.quantity + cartItem.quantity, productId: lineItem.product.id }
                : { quantity: lineItem.quantity, productId: lineItem.product.id }
            ),
          };
          const cartResponse = await cartApi.updateCartItem(cart.cartId, payload);
          dispatch(setCartTotal(cartResponse?.data?.data?.totalPrice ?? 0));
          dispatch(setDiscountTotal(cartResponse?.data?.data?.discount ?? 0));
          dispatch(setLineItems(cartResponse?.data?.data?.lineItems ?? []));
        } catch (error) {
          if( Axios.isAxiosError(error) && error?.response?.status === 404 ) {
            dispatch(resetCart());
          }
          return thunkApi.rejectWithValue('could not add item');
        }
      }
    } else {
      try {
        const cartResponse = await cartApi.addCartItem(cart.cartId, {
          lineItems: [
            {
              productId: cartItem.product.id,
              quantity: cartItem.quantity,
              ...(cartItem?.variation && { variationId: cartItem.variation.id }),
            },
          ],
        });
        dispatch(setLineItems(cartResponse?.data?.data?.lineItems ?? []));
        dispatch(setCartTotal(cartResponse?.data?.data?.totalPrice ?? 0));
        dispatch(setDiscountTotal(cartResponse?.data?.data?.discount ?? 0));
        const foundNote = checkout?.notes?.find( note => note.vendorId === cartItem.product.vendor.id );
        if( ! foundNote ) {
          if( checkout?.notes ) {
            dispatch(setNotes([...checkout.notes, { vendorId: cartItem.product.vendor.id, note: '' }]));
          } else {
            dispatch(setNotes([{ vendorId: cartItem.product.vendor.id, note: '' }]));
          }
        }
      } catch (error) {
        if( Axios.isAxiosError(error) && error?.response?.status === 404 ) {
          dispatch(resetCart());
        }
        return thunkApi.rejectWithValue('could not add item to cart');
      }
    }
  } else {
    try {
      const cartResponse = await cartApi.createCart({
        lineItems: [
          {
            productId: cartItem.product.id,
            quantity: cartItem.quantity,
            ...(cartItem?.variation && { variationId: cartItem.variation.id }),
          },
        ],
      });
      const cartId = cartResponse?.data?.data?.id;

      dispatch(setCartId(cartId));
      dispatch(setLineItems(cartResponse?.data?.data?.lineItems ?? []));
      dispatch(setCartTotal(cartResponse?.data?.data?.totalPrice ?? 0));
      dispatch(setDiscountTotal(cartResponse?.data?.data?.discount ?? 0));
      dispatch(setNotes([{ vendorId: cartItem.product.vendor.id, note: '' }]));
    } catch (error) {
      if( Axios.isAxiosError(error) && error?.response?.status === 404 ) {
        dispatch(resetCart());
      }
      return thunkApi.rejectWithValue('could not create cart');
    }
  }
});

export const decrementCartItem = createAsyncThunk('cart/decrementCartItem', async (cartItem: LineItem, thunkApi): Promise<any> => {
  const { dispatch, getState } = thunkApi;

  const { cart } = getState() as RootState;

  const payload = {
    lineItems: cart.lineItems.map((lineItem) => {
      if (lineItem.product.id === cartItem.product.id) {
        if (lineItem?.variation) {
          if (lineItem.variation.id === cartItem?.variation?.id) {
            return {
              productId: lineItem.product.id,
              quantity: lineItem.quantity - 1,
              variationId: lineItem.variation.id,
            };
          } else {
            return { productId: lineItem.product.id, quantity: lineItem.quantity, variationId: lineItem.variation.id };
          }
        } else {
          return { productId: lineItem.product.id, quantity: lineItem.quantity - 1 };
        }
      } else {
        return {
          productId: lineItem.product.id,
          quantity: lineItem.quantity,
          ...(lineItem?.variation && { variationId: lineItem.variation.id }),
        };
      }
    }),
  };

  try {
    const cartResponse = await cartApi.updateCartItem(cart.cartId as string, payload);
    dispatch(setLineItems(cartResponse?.data?.data?.lineItems ?? []));
    dispatch(setCartTotal(cartResponse?.data?.data?.totalPrice ?? 0));
    dispatch(setDiscountTotal(cartResponse?.data?.data?.discount ?? 0));
    dispatch(setCoupons(cartResponse?.data?.data?.coupons ?? []));
  } catch (error) {
    if( Axios.isAxiosError(error) && error?.response?.status === 404 ) {
      dispatch(resetCart());
    }
    return thunkApi.rejectWithValue('could not update item');
  }
});

export const removeCartItem = createAsyncThunk('cart/removeCartItem', async (cartItem: LineItem, thunkApi): Promise<any> => {
  const { dispatch, getState } = thunkApi;

  const { cart, checkout } = getState() as RootState;

  let payload: CartPayload;

  if (cartItem.variation) {
    payload = {
      lineItems: [{ productId: cartItem.product.id, variationId: cartItem.variation.id }],
    };
  } else {
    payload = {
      lineItems: [{ productId: cartItem.product.id }],
    };
  }

  try {
    const cartResponse = await cartApi.removeCartItem(cart.cartId as string, payload);
    const lineItems : LineItem[] = cartResponse?.data?.data?.lineItems ?? [];
    dispatch(setLineItems(lineItems));
    dispatch(setCartTotal(cartResponse?.data?.data?.totalPrice ?? 0));
    dispatch(setDiscountTotal(cartResponse?.data?.data?.discount ?? 0));
    dispatch(setCoupons(cartResponse?.data?.data?.coupons ?? []));
    const vendorIds = lineItems.map( lineItem => lineItem.product.vendor.id );
    const uniqueIds = vendorIds.filter( ( id, index ) => {
      vendorIds.indexOf(id) === index;
    } );
    const notes = checkout?.notes?.filter( note => uniqueIds.includes(note.vendorId) );
    if( notes ) {
      dispatch(setNotes(notes));
    }
  } catch (error) {
    if( Axios.isAxiosError(error) && error?.response?.status === 404 ) {
      dispatch(resetCart());
    }
    return thunkApi.rejectWithValue('could not remove item');
  }
});

export const addCartCustomerEmail = createAsyncThunk('cart/addCustomerEmail', async (email: string, thunkApi): Promise<any> => {
  const { dispatch, getState } = thunkApi;

  const { cart } = getState() as RootState;

  try {
    await cartApi.updateCart(cart.cartId as string, { customer: { email } });
    dispatch(setCartCustomerEmail(email));
  } catch (error) {
    return thunkApi.rejectWithValue('could not add email');
  }
});

