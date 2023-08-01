import { ImagePrevSize } from 'next-seo/lib/types';

export interface Product {
  id: string;
  title: string;
  slug: string;
  link: string;
  sku?: string;
  barcode?: string;
  type: string;
  priceType: string;
  price: number;
  salePrice: number | null;
  costPrice?: number;
  tieredPrice: boolean;
  prices: TieredPrice[];
  collectTax: boolean;
  taxClassId?: string;
  description?: string;
  attributes: Attribute[];
  hasVariation: boolean;
  variationOptions: VariationOption[];
  variations: Variation[];
  category: Category;
  brand?: string;
  status: string;
  tags: Tag[];
  vendor: Vendor;
  manageStock: boolean;
  stockQuantity?: number;
  lowStockThreshold?: number;
  backorders?: string;
  stockStatus: StockStatus;
  shippingDimension?: ShippingDimension;
  shippingClass?: string;
  hasCustomInfo?: boolean;
  country?: string;
  hsCode?: string;
  seo: SEO;
  files: File[];
  media: Media[];
  sellCount: number;
  ratingsCount: number;
  reviewsCount: number;
  averageRating: number;
  hasLicenseKey?: boolean;
  activationLimit?: number;
  unlimited?: boolean;
  hideFromStoreFront: boolean;
  allowOnPos: boolean;
}

export enum StockStatus {
  AVAILABLE = 'available',
  OUT_OF_STOCK = 'out-of-stock',
  ON_BACKORDER = 'on-backorder',
  PREORDER = 'preorder',
}

export interface TieredPrice {
  min: number;
  max: number;
  price: number;
}

export interface VariationOption {
  _id: string;
  name: string;
  slug: string;
  value: string[];
}

export interface Variation {
  _id: string;
  sku: string;
  barcode: string;
  option: Record<string, unknown>;
  price: number;
  salePrice: number;
  costPrice: number;
  manageStock: boolean;
  stockQuantity: number;
  lowStockThreshold: number;
  stockStatus?: string;
  id?: string;
}

export interface Tag {
  id?: string;
  label: string;
  value: string;
}

export interface Vendor {
  id: number;
  storeName: string;
}

export interface SEO {
  title: string;
  urlSlug: string;
  description: string;
  letSearchEnginesIndexThisPage: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage?: Media;
  twitterTitle: string;
  twitterDescription: string;
  twitterCard: string;
  twitterImage?: Media;
  richMarkupType: string;
  noindex: boolean;
  nofollow: boolean;
  nosnippet: boolean;
  noarchive: boolean;
  noimageindex: boolean;
  maxSnippet: number;
  maxImagePreview: ImagePrevSize;
  maxVideoPreview: number;
}

export interface ShippingDimension {
  weight: number;
  width: number;
  height: number;
  length: number;
  unit: string;
}

export interface Media {
  _id: string;
  id: string;
  name: string;
  mimetype: 'image/jpg' | 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif' | 'video/mp4' | 'video/webm';
  path: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  parent: number;
  tree: Pick<Category, 'id' | 'name'>[];
  attributes: Attribute[];
  media: Media[];
  totalProducts: number;
  seo: SEO;
}

export enum AttributeType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  IMAGE = 'image',
  FILE = 'file',
  MULTISELECT = 'multiselect',
}

export type Attribute = {
  _id: string;
  name: string;
  slug: string;
  type: AttributeType;
  value: string[];
  options: string[];
  isRequired: boolean;
  isVisible: boolean;
  isFilterable: boolean;
  isVariationable: boolean;
};

export interface CategoryTree extends Category {
  children: CategoryTree[];
}
