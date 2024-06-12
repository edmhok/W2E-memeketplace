import { type NumberType } from "@w2e/types";
import { Principal } from "@dfinity/principal";
export declare function transactionsTypeFormat(type: any): string;
export declare function openBase64ImageInNewWindow(base64String: string): void;
export declare function cycleValueFormat(value: NumberType, noUnit?: boolean): string;
export type User =
  | {
      principal: Principal;
    }
  | {
      address: string;
    };
export declare function isPrincipalUser(user: User): user is {
  principal: Principal;
};
export declare function isAddressUser(user: User): user is {
  address: string;
};
export declare function stringToArrayBuffer(string: string): Uint8Array;
export declare function arrayBufferToString(arrayBuffer: Uint8Array): string;
export declare function arrayBufferToHex(arrayBuffer: Uint8Array): string;
export declare function arrayBufferFromHex(hex: string): Uint8Array;
export declare function valueofUser(user: User): string | Principal;
export declare function splitArr<T>(arr: T[], length: number): T[][];
//# sourceMappingURL=global.d.ts.map
