import{n as u,h as _e,u as o,d as W,j as t,r as c,R as L,B as Q,a as U,b as Ke,e as Me,f as Ue,i as qe,t as ue,k as Ge}from"./index-ddfbd741.js";function Se(e){var n,i,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var d=e.length;for(n=0;n<d;n++)e[n]&&(i=Se(e[n]))&&(r&&(r+=" "),r+=i)}else for(i in e)e[i]&&(r&&(r+=" "),r+=i);return r}function q(){for(var e,n,i=0,r="",d=arguments.length;i<d;i++)(e=arguments[i])&&(n=Se(e))&&(r&&(r+=" "),r+=n);return r}const Dn=u.div`
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
`,Ln=u.div`
  width: 100%;
`,He=u.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 280px;
  /* height: 358px; */
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media only screen and (min-width: 768px) {
    width: 700px;
  }
  @media only screen and (min-width: 1440px) {
    width: 888px;
    flex-direction: row;
  }
`,Ze=u.div`
  border-radius: 10px;
  min-width: 230px;
  height: 250px;
  background-image: url(${e=>e.gallery});
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 768px) {
    min-width: 290px;
    height: 310px;
  }
`,Je=u.div`
  width: 100%;
`,Qe=u.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Xe=u.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,Ye=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
  }
`,et=u.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,tt=u.div``,nt=u.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 16px;
`,it=u.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`,ot=u.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`,me=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,st=u.div`
  width: 280px;
  margin-top: 24px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`,rt=u.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 240px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
  @media only screen and (min-width: 768px) {
    width: 650px;
  }
  @media only screen and (min-width: 1440px) {
    width: 520px;
  }
`,at=u.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`,ge=u.svg`
  width: ${e=>e.size||"16px"};
  height: ${e=>e.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,be=u.svg`
  width: ${e=>e.size||"16px"};
  height: ${e=>e.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`;u.button`
  margin-top: 24px;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background: var(--button);
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  &:hover {
    background: #d84343;
  }
`;const lt=_e`
    0% {
transform: rotateZ(0deg)
    }
    100% {
transform: rotateZ(360deg)
    }
`,ct=o.button`
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
  padding: 16px 40px;
  width: 166px;
  height: 56px;

  margin: ${({margin:e})=>e||"20px 0px 0px 0px"};
  color: ${e=>e.color||"white"};
  background: ${e=>e.background||"#E44848"};

  transition:
    background ${({theme:e})=>e.animation.cubicBezier},
    box-shadow ${({theme:e})=>e.animation.cubicBezier};

  &:hover {
    background: #d84343;
    outline: none;
    box-shadow: ${({theme:e})=>e.shadows.small};

    /* animation: ${lt} 2s infinite linear; */
  }

  align-self: ${e=>e.align||"stretch"};

  ${e=>e.loadmore&&W`
      border: 1px solid rgba(71, 84, 103, 0.2);
      padding: 16px 32px;
      width: 145px;
      background-color: ${({theme:n})=>n.colors.inputs};
      color: #101828;

      &:hover {
        border: 1px solid var(--button);
        background: #f2f4f7;
        outline: none;
        transition: border ${({theme:n})=>n.animation.cubicBezier};
      }
    `}

  &.load {
    border: 1px solid rgba(71, 84, 103, 0.2);
    padding: 16px 32px;
    width: 145px;
    background-color: ${({theme:e})=>e.colors.inputs};
    color: #101828;

    &:hover {
      border: 1px solid var(--button);
      background: #f2f4f7;
      outline: none;
    }
  }
`,ne=e=>t.jsx(ct,{...e}),dt=u.div`
  /* width: 430px; */
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,pt=u.div`
  border-radius: 100px;
  padding: 12px 18px;
  /* width: 126px; */
  height: 44px;
  background: var(--block-features);
  mix-blend-mode: multiply;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,xt=u.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
  text-transform: capitalize;
`,v="/CV/assets/sprite-668ac865.svg",ft=o.svg`
  width: ${e=>e.size||"20px"};
  height: ${e=>e.size||"20px"};
  stroke-width: 1.5px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,Fe=e=>{const{icon:n}=e;return t.jsx(ft,{...e,children:t.jsx("use",{href:`${v}#icon-${n}`})})},Re=({details:e})=>t.jsx(dt,{children:Object.keys(e).map(n=>e[n]===0?"":t.jsxs(pt,{children:[t.jsx(Fe,{icon:n}),e[n]===1?"":e[n],t.jsx(xt,{children:n})]},n))});function ie(e){return n=>!!n.type&&n.type.tabsRole===e}const G=ie("Tab"),oe=ie("TabList"),se=ie("TabPanel");function ht(e){return G(e)||oe(e)||se(e)}function te(e,n){return c.Children.map(e,i=>i===null?null:ht(i)?n(i):i.props&&i.props.children&&typeof i.props.children=="object"?c.cloneElement(i,{...i.props,children:te(i.props.children,n)}):i)}function Ee(e,n){return c.Children.forEach(e,i=>{i!==null&&(G(i)||se(i)?n(i):i.props&&i.props.children&&typeof i.props.children=="object"&&(oe(i)&&n(i),Ee(i.props.children,n)))})}function Ae(e){let n=0;return Ee(e,i=>{G(i)&&n++}),n}function De(e){return e&&"getAttribute"in e}function ve(e){return De(e)&&e.getAttribute("data-rttab")}function A(e){return De(e)&&e.getAttribute("aria-disabled")==="true"}let _;function ut(e){const n=e||(typeof window<"u"?window:void 0);try{_=!!(typeof n<"u"&&n.document&&n.document.activeElement)}catch{_=!1}}const mt={className:"react-tabs",focus:!1},Le=e=>{let n=c.useRef([]),i=c.useRef([]);const r=c.useRef();function d(s,a){if(s<0||s>=l())return;const{onSelect:g,selectedIndex:D}=e;g(s,D,a)}function p(s){const a=l();for(let g=s+1;g<a;g++)if(!A(h(g)))return g;for(let g=0;g<s;g++)if(!A(h(g)))return g;return s}function x(s){let a=s;for(;a--;)if(!A(h(a)))return a;for(a=l();a-- >s;)if(!A(h(a)))return a;return s}function m(){const s=l();for(let a=0;a<s;a++)if(!A(h(a)))return a;return null}function f(){let s=l();for(;s--;)if(!A(h(s)))return s;return null}function l(){const{children:s}=e;return Ae(s)}function h(s){return n.current[`tabs-${s}`]}function w(){let s=0;const{children:a,disabledTabClassName:g,focus:D,forceRenderTabPanel:j,selectedIndex:C,selectedTabClassName:T,selectedTabPanelClassName:ce,environment:de}=e;i.current=i.current||[];let Oe=i.current.length-l();const Ve=c.useId();for(;Oe++<0;)i.current.push(`${Ve}${i.current.length}`);return te(a,E=>{let H=E;if(oe(E)){let N=0,pe=!1;_==null&&ut(de);const xe=de||(typeof window<"u"?window:void 0);_&&xe&&(pe=L.Children.toArray(E.props.children).filter(G).some((fe,Z)=>xe.document.activeElement===h(Z))),H=c.cloneElement(E,{children:te(E.props.children,fe=>{const Z=`tabs-${N}`,he=C===N,J={tabRef:We=>{n.current[Z]=We},id:i.current[N],selected:he,focus:he&&(D||pe)};return T&&(J.selectedClassName=T),g&&(J.disabledClassName=g),N++,c.cloneElement(fe,J)})})}else if(se(E)){const N={id:i.current[s],selected:C===s};j&&(N.forceRender=j),ce&&(N.selectedClassName=ce),s++,H=c.cloneElement(E,N)}return H})}function k(s){const{direction:a,disableUpDownKeys:g,disableLeftRightKeys:D}=e;if($(s.target)){let{selectedIndex:j}=e,C=!1,T=!1;(s.code==="Space"||s.keyCode===32||s.code==="Enter"||s.keyCode===13)&&(C=!0,T=!1,b(s)),!D&&(s.keyCode===37||s.code==="ArrowLeft")||!g&&(s.keyCode===38||s.code==="ArrowUp")?(a==="rtl"?j=p(j):j=x(j),C=!0,T=!0):!D&&(s.keyCode===39||s.code==="ArrowRight")||!g&&(s.keyCode===40||s.code==="ArrowDown")?(a==="rtl"?j=x(j):j=p(j),C=!0,T=!0):s.keyCode===35||s.code==="End"?(j=f(),C=!0,T=!0):(s.keyCode===36||s.code==="Home")&&(j=m(),C=!0,T=!0),C&&s.preventDefault(),T&&d(j,s)}}function b(s){let a=s.target;do if($(a)){if(A(a))return;const g=[].slice.call(a.parentNode.children).filter(ve).indexOf(a);d(g,s);return}while((a=a.parentNode)!=null)}function $(s){if(!ve(s))return!1;let a=s.parentElement;do{if(a===r.current)return!0;if(a.getAttribute("data-rttabs"))break;a=a.parentElement}while(a);return!1}const{children:z,className:R,disabledTabClassName:y,domRef:le,focus:Tn,forceRenderTabPanel:In,onSelect:zn,selectedIndex:Nn,selectedTabClassName:Bn,selectedTabPanelClassName:Sn,environment:Fn,disableUpDownKeys:Rn,disableLeftRightKeys:En,...Pe}={...mt,...e};return L.createElement("div",Object.assign({},Pe,{className:q(R),onClick:b,onKeyDown:k,ref:s=>{r.current=s,le&&le(s)},"data-rttabs":!0}),w())};Le.propTypes={};const gt=0,V=1,bt={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},vt=e=>e.selectedIndex===null?V:gt,re=e=>{const{children:n,defaultFocus:i,defaultIndex:r,focusTabOnClick:d,onSelect:p,...x}={...bt,...e},[m,f]=c.useState(i),[l]=c.useState(vt(x)),[h,w]=c.useState(l===V?r||0:null);if(c.useEffect(()=>{f(!1)},[]),l===V){const $=Ae(n);c.useEffect(()=>{if(h!=null){const z=Math.max(0,$-1);w(Math.min(h,z))}},[$])}const k=($,z,R)=>{typeof p=="function"&&p($,z,R)===!1||(d&&f(!0),l===V&&w($))};let b={...e,...x};return b.focus=m,b.onSelect=k,h!=null&&(b.selectedIndex=h),delete b.defaultFocus,delete b.defaultIndex,delete b.focusTabOnClick,L.createElement(Le,b,n)};re.propTypes={};re.tabsRole="Tabs";const yt={className:"react-tabs__tab-list"},ae=e=>{const{children:n,className:i,...r}={...yt,...e};return L.createElement("ul",Object.assign({},r,{className:q(i),role:"tablist"}),n)};ae.tabsRole="TabList";ae.propTypes={};const X="react-tabs__tab",jt={className:X,disabledClassName:`${X}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${X}--selected`},K=e=>{let n=c.useRef();const{children:i,className:r,disabled:d,disabledClassName:p,focus:x,id:m,selected:f,selectedClassName:l,tabIndex:h,tabRef:w,...k}={...jt,...e};return c.useEffect(()=>{f&&x&&n.current.focus()},[f,x]),L.createElement("li",Object.assign({},k,{className:q(r,{[l]:f,[p]:d}),ref:b=>{n.current=b,w&&w(b)},role:"tab",id:`tab${m}`,"aria-selected":f?"true":"false","aria-disabled":d?"true":"false","aria-controls":`panel${m}`,tabIndex:h||(f?"0":null),"data-rttab":!0}),i)};K.propTypes={};K.tabsRole="Tab";const ye="react-tabs__tab-panel",wt={className:ye,forceRender:!1,selectedClassName:`${ye}--selected`},M=e=>{const{children:n,className:i,forceRender:r,id:d,selected:p,selectedClassName:x,...m}={...wt,...e};return L.createElement("div",Object.assign({},m,{className:q(i,{[x]:p}),role:"tabpanel",id:`panel${d}`,"aria-labelledby":`tab${d}`}),r||p?n:null)};M.tabsRole="TabPanel";M.propTypes={};const $t=o.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  overflow: auto;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`,kt=o.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #2f2f2f;

  background: #fff;
  overflow: auto;
  opacity: 1;
  transition: opacity 0.8s ease-in-out;

  border-radius: 20px;
  padding: 40px;
  width: 982px;
  height: 720px;

  /* @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 592px;
    top: 50%;
    transform: translate(-50%, -50%);
  } */
`,Ct=o.div`
  position: absolute;
  top: 40px;
  right: 40px;
  border: none;
  background: transparent;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(21, 26, 29, 0.1);
    border-radius: 50%;
    transition: background 0.3s ease;
    transform: scale(0.85);
    transition: transform 0.3s ease;
    border: #101828 1px solid;
  }

  &:active {
    transform: scale(1.45);
    transition: transform 0.3s ease;
  }
`,Tt=o.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,It=o.div`
  margin-top: 16px;
`,zt=o.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,Nt=o.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 16px;
`,Bt=o.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`,St=o.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`,je=o.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Ft=o.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  background-image: url(${e=>e.gallery});
  background-size: cover;
  background-position: center;
`,Rt=o.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`,Et=o.div`
  width: 100%;
  margin-top: 24px;
`,At=o.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Y=o.svg`
  width: ${e=>e.size||"16px"};
  height: ${e=>e.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,Dt=o.div`
  margin-top: 44px;
`,Lt=o.div`
  display: flex;
  gap: 40px;
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`,we=o.div`
  height: 48px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);

  /* &:focus,
  &:active {
    border-bottom: 4px solid #e44848;
  } */
`,$e=o.div`
  display: flex;
  gap: 24px;
`,ke=o.div`
  margin-top: 44px;
  width: 430px;
`,Pt=o.p`
  margin-top: 44px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,Ot=o.div`
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`,Vt=o.table`
  padding-bottom: 40px;
  margin-top: 44px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: var(--main);
  min-width: 100%;

  & td:nth-child(2) {
    text-align: right;
  }
`,Wt=({data:e})=>{const{length:n,width:i,height:r,tank:d,consumption:p}=e;return t.jsx(t.Fragment,{children:t.jsxs(Ot,{children:[t.jsx(Pt,{children:"Vehicle details"}),t.jsx(Vt,{children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Length"}),t.jsx("td",{children:n})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Width"}),t.jsx("td",{children:i})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Height"}),t.jsx("td",{children:r})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Tank"}),t.jsx("td",{children:d})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Consumption"}),t.jsx("td",{children:p})]})]})})]})})},_t=o.div`
  margin-top: 44px;
  /* width: 430px; */
  display: flex;
  flex-direction: column;
`,Kt=o.div`
  display: flex;
  gap: 16px;
`,Mt=o.div`
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background: var(--block-features);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--button);
`,Ut=o.div``,qt=o.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: var(--main);
`,Gt=o.div``,Ht=o.div`
  margin-top: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Zt=o.span`
  font-size: 30px;
`,Jt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Qt=(e=21)=>{let n="",i=crypto.getRandomValues(new Uint8Array(e));for(;e--;)n+=Jt[i[e]&63];return n};const Xt=({reviews:e})=>e.map(n=>t.jsxs(_t,{children:[t.jsxs(Kt,{children:[t.jsx(Mt,{children:n.reviewer_name.charAt(0)}),t.jsxs(Ut,{children:[t.jsx(qt,{children:n.reviewer_name}),t.jsx(Gt,{children:[1,2,3,4,5].map(i=>t.jsx(Zt,{style:{color:i<=n.reviewer_rating?"gold":"gray"},children:"★"},i))})]})]}),t.jsx(Ht,{children:n.comment})]},Qt()));const Yt=o.div`
  margin-top: 44px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
  position: relative;
`,en=o.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,tn=o.p`
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,nn=o.form`
  margin-top: 24px;
`,on=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,sn=o.div`
  display: flex;
  flex-direction: ${e=>e.direction||"row"};
  align-items: ${e=>e.align||"stretch"};
  justify-content: ${e=>e.justify||"stretch"};
  margin: ${({margin:e})=>e||"0"};
`,Pn=e=>t.jsx(sn,{...e}),rn=o.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 30px;
  line-height: 125%;
  /* color: var(--main); */
  color: ${e=>e.color};
`,On=e=>t.jsx(rn,{...e}),an=o.div`
  position: relative;
  border-radius: 10px;
  padding: 18px 18px 18px 80px;
  width: 400px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;

  ${e=>e.comment&&W`
      height: 114px;
      padding: 18px 18px 18px 90px;
    `}
  ${e=>e.calendar&&W`
      padding: 18px 18px 18px 120px;
    `}
`,ln=o.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 18px 18px 18px;
  height: 56px;
  font-family: var(--font-family);
  font-weight: 400;

  font-size: 16px;
  line-height: 125%;
  color: ${e=>e.active?"#101828":"rgba(16, 24, 40, 0.6)"};
`,cn=o.input`
  outline: none;
  border: none;
  width: 300px;
  background: var(--inputs);
  ${e=>e.calendar&&W`
      width: 260px;
    `}
`,dn=o.textarea`
  outline: none;
  border: none;
  width: 290px;
  height: 80px;
  background: var(--inputs);
  resize: none;
`,pn=o.div`
  position: absolute;
  right: 16px;
  top: 16px;
`,P=e=>{const[n,i]=c.useState(null),r=h=>{i(h)},d=()=>{i(null)},{type:p,label:x,inputId:m,icon:f}=e,l=p==="textarea"?dn:cn;return t.jsxs(an,{...e,children:[t.jsx(ln,{active:n===m,children:x}),t.jsx(l,{...e,onFocus:()=>r(m),onBlur:d,type:p,required:!0}),t.jsx(pn,{children:t.jsx(Fe,{icon:f})})]})};o.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 12px;
  padding: 16px;
  width: 325px;
  height: 273px;
  background: #fff;
  position: absolute;
  z-index: 10;
  bottom: 0;
  right: 55px;
`;const Ce=()=>{const[e,n]=c.useState(""),[i,r]=c.useState(""),[d,p]=c.useState(""),[x,m]=c.useState(!1),[f,l]=c.useState(!1),[h,w]=c.useState(""),k=/[а-яА-Яa-zA-Z]{3,}/,b=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,$=y=>{y.preventDefault(),z()},z=()=>{if(!b.test(i)){Q.warn("Email must have been correct");return}if(k.test(e))console.log({name:e,email:i,startDate:h,comment:d}),R(),location.reload();else{Q.warn("Name must have been 3 charge");return}},R=()=>{n(""),r(""),w(""),p(""),Q.success("Congratulations! Order received. Wait for a letter in the mail with further instructions")};return t.jsxs(Yt,{children:[t.jsx(en,{children:"Book your campervan now"}),t.jsx(tn,{children:"Stay connected! We are always ready to help you."}),t.jsxs(nn,{onSubmit:$,children:[t.jsxs(on,{children:[t.jsx(P,{label:"Name",placeholder:"Ivan Bereza",type:"text",name:"name",value:e,onChange:y=>{k.test(y.target.value)?m(!0):m(!1),n(y.target.value)}}),t.jsx(P,{label:"Email",type:"email",name:"email",value:i,onChange:y=>{b.test(y.target.value)?l(!0):l(!1),r(y.target.value)},placeholder:"ivan@gmail.com"}),t.jsx(P,{label:"Booking date",type:"text",name:"calendar",selected:h,onChange:y=>w(y),icon:"calendar",calendar:!0}),t.jsx(P,{label:"Comment",type:"textarea",name:"comment",value:d,onChange:y=>p(y.target.value),comment:!0})]}),t.jsx(ne,{onClick:"",children:"Send"})]})]})},xn=({onClose:e,data:n})=>{const[i,r]=c.useState(1),[d,p]=c.useState(!1),x=l=>{r(l)};U();const m=()=>{p(!1),setTimeout(e,500)},f=l=>{l.currentTarget===l.target&&m()};return c.useEffect(()=>(p(!0),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]),c.useEffect(()=>{const l=h=>{h.key==="Escape"&&e()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[e]),t.jsx($t,{onClick:f,children:t.jsxs(kt,{children:[t.jsx(Ct,{onClick:m,children:t.jsx(Y,{size:"32px",children:t.jsx("use",{href:`${v}#icon-close`})})}),t.jsx(Tt,{children:n.name}),t.jsxs(Nt,{children:[t.jsxs(je,{children:[t.jsx(Y,{children:t.jsx("use",{href:`${v}#icon-star`})}),t.jsxs(Bt,{children:[n.rating,"(",n.reviews.length," Reviews)"]})]}),t.jsxs(je,{children:[t.jsx(Y,{children:t.jsx("use",{href:`${v}#icon-map`})}),t.jsx(St,{children:n.location})]})]}),t.jsx(It,{children:t.jsxs(zt,{children:["€ ",n.price,".00"]})}),t.jsx(Rt,{children:n.gallery.map(l=>t.jsx(Ft,{gallery:l},l))}),t.jsx(Et,{children:t.jsx(At,{children:n.description})}),t.jsx(Dt,{children:t.jsxs(re,{children:[t.jsx(ae,{children:t.jsxs(Lt,{children:[t.jsx(K,{children:t.jsx(we,{style:i===1?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},onClick:()=>x(1),children:"Features"})}),t.jsx(K,{children:t.jsx(we,{onClick:()=>x(2),style:i===2?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},children:"Reviews"})})]})}),t.jsx(M,{children:t.jsxs($e,{children:[t.jsxs(ke,{children:[t.jsx(Re,{details:n.details}),t.jsx(Wt,{data:n})]}),t.jsx(Ce,{})]})}),t.jsx(M,{children:t.jsxs($e,{children:[t.jsx(ke,{children:t.jsx(Xt,{reviews:n.reviews})}),t.jsx(Ce,{})]})})]})})]})})},fn=e=>e.favorites.favorites,Vn=({data:e})=>{const[n,i]=c.useState(!1),r=U(),d=()=>{i(!0)},p=()=>{i(!1)},x=Ke(fn),m=x==null?void 0:x.some(y=>y._id===e._id),f=()=>{r(m?Me(e):Ue(e))},{name:l,price:h,rating:w,location:k,description:b,reviews:$,gallery:z,details:R}=e;return t.jsxs(He,{children:[t.jsx(Ze,{gallery:z[0]}),t.jsxs(Je,{children:[t.jsxs(Qe,{children:[t.jsx(Xe,{children:l}),t.jsxs(Ye,{children:[t.jsxs(et,{children:["€ ",h,".00"]}),t.jsx(tt,{onClick:f,children:m?t.jsx(be,{color:"var(--button)",size:"24px",children:t.jsx("use",{href:`${v}#icon-heart`})}):t.jsx(be,{size:"24px",children:t.jsx("use",{href:`${v}#icon-heart`})})})]})]}),t.jsxs(nt,{children:[t.jsxs(me,{children:[t.jsx(ge,{children:t.jsx("use",{href:`${v}#icon-star`})}),t.jsxs(it,{children:[w,"(",$.length," Reviews)"]})]}),t.jsxs(me,{children:[t.jsx(ge,{children:t.jsx("use",{href:`${v}#icon-map`})}),t.jsx(ot,{children:k})]})]}),t.jsx(st,{children:t.jsx(rt,{children:b})}),t.jsx(at,{children:t.jsx(Re,{details:R})}),t.jsx(ne,{onClick:d,children:"Show more"})]}),n&&t.jsx(xn,{onClose:p,data:e})]})},hn=o.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(16, 24, 40, 0.6);
`,un=o.input`
  margin-top: 8px;
  border-radius: 10px;
  padding: 18px 18px 18px 68px;
  width: 280px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;

  @media only screen and (min-width: 768px) {
    width: 360px;
  }
`,mn=o.svg`
  position: absolute;
  left: 18px;
  top: 18px;
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,gn=o.div`
  position: relative;
`,Wn=()=>{const[e,n]=c.useState(""),i=U(),r=d=>{n(d.target.value),i(qe(d.target.value))};return console.log(e),t.jsxs(t.Fragment,{children:[t.jsx(hn,{children:"Location"}),t.jsxs(gn,{children:[t.jsx(un,{type:"text",name:"filter",value:e,onChange:r,placeholder:"Kyiv, Ukraine"}),t.jsx(mn,{children:t.jsx("use",{href:`${v}#icon-map`})})]})]})},bn=o.div`
  margin-top: 32px;
  gap: 32px;
  border: none;
  display: flex;
  flex-direction: column;
`,vn=o.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Te=o.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,Ie=o.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`,yn=o.div`
  display: flex;
  gap: 10px;
`;o.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 24px;
  /* width: 100px; */
  /* height: 95px; */
  mix-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    border: 1px solid var(--button);
  }
`;o.input``;o.div`
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 10px;
  padding: 17px 24px;
  width: 113px;
  height: 95px;
  mix-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    border: 1px solid var(--button);
  }
`;const ee=o.svg`
  width: ${e=>e.size||"60px"};
  height: ${e=>e.size||"48px"};
  stroke-width: 0.9px;
`,B=o.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
`,ze=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,O=o.svg`
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,jn=o.svg`
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  fill: ${e=>e.color||"#000000"};
`;o.button`
  border-radius: 200px;
  padding: 16px 60px;
  width: 173px;
  height: 56px;
  background: var(--button);

  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  &:hover {
    background: #d84343;
  }
`;const S=o.label`
  position: relative;
`,I=o.input`
  display: none;
`,F=o.div`
  display: inline-block;
  cursor: pointer;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 17px 24px;
  width: 100px;
  height: 95px;
  mix-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    border: 1px solid var(--button);
  }

  ${I}:checked + & {
    border: 1px solid var(--button);
  }
`,Ne=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12px;
  left: 22px;
`,wn=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2px;
  left: 4px;
`,$n=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 8px;
`,Be=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 32px;
`,kn=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 22px;
`,Cn=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 15px;
`,_n=()=>{const e=U(),[n,i]=c.useState(""),[r,d]=c.useState([]),p=f=>{i(f.target.value),e(ue(f.target.value))},x=f=>{console.log("e.target.value",f.target.value),d(l=>[...l,f.target.value]),e(Ge(f.target.value)),console.log("equipment useState",r)},m=f=>{f.preventDefault(),i(""),d(""),e(ue(""))};return t.jsx("form",{children:t.jsxs(bn,{children:[t.jsx(vn,{children:"Filters"}),t.jsx(Te,{children:"Vehicle equipment"}),t.jsx(Ie,{}),t.jsxs(ze,{children:[t.jsxs(S,{children:[t.jsxs(Be,{children:[t.jsx(jn,{children:t.jsx("use",{href:`${v}#icon-AC`})}),t.jsx(B,{children:"AC"})]}),t.jsx(I,{type:"checkbox",id:"airConditioner",name:"options",value:"airConditioner",checked:r.includes("airConditioner"),onChange:x}),t.jsx(F,{})]}),t.jsxs(S,{children:[t.jsxs(Cn,{children:[t.jsx(O,{children:t.jsx("use",{href:`${v}#icon-automatic`})}),t.jsx(B,{children:"Automatic"})]}),t.jsx(I,{type:"checkbox",id:"automatic",name:"options",value:"automatic",checked:r.includes("automatic"),onChange:x}),t.jsx(F,{})]}),t.jsxs(S,{children:[t.jsxs(kn,{children:[t.jsx(O,{children:t.jsx("use",{href:`${v}#icon-kitchen`})}),t.jsx(B,{children:"Kitchen"})]}),t.jsx(I,{type:"checkbox",id:"kitchen",name:"options",value:"kitchen",checked:r.includes("kitchen"),onChange:x}),t.jsx(F,{})]}),t.jsxs(S,{children:[t.jsxs(Be,{children:[t.jsx(O,{children:t.jsx("use",{href:`${v}#icon-TV`})}),t.jsx(B,{children:"TV"})]}),t.jsx(I,{type:"checkbox",id:"TV",name:"options",value:"TV",checked:r.includes("TV"),onChange:x}),t.jsx(F,{})]}),t.jsxs(S,{children:[t.jsxs($n,{children:[t.jsx(O,{children:t.jsx("use",{href:`${v}#icon-shower`})}),t.jsx(B,{children:"Shower/WC"})]}),t.jsx(I,{type:"radio",id:"shower",name:"options",value:"shower",checked:r.includes("shower"),onChange:x}),t.jsx(F,{})]})]}),t.jsx(Te,{children:"Vehicle type"}),t.jsx(Ie,{}),t.jsx(yn,{children:t.jsxs(ze,{children:[t.jsxs(S,{children:[t.jsxs(Ne,{children:[t.jsx(ee,{children:t.jsx("use",{href:`${v}#icon-van`})}),t.jsx(B,{children:"Van"})]}),t.jsx(I,{type:"radio",id:"panelTruck",name:"options",value:"panelTruck",checked:n==="panelTruck",onChange:p}),t.jsx(F,{})]}),t.jsxs(S,{children:[t.jsxs(wn,{children:[t.jsx(ee,{children:t.jsx("use",{href:`${v}#icon-fully-integrated`})}),t.jsx(B,{children:"Fully Integrated"})]}),t.jsx(I,{type:"radio",id:"fullyIntegrated",name:"options",value:"fullyIntegrated",checked:n==="fullyIntegrated",onChange:p}),t.jsx(F,{})]}),t.jsxs(S,{children:[t.jsxs(Ne,{children:[t.jsx(ee,{children:t.jsx("use",{href:`${v}#icon-alcove`})}),t.jsx(B,{children:"Alcove"})]}),t.jsx(I,{type:"radio",id:"alcove",name:"options",value:"alcove",checked:n==="alcove",onChange:p}),t.jsx(F,{})]})]})}),t.jsx(ne,{margin:"0",onClick:m,children:"Reset"})]})})};export{Vn as A,ne as B,Dn as C,Pn as F,Wn as L,On as T,Ln as a,_n as b,fn as s};
