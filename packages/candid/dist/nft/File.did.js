export const idlFactory = ({ IDL }) => {
    const Chunk = IDL.Record({
        content: IDL.Vec(IDL.Nat8),
        batch_id: IDL.Nat
    });
    const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
    const HttpRequest = IDL.Record({
        url: IDL.Text,
        method: IDL.Text,
        body: IDL.Vec(IDL.Nat8),
        headers: IDL.Vec(HeaderField)
    });
    const StreamingCallbackToken = IDL.Record({
        key: IDL.Text,
        index: IDL.Nat,
        content_encoding: IDL.Text
    });
    const StreamingStrategy = IDL.Variant({
        Callback: IDL.Record({
            token: StreamingCallbackToken,
            callback: IDL.Func([], [], [])
        })
    });
    const HttpResponse = IDL.Record({
        body: IDL.Vec(IDL.Nat8),
        headers: IDL.Vec(HeaderField),
        streaming_strategy: IDL.Opt(StreamingStrategy),
        status_code: IDL.Nat16
    });
    const StreamingCallbackHttpResponse = IDL.Record({
        token: IDL.Opt(StreamingCallbackToken),
        body: IDL.Vec(IDL.Nat8)
    });
    const Result = IDL.Variant({ ok: IDL.Text, err: IDL.Text });
    const FileCanister = IDL.Service({
        addAdmin: IDL.Func([IDL.Text], [IDL.Bool], []),
        chunkSize: IDL.Func([], [IDL.Nat], ["query"]),
        clearChunk: IDL.Func([], [IDL.Bool], []),
        commit_batch: IDL.Func([
            IDL.Record({
                batch_id: IDL.Nat,
                content_type: IDL.Text,
                chunk_ids: IDL.Vec(IDL.Nat)
            })
        ], [], []),
        create_batch: IDL.Func([], [IDL.Record({ batch_id: IDL.Nat })], []),
        create_chunk: IDL.Func([Chunk], [IDL.Record({ chunk_id: IDL.Nat })], []),
        cycleAvailable: IDL.Func([], [IDL.Nat], []),
        cycleBalance: IDL.Func([], [IDL.Nat], []),
        getAdminList: IDL.Func([], [IDL.Vec(IDL.Text)], ["query"]),
        http_request: IDL.Func([HttpRequest], [HttpResponse], ["query"]),
        http_request_streaming_callback: IDL.Func([StreamingCallbackToken], [StreamingCallbackHttpResponse], ["query"]),
        maxFileSize: IDL.Func([IDL.Nat], [Result], []),
        removeAdmin: IDL.Func([IDL.Text], [IDL.Bool], [])
    });
    return FileCanister;
};
//# sourceMappingURL=File.did.js.map