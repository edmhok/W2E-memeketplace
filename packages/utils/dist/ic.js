import { SubAccount } from "@dfinity/ledger-icp";
// TODO
export function isOkSubAccount(sub) {
    if (sub && sub instanceof Error)
        return false;
    return true;
}
export function isSubAccount(sub) {
    if (sub && sub instanceof SubAccount)
        return true;
    return false;
}
//# sourceMappingURL=ic.js.map