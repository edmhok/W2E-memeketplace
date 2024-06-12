var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useCallback } from "react";
import { exchangeRate } from "@w2e/actor";
import { useCallsData } from "./useCallData";
import { parseTokenAmount } from "@w2e/utils";
export function getExchangeRates() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield exchangeRate()).get_exchange_rates();
    });
}
export function useExchangeRates() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getExchangeRates();
    }), []));
}
export function getExchangeRate(pair) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield exchangeRate()).get_exchange_rate(pair);
    });
}
export function useExchangeRate(pair) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getExchangeRate(pair);
    }), [pair]), !!pair);
}
export function getXDR2USD() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield getExchangeRate("f_USD-f_XDR");
        return parseTokenAmount(result.rate, result.decimals).toString();
    });
}
export function useXDR2USD() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getXDR2USD();
    }), []));
}
//# sourceMappingURL=exchange_rate.js.map