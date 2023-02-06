export interface Price {
  currency: string;
  bidCurrency: string;
  askCurrency: string;
  purchasePrice: string;
  sellingPrice: string;
  openPrice: string | null;
  marketIdentifier: string;
}
