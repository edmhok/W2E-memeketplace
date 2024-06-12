import { useCallback } from "react";
import { resultFormat, isAvailablePageArgs } from "@w2e/utils";
import { userStorage } from "@w2e/actor";
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
/**
 * @param storageId The user storage canister id
 * @param principal User's principal address
 * @param offset Start of data
 * @param limit Length of data
 * @param poolIds An array of pool ids, empty array will return all pools data
 * @returns
 */
export function getInfoUserTransactions(storageId, principal, offset, limit, poolIds) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield userStorage(storageId)).get(principal, BigInt(offset), BigInt(limit), poolIds)).data;
    });
}
/**
 * @param storageId The user storage canister id
 * @param principal User's principal address
 * @param offset Start of data
 * @param limit Length of data
 * @param poolIds An array of pool ids, empty array will return all pools data
 * @returns
 */
export function useInfoUserTransactions(storageId, principal, offset, limit, poolIds) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!storageId || !principal || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getInfoUserTransactions(storageId, principal, offset, limit, poolIds !== null && poolIds !== void 0 ? poolIds : []);
    }), [storageId, principal, offset, limit, JSON.stringify(poolIds)]));
}
// # sourceMappingURL=userStorage.js.map