import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart/cart-slice';
import { globalSlice } from './global/global-slice';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { authSlice, AuthState } from './auth/auth-slice';
import { checkoutSlice } from './checkout/checkout-slice';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  auth: persistReducer<AuthState>(authPersistConfig, authSlice.reducer),
  global: globalSlice.reducer,
  checkout: checkoutSlice.reducer,
});

const persistConfig = {
  timeout: 1000,
  key: 'dokan-store',
  storage,
  blacklist: ['auth'],
  whitelist: ['global', 'cart', 'checkout'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
