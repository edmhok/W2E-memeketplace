import { useCallback } from "react";
import { resultFormat } from "@w2e/utils";
import { globalIndex } from "@w2e/actor";
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
// Global
export function getAllPoolsTVL() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalIndex()).getAllPoolTvl()).data;
    });
}
export function useAllPoolsTVL() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getAllPoolsTVL();
    }), []));
}
export function getAllTokensTVL() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalIndex()).getAllTokenTvl()).data;
    });
}
export function useAllTokensTVL() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getAllTokensTVL();
    }), []));
}
export function getSwapProtocolData() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalIndex()).getProtocolData()).data;
    });
}
export function useSwapProtocolData() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getSwapProtocolData();
    }), []));
}
export function getPoolLatestTVL(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalIndex()).getPoolLastTvl(id)).data;
    });
}
export function usePoolLatestTVL(id) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!id)
            return undefined;
        return yield getPoolLatestTVL(id);
    }), [id]));
}
export function getTokenLatestTVL(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalIndex()).getTokenLastTvl(id)).data;
    });
}
export function useTokenLatestTVL(id) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!id)
            return undefined;
        return yield getTokenLatestTVL(id);
    }), [id]));
}
export function getGlobalLatestStorageCanister() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalIndex()).globalLastStorageCanister()).data;
    });
}
export function useGlobalLatestStorageCanister() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getGlobalLatestStorageCanister();
    }), []));
}
export function getGlobalStorageCanister() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalIndex()).globalStorageCanister()).data;
    });
}
export function useGlobalStorageCanister() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getGlobalStorageCanister();
    }), []));
}
export function getTvlLatestStorageCanister() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalIndex()).tvlLastStorageCanister()).data;
    });
}
export function useTvlLatestStorageCanister() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getTvlLatestStorageCanister();
    }), []));
}
export function getTvlStorageCanister() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalIndex()).tvlStorageCanister()).data;
    });
}
export function useTvlStorageCanister() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getTvlStorageCanister();
    }), []));
}
// # sourceMappingURL=global.js.map