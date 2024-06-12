import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    const translateLength = 5;
    return {
        dot: {
            display: "inline-block",
            width: "5px",
            height: "5px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            borderRadius: "50%",
            animationDuration: "800ms",
            animationIterationCount: "infinite",
        },
        "@keyframes dot1Keyframes": {
            "0%": {
                transform: `translate(0, -${translateLength}px)`,
            },
            "33%": {
                transform: "translate(0, 0)",
            },
        },
        "@keyframes dot2Keyframes": {
            "0%": {
                transform: "translate(0, 0)",
            },
            "33%": {
                transform: `translate(0, -${translateLength}px)`,
            },
            "66%": {
                transform: "translate(0, 0)",
            },
        },
        "@keyframes dot3Keyframes": {
            "0%": {
                transform: "translate(0, 0)",
            },
            "66%": {
                transform: `translate(0, -${translateLength}px)`,
            },
        },
        dot1: {
            animationName: `$dot1Keyframes`,
            marginRight: "4px",
        },
        dot2: {
            animationName: `$dot2Keyframes`,
            marginRight: "4px",
        },
        dot3: {
            animationName: `$dot3Keyframes`,
        },
    };
});
export function DotLoading({ loading }) {
    const classes = useStyles();
    return loading ? (_jsxs(Box, { sx: {
            display: "inline-block",
            height: "8px",
            lineHeight: "8px",
        }, children: [_jsx("span", { className: `${classes.dot} ${classes.dot1}` }), _jsx("span", { className: `${classes.dot} ${classes.dot2}` }), _jsx("span", { className: `${classes.dot} ${classes.dot3}` })] })) : null;
}
// # sourceMappingURL=Dot.js.map