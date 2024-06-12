import { useCallback } from "react";
import { NFTCanister, NFTTradeCanister, NFTCanisterController, NFTTradeStat, NFT_V1, } from "@w2e/actor";
import { resultFormat, isAvailablePageArgs, isPrincipal, availableArgsNull, } from "@w2e/utils";
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
// ----------------> NFT Canisters
export function getNFTCanisters(offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield NFTCanisterController()).findCanister(BigInt(offset), BigInt(limit))).data;
    });
}
export function useNFTCanisters(offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getNFTCanisters(offset, limit);
    }), [offset, limit]));
}
export function getUserNFTCanisters(account, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield NFTCanisterController()).findUserCanister(account, BigInt(offset), BigInt(limit))).data;
    });
}
export function useUserNFTCanisters(account, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!account || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getUserNFTCanisters(account, offset, limit);
    }), [offset, limit]));
}
export function getV1NFTCanisterMetadata(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield NFTCanisterController()).canisterInfo(canisterId)).data;
    });
}
export function useV1NFTCanisterMetadata(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getV1NFTCanisterMetadata(canisterId);
    }), [canisterId]), !!canisterId);
}
export function getNFTCanisterMetadata(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield NFTCanister(canisterId)).canisterInfo()).data;
    });
}
export function useNFTCanisterMetadata(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getNFTCanisterMetadata(canisterId);
    }), [canisterId]));
}
export function getNFTTransactions(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, tokenIdentifier, offset, limit, }) {
        return resultFormat(yield (yield NFTCanister(canisterId)).findTxRecord(tokenIdentifier, BigInt(offset), BigInt(limit))).data;
    });
}
export function useNFTTransactions({ canisterId, tokenIdentifier, offset, limit, reload, }) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId ||
            !tokenIdentifier ||
            !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getNFTTransactions({
            canisterId,
            tokenIdentifier,
            offset,
            limit,
        });
    }), [canisterId, offset, limit, tokenIdentifier]), reload);
}
export function getUserNFTs(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, offset, limit, account, }) {
        return resultFormat(yield (yield NFTCanister(canisterId)).findTokenList(isPrincipal(account) ? { principal: account } : { address: account }, BigInt(offset), BigInt(limit))).data;
    });
}
export function useUserNFTs({ canisterId, offset, limit, account, reload, }) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!account || (!canisterId && !isAvailablePageArgs(offset, limit)))
            return undefined;
        return yield getUserNFTs({
            canisterId,
            offset,
            limit,
            account,
        });
    }), [canisterId, account, offset, limit]), reload);
}
export function getNFTs(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, offset, limit, }) {
        return resultFormat(yield (yield NFTCanister(canisterId)).findTokenMarket(["all"], BigInt(offset), BigInt(limit))).data;
    });
}
export function useNFTs({ canisterId, offset, limit, reload }) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getNFTs({ canisterId, offset, limit });
    }), [canisterId, offset, limit]), reload);
}
export function getNFTsStat(offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield NFTTradeStat()).findCanisterStat(BigInt(offset), BigInt(limit))).data;
    });
}
export function useNFTsStat(offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getNFTsStat(offset, limit);
    }), [offset, limit]), reload);
}
export function getNFTStat(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield NFTCanister(canisterId)).getNftStat()).data;
    });
}
export function useNFTStat(canisterId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getNFTStat(canisterId);
    }), [canisterId]), reload);
}
export function getV1NFTStat(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        const _result = yield (yield NFT_V1(canisterId)).getNftStat();
        const result = [BigInt(0), _result.holderAmount];
        return resultFormat(result).data;
    });
}
export function useV1NFTStat(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getV1NFTStat(canisterId);
    }), [canisterId]));
}
export function getNFTMetadata(canisterId, tokenId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield NFTCanister(canisterId)).icsMetadata(Number(tokenId))).data;
    });
}
export function useNFTMetadata(canisterId, tokenId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || (tokenId !== 0 && !tokenId))
            return undefined;
        return yield getNFTMetadata(canisterId, tokenId);
    }), [canisterId, tokenId]), reload);
}
export function getNFTTradeTransactions(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, name, tokenIndex, offset, limit, sort, desc, }) {
        return resultFormat(yield (yield NFTTradeCanister()).findTxPage(availableArgsNull(canisterId), availableArgsNull(name), availableArgsNull(Number(tokenIndex)), BigInt(offset), BigInt(limit), sort, desc)).data;
    });
}
export function useNFTTradeTransactions({ canisterId, name, tokenIndex, offset, limit, sort, desc, reload, }) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getNFTTradeTransactions({
            canisterId,
            offset,
            limit,
            sort,
            desc,
            tokenIndex,
            name,
        });
    }), [canisterId, name, tokenIndex, limit, offset, sort, desc]), reload);
}
export function getUserNFTTradeTransactions(_a) {
    return __awaiter(this, arguments, void 0, function* ({ account, canisterId, name, offset, limit, sort, desc, }) {
        return resultFormat(yield (yield NFTTradeCanister()).findUserTxPage(account, availableArgsNull(canisterId), availableArgsNull(name), BigInt(offset), BigInt(limit), sort, desc)).data;
    });
}
export function useUserNFTTradeTransactions({ account, canisterId, name, offset, limit, sort, desc, reload, }) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!account || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getUserNFTTradeTransactions({
            account,
            canisterId,
            offset,
            limit,
            sort,
            desc,
            name,
        });
    }), [account, canisterId, name, limit, offset, sort, desc]), reload);
}
export function getTradeOrder(canisterId, tokenIndex) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield NFTTradeCanister()).getOrder(canisterId, tokenIndex)).data;
    });
}
export function useTradeOrder(canisterId, tokenIndex, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || (!tokenIndex && tokenIndex !== 0))
            return undefined;
        return yield getTradeOrder(canisterId, tokenIndex);
    }), [canisterId, tokenIndex]), reload);
}
export function getNFTTradeData() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield NFTTradeCanister()).getStat()).data;
    });
}
export function useNFTTradeData() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getNFTTradeData();
    }), []));
}
// ----------------> NFT Trade
// # sourceMappingURL=index.js.map