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
import { useCallback, useContext } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { UpArrow, DownArrow } from "../Arrow";
import { SortDirection } from "./types";
import HeaderContext from "./headerContext";
export default function HeaderCell(_a) {
    var { isSort, field } = _a, props = __rest(_a, ["isSort", "field"]);
    const theme = useTheme();
    const { sortChange, sortField, sortDirection } = useContext(HeaderContext);
    const arrow = useCallback((field) => {
        return sortField === field ? sortDirection === SortDirection.ASC ? _jsx(UpArrow, {}) : _jsx(DownArrow, {}) : "";
    }, [sortDirection, sortField]);
    const handleClick = (event) => {
        if (isSort && field) {
            sortChange(field, sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC);
        }
        if (props.onClick)
            props.onClick(event);
    };
    return (_jsxs(Typography, { sx: {
            cursor: "pointer",
            userSelect: "none",
            color: theme.colors.darkPrimary400,
            display: "flex",
            alignItems: "center",
            justifyContent: props.align === "right" ? "flex-end" : "flex-start",
            fontSize: "16px",
            fontWeight: 400,
            "@media screen and (max-width: 600px)": {
                fontSize: "12px",
            },
        }, color: props.color, onClick: handleClick, component: "div", children: [props.children, " ", field ? arrow(field) : null] }));
}
//# sourceMappingURL=HeaderCell.js.map