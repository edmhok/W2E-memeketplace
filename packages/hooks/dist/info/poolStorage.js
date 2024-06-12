import { useCallback } from "react";
import { resultFormat, isAvailablePageArgs } from "@w2e/utils";
import { poolStorage } from "@w2e/actor";
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

export function getInfoPool(storageId, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield poolStorage(storageId)).getPool(poolId)).data;
    });
}
export function useInfoPool(storageId, poolId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!poolId || !storageId)
            return undefined;
        return yield getInfoPool(storageId, poolId);
    }), [storageId, poolId]));
}
export function getInfoPoolChartData(storageId, poolId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield poolStorage(storageId)).getPoolChartData(poolId, BigInt(offset), BigInt(limit))).data;
    });
}
export function useInfoPoolChartData(storageId, poolId, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!storageId || !poolId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getInfoPoolChartData(storageId, poolId, offset, limit);
    }), [storageId, poolId, offset, limit]));
}
export function getInfoPoolTransactions(storageId, poolId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield poolStorage(storageId)).getPoolTransactions(poolId, BigInt(offset), BigInt(limit))).data;
    });
}
export function useInfoPoolTransactions(storageId, poolId, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!storageId || !poolId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getInfoPoolTransactions(storageId, poolId, offset, limit);
    }), [storageId, poolId, offset, limit]));
}
// # sourceMappingURL=poolStorage.js.map