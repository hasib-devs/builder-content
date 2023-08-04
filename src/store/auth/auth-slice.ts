import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { AuthUser } from '@/types';

// Define a type for the slice state
export interface AuthState {
  user: AuthUser;
  isLoggedIn: boolean;
  token: string;
  intendedURL: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: {} as AuthUser,
  isLoggedIn: false,
  token: '',
  intendedURL: '',
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLoginState: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setAuthUser: (state: AuthState, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    setToken: (state: AuthState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setIntendedURL: (state: AuthState, action: PayloadAction<string>) => {
      state.intendedURL = action.payload;
    },
  },
});

export const { setLoginState, setAuthUser, setToken, setIntendedURL } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getLoginState = (state: RootState) => state.auth.isLoggedIn;
export const getAuthUser = (state: RootState) => state.auth.user;
export const getToken = (state: RootState) => state.auth.token;
export const getIntendedURL = (state: RootState) => state.auth.intendedURL;
