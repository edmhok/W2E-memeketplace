import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { BigNumber, toSignificant, formatDollarAmount } from "@w2e/utils";
import { useTransformedVolumeData, useTokenTvlChart, useTokenVolChart, useTokenPriceChart } from "@w2e/hooks";
import { VolumeWindow } from "@w2e/constants";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { LineChartAlt } from "../LineChart/alt";
import { BarChartAlt } from "../BarChart/alt";
import { CandleChart } from "../CandleChart/index";
import { ChartDateButtons } from "./ChartDateButton";
import { ChartToggle, ChartView } from "./Button";
import { SwapAnalyticLoading } from "./Loading";
import { MainCard } from "../MainCard";
// format dayjs with the libraries that we need
dayjs.extend(utc);
dayjs.extend(weekOfYear);
export const chartViews = [
    { label: `Volume`, key: ChartView.VOL },
    { label: `TVL`, key: ChartView.TVL },
    { label: `Price`, key: ChartView.PRICE },
];
function volumeDataFormatter(data) {
    const oldData = [...data];
    const newData = [];
    if (data.length === 0)
        return [];
    // Fill the empty data between origin data
    for (let i = 0; i < oldData.length; i++) {
        const curr = oldData[i];
        const next = oldData[i + 1];
        if (next) {
            const diff = next.timestamp - curr.timestamp;
            const days = parseInt((Number(diff) / (3600 * 24)).toString());
            if (days === 1) {
                newData.push(curr);
            }
            else {
                // push curr data
                newData.push(curr);
                for (let i = 1; i < days; i++) {
                    newData.push({
                        id: BigInt(0),
                        volumeUSD: 0,
                        timestamp: BigInt(Number(curr.timestamp) + 24 * 3600 * i),
                        txCount: BigInt(0),
                    });
                }
            }
        }
        else {
            newData.push(curr);
        }
    }
    const now = new Date().getTime();
    const endTime = oldData[oldData.length - 1].timestamp;
    const days = parseInt(((now - Number(endTime) * 1000) / (1000 * 3600 * 24)).toString());
    // Fill the latest data to today
    for (let i = 1; i <= days; i++) {
        newData.push({
            id: BigInt(0),
            volumeUSD: 0,
            timestamp: BigInt(Number(endTime) + 24 * 3600 * i),
            txCount: BigInt(0),
        });
    }
    return newData;
}
export function TokenCharts({ canisterId, volume, borderRadius, priceToggles, background = 2 }) {
    var _a, _b, _c;
    const [priceChartTokenId, setPriceChartTokenId] = useState(undefined);
    const { result: chartData } = useTokenVolChart(canisterId);
    const [chartView, setChartView] = useState(ChartView.PRICE);
    const [valueLabel, setValueLabel] = useState();
    const [latestValue, setLatestValue] = useState();
    const [priceData, setPriceData] = useState(null);
    const [volumeWindow, setVolumeWindow] = useState(VolumeWindow.daily);
    const { priceChartData: _priceChartData, loading: priceChartLoading } = useTokenPriceChart(priceChartTokenId !== null && priceChartTokenId !== void 0 ? priceChartTokenId : canisterId);
    const priceChartData = useMemo(() => {
        if (!_priceChartData)
            return undefined;
        // SNS1
        if (canisterId === "zfcdd-tqaaa-aaaaq-aaaga-cai") {
            return _priceChartData.filter((e) => {
                const time = new Date("2024-03-12").getTime();
                return !new BigNumber(e.time).multipliedBy(1000).isLessThan(time);
            });
        }
        return _priceChartData;
    }, [_priceChartData]);
    const { result: tvlChartData } = useTokenTvlChart(canisterId);
    const formattedTvlData = useMemo(() => {
        if (tvlChartData) {
            return tvlChartData.map((data) => {
                return {
                    time: dayjs(Number(data.timestamp * BigInt(1000))).format("YYYY-MM-DD HH:mm:ss"),
                    value: data.tvlUSD,
                };
            });
        }
        return [];
    }, [tvlChartData]);
    const volumeData = useMemo(() => {
        if (chartData) {
            return volumeDataFormatter(chartData.filter((ele) => ele.timestamp !== BigInt(0))).map((data) => {
                return {
                    date: Number(data.timestamp),
                    volumeUSD: data.volumeUSD,
                };
            });
        }
        return [];
    }, [chartData]);
    const dailyVolumeData = useMemo(() => {
        if (chartData) {
            return volumeData.map((ele) => {
                return {
                    time: dayjs(ele.date * 1000).format("YYYY-MM-DD HH:mm:ss"),
                    value: ele.volumeUSD,
                };
            });
        }
        return [];
    }, [volumeData]);
    const handlePriceHoverChange = (data) => {
        setPriceData(data);
    };
    const weeklyVolumeData = useTransformedVolumeData(volumeData, "week");
    const monthlyVolumeData = useTransformedVolumeData(volumeData, "month");
    const formattedVolumeData = useMemo(() => {
        if (volumeWindow === VolumeWindow.daily)
            return dailyVolumeData;
        if (volumeWindow === VolumeWindow.monthly)
            return monthlyVolumeData;
        return weeklyVolumeData;
    }, [weeklyVolumeData, monthlyVolumeData, dailyVolumeData, volumeWindow]);
    const handleTogglePrice = (id) => {
        setPriceChartTokenId(id);
    };
    useEffect(() => {
        setPriceChartTokenId(canisterId);
    }, [canisterId]);
    return (_jsxs(MainCard, { level: background, borderRadius: borderRadius, sx: {
            position: "relative",
        }, children: [_jsx(SwapAnalyticLoading, { loading: priceChartLoading }), _jsxs(Box, { sx: { height: "70px" }, children: [_jsxs(Typography, { color: "text.primary", fontSize: "24px", fontWeight: 500, sx: {
                            width: "100%",
                            display: "flex",
                            height: "30px",
                            gap: "0 12px",
                            alignItems: "center",
                            "@media(max-width: 640px)": {
                                flexDirection: "column",
                                gap: "4px 0",
                                alignItems: "flex-start",
                                height: "fit-content",
                            },
                        }, component: "div", children: [latestValue || latestValue === 0
                                ? chartView === ChartView.TRANSACTIONS
                                    ? latestValue
                                    : formatDollarAmount(latestValue, 2)
                                : chartView === ChartView.VOL
                                    ? volume
                                        ? formatDollarAmount(volume)
                                        : formatDollarAmount((_a = formattedVolumeData[formattedVolumeData.length - 1]) === null || _a === void 0 ? void 0 : _a.value)
                                    : chartView === ChartView.TVL
                                        ? formatDollarAmount((_b = formattedTvlData[formattedTvlData.length - 1]) === null || _b === void 0 ? void 0 : _b.value)
                                        : priceChartData
                                            ? formatDollarAmount((_c = priceChartData[priceChartData.length - 1]) === null || _c === void 0 ? void 0 : _c.close, 2)
                                            : "--", chartView === ChartView.PRICE && priceToggles ? (_jsx(Box, { sx: { display: "flex" }, children: priceToggles.map((e, index) => (_jsxs(Typography, { color: priceChartTokenId === e.id ? "text.theme_secondary" : "text.secondary", fontWeight: 500, sx: {
                                        cursor: "pointer",
                                    }, onClick: () => handleTogglePrice(e.id), children: [index !== 0 ? (_jsx(Typography, { component: "span", fontWeight: 500, children: "/" })) : (""), priceToggles[index].label] }, e.id))) })) : null] }), _jsx(Typography, { color: "text.primary", fontWeight: 500, sx: {
                            height: "20px",
                        }, fontSize: "12px", children: valueLabel || "" }), priceData ? (_jsxs(Typography, { color: "text.primary", fontWeight: 500, sx: {
                            height: "20px",
                        }, fontSize: "12px", children: ["O:", toSignificant(priceData.open, 4), " H: ", toSignificant(priceData.high, 4), " L:", " ", toSignificant(priceData.low, 4), " C: ", toSignificant(priceData.close, 4)] })) : null] }), _jsxs(Box, { sx: {
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                }, children: [_jsx(ChartToggle, { chartViews: chartViews, activeView: chartView, setActiveChartView: (chartView) => setChartView(chartView) }), chartView === ChartView.VOL ? (_jsx(Box, { sx: { margin: "15px 0 0 0" }, children: _jsx(ChartDateButtons, { volume: volumeWindow, onChange: setVolumeWindow }) })) : null] }), _jsx(Box, { mt: "20px", children: chartView === ChartView.TVL ? (formattedTvlData.length > 0 ? (_jsx(LineChartAlt, { data: formattedTvlData, setLabel: setValueLabel, minHeight: 340, setValue: setLatestValue, value: latestValue, label: valueLabel })) : (_jsx(Box, { sx: { height: "340px", width: "auto" } }))) : chartView === ChartView.VOL ? (formattedVolumeData && formattedVolumeData.length > 0 ? (_jsx(BarChartAlt, { data: formattedVolumeData, minHeight: 340, setValue: setLatestValue, setLabel: setValueLabel, value: latestValue, label: valueLabel, activeWindow: volumeWindow === VolumeWindow.daily
                        ? "daily"
                        : volumeWindow === VolumeWindow.monthly
                            ? "monthly"
                            : "weekly" })) : (_jsx(Box, { sx: { height: "340px", width: "auto" } }))) : chartView === ChartView.PRICE ? (priceChartData && priceChartData.length > 0 ? (_jsx(CandleChart, { height: 340, data: priceChartData, setValue: setLatestValue, setLabel: setValueLabel, onHoverChange: handlePriceHoverChange })) : (_jsx(Box, { sx: { height: "340px", width: "auto" } }))) : null })] }));
}
//# sourceMappingURL=TokenCharts.js.map