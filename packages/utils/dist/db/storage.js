import { IdbKeyVal } from "./db";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export const isBrowser = typeof window !== "undefined";
/**
 * IdbStorage is an interface for simple storage of string key-value pairs built on {@link IdbKeyVal}
 *
 * It replaces {@link LocalStorage}
 * @see implements {@link AuthClientStorage}
 */
export class IdbStorage {
    constructor(dbName, DB_VERSION = 1, storeName) {
        this.version = 1;
        this.version = DB_VERSION;
        this.dbName = dbName;
        this.storeName = storeName;
    }

    get _db() {
        return new Promise((resolve) => {
            if (this.initializedDb) {
                resolve(this.initializedDb);
                return;
            }
            IdbKeyVal.create({
                version: this.version,
                storeName: this.storeName,
                dbName: this.dbName,
            }).then((db) => {
                this.initializedDb = db;
                resolve(db);
            });
        });
    }

    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this._db;
            return yield db.get(key);
        });
    }

    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this._db;
            yield db.set(key, value);
        });
    }

    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this._db;
            yield db.remove(key);
        });
    }

    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this._db;
            return yield db.getAll();
        });
    }
}
// # sourceMappingURL=storage.js.map