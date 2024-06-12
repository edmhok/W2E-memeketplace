export default ({ IDL }) => {
    return IDL.Service({
        totalSupply: IDL.Func([], [IDL.Nat], [])
    });
};
//# sourceMappingURL=dip20_supply.did.js.map