import { PaginationResult, ResultStatus } from "@w2e/types";
import { ICRC2 } from "@w2e/candid";
import {
  BaseTokenAdapter,
  SupplyRequest,
  BalanceRequest,
  TransferRequest,
  GetFeeRequest,
  TransactionRequest,
  ApproveRequest,
  AllowanceRequest,
  MetadataRequest,
  ActualReceivedByTransferRequest,
} from "./BaseTokenAdapter";
import { TokenHolder } from "./types";

export declare class ICRC2Adapter extends BaseTokenAdapter<ICRC2> {
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
  }: TransactionRequest): Promise<import("@w2e/types").StatusResult<PaginationResult<import("./types").Transaction>>>;

  approve({ canisterId, params, identity }: ApproveRequest): Promise<import("@w2e/types").StatusResult<boolean>>;

  allowance({ canisterId, params }: AllowanceRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  metadata({ canisterId }: MetadataRequest): Promise<{
    status: ResultStatus;
    data: import("./types").Metadata;
    message: string;
  }>;

  setLogo(): Promise<import("@w2e/types").StatusResult<boolean>>;

  actualReceivedByTransfer({ amount }: ActualReceivedByTransferRequest): import("bignumber.js").BigNumber;

  getMintingAccount({ canisterId }: { canisterId: string }): Promise<
    import("@w2e/types").StatusResult<{
      owner: string;
      sub: number[];
    }>
  >;
}
export declare const icrc2Adapter: ICRC2Adapter;
// # sourceMappingURL=ICRC2.d.ts.map
