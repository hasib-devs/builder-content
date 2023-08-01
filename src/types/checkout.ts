export type ShippingInfo = {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  country: string;
  state: string;
  city: string;
  postCode?: string;
  phone?: string;
};

export type Rate = {
  amount: number;
  amount_local: string;
  arrives_by: any;
  attributes: string[];
  carrier_account: string;
  currency: string;
  currency_local: string;
  duration_terms: string;
  estimated_days: number;
  included_insurance_price: any;
  messages: any[];
  object_created: string; // Assuming time.Time is serialized as string in JSON
  object_id: string;
  object_owner: string;
  provider: string;
  provider_image_200: string;
  provider_image_75: string;
  servicelevel: ServiceLevel;
  shipment: string;
  test: boolean;
  zone: string;
};

interface ServiceLevel {
  extended_token: string;
  name: string;
  parent_servicelevel: string;
  terms: string;
  token: string;
}

export type CheckoutDataType = {
  isEditCheckoutForm: boolean;
  taxes: Record<string, { productTax: number; shippingTax: number }>;
  shippingCharges: {
    productId?: string;
    vendorId: number;
    charge: number;
    rates: Rate[];
  }[];
  isTaxCalculated: boolean;
  isShippingCalculated: boolean;
};

export interface CheckoutFormError {
  [key: string]: string[];
}
