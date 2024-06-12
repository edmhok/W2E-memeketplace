import { TOKEN_STANDARD, Metadata } from "../src/types";

export declare function tokenStandardVerification(
  canisterId: string,
  standard: TOKEN_STANDARD,
): Promise<{
  valid: boolean;
  metadata: Metadata;
  logo: string;
}>;
// # sourceMappingURL=token-standard-verification.d.ts.map
