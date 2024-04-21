import{n as r,c as m,u as n,h as p,j as e,a as v,b as h,r as b,g as y}from"./index-94549cb6.js";import{A as j,L as w,F as k}from"./Filters-63288cce.js";const C=r.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 64px;
`,L=r.div`
  /* margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff; */
`;r.img`
  /* width: 40px;
  height: 40px;
  object-fit: cover; */
`;const M=t=>t.adverts.adverts,N=t=>t.filter.filter,A=t=>t.filter.type,F=t=>t.adverts.isLoading,S=t=>t.adverts.error,E=m([M,N],(t,i)=>i.length>0?t.filter(s=>s.location.toLowerCase().includes(i.toLowerCase())):t),P=m([E,A],(t,i)=>i.length>0?t.filter(s=>s.form.includes(i)):t);r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 500px; */
`;const B=r.ul`
  margin: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
`,T=r.button`
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
`,V="#4fa94d",z={"aria-busy":!0,role:"progressbar"},D=n.div`
  display: ${t=>t.$visible?"flex":"none"};
`,I="http://www.w3.org/2000/svg",R=({height:t=80,width:i=80,color:s=V,ariaLabel:d="bars-loading",wrapperStyle:l,wrapperClass:o,visible:c=!0})=>e.jsx(D,{$visible:c,style:{...l},className:o,"data-testid":"bars-loading","aria-label":d,...z,children:e.jsxs("svg",{width:i,height:t,fill:s,viewBox:"0 0 135 140",xmlns:I,"data-testid":"bars-svg",children:[e.jsxs("rect",{y:"10",width:"15",height:"120",rx:"6",children:[e.jsx("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6",children:[e.jsx("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("rect",{x:"60",width:"15",height:"140",rx:"6",children:[e.jsx("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6",children:[e.jsx("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6",children:[e.jsx("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]})]})}),a=242.776657104492,_=1.6,q=p`
12.5% {
  stroke-dasharray: ${a*.14}px, ${a}px;
  stroke-dashoffset: -${a*.11}px;
}
43.75% {
  stroke-dasharray: ${a*.35}px, ${a}px;
  stroke-dashoffset: -${a*.35}px;
}
100% {
  stroke-dasharray: ${a*.01}px, ${a}px;
  stroke-dashoffset: -${a*.99}px;
}
`;n.path`
  stroke-dasharray: ${a*.01}px, ${a};
  stroke-dashoffset: 0;
  animation: ${q} ${_}s linear infinite;
`;const G=p`
to {
   transform: rotate(360deg);
 }
`;n.svg`
  animation: ${G} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;n.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const H=p`
to {
   stroke-dashoffset: 136;
 }
`;n.polygon`
  stroke-dasharray: 17;
  animation: ${H} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;n.svg`
  transform-origin: 50% 65%;
`;const u=()=>e.jsx(e.Fragment,{children:e.jsx(R,{height:"100",width:"100",color:"#9ebbff",ariaLabel:"bars-loading",wrapperClass:"",visible:!0,wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}),J=()=>{const t=v(),i=h(F),s=h(S);b.useEffect(()=>{t(y())},[t]);const[d,l]=b.useState(4),o=h(P),c=o.length,f=o.slice(0,d),x=f.length,$=()=>{l(d+4)};return e.jsxs(e.Fragment,{children:[i&&e.jsx(u,{}),s&&e.jsxs("p",{children:["Error: ",s]}),o.length?e.jsxs(B,{children:[f.map(g=>e.jsx(j,{data:g},g._id)),c>=x&&c!==x&&e.jsx(T,{onClick:$,children:"Load more"})]}):e.jsx(u,{})]})},Q=()=>e.jsxs(C,{children:[e.jsxs(L,{children:[e.jsx(w,{}),e.jsx(k,{})]}),e.jsx(J,{})]});export{Q as default};
