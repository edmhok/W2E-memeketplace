import { icrc1, icrc2 } from "@w2e/actor";
import { DIP20Adapter } from "./DIP20Adapter";
import { DIP20WICPAdapter } from "./DIP20WICPAdapter";
import { DIP20XTCAdapter } from "./DIP20XTCAdapter";
import { EXTAdapter } from "./EXTAdapter";
import { icrc1Adapter } from "./ICRC1";
import { icrc2Adapter } from "./ICRC2";
import { TOKEN_STANDARD } from "./types";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function tokenStandardVerification(canisterId, standard) {
    return __awaiter(this, void 0, void 0, function* () {
        let valid = false;
        let metadata = null;
        let logo = null;
        if (standard === TOKEN_STANDARD.DIP20) {
            try {
                metadata = (yield DIP20Adapter.metadata({ canisterId })).data;
                logo = metadata === null || metadata === void 0 ? void 0 : metadata.logo;
                if ((metadata === null || metadata === void 0 ? void 0 : metadata.symbol) && (metadata === null || metadata === void 0 ? void 0 : metadata.symbol) !== "WICP" && (metadata === null || metadata === void 0 ? void 0 : metadata.symbol) !== "XTC")
                    valid = true;
            }
            catch (error) {
                console.error(error);
                valid = false;
            }
        }
        else if (standard === TOKEN_STANDARD.DIP20_WICP) {
            try {
                metadata = (yield DIP20WICPAdapter.metadata({ canisterId })).data;
                logo = metadata === null || metadata === void 0 ? void 0 : metadata.logo;
                if ((metadata === null || metadata === void 0 ? void 0 : metadata.symbol) && (metadata === null || metadata === void 0 ? void 0 : metadata.symbol) === "WICP")
                    valid = true;
            }
            catch (error) {
                console.error(error);
                valid = false;
            }
        }
        else if (standard === TOKEN_STANDARD.DIP20_XTC) {
            try {
                metadata = (yield DIP20XTCAdapter.metadata({ canisterId })).data;
                logo = metadata === null || metadata === void 0 ? void 0 : metadata.logo;
                if ((metadata === null || metadata === void 0 ? void 0 : metadata.symbol) && metadata.symbol === "XTC")
                    valid = true;
            }
            catch (error) {
                console.error(error);
                valid = false;
            }
        }
        else if (standard === TOKEN_STANDARD.EXT) {
            try {
                metadata = (yield EXTAdapter.metadata({ canisterId })).data;
                logo = metadata === null || metadata === void 0 ? void 0 : metadata.logo;
                if (metadata === null || metadata === void 0 ? void 0 : metadata.symbol)
                    valid = true;
            }
            catch (error) {
                console.error(error);
                valid = false;
            }
        }
        else if (standard === TOKEN_STANDARD.ICRC2) {
            try {
                metadata = (yield icrc2Adapter.metadata({ canisterId })).data;
                const standards = yield (yield icrc2(canisterId)).icrc1_supported_standards();
                let _valid = false;
                for (let i = 0; i < standards.length; i++) {
                    if (standards[i].name.includes("ICRC-2")) {
                        _valid = true;
                        break;
                    }
                }
                if ((metadata === null || metadata === void 0 ? void 0 : metadata.symbol) && _valid)
                    valid = true;
            }
            catch (error) {
                console.error(error);
                valid = false;
            }
        }
        else if (standard === TOKEN_STANDARD.ICRC1) {
            try {
                metadata = (yield icrc1Adapter.metadata({ canisterId })).data;
                const standards = yield (yield icrc1(canisterId)).icrc1_supported_standards();
                let _valid = false;
                for (let i = 0; i < standards.length; i++) {
                    if (standards[i].name.includes("ICRC-1")) {
                        _valid = true;
                        break;
                    }
                }
                if ((metadata === null || metadata === void 0 ? void 0 : metadata.symbol) && !!_valid)
                    valid = true;
            }
            catch (error) {
                console.error(error);
                valid = false;
            }
        }
        return {
            valid,
            metadata,
            logo,
        };
    });
}
// # sourceMappingURL=token-standard-verification.js.map