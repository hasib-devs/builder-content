import { AnyObject, AuthUser } from '.';
import { ShippingInfo } from './checkout';
import { Product, Variation } from './catalog';
import { FormData } from './index';

export interface LineItem {
  id: string;
  product: Product;
  quantity: number;
  variation?: Variation;
  totalPrice?: number;
  unitPrice?: number;
}

export enum OrderStatus {
  PAID = 'paid',
  UNPAID = 'unpaid',
  FAILED = 'failed',
  CANCELED = 'canceled',
  ON_HOLD = 'on-hold',
  REFUNDED = 'refunded',
  PARTIALLY_REFUNDED = 'partially-refunded',
}

export enum OrderShipmentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  READY_FOR_PICKUP = 'ready_for_pickup',
  ON_HOLD = 'on_hold',
  PARTIAL = 'partial',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELED = 'canceled',
  NONE = 'none',
}

export type Status = 'completed' | 'processing' | 'pending' | 'failed' | 'canceled' | 'on_hold' | 'refunded';
type PaymentStatus = 'failed' | 'canceled' | 'on_hold' | 'refunded' | 'paid' | 'unpaid' | 'partially_refunded';
type ShipmentStatus =
  | 'pending'
  | 'processing'
  | 'ready_for_pickup'
  | 'on_hold'
  | 'partial'
  | 'shipped'
  | 'delivered'
  | 'canceled'
  | 'none';

export type Order = {
  id: string;
  cartId: string | null;
  prefix: string;
  number: string | null;
  vendorId: number;
  vendorInfo: { id: number; name?: string; storeName?: string };
  customerIp: string;
  groupId: number;
  customerId: number | null;
  customer: AuthUser;
  note: string | null;
  currency: string;
  billingAddress: ShippingInfo;
  shippingAddress: ShippingInfo;
  status: Status;
  paymentStatus: PaymentStatus;
  shipmentStatus: ShipmentStatus;
  paymentMethod: AnyObject;
  discounts: AnyObject;
  subtotal: FormData<number>;
  shippingCharge: FormData<number>;
  shippingTax: FormData<number>;
  productTax: FormData<number>;
  discountAmount: FormData<number>;
  total: FormData<number>;
  gatewayFee: number;
  adminCommission: number;
  gatewayPercentage: number;
  paymentTransferred: boolean;
  transferId: string | null;
  transferredAmount: number;
  createdAt: Date;
  thresholdTime: Date | null;
  lineItems: OrderLineItem[];
  orderNo: string;
};

export type OrderLineItem = {
  id: string;
  orderId: string;
  productId: string;
  variation: Variation;
  quantity: number;
  sku: string;
  url: string | null;
  title: string;
  media: {
    name: string;
    size: number;
    path: string;
    mimetype: string;
    _id: string;
  }[];
  unitPrice: number;
  salePrice: number;
  subTotal: number;
  discounts: AnyObject | null;
  taxId: number | null;
  taxName: string | null;
  taxAmount: number;
  appliedTaxAmount: number;
  shipmentPrice: number;
  shipmentTax: number;
  shipmentTotal: number;
  discountTotal: number;
  total: number;
  shipped: boolean;
  totalShipped: number;
  totalDelivered: number;
  gatewayFee: number;
  adminCommission: number;
  transferredAmount: number;
  reviewedAt: Date;
};

export type OrderGroup = {
  billingAddress: ShippingInfo;
  shippingAddress: ShippingInfo;
  total: string;
  subtotal: string;
  shippingCharge: string;
  shippingTax: string;
  productTax: string;
  orderGroupNo: string;
  discountAmount: string;
  gatewayFee: string;
  orders: Order[];
  paymentMethod: string;
};

export type OrderMe = Order & {
  canCustomerCancel: boolean;
  paymentMethod: string;
  orderGroup: Exclude<OrderGroup, 'orders' | 'paymentMethod'>;
};

export interface ShipmentItem {
  id?: string;
  lineItem: OrderLineItem;
  quantity: number;
  selected?: boolean;
}

export interface ShipmentCreateInput {
  id?: string;
  trackingNumber: string;
  trackingUrl: string;
  carrier: string;
  status: ShipmentStatus;
  notifyCustomer: boolean;
  shipmentItems: ShipmentItem[];
}

export interface Shipment extends ShipmentCreateInput {
  id: string;
  shipmentItems: ShipmentItem[];
}
