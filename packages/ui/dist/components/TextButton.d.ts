import { ReactNode } from "react";
export interface ALinkProps {
    children: ReactNode;
    link: string | undefined;
}
export declare function ALink({ children, link }: ALinkProps): JSX.Element;
export interface TextButtonProps {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    link?: string;
    to?: string;
    sx?: any;
    arrow?: boolean;
    color?: "primary" | "write" | "secondary";
    textDecoration?: "underline" | "none";
}
export declare function TextButton({ children, onClick, disabled, link, to, sx, arrow, color, textDecoration, }: TextButtonProps): JSX.Element;
//# sourceMappingURL=TextButton.d.ts.map