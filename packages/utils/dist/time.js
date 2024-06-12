import dayjs from "dayjs";
import { SECONDS_IN_DAY } from "@w2e/constants";
export function nanosecond2Millisecond(time) {
    return Number(BigInt(time) / BigInt(1000000));
}
export function millisecond2Nanosecond(time) {
    return Number(BigInt(time) * BigInt(1000000));
}
export function timestampFormat(timestamp, format = "YYYY-MM-DD HH:mm:ss") {
    if (!timestamp)
        return "";
    const newTimestamp = Number(String(timestamp).substr(0, 13));
    return dayjs(newTimestamp).format(format);
}
export const secondsToDays = (seconds) => seconds / SECONDS_IN_DAY;
export const daysToSeconds = (days) => Math.round(days * SECONDS_IN_DAY);
//# sourceMappingURL=time.js.map