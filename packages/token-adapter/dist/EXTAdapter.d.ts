import { PaginationResult, ResultStatus } from "@w2e/types";
import { EXTToken } from "@w2e/candid";
import { TokenHolder, Transaction, Metadata } from "./types";
import {
  BaseTokenAdapter,
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
  BaseTokenResult,
} from "./BaseTokenAdapter";

export declare class EXTTokenAdapter extends BaseTokenAdapter<EXTToken> {
  holders({
    canisterId,
    params,
  }: HoldersRequest): Promise<import("@w2e/types").StatusResult<PaginationResult<TokenHolder>>>;

  totalHolders({ canisterId }: TotalHoldersRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  supply({ canisterId }: SupplyRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  balance({ canisterId, params }: BalanceRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  transfer({ canisterId, identity, params }: TransferRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  setFee({ canisterId, identity, params }: SetFeeRequest): Promise<import("@w2e/types").StatusResult<boolean>>;

  setFeeTo({ canisterId, identity, params }: SetFeeToRequest): Promise<import("@w2e/types").StatusResult<boolean>>;

  transactions({
    canisterId,
    params,
  }: TransactionRequest): Promise<import("@w2e/types").StatusResult<PaginationResult<Transaction>>>;

  approve({ canisterId, params, identity }: ApproveRequest): Promise<import("@w2e/types").StatusResult<boolean>>;

  allowance({ canisterId, params }: AllowanceRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  metadata({ canisterId }: MetadataRequest): Promise<{
    status: ResultStatus;
    data: Metadata;
    message: string;
  }>;

  setLogo({ canisterId, params, identity }: SetLogoRequest): Promise<import("@w2e/types").StatusResult<boolean>>;

  actualReceivedByTransfer({ amount }: ActualReceivedByTransferRequest): import("bignumber.js").BigNumber;

  extensions({ canisterId }: { canisterId: string }): Promise<string[]>;

  getMintingAccount({ canisterId }: { canisterId: string }): BaseTokenResult<{
    owner: string;
    sub: number[] | undefined;
  }>;
}
export declare const EXTAdapter: EXTTokenAdapter;
// # sourceMappingURL=EXTAdapter.d.ts.map
