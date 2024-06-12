import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LoadingImage from "assets/images/loading.png";

const useStyles = makeStyles((theme) => {
    return {
        loadingContainer: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            minHeight: "140px",
            paddingTop: "56px",
            overflow: "hidden",
        },
        mask: {
            position: "absolute",
            top: "56px",
            left: 0,
            width: "100%",
            height: "100%",
            background: theme.palette.loading.background,
            opacity: 0.2,
        },
    };
});
export default ({ loading, mask = true }) => {
    const classes = useStyles();
    return loading ? (_jsxs(Grid, { className: classes.loadingContainer, container: true, justifyContent: "center", alignContent: "center", children: [_jsx(Box, { className: mask ? classes.mask : "" }), _jsx("img", { style: { zIndex: 2 }, width: "80px", height: "80px", src: LoadingImage, alt: "" })] })) : null;
};
// # sourceMappingURL=List.js.map