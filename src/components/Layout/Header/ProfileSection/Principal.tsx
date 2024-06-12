import { principalToAccount } from "@w2e/utils";
import { getExplorerAccountLink } from "utils/index";
import { t } from "@lingui/macro";
import { useAccountPrincipalString } from "store/auth/hooks";
import { AddressSection } from "./Address";

export default function ProfileSection() {
  const principal = useAccountPrincipalString();

  return (
    <AddressSection
      address={principal}
      label={t`Principal`}
      labelColor="#EFEFFF"
      link={principal ? getExplorerAccountLink(principalToAccount(principal)) : undefined}
    />
  );
}
