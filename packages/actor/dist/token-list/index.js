import { TokenListInterfaceFactory, AllTokenOfSwapInterfaceFactory, } from "@w2e/candid";
import { actor } from "../actor";
import { ActorName } from "../ActorName";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export const tokenList = (identity) => __awaiter(void 0, void 0, void 0, function* () {
    return actor.create({
        actorName: ActorName.TokenList,
        identity,
        idlFactory: TokenListInterfaceFactory,
    });
});
export const allTokenOfSwap = () => __awaiter(void 0, void 0, void 0, function* () {
    return actor.create({
        canisterId: "aofop-yyaaa-aaaag-qdiqa-cai",
        idlFactory: AllTokenOfSwapInterfaceFactory,
    });
});
// # sourceMappingURL=index.js.map