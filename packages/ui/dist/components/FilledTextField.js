import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from "react";
import { TextField, Typography, Box, Grid, } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = (contained, fullHeight) => {
    return makeStyles((theme) => {
        return {
            inputBox: {
                display: "flex",
                alignItems: "center",
                background: theme.palette.background.level1,
                borderRadius: "8px",
                padding: contained ? `9px 16px` : `${fullHeight ? "0px" : "12px"} 16px`,
                width: "100%",
                "& input": {
                    color: theme.palette.text.primary,
                },
            },
        };
    });
};
export default function FilledTextField({ label, value, onChange, required, maxWidth, fullHeight, disabled, contained = true, alignCenter = false, width, textFiledProps, }) {
    var _a, _b;
    const classes = useStyles(contained, fullHeight)();
    const inputRef = useRef(null);
    const outerBoxRef = useRef(null);
    const handleOuterBoxClick = (event) => {
        var _a;
        if (disabled)
            return;
        (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (_jsx(_Fragment, { children: alignCenter ? (_jsx(Box, { ref: outerBoxRef, sx: Object.assign(Object.assign({}, (width ? { width } : {})), (fullHeight ? { height: "100%" } : {})), onClick: handleOuterBoxClick, children: _jsx(Grid, { className: classes.inputBox, sx: Object.assign(Object.assign({}, (fullHeight ? { height: "100%" } : {})), (maxWidth ? { maxWidth: `${maxWidth}px` } : {})), container: true, alignItems: "center", children: _jsxs(_Fragment, { children: [contained && (_jsxs(Box, { children: [required && (_jsx(Typography, { sx: { color: "#D3625B" }, fontSize: 12, component: "span", children: "*" })), _jsx(Typography, { component: "span", fontSize: 12, children: label })] })), _jsx(Grid, { container: true, alignItems: "center", children: _jsx(Grid, { item: true, xs: true, children: _jsx(TextField, Object.assign({ sx: {
                                        fontSize: "14px",
                                        "& input": {
                                            padding: "0",
                                        },
                                    }, inputRef: inputRef }, (textFiledProps
                                    ? Object.assign(Object.assign({}, textFiledProps), { InputProps: Object.assign({ disableUnderline: true }, ((_a = textFiledProps === null || textFiledProps === void 0 ? void 0 : textFiledProps.InputProps) !== null && _a !== void 0 ? _a : {})) }) : { InputProps: { disableUnderline: true } }), { variant: "standard", onChange: ({ target: { value } }) => onChange && onChange(value), value: value !== null && value !== void 0 ? value : "", fullWidth: true, disabled: disabled })) }) })] }) }) })) : (_jsx(Box, { ref: outerBoxRef, className: classes.inputBox, sx: Object.assign(Object.assign({}, (fullHeight ? { height: "100%" } : {})), (maxWidth ? { maxWidth: `${maxWidth}px` } : {})), onClick: handleOuterBoxClick, children: _jsxs(_Fragment, { children: [contained && (_jsxs(Box, { children: [required && (_jsx(Typography, { sx: { color: "#D3625B" }, fontSize: 12, component: "span", children: "*" })), _jsx(Typography, { component: "span", fontSize: 12, children: label })] })), _jsx(Grid, { container: true, alignItems: "center", children: _jsx(Grid, { item: true, xs: true, children: _jsx(TextField, Object.assign({ sx: {
                                    fontSize: "14px",
                                } }, (textFiledProps
                                ? Object.assign(Object.assign({}, textFiledProps), { InputProps: Object.assign({ disableUnderline: true }, ((_b = textFiledProps === null || textFiledProps === void 0 ? void 0 : textFiledProps.InputProps) !== null && _b !== void 0 ? _b : {})) }) : { InputProps: { disableUnderline: true } }), { inputRef: inputRef, variant: "standard", onChange: ({ target: { value } }) => onChange && onChange(value), value: value, fullWidth: true, disabled: disabled })) }) })] }) })) }));
}
//# sourceMappingURL=FilledTextField.js.map