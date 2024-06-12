/// <reference types="react" />
import { SortDirection } from "./types";
export type HeaderCellProps = {
    isSort?: boolean;
    sortField?: string;
    field?: string;
    sortDirection?: SortDirection;
    color?: string;
    align?: "right" | "left" | "inherit" | "center" | "justify" | undefined;
    onClick?: (event: any) => void;
    children: React.ReactNode;
};
export default function HeaderCell({ isSort, field, ...props }: HeaderCellProps): JSX.Element;
//# sourceMappingURL=HeaderCell.d.ts.map