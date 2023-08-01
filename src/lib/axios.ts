import { store } from '../store/index';
import { setAuthUser, setLoginState, setToken } from '../store/auth/auth-slice';
import { AuthUser } from '../types/index';
import Axios from 'axios';
import qs from 'qs';

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? '',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    tenant: globalThis?.window?.location.hostname.split('.')[0],
  },
  paramsSerializer: (params) => qs.stringify(params, { encode: false, arrayFormat: 'comma', indices: false }),
});
// Set request interceptor
axios.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `bearer ${token}`
    // config.headers
    //   ? (config.headers.Authorization = `bearer ${token}`)
    //   : (config.headers = { Authorization: `bearer ${token}` });
  }
  return config;
});

// Set response interceptors
axios.interceptors.response.use(
  (response) =>
    new Promise((resolve) => {
      resolve(response);
    }),
  (error) => {
    if (error?.response?.status === 401) {
      store.dispatch(setLoginState(false));
      store.dispatch(setAuthUser({} as AuthUser));
      store.dispatch(setToken(''));
      window.location.reload();
    }
    return new Promise((_, reject) => {
      reject(error);
    });
  }
);

export const authConf = {
  baseURL: process.env.NEXT_PUBLIC_AUTH_ENDPOINT ?? '',
};
export const userConf = {
  baseURL: process.env.NEXT_PUBLIC_USER_ENDPOINT ?? '',
};
export const shippingConf = {
  baseURL: process.env.NEXT_PUBLIC_SHIPPING_ENDPOINT ?? '',
};
export const cartConf = {
  baseURL: process.env.NEXT_PUBLIC_CART_ENDPOINT ?? '',
};
export const orderConf = {
  baseURL: process.env.NEXT_PUBLIC_ORDER_ENDPOINT ?? '',
};
export const catalogConf = {
  baseURL: process.env.NEXT_PUBLIC_CATALOG_ENDPOINT ?? '',
};
export const taxConf = {
  baseURL: process.env.NEXT_PUBLIC_TAX_ENDPOINT ?? '',
};
export const paymentConf = {
  baseURL: process.env.NEXT_PUBLIC_PAYMENT_ENDPOINT ?? '',
};

export default axios;
