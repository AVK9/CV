import{c as a,n as c,a as f,b as i,r as g,g as j,j as t,L as h,S as L}from"./index-de6d0735.js";import{A as v,C as b,F as y,L as w,a as A}from"./Filters-0d61122f.js";const E=e=>e.adverts.adverts,S=e=>e.filter.filter,C=e=>e.filter.type,F=e=>e.filter.equipment,V=e=>e.adverts.isLoading,P=e=>e.adverts.error,k=a([E,S],(e,s)=>s.length>0?e.filter(r=>r.location.toLowerCase().includes(s.toLowerCase())):e),T=a([k,C],(e,s)=>s.length>0?e.filter(r=>r.form.includes(s)):e),q=a([T,F],(e,s)=>s.length>0?e.filter(r=>s.every(n=>r.details[n]!==0&&r.transmission==="automatic")):e);c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`;const B=c.ul`
  margin: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`,M=c.button`
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
`,z=()=>{const e=f(),s=i(V),r=i(P);g.useEffect(()=>{e(j())},[e]);const[n,u]=g.useState(4),o=i(q),l=o.length,d=o.slice(0,n),p=d.length,m=()=>{u(n+4)};return t.jsxs(t.Fragment,{children:[s&&t.jsx(h,{}),r&&t.jsxs("p",{children:["Error: ",r]}),o.length?t.jsxs(B,{children:[d.map(x=>t.jsx(v,{data:x},x._id)),l>=p&&l!==p&&t.jsx(M,{onClick:m,children:"Load more"})]}):t.jsx(h,{})]})},R=()=>t.jsx(L,{children:t.jsxs(b,{children:[t.jsxs(y,{children:[t.jsx(w,{}),t.jsx(A,{})]}),t.jsx(z,{})]})});export{R as default};
