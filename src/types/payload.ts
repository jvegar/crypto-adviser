export interface Payload {
  proMerchantAds: boolean;
  page: number;
  rows: number;
  payTypes: Array<string>;
  countries: Array<string>;
  publisherType: string | null;
  tradeType: string;
  asset: string;
  fiat: string;
}