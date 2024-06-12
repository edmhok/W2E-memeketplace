import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
export function unixToDate(unix, format = "YYYY-MM-DD") {
    return dayjs.unix(unix).utc().format(format);
}
//# sourceMappingURL=unixToDate.js.map