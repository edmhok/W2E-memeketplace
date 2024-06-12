export default ({ IDL }) => {
    return IDL.Service({
        balanceOf: IDL.Func([IDL.Principal], [IDL.Nat], []),
    });
};
//# sourceMappingURL=dip20_balance.did.js.map