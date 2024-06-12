import { sns_governance } from "@w2e/actor";
import { useCallback } from "react";
import { availableArgsNull, resultFormat } from "@w2e/utils";
import { Principal } from "@dfinity/principal";
import { useCallsData } from "../useCallData";
import { neuronOperationCommand } from "./neuronCommand";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function getNeuron(canisterId, neuron_id) {
    return __awaiter(this, void 0, void 0, function* () {
        let _a;
        const result = (_a = resultFormat(yield (yield sns_governance(canisterId)).get_neuron({
            neuron_id: availableArgsNull({ id: neuron_id }),
        })).data) === null || _a === void 0 ? void 0 : _a.result;
        const neuron = result[0] ? ("Neuron" in result[0] ? result[0].Neuron : undefined) : undefined;
        return neuron;
    });
}
export function useNeuron(governance_id, neuron_id, refresh) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!governance_id || !neuron_id)
            return undefined;
        return yield getNeuron(governance_id, neuron_id);
    }), [governance_id, neuron_id]), refresh);
}
export function getListNeurons(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, of_principal, limit, start_page_at }) {
        let _b;
        return (_b = resultFormat(yield (yield sns_governance(canisterId)).list_neurons({
            of_principal: availableArgsNull(of_principal ? Principal.fromText(of_principal) : undefined),
            limit,
            start_page_at: availableArgsNull(start_page_at ? { id: start_page_at } : undefined),
        })).data) === null || _b === void 0 ? void 0 : _b.neurons;
    });
}
export function useListNeurons({ canisterId, of_principal, limit, start_page_at, refresh }) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!canisterId || !of_principal)
            return undefined;
        return yield getListNeurons({ canisterId, of_principal, limit, start_page_at });
    }), [canisterId, of_principal, limit, start_page_at]), refresh);
}
export function getNervousSystemParameters(governance_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id)).get_nervous_system_parameters(null)).data;
    });
}
export function useNervousSystemParameters(governance_id) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!governance_id)
            return undefined;
        return yield getNervousSystemParameters(governance_id);
    }), [governance_id]));
}
export function getNeuronSystemFunctions(governance_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id)).list_nervous_system_functions()).data;
    });
}
export function useNeuronSystemFunctions(governance_id) {
    return useCallsData(useCallback(() => __awaiter(this, void 0, void 0, function* () {
        if (!governance_id)
            return undefined;
        return yield getNeuronSystemFunctions(governance_id);
    }), [governance_id]));
}
export function splitNeuron(governance_id, neuron_id, amount, memo) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: [
                {
                    Split: {
                        memo,
                        amount_e8s: amount,
                    },
                },
            ],
        }));
    });
}
export function stopDissolvingNeuron(governance_id, neuron_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: neuronOperationCommand({
                StopDissolving: {},
            }),
        }));
    });
}
export function dissolveNeuron(governance_id, neuron_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: neuronOperationCommand({ StartDissolving: {} }),
        }));
    });
}
export function increaseNeuronDelay(governance_id, neuron_id, additionalDissolveDelaySeconds) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: neuronOperationCommand({
                IncreaseDissolveDelay: {
                    additional_dissolve_delay_seconds: Number(additionalDissolveDelaySeconds),
                },
            }),
        }));
    });
}
export function autoStakeMaturity(governance_id, neuron_id, autoStake) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: neuronOperationCommand({
                ChangeAutoStakeMaturity: {
                    requested_setting_for_auto_stake_maturity: autoStake,
                },
            }),
        }));
    });
}
export function claimOrRefreshNeuronFromAccount(governance_id, controller, memo, subaccount) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount,
            command: [
                {
                    ClaimOrRefresh: {
                        by: [
                            {
                                MemoAndController: {
                                    controller: controller === undefined ? [] : [controller],
                                    memo,
                                },
                            },
                        ],
                    },
                },
            ],
        }));
    });
}
export function claimOrRefreshNeuron(governance_id, neuron_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: [
                {
                    ClaimOrRefresh: {
                        by: [
                            {
                                NeuronId: {},
                            },
                        ],
                    },
                },
            ],
        }));
    });
}
export function disburseNeuron(governance_id, neuron_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: [
                {
                    Disburse: {
                        to_account: [],
                        amount: [],
                    },
                },
            ],
        }));
    });
}
export function disburseNeuronMaturity(governance_id, neuron_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: [
                {
                    DisburseMaturity: {
                        to_account: [],
                        percentage_to_disburse: 100,
                    },
                },
            ],
        }));
    });
}
export function stakeNeuronMaturity(governance_id, neuron_id, percent) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: [
                {
                    StakeMaturity: {
                        percentage_to_stake: [percent],
                    },
                },
            ],
        }));
    });
}
export function setNeuronFollows(governance_id, neuron_id, function_id, follows) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: [
                {
                    Follow: {
                        function_id,
                        followees: follows,
                    },
                },
            ],
        }));
    });
}
export function neuronVoteForProposal(governance_id, neuron_id, vote, proposal_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: [
                {
                    RegisterVote: {
                        vote,
                        proposal: [{ id: proposal_id }],
                    },
                },
            ],
        }));
    });
}
export function neuronAddPermissions(governance_id, neuron_id, principal, permissions) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: [
                {
                    AddNeuronPermissions: {
                        permissions_to_add: [
                            {
                                permissions,
                            },
                        ],
                        principal_id: [principal],
                    },
                },
            ],
        }));
    });
}
export function neuronRemovePermissions(governance_id, neuron_id, principal, permissions) {
    return __awaiter(this, void 0, void 0, function* () {
        return resultFormat(yield (yield sns_governance(governance_id, true)).manage_neuron({
            subaccount: [...neuron_id],
            command: [
                {
                    RemoveNeuronPermissions: {
                        permissions_to_remove: [
                            {
                                permissions,
                            },
                        ],
                        principal_id: [principal],
                    },
                },
            ],
        }));
    });
}
// # sourceMappingURL=governance.js.map