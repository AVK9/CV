import{n,c as g,a as u,b as i,r as x,g as j,j as t,L as f,S as v}from"./index-22ff8040.js";import{A as L,L as b,F as y}from"./Filters-274d1df2.js";const w=n.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 64px;
`,A=n.div`
  /* margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff; */
`;n.img`
  /* width: 40px;
  height: 40px;
  object-fit: cover; */
`;const S=e=>e.adverts.adverts,F=e=>e.filter.filter,C=e=>e.filter.type,E=e=>e.adverts.isLoading,P=e=>e.adverts.error,k=g([S,F],(e,s)=>s.length>0?e.filter(r=>r.location.toLowerCase().includes(s.toLowerCase())):e),T=g([k,C],(e,s)=>s.length>0?e.filter(r=>r.form.includes(s)):e);n.div`
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
`,M=()=>{const e=u(),s=i(E),r=i(P);x.useEffect(()=>{e(j())},[e]);const[a,h]=x.useState(4),o=i(T),c=o.length,l=o.slice(0,a),d=l.length,m=()=>{h(a+4)};return t.jsxs(t.Fragment,{children:[s&&t.jsx(f,{}),r&&t.jsxs("p",{children:["Error: ",r]}),o.length?t.jsxs(V,{children:[l.map(p=>t.jsx(L,{data:p},p._id)),c>=d&&c!==d&&t.jsx(B,{onClick:m,children:"Load more"})]}):t.jsx(f,{})]})},I=()=>t.jsx(v,{children:t.jsxs(w,{children:[t.jsxs(A,{children:[t.jsx(b,{}),t.jsx(y,{})]}),t.jsx(M,{})]})});export{I as default};
