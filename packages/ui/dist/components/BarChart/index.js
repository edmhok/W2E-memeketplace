import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect, useCallback } from "react";
import { createChart } from "lightweight-charts";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import { usePrevious } from "@w2e/hooks";
import { formatDollarAmount } from "@w2e/utils";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { GridRowBetween } from "../Grid/Row";

const __rest = (this && this.__rest) || function (s, e) {
    const t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

dayjs.extend(utc);
const DEFAULT_HEIGHT = 300;
export function BarChart(_a) {
    let _b;
    const { data, color = "#56B2A4", setValue, setLabel, topLeft, topRight, bottomLeft, bottomRight, height = DEFAULT_HEIGHT, minHeight = DEFAULT_HEIGHT } = _a; const rest = __rest(_a, ["data", "color", "setValue", "setLabel", "topLeft", "topRight", "bottomLeft", "bottomRight", "height", "minHeight"]);
    const theme = useTheme();
    const textColor = "#fff";
    const chartRef = useRef(null);
    const [chartCreated, setChart] = useState();
    const dataPrev = usePrevious(data);
    // reset on new data
    useEffect(() => {
        if (dataPrev !== data && chartCreated) {
            chartCreated.resize(0, 0);
            setChart(undefined);
        }
    }, [data, dataPrev, chartCreated]);
    // for reseting value on hover exit
    const currentValue = (_b = data[data.length - 1]) === null || _b === void 0 ? void 0 : _b.value;
    const handleResize = useCallback(() => {
        let _a;
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
        let _a;
        if (!chartCreated && data && !!((_a = chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) === null || _a === void 0 ? void 0 : _a.parentElement)) {
            const chart = createChart(chartRef.current, {
                height,
                width: chartRef.current.parentElement.clientWidth - 62,
                layout: {
                    backgroundColor: "transparent",
                    textColor: "#565A69",
                    fontFamily: "Inter var",
                },
                rightPriceScale: {
                    scaleMargins: {
                        top: 0.1,
                        bottom: 0,
                    },
                    drawTicks: false,
                    borderVisible: false,
                    visible: false,
                },
                timeScale: {
                    borderVisible: false,
                },
                watermark: {
                    color: "rgba(0, 0, 0, 0)",
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
                    vertLine: {
                        visible: true,
                        style: 3,
                        width: 1,
                        color: "#505050",
                        labelBackgroundColor: color,
                        labelVisible: false,
                    },
                },
            });
            chart.timeScale().fitContent();
            setChart(chart);
        }
    }, [color, chartCreated, currentValue, data, height, setValue, textColor, theme]);
    useEffect(() => {
        if (chartCreated && data) {
            const series = chartCreated.addHistogramSeries({
                color,
            });
            series.setData(data);
            chartCreated.timeScale().fitContent();
            series.applyOptions({
                priceFormat: {
                    type: "custom",
                    minMove: 0.02,
                    formatter: (price) => formatDollarAmount(price),
                },
            });
            // update the title when hovering on the chart
            chartCreated.subscribeCrosshairMove((param) => {
                let _a; let _b; let _c;
                if ((chartRef === null || chartRef === void 0 ? void 0 : chartRef.current) &&
                    (param === undefined ||
                        param.time === undefined ||
                        (param && param.point && param.point.x < 0) ||
                        (param && param.point && param.point.x > chartRef.current.clientWidth) ||
                        (param && param.point && param.point.y < 0) ||
                        (param && param.point && param.point.y > height))) {
                    if (setValue)
                        setValue(undefined);
                    if (setLabel)
                        setLabel(undefined);
                }
                else if (series && param) {
                    const time = param === null || param === void 0 ? void 0 : param.time;
                    const timeString = dayjs(`${time.year}-${time.month}-${time.day}`).format("MMM D, YYYY");
                    const price = parseFloat((_c = (_b = (_a = param === null || param === void 0 ? void 0 : param.seriesPrices) === null || _a === void 0 ? void 0 : _a.get(series)) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : currentValue);
                    if (setValue)
                        setValue(price);
                    if (setLabel && timeString)
                        setLabel(timeString);
                }
            });
        }
    }, [chartCreated, color, currentValue, data, height, setLabel, setValue]);
    return (_jsxs(Box, { sx: {
            width: "100%",
            padding: "1rem",
            paddingRight: "2rem",
            display: "flex",
            // backgroundColor: ${({ theme }) => theme.bg0}
            flexDirection: "column",
            minHeight,
            "> * ": {
                fontSize: "1rem",
            },
        }, children: [_jsxs(GridRowBetween, { children: [topLeft !== null && topLeft !== void 0 ? topLeft : null, topRight !== null && topRight !== void 0 ? topRight : null] }), _jsx("div", {ref: chartRef, id: "bar-chart", ...rest}), _jsxs(GridRowBetween, { children: [bottomLeft !== null && bottomLeft !== void 0 ? bottomLeft : null, bottomRight !== null && bottomRight !== void 0 ? bottomRight : null] })] }));
}
// # sourceMappingURL=index.js.map