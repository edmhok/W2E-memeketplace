import { useAccountPrincipal } from "store/auth/hooks";
import { usePassCode } from "@w2e/hooks";

export function useUserPassCodes(reload?: boolean) {
  const principal = useAccountPrincipal();
  return usePassCode(principal?.toString(), reload);
}
