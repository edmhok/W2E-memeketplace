var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useCallback } from "react";
import { isAvailablePageArgs, resultFormat } from "@w2e/utils";
import { useCallsData } from "../useCallData";
import { globalTVL } from "@w2e/actor";
export function getPoolChartTvl(id, pool, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalTVL(id)).getPoolChartTvl(pool, BigInt(offset), BigInt(limit))).data;
    });
}
export function usePoolChartTvl(id, pool, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!id || !pool || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getPoolChartTvl(id, pool, offset, limit);
    }), [id, pool, offset, limit]));
}
export function getTokenChartTvl(id, token, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield globalTVL(id)).getTokenChartTvl(token, BigInt(offset), BigInt(limit))).data;
    });
}
export function useTokenChartTvl(id, token, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!id || !token || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getTokenChartTvl(id, token, offset, limit);
    }), [id, token, offset, limit]));
}
//# sourceMappingURL=globalTVL.js.map