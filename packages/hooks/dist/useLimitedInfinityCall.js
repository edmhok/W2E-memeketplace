var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useMemo, useEffect } from "react";
export function useLimitedInfinityCall(callback, limit, reload = false) {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    useEffect(() => {
        function call() {
            return __awaiter(this, void 0, void 0, function* () {
                setLoading(true);
                const result = yield getLimitedInfinityCall(callback, limit, 5);
                setList(result);
            });
        }
        call();
    }, [reload, callback, limit]);
    return useMemo(() => ({
        result: list,
        loading,
    }), [list, loading]);
}
export function fetch_data(start, limit, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield callback(start, limit);
        return result;
    });
}
/**
 * @description getLimitedInfinityCall
 * @param callback The call to fetch the data
 * @param limit The data length in each call
 * @param call_rounds Number of call
 */
export function getLimitedInfinityCall(callback_1, limit_1) {
    return __awaiter(this, arguments, void 0, function* (callback, limit, call_rounds = 10, start_index) {
        let data = [];
        let fetch_index = 0;
        let fetch_done = false;
        const fetch = (index) => __awaiter(this, void 0, void 0, function* () {
            fetch_index += 1;
            yield Promise.all(Array.from({ length: call_rounds }, (_, i) => i).map((call_index) => __awaiter(this, void 0, void 0, function* () {
                const start = (start_index !== null && start_index !== void 0 ? start_index : 0) + call_index * limit + index * limit * call_rounds;
                const result = yield fetch_data(start, limit, callback);
                if (!result) {
                    return undefined;
                }
                data = data.concat(result);
                if (result.length < limit) {
                    fetch_done = true;
                }
                return undefined;
            })));
            if (!fetch_done) {
                yield fetch(fetch_index);
            }
        });
        yield fetch(fetch_index);
        return data;
    });
}
//# sourceMappingURL=useLimitedInfinityCall.js.map