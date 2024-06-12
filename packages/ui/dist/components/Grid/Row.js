import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
export function GridRow({ children, width, align, justify, padding, border, borderRadius, margin }) {
    return (_jsx(Box, { sx: {
            gridAutoRows: "auto",
            display: "flex",
            width: width !== null && width !== void 0 ? width : "100%",
            alignItems: align !== null && align !== void 0 ? align : "center",
            justifyContent: justify !== null && justify !== void 0 ? justify : "flex-start",
            padding: padding !== null && padding !== void 0 ? padding : 0,
            border,
            borderRadius,
            margin: margin !== null && margin !== void 0 ? margin : 0,
        }, children: children }));
}
export function GridRowBetween(props) {
    return (_jsx(GridRow, Object.assign({}, props, { justify: "space-between", children: props.children })));
}
export function GridRowFixed({ gap, children, align }) {
    return (_jsx(GridRow, { justify: "space-between", width: "fit-content", margin: gap && `-${gap}`, align: align, children: children }));
}
//# sourceMappingURL=Row.js.map