export function enumToString(type) {
    if (typeof type === "string")
        return type;
    if (typeof type === "object") {
        if (type) {
            return Object.keys(type)[0];
        }
    }
    return type;
}
//# sourceMappingURL=enumToString.js.map