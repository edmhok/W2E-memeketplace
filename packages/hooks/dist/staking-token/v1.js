import { useCallback } from "react";
import { resultFormat, isAvailablePageArgs, isPrincipal } from "@w2e/utils";
import { v1StakingTokenStorage, v1StakingToken } from "@w2e/actor";
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
/* token pool */
export function getV1StakingTokenPool(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v1StakingToken(canisterId)).getPoolInfo()).data;
    });
}
export function useV1StakingTokenPool(canisterId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getV1StakingTokenPool(canisterId);
    }), [canisterId]), reload);
}
export function getV1StakingTokenUserInfo(canisterId, account) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v1StakingToken(canisterId)).getUserInfo(isPrincipal(account) ? { principal: account } : { address: account })).data;
    });
}
export function useV1StakingTokenUserInfo(canisterId, account, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !account)
            return undefined;
        return yield getV1StakingTokenUserInfo(canisterId, account);
    }), [canisterId, account]), reload);
}
export function getV1StakingTokenCycles(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v1StakingToken(canisterId)).cycleBalance()).data;
    });
}
export function useV1StakingTokenCycles(canisterId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getV1StakingTokenCycles(canisterId);
    }), [canisterId]), reload);
}
export function stakingV1TokenDeposit(canisterId, identity, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v1StakingToken(canisterId, identity)).deposit(amount));
    });
}
export function stakingV1TokenHarvest(canisterId, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v1StakingToken(canisterId, identity)).harvest());
    });
}
export function stakingV1TokenWithdraw(canisterId, identity, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v1StakingToken(canisterId, identity)).withdraw(amount));
    });
}
/*  storage */
export function getV1StakingTokenTransactions(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v1StakingTokenStorage(canisterId)).getTrans(BigInt(offset), BigInt(limit))).data;
    });
}
export function useV1StakingTokenTransactions(canisterId, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getV1StakingTokenTransactions(canisterId, offset, limit);
    }), [canisterId, offset, limit]), reload);
}
export function getV1StakingTokenClaimTransactions(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v1StakingTokenStorage(canisterId)).getRewardTrans(BigInt(offset), BigInt(limit))).data;
    });
}
export function useV1StakingTokenClaimTransactions(canisterId, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getV1StakingTokenClaimTransactions(canisterId, offset, limit);
    }), [canisterId, offset, limit]), reload);
}
// # sourceMappingURL=v1.js.map