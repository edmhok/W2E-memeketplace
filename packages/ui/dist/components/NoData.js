import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
import NoDataIcon from "../assets/icons/NoData";
export function NoData({ tip }) {
    return (_jsxs(Box, { sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 0",
        }, children: [_jsx(NoDataIcon, { style: { fontSize: "6rem" } }), tip ? (_jsx(Typography, { sx: { maxWidth: "690px" }, color: "text.primary", mt: "10px", align: "center", children: tip })) : null] }));
}
//# sourceMappingURL=NoData.js.map