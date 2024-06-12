import { useCallback } from "react";
import { resultFormat, isAvailablePageArgs, availableArgsNull, isPrincipal, } from "@w2e/utils";
import { stakingTokenStorage, stakingTokenController, stakingToken, } from "@w2e/actor";
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
/* token controller */
export function createStakingTokenPool(args, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingTokenController(identity)).createTokenPool(args));
    });
}
export function getStakingTokenPools(state, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingTokenController()).findTokenPoolPage(availableArgsNull(state), BigInt(offset), BigInt(limit))).data;
    });
}
export function useStakingTokenPools(state, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getStakingTokenPools(state, offset, limit);
    }), [offset, limit, state]));
}
export function getStakingTokenGlobalData() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingTokenController()).getTokenPoolsGlobalData()).data;
    });
}
export function useStakingTokenGlobalData(reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getStakingTokenGlobalData();
    }), []), reload);
}
export function getStakingPoolFromController(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingTokenController()).getPoolInfo(Principal.fromText(canisterId))).data;
    });
}
export function useStakingPoolInfoFromController(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getStakingPoolFromController(canisterId);
    }), [canisterId]));
}
/* token pool */
export function getStakingTokenPool(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingToken(canisterId)).getPoolInfo()).data;
    });
}
export function useStakingTokenPool(canisterId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getStakingTokenPool(canisterId);
    }), [canisterId]), reload);
}
export function getStakingTokenUserInfo(canisterId, account) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingToken(canisterId)).getUserInfo(isPrincipal(account) ? { principal: account } : { address: account })).data;
    });
}
export function useStakingTokenUserInfo(canisterId, account, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !account)
            return undefined;
        return yield getStakingTokenUserInfo(canisterId, account);
    }), [canisterId, account]), reload);
}
export function getStakingTokenAllUserInfo(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingToken(canisterId)).findAllUserInfo(BigInt(offset), BigInt(limit))).data;
    });
}
export function useStakingTokenAllUserInfo(canisterId, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getStakingTokenAllUserInfo(canisterId, offset, limit);
    }), [canisterId, offset, limit]), reload);
}
export function getStakingTokenCycles(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingToken(canisterId)).getCycleInfo()).data;
    });
}
export function useStakingTokenCycles(canisterId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getStakingTokenCycles(canisterId);
    }), [canisterId]), reload);
}
export function stakingTokenClaim(canisterId, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingToken(canisterId, identity)).claim());
    });
}
export function stakingTokenDeposit(canisterId, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingToken(canisterId, identity)).deposit());
    });
}
export function stakingTokenDepositFrom(canisterId, identity, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingToken(canisterId, identity)).depositFrom(amount));
    });
}
export function stakingTokenHarvest(canisterId, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingToken(canisterId, identity)).harvest());
    });
}
export function stakingTokenWithdraw(canisterId, identity, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingToken(canisterId, identity)).withdraw(amount));
    });
}
/*  storage */
export function getStakingTokenTransactions(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingTokenStorage(canisterId)).getTrans(BigInt(offset), BigInt(limit))).data;
    });
}
export function useStakingTokenTransactions(canisterId, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getStakingTokenTransactions(canisterId, offset, limit);
    }), [canisterId, offset, limit]), reload);
}
export function getStakingTokenClaimTransactions(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield stakingTokenStorage(canisterId)).getRewardTrans(BigInt(offset), BigInt(limit))).data;
    });
}
export function useStakingTokenClaimTransactions(canisterId, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getStakingTokenClaimTransactions(canisterId, offset, limit);
    }), [canisterId, offset, limit]), reload);
}
// # sourceMappingURL=index.js.map