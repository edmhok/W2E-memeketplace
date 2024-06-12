var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useMemo, useState } from "react";
import { getTransactionsByPool, useBaseStorages } from "./info";
export function usePoolTransactions(poolId, offset, limit, refresh) {
    const { result: storageIds } = useBaseStorages();
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState(undefined);
    useEffect(() => {
        function call() {
            return __awaiter(this, void 0, void 0, function* () {
                if (storageIds && poolId) {
                    setTransactions(undefined);
                    setLoading(true);
                    for (let i = 0; i < storageIds.length; i++) {
                        const result = yield getTransactionsByPool(storageIds[i], offset, limit, poolId);
                        if (result) {
                            setTransactions((prevState) => [...result.content, ...(prevState !== null && prevState !== void 0 ? prevState : [])]);
                            if (result.content.length === limit) {
                                break;
                            }
                        }
                        else {
                            yield call();
                        }
                    }
                    setLoading(false);
                }
            });
        }
        call();
    }, [storageIds, poolId, offset, limit, refresh]);
    return useMemo(() => ({ loading, result: transactions }), [loading, transactions]);
}
//# sourceMappingURL=usePoolTransactions.js.map