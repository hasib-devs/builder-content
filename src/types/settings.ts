import { Media } from './catalog';

export type BrandSettingsType = {
  logo: Media;
  icon: Media;
  colors: {
    brand: string;
    accent: string;
  };
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    pinterest: string;
    youtube: string;
  };
};

export type MarketPlaceSettingsType = {
  marketplaceDetails?: {
    allowGuestCheckout?: boolean;
    name?: string;
    timezone?: string;
    siteLanguage?: string;
    currency?: string;
    siteEmail?: string;
  };
  businessDetails?: {
    legalBusinessName?: string;
    phoneNo?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    postCode?: string;
    country?: string;
    state?: string;
  };
};
