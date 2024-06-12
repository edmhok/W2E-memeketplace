var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useEffect, useMemo } from "react";
import { useTvlStorageCanister, getTokenChartTvl } from "./info";
import { getLimitedInfinityCall } from "./useLimitedInfinityCall";
export function useTokenTvlChart(canisterId) {
    const [loading, setLoading] = useState(false);
    const { result: tvlStorageIds, loading: storageLoading } = useTvlStorageCanister();
    const [chartData, setChartData] = useState(undefined);
    useEffect(() => {
        function call() {
            return __awaiter(this, void 0, void 0, function* () {
                if (tvlStorageIds && tvlStorageIds.length > 0 && canisterId) {
                    setChartData(undefined);
                    setLoading(true);
                    const chartData = (yield Promise.all(tvlStorageIds.map((storageId) => __awaiter(this, void 0, void 0, function* () {
                        const callback = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
                            return yield getTokenChartTvl(storageId, canisterId, offset, limit);
                        });
                        return yield getLimitedInfinityCall(callback, 1000, 5);
                    }))))
                        .flat()
                        .sort((a, b) => {
                        if (a.timestamp < b.timestamp)
                            return -1;
                        if (a.timestamp > b.timestamp)
                            return 1;
                        return 0;
                    });
                    setChartData(chartData);
                    setLoading(false);
                }
            });
        }
        call();
    }, [canisterId, tvlStorageIds]);
    return useMemo(() => ({
        loading: loading || storageLoading,
        result: chartData,
    }), [chartData, loading, storageLoading]);
}
//# sourceMappingURL=useTokenTvlChart.js.map