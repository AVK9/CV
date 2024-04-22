import{n,c as h,a as u,b as o,r as x,g as j,j as t,L as g,S as v}from"./index-0d77016d.js";import{A as L,L as y,F as w}from"./Filters-15cb9195.js";const b=n.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
  }
`,A=n.div`
  width: 100%;
`,S=e=>e.adverts.adverts,F=e=>e.filter.filter,C=e=>e.filter.type,E=e=>e.adverts.isLoading,P=e=>e.adverts.error,k=h([S,F],(e,s)=>s.length>0?e.filter(r=>r.location.toLowerCase().includes(s.toLowerCase())):e),T=h([k,C],(e,s)=>s.length>0?e.filter(r=>r.form.includes(s)):e);n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`;const V=n.ul`
  margin: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`,B=n.button`
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
`,M=()=>{const e=u(),s=o(E),r=o(P);x.useEffect(()=>{e(j())},[e]);const[a,f]=x.useState(4),i=o(T),c=i.length,l=i.slice(0,a),d=l.length,m=()=>{f(a+4)};return t.jsxs(t.Fragment,{children:[s&&t.jsx(g,{}),r&&t.jsxs("p",{children:["Error: ",r]}),i.length?t.jsxs(V,{children:[l.map(p=>t.jsx(L,{data:p},p._id)),c>=d&&c!==d&&t.jsx(B,{onClick:m,children:"Load more"})]}):t.jsx(g,{})]})},I=()=>t.jsx(v,{children:t.jsxs(b,{children:[t.jsxs(A,{children:[t.jsx(y,{}),t.jsx(w,{})]}),t.jsx(M,{})]})});export{I as default};
