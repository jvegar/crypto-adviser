import axios from 'axios';

const getDataFromBuenBit = async (url: string) => {
  try {
    const response = await axios.get(url);
    const tickers =await response.data;
    for(let ticker in tickers.object){
      if(tickers.object[ticker].bid_currency === 'usdt' &&
        tickers.object[ticker].ask_currency === 'nupen')      
      console.log(tickers.object[ticker]);
    }
  }
  catch(error){
    console.error(error);
  }
}

const getDataFromBinance = async (url: string, payload: any) => {
  try {
    const response = await axios.post(url,payload);
    const dataObject = await response.data;
    for(let p2p of dataObject.data){
      console.log(p2p.advertiser.nickName);
      console.log(p2p.adv.price);
    }
  }
  catch(error){
    console.error(error);
  }
}



console.log(`Getting data from url`);
const apiBuenBitUrl = "https://be.buenbit.com/api/market/tickers";
const apiBinanceUrl = "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search";
const payloadBinance = {proMerchantAds:false,page:1,rows:10,payTypes:[],countries:[],publisherType:null,tradeType:"SELL",asset:"USDT",fiat:"PEN"};

console.log("###### Binance UDST Prices ######")
getDataFromBinance(apiBinanceUrl, payloadBinance);
console.log("###### BuenBit USDT Price ######")
getDataFromBuenBit(apiBuenBitUrl);

