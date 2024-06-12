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
import { isAvailablePageArgs, availableArgsNull, resultFormat, } from "@w2e/utils";
import { useCallsData } from "../useCallData";
import { votingCanister, votingController, votingFile } from "@w2e/actor";
export function createVotingCanister(identity, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingController(identity)).create(args));
    });
}
export function getVotingProjects(offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingController()).findProjectPage(BigInt(offset), BigInt(limit))).data;
    });
}
export function useVotingProjects(offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getVotingProjects(offset, limit);
    }), [offset, limit]));
}
export function getVotingProjectDetails(canisterId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId)).getProject()).data;
    });
}
export function useVotingProjectDetails(canisterId) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getVotingProjectDetails(canisterId);
    }), [canisterId]));
}
export function createVotingProposal(identity, canisterId, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId, identity)).create(args));
    });
}
export function deleteVotingProposal(identity, canisterId, proposalId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId, identity)).deleteProposal(proposalId));
    });
}
export function getVotingProposal(canisterId, proposalId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId)).getProposal(proposalId)).data;
    });
}
export function useVotingProposal(canisterId, proposalId, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !proposalId)
            return undefined;
        return yield getVotingProposal(canisterId, proposalId);
    }), [proposalId, canisterId]), reload);
}
export function getVotingProposals(canisterId, address, state, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId)).findPage(availableArgsNull(address), availableArgsNull(!!state || state === 0 ? BigInt(state) : undefined), BigInt(offset), BigInt(limit))).data;
    });
}
export function useVotingProposals(canisterId, address, state, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getVotingProposals(canisterId, address, state, offset, limit);
    }), [canisterId, address, state, offset, limit]));
}
export function setVotingProposalState(identity, canisterId, proposalId, state) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId, identity)).setState(proposalId, BigInt(state)));
    });
}
export function setVotingProposalPowers(identity, canisterId, proposalId, powers) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId, identity)).setVotePower(proposalId, powers));
    });
}
export function voting(identity, canisterId, proposalId, value, powers) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId, identity)).vote(proposalId, value, BigInt(powers)));
    });
}
export function getVotingTransactions(canisterId, proposalId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId)).findRecordPage(proposalId, BigInt(offset), BigInt(limit))).data;
    });
}
export function useVotingTransactions(canisterId, proposalId, offset, limit) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!isAvailablePageArgs(offset, limit) || !canisterId || !proposalId)
            return undefined;
        return yield getVotingTransactions(canisterId, proposalId, offset, limit);
    }), [offset, limit, proposalId, canisterId]));
}
export function getUserVotingPowers(canisterId, proposalId, address, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId)).findVotePower(availableArgsNull(proposalId), availableArgsNull(address), BigInt(offset), BigInt(limit))).data;
    });
}
export function useUserVotingPowers(canisterId, proposalId, address, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getUserVotingPowers(canisterId, proposalId, address, offset, limit);
    }), [canisterId, address, proposalId, offset, limit]), reload);
}
export function addVotingAuthorityUsers(identity, canisterId, user) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId, identity)).addAdmin(user));
    });
}
export function deleteVotingAuthorityUsers(identity, canisterId, user) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId, identity)).deleteAdmin(user));
    });
}
export function getVotingAuthorityUsers(canisterId, offset, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingCanister(canisterId)).getAdminList(BigInt(offset), BigInt(limit))).data;
    });
}
export function useVotingAuthorityUsers(canisterId, offset, limit, reload) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !isAvailablePageArgs(offset, limit))
            return undefined;
        return yield getVotingAuthorityUsers(canisterId, offset, limit);
    }), [canisterId, offset, limit]), reload);
}
// -------------- Voting file --------------
export function createVotingBatch(identity, canisterId, projectId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingFile(canisterId, identity)).create_batch(projectId));
    });
}
export function createVotingChunk(identity, canisterId, chunk, projectId) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield votingFile(canisterId, identity)).create_chunk(chunk, projectId));
    });
}
export function commitVotingChunk(identity, canisterId, args, projectId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (yield votingFile(canisterId, identity)).commit_batch(args, projectId);
        return resultFormat(result === undefined ? true : false);
    });
}
// -------------- Voting file --------------
//# sourceMappingURL=index.js.map