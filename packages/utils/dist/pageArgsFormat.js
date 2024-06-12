import invariant from "tiny-invariant";
export function pageArgsFormat(pageNum, pageSize) {
    invariant(pageNum > 0, "Invalid pageNum");
    invariant(pageSize > 0, "Invalid pageSize");
    const pageStart = (pageNum - 1) * pageSize;
    const pageEnd = pageStart + pageSize;
    return [pageStart, pageEnd];
}
//# sourceMappingURL=pageArgsFormat.js.map