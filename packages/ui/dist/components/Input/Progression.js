import { jsx as _jsx } from "react/jsx-runtime";
import { Slider, Tooltip, tooltipClasses } from "@mui/material";
import { styled, makeStyles } from "@mui/styles";

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

const marks = [{ value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }];
const useStyle = makeStyles((theme) => {
    return {
        root: {
            color: theme.colors.secondaryMain,
            "& .MuiSlider-rail": {
                height: "4px",
                backgroundColor: theme.palette.background.level4,
            },
            "& .MuiSlider-thumb": {
                width: "16px",
                height: "16px",
                border: "2px solid #fff",
                marginLeft: "5px",
            },
            "& .MuiSlider-mark": {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: theme.palette.background.level4,
                top: "50%",
                transform: "translate(0, -50%)",
                opacity: 1,
                "&.MuiSlider-markActive": {
                    backgroundColor: theme.colors.secondaryMain,
                },
            },
        },
        tooltip: {},
    };
});
const LightTooltip = styled((_a) => {
    const { className } = _a; const props = __rest(_a, ["className"]);
    return _jsx(Tooltip, { ...props, classes: { popper: className }});
})(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.colors.secondaryMain,
        color: "#fff",
        fontWeight: 700,
    },
    "& .MuiTooltip-arrow": {
        color: theme.colors.secondaryMain,
    },
}));
const ValueLabelComponent = (props) => {
    const { children, value } = props;
    const classes = useStyle();
    return (_jsx(LightTooltip, { placement: "top", arrow: true, title: `${value}%`, className: classes.tooltip, children }));
};
export function Progression({ value, onChange }) {
    const classes = useStyle();
    const handleSliderChange = (event, value) => {
        if (typeof value === "number") {
            onChange(value);
        }
        else {
            onChange(value[0]);
        }
    };
    return (_jsx(Slider, { value, className: classes.root, marks, valueLabelDisplay: "auto", components: {
            ValueLabel: ValueLabelComponent,
        }, onChange: handleSliderChange }));
}
// # sourceMappingURL=Progression.js.map