import type { RootState } from '../index';
import { AnyObject } from '../../types';
import { LineItem } from '../../types/order';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
  cartId: string | null;
  lineItems: LineItem[];
  variation?: AnyObject;
  coupons: { title: string; amount: number; vendorId: number; code: string; freeShippableProducts?: [] }[];
  totalPrice: number;
  discount: number;
  customer: AnyObject;
}

export interface LineItemByVendor {
  vendor: {
    id: number;
    name?: string;
    storeName?: string;
  };
  lineItems: LineItem[];
}

const initialCartState = {
  cartId: null,
  lineItems: [],
  coupons: [],
  totalPrice: 0,
  discount: 0,
  customer: {},
} as CartState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    setCartId: (state: CartState, action: PayloadAction<string | null>) => {
      state.cartId = action.payload;
    },
    resetCart(_state: CartState) {
      return initialCartState;
    },
    setCoupons: (
      state: CartState,
      action: PayloadAction<{ title: string; amount: number; vendorId: number; code: string }[]>
    ) => {
      state.coupons = action.payload;
    },
    setCartTotal: (state: CartState, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    setDiscountTotal: (state: CartState, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
    setFreshCart: (state: CartState, action: PayloadAction<CartState & { id: string }>) => {
      state.coupons = action.payload.coupons;
      state.discount = action.payload.discount;
      state.totalPrice = action.payload.totalPrice;
      state.lineItems = action.payload.lineItems;
      state.cartId = action.payload.id;
    },
    setCartCustomerEmail: (state: CartState, action: PayloadAction<string>) => {
      state.customer.email = action.payload;
    },
    setLineItems: (state: CartState, action: PayloadAction<LineItem[]>) => {
      state.lineItems = action.payload;
    },
  },
  extraReducers: (_builder) => {},
});

export const {
  setLineItems,
  setCartId,
  resetCart,
  setCoupons,
  setCartTotal,
  setDiscountTotal,
  setFreshCart,
  setCartCustomerEmail,
} = cartSlice.actions;

export const getLineItems = (state: RootState) => state.cart.lineItems;
export const getCartSubTotal = (state: RootState) => {
  return state.cart.totalPrice;
};
export const getLineItemsByVendor = (state: RootState) => {
  return state.cart.lineItems.reduce((acc: LineItemByVendor[], lineItem) => {
    const found = acc.find((item) => item.vendor.id === lineItem.product.vendor.id);
    if (found) {
      found.lineItems.push(lineItem);
    } else {
      acc.push({ vendor: lineItem.product.vendor, lineItems: [lineItem] });
    }
    return acc;
  }, []);
};

export const getCartId = (state: RootState) => {
  return state.cart.cartId;
};

export const getCoupons = (state: RootState) => {
  return state.cart.coupons;
};
