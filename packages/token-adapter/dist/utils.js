import { enumToString, isOkSubAccount } from "@w2e/utils";
import { AccountIdentifier, SubAccount } from "@dfinity/ledger-icp";

export function icrcTransactionFormat(transaction, index) {
    let _a; let _b; let _c; let _d; let _e; let _f; let _g; let _h; let _j; let _k; let _l; let _m; let _o; let _p; let _q; let _r; let _s; let _t; let _u; let _v; let _w; let _x; let _y; let _z; let _0; let _1; let _2; let _3;
    const memo = ((_a = transaction.transfer[0]) === null || _a === void 0 ? void 0 : _a.memo.length)
        ? (_b = transaction.transfer[0]) === null || _b === void 0 ? void 0 : _b.memo
        : ((_c = transaction.burn[0]) === null || _c === void 0 ? void 0 : _c.memo.length)
            ? (_d = transaction.burn[0]) === null || _d === void 0 ? void 0 : _d.memo
            : ((_e = transaction.mint[0]) === null || _e === void 0 ? void 0 : _e.memo.length)
                ? (_f = transaction.mint[0]) === null || _f === void 0 ? void 0 : _f.memo
                : undefined;
    const from_owner = (_h = (_g = transaction.transfer[0]) === null || _g === void 0 ? void 0 : _g.from.owner) !== null && _h !== void 0 ? _h : (_j = transaction.burn[0]) === null || _j === void 0 ? void 0 : _j.from.owner;
    const _from_sub = (_l = (_k = transaction.transfer[0]) === null || _k === void 0 ? void 0 : _k.from.subaccount[0]) !== null && _l !== void 0 ? _l : (_m = transaction.burn[0]) === null || _m === void 0 ? void 0 : _m.from.subaccount[0];
    const to_owner = (_p = (_o = transaction.transfer[0]) === null || _o === void 0 ? void 0 : _o.to.owner) !== null && _p !== void 0 ? _p : (_q = transaction.mint[0]) === null || _q === void 0 ? void 0 : _q.to.owner;
    const _to_sub = (_s = (_r = transaction.transfer[0]) === null || _r === void 0 ? void 0 : _r.to.subaccount[0]) !== null && _s !== void 0 ? _s : (_t = transaction.mint[0]) === null || _t === void 0 ? void 0 : _t.to.subaccount[0];
    const from_sub = _from_sub ? SubAccount.fromBytes(Uint8Array.from(_from_sub)) : undefined;
    const from_account = from_owner
        ? AccountIdentifier.fromPrincipal({
            principal: from_owner,
            subAccount: isOkSubAccount(from_sub) ? from_sub : undefined,
        })
        : undefined;
    const to_sub = _to_sub ? SubAccount.fromBytes(Uint8Array.from(_to_sub)) : undefined;
    const to_account = to_owner
        ? AccountIdentifier.fromPrincipal({
            principal: to_owner,
            subAccount: isOkSubAccount(to_sub) ? to_sub : undefined,
        })
        : undefined;
    const feeArray = (_u = transaction.transfer[0]) === null || _u === void 0 ? void 0 : _u.fee;
    return {
        timestamp: transaction.timestamp,
        hash: "",
        fee: feeArray ? feeArray[0] : undefined,
        from_owner: (_v = from_owner === null || from_owner === void 0 ? void 0 : from_owner.toString()) !== null && _v !== void 0 ? _v : "",
        from_sub: _from_sub,
        from_account: (_w = from_account === null || from_account === void 0 ? void 0 : from_account.toHex()) !== null && _w !== void 0 ? _w : "",
        to_owner: (_x = to_owner === null || to_owner === void 0 ? void 0 : to_owner.toString()) !== null && _x !== void 0 ? _x : "",
        to_sub: _to_sub,
        to_account: (_y = to_account === null || to_account === void 0 ? void 0 : to_account.toHex()) !== null && _y !== void 0 ? _y : "",
        transType: enumToString(transaction.transfer[0]
            ? { Transfer: null }
            : transaction.burn[0]
                ? { Burn: null }
                : transaction.mint[0]
                    ? { Mint: null }
                    : { Approve: null }),
        amount: (_2 = (_0 = (_z = transaction.transfer[0]) === null || _z === void 0 ? void 0 : _z.amount) !== null && _0 !== void 0 ? _0 : (_1 = transaction.burn[0]) === null || _1 === void 0 ? void 0 : _1.amount) !== null && _2 !== void 0 ? _2 : (_3 = transaction.mint[0]) === null || _3 === void 0 ? void 0 : _3.amount,
        index,
        memo: memo ? [...memo[0]] : [],
        status: "",
    };
}
// # sourceMappingURL=utils.js.map