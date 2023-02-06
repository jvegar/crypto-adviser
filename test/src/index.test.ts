import { getP2PPricesByPayload } from '../../src/index';
import { API_BINANCE_C2C, API_BINANCE_CEC_PAYLOAD } from '../../src/types/constants';

describe("Getting data from APIs", () => {
  test("Get P2p prices by payload", () => {
    expect(getP2PPricesByPayload(API_BINANCE_C2C, API_BINANCE_CEC_PAYLOAD)).toEqual(null);
  });
});