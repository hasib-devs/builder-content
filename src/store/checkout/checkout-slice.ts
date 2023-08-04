
import {  AuthUser } from '../../types/index';
import { ShippingInfo } from '../../types/checkout';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface EmailProps {
  email: string;
}

const shippingInfo: ShippingInfo = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  country: '',
  state: '',
  city: '',
  postCode: '',
  phone: '',
};

export type CheckoutState = {
  customer: AuthUser;
  steps: number;
  shipping: ShippingInfo;
  billing: ShippingInfo;
  isBillingDifferentThanShipping: boolean;
  paymentMethod: string;
  stripeData: {
    number: string;
    cvc: string;
    expiryDate: string;
    name: string;
  };
  alreadyGotOrderGroupId: string;
  notes: { vendorId: number; note: string }[];
  rates?: { vendorId: number; rateId: string }[];
};

const initialCheckoutState = {
  customer: {} as AuthUser,
  steps: 1,
  shipping: {
    ...shippingInfo,
  },
  billing: {
    ...shippingInfo,
  },
  isBillingDifferentThanShipping: false,
  paymentMethod: '',
  stripeData: {
    number: '',
    cvc: '',
    expiryDate: '',
    name: '',
  },
  alreadyGotOrderGroupId: '',
  notes: [],
  rates: [],
} as CheckoutState;

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: initialCheckoutState,
  reducers: {
    setEmail(state: CheckoutState, action: PayloadAction<EmailProps>) {
      state.customer.email = action.payload.email;
    },
    incrementStep(state: CheckoutState) {
      state.steps += 1;
    },
    resetCheckoutState(_state: CheckoutState) {
      return initialCheckoutState;
    },
    setShipingDetails(state: CheckoutState, action: PayloadAction<ShippingInfo>) {
      state.shipping = action.payload;
    },
    setBillingDetails(state: CheckoutState, action: PayloadAction<ShippingInfo>) {
      state.billing = action.payload;
    },
    setBillingDifferentThanShipping(state: CheckoutState, action: PayloadAction<boolean>) {
      state.isBillingDifferentThanShipping = action.payload;
    },
    setPaymentMethod(state: CheckoutState, action: PayloadAction<string>) {
      state.paymentMethod = action.payload;
    },
    setCustomer(state: CheckoutState, action: PayloadAction<AuthUser>) {
      state.customer = action.payload;
    },
    setStripeData(
      state: CheckoutState,
      action: PayloadAction<{ number: string; cvc: string; expiryDate: string; name: string }>
    ) {
      state.stripeData = action.payload;
    },
    setAlreadyGotOrderGroupId(state: CheckoutState, action: PayloadAction<string>) {
      state.alreadyGotOrderGroupId = action.payload;
    },
    setNotes(state: CheckoutState, action: PayloadAction<{ vendorId: number; note: string }[]>) {
      state.notes = action.payload;
    },
    setRates(state: CheckoutState, action: PayloadAction<{ vendorId: number; rateId: string }[]>) {
      state.rates = action.payload;
    },
  },
  extraReducers: () => { },
});

// Checkout Actions
export const {
  setEmail,
  incrementStep,
  resetCheckoutState,
  setBillingDetails,
  setShipingDetails,
  setBillingDifferentThanShipping,
  setPaymentMethod,
  setCustomer,
  setStripeData,
  setAlreadyGotOrderGroupId,
  setNotes,
  setRates,
} = checkoutSlice.actions;

export const getCustomer = (state: RootState) => state.checkout.customer;
export const getStepCount = (state: RootState) => state.checkout.steps;
export const getShippingDetails = (state: RootState) => state.checkout.shipping;
export const getBillingDetails = (state: RootState) => state.checkout.billing;
export const getBillingDifferentThanShipping = (state: RootState) => state.checkout.isBillingDifferentThanShipping;
export const getPaymentMethod = (state: RootState) => state.checkout.paymentMethod;
export const getStripeData = (state: RootState) => state.checkout.stripeData;
