export function isValidUrl(urlString) {
    const reg = new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/);
    return reg.test(urlString);
}
//# sourceMappingURL=isValidUrl.js.map