import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Dialog, DialogTitle, DialogContent, Typography, useMediaQuery } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { XCircle } from "react-feather";
import { isElement } from "react-is";
const useStyles = makeStyles((theme) => ({
    titleContainer: {
        position: "relative",
    },
    title: {
        fontSize: "20px",
        fontWeight: 700,
        "@media (max-width: 640px)": {
            fontSize: "1rem",
        },
        "&.warning": {
            color: "#D3625B",
        },
    },
    detailItem: {
        marginBottom: "24px",
    },
    value: {
        textAlign: "right",
        wordBreak: "break-all",
    },
    closeButton: {
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translate(0, -50%)",
        cursor: "pointer",
        "&:hover": {
            color: theme.colors.primaryMain,
        },
        "&.warning": {
            color: "#D3625B",
            "&:hover": {
                color: "#D3625B",
            },
        },
    },
    closeButton1: {
        position: "absolute",
        right: "5px",
        top: "5px",
        cursor: "pointer",
        "&:hover": {
            color: theme.colors.primaryMain,
        },
        "&.warning": {
            color: "#D3625B",
            "&:hover": {
                color: "#D3625B",
            },
        },
    },
}));
export function Modal({ title, children, open, confirmText = `Confirm`, cancelText = `Cancel`, onClose, onConfirm, onCancel, showConfirm = false, showCancel = false, showClose = true, confirmDisabled, fullWidth = true, maxWidth = "sm", type, background, dialogProps, }) {
    const classes = useStyles();
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down("md"));
    const down760 = useMediaQuery("(max-width:760px)");
    return (_jsxs(Dialog, Object.assign({ onClose: onClose, open: open, maxWidth: maxWidth, fullWidth: fullWidth }, dialogProps, { sx: Object.assign({ "& .MuiDialogTitle-root": Object.assign(Object.assign({}, (matchDownMD ? { padding: "8px 14px" } : {})), { "&+.MuiDialogContent-root": Object.assign({ paddingTop: "5px" }, (matchDownMD ? { paddingTop: "5px" } : {})) }), "& .MuiDialogContent-root": Object.assign({ position: "relative" }, (matchDownMD ? { padding: "8px 14px" } : {})) }, Object.assign({ "& .MuiPaper-root": Object.assign({}, (background ? { backgroundColor: background } : { backgroundColor: theme.palette.background.level2 })) }, ((dialogProps === null || dialogProps === void 0 ? void 0 : dialogProps.sx) || {}))), children: [title ? (isElement(title) ? (title) : (_jsx(DialogTitle, { children: _jsxs(Typography, { sx: { position: "relative" }, component: "div", children: [_jsx(Typography, { className: `${classes.title} ${type || ""}`, component: "span", color: "textPrimary", children: title }), showClose ? _jsx(XCircle, { onClick: onClose, className: `${classes.closeButton} ${type || ""}` }) : null] }) }))) : null, _jsxs(DialogContent, { children: [showClose && !title ? (_jsx(XCircle, { onClick: onClose, className: `${classes.closeButton1} ${type || ""} ` })) : null, children, showConfirm || showCancel ? (_jsxs(Box, { mt: "40px", sx: {
                            display: "flex",
                            justifyContent: "flex-end",
                            gridTemplateColumns: down760 ? "1fr" : showConfirm && showCancel ? "1fr 1fr" : "1fr",
                            gap: down760 ? "10px 10px" : "0 10px",
                        }, children: [showCancel ? (_jsx(Button, { onClick: onCancel, variant: "outlined", children: cancelText })) : null, showConfirm ? (_jsx(Button, { disabled: confirmDisabled, variant: "contained", onClick: onConfirm, children: confirmText })) : null] })) : null] })] })));
}
//# sourceMappingURL=Modal.js.map