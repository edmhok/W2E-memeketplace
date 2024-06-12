import React from "react";
import { type SxProps } from "@mui/material";
export type MainCardBorder = "level1" | "level2" | "level3" | "level4";
export interface MainCardProps {
    border?: MainCardBorder;
    children: React.ReactNode;
    level?: number;
    onClick?: (event: any) => void;
    padding?: string;
    sx?: SxProps;
    borderRadius?: string;
    className?: string;
}
export declare function MainCard({ border, level, onClick, padding, children, sx, borderRadius, className }: MainCardProps): JSX.Element;
//# sourceMappingURL=MainCard.d.ts.map