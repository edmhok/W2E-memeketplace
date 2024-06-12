import { resultFormat } from "@w2e/utils";
import { sns_wasm } from "@w2e/actor";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useCallsData } from "../useCallData";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function getListDeployedSNSs() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_wasm()).list_deployed_snses({})).data;
    });
}
export function useListDeployedSNSs() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getListDeployedSNSs();
    }), []));
}
export function getSnsTokensInfo(page) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        try {
            result = yield fetch(`https://3r4gx-wqaaa-aaaaq-aaaia-cai.icp0.io/v1/sns/list/page/${page}/slow.json`).catch(() => undefined);
        }
        catch (error) {
            console.log(error);
        }
        if (!result || result.ok === false)
            return undefined;
        return (yield result.json());
    });
}
const sns_all_tokens_info_call_rounds = 5;
export function getSnsAllTokensInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        let fetch_index = 0;
        let fetch_done = false;
        let data = [];
        const fetch = (index) => __awaiter(this, void 0, void 0, function* () {
            fetch_index += 1;
            yield Promise.all(Array.from({ length: sns_all_tokens_info_call_rounds }, (_, i) => i).map((call_index) => __awaiter(this, void 0, void 0, function* () {
                const page = call_index + index * sns_all_tokens_info_call_rounds;
                const result = yield getSnsTokensInfo(page);
                if (!result)
                    return undefined;
                data = data.concat(result);
                if (result.length < 10) {
                    fetch_done = true;
                }
                return undefined;
            })));
            if (!fetch_done) {
                yield fetch(fetch_index);
            }
        });
        yield fetch(fetch_index);
        return data
            .sort((a, b) => {
            if (a.index < b.index)
                return -1;
            if (a.index > b.index)
                return 1;
            return 0;
        })
            .map((e) => ({...e, meta: {...e.meta, logo: `https://3r4gx-wqaaa-aaaaq-aaaia-cai.icp0.io${e.meta.logo}`}}));
    });
}
export function useSnsAllTokensInfo() {
    const [snsAllTokensInfo, setSnsAllTokensInfo] = useState(undefined);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        function call() {
            return __awaiter(this, void 0, void 0, function* () {
                setLoading(true);
                const data = yield getSnsAllTokensInfo();
                setSnsAllTokensInfo(data);
                setLoading(false);
            });
        }
        call();
    }, []);
    return useMemo(() => ({
        loading,
        result: snsAllTokensInfo,
    }), [loading, snsAllTokensInfo]);
}
// # sourceMappingURL=useListDeployedSNSs.js.map