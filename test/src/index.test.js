"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../src/index");
const constants_1 = require("../../src/types/constants");
describe("Getting data from APIs", () => {
    test("Get P2p prices by payload", () => {
        expect((0, index_1.getP2PPricesByPayload)(constants_1.API_BINANCE_C2C, constants_1.API_BINANCE_CEC_PAYLOAD)).toEqual(null);
    });
});
