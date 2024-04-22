import{n as i,b as n,j as e,S as r}from"./index-7d7f0d7b.js";import{s as a,A as o,C as l,F as c,L as d,a as x}from"./Filters-d22a7a71.js";i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`;const j=i.ul`
  margin: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`,p=()=>{const t=n(a);return e.jsx(e.Fragment,{children:t.length?e.jsx(j,{children:t.map(s=>e.jsx(o,{data:s},s._id))}):e.jsx("p",{children:"You have not added anything to your favorites list yet"})})},f=()=>e.jsx(r,{children:e.jsxs(l,{children:[e.jsxs(c,{children:[e.jsx(d,{}),e.jsx(x,{})]}),e.jsx(p,{})]})});export{f as default};
