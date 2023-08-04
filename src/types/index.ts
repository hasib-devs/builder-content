export interface AnyObject {
  [key: string]: unknown;
}

export interface Vendor {
  id: string;
  storeName: string;
  creatorId: number;
  address1: string;
  address2: string;
  zipCode: string;
  city: string;
  country: string;
  active: boolean;
  firstName: string;
  lastName: string;
  state: string;
  subdomain: string;
  businessType: string;
  logo?: { path: string };
  banner?: { path: string };
  rating: number;
  about?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Page {
  name: string;
  href: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

// Paginated express query
export interface Query {
  search?: string;
  filters?: AnyObject;
  sort?: AnyObject;
  paginate?: boolean;
  page?: number;
  limit?: number;
}

export interface RelatedVendor {
  id: number;
  storeName: string;
  active: boolean;
}

export interface AuthUser {
  firstName: string;
  lastName: string;
  email: string;
  id: string | number;
  emailVerifiedAt?: Date;
  active?: boolean;
  role: "admin" | "vendor" | "customer";
  createdAt?: Date;
  isAdmin?: boolean;
  mobile?: string;
  mobileVerifiedAt?: Date;
  gender?: string;
  birthDate?: Date | string;
  image?: ImageValidated;
  otpCode?: string;
  otpExpiresAt?: Date;
  strategy: string;
  addresses: Address[];
  defaultAddressId?: number;
  relatedVendor?: RelatedVendor;
}

export type Address = {
  userId?: number;
  label: string;
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  city: string;
  address1: string;
  address2?: string;
  phone?: string;
  isDefault: boolean;
  id?: number;
  latitude?: number;
  longitude?: number;
  postCode: string;
};

export enum ViewMode {
  GRID = "grid",
  LIST = "list",
}

export type CSSUnit = `${number}${
  | "px"
  | "em"
  | "rem"
  | "%"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"}`;

export type FormData<T> = T | "";

export type PaginatedResponse<T> = {
  data: T;
  meta: {
    totalPage: number;
    current: number;
    totalItem: number;
    perPage: number;
  };
};

export type ImageValidated = {
  _id?: string;
  name: string;
  path: string;
  url?: string;
  size: number;
  mimetype: string;
  uploaded: boolean;
  uploadError?: any;
};

export type ImageUploadResponse = {
  status: boolean;
  message: string;
  payload: {
    _id: string;
    name: string;
    mimetype: string;
    size: number;
    path: string;
  };
};
