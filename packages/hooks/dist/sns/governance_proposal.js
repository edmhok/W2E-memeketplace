import { sns_governance } from "@w2e/actor";
import { useCallback } from "react";
import { availableArgsNull, resultFormat } from "@w2e/utils";
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

export function getProposal(canisterId, proposal_id) {
    return __awaiter(this, void 0, void 0, function* () {
        let _a;
        const result = (_a = resultFormat(yield (yield sns_governance(canisterId)).get_proposal({
            proposal_id: availableArgsNull({ id: proposal_id }),
        })).data) === null || _a === void 0 ? void 0 : _a.result;
        if (!result)
            return undefined;
        const proposal = result[0]
            ? "Proposal" in result[0]
                ? result[0].Proposal
                : undefined
            : undefined;
        return proposal;
    });
}
export function useProposal(governance_id, proposal_id, refresh) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!governance_id || proposal_id === undefined)
            return undefined;
        return yield getProposal(governance_id, proposal_id);
    }), [governance_id, proposal_id]), refresh);
}
export function getListProposals(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, include_reward_status, include_status, exclude_type, before_proposal, limit, }) {
        let _b;
        const result = resultFormat(yield (yield sns_governance(canisterId)).list_proposals({
            include_reward_status,
            before_proposal,
            limit,
            exclude_type,
            include_status,
        }));
        return (_b = result.data) === null || _b === void 0 ? void 0 : _b.proposals;
    });
}
export function useListProposals({ canisterId, limit, refresh, include_reward_status, include_status, exclude_type, before_proposal, }) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId)
            return undefined;
        return yield getListProposals({
            canisterId,
            include_status,
            include_reward_status,
            exclude_type,
            limit,
            before_proposal,
        });
    }), [canisterId, include_reward_status, limit, exclude_type, include_status, before_proposal]), refresh);
}
// # sourceMappingURL=governance_proposal.js.map