var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { splitArr } from "@w2e/utils";
import { useEffect, useMemo, useState } from "react";
export function getPromisesAwait(calls_1) {
    return __awaiter(this, arguments, void 0, function* (calls, limit = 100) {
        let _calls = splitArr(calls, limit);
        let result = [];
        for (let i = 0; i < _calls.length; i++) {
            const res = yield Promise.all(_calls[i]);
            result.push(res);
        }
        return result.flat();
    });
}
export function usePromisesAwait(calls, limit = 100) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        function call() {
            return __awaiter(this, void 0, void 0, function* () {
                if (calls) {
                    setLoading(true);
                    const result = yield getPromisesAwait(calls, limit);
                    setResult(result);
                    setLoading(false);
                }
            });
        }
        call();
    }, [calls, limit]);
    return useMemo(() => ({ loading, result }), [loading, result]);
}
//# sourceMappingURL=usePromisesAwait.js.map