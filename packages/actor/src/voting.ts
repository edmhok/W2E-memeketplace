import { ActorIdentity } from "@w2e/types";
import {
  VoteController,
  VoteControllerInterfaceFactory,
  VoteFile,
  VoteFileInterfaceFactory,
  VoteProject,
  VoteProjectInterfaceFactory,
} from "@w2e/candid";
import { actor } from "./actor";
import { ActorName } from "./ActorName";

export const votingController = (identity?: ActorIdentity) =>
  actor.create<VoteController>({
    actorName: ActorName.VotingController,
    idlFactory: VoteControllerInterfaceFactory,
    identity,
  });

export const votingCanister = (canisterId: string, identity?: ActorIdentity) =>
  actor.create<VoteProject>({
    canisterId,
    identity,
    idlFactory: VoteProjectInterfaceFactory,
  });

export const votingFile = (canisterId: string, identity?: ActorIdentity) =>
  actor.create<VoteFile>({
    canisterId,
    identity,
    idlFactory: VoteFileInterfaceFactory,
  });
