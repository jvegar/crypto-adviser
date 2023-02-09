import { Payload } from './payload';

export const API_BUENBIT_TICKERS = "https://be.buenbit.com/api/market/tickers";
export const API_BINANCE_C2C = "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search";
export const API_BINANCE_CEC_PAYLOAD: Payload = {
  proMerchantAds:false,
  page:1,
  rows:15,
  payTypes:[],
  countries:[],
  publisherType:null,
  tradeType:"SELL",
  asset:"USDT",
  fiat:"PEN"
};
