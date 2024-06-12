/* eslint-disable no-case-declarations */
import { useMemo } from "react";
import { unixToDate } from "@w2e/utils";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";
import dayjs from "dayjs";
// format dayjs with the libraries that we need
dayjs.extend(utc);
dayjs.extend(weekOfYear);
function unixToType(unix, type) {
    const date = dayjs.unix(unix).utc();
    switch (type) {
        case "month":
            return date.format("YYYY-MM");
        case "week":
            let week = String(date.week());
            if (week.length === 1) {
                week = `0${week}`;
            }
            return `${date.year()}-${week}`;
        default:
            break;
    }
}
export function useTransformedVolumeData(chartData, type) {
    return useMemo(() => {
        if (chartData) {
            const data = {};
            chartData.forEach(({ date, volumeUSD }) => {
                const group = unixToType(date, type);
                if (group === undefined)
                    return;
                if (data[group]) {
                    data[group].value += volumeUSD;
                }
                else {
                    data[group] = {
                        time: unixToDate(date),
                        value: volumeUSD,
                    };
                }
            });
            return Object.values(data);
        }
        return [];
    }, [chartData, type]);
}
// # sourceMappingURL=useTransformedVolumeData.js.map