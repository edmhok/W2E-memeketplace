import { SxProps } from "@mui/material";
import React from "react";
export interface RowProps {
    border?: string;
    sx?: SxProps;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
export default function Row(props: RowProps): JSX.Element;
//# sourceMappingURL=Row.d.ts.map