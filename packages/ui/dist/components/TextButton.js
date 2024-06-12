import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useHistory } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { mockALinkAndOpen } from "@w2e/utils";
export function ALink({ children, link }) {
    return (_jsx("a", { href: link, target: "_blank", rel: "noreferrer", style: { textDecoration: "underline", textDecorationColor: "#8492c4" }, children: _jsx(Typography, { color: "text.secondary", sx: {
                cursor: "pointer",
                userSelect: "none",
            }, component: "span", children: children }) }));
}
function ArrowIcon() {
    return (_jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.43866 2.42969H1.15951V0.429688H8.85528H9.85528V1.42969V9.12545H7.85528V3.8415L1.94156 9.75521L0.527344 8.341L6.43866 2.42969Z", fill: "#5669DC" }) }));
}
export function TextButton({ children, onClick, disabled, link, to, sx, arrow, color = "secondary", textDecoration = "none", }) {
    const history = useHistory();
    const handleClick = () => {
        if (link) {
            mockALinkAndOpen(link, "text-button-open-new-window");
            return;
        }
        if (to) {
            history.push(to);
            return;
        }
        if (onClick)
            onClick();
    };
    return (_jsxs(Typography, { color: color === "primary" ? "primary" : color === "write" ? "#ffffff" : "secondary", sx: Object.assign({ cursor: "pointer", userSelect: "none", textDecoration, "&:hover": {
                textDecoration: "underline",
            }, "& +.custom-text-button": {
                marginLeft: "18px",
            } }, sx), className: "custom-text-button", component: "span", onClick: () => {
            if (disabled)
                return;
            handleClick();
        }, children: [children, arrow && (_jsx(Box, { component: "span", sx: { margin: "0 0 0 5px" }, children: _jsx(ArrowIcon, {}) }))] }));
}
//# sourceMappingURL=TextButton.js.map