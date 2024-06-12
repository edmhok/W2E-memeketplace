/// <reference types="react" />
import { SxProps } from "@mui/material";
export type BodyCellProps = {
    color?: string;
    align?: "right" | "left" | "inherit" | "center" | "justify" | undefined;
    onClick?: (event: any) => void;
    children: React.ReactNode;
    sub?: boolean;
    sx?: SxProps;
};
export default function BodyCell({ sub, sx, ...props }: BodyCellProps): JSX.Element;
//# sourceMappingURL=BodyCell.d.ts.map