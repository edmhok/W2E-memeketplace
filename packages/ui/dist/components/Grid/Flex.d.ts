import { BoxProps } from "@mui/material";
import { ReactNode } from "react";
export interface FlexProps {
    width?: string;
    align?: BoxProps["alignItems"];
    justify?: BoxProps["justifyContent"];
    padding?: string;
    border?: string;
    borderRadius?: string;
    children: ReactNode;
    margin?: string;
    gap?: BoxProps["gap"];
    vertical?: boolean;
}
export declare function Flex({ vertical, gap, children, width, align, justify, padding, border, borderRadius, margin, }: FlexProps): JSX.Element;
//# sourceMappingURL=Flex.d.ts.map