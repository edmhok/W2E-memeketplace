import { VoteControllerInterfaceFactory, VoteFileInterfaceFactory, VoteProjectInterfaceFactory, } from "@w2e/candid";
import { actor } from "./actor";
import { ActorName } from "./ActorName";

export const votingController = (identity) => actor.create({
    actorName: ActorName.VotingController,
    idlFactory: VoteControllerInterfaceFactory,
    identity,
});
export const votingCanister = (canisterId, identity) => actor.create({
    canisterId,
    identity,
    idlFactory: VoteProjectInterfaceFactory,
});
export const votingFile = (canisterId, identity) => actor.create({
    canisterId,
    identity,
    idlFactory: VoteFileInterfaceFactory,
});
// # sourceMappingURL=voting.js.map