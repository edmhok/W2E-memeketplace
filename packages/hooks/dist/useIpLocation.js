var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useCallback } from "react";
import { useCallsData } from "./useCallData";
export function useIpLocation() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        const fetch_result = yield fetch("https://api.iplocation.net/?cmd=get-ip").catch(() => undefined);
        if (!fetch_result)
            return undefined;
        return (yield fetch_result.json());
    }), []));
}
export function useIpLocationCode() {
    const { result: ipLocation } = useIpLocation();
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!ipLocation || !ipLocation.ip)
            return undefined;
        const fetch_result = yield fetch(`https://api.iplocation.net/?cmd=ip-country&ip=${ipLocation.ip}`).catch(() => undefined);
        if (!fetch_result)
            return undefined;
        const result = (yield fetch_result.json());
        if (result) {
            return result.country_code2;
        }
        return undefined;
    }), [ipLocation]));
}
//# sourceMappingURL=useIpLocation.js.map