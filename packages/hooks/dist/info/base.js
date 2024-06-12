import { useCallback } from "react";
import { resultFormat, isAvailablePageArgs } from "@w2e/utils";
import { baseIndex, baseStorage } from "@w2e/actor";
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

export function getBaseStorages() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield baseIndex()).baseStorage()).data;
    });
}
export function useBaseStorages() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getBaseStorages();
    }), []));
}
export function getBaseStorage() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield baseIndex()).baseLastStorage()).data;
    });
}
export function useBaseStorage() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getBaseStorage();
    }), []));
}
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param poolIds An array of pool ids, empty array will return all pools data
 * @returns
 */
export function getBaseTransactions(canisterId, offset, limit, poolIds) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield baseStorage(canisterId)).getBaseRecord(BigInt(offset), BigInt(limit), poolIds)).data;
    });
}
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param poolIds An array of pool ids, empty array will return all pools data, default is empty
 * @returns
 */
export function useBaseTransactions(canisterId, offset, limit, poolIds) {
    const callback = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getBaseTransactions(canisterId, offset, limit, poolIds !== null && poolIds !== void 0 ? poolIds : []);
    }), [canisterId, offset, limit, JSON.stringify(poolIds)]);
    return useCallsData(callback);
}
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param tokenId The token canister id
 * @returns
 */
export function getTransactionsByToken(canisterId, offset, limit, tokenId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield baseStorage(canisterId)).getByToken(BigInt(offset), BigInt(limit), tokenId)).data;
    });
}
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param tokenId The token canister id
 * @returns
 */
export function useTransactionsByToken(canisterId, offset, limit, tokenId) {
    const callback = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getTransactionsByToken(canisterId, offset, limit, tokenId);
    }), [canisterId, offset, limit, tokenId]);
    return useCallsData(callback);
}
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param tokenId The pool canister id
 * @returns
 */
export function getTransactionsByPool(canisterId, offset, limit, poolId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield baseStorage(canisterId)).getByPool(BigInt(offset), BigInt(limit), poolId)).data;
    });
}
/**
 *
 * @param canisterId The baseStorage canister id
 * @param offset Start of data
 * @param limit Length of data
 * @param tokenId The pool canister id
 * @returns
 */
export function useTransactionsByPool(canisterId, offset, limit, poolId) {
    const callback = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getTransactionsByPool(canisterId, offset, limit, poolId);
    }), [canisterId, offset, limit, poolId]);
    return useCallsData(callback);
}
// # sourceMappingURL=base.js.map