import{c as i,n as x,r as g,a as p,b as o,g as h,B as j,j as t,L as f,S as L}from"./index-27a024d1.js";import{A as v,F as u,B as y,T as A,C as E,a as S,L as C,b as F}from"./Filters-42a2c93e.js";const b=e=>e.adverts.adverts,T=e=>e.filter.filter,V=e=>e.filter.type,w=e=>e.filter.equipment,B=e=>e.adverts.isLoading,P=e=>e.adverts.error,k=e=>e.adverts.pageAnd,q=i([b,T],(e,s)=>s.length>0?e.filter(r=>r.location.toLowerCase().includes(s.toLowerCase())):e),D=i([q,V],(e,s)=>s.length>0?e.filter(r=>r.form.includes(s)):e),I=i([D,w],(e,s)=>s.length>0?e.filter(r=>s.every(c=>r.details[c]!==0&&r.transmission==="automatic")):e);x.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;const M=x.ul`
  margin: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`,R=()=>{const[e,s]=g.useState(1),r=p(),c=o(B),l=o(P);g.useEffect(()=>{r(h(e))},[r,e]);const n=o(I),a=o(k);a&&j.warn("Sorry, there are no more advertisements");const m=()=>{s(e+1)};return console.log(e),t.jsxs(t.Fragment,{children:[c&&t.jsx(f,{}),l&&t.jsxs("p",{children:["Error: ",l]}),n&&n.length>0&&t.jsx(M,{children:n.map(d=>t.jsx(v,{data:d},d._id))}),!a&&n.length%2===0&&t.jsx(u,{children:t.jsx(y,{loadmore:!0,onClick:m,children:"Load more"})})]})},G=()=>t.jsxs(L,{children:[t.jsx(u,{justify:"center",children:t.jsx(A,{color:"#E44848",children:"Catalog camper for rent "})}),t.jsxs(E,{children:[t.jsxs(S,{children:[t.jsx(C,{}),t.jsx(F,{})]}),t.jsx(R,{})]})]});export{G as default};
