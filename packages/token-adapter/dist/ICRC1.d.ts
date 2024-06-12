import { PaginationResult, ResultStatus } from "@w2e/types";
import { ICRC1_SERVICE } from "@w2e/candid";
import { TokenHolder, Transaction, Metadata } from "./types";
import {
  BaseTokenAdapter,
  SupplyRequest,
  BalanceRequest,
  TransferRequest,
  GetFeeRequest,
  TransactionRequest,
  MetadataRequest,
  ActualReceivedByTransferRequest,
} from "./BaseTokenAdapter";

export declare class ICRC1Adapter extends BaseTokenAdapter<ICRC1_SERVICE> {
  holders(): Promise<{
    status: ResultStatus;
    data: PaginationResult<TokenHolder>;
    message: string;
  }>;

  totalHolders(): Promise<import("@w2e/types").StatusResult<bigint>>;

  supply({ canisterId }: SupplyRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  balance({ canisterId, params }: BalanceRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  transfer({ canisterId, identity, params }: TransferRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  getFee({ canisterId }: GetFeeRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  setFee(): Promise<import("@w2e/types").StatusResult<boolean>>;

  setFeeTo(): Promise<import("@w2e/types").StatusResult<boolean>>;

  transactions({
    canisterId,
    params,
  }: TransactionRequest): Promise<import("@w2e/types").StatusResult<PaginationResult<Transaction>>>;

  approve(): Promise<import("@w2e/types").StatusResult<boolean>>;

  allowance(): Promise<import("@w2e/types").StatusResult<bigint>>;

  metadata({ canisterId }: MetadataRequest): Promise<{
    status: ResultStatus;
    data: Metadata;
    message: string;
  }>;

  setLogo(): Promise<import("@w2e/types").StatusResult<boolean>>;

  actualReceivedByTransfer({ amount }: ActualReceivedByTransferRequest): import("bignumber.js").BigNumber;

  getMintingAccount({ canisterId }: { canisterId: string }): Promise<
    import("@w2e/types").StatusResult<{
      owner: string;
      sub: number[] | undefined;
    }>
  >;
}
export declare const icrc1Adapter: ICRC1Adapter;
// # sourceMappingURL=ICRC1.d.ts.map
