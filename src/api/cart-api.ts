import axios, { cartConf } from '../lib/axios';
export interface CartPayload {
  lineItems: {
    productId: string;
    quantity?: number;
    variationId?: string;
  }[];
}
const cartApi = {
  createCart: async (payload: CartPayload) => {
    return await axios.post('/api/v1/cart', payload, cartConf);
  },
  updateCart: async (cartId: string, payload: { customer: { email: string } }) => {
    return await axios.patch(`/api/v1/cart/${cartId}`, payload, cartConf);
  },
  addCartItem: async (cartId: string, payload: CartPayload) => {
    return await axios.post(`/api/v1/cart/${cartId}/add-item`, payload, cartConf);
  },
  updateCartItem: async (cartId: string, payload: CartPayload) => {
    return await axios.patch(`/api/v1/cart/${cartId}/update-item`, payload, cartConf);
  },
  removeCartItem: async (cartId: string, payload: CartPayload) => {
    return await axios.post(`/api/v1/cart/${cartId}/remove-item`, payload, cartConf);
  },
};

export default cartApi;
