import { V2BaseInterfaceFactory, V2PoolsInterfaceFactory, V2TokenInterfaceFactory, V2TVLInterfaceFactory, V2ICPPriceInterfaceFactory, } from "@w2e/candid";
import { actor } from "../actor";
import { ActorName } from "../ActorName";

export const analyticSwap = () => actor.create({
    actorName: ActorName.SwapGraphRecord,
    idlFactory: V2BaseInterfaceFactory,
});
export const analyticPool = () => actor.create({
    actorName: ActorName.SwapGraphPool,
    idlFactory: V2PoolsInterfaceFactory,
});
export const analyticToken = () => actor.create({
    actorName: ActorName.SwapGraphToken,
    idlFactory: V2TokenInterfaceFactory,
});
export const analyticICP = () => actor.create({
    actorName: ActorName.GraphICP,
    idlFactory: V2ICPPriceInterfaceFactory,
});
export const analyticTVL = () => actor.create({
    actorName: ActorName.TVL,
    idlFactory: V2TVLInterfaceFactory,
});
// # sourceMappingURL=analytic.js.map