import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { Grid, Pagination as MuiPagination, Box } from "@mui/material";
import { MainCard } from "./MainCard";
export function Pagination({ total, onPageChange = () => { }, defaultPageSize = 10, flexEnd, num, }) {
    const [pageNum, setPageNum] = React.useState(1);
    useEffect(() => {
        if (num !== undefined) {
            setPageNum(num);
        }
    }, [num]);
    const paginationChange = (e, pageNum) => {
        setPageNum(pageNum);
        if (onPageChange) {
            onPageChange({
                pageNum,
                pageSize: defaultPageSize,
            });
        }
    };
    return (_jsx(Grid, { container: true, justifyContent: flexEnd ? "flex-end" : "", mt: "15px", children: _jsx(Box, { children: _jsx(MainCard, { level: 4, padding: "12px", children: _jsx(MuiPagination, { count: Math.ceil(Number(total || "") / defaultPageSize), page: pageNum, color: "primary", shape: "rounded", onChange: paginationChange }) }) }) }));
}
//# sourceMappingURL=Pagination.js.map