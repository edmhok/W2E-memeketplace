import { useCallback } from "react";
import { tokenClaimController, tokenClaimStorage } from "@w2e/actor";
import { resultFormat, isAvailablePageArgs, availableArgsNull, } from "@w2e/utils";
import { Principal } from "@dfinity/principal";
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

export function getEvent(eventId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimController()).getEvent(eventId)).data;
    });
}
export function useEvent(eventId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!eventId)
            return undefined;
        return yield getEvent(eventId);
    }), [eventId]), reload);
}
export function claimToken(eventId, storageId, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimStorage(storageId, identity)).userClaim(eventId));
    });
}
export function createClaimEvent(args, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimController(identity)).create(args));
    });
}
export function setClaimEventReady(id, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimController(identity)).ready(id));
    });
}
export function setClaimEventState(id, state, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimController(identity)).setStatus(id, state));
    });
}
export function setClaimEventData(id, args, identity) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimController(identity)).importQuota(id, args));
    });
}
export function getClaimEvents(offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimController()).findAllEvents(BigInt(offset), BigInt(limit))).data;
    });
}
export function useClaimEvents(offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getClaimEvents(offset, limit);
    }), [offset, limit]), reload);
}
export function getUserCreatedClaimEvents(user, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimController()).findCreateEvents(Principal.fromText(user), BigInt(offset), BigInt(limit))).data;
    });
}
export function useUserCreatedClaimEvents(user, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!user || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getUserCreatedClaimEvents(user, offset, limit);
    }), [user, offset, limit]), reload);
}
export function getUserClaimEvents(user, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimController()).findUserEvents(Principal.fromText(user), BigInt(offset), BigInt(limit))).data;
    });
}
export function useUserClaimEvents(user, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!user || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getUserClaimEvents(user, offset, limit);
    }), [user, offset, limit]), reload);
}
export function getClaimEventTransactions(id, state, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimController()).findEventRecords(id, state === undefined ? [] : availableArgsNull(BigInt(state)), BigInt(offset), BigInt(limit))).data;
    });
}
export function useClaimEventTransactions(id, state, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!id || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getClaimEventTransactions(id, state, offset, limit);
    }), [id, state, offset, limit]), reload);
}
export function getUserClaimEventTransactions(user, id, state, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield tokenClaimController()).findUserEventRecords(Principal.fromText(user), id === undefined ? [] : availableArgsNull(id), state === undefined ? [] : availableArgsNull(BigInt(state)), BigInt(offset), BigInt(limit))).data;
    });
}
export function useUserClaimEventTransactions(user, id, state, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!user || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getUserClaimEventTransactions(user, id, state, offset, limit);
    }), [user, state, offset, limit]), reload);
}
// # sourceMappingURL=index.js.map