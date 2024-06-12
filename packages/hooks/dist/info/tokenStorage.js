import { useCallback } from "react";
import { resultFormat, isAvailablePageArgs } from "@w2e/utils";
import { tokenStorage } from "@w2e/actor";
import { useCallsData } from "../useCallData";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function getInfoToken(storageId, tokenId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenStorage(storageId)).getToken(tokenId)).data;
    });
}
export function useInfoToken(storageId, tokenId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!tokenId || !storageId)
            return undefined;
        return yield getInfoToken(storageId, tokenId);
    }), [storageId, tokenId]));
}
export function getInfoTokenChartData(storageId, tokenId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenStorage(storageId)).getTokenChartData(tokenId, BigInt(offset), BigInt(limit))).data;
    });
}
export function useInfoTokenChartData(storageId, tokenId, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!storageId || !tokenId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getInfoTokenChartData(storageId, tokenId, offset, limit);
    }), [storageId, tokenId, offset, limit]));
}
export function getInfoTokenTransactions(storageId, tokenId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenStorage(storageId)).getTokenTransactions(tokenId, BigInt(offset), BigInt(limit))).data;
    });
}
export function useInfoTokenTransactions(storageId, tokenId, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!storageId || !tokenId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getInfoTokenTransactions(storageId, tokenId, offset, limit);
    }), [storageId, tokenId, offset, limit]));
}
export function getInfoTokenPriceChart(storageId, tokenId, time, interval, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenStorage(storageId)).getTokenPricesData(tokenId, BigInt(time), BigInt(interval), BigInt(limit))).data;
    });
}
export function useInfoTokenPriceChart(storageId, tokenId, time, interval, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!storageId || !tokenId || (!time && time !== 0) || !interval)
            return undefined;
        return yield getInfoTokenPriceChart(storageId, tokenId, time, interval, limit);
    }), [storageId, tokenId, time, interval, limit]));
}
export function getInfoPoolsOfToken(storageId, tokenId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenStorage(storageId)).getPoolsForToken(tokenId)).data;
    });
}
export function useInfoPoolsOfToken(storageId, tokenId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!storageId || !tokenId)
            return undefined;
        return yield getInfoPoolsOfToken(storageId, tokenId);
    }), [tokenId, storageId]));
}
// # sourceMappingURL=tokenStorage.js.map