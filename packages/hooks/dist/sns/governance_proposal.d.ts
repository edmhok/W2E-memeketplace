import type { ProposalData, ProposalId } from "@w2e/types";
export declare function getProposal(canisterId: string, proposal_id: bigint): Promise<ProposalData>;
export declare function useProposal(
  governance_id: string | undefined,
  proposal_id: bigint | undefined,
  refresh?: number,
): import("@w2e/types").CallResult<ProposalData>;
export interface GetListProposalsArgs {
  canisterId: string;
  include_reward_status: Int32Array | number[];
  limit: number;
  include_status: Int32Array | number[];
  exclude_type: BigUint64Array | bigint[];
  before_proposal: [] | [ProposalId];
}
export declare function getListProposals({
  canisterId,
  include_reward_status,
  include_status,
  exclude_type,
  before_proposal,
  limit,
}: GetListProposalsArgs): Promise<ProposalData[]>;
export interface UseListProposalsArgs {
  canisterId: string | undefined;
  include_reward_status: Int32Array | number[];
  limit: number;
  include_status: Int32Array | number[];
  exclude_type: BigUint64Array | bigint[];
  before_proposal: [] | [ProposalId];
  refresh?: number;
}
export declare function useListProposals({
  canisterId,
  limit,
  refresh,
  include_reward_status,
  include_status,
  exclude_type,
  before_proposal,
}: UseListProposalsArgs): import("@w2e/types").CallResult<ProposalData[]>;
//# sourceMappingURL=governance_proposal.d.ts.map
