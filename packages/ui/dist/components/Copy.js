import { jsx as _jsx } from "react/jsx-runtime";
import copyToClipboard from "copy-to-clipboard";
import { forwardRef, useImperativeHandle } from "react";
import { Box } from "@mui/material";
export const Copy = forwardRef(({ content, children, hide, onCopy }, ref) => {
    const copy = () => {
        if (!content)
            return;
        copyToClipboard(content);
        if (onCopy)
            onCopy();
    };
    useImperativeHandle(ref, () => ({
        copy,
    }), [copy]);
    return !hide ? (_jsx(Box, { sx: { display: "inline-block", cursor: "pointer" }, onClick: copy, children: children })) : null;
});
//# sourceMappingURL=Copy.js.map