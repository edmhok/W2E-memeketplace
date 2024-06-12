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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import BigNumber from "bignumber.js";
function isUp(value) {
    return !!value && new BigNumber(Number(value)).isGreaterThan(0);
}
function isDown(value) {
    return !!value && new BigNumber(Number(value)).isLessThan(0);
}
function isZero(value) {
    return (!!value || value === BigInt(0) || value === 0) && new BigNumber(Number(value)).isEqualTo(0);
}
var ProportionType;
(function (ProportionType) {
    ProportionType["UP"] = "up";
    ProportionType["DOWN"] = "down";
    ProportionType["EQUAL"] = "equal";
})(ProportionType || (ProportionType = {}));
const Colors = {
    [ProportionType.UP]: "#54C081",
    [ProportionType.DOWN]: "#D3625B",
    [ProportionType.EQUAL]: "#ffffff",
};
function ProportionIcon({ type }) {
    return type === ProportionType.DOWN ? (_jsx(ArrowUpwardIcon, { sx: { transform: "rotate(180deg)", width: "12px", height: "12px" } })) : type === ProportionType.UP ? (_jsx(ArrowUpwardIcon, { sx: { width: "12px", height: "12px" } })) : null;
}
export function Proportion(_a) {
    var { value } = _a, props = __rest(_a, ["value"]);
    const type = isUp(value) ? ProportionType.UP : isDown(value) ? ProportionType.DOWN : ProportionType.EQUAL;
    const proportion = isZero(value) ? "0.00%" : value ? `${new BigNumber(Number(value)).toFixed(2)}%` : undefined;
    return (_jsx(Typography, { color: Colors[type], sx: {
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: props.align === "right" ? "flex-end" : "flex-start",
        }, children: proportion ? (_jsxs(_Fragment, { children: [_jsx(ProportionIcon, { type: type }), " ", proportion] })) : ("--") }));
}
//# sourceMappingURL=Proportion.js.map