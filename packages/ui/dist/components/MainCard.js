import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useTheme } from "@mui/styles";
import { Box } from "@mui/material";
export function MainCard({ border, level, onClick, padding, children, sx, borderRadius, className }) {
    const theme = useTheme();
    const cardStyles = useMemo(() => {
        const _border = border === "level1"
            ? theme.palette.background.level1
            : border === "level2"
                ? theme.palette.background.level2
                : border === "level3"
                    ? theme.palette.background.level3
                    : border === "level4"
                        ? theme.palette.background.level4
                        : undefined;
        switch (level) {
            case 1:
                return Object.assign({ background: theme.palette.background.level1 }, (_border ? { border: `1px solid ${_border}` } : {}));
            case 2:
                return Object.assign({ background: theme.palette.background.level2 }, (border ? { border: "2px solid rgba(255, 255, 255, 0.04)" } : {}));
            case 3:
                return Object.assign({ background: theme.palette.background.level3 }, (_border ? { border: `1px solid ${_border}` } : {}));
            case 4:
                return Object.assign({ background: theme.palette.background.level4 }, (_border ? { border: `1px solid ${_border}` } : {}));
            case 5:
                return {
                    background: "#273051",
                    border: "0.5px solid #404558",
                };
            default:
                return Object.assign({ background: theme.palette.background.level3 }, (_border ? { border: `1px solid ${_border}` } : {}));
        }
    }, [level, border]);
    return (_jsx(Box, { sx: Object.assign(Object.assign(Object.assign({ backgroundColor: cardStyles.background }, (cardStyles.border ? { border: cardStyles.border } : {})), { borderRadius: borderRadius !== null && borderRadius !== void 0 ? borderRadius : "16px", padding: padding !== null && padding !== void 0 ? padding : "16px", width: "100%", overflow: "hidden" }), sx), onClick: onClick, className: className, children: _jsx(Box, { children: children }) }));
}
//# sourceMappingURL=MainCard.js.map