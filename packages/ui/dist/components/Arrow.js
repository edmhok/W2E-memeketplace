import { jsx as _jsx } from "react/jsx-runtime";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export function DownArrow(props) {
    return _jsx(ArrowDownwardIcon, Object.assign({}, props, { sx: { width: "16px", height: "16px" } }));
}
export function UpArrow(props) {
    return _jsx(ArrowDownwardIcon, Object.assign({}, props, { sx: { transform: "rotate(180deg)", width: "16px", height: "16px" } }));
}
export function RightArrow(props) {
    return _jsx(ArrowDownwardIcon, Object.assign({}, props, { sx: { transform: "rotate(270deg)", width: "16px", height: "16px" } }));
}
export function LeftArrow(props) {
    return _jsx(ArrowDownwardIcon, Object.assign({}, props, { sx: { transform: "rotate(90deg)", width: "16px", height: "16px" } }));
}
//# sourceMappingURL=Arrow.js.map