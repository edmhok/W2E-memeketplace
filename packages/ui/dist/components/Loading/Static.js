import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LoadingImage from "./loading.gif";

const useStyles = makeStyles((theme) => {
    return {
        loadingContainer: {
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            minHeight: "300px",
            overflow: "hidden",
        },
        mask: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: theme.palette.loading.background,
            opacity: 0.3,
        },
    };
});
export function StaticLoading({ loading, mask = false }) {
    const classes = useStyles();
    return loading ? (_jsxs(Grid, { className: classes.loadingContainer, container: true, justifyContent: "center", alignContent: "center", children: [_jsx(Box, { className: mask ? classes.mask : "" }), _jsx("img", { style: { zIndex: 2 }, width: "80px", height: "80px", src: LoadingImage, alt: "" })] })) : null;
}
// # sourceMappingURL=Static.js.map