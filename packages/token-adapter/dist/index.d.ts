import { ActorIdentity, Override } from "@w2e/types";
import {
  HoldersRequest,
  TotalHoldersRequest,
  SupplyRequest,
  BalanceRequest,
  TransferRequest,
  SetFeeRequest,
  SetFeeToRequest,
  TransactionRequest,
  ApproveRequest,
  AllowanceRequest,
  MetadataRequest,
  SetLogoRequest,
  ActualReceivedByTransferRequest,
} from "./BaseTokenAdapter";
import { EXTAdapter, EXTTokenAdapter } from "./EXTAdapter";
import { DIP20Adapter, DIP20TokenAdapter } from "./DIP20Adapter";
import { DIP20WICPAdapter, DIP20WICPTokenAdapter } from "./DIP20WICPAdapter";
import { DIP20XTCAdapter, DIP20XTCTokenAdapter } from "./DIP20XTCAdapter";
import { icrc1Adapter, ICRC1Adapter } from "./ICRC1";
import { icrc2Adapter, ICRC2Adapter } from "./ICRC2";
import { icpAdapter, ICPAdapter } from "./ICP";
import { TOKEN_STANDARD } from "./types";

export type AdapterRequest<T> = T;
export type AdapterIdentityRequest<T> = Override<
  T,
  {
    identity: ActorIdentity;
  }
>;
export declare class TokenAdapter {
  canisterAdapters: Map<string, TOKEN_STANDARD>;

  adapters: Map<
    TOKEN_STANDARD,
    | DIP20TokenAdapter
    | DIP20WICPTokenAdapter
    | DIP20XTCTokenAdapter
    | EXTTokenAdapter
    | ICRC1Adapter
    | ICPAdapter
    | ICRC2Adapter
  >;

  initialAdapter(
    name: TOKEN_STANDARD,
    adapter:
      | DIP20XTCTokenAdapter
      | DIP20WICPTokenAdapter
      | DIP20TokenAdapter
      | EXTTokenAdapter
      | ICRC1Adapter
      | ICRC2Adapter
      | ICPAdapter,
  ): void;

  register({ canisterIds, standard }: { canisterIds: string[]; standard: TOKEN_STANDARD }): void;

  getAll(): Map<string, TOKEN_STANDARD>;

  getAdapter(
    canisterId: string,
  ):
    | DIP20TokenAdapter
    | DIP20WICPTokenAdapter
    | DIP20XTCTokenAdapter
    | EXTTokenAdapter
    | ICRC1Adapter
    | ICPAdapter
    | ICRC2Adapter;

  getAdapterByName(
    adapterName: TOKEN_STANDARD | undefined,
  ):
    | DIP20TokenAdapter
    | DIP20WICPTokenAdapter
    | DIP20XTCTokenAdapter
    | EXTTokenAdapter
    | ICRC1Adapter
    | ICPAdapter
    | ICRC2Adapter;

  totalHolders({ canisterId }: AdapterRequest<TotalHoldersRequest>): Promise<import("@w2e/types").StatusResult<bigint>>;

  holders({
    params,
    canisterId,
  }: AdapterRequest<HoldersRequest>): Promise<
    import("@w2e/types").StatusResult<import("@w2e/types").PaginationResult<import("@w2e/types").TokenHolder>>
  >;

  supply({ canisterId }: AdapterRequest<SupplyRequest>): Promise<import("@w2e/types").StatusResult<bigint>>;

  balance({ canisterId, params }: AdapterRequest<BalanceRequest>): Promise<import("@w2e/types").StatusResult<bigint>>;

  transfer({
    canisterId,
    params,
    identity,
  }: AdapterIdentityRequest<TransferRequest>): Promise<import("@w2e/types").StatusResult<bigint>>;

  setFee({
    canisterId,
    identity,
    params,
  }: AdapterIdentityRequest<SetFeeRequest>): Promise<import("@w2e/types").StatusResult<boolean>>;

  setFeeTo({
    canisterId,
    identity,
    params,
  }: AdapterIdentityRequest<SetFeeToRequest>): Promise<import("@w2e/types").StatusResult<boolean>>;

  transactions({
    canisterId,
    params,
  }: AdapterRequest<TransactionRequest>): Promise<
    import("@w2e/types").StatusResult<import("@w2e/types").PaginationResult<import("./types").Transaction>>
  >;

  approve({
    canisterId,
    identity,
    params,
  }: AdapterRequest<ApproveRequest>): Promise<import("@w2e/types").StatusResult<boolean>>;

  allowance({
    canisterId,
    params,
  }: AdapterRequest<AllowanceRequest>): Promise<import("@w2e/types").StatusResult<bigint>>;

  metadata({ canisterId }: AdapterRequest<MetadataRequest>): Promise<{
    status: import("@w2e/types").ResultStatus;
    data: import("./types").Metadata;
    message: string;
  }>;

  setLogo({
    canisterId,
    identity,
    params,
  }: AdapterIdentityRequest<SetLogoRequest>): Promise<import("@w2e/types").StatusResult<boolean>>;

  actualReceivedByTransfer(request: ActualReceivedByTransferRequest): import("bignumber.js").BigNumber;

  getMintingAccount({ canisterId }: { canisterId: string }): Promise<
    import("@w2e/types").StatusResult<{
      owner: string;
      sub: number[];
    }>
  >;
}
export declare const tokenAdapter: TokenAdapter;
export declare const registerTokens: ({
  canisterIds,
  standard,
}: {
  canisterIds: string[];
  standard: TOKEN_STANDARD;
}) => void;
export {
  EXTAdapter,
  DIP20Adapter,
  DIP20XTCAdapter,
  DIP20WICPAdapter,
  ICRC1Adapter,
  ICRC2Adapter,
  icrc1Adapter,
  icrc2Adapter,
  icpAdapter,
  ICPAdapter,
  TOKEN_STANDARD,
};
export * from "./token-standard-verification";
export * from "./utils";
// # sourceMappingURL=index.d.ts.map
