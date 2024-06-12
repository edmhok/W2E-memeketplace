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
import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "@mui/material";
export default function BodyCell(_a) {
    var _b;
    var { sub, sx } = _a, props = __rest(_a, ["sub", "sx"]);
    const handleClick = (event) => {
        if (props.onClick)
            props.onClick(event);
    };
    return (_jsx(Typography, { sx: Object.assign({ cursor: "pointer", userSelect: "none", fontSize: sub ? "14px" : "16px", "@media screen and (max-width: 600px)": {
                fontSize: sub ? "12px" : "14px",
            } }, sx), color: (_b = props.color) !== null && _b !== void 0 ? _b : (sub ? "text.secondary" : "text.primary"), align: props.align, onClick: handleClick, component: "div", children: props.children }));
}
//# sourceMappingURL=BodyCell.js.map