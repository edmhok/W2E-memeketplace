import { useCallback } from "react";
import { swapFactory, swapPool, swapNFT, swapPosition } from "@w2e/actor";
import { resultFormat, isAvailablePageArgs } from "@w2e/utils";
import { Principal } from "@dfinity/principal";
import { useCallsData, getPaginationAllData, usePaginationAllData } from "../useCallData";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function createSwapPool(identity, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapFactory(identity)).createPool(args));
    });
}
export function getSwapPool(args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapFactory()).getPool(args)).data;
    });
}
export function useSwapPool(args) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!args)
            return undefined;
        return yield getSwapPool(args);
    }), [args]));
}
export function getSwapPools() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapFactory()).getPools()).data;
    });
}
export function useSwapPools() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getSwapPools();
    }), []));
}
export function getSwapPoolMetadata(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).metadata()).data;
    });
}
export function useSwapPoolMetadata(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getSwapPoolMetadata(canisterId);
    }), [canisterId]));
}
export function getSwapPoolTicks(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).getTickInfos(BigInt(offset), BigInt(limit))).data;
    });
}
export function getSwapPoolAllTicks(poolId_1) {
    return __awaiter(this, arguments, void 0, function* (poolId, limit = 500) {
        const callback = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield getSwapPoolTicks(poolId, offset, limit);
        });
        return yield getPaginationAllData(callback, limit);
    });
}
export function useLiquidityTicks(canisterId, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getSwapPoolAllTicks(canisterId, limit);
    }), [canisterId, limit]));
}
export function deposit(identity, canisterId, token, amount, fee) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId, identity)).deposit({ token, amount, fee }));
    });
}
export function depositFrom(identity, canisterId, token, amount, fee) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId, identity)).depositFrom({ token, amount, fee }));
    });
}
export function mint(canisterId, identity, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId, identity)).mint(args));
    });
}
export function increaseLiquidity(identity, poolId, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(poolId, identity)).increaseLiquidity(args));
    });
}
export function decreaseLiquidity(identity, poolId, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(poolId, identity)).decreaseLiquidity(args));
    });
}
export function withdraw(identity, poolId, token, fee, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(poolId, identity)).withdraw({ token, fee, amount }));
    });
}
export function quote(poolId, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(poolId)).quote(args)).data;
    });
}
export function swap(poolId, identity, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(poolId, identity)).swap(args));
    });
}
export function collect(poolId, identity, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(poolId, identity)).claim(args));
    });
}
export function getUserUnusedBalance(canisterId, user) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).getUserUnusedBalance(user)).data;
    });
}
export function useUserUnusedBalance(canisterId, user) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !user)
            return undefined;
        return yield getUserUnusedBalance(canisterId, user);
    }), [canisterId, user]));
}
export function getSwapPosition(canisterId, tokenId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).getUserPosition(tokenId)).data;
    });
}
export function useSwapPosition(canisterId, positionId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || (!positionId && positionId !== BigInt(0)))
            return undefined;
        return yield getSwapPosition(canisterId, positionId);
    }), [canisterId, positionId]));
}
export function getPositionFee(canisterId, positionId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).refreshIncome(positionId)).data;
    });
}
export function usePositionFee(canisterId, positionId, refresh) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || (!positionId && positionId === BigInt(0)))
            return undefined;
        return yield getPositionFee(canisterId, positionId);
    }), [canisterId, positionId]), refresh);
}
export function getSwapPoolAllBalance(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).allTokenBalance(BigInt(offset), BigInt(limit))).data;
    });
}
export function useSwapPoolAllBalance(canisterId, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getSwapPoolAllBalance(canisterId, offset, limit);
    }), [canisterId, offset, limit]));
}
export function _getSwapPoolAllBalance(poolId_1) {
    return __awaiter(this, arguments, void 0, function* (poolId, limit = 1000) {
        const callback = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield getSwapPoolAllBalance(poolId, offset, limit);
        });
        return yield getPaginationAllData(callback, limit);
    });
}
export function _useSwapPoolAllBalance(canisterId, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield _getSwapPoolAllBalance(canisterId, limit);
    }), [canisterId, limit]));
}
/*   swap nft */
export function getUserSwapNFTs(principal, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapNFT()).findTokenList({ principal: Principal.fromText(principal) }, BigInt(offset), BigInt(limit))).data;
    });
}
export function useUserSwapNFTs(principal, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!principal || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getUserSwapNFTs(principal, offset, limit);
    }), [principal, offset, limit]));
}
export function useUserAllNFTs(principal) {
    const callback = useCallback((offset, limit) => __awaiter(this, void 0, void 0, function* () {
        if (!principal)
            return undefined;
        return yield getUserSwapNFTs(principal, offset, limit);
    }), [principal]);
    return usePaginationAllData(callback, 2000);
}
export function getSwapNFTTokenURI(tokenId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = resultFormat(yield (yield swapNFT()).tokenURI(BigInt(tokenId))).data;
        return JSON.parse(data !== null && data !== void 0 ? data : "");
    });
}
export function useSwapNFTTokenURI(tokenId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (tokenId === undefined)
            return undefined;
        return yield getSwapNFTTokenURI(tokenId);
    }), [tokenId]));
}
export function getPositionNFTId(poolId, positionId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapNFT()).getTokenId(poolId, positionId)).data;
    });
}
export function usePositionNFTId(poolId, positionId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (poolId === undefined || positionId === undefined)
            return undefined;
        return yield getPositionNFTId(poolId, positionId);
    }), [poolId, positionId]));
}
/*   swap nft */
/*  swap records */
export function getSwapUserPositionWithAmount(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).getUserPositionWithTokenAmount(BigInt(offset), BigInt(limit))).data;
    });
}
export function useSwapUserPositionWithAmount(canisterId, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getSwapUserPositionWithAmount(canisterId, offset, limit);
    }), [canisterId, offset, limit]));
}
export function _getSwapUserPositionsWithAmount(poolId_1) {
    return __awaiter(this, arguments, void 0, function* (poolId, limit = 1000) {
        const callback = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield getSwapUserPositionWithAmount(poolId, offset, limit);
        });
        return yield getPaginationAllData(callback, limit);
    });
}
export function _useSwapUserPositionsWithAmount(canisterId, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield _getSwapUserPositionsWithAmount(canisterId, limit);
    }), [canisterId, limit]));
}
export function getSwapPositions(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).getUserPositions(BigInt(offset), BigInt(limit))).data;
    });
}
export function useSwapPositions(canisterId, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getSwapPositions(canisterId, offset, limit);
    }), [canisterId, offset, limit]));
}
export function getSwapAllUserPositions(poolId_1) {
    return __awaiter(this, arguments, void 0, function* (poolId, limit = 2000) {
        const callback = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield getSwapPositions(poolId, offset, limit);
        });
        return yield getPaginationAllData(callback, limit);
    });
}
export function useSwapAllUserPositions(canisterId, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getSwapAllUserPositions(canisterId, limit);
    }), [canisterId, limit]));
}
export function getSwapPoolPositions(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).getPositions(BigInt(offset), BigInt(limit))).data;
    });
}
export function useSwapPoolPositions(canisterId, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getSwapPoolPositions(canisterId, offset, limit);
    }), [canisterId, offset, limit]));
}
export function getSwapPoolAllPositions(poolId_1) {
    return __awaiter(this, arguments, void 0, function* (poolId, limit = 1000) {
        const callback = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield getSwapPoolPositions(poolId, offset, limit);
        });
        return yield getPaginationAllData(callback, limit);
    });
}
export function useSwapPoolAllPositions(canisterId, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getSwapPoolAllPositions(canisterId, limit);
    }), [canisterId, limit]));
}
export function getSwapTicks(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).getTicks(BigInt(offset), BigInt(limit))).data;
    });
}
export function getSwapAllTicks(canisterId_1) {
    return __awaiter(this, arguments, void 0, function* (canisterId, limit = 1000) {
        const callback = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield getSwapTicks(canisterId, offset, limit);
        });
        return yield getPaginationAllData(callback, limit);
    });
}
export function useSwapAllTicks(canisterId, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getSwapAllTicks(canisterId, limit);
    }), [canisterId, limit]));
}
export function getSwapCyclesInfo(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).getCycleInfo()).data;
    });
}
export function useSwapCyclesInfo(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getSwapCyclesInfo(canisterId);
    }), [canisterId]));
}
export function getSwapTokenAmountState(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(canisterId)).getTokenAmountState()).data;
    });
}
export function useSwapTokenAmountState(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getSwapTokenAmountState(canisterId);
    }), [canisterId]));
}
/*  swap records */
/* swap positions */
export function updateUserPositionPoolId(poolId, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPosition(identity)).addPoolId(poolId));
    });
}
export function getUserPositionsPools(account) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPosition()).getUserPools(account)).data;
    });
}
export function useUserPositionPools(account) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!account)
            return undefined;
        return yield getUserPositionsPools(account);
    }), [account]));
}
export function getSwapUserPositions(poolId, principal) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(poolId)).getUserPositionsByPrincipal(Principal.fromText(principal))).data;
    });
}
export function useSwapUserPositions(poolId, principal) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!principal || !poolId)
            return undefined;
        return yield getSwapUserPositions(poolId, principal);
    }), [principal, poolId]));
}
export function approvePosition(identity, poolId, spender, index) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(poolId, identity)).approvePosition(Principal.fromText(spender), BigInt(index)));
    });
}
export function getSwapPositionOwner(poolId, positionIndex) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield swapPool(poolId)).getUserByPositionId(BigInt(positionIndex))).data;
    });
}
export function useSwapPositionOwner(poolId, positionIndex) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!poolId || positionIndex === undefined)
            return undefined;
        return yield getSwapPositionOwner(poolId, positionIndex);
    }), [positionIndex, poolId]));
}
/* swap positions */
// # sourceMappingURL=calls.js.map