import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import LoadingImage from "./loading.gif";

export function SwapAnalyticLoading({ loading }) {
    const theme = useTheme();
    return loading ? (_jsx(Box, { sx: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            top: "0",
            left: "0",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            background: theme.palette.background.level2,
            zIndex: 100,
        }, children: _jsx("img", { width: "80px", height: "80px", src: LoadingImage, alt: "" }) })) : null;
}
// # sourceMappingURL=Loading.js.map