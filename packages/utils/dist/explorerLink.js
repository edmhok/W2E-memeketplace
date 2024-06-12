export function explorerLink(id) {
    if (id.length > 27) {
        return `https://icscan.io/principal/${id}`;
    }
    return `https://dashboard.internetcomputer.org/canister/${id}`;
}
//# sourceMappingURL=explorerLink.js.map