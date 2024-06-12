import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
export function Flex({ vertical, gap, children, width, align, justify, padding, border, borderRadius, margin, }) {
    return (_jsx(Box, { sx: {
            flexDirection: vertical ? "column" : "row",
            gridAutoRows: "auto",
            display: "flex",
            width: width !== null && width !== void 0 ? width : "auto",
            alignItems: align !== null && align !== void 0 ? align : "center",
            justifyContent: justify !== null && justify !== void 0 ? justify : "flex-start",
            padding: padding !== null && padding !== void 0 ? padding : 0,
            border,
            borderRadius,
            margin: margin !== null && margin !== void 0 ? margin : 0,
            gap,
        }, children: children }));
}
//# sourceMappingURL=Flex.js.map