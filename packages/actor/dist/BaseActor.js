import { Actor } from "@dfinity/agent";

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function createBaseActor(_a) {
    return __awaiter(this, arguments, void 0, function* ({ canisterId, interfaceFactory, actorOptions, agent, fetchRootKey = false, }) {
        // Fetch root key for certificate validation during development
        if (fetchRootKey) {
            yield (agent === null || agent === void 0 ? void 0 : agent.fetchRootKey().catch((err) => {
                console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
                console.error(err);
            }));
        }
        return Actor.createActor(interfaceFactory, {agent, canisterId, ...(actorOptions !== null && actorOptions !== void 0 ? actorOptions : {})});
    });
}
// # sourceMappingURL=BaseActor.js.map