import { Principal } from "@dfinity/principal";
export function isValidPrincipal(principal) {
    try {
        return principal === Principal.fromText(principal).toText();
    }
    catch (e) {
        return false;
    }
}
//# sourceMappingURL=isValidPrincipal.js.map