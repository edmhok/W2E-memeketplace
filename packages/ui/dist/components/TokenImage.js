import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Box } from "@mui/material";
import { SnsIcon } from "../assets/icons/SNS";

export function TokenImage({ logo, size, sx, sns }) {
    return (_jsxs(Box, { sx: {width: size !== null && size !== void 0 ? size : "24px", height: size !== null && size !== void 0 ? size : "24px", position: "relative", ...(sx !== null && sx !== void 0 ? sx : {})}, children: [_jsx(Avatar, { src: logo, sx: {
                    width: size !== null && size !== void 0 ? size : "24px",
                    height: size !== null && size !== void 0 ? size : "24px",
                    background: "transparent",
                }, children: "\u00A0" }), sns ? (_jsx(SnsIcon, { sx: {
                    width: size !== null && size !== void 0 ? size : "24px",
                    height: size !== null && size !== void 0 ? size : "24px",
                    background: "transparent",
                    position: "absolute",
                    top: "0",
                    left: "0",
                } })) : null] }));
}
// # sourceMappingURL=TokenImage.js.map