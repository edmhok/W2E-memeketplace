import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, useRef, useMemo } from "react";
import { Typography, Box, Checkbox, Popper, InputAdornment, } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { ClickAwayListener } from "@mui/base";
import { NoData } from "../NoData";
import FilledTextField from "../FilledTextField";
import { SearchIcon } from "../../assets/icons/Search";

const __rest = (this && this.__rest) || function (s, e) {
    const t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

const useStyles = (contained, fullHeight) => {
    return makeStyles((theme) => {
        return {
            inputBox: {
                display: "flex",
                alignItems: "center",
                background: theme.palette.background.level1,
                borderRadius: "12px",
                padding: contained ? `9px 16px` : `${fullHeight ? "0px" : "12px"} 16px`,
                width: "100%",
                "& input": {
                    color: theme.palette.text.primary,
                },
            },
        };
    });
};
export function Select(_a) {
    let _b;
    const { label, value, onChange, required, menus = [], maxWidth, fullHeight, disabled, InputProps, contained = true, width, CustomNoData, multiple = false, menuMaxHeight, onSearch, search: hasSearch, customLabel } = _a; const props = __rest(_a, ["label", "value", "onChange", "required", "menus", "maxWidth", "fullHeight", "disabled", "InputProps", "contained", "width", "CustomNoData", "multiple", "menuMaxHeight", "onSearch", "search", "customLabel"]);
    const classes = useStyles(contained, fullHeight)();
    const [anchorEl, setAnchorEl] = useState(null);
    const outerBoxRef = useRef(null);
    const [menuWidth, setMenuWidth] = useState(undefined);
    const theme = useTheme();
    const [search, setSearch] = useState(undefined);
    const [showClose, setShowClose] = useState(false);
    const handleOuterBoxClick = (event) => {
        if (disabled)
            return;
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setSearch(undefined);
        if (onSearch)
            onSearch(undefined);
    };
    useEffect(() => {
        let _a;
        const width = (_a = outerBoxRef === null || outerBoxRef === void 0 ? void 0 : outerBoxRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth;
        setMenuWidth(width !== null && width !== void 0 ? width : undefined);
    }, []);
    const handleMenuItemClick = (menu) => {
        if (!multiple) {
            setSearch(undefined);
            if (onSearch)
                onSearch(undefined);
            setAnchorEl(null);
            if (onChange)
                onChange(menu.value);
        }
        else {
            const oldSelected = value ? [...value] : [];
            if (value === null || value === void 0 ? void 0 : value.includes(menu.value)) {
                const index = oldSelected.findIndex((item) => item === menu.value);
                if (index !== -1) {
                    oldSelected.splice(index, 1);
                    if (onChange)
                        onChange(oldSelected);
                }
            }
            else {
                const newSelected = [...oldSelected, menu.value];
                if (onChange)
                    onChange(newSelected);
            }
        }
    };
    const handleCheckboxChange = (checked, selectedValue) => {
        if (onChange) {
            const oldSelected = value ? [...value] : [];
            if (checked) {
                const newSelected = [...oldSelected, selectedValue];
                onChange(newSelected);
            }
            else {
                const index = oldSelected.findIndex((item) => item === selectedValue);
                if (index !== -1) {
                    oldSelected.splice(index, 1);
                    onChange(oldSelected);
                }
            }
        }
    };
    const handleSearchChange = (value) => {
        setSearch(value);
        if (onSearch)
            onSearch(value);
    };
    const selectedMenu = useMemo(() => {
        return menus.filter((menu) => menu.value === value)[0];
    }, [menus, value]);
    const handleMouseEnter = () => {
        setShowClose(true);
    };
    const handleMouseLeave = () => {
        setShowClose(false);
    };
    const handleEmptyValue = (event) => {
        event.stopPropagation();
        if (onChange)
            onChange(undefined);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { ref: outerBoxRef, className: classes.inputBox, sx: {...(fullHeight ? { height: "100%" } : {}), ...(maxWidth ? { maxWidth: `${maxWidth}px` } : {}), cursor: "pointer"}, onClick: handleOuterBoxClick, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [contained && label && (_jsxs(Box, { children: [required && (_jsx(Typography, { sx: { color: "#D3625B" }, fontSize: 12, component: "span", children: "*" })), _jsx(Typography, { component: "span", fontSize: 12, children: label })] })), _jsxs(Box, { sx: {
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }, children: [_jsx(Box, { children: value ? (_jsx(Typography, { color: "textPrimary", component: "div", children: (_b = selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.selectLabel) !== null && _b !== void 0 ? _b : selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.label })) : (_jsx(Typography, { color: "#4f5a7f", children: props.placeholder })) }), _jsx(Box, { sx: { display: "flex", alignItems: "center" }, children: showClose && !!value ? (_jsx(CloseIcon, { sx: { cursor: "pointer" }, onClick: handleEmptyValue })) : (_jsx(KeyboardArrowDownIcon, { sx: {
                                        transition: "all 300ms",
                                        rotate: anchorEl ? "180deg" : "0deg",
                                        cursor: "pointer",
                                    } })) })] })] }), anchorEl ? (_jsx(Popper, { id: "Select-popper", open: Boolean(anchorEl), anchorEl, style: {
                    width: menuWidth,
                    background: theme.colors.darkLevel3,
                    border: "1px solid #49588E",
                    borderRadius: "12px",
                    overflow: "hidden",
                }, children: _jsx(ClickAwayListener, { onClickAway: handleClose, children: _jsxs(Box, { children: [hasSearch ? (_jsx(Box, { sx: { margin: "8px 0", padding: "0 12px", height: "40px" }, children: _jsx(FilledTextField, { value: search, fullHeight: true, textFiledProps: {
                                        InputProps: {
                                            startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(SearchIcon, {}) })),
                                        },
                                        placeholder: "Search",
                                    }, onChange: handleSearchChange }) })) : null, _jsxs(Box, { sx: {
                                    maxHeight: menuMaxHeight !== null && menuMaxHeight !== void 0 ? menuMaxHeight : "540px",
                                    overflow: "hidden auto",
                                }, children: [menus.map((menu, index) => {
                                        return customLabel ? (_jsx(Box, { onClick: () => handleMenuItemClick(menu), children: menu.label }, `${menu.value}_${index}`)) : (_jsxs(Box, { sx: {
                                                padding: "10px 10px",
                                                cursor: "pointer",
                                                "&:hover": {
                                                    background: "#313D67",
                                                },
                                            }, onClick: () => handleMenuItemClick(menu), children: [multiple ? (_jsx(Box, { sx: { margin: "0 5px 0 0" }, children: _jsx(Checkbox, { sx: { padding: 0 }, onChange: (event, checked) => handleCheckboxChange(checked, menu.value), checked: value === null || value === void 0 ? void 0 : value.includes(menu.value) }) })) : null, menu.label] }, `${menu.value}_${index}`));
                                    }), menus.length === 0 ? (CustomNoData || (_jsx(NoData, {}))) : null] })] }) }) })) : null] }));
}
// # sourceMappingURL=Select.js.map