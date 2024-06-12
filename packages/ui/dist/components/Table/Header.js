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
import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import HeaderContext from "./headerContext";
import { SortDirection } from "./types";
export default function Header(_a) {
    var _b;
    var { children, onSortChange, defaultSortFiled = "", defaultSortDirection = SortDirection.DESC } = _a, props = __rest(_a, ["children", "onSortChange", "defaultSortFiled", "defaultSortDirection"]);
    const [sortField, setSortField] = useState(defaultSortFiled);
    const [sortDirection, setSortDirection] = useState(defaultSortDirection);
    const sortChange = useCallback((sortField, sortDirection) => {
        setSortField(sortField);
        setSortDirection(sortDirection);
        if (onSortChange)
            onSortChange(sortField, sortDirection);
    }, []);
    return (_jsx(HeaderContext.Provider, { value: { sortChange, sortField, sortDirection }, children: _jsx(Box, Object.assign({}, props, { sx: Object.assign({ padding: "20px 0", borderBottom: "1px solid rgba(189, 200, 240, 0.082)" }, ((_b = props.sx) !== null && _b !== void 0 ? _b : {})), children: children })) }));
}
//# sourceMappingURL=Header.js.map