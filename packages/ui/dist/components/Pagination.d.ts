export type PaginationType = {
    pageNum: number;
    pageSize: number;
};
export interface PaginationProps {
    total: number;
    onPageChange?: (pagination: PaginationType) => void;
    flexEnd?: boolean;
    num?: number;
    defaultPageSize?: number;
}
export declare function Pagination({ total, onPageChange, defaultPageSize, flexEnd, num, }: PaginationProps): JSX.Element;
//# sourceMappingURL=Pagination.d.ts.map