import { NodeIndexInterfaceFactory } from "@w2e/candid";
import { actor } from "../actor";
import { ActorName } from "../ActorName";

export const node_index = () => actor.create({
    actorName: ActorName.NodeIndex,
    idlFactory: NodeIndexInterfaceFactory,
});
// # sourceMappingURL=node_index.js.map