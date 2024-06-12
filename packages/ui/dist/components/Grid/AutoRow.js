import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
export function GridAutoRows({ gap, children }) {
    return (_jsx(Box, { sx: {
            display: "grid",
            gridAutoRows: "auto",
            rowGap: gap,
        }, children: children }));
}
//# sourceMappingURL=AutoRow.js.map