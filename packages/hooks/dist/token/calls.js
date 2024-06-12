import { useCallback } from "react";
import { isPrincipal, isAvailablePageArgs } from "@w2e/utils";
import { tokenAdapter } from "@w2e/token-adapter";
import { Principal } from "@dfinity/principal";
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

export function getTokenTotalHolder(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield tokenAdapter.totalHolders({
            canisterId,
        })).data;
    });
}
export function useTokenTotalHolder(canisterId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getTokenTotalHolder(canisterId);
    }), [canisterId]), reload);
}
export function getTokenHolders(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield tokenAdapter.holders({
            canisterId,
            params: {
                offset: BigInt(offset),
                limit: BigInt(limit),
            },
        })).data;
    });
}
export function useTokenHolders(canisterId, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getTokenHolders(canisterId, offset, limit);
    }), [offset, limit, canisterId]));
}
export function getTokenTransaction(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, account, offset, limit, capId, witness, }) {
        return (yield tokenAdapter.transactions({
            canisterId,
            params: {
                user: account ? (isPrincipal(account) ? { principal: account } : { address: account }) : undefined,
                offset,
                limit,
                index: undefined,
                hash: undefined,
                capId,
                witness,
            },
        })).data;
    });
}
export function useTokenTransactions({ canisterId, account, offset, limit, capId, witness, }) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return getTokenTransaction({
            canisterId,
            account,
            offset,
            limit,
            capId,
            witness,
        });
    }), [offset, limit, canisterId, account, capId, witness]));
}
export function getTokenSupply(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield tokenAdapter.supply({ canisterId })).data;
    });
}
export function useTokenSupply(canisterId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getTokenSupply(canisterId);
    }), [canisterId]), reload);
}
export function getTokenMetadata(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield tokenAdapter.metadata({ canisterId })).data;
    });
}
export function useTokenMetadata(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () { return yield getTokenMetadata(canisterId); }), [canisterId]), !!canisterId);
}
export function allowance(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, account, spenderCanisterId, subaccount }) {
        return (yield tokenAdapter.allowance({
            canisterId,
            params: {
                spender: Principal.fromText(spenderCanisterId),
                owner: isPrincipal(account) ? { principal: account } : { address: account },
                subaccount,
            },
        })).data;
    });
}
export function approve(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, spenderCanisterId, value, account, subaccount }) {
        return tokenAdapter.approve({
            canisterId,
            identity,
            params: {
                spender: Principal.fromText(spenderCanisterId),
                allowance: BigInt(value),
                subaccount,
                account,
            },
        });
    });
}
export function useApproveCallback() {
    return useCallback((_a) => __awaiter(this, [_a], void 0, function* ({ canisterId, identity, spenderCanisterId, value, account }) {
        if (!account)
            return yield Promise.resolve({
                status: "err",
                message: "Invalid account",
            });
        const allowedBalance = yield allowance({
            canisterId,
            account,
            spenderCanisterId,
        });
        if (!allowedBalance || allowedBalance === BigInt(0) || BigInt(value !== null && value !== void 0 ? value : 0) > allowedBalance) {
            return yield approve({
                canisterId,
                identity,
                spenderCanisterId,
                value,
                account,
            });
        }
        return yield Promise.resolve({
            status: "ok",
            data: true,
            message: "You have approved successfully",
        });
    }), []);
}
export function getTokenMintingAccount(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield tokenAdapter.getMintingAccount({ canisterId })).data;
    });
}
export function useTokenMintingAccount(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getTokenMintingAccount(canisterId);
    }), [canisterId]));
}
// # sourceMappingURL=calls.js.map