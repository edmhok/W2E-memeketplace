import BigNumber from "bignumber.js";
import { parseTokenAmount } from "./tokenAmount";
export function transactionsTypeFormat(type) {
    if (typeof type === "string")
        return type;
    if (typeof type === "object") {
        if (type) {
            return Object.keys(type)[0];
        }
    }
    return type;
}
export function openBase64ImageInNewWindow(base64String) {
    var image = new Image();
    image.src = base64String;
    var win = window.open("");
    win === null || win === void 0 ? void 0 : win.document.write(image.outerHTML);
}
export function cycleValueFormat(value, noUnit) {
    if (value === 0 || !value)
        return noUnit ? `0` : `0 T`;
    return `${new BigNumber(parseTokenAmount(value, 12).toFixed(4)).toFormat()}${noUnit ? "" : " T"}`;
}
export function isPrincipalUser(user) {
    if (user.hasOwnProperty("principal"))
        return true;
    return false;
}
export function isAddressUser(user) {
    if (user.hasOwnProperty("address"))
        return true;
    return false;
}
export function stringToArrayBuffer(string) {
    return new TextEncoder().encode(string);
}
export function arrayBufferToString(arrayBuffer) {
    return new TextDecoder("utf-8").decode(arrayBuffer);
}
export function arrayBufferToHex(arrayBuffer) {
    return Array.from([...arrayBuffer], function (byte) {
        return ("0" + (byte & 0xff).toString(16)).slice(-2);
    }).join("");
}
export function arrayBufferFromHex(hex) {
    if (hex.substr(0, 2) === "0x")
        hex = hex.substr(2);
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return Uint8Array.from(bytes);
}
export function valueofUser(user) {
    if (isPrincipalUser(user)) {
        return user.principal;
    }
    else {
        return user.address;
    }
}
export function splitArr(arr, length) {
    const total_length = arr.length;
    if (length >= total_length) {
        return [arr];
    }
    const resultLength = Math.ceil(total_length / length);
    let result = [];
    for (let i = 0; i < resultLength; i++) {
        result.push(arr.slice(i * length, i * length + length));
    }
    return result;
}
//# sourceMappingURL=global.js.map