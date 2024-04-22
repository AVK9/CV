import{c as h,n as i,a as m,b as o,r as x,g as j,j as t,L as g,S as L}from"./index-7d7f0d7b.js";import{A as v,C as b,F as y,L as w,a as A}from"./Filters-d22a7a71.js";const S=e=>e.adverts.adverts,C=e=>e.filter.filter,F=e=>e.filter.type,E=e=>e.adverts.isLoading,P=e=>e.adverts.error,k=h([S,C],(e,s)=>s.length>0?e.filter(r=>r.location.toLowerCase().includes(s.toLowerCase())):e),T=h([k,F],(e,s)=>s.length>0?e.filter(r=>r.form.includes(s)):e);i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`;const V=i.ul`
  margin: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`,B=i.button`
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  padding: 16px 32px;
  width: 145px;
  height: 56px;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: var(--main);
  white-space: nowrap;

  &:hover {
    border: 1px solid var(--button);
  }
`,M=()=>{const e=m(),s=o(E),r=o(P);x.useEffect(()=>{e(j())},[e]);const[a,u]=x.useState(4),n=o(T),c=n.length,l=n.slice(0,a),d=l.length,f=()=>{u(a+4)};return t.jsxs(t.Fragment,{children:[s&&t.jsx(g,{}),r&&t.jsxs("p",{children:["Error: ",r]}),n.length?t.jsxs(V,{children:[l.map(p=>t.jsx(v,{data:p},p._id)),c>=d&&c!==d&&t.jsx(B,{onClick:f,children:"Load more"})]}):t.jsx(g,{})]})},I=()=>t.jsx(L,{children:t.jsxs(b,{children:[t.jsxs(y,{children:[t.jsx(w,{}),t.jsx(A,{})]}),t.jsx(M,{})]})});export{I as default};
