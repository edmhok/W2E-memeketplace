import { ReactNode } from "react";
export interface GridRowProps {
    width?: string;
    align?: string;
    justify?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    children: ReactNode;
    margin?: string;
}
export declare function GridRow({ children, width, align, justify, padding, border, borderRadius, margin }: GridRowProps): JSX.Element;
export declare function GridRowBetween(props: GridRowProps): JSX.Element;
export interface GridRowFixedProps {
    children: ReactNode;
    gap?: string;
    justify?: string;
    align?: string;
}
export declare function GridRowFixed({ gap, children, align }: GridRowFixedProps): JSX.Element;
//# sourceMappingURL=Row.d.ts.map