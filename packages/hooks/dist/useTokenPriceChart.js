import { useMemo } from "react";
import { useInfoTokenPriceChart, useInfoTokenStorageIds } from "./info";
export function useTokenPriceChart(canisterId) {
    const { result: storageIds } = useInfoTokenStorageIds(canisterId);
    const { result: priceChartData, loading } = useInfoTokenPriceChart(storageIds ? storageIds[0] : undefined, canisterId, 0, 24 * 60 * 60, 1000);
    const priceChart = useMemo(() => {
        return priceChartData === null || priceChartData === void 0 ? void 0 : priceChartData.map((data) => (Object.assign(Object.assign({}, data), { time: Number(data.timestamp), id: undefined }))).filter((ele) => ele.time !== 0).sort((a, b) => {
            if (a.time < b.time)
                return -1;
            if (a.time > b.time)
                return 1;
            return 0;
        }).map((d, index) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            return Object.assign(Object.assign({}, d), { open: d.timestamp.toString() === "1686787200" ? priceChartData[index - 1].close : d.open, close: d.timestamp.toString() === "1686787200" || d.timestamp.toString() === "1686873600"
                    ? (_b = (_a = priceChartData[index + 1]) === null || _a === void 0 ? void 0 : _a.open) !== null && _b !== void 0 ? _b : d.close
                    : d.close, low: d.timestamp.toString() === "1686787200"
                    ? priceChartData[index - 1].close > ((_d = (_c = priceChartData[index + 1]) === null || _c === void 0 ? void 0 : _c.open) !== null && _d !== void 0 ? _d : 0)
                        ? (_h = (_f = (_e = priceChartData[index + 1]) === null || _e === void 0 ? void 0 : _e.open) !== null && _f !== void 0 ? _f : (_g = priceChartData[index - 1]) === null || _g === void 0 ? void 0 : _g.close) !== null && _h !== void 0 ? _h : 0
                        : priceChartData[index - 1].close
                    : d.timestamp.toString() === "1686873600"
                        ? priceChartData[index - 2].close > ((_k = (_j = priceChartData[index + 1]) === null || _j === void 0 ? void 0 : _j.open) !== null && _k !== void 0 ? _k : 0)
                            ? (_m = (_l = priceChartData[index + 1]) === null || _l === void 0 ? void 0 : _l.open) !== null && _m !== void 0 ? _m : 0
                            : (_p = (_o = priceChartData[index - 2]) === null || _o === void 0 ? void 0 : _o.close) !== null && _p !== void 0 ? _p : 0
                        : d.low, timestamp: undefined });
        });
    }, [priceChartData]);
    return useMemo(() => ({ loading, priceChartData: priceChart }), [priceChart, loading]);
}
//# sourceMappingURL=useTokenPriceChart.js.map