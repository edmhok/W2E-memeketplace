var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable no-useless-constructor */
import { openDB, deleteDB } from "idb";
function isLessThanCurrentVersion(err) {
    // Chrome
    if (err.includes("is less than the existing version"))
        return true;
    // Safari
    if (err.includes("using a lower version than the existing version."))
        return true;
    // Firefox
    if (err.includes("is a higher version than the version requested"))
        return true;
}
const _openDbStore = (dbName, storeName, version) => __awaiter(void 0, void 0, void 0, function* () {
    return yield openDB(dbName, version, {
        upgrade: (database, oldVersion, newVersion, transaction) => {
            if (oldVersion === 0) {
                database.createObjectStore(storeName);
            }
            if (!database.objectStoreNames.contains(storeName)) {
                database.createObjectStore(storeName);
            }
            if (oldVersion < version) {
                const store = transaction.objectStore(storeName);
                store.clear();
            }
        },
    }).catch((err) => {
        // For development
        if (isLessThanCurrentVersion(String(err))) {
            deleteDB(dbName).then(() => {
                window.location.reload();
            });
        }
        return undefined;
    });
});
function _getValue(db, storeName, key) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.get(storeName, key);
    });
}
function _setValue(db, storeName, key, value) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.put(storeName, value, key);
    });
}
function _removeValue(db, storeName, key) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.delete(storeName, key);
    });
}
function _getAllValues(db, storeName) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.getAll(storeName);
    });
}
/**
 * Simple Key Value store
 * Defaults to `'auth-client-db'` with an object store of `'ic-keyval'`
 */
export class IdbKeyVal {
    /**
     *
     * @param {DBCreateOptions} options {@link DbCreateOptions}
     * @param {DBCreateOptions['dbName']} options.dbName name for the indexDB database
     * @default
     * @param {DBCreateOptions['storeName']} options.storeName name for the indexDB Data Store
     * @default
     * @param {DBCreateOptions['version']} options.version version of the database. Increment to safely upgrade
     * @constructs an {@link IdbKeyVal}
     */
    static create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dbName, storeName, version = 1 } = options !== null && options !== void 0 ? options : {};
            const db = yield _openDbStore(dbName, storeName, version);
            return new IdbKeyVal(db, storeName);
        });
    }
    // Do not use - instead prefer create
    constructor(_db, _storeName) {
        this._db = _db;
        this._storeName = _storeName;
    }
    /**
     * Basic setter
     * @param {IDBValidKey} key string | number | Date | BufferSource | IDBValidKey[]
     * @param value value to set
     * @returns void
     */
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield _setValue(this._db, this._storeName, key, value);
        });
    }
    /**
     * Basic getter
     * Pass in a type T for type safety if you know the type the value will have if it is found
     * @param {IDBValidKey} key string | number | Date | BufferSource | IDBValidKey[]
     * @returns `Promise<T | null>`
     * @example
     * await get<string>('exampleKey') -> 'exampleValue'
     */
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            return (_a = (yield _getValue(this._db, this._storeName, key))) !== null && _a !== void 0 ? _a : null;
        });
    }
    /**
     * Remove a key
     * @param key {@link IDBValidKey}
     * @returns void
     */
    remove(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield _removeValue(this._db, this._storeName, key);
        });
    }
    /**
     * Get all values
     * @param key {@link IDBValidKey}
     * @returns void
     */
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield _getAllValues(this._db, this._storeName);
        });
    }
}
//# sourceMappingURL=db.js.map