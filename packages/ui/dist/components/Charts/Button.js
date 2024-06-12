import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

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

export var ChartView;
(function (ChartView) {
    ChartView[ChartView.TVL = 0] = "TVL";
    ChartView[ChartView.VOL = 1] = "VOL";
    ChartView[ChartView.PRICE = 2] = "PRICE";
    ChartView[ChartView.FEES = 3] = "FEES";
    ChartView[ChartView.LIQUIDITY = 4] = "LIQUIDITY";
    ChartView[ChartView.TRANSACTIONS = 5] = "TRANSACTIONS";
})(ChartView || (ChartView = {}));
export function ChartToggleButton({ children, active, onClick }) {
    const theme = useTheme();
    return (_jsx(Typography, { component: "span", color: active ? "text.primary" : "text.secondary", sx: {
            background: active ? theme.palette.background.level3 : "transparent",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: 500,
            padding: "2px 10px",
        }, onClick, children }));
}
export function ChartToggle(_a) {
    let _b;
    const { setActiveChartView, activeView, chartViews } = _a; const rest = __rest(_a, ["setActiveChartView", "activeView", "chartViews"]);
    const theme = useTheme();
    return (_jsx(Box, { sx: {cursor: "pointer", display: "flex", alignItems: "center", padding: "1px", background: theme.palette.background.level4, borderRadius: "12px", ...((_b = rest.sx) !== null && _b !== void 0 ? _b : {})}, children: chartViews.map((chartView) => (_jsx(ChartToggleButton, { active: chartView.key === activeView, onClick: () => setActiveChartView(chartView.key), children: chartView.label }, chartView.key))) }));
}
// # sourceMappingURL=Button.js.map