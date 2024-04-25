import{c as o,n as h,a as f,b as i,r as g,g as L,j as t,L as u,S as v}from"./index-ddfbd741.js";import{A as y,F as j,B as E,T as A,C,a as F,L as S,b}from"./Filters-d8d7bf8d.js";const T=e=>e.adverts.adverts,V=e=>e.filter.filter,P=e=>e.filter.type,k=e=>e.filter.equipment,w=e=>e.adverts.isLoading,B=e=>e.adverts.error,q=o([T,V],(e,s)=>s.length>0?e.filter(r=>r.location.toLowerCase().includes(s.toLowerCase())):e),D=o([q,P],(e,s)=>s.length>0?e.filter(r=>r.form.includes(s)):e),I=o([D,k],(e,s)=>s.length>0?e.filter(r=>s.every(n=>r.details[n]!==0&&r.transmission==="automatic")):e);h.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;const M=h.ul`
  margin: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`,R=()=>{const e=f(),s=i(w),r=i(B);g.useEffect(()=>{e(L())},[e]);const[n,m]=g.useState(4),c=i(I),l=c.length,a=c.slice(0,n),d=a.length,p=()=>{m(n+4)};return t.jsxs(t.Fragment,{children:[s&&t.jsx(u,{}),r&&t.jsxs("p",{children:["Error: ",r]}),c.length?t.jsxs(M,{children:[a.map(x=>t.jsx(y,{data:x},x._id)),l>=d&&l!==d&&t.jsx(j,{children:t.jsx(E,{loadmore:!0,onClick:p,children:"Load more"})})]}):t.jsx(u,{})]})},G=()=>t.jsxs(v,{children:[t.jsx(j,{justify:"center",children:t.jsx(A,{color:"#E44848",children:"Catalog camper for rent "})}),t.jsxs(C,{children:[t.jsxs(F,{children:[t.jsx(S,{}),t.jsx(b,{})]}),t.jsx(R,{})]})]});export{G as default};
