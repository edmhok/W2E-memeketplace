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
import { resultFormat } from "@w2e/utils";
import { useCallsData } from "./useCallData";
export function get100ICPPriceInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const now = new Date().getTime();
        const start = now - 10 * 24 * 60 * 60 * 1000;
        const fetch_result = yield fetch(`https://ic-api.internetcomputer.org/api/v3/icp-xdr-conversion-rates?start=${parseInt((start / 1000).toString(), 10)}&end=${parseInt((now / 1000).toString(), 10)}&step=600`).catch(() => undefined);
        if (!fetch_result)
            return undefined;
        const result = (yield fetch_result.json());
        return resultFormat(result.icp_xdr_conversion_rates).data;
    });
}
export function use100ICPPriceInfo() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield get100ICPPriceInfo();
    }), []));
}
//# sourceMappingURL=icp.js.map