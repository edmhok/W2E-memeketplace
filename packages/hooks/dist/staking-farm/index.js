import { useCallback } from "react";
import { resultFormat, isAvailablePageArgs } from "@w2e/utils";
import { Principal } from "@dfinity/principal";
import { v3Farm, v3FarmController } from "@w2e/actor";
import { useCallsData, usePaginationAllData } from "../useCallData";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function getV3UserFarmInfo(canisterId, principal) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v3Farm(canisterId)).getFarmInfo(principal)).data;
    });
}
export function useV3UserFarmInfo(canisterId, principal, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!principal || !canisterId)
            return undefined;
        return yield getV3UserFarmInfo(canisterId, principal);
    }), [principal, canisterId]), reload);
}
export function getFarmUserPositions(canisterId, principal, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v3Farm(canisterId)).getUserPositions(Principal.from(principal), BigInt(offset), BigInt(limit))).data;
    });
}
export function useFarmUserPositions(canisterId, principal, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !principal || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getFarmUserPositions(canisterId, principal, offset, limit);
    }), [canisterId, principal, offset, limit]), reload);
}
export function useFarmUserAllPositions(canisterId, user, reload) {
    const callback = useCallback((offset, limit) => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !user)
            return undefined;
        return yield getFarmUserPositions(canisterId, user, offset, limit);
    }), [canisterId, user]);
    return usePaginationAllData(callback, 300, reload);
}
export function getFarmTVL(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v3Farm(canisterId)).getTVL()).data;
    });
}
export function useFarmTVL(canisterId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getFarmTVL(canisterId);
    }), [canisterId]), reload);
}
export function getFarmUserTVL(canisterId, principal) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v3Farm(canisterId)).getUserTVL(Principal.fromText(principal))).data;
    });
}
export function useFarmUserTVL(canisterId, principal, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !principal)
            return undefined;
        return yield getFarmUserTVL(canisterId, principal);
    }), [canisterId, principal]), reload);
}
export function useV3FarmRewardMeta(canisterId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return resultFormat(yield (yield v3Farm(canisterId)).getRewardMeta()).data;
    }), [canisterId]), reload);
}
export function getV3UserFarmRewardInfo(canisterId, positionIds) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v3Farm(canisterId)).getRewardInfo(positionIds)).data;
    });
}
export function useV3UserFarmRewardInfo(canisterId, positionIds, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !(positionIds === null || positionIds === void 0 ? void 0 : positionIds.length))
            return undefined;
        return yield getV3UserFarmRewardInfo(canisterId, positionIds);
    }), [canisterId, positionIds]), reload);
}
export function createV3Farm(identity, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v3FarmController(identity)).create(args.rewardToken, args.rewardAmount, args.rewardPool, args.pool, args.startTime, args.endTime, args.secondPerCycle, args.token0AmountLimit, args.token1AmountLimit, args.priceInsideLimit));
    });
}
export function getV3StakingFarms(offset, limit, state) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v3FarmController()).getFarmList(BigInt(offset), BigInt(limit), state)).data;
    });
}
export function useV3StakingFarms(offset, limit, state, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit) || !state)
            return undefined;
        return yield getV3StakingFarms(offset, limit, state);
    }), [offset, limit, state]), reload);
}
export function getV3FarmMetadata(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v3Farm(canisterId)).getRewardMeta()).data;
    });
}
export function useV3FarmMetadata(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getV3FarmMetadata(canisterId);
    }), [canisterId]));
}
/* v3 farm storage */
export function getV3FarmStakeRecords(canisterId, offset, limit, from) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v3Farm(canisterId)).getStakeRecord(BigInt(offset), BigInt(limit), from)).data;
    });
}
export function useV3FarmStakeRecords(storageId, offset, limit, from = "", reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit) || !storageId)
            return undefined;
        return yield getV3FarmStakeRecords(storageId, offset, limit, from);
    }), [offset, limit, from, storageId]), reload);
}
export function getV3FarmDistributeRecords(canisterId, offset, limit, owner) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield v3Farm(canisterId)).getDistributeRecord(BigInt(offset), BigInt(limit), owner)).data;
    });
}
export function useV3FarmDistributeRecords(storageId, offset, limit, owner = "", reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit) || !storageId)
            return undefined;
        return yield getV3FarmDistributeRecords(storageId, offset, limit, owner);
    }), [offset, limit, owner, storageId]), reload);
}
/* v3 farm storage */
// # sourceMappingURL=index.js.map