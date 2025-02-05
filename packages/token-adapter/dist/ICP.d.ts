import { Ledger } from "@w2e/candid";
import { PaginationResult, ResultStatus } from "@w2e/types";
import { TokenHolder, Transaction, Metadata } from "./types";
import {
  BaseTokenAdapter,
  BalanceRequest,
  TransferRequest,
  MetadataRequest,
  ActualReceivedByTransferRequest,
} from "./BaseTokenAdapter";

export declare class ICPAdapter extends BaseTokenAdapter<Ledger> {
  holders(): Promise<{
    status: ResultStatus;
    data: PaginationResult<TokenHolder>;
    message: string;
  }>;

  totalHolders(): Promise<import("@w2e/types").StatusResult<bigint>>;

  supply(): Promise<import("@w2e/types").StatusResult<bigint>>;

  balance({ params }: BalanceRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  transfer({ canisterId, identity, params }: TransferRequest): Promise<import("@w2e/types").StatusResult<bigint>>;

  getFee(): Promise<import("@w2e/types").StatusResult<bigint>>;

  setFee(): Promise<import("@w2e/types").StatusResult<boolean>>;

  setFeeTo(): Promise<import("@w2e/types").StatusResult<boolean>>;

  transactions(): Promise<import("@w2e/types").StatusResult<PaginationResult<Transaction>>>;

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
      sub: number[];
    }>
  >;
}
export declare const icpAdapter: ICPAdapter;
// # sourceMappingURL=ICP.d.ts.map
