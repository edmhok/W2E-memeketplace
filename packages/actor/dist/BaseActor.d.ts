import { HttpAgent } from "@dfinity/agent";
import { IDL } from "@dfinity/candid";

export interface CreateBaseActorProps {
  canisterId: string;
  interfaceFactory: IDL.InterfaceFactory;
  actorOptions?: any;
  agent: HttpAgent;
  fetchRootKey?: boolean;
}
export declare function createBaseActor<T>({
  canisterId,
  interfaceFactory,
  actorOptions,
  agent,
  fetchRootKey,
}: CreateBaseActorProps): Promise<import("@dfinity/agent").ActorSubclass<T>>;
// # sourceMappingURL=BaseActor.d.ts.map
