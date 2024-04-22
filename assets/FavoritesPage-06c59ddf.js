import{n as e,b as n,j as t}from"./index-1e768a81.js";import{s as r,A as a,L as o,F as x}from"./Filters-8be45e32.js";const f=e.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 64px;
`,l=e.div`
  /* margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff; */
`;e.img`
  /* width: 40px;
  height: 40px;
  object-fit: cover; */
`;e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`;const c=e.ul`
  margin: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
`,p=()=>{const s=n(r);return t.jsx(t.Fragment,{children:s.length?t.jsx(c,{children:s.map(i=>t.jsx(a,{data:i},i._id))}):t.jsx("p",{children:"You have not added anything to your favorites list yet"})})},m=()=>t.jsxs(f,{children:[t.jsxs(l,{children:[t.jsx(o,{}),t.jsx(x,{})]}),t.jsx(p,{})]});export{m as default};
