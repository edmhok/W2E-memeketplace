import { HttpAgent, ActorSubclass } from "@dfinity/agent";
import { ActorIdentity } from "@w2e/types";
import { IDL } from "@dfinity/candid";
import { ActorName } from "./ActorName";

export type ActorConstructor = {
  canisterId?: string;
  actorName?: ActorName;
  host?: string;
  idlFactory: IDL.InterfaceFactory;
  identity?: ActorIdentity;
  agent?: HttpAgent;
};
export declare enum Connector {
  // ICPSwap = "ICPSwap",
  PLUG = "PLUG",
  STOIC = "STOIC",
  IC = "IC",
  NFID = "NFID",
  INFINITY = "INFINITY",
  ME = "ME",
  STOIC_MNEMONIC = "STOIC_MNEMONIC",
}
export declare function isICConnector(connector: Connector): boolean;
export type ActorError = {
  canisterId: string;
  message: string;
  method: string;
};
export type ActorErrorCallback = (error: ActorError) => void;
export type BeforeSubmitArgs = {
  canisterId: string;
  method: string;
  identity: ActorIdentity | undefined;
  connector: Connector;
};
export type BeforeSubmitCallback = (args: BeforeSubmitArgs) => Promise<{
  success: boolean;
  message: string;
}>;
export declare function isPlugTypeConnector(connector: Connector): boolean;
export declare function isMeConnector(connector: Connector): boolean;
export declare class Actor {
  private connector;

  private agent;

  private host;

  private errorCallbacks;

  private beforeSubmit;

  log: boolean;

  setConnector(connector: Connector): void;

  create<T>({ canisterId, host, idlFactory, identity, agent, actorName }: ActorConstructor): Promise<ActorSubclass<T>>;

  AnonymousAgent(host?: string): HttpAgent;

  createAgent(canisterId: string, host: string, identity?: ActorIdentity): Promise<HttpAgent>;

  setAgent(agent: HttpAgent | null): void;

  setHost(host: string): void;

  static setActorCanisterIds(canisterIds: { [key: string]: string }): void;

  onError(callback: ActorErrorCallback): void;

  onSubmit(callback: BeforeSubmitCallback): void;

  setLog(log: boolean): void;
}
export declare const actor: Actor;
// # sourceMappingURL=actor.d.ts.map
