import type { ActorIdentity, PaginationResult, ClaimEventInfo, ClaimQuota, ClaimTransaction } from "@w2e/types";

export declare function getEvent(eventId: string): Promise<ClaimEventInfo>;
export declare function useEvent(
  eventId: string | undefined,
  reload?: boolean,
): import("@w2e/types").CallResult<ClaimEventInfo>;
export declare function claimToken(
  eventId: string,
  storageId: string,
  identity: ActorIdentity,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function createClaimEvent(
  args: ClaimEventInfo,
  identity: ActorIdentity,
): Promise<import("@w2e/types").StatusResult<string>>;
export declare function setClaimEventReady(
  id: string,
  identity: ActorIdentity,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function setClaimEventState(
  id: string,
  state: boolean,
  identity: ActorIdentity,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function setClaimEventData(
  id: string,
  args: ClaimQuota[],
  identity: ActorIdentity,
): Promise<import("@w2e/types").StatusResult<boolean>>;
export declare function getClaimEvents(offset: number, limit: number): Promise<PaginationResult<ClaimEventInfo>>;
export declare function useClaimEvents(
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<ClaimEventInfo>>;
export declare function getUserCreatedClaimEvents(
  user: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<ClaimEventInfo>>;
export declare function useUserCreatedClaimEvents(
  user: string | undefined,
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<ClaimEventInfo>>;
export declare function getUserClaimEvents(
  user: string,
  offset: number,
  limit: number,
): Promise<PaginationResult<ClaimEventInfo>>;
export declare function useUserClaimEvents(
  user: string | undefined,
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<ClaimEventInfo>>;
export declare function getClaimEventTransactions(
  id: string,
  state: number | undefined,
  offset: number,
  limit: number,
): Promise<PaginationResult<ClaimTransaction>>;
export declare function useClaimEventTransactions(
  id: string | undefined,
  state: number | undefined,
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<ClaimTransaction>>;
export declare function getUserClaimEventTransactions(
  user: string,
  id: string | undefined,
  state: number | undefined,
  offset: number,
  limit: number,
): Promise<PaginationResult<ClaimTransaction>>;
export declare function useUserClaimEventTransactions(
  user: string | undefined,
  id: string | undefined,
  state: number | undefined,
  offset: number,
  limit: number,
  reload?: boolean,
): import("@w2e/types").CallResult<PaginationResult<ClaimTransaction>>;
// # sourceMappingURL=index.d.ts.map
