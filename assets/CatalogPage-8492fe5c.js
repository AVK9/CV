import{c as l,n as c,a as y,b as a,r as g,g as v,j as e,L as h,u as o,h as b,d as L,S as w}from"./index-dc778ef0.js";import{A as S,C as $,F as E,L as A,a as F}from"./Filters-83cd7820.js";const k=t=>t.adverts.adverts,C=t=>t.filter.filter,z=t=>t.filter.type,T=t=>t.filter.equipment,V=t=>t.adverts.isLoading,B=t=>t.adverts.error,P=l([k,C],(t,n)=>n.length>0?t.filter(s=>s.location.toLowerCase().includes(n.toLowerCase())):t),q=l([P,z],(t,n)=>n.length>0?t.filter(s=>s.form.includes(n)):t),M=l([q,T],(t,n)=>n.length>0?t.filter(s=>n.every(r=>s.details[r]!==0&&s.transmission==="automatic")):t);c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`;const Z=c.ul`
  margin: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`,D=c.button`
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
`,I=()=>{const t=y(),n=a(V),s=a(B);g.useEffect(()=>{t(v())},[t]);const[r,m]=g.useState(4),i=a(M),d=i.length,p=i.slice(0,r),x=p.length,j=()=>{m(r+4)};return e.jsxs(e.Fragment,{children:[n&&e.jsx(h,{}),s&&e.jsxs("p",{children:["Error: ",s]}),i.length?e.jsxs(Z,{children:[p.map(f=>e.jsx(S,{data:f},f._id)),d>=x&&d!==x&&e.jsx(D,{onClick:j,children:"Load more"})]}):e.jsx(h,{})]})},R=o.div`
  display: flex;
  flex-direction: ${t=>t.direction||"row"};
  align-items: ${t=>t.align||"stretch"};
  justify-content: ${t=>t.justify||"stretch"};
  margin: ${({margin:t})=>t||"0"};
`,_=t=>e.jsx(R,{...t}),G=o.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 30px;
  line-height: 125%;
  /* color: var(--main); */
  color: ${t=>t.color};
`,H=t=>e.jsx(G,{...t}),J=b`
    0% {
transform: rotateZ(0deg)
    }
    100% {
transform: rotateZ(360deg)
    }
`,u=o.button`
  border: none;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  font-size: 22px;

  background: var(--button);

  &:hover {
    background: #d84343;
    outline: none;
    /* animation: ${J} 2s infinite linear; */
  }

  align-self: ${t=>t.align||"stretch"};

  ${t=>t.primary&&L`
      color: ${n=>n.color||"white"};
      background: ${n=>n.background||"#E44848"};
    `}
`;o(u)`
  font-size: 32px;
`;const K=t=>e.jsx(u,{...t}),Q=()=>e.jsxs(w,{children:[e.jsxs(_,{justify:"center",children:[e.jsx(H,{color:"#E44848",children:"Catalog camper for rent "}),e.jsx(K,{children:"Show more"})]}),e.jsxs($,{children:[e.jsxs(E,{children:[e.jsx(A,{}),e.jsx(F,{})]}),e.jsx(I,{})]})]});export{Q as default};
