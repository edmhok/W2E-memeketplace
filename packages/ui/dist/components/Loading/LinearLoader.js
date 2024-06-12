import { jsx as _jsx } from "react/jsx-runtime";
import { makeStyles } from "@mui/styles";
import LinearProgress from "@mui/material/LinearProgress";
const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1301,
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));
export function LinearLoader() {
    const classes = useStyles();
    return (_jsx("div", { className: classes.root, children: _jsx(LinearProgress, { color: "primary" }) }));
}
//# sourceMappingURL=LinearLoader.js.map