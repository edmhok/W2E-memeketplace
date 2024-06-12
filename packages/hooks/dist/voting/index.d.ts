import type {
  ActorIdentity,
  PaginationResult,
  ProjectInfo,
  ProposalInfo,
  UserVotePowersInfo,
  UserVoteRecord,
  VotingFileChunk,
  CommitBatchArgs,
  ProposalCreateInfo,
} from "@w2e/types";
import { Principal } from "@dfinity/principal";

export declare function createVotingCanister(
  identity: ActorIdentity,
  args: ProjectInfo,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function getVotingProjects(offset: number, limit: number): Promise<PaginationResult<ProjectInfo>>;
export declare function useVotingProjects(
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<ProjectInfo>>;
export declare function getVotingProjectDetails(canisterId: string): Promise<ProjectInfo>;
export declare function useVotingProjectDetails(
  canisterId: string | undefined,
): import("@w2e/types").CallResult<ProjectInfo>;
export declare function createVotingProposal(
  identity: ActorIdentity,
  canisterId: string,
  args: ProposalCreateInfo,
): Promise<import("@w2e/types").StatusResult<string>>;
export declare function deleteVotingProposal(
  identity: ActorIdentity,
  canisterId: string,
  proposalId: string,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function getVotingProposal(canisterId: string, proposalId: string): Promise<ProposalInfo>;
export declare function useVotingProposal(
  canisterId: string | undefined,
  proposalId: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<ProposalInfo>;
export declare function getVotingProposals(
  canisterId: string,
  address: string | undefined,
  state: number | undefined,
  offset: number,
  limit: number,
): Promise<PaginationResult<ProposalInfo>>;
export declare function useVotingProposals(
  canisterId: string | undefined,
  address: string | undefined,
  state: number | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<ProposalInfo>>;
export declare function setVotingProposalState(
  identity: ActorIdentity,
  canisterId: string,
  proposalId: string,
  state: number,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function setVotingProposalPowers(
  identity: ActorIdentity,
  canisterId: string,
  proposalId: string,
  powers: UserVotePowersInfo[],
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function voting(
  identity: ActorIdentity,
  canisterId: string,
  proposalId: string,
  value: string,
  powers: number,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function getVotingTransactions(
  canisterId: string,
  proposalId: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<UserVoteRecord>>;
export declare function useVotingTransactions(
  canisterId: string | undefined,
  proposalId: string | undefined,
  offset: number,
  limit: number,
): import("@w2e/types").CallResult<PaginationResult<UserVoteRecord>>;
export declare function getUserVotingPowers(
  canisterId: string,
  proposalId: string | undefined,
  address: string | undefined,
  offset: number,
  limit: number,
): Promise<PaginationResult<UserVotePowersInfo>>;
export declare function useUserVotingPowers(
  canisterId: string | undefined,
  proposalId: string | undefined,
  address: string | undefined,
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<UserVotePowersInfo>>;
export declare function addVotingAuthorityUsers(
  identity: ActorIdentity,
  canisterId: string,
  user: Principal,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function deleteVotingAuthorityUsers(
  identity: ActorIdentity,
  canisterId: string,
  user: Principal,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function getVotingAuthorityUsers(
  canisterId: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<Principal>>;
export declare function useVotingAuthorityUsers(
  canisterId: string | undefined,
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<Principal>>;
export declare function createVotingBatch(
  identity: ActorIdentity,
  canisterId: string,
  projectId: string,
): Promise<
  import("@w2e/types").StatusResult<{
    batch_id: bigint;
  }>
>;
export declare function createVotingChunk(
  identity: ActorIdentity,
  canisterId: string,
  chunk: VotingFileChunk,
  projectId: string,
): Promise<
  import("@w2e/types").StatusResult<{
    chunk_id: bigint;
  }>
>;
export declare function commitVotingChunk(
  identity: ActorIdentity,
  canisterId: string,
  args: CommitBatchArgs,
  projectId: string,
): Promise<import("@w2e/types").StatusResult<boolean>>;
// # sourceMappingURL=index.d.ts.map
