import { utils, writeFile } from "xlsx";
export function writeFileOneSheet(data, fileName, sheetName = "Sheet") {
    const sheet = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, sheet, sheetName);
    writeFile(wb, `${fileName}.xlsx`);
}
//# sourceMappingURL=xlsx.js.map