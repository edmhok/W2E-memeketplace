import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
export default function Row(props) {
    var _a;
    return (_jsx(Box, Object.assign({}, props, { className: props.className, sx: Object.assign({ padding: "20px 0", borderBottom: (_a = props.border) !== null && _a !== void 0 ? _a : "1px solid rgba(189, 200, 240, 0.082)" }, props.sx), onClick: props.onClick, children: props.children })));
}
//# sourceMappingURL=Row.js.map