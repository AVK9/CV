import{h as o,u as i,j as t}from"./index-dc778ef0.js";const a="/CV/assets/3-51df8639.png",n="/CV/assets/1-6d7913ac.png",s="/CV/assets/6-363b835c.png",e=o`
  0%, 100% {
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
`,c=o`
  0%, 100% {
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
`,g=o`
  0%, 100% {
    opacity: 0;
  }
  30%, 70% {
    opacity: 1;
  }
`,r=i.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`,d=i.div`
  background-image: url(${a});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${e} 12s infinite;
`,u=i.div`
  background-image: url(${n});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${c} 12s infinite;
`,h=i.div`
  background-image: url(${s});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${g} 12s infinite;
`,m=()=>t.jsxs(r,{children:[t.jsx(d,{}),t.jsx(u,{}),t.jsx(h,{})]});export{m as default};
