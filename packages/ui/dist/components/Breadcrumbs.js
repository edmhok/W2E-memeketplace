import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ChevronRight } from "react-feather";
export function Breadcrumbs({ prevLabel, currentLabel, prevLink, fontSize = "12px" }) {
    const history = useHistory();
    const handleClick = () => {
        history.push(prevLink);
    };
    return (_jsxs(Box, { sx: {
            display: "flex",
            gap: "0 5px",
            alignItems: "center",
        }, children: [_jsx(Typography, { sx: {
                    fontSize,
                    color: "text.secondary",
                    cursor: "pointer",
                    "&:hover": {
                        textDecoration: "underline",
                    },
                }, onClick: handleClick, children: prevLabel }), _jsx(ChevronRight, { size: "18px" }), _jsx(Typography, { color: "text.primary", fontSize: fontSize, children: currentLabel })] }));
}
//# sourceMappingURL=Breadcrumbs.js.map