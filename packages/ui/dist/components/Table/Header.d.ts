import { BoxProps } from "@mui/material";
import { Override } from "@w2e/types";
import { SortDirection } from "./types";
export type HeaderProps = Override<
  BoxProps,
  {
    onSortChange?: (sortField: string, sortDirection: SortDirection) => void;
    defaultSortFiled?: string;
    defaultSortDirection?: SortDirection;
  }
>;
export default function Header({
  children,
  onSortChange,
  defaultSortFiled,
  defaultSortDirection,
  ...props
}: HeaderProps): JSX.Element;
//# sourceMappingURL=Header.d.ts.map
