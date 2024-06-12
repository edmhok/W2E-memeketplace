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
import { ResponsiveContainer, XAxis, Tooltip, AreaChart, Area } from "recharts";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useTheme } from "@mui/styles";
import { darken } from "polished";
import { GridRowBetween } from "../Grid/Row";
dayjs.extend(utc);
const DEFAULT_HEIGHT = 300;
export function LineChartAlt(_a) {
    var { data, color = "#5669dc", value, label, setValue, setLabel, topLeft, topRight, bottomLeft, bottomRight, minHeight = DEFAULT_HEIGHT, tickFormat = "DD" } = _a, rest = __rest(_a, ["data", "color", "value", "label", "setValue", "setLabel", "topLeft", "topRight", "bottomLeft", "bottomRight", "minHeight", "tickFormat"]);
    const theme = useTheme();
    const parsedValue = value;
    return (_jsxs(Box, Object.assign({ sx: {
            width: "100%",
            height: `${DEFAULT_HEIGHT}px`,
            display: "flex",
            minHeight,
            flexDirection: "column",
            "> *": {
                fontSize: "1rem",
            },
        } }, rest, { children: [_jsxs(GridRowBetween, { children: [topLeft !== null && topLeft !== void 0 ? topLeft : null, topRight !== null && topRight !== void 0 ? topRight : null] }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(AreaChart, { width: 500, height: 300, data: data, margin: {
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }, onMouseLeave: () => {
                        if (setLabel)
                            setLabel(undefined);
                        if (setValue)
                            setValue(undefined);
                    }, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "gradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: darken(0.36, color), stopOpacity: 0.5 }), _jsx("stop", { offset: "100%", stopColor: color, stopOpacity: 0 })] }) }), _jsx(XAxis, { dataKey: "time", axisLine: false, tickLine: false, tickFormatter: (time) => dayjs(time).format(tickFormat), minTickGap: 10, tick: { fill: theme.palette.text.secondary } }), _jsx(Tooltip, { cursor: { stroke: "#8572FF" }, contentStyle: { display: "none" }, 
                            // @ts-ignore
                            formatter: (value, name, props) => {
                                if (setValue && parsedValue !== props.payload.value) {
                                    setValue(props.payload.value);
                                }
                                const formattedTime = dayjs(props.payload.time).format("MMM D, YYYY");
                                if (setLabel && label !== formattedTime)
                                    setLabel(formattedTime);
                            } }), _jsx(Area, { dataKey: "value", type: "monotone", stroke: color, fill: "url(#gradient)", strokeWidth: 2 })] }) }), _jsxs(GridRowBetween, { children: [bottomLeft !== null && bottomLeft !== void 0 ? bottomLeft : null, bottomRight !== null && bottomRight !== void 0 ? bottomRight : null] })] })));
}
//# sourceMappingURL=alt.js.map