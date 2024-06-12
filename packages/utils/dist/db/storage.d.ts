import { IdbKeyVal } from "./db";

export declare const isBrowser: boolean;
export type StoredKey = string | CryptoKeyPair;
/**
 * Interface for persisting user authentication data
 */
export interface ClientStorage {
  get(key: string): Promise<StoredKey | null>;
  set(key: string, value: StoredKey): Promise<void>;
  remove(key: string): Promise<void>;
}
/**
 * IdbStorage is an interface for simple storage of string key-value pairs built on {@link IdbKeyVal}
 *
 * It replaces {@link LocalStorage}
 * @see implements {@link AuthClientStorage}
 */
export declare class IdbStorage implements ClientStorage {
  private initializedDb;

  private version;

  private dbName;

  private storeName;

  constructor(dbName: string, DB_VERSION: number, storeName: string);

  get _db(): Promise<IdbKeyVal>;

  get(key: string): Promise<string | null>;

  set(key: string, value: string): Promise<void>;

  remove(key: string): Promise<void>;

  getAll(): Promise<(string | undefined)[] | null>;
}
// # sourceMappingURL=storage.d.ts.map
