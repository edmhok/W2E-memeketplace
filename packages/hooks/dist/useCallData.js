var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useMemo, useEffect, useRef } from "react";
import { pageArgsFormat, sleep } from "@w2e/utils";
export function useCallsData(fn, reload) {
    const [result, setResult] = useState(undefined);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (fn) {
            setResult(undefined);
            setLoading(true);
            fn().then((result) => {
                setResult(result);
                setLoading(false);
            });
        }
    }, [fn, reload]);
    return useMemo(() => ({
        result,
        loading,
    }), [result, loading]);
}
export function useLatestDataCall(fn, reload) {
    const [loading, setLoading] = useState(false);
    const indexRef = useRef(0);
    const resultsRef = useRef({});
    useEffect(() => {
        if (fn) {
            setLoading(true);
            indexRef.current = indexRef.current + 1;
            let index = indexRef.current;
            fn().then((result) => {
                resultsRef.current = Object.assign(Object.assign({}, resultsRef.current), { [String(index)]: result });
                setLoading(false);
            });
        }
    }, [fn, reload]);
    return useMemo(() => {
        return {
            result: resultsRef.current[indexRef.current],
            loading,
        };
    }, [resultsRef.current, indexRef.current, loading]);
}
export function usePaginationAllData(callback, limit, reload = false) {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const fetch = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
        return yield callback(offset, limit).then((result) => {
            if (result) {
                const content = result.content;
                if (content && content.length > 0) {
                    return content;
                }
                return [];
            }
            return [];
        });
    });
    const fetchDone = (_list) => __awaiter(this, void 0, void 0, function* () {
        let data = [];
        Object.keys(_list).forEach((key) => {
            data = data.concat(_list[key]);
        });
        setList(data);
    });
    useEffect(() => {
        function getTotalElements() {
            return __awaiter(this, void 0, void 0, function* () {
                if (callback) {
                    const result = yield callback(0, 1);
                    if (result) {
                        return result.totalElements;
                    }
                    else {
                        return BigInt(0);
                    }
                }
                return BigInt(0);
            });
        }
        function call() {
            return __awaiter(this, void 0, void 0, function* () {
                const totalElements = yield getTotalElements();
                if (Number(totalElements) !== 0) {
                    const num = Number(totalElements) % limit;
                    const totalPage = num === 0
                        ? Number(totalElements) / limit
                        : parseInt(String(Number(totalElements) / limit)) + 1;
                    setLoading(true);
                    let _list = {};
                    for (let i = 0; i < totalPage; i++) {
                        const [offset] = pageArgsFormat(i + 1, limit);
                        if (totalPage % 80 === 0) {
                            yield sleep(2000);
                        }
                        const _fetch = () => {
                            fetch(offset, limit)
                                .then((content) => __awaiter(this, void 0, void 0, function* () {
                                if (content && content.length > 0) {
                                    _list[`${i + 1}`] = content;
                                    if (Object.keys(_list).length === totalPage) {
                                        yield fetchDone(_list);
                                        setLoading(false);
                                    }
                                }
                            }))
                                .catch((error) => {
                                console.log(error);
                                _fetch();
                            });
                        };
                        _fetch();
                    }
                }
                else {
                    setList([]);
                    setLoading(false);
                }
            });
        }
        call();
    }, [reload, callback]);
    return useMemo(() => ({
        result: list,
        loading,
    }), [list, loading]);
}
export function getPaginationAllData(callback, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const fetch = (offset, limit) => __awaiter(this, void 0, void 0, function* () {
            return yield callback(offset, limit);
        });
        const _result = yield fetch(0, 1);
        const totalElements = Number((_a = _result === null || _result === void 0 ? void 0 : _result.totalElements) !== null && _a !== void 0 ? _a : 0);
        const totalPage = totalElements % limit === 0
            ? parseInt(String(totalElements / limit))
            : parseInt(String(totalElements / limit)) + 1;
        const promise = [];
        for (let i = 1; i < totalPage + 1; i++) {
            const [offset] = pageArgsFormat(i, limit);
            promise.push(fetch(offset, limit));
        }
        const result = yield Promise.all(promise);
        return result
            .filter((res) => !!res)
            .reduce((prev, curr) => {
            var _a;
            return prev.concat((_a = curr === null || curr === void 0 ? void 0 : curr.content) !== null && _a !== void 0 ? _a : []);
        }, []);
    });
}
//# sourceMappingURL=useCallData.js.map