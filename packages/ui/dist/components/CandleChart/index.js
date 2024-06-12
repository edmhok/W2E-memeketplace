var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect, useCallback } from "react";
import { createChart } from "lightweight-charts";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { GridRowBetween } from "../Grid/Row";
dayjs.extend(utc);
const DEFAULT_HEIGHT = 300;
export const CandleChart = (_a) => {
    var { data, color = "#56B2A4", setValue, setLabel, topLeft, topRight, bottomLeft, bottomRight, height = DEFAULT_HEIGHT, minHeight = DEFAULT_HEIGHT, onHoverChange } = _a, rest = __rest(_a, ["data", "color", "setValue", "setLabel", "topLeft", "topRight", "bottomLeft", "bottomRight", "height", "minHeight", "onHoverChange"]);
    const theme = useTheme();
    const textColor = theme.palette.text.secondary;
    const chartRef = useRef(null);
    const [chartCreated, setChart] = useState();
    const handleResize = useCallback(() => {
        var _a;
        if (chartCreated && ((_a = chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) === null || _a === void 0 ? void 0 : _a.parentElement)) {
            chartCreated.resize(chartRef.current.parentElement.clientWidth - 32, height);
            chartCreated.timeScale().fitContent();
            chartCreated.timeScale().scrollToPosition(0, false);
        }
    }, [chartCreated, chartRef, height]);
    // add event listener for resize
    const isClient = typeof window === "object";
    useEffect(() => {
        if (!isClient) {
            return;
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isClient, chartRef, handleResize]); // Empty array ensures that effect is only run on mount and unmount
    // if chart not instantiated in canvas, create it
    useEffect(() => {
        var _a;
        if (!chartCreated && data && !!((_a = chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) === null || _a === void 0 ? void 0 : _a.parentElement)) {
            const chart = createChart(chartRef.current, {
                height,
                width: chartRef.current.parentElement.clientWidth - 32,
                layout: {
                    backgroundColor: "transparent",
                    textColor,
                    fontFamily: "Inter var",
                },
                rightPriceScale: {
                    scaleMargins: {
                        top: 0.1,
                        bottom: 0.1,
                    },
                    borderVisible: false,
                },
                timeScale: {
                    borderVisible: false,
                    secondsVisible: true,
                    tickMarkFormatter: (unixTime) => {
                        return dayjs.unix(unixTime).format("MM/DD h:mm A");
                    },
                },
                watermark: {
                    visible: false,
                },
                grid: {
                    horzLines: {
                        visible: false,
                    },
                    vertLines: {
                        visible: false,
                    },
                },
                crosshair: {
                    horzLine: {
                        visible: false,
                        labelVisible: false,
                    },
                    mode: 1,
                    vertLine: {
                        visible: true,
                        labelVisible: false,
                        style: 3,
                        width: 1,
                        color: textColor,
                        labelBackgroundColor: color,
                    },
                },
            });
            chart.timeScale().fitContent();
            setChart(chart);
        }
    }, [color, chartCreated, data, height, setValue, textColor, theme]);
    useEffect(() => {
        if (chartCreated && data) {
            const series = chartCreated.addCandlestickSeries({
                upColor: "green",
                downColor: "red",
                borderDownColor: "red",
                borderUpColor: "green",
                wickDownColor: "red",
                wickUpColor: "green",
            });
            series.setData(data);
            const lastOpen = data[data.length - 1] ? data[data.length - 1].open : undefined;
            const precision = lastOpen ? (lastOpen < 0.000001 ? 8 : lastOpen < 0.0001 ? 6 : lastOpen < 0.001 ? 4 : 3) : 2;
            series.applyOptions({
                priceFormat: {
                    type: "price",
                    precision,
                    minMove: 1 / Math.pow(10, precision),
                },
            });
            // update the title when hovering on the chart
            chartCreated.subscribeCrosshairMove((param) => {
                if ((chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) &&
                    (param === undefined ||
                        param.time === undefined ||
                        (param && param.point && param.point.x < 0) ||
                        (param && param.point && param.point.x > chartRef.current.clientWidth) ||
                        (param && param.point && param.point.y < 0) ||
                        (param && param.point && param.point.y > height))) {
                    // reset values
                    if (setValue)
                        setValue(undefined);
                    if (setLabel)
                        setLabel(undefined);
                    if (onHoverChange)
                        onHoverChange(undefined);
                }
                else if (series && param) {
                    const timestamp = param.time;
                    const time = dayjs.unix(timestamp).format("MMM D, YYYY h:mm A");
                    const parsed = param.seriesPrices.get(series);
                    if (setValue)
                        setValue(parsed === null || parsed === void 0 ? void 0 : parsed.open);
                    if (setLabel)
                        setLabel(time);
                    if (onHoverChange)
                        onHoverChange(parsed);
                }
            });
        }
    }, [chartCreated, color, data, height, setValue, setLabel]);
    return (_jsxs(Box, { sx: {
            width: "100%",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            minHeight,
            " > *": {
                fontSize: "1rem",
            },
        }, children: [_jsxs(GridRowBetween, { children: [topLeft !== null && topLeft !== void 0 ? topLeft : null, topRight !== null && topRight !== void 0 ? topRight : null] }), _jsx("div", Object.assign({ ref: chartRef, id: "candle-chart" }, rest)), _jsxs(GridRowBetween, { children: [bottomLeft !== null && bottomLeft !== void 0 ? bottomLeft : null, bottomRight !== null && bottomRight !== void 0 ? bottomRight : null] })] }));
};
//# sourceMappingURL=index.js.map