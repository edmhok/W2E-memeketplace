import { Principal } from "@dfinity/principal";
import type {
  NervousSystemParameters,
  Neuron,
  NeuronId,
  ManageNeuronResponse,
  ListNervousSystemFunctionsResponse,
} from "@w2e/types";

export declare function getNeuron(canisterId: string, neuron_id: Uint8Array | number[]): Promise<Neuron>;
export declare function useNeuron(
  governance_id: string | undefined,
  neuron_id: Uint8Array | number[] | undefined,
  refresh?: number,
): import("@w2e/types").CallResult<Neuron>;
export interface GetListNeuronsArgs {
  canisterId: string;
  of_principal: string | undefined;
  limit: number;
  start_page_at: Uint8Array | number[] | undefined;
}
export declare function getListNeurons({
  canisterId,
  of_principal,
  limit,
  start_page_at,
}: GetListNeuronsArgs): Promise<Neuron[]>;
export interface UseListNeuronsArgs {
  canisterId: string | undefined;
  of_principal?: string;
  limit: number;
  start_page_at?: Uint8Array | number[];
  refresh?: boolean | number;
}
export declare function useListNeurons({
  canisterId,
  of_principal,
  limit,
  start_page_at,
  refresh,
}: UseListNeuronsArgs): import("@w2e/types").CallResult<Neuron[]>;
export declare function getNervousSystemParameters(governance_id: string): Promise<NervousSystemParameters>;
export declare function useNervousSystemParameters(
  governance_id: string | undefined,
): import("@w2e/types").CallResult<NervousSystemParameters>;
export declare function getNeuronSystemFunctions(governance_id: string): Promise<ListNervousSystemFunctionsResponse>;
export declare function useNeuronSystemFunctions(
  governance_id: string | undefined,
): import("@w2e/types").CallResult<ListNervousSystemFunctionsResponse>;
export declare function splitNeuron(
  governance_id: string,
  neuron_id: Uint8Array | number[],
  amount: bigint,
  memo: bigint,
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function stopDissolvingNeuron(
  governance_id: string,
  neuron_id: Uint8Array | number[],
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function dissolveNeuron(
  governance_id: string,
  neuron_id: Uint8Array | number[],
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function increaseNeuronDelay(
  governance_id: string,
  neuron_id: Uint8Array | number[],
  additionalDissolveDelaySeconds: bigint,
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function autoStakeMaturity(
  governance_id: string,
  neuron_id: Uint8Array | number[],
  autoStake: boolean,
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function claimOrRefreshNeuronFromAccount(
  governance_id: string,
  controller: Principal,
  memo: bigint,
  subaccount: number[],
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function claimOrRefreshNeuron(
  governance_id: string,
  neuron_id: Uint8Array | number[],
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function disburseNeuron(
  governance_id: string,
  neuron_id: Uint8Array | number[],
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function disburseNeuronMaturity(
  governance_id: string,
  neuron_id: Uint8Array | number[],
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function stakeNeuronMaturity(
  governance_id: string,
  neuron_id: Uint8Array | number[],
  percent: number,
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function setNeuronFollows(
  governance_id: string,
  neuron_id: Uint8Array | number[],
  function_id: bigint,
  follows: NeuronId[],
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function neuronVoteForProposal(
  governance_id: string,
  neuron_id: Uint8Array | number[],
  vote: number,
  proposal_id: bigint,
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function neuronAddPermissions(
  governance_id: string,
  neuron_id: Uint8Array | number[],
  principal: Principal,
  permissions: Int32Array | number[],
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
export declare function neuronRemovePermissions(
  governance_id: string,
  neuron_id: Uint8Array | number[],
  principal: Principal,
  permissions: Int32Array | number[],
): Promise<import("@w2e/types").StatusResult<ManageNeuronResponse>>;
// # sourceMappingURL=governance.d.ts.map
