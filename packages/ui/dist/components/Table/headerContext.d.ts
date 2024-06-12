/// <reference types="react" />
import { SortDirection } from "./types";
export interface HeaderContextProps {
    sortField: string;
    sortDirection: SortDirection;
    sortChange: (sortField: string, sortDirection: SortDirection) => void;
}
declare const _default: import("react").Context<HeaderContextProps>;
export default _default;
//# sourceMappingURL=headerContext.d.ts.map