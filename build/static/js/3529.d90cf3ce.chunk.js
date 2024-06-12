"use strict";(self.webpackChunkwaste2earn_home=self.webpackChunkwaste2earn_home||[]).push([[3529],{93529:(e,t,n)=>{n.r(t),n.d(t,{TokenStandards:()=>T,default:()=>P});var a=n(90329),s=n(9259),i=n(53248),l=n(68483),o=n(92566),r=n(91331),d=n(99409),u=n(8428),c=n(52351),p=n(59257),h=n(14684),m=n(78878),x=n(49828),g=n(51168),A=n(8265),v=n(34436),f=n(23412),j=n(37155),S=n(97382),C=n(92875),y=n(7869),b=n(25396),w=n(96176),_=n(31246),R=n(81795),I=n(44627),k=n(12293),N=n(36092);function D(e){let{onChange:t,value:n}=e;const{result:a}=(0,y.v5)(0,1e4),i=null===a||void 0===a?void 0:a.content.map((e=>({label:e.claimEventName,value:e.claimEventId})));return(0,N.jsx)(h.GV,{select:!0,menus:i,placeholder:s.Ru._({id:"b2m7Zn"}),onChange:e=>{t&&t(e)},value:n})}function O(){const[e,t]=(0,i.useState)(""),[n,l]=(0,i.useState)(""),[o]=(0,m.cO)(),[c,p]=(0,i.useState)([]),[b,I]=(0,i.useState)([]),{result:k}=(0,y._q)(e),{result:O}=(0,_.Vs)(null===k||void 0===k?void 0:k.tokenCid),[T,F]=(0,i.useState)(!1),P=O?c.reduce(((e,t)=>e.plus(new j.A(t.amount).toFixed(O.decimals,j.A.ROUND_DOWN))),new j.A(0)):new j.A(0);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(r.A,{mt:"30px"}),(0,N.jsx)("hr",{}),(0,N.jsxs)(r.A,{mt:"30px",sx:{display:"flex",flexDirection:"column",gap:"20px 0"},children:[(0,N.jsx)(r.A,{sx:{width:"600px"},children:(0,N.jsx)(D,{value:e,onChange:e=>t(e)})}),(0,N.jsx)(r.A,{sx:{width:"100px"},children:(0,N.jsxs)(r.A,{sx:{display:"grid",gridTemplateColumns:"100px 200px",gap:"0 20px"},children:[(0,N.jsx)(u.A,{color:"text.primary",children:"Set Ready:"}),(0,N.jsx)(x.A,{onSubmit:async t=>{const{status:n,message:a}=await(0,y.cq)(e,t);o(n===S.i.OK?"Set event ready successfully":a,n)},children:t=>{let{submit:n,loading:a}=t;return(0,N.jsx)(C.A,{variant:"contained",fullWidth:!0,disabled:!e||a,onClick:n,loading:a,children:e?"Ready":"Select an event"})}})]})}),(0,N.jsxs)(r.A,{sx:{display:"grid",gridTemplateColumns:"100px 600px 200px",gap:"0 20px"},children:[(0,N.jsx)(u.A,{color:"text.primary",children:"Set State:"}),(0,N.jsx)(h.GV,{select:!0,menus:[{label:"Live",value:"live"},{label:"Closed",value:"closed"}],placeholder:s.Ru._({id:"b2m7Zn"}),onChange:e=>l(e),value:n}),(0,N.jsx)(x.A,{onSubmit:async t=>{const{status:a,message:s}=await(0,y.Ck)(e,"live"===n,t);o(a===S.i.OK?"Set event state successfully":s,a)},children:t=>{let{submit:n,loading:a}=t;return(0,N.jsx)(C.A,{variant:"contained",fullWidth:!0,disabled:!e,onClick:n,loading:a,children:e?"Set State":"Select an event"})}})]}),(0,N.jsxs)(r.A,{sx:{display:"grid",gridTemplateColumns:"120px 400px 200px 1fr",gap:"0 20px"},children:[(0,N.jsx)(u.A,{color:"text.primary",children:"Set User Data:"}),(0,N.jsxs)(r.A,{sx:{position:"relative"},children:[(0,N.jsx)(d.A,{type:"file",inputProps:{accept:".xlsx, .xls"},sx:{position:"absolute",width:"100%",height:"42px",top:0,left:0,opacity:0,zIndex:2,cursor:"pointer","& input":{width:"100%",height:"100%",padding:"0",cursor:"pointer"},"&::before":{display:"none"}},onChange:e=>{const t=e.target.files?e.target.files[0]:null;if(!t)return;F(!0);const n=new FileReader;n.readAsBinaryString(t),n.onload=t=>{const n=t.target.result,a=(0,w.LF)(n,{type:"binary"}),i=[],l=[];for(let e=0;e<a.SheetNames.length;e++){const t=w.Wp.sheet_to_json(a.Sheets[a.SheetNames[e]]);for(let e=0;e<t.length;e++){const{address:n}=t[e],{amount:a}=t[e];if(!n||void 0===a){o(s.Ru._({id:"AF3+F4"}),m.lA.error);break}((0,g.O)(n)||(0,A.R)(n))&&!new j.A(a).isNaN()&&new j.A(a).isGreaterThan(0)?i.push(t[e]):l.push(t[e])}}p(i),I(l),F(!1),e.target.value=""}}}),(0,N.jsx)(C.A,{variant:"outlined",fullWidth:!0,size:"large",loading:T,children:(0,N.jsx)(a.x6,{id:"FhMhTR"})})]}),(0,N.jsx)(x.A,{onSubmit:async t=>{if(!t||!O)return;const n=c.map((e=>({user:(0,A.R)(e.address)?{principal:R.p.fromText(e.address)}:{address:e.address},quota:BigInt((0,v.u)((0,f.N)(new j.A(e.amount).toFixed(O.decimals,j.A.ROUND_DOWN),O.decimals)))}))),a=[];for(let s=0;s<n.length;s+=2e4){const i=n.slice(s,s+2e4);a.push((0,y.ni)(e,i,t))}await Promise.all(a).then((e=>{e.forEach((e=>{o(e.status===S.i.OK?s.Ru._({id:"UdwEX9"}):e.message,e.status)}))})).catch((e=>{console.error(e)}))},children:t=>{let{submit:n,loading:a}=t;return(0,N.jsx)(C.A,{variant:"contained",fullWidth:!0,disabled:!e,onClick:n,loading:a,children:e?"Set user data":"Select an event"})}}),c.length||b.length?(0,N.jsxs)(r.A,{sx:{display:"flex",gap:"0 10px"},children:[(0,N.jsxs)(u.A,{component:"span",fontSize:"12px",children:[c.length," valid accounts (TotalAmount: ",P.toFormat(),")"]}),null!==b&&void 0!==b&&b.length?(0,N.jsxs)(u.A,{component:"span",fontSize:"12px",sx:{marginLeft:"5px"},children:[b.length," invalid accounts(Row"," ",b.map(((e,t)=>"".concat(0!==t?", ":"").concat(e.__rowNum__+1))),")"]}):null]}):null]})]})]})}const T=[{label:"EXT",value:b.i.EXT},{label:"DIP20",value:b.i.DIP20},{label:"ICRC1",value:b.i.ICRC1},{label:"ICRC2",value:b.i.ICRC2},{label:"DIP20_WICP",value:b.i.DIP20_WICP},{label:"DIP20_XTC",value:b.i.DIP20_XTC},{label:"ICP",value:b.i.ICP}],F=(0,c.A)((e=>({breadcrumbs:{padding:"0 0 25px 16px","& a":{textDecoration:"none","&:hover":{textDecoration:"underline"}}},nftDesc:{color:e.palette.primary[400]},mintInfoBox:{display:"grid",gap:"30px 0",gridTemplateColumns:"1fr",gridAutoFlow:"row"},uploadImage:{height:"180px"}})));function P(){var e;const t=F(),n=(0,l.W6)(),c=(0,p.Le)(),[D,P]=(0,i.useState)({standard:b.i.EXT}),[W]=(0,m.cO)(),[E,B]=(0,i.useState)(!1),[U,V]=(0,i.useState)([]),[z,G]=(0,i.useState)([]),X=(0,k.DA)(),[q,K]=(0,i.useState)(void 0);(0,i.useEffect)((()=>{D.standard&&D.id&&async function(){const{valid:e}=await(0,I.E)(D.id,D.standard);e?(X({canisterId:D.id,standard:D.standard}),K(D.id)):W("Token standard is not correct",m.lA.error)}()}),[D.standard,D.id]);const{result:L}=(0,_.Vs)(q),Z=(e,t)=>{P({...D,[t]:e})},[M,Q]=(0,i.useState)(!1),J=L?U.reduce(((e,t)=>e.plus(new j.A(t.amount).toFixed(L.decimals,j.A.ROUND_DOWN))),new j.A(0)):new j.A(0);let $="";return D.userAmount||($=s.Ru._({id:"WioqPx"})),D.tokenAmount||($=s.Ru._({id:"/uT9XD"})),D.standard||($=s.Ru._({id:"9jDXVD"})),D.id||($=s.Ru._({id:"qZZq7b"})),D.name||($=s.Ru._({id:"fn34TO"})),(0,N.jsx)(h.mO,{children:(0,N.jsxs)(h.Am,{children:[(0,N.jsx)(o.Ay,{container:!0,justifyContent:"center",children:(0,N.jsxs)(r.A,{sx:{maxWidth:"474px",width:"100%"},children:[(0,N.jsxs)(o.Ay,{mt:"30px",container:!0,className:t.mintInfoBox,children:[(0,N.jsx)(h.GV,{placeholder:s.Ru._({id:"98yTO1"}),onChange:e=>Z(e,"name"),value:D.name}),(0,N.jsx)(h.GV,{placeholder:"Enter the token canister id",value:D.id,onChange:e=>Z(e,"id")}),(0,N.jsx)(h.GV,{select:!0,menus:T,placeholder:s.Ru._({id:"9jDXVD"}),onChange:e=>Z(e,"standard"),value:D.standard}),(0,N.jsx)(h.GV,{placeholder:s.Ru._({id:"2zjeGJ"}),onChange:e=>Z(e,"tokenAmount"),value:D.tokenAmount,InputProps:{disableUnderline:!0,inputComponent:h.et,inputProps:{thousandSeparator:!0,decimalScale:null!==(e=null===L||void 0===L?void 0:L.decimals)&&void 0!==e?e:8,allowNegative:!1,maxLength:100,value:D.tokenAmount}}}),(0,N.jsx)(h.GV,{placeholder:s.Ru._({id:"p5QCaQ"}),onChange:e=>Z(e,"userAmount"),value:D.userAmount,InputProps:{disableUnderline:!0,inputComponent:h.et,inputProps:{thousandSeparator:!0,decimalScale:0,allowNegative:!1,maxLength:100,value:D.userAmount}}}),(0,N.jsxs)(r.A,{sx:{position:"relative"},children:[(0,N.jsx)(d.A,{type:"file",inputProps:{accept:".xlsx, .xls"},sx:{position:"absolute",width:"100%",height:"42px",top:0,left:0,opacity:0,zIndex:2,cursor:"pointer","& input":{width:"100%",height:"100%",padding:"0",cursor:"pointer"},"&::before":{display:"none"}},onChange:e=>{const t=e.target.files?e.target.files[0]:null;if(!t)return;Q(!0);const n=new FileReader;n.readAsBinaryString(t),n.onload=t=>{const n=t.target.result,a=(0,w.LF)(n,{type:"binary"}),i=[],l=[];for(let e=0;e<a.SheetNames.length;e++){const t=w.Wp.sheet_to_json(a.Sheets[a.SheetNames[e]]);for(let e=0;e<t.length;e++){const{address:n}=t[e],{amount:a}=t[e];if(!n||void 0===a){W(s.Ru._({id:"AF3+F4"}),m.lA.error);break}((0,g.O)(n)||(0,A.R)(n))&&!new j.A(a).isNaN()&&new j.A(a).isGreaterThan(0)?i.push(t[e]):l.push(t[e])}}V(i),G(l),Q(!1),e.target.value=""}}}),(0,N.jsx)(C.A,{variant:"outlined",fullWidth:!0,size:"large",loading:M,children:(0,N.jsx)(a.x6,{id:"FhMhTR"})}),U.length||z.length?(0,N.jsxs)(r.A,{mt:"4px",children:[(0,N.jsxs)(u.A,{component:"span",fontSize:"12px",children:[U.length," valid accounts (TotalAmount: ",J.toFormat(),")"]}),null!==z&&void 0!==z&&z.length?(0,N.jsxs)(u.A,{component:"span",fontSize:"12px",sx:{marginLeft:"5px"},children:[z.length," invalid accounts(Row"," ",z.map(((e,t)=>"".concat(0!==t?", ":"").concat(e.__rowNum__+1))),")"]}):null]}):null]})]}),(0,N.jsx)(r.A,{mt:4,children:(0,N.jsx)(x.A,{onSubmit:async e=>{if(!e||E||!L||!c)return;B(!0);const{status:t,message:a,data:s}=await(0,y.BU)({tokenName:L.name,tokenSymbol:L.symbol,tokenDecimals:L.decimals,tokenCid:L.canisterId,tokenStandard:D.standard,totalUserAmount:BigInt(D.userAmount),totalTokenAmount:BigInt((0,v.u)((0,f.N)(D.tokenAmount,L.decimals))),claimedTokenAmount:BigInt(0),claimEventId:"1",claimEventName:D.name,claimEventStatus:BigInt(0),claimEventCreator:c,claimCanisterId:"",claimedUserAmount:BigInt(0)},e);if(W(t===S.i.OK?"Created successfully":a,t),s){const t=U.map((e=>({user:(0,A.R)(e.address)?{principal:R.p.fromText(e.address)}:{address:e.address},quota:BigInt((0,v.u)((0,f.N)(new j.A(e.amount).toFixed(L.decimals,j.A.ROUND_DOWN),L.decimals)))}))),n=[];for(let r=0;r<t.length;r+=2e4){const a=t.slice(r,r+2e4);n.push((0,y.ni)(s,a,e))}await Promise.all(n).then((e=>{e.forEach((e=>{W(e.status===S.i.OK?"Set event user data successfully":e.message,e.status)}))})).catch((e=>{console.error(e)}));const{status:a,message:i}=await(0,y.cq)(s,e);W(a===S.i.OK?"Set event ready successfully":i,a);const{status:l,message:o}=await(0,y.Ck)(s,!0,e);W(l===S.i.OK?"Set event state successfully":o,l)}t===S.i.OK&&n.push("/token-claim"),B(!1)},children:e=>{let{submit:t}=e;return(0,N.jsx)(C.A,{variant:"contained",fullWidth:!0,size:"large",onClick:t,disabled:Boolean($)||E,loading:E,children:$||s.Ru._({id:"3b0IFn"})})}})})]})}),(0,N.jsx)(O,{})]})})}},51168:(e,t,n)=>{n.d(t,{O:()=>s});const a=64;function s(e){return/^[0-9a-fA-F]+$/.test(e)&&a===e.length}}}]);
//# sourceMappingURL=3529.d90cf3ce.chunk.js.map