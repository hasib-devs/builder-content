import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import {  Currency, ViewMode } from '../../types/index';

// Define a type for the slice state
export interface GlobalState {
  currency: Currency;
  viewMode: ViewMode;
}

// Define the initial state using that type
const initialState: GlobalState = {
  currency: {
    name: 'USD',
    symbol: '$',
  },
  viewMode: ViewMode.GRID,
};

export const globalSlice = createSlice({
  name: 'global',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrency: (state: GlobalState, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
    },

    setViewMode: (state: GlobalState, action: PayloadAction<ViewMode>) => {
      state.viewMode = action.payload;
    },
  },
});

export const { setCurrency, setViewMode } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCurrency = (state: RootState) => state.global.currency;
export const getViewMode = (state: RootState) => state.global.viewMode;

