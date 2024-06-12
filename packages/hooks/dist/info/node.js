import { useCallback } from "react";
import { resultFormat } from "@w2e/utils";
import { node_index } from "@w2e/actor";
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

export function getInfoAllPools() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield node_index()).getAllPools()).data;
    });
}
export function useInfoAllPools() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getInfoAllPools();
    }), []));
}
export function getInfoAllTokens() {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield node_index()).getAllTokens()).data;
    });
}
export function useInfoAllTokens() {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        return yield getInfoAllTokens();
    }), []));
}
export function getInfoPoolStorageIds(pool) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield node_index()).poolStorage(pool)).data;
    });
}
export function useInfoPoolStorageIds(pool) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!pool)
            return undefined;
        return yield getInfoPoolStorageIds(pool);
    }), [pool]));
}
export function getInfoTokenStorageIds(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield node_index()).tokenStorage(token)).data;
    });
}
export function useInfoTokenStorageIds(token) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!token)
            return undefined;
        return yield getInfoTokenStorageIds(token);
    }), [token]));
}
export function getInfoUserStorageIds(principal) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield node_index()).userStorage(principal)).data;
    });
}
export function useInfoUserStorageIds(principal) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!principal)
            return undefined;
        return yield getInfoUserStorageIds(principal);
    }), [principal]));
}
// # sourceMappingURL=node.js.map