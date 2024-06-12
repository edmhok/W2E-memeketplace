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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart, ResponsiveContainer, XAxis, Tooltip, Bar } from "recharts";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useTheme } from "@mui/styles";
import { GridRowBetween } from "../Grid/Row";
dayjs.extend(utc);
const DEFAULT_HEIGHT = 300;
const CustomBar = ({ x, y, width, height, fill }) => {
    return (_jsx("g", { children: _jsx("rect", { x: x, y: y, fill: fill, width: width, height: height, rx: "2" }) }));
};
export function BarChartAlt(_a) {
    var { data, color = "#5669dc", setValue, setLabel, value, label, activeWindow, topLeft, topRight, bottomLeft, bottomRight, minHeight = DEFAULT_HEIGHT, tickFormat = "DD" } = _a, rest = __rest(_a, ["data", "color", "setValue", "setLabel", "value", "label", "activeWindow", "topLeft", "topRight", "bottomLeft", "bottomRight", "minHeight", "tickFormat"]);
    const theme = useTheme();
    const parsedValue = value;
    const now = dayjs();
    return (_jsxs(Box, Object.assign({ sx: {
            width: "100%",
            height: `${DEFAULT_HEIGHT}px`,
            display: "flex",
            flexDirection: "column",
            minHeight,
            "> *": {
                fontSize: "1rem",
            },
        } }, rest, { children: [_jsxs(GridRowBetween, { align: "flex-start", children: [topLeft !== null && topLeft !== void 0 ? topLeft : null, topRight !== null && topRight !== void 0 ? topRight : null] }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(BarChart, { width: 500, height: 300, data: data, margin: {
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }, onMouseLeave: () => {
                        if (setLabel)
                            setLabel(undefined);
                        if (setValue)
                            setValue(undefined);
                    }, children: [_jsx(XAxis, { dataKey: "time", axisLine: false, tickLine: false, tickFormatter: (time) => dayjs(time).format(activeWindow === "monthly" ? "MMM" : tickFormat), minTickGap: 10, tick: { fill: theme.palette.text.secondary } }), _jsx(Tooltip, { cursor: { fill: "#29314F" }, contentStyle: { display: "none" }, 
                            // @ts-ignore
                            formatter: (value, name, props) => {
                                if (setValue && parsedValue !== props.payload.value) {
                                    setValue(props.payload.value);
                                }
                                const formattedTime = dayjs(props.payload.time).format("MMM D");
                                const formattedTimeDaily = dayjs(props.payload.time).format("MMM D YYYY");
                                const formattedTimePlusWeek = dayjs(props.payload.time).add(1, "week");
                                const formattedTimePlusMonth = dayjs(props.payload.time).add(1, "month");
                                if (setLabel && label !== formattedTime) {
                                    if (activeWindow === "weekly") {
                                        const isCurrent = formattedTimePlusWeek.isAfter(now);
                                        setLabel(`${formattedTime}-${isCurrent ? "current" : formattedTimePlusWeek.format("MMM D, YYYY")}`);
                                    }
                                    else if (activeWindow === "monthly") {
                                        const isCurrent = formattedTimePlusMonth.isAfter(now);
                                        setLabel(`${formattedTime}-${isCurrent ? "current" : formattedTimePlusMonth.format("MMM D, YYYY")}`);
                                    }
                                    else {
                                        setLabel(formattedTimeDaily);
                                    }
                                }
                            } }), _jsx(Bar, { dataKey: "value", fill: color, shape: (props) => {
                                return _jsx(CustomBar, { height: props.height, width: props.width, x: props.x, y: props.y, fill: color });
                            } })] }) }), _jsxs(GridRowBetween, { children: [bottomLeft !== null && bottomLeft !== void 0 ? bottomLeft : null, bottomRight !== null && bottomRight !== void 0 ? bottomRight : null] })] })));
}
//# sourceMappingURL=alt.js.map