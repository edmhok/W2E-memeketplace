import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, Box, Typography } from "@mui/material";
// import { TextButton } from "./TextButton";
function CloseIcon() {
    return (_jsxs("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("g", { clipPath: "url(#clip0_30361_79133)", children: _jsx("path", { d: "M15.8332 5.34102L14.6582 4.16602L9.99984 8.82435L5.3415 4.16602L4.1665 5.34102L8.82484 9.99935L4.1665 14.6577L5.3415 15.8327L9.99984 11.1743L14.6582 15.8327L15.8332 14.6577L11.1748 9.99935L15.8332 5.34102Z", fill: "white" }) }), _jsx("defs", { children: _jsx("clipPath", { id: "clip0_30361_79133", children: _jsx("rect", { width: "20", height: "20", fill: "white" }) }) })] }));
}
export function GlobalTips({ onClose }) {
    return (_jsxs(Grid, { container: true, alignItems: "center", sx: { height: "52px", background: "#B79C4A", padding: "0 20px" }, children: [_jsx(Grid, { item: true, xs: true, children: _jsx(Typography, { sx: {
                        color: "#ffffff",
                        cursor: "pointer",
                        "@media(max-width: 640px)": { fontSize: "12px" },
                    }, children: "The SNS function is deployed based on the NNS frontend and is currently in public testing." }) }), _jsx(Box, { sx: { cursor: "pointer" }, onClick: onClose, children: _jsx(CloseIcon, {}) })] }));
}
//# sourceMappingURL=GlobalTips.js.map