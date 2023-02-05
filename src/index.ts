import axios from 'axios';
import { Price } from './types/Price';
import { Payload } from './types/Payload';
import { Ticker } from './types/Ticker';

const API_BUENBIT_TICKERS = "https://be.buenbit.com/api/market/tickers";
const API_BINANCE_C2C = "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search";
const API_BINANCE_CEC_PAYLOAD: Payload = {
  proMerchantAds:false,
  page:1,
  rows:10,
  payTypes:[],
  countries:[],
  publisherType:null,
  tradeType:"SELL",
  asset:"USDT",
  fiat:"PEN"
};


const getTickerPriceByCurrency = async (apiUrl: string, bidCurrency: string, askCurrency: string): Promise<Price | undefined | null> => {
  try {
    const apiResponse = await axios.get(apiUrl);
    const tickers =await apiResponse.data;
    for(const ticker in tickers.object){
      if(tickers.object[ticker].bid_currency === bidCurrency && tickers.object[ticker].ask_currency === askCurrency)      
        return tickers.object[ticker];
    }
    return null;
  }
  catch(error){
    console.error(error);
  }
}

const getP2PPricesByPayload = async (apiUrl: string, payload: Payload): Promise<Ticker[] | undefined> => {
  const prices: Ticker[] = [];
  try {
    const apiResponse = await axios.post(apiUrl, payload);
    const dataObject = await apiResponse.data;
    for(const p2p of dataObject.data){
      prices.push({
        nickName: p2p.advertiser.nickName, 
        price: p2p.adv.price
      });
    }
    return prices;
  }
  catch(error){
    console.error(error);
  }
}

const init =  async() => {
  console.log("###### Getting Binance UDST Prices ######");
  const tickers = await getP2PPricesByPayload(API_BINANCE_C2C, API_BINANCE_CEC_PAYLOAD);
  console.log(tickers);
  console.log("###### BuenBit USDT Price ######");
  const usdt_price = await getTickerPriceByCurrency(API_BUENBIT_TICKERS,"usdt", "nupen");
  console.log(usdt_price);
}

init();

