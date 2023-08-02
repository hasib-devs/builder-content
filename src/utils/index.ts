import { store } from "../store";

export const storageURL = "https://storage.googleapis.com/dokan-dev"
export const formatCurrency = (value: number, fractionDigit = 0) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: store.getState().global.currency.name,
    minimumFractionDigits: fractionDigit,
  }).format(value);
};

export const generateImageUrl = (path: string) => {
  // check if path is a valid url
  if (path.match(/^(http|https):\/\//)) {
    return path;
  }
  return `${storageURL}/${path}`;
};