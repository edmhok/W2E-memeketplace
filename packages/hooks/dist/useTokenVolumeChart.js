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
import { getInfoTokenChartData, useInfoTokenStorageIds } from "./info";
import { getLimitedInfinityCall } from "./useLimitedInfinityCall";
export function useTokenVolChart(canisterId) {
    const [loading, setLoading] = useState(false);
    const { result: storageIds, loading: storageLoading } = useInfoTokenStorageIds(canisterId);
    const [chartData, setChartData] = useState(undefined);
    useEffect(() => {
        function call() {
            return __awaiter(this, void 0, void 0, function* () {
                if (storageIds && storageIds.length > 0 && canisterId) {
                    setChartData(undefined);
                    setLoading(true);
                    const chartData = (yield Promise.all(storageIds.map((storageId) => __awaiter(this, void 0, void 0, function* () {
                        const callback = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
                            return yield getInfoTokenChartData(storageId, canisterId, offset, limit);
                        });
                        return yield getLimitedInfinityCall(callback, 1400, 4);
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
    }, [canisterId, storageIds]);
    return useMemo(() => ({
        result: chartData,
        loading: loading || storageLoading,
    }), [chartData, loading, storageLoading]);
}
//# sourceMappingURL=useTokenVolumeChart.js.map