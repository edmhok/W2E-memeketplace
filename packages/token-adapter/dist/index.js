var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EXTAdapter } from "./EXTAdapter";
import { DIP20Adapter } from "./DIP20Adapter";
import { DIP20WICPAdapter } from "./DIP20WICPAdapter";
import { DIP20XTCAdapter } from "./DIP20XTCAdapter";
import { icrc1Adapter, ICRC1Adapter } from "./ICRC1";
import { icrc2Adapter, ICRC2Adapter } from "./ICRC2";
import { icpAdapter, ICPAdapter } from "./ICP";
import { TOKEN_STANDARD } from "./types";
export class TokenAdapter {
    constructor() {
        this.canisterAdapters = new Map();
        this.adapters = new Map();
    }
    initialAdapter(name, adapter) {
        if (this.adapters.get(name))
            throw Error("This adapter is already initialed");
        this.adapters.set(name, adapter);
    }
    register({ canisterIds, standard }) {
        canisterIds.forEach((canisterId) => {
            this.canisterAdapters.set(canisterId, standard);
        });
    }
    getAll() {
        return this.canisterAdapters;
    }
    getAdapter(canisterId) {
        let standard = this.canisterAdapters.get(canisterId);
        if (!standard) {
            console.error(`Can't not found adapter ===> ${canisterId}`);
            standard = TOKEN_STANDARD.EXT;
        }
        return this.getAdapterByName(standard);
    }
    getAdapterByName(adapterName) {
        if (!adapterName || !this.adapters.get(adapterName))
            throw Error(`Can't not found adapter ${adapterName}`);
        return this.adapters.get(adapterName);
    }
    totalHolders(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.totalHolders({ canisterId });
        });
    }
    holders(_a) {
        return __awaiter(this, arguments, void 0, function* ({ params, canisterId }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.holders({
                canisterId,
                params,
            });
        });
    }
    supply(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.supply({
                canisterId,
            });
        });
    }
    balance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.balance({
                canisterId,
                params,
            });
        });
    }
    transfer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params, identity }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.transfer({
                canisterId,
                params,
                identity,
            });
        });
    }
    setFee(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.setFee({
                canisterId,
                identity,
                params,
            });
        });
    }
    setFeeTo(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.setFeeTo({
                canisterId,
                identity,
                params,
            });
        });
    }
    transactions(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.transactions({
                canisterId,
                params,
            });
        });
    }
    approve(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.approve({
                canisterId,
                params,
                identity,
            });
        });
    }
    allowance(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, params }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.allowance({
                canisterId,
                params,
            });
        });
    }
    metadata(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.metadata({
                canisterId,
            });
        });
    }
    setLogo(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId, identity, params }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.setLogo({
                canisterId,
                params,
                identity,
            });
        });
    }
    actualReceivedByTransfer(request) {
        const adapter = this.getAdapter(request.canisterId);
        return adapter.actualReceivedByTransfer(request);
    }
    getMintingAccount(_a) {
        return __awaiter(this, arguments, void 0, function* ({ canisterId }) {
            const adapter = this.getAdapter(canisterId);
            return yield adapter.getMintingAccount({
                canisterId,
            });
        });
    }
}
export const tokenAdapter = new TokenAdapter();
export const registerTokens = ({ canisterIds, standard }) => tokenAdapter.register({ canisterIds, standard });
tokenAdapter.initialAdapter(TOKEN_STANDARD.EXT, EXTAdapter);
tokenAdapter.initialAdapter(TOKEN_STANDARD.DIP20, DIP20Adapter);
tokenAdapter.initialAdapter(TOKEN_STANDARD.DIP20_XTC, DIP20XTCAdapter);
tokenAdapter.initialAdapter(TOKEN_STANDARD.DIP20_WICP, DIP20WICPAdapter);
tokenAdapter.initialAdapter(TOKEN_STANDARD.ICRC1, icrc1Adapter);
tokenAdapter.initialAdapter(TOKEN_STANDARD.ICRC2, icrc2Adapter);
tokenAdapter.initialAdapter(TOKEN_STANDARD.ICP, icpAdapter);
export { EXTAdapter, DIP20Adapter, DIP20XTCAdapter, DIP20WICPAdapter, ICRC1Adapter, ICRC2Adapter, icrc1Adapter, icrc2Adapter, icpAdapter, ICPAdapter, TOKEN_STANDARD, };
export * from "./token-standard-verification";
export * from "./utils";
//# sourceMappingURL=index.js.map