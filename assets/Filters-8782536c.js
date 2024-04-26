import{n as u,h as We,u as i,d as W,j as e,r as l,R as L,e as U,B as Q,a as q,b as _e,f as Ke,i as Me,k as Ue,t as ue,l as qe}from"./index-02ba4d7b.js";const An=u.div`
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
`,Dn=u.div`
  width: 100%;
`,Ge=u.li`
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
`,He=u.div`
  border-radius: 10px;
  min-width: 230px;
  height: 250px;
  background-image: url(${t=>t.gallery});
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 768px) {
    min-width: 290px;
    height: 310px;
  }
`,Ze=u.div`
  width: 100%;
`,Je=u.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Qe=u.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,Xe=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
  }
`,Ye=u.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,et=u.div``,tt=u.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 16px;
`,nt=u.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`,it=u.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`,me=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,ot=u.div`
  width: 280px;
  margin-top: 24px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`,st=u.p`
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
`,rt=u.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`,ge=u.svg`
  width: ${t=>t.size||"16px"};
  height: ${t=>t.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,be=u.svg`
  width: ${t=>t.size||"16px"};
  height: ${t=>t.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
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
`;const at=We`
    0% {
transform: rotateZ(0deg)
    }
    100% {
transform: rotateZ(360deg)
    }
`,lt=i.button`
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

  margin: ${({margin:t})=>t||"20px 0px 0px 0px"};
  color: ${t=>t.color||"white"};
  background: ${t=>t.background||"#E44848"};

  transition:
    background ${({theme:t})=>t.animation.cubicBezier},
    box-shadow ${({theme:t})=>t.animation.cubicBezier};

  &:hover {
    background: #d84343;
    outline: none;
    box-shadow: ${({theme:t})=>t.shadows.small};

    /* animation: ${at} 2s infinite linear; */
  }

  align-self: ${t=>t.align||"stretch"};

  ${t=>t.loadmore&&W`
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
    background-color: ${({theme:t})=>t.colors.inputs};
    color: #101828;

    &:hover {
      border: 1px solid var(--button);
      background: #f2f4f7;
      outline: none;
    }
  }
`,ne=t=>e.jsx(lt,{...t}),ct=u.div`
  /* width: 430px; */
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,dt=u.div`
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
`,pt=u.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
  text-transform: capitalize;
`,v="/CV/assets/sprite-668ac865.svg",xt=i.svg`
  width: ${t=>t.size||"20px"};
  height: ${t=>t.size||"20px"};
  stroke-width: 1.5px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,Fe=t=>{const{icon:n}=t;return e.jsx(xt,{...t,children:e.jsx("use",{href:`${v}#icon-${n}`})})},Se=({details:t})=>e.jsx(ct,{children:t&&Object.keys(t).map(n=>t[n]===0?"":e.jsxs(dt,{children:[e.jsx(Fe,{icon:n}),t[n]===1?"":t[n],e.jsx(pt,{children:n})]},n))});function ie(t){return n=>!!n.type&&n.type.tabsRole===t}const G=ie("Tab"),oe=ie("TabList"),se=ie("TabPanel");function ft(t){return G(t)||oe(t)||se(t)}function te(t,n){return l.Children.map(t,o=>o===null?null:ft(o)?n(o):o.props&&o.props.children&&typeof o.props.children=="object"?l.cloneElement(o,{...o.props,children:te(o.props.children,n)}):o)}function Re(t,n){return l.Children.forEach(t,o=>{o!==null&&(G(o)||se(o)?n(o):o.props&&o.props.children&&typeof o.props.children=="object"&&(oe(o)&&n(o),Re(o.props.children,n)))})}function Ee(t){let n=0;return Re(t,o=>{G(o)&&n++}),n}function Ae(t){return t&&"getAttribute"in t}function ve(t){return Ae(t)&&t.getAttribute("data-rttab")}function A(t){return Ae(t)&&t.getAttribute("aria-disabled")==="true"}let _;function ht(t){const n=t||(typeof window<"u"?window:void 0);try{_=!!(typeof n<"u"&&n.document&&n.document.activeElement)}catch{_=!1}}const ut={className:"react-tabs",focus:!1},De=t=>{let n=l.useRef([]),o=l.useRef([]);const c=l.useRef();function p(s,r){if(s<0||s>=a())return;const{onSelect:g,selectedIndex:D}=t;g(s,D,r)}function d(s){const r=a();for(let g=s+1;g<r;g++)if(!A(h(g)))return g;for(let g=0;g<s;g++)if(!A(h(g)))return g;return s}function x(s){let r=s;for(;r--;)if(!A(h(r)))return r;for(r=a();r-- >s;)if(!A(h(r)))return r;return s}function m(){const s=a();for(let r=0;r<s;r++)if(!A(h(r)))return r;return null}function f(){let s=a();for(;s--;)if(!A(h(s)))return s;return null}function a(){const{children:s}=t;return Ee(s)}function h(s){return n.current[`tabs-${s}`]}function $(){let s=0;const{children:r,disabledTabClassName:g,focus:D,forceRenderTabPanel:y,selectedIndex:T,selectedTabClassName:I,selectedTabPanelClassName:ce,environment:de}=t;o.current=o.current||[];let Pe=o.current.length-a();const Oe=l.useId();for(;Pe++<0;)o.current.push(`${Oe}${o.current.length}`);return te(r,E=>{let H=E;if(oe(E)){let N=0,pe=!1;_==null&&ht(de);const xe=de||(typeof window<"u"?window:void 0);_&&xe&&(pe=L.Children.toArray(E.props.children).filter(G).some((fe,Z)=>xe.document.activeElement===h(Z))),H=l.cloneElement(E,{children:te(E.props.children,fe=>{const Z=`tabs-${N}`,he=T===N,J={tabRef:Ve=>{n.current[Z]=Ve},id:o.current[N],selected:he,focus:he&&(D||pe)};return I&&(J.selectedClassName=I),g&&(J.disabledClassName=g),N++,l.cloneElement(fe,J)})})}else if(se(E)){const N={id:o.current[s],selected:T===s};y&&(N.forceRender=y),ce&&(N.selectedClassName=ce),s++,H=l.cloneElement(E,N)}return H})}function k(s){const{direction:r,disableUpDownKeys:g,disableLeftRightKeys:D}=t;if(w(s.target)){let{selectedIndex:y}=t,T=!1,I=!1;(s.code==="Space"||s.keyCode===32||s.code==="Enter"||s.keyCode===13)&&(T=!0,I=!1,b(s)),!D&&(s.keyCode===37||s.code==="ArrowLeft")||!g&&(s.keyCode===38||s.code==="ArrowUp")?(r==="rtl"?y=d(y):y=x(y),T=!0,I=!0):!D&&(s.keyCode===39||s.code==="ArrowRight")||!g&&(s.keyCode===40||s.code==="ArrowDown")?(r==="rtl"?y=x(y):y=d(y),T=!0,I=!0):s.keyCode===35||s.code==="End"?(y=f(),T=!0,I=!0):(s.keyCode===36||s.code==="Home")&&(y=m(),T=!0,I=!0),T&&s.preventDefault(),I&&p(y,s)}}function b(s){let r=s.target;do if(w(r)){if(A(r))return;const g=[].slice.call(r.parentNode.children).filter(ve).indexOf(r);p(g,s);return}while((r=r.parentNode)!=null)}function w(s){if(!ve(s))return!1;let r=s.parentElement;do{if(r===c.current)return!0;if(r.getAttribute("data-rttabs"))break;r=r.parentElement}while(r);return!1}const{children:C,className:R,disabledTabClassName:j,domRef:le,focus:Cn,forceRenderTabPanel:Tn,onSelect:In,selectedIndex:zn,selectedTabClassName:Nn,selectedTabPanelClassName:Bn,environment:Fn,disableUpDownKeys:Sn,disableLeftRightKeys:Rn,...Le}={...ut,...t};return L.createElement("div",Object.assign({},Le,{className:U(R),onClick:b,onKeyDown:k,ref:s=>{c.current=s,le&&le(s)},"data-rttabs":!0}),$())};De.propTypes={};const mt=0,V=1,gt={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},bt=t=>t.selectedIndex===null?V:mt,re=t=>{const{children:n,defaultFocus:o,defaultIndex:c,focusTabOnClick:p,onSelect:d,...x}={...gt,...t},[m,f]=l.useState(o),[a]=l.useState(bt(x)),[h,$]=l.useState(a===V?c||0:null);if(l.useEffect(()=>{f(!1)},[]),a===V){const w=Ee(n);l.useEffect(()=>{if(h!=null){const C=Math.max(0,w-1);$(Math.min(h,C))}},[w])}const k=(w,C,R)=>{typeof d=="function"&&d(w,C,R)===!1||(p&&f(!0),a===V&&$(w))};let b={...t,...x};return b.focus=m,b.onSelect=k,h!=null&&(b.selectedIndex=h),delete b.defaultFocus,delete b.defaultIndex,delete b.focusTabOnClick,L.createElement(De,b,n)};re.propTypes={};re.tabsRole="Tabs";const vt={className:"react-tabs__tab-list"},ae=t=>{const{children:n,className:o,...c}={...vt,...t};return L.createElement("ul",Object.assign({},c,{className:U(o),role:"tablist"}),n)};ae.tabsRole="TabList";ae.propTypes={};const X="react-tabs__tab",jt={className:X,disabledClassName:`${X}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${X}--selected`},K=t=>{let n=l.useRef();const{children:o,className:c,disabled:p,disabledClassName:d,focus:x,id:m,selected:f,selectedClassName:a,tabIndex:h,tabRef:$,...k}={...jt,...t};return l.useEffect(()=>{f&&x&&n.current.focus()},[f,x]),L.createElement("li",Object.assign({},k,{className:U(c,{[a]:f,[d]:p}),ref:b=>{n.current=b,$&&$(b)},role:"tab",id:`tab${m}`,"aria-selected":f?"true":"false","aria-disabled":p?"true":"false","aria-controls":`panel${m}`,tabIndex:h||(f?"0":null),"data-rttab":!0}),o)};K.propTypes={};K.tabsRole="Tab";const je="react-tabs__tab-panel",yt={className:je,forceRender:!1,selectedClassName:`${je}--selected`},M=t=>{const{children:n,className:o,forceRender:c,id:p,selected:d,selectedClassName:x,...m}={...yt,...t};return L.createElement("div",Object.assign({},m,{className:U(o,{[x]:d}),role:"tabpanel",id:`panel${p}`,"aria-labelledby":`tab${p}`}),c||d?n:null)};M.tabsRole="TabPanel";M.propTypes={};const wt=i.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  overflow: auto;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`,$t=i.div`
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
`,kt=i.div`
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
`,Ct=i.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,Tt=i.div`
  margin-top: 16px;
`,It=i.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,zt=i.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 16px;
`,Nt=i.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`,Bt=i.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`,ye=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Ft=i.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  background-image: url(${t=>t.gallery});
  background-size: cover;
  background-position: center;
`,St=i.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`,Rt=i.div`
  width: 100%;
  margin-top: 24px;
`,Et=i.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Y=i.svg`
  width: ${t=>t.size||"16px"};
  height: ${t=>t.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,At=i.div`
  margin-top: 44px;
`,Dt=i.div`
  display: flex;
  gap: 40px;
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`,we=i.div`
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
`,$e=i.div`
  display: flex;
  gap: 24px;
`,ke=i.div`
  margin-top: 44px;
  width: 430px;
`,Lt=i.p`
  margin-top: 44px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,Pt=i.div`
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`,Ot=i.table`
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
`,Vt=({data:t})=>{const{length:n,width:o,height:c,tank:p,consumption:d}=t;return e.jsx(e.Fragment,{children:e.jsxs(Pt,{children:[e.jsx(Lt,{children:"Vehicle details"}),e.jsx(Ot,{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Length"}),e.jsx("td",{children:n})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Width"}),e.jsx("td",{children:o})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Height"}),e.jsx("td",{children:c})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tank"}),e.jsx("td",{children:p})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Consumption"}),e.jsx("td",{children:d})]})]})})]})})},Wt=i.div`
  margin-top: 44px;
  /* width: 430px; */
  display: flex;
  flex-direction: column;
`,_t=i.div`
  display: flex;
  gap: 16px;
`,Kt=i.div`
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
`,Mt=i.div``,Ut=i.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: var(--main);
`,qt=i.div``,Gt=i.div`
  margin-top: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Ht=i.span`
  font-size: 30px;
`,Zt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Jt=(t=21)=>{let n="",o=crypto.getRandomValues(new Uint8Array(t));for(;t--;)n+=Zt[o[t]&63];return n};const Qt=({reviews:t})=>t.map(n=>e.jsxs(Wt,{children:[e.jsxs(_t,{children:[e.jsx(Kt,{children:n.reviewer_name.charAt(0)}),e.jsxs(Mt,{children:[e.jsx(Ut,{children:n.reviewer_name}),e.jsx(qt,{children:[1,2,3,4,5].map(o=>e.jsx(Ht,{style:{color:o<=n.reviewer_rating?"gold":"gray"},children:"★"},o))})]})]}),e.jsx(Gt,{children:n.comment})]},Jt()));const Xt=i.div`
  margin-top: 44px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
  position: relative;
`,Yt=i.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,en=i.p`
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,tn=i.form`
  margin-top: 24px;
`,nn=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,on=i.div`
  display: flex;
  flex-direction: ${t=>t.direction||"row"};
  align-items: ${t=>t.align||"stretch"};
  justify-content: ${t=>t.justify||"stretch"};
  margin: ${({margin:t})=>t||"0"};
`,Ln=t=>e.jsx(on,{...t}),sn=i.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 30px;
  line-height: 125%;
  /* color: var(--main); */
  color: ${t=>t.color};
`,Pn=t=>e.jsx(sn,{...t}),rn=i.div`
  position: relative;
  border-radius: 10px;
  padding: 18px 18px 18px 80px;
  width: 400px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;

  ${t=>t.comment&&W`
      height: 114px;
      padding: 18px 18px 18px 95px;
    `}
  ${t=>t.calendar&&W`
      padding: 18px 18px 18px 120px;
    `}
`,an=i.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 18px 18px 18px;
  height: 56px;
  font-family: var(--font-family);
  font-weight: 400;

  font-size: 16px;
  line-height: 125%;
  color: ${t=>t.active?"#101828":"rgba(16, 24, 40, 0.6)"};
`,ln=i.input`
  outline: none;
  border: none;
  width: 300px;
  background: var(--inputs);
  ${t=>t.calendar&&W`
      width: 260px;
    `}
`,cn=i.textarea`
  outline: none;
  border: none;
  width: 290px;
  height: 80px;
  background: var(--inputs);
  resize: none;
`,dn=i.div`
  position: absolute;
  right: 16px;
  top: 16px;
`,P=t=>{const[n,o]=l.useState(null),c=h=>{o(h)},p=()=>{o(null)},{type:d,label:x,inputId:m,icon:f}=t,a=d==="textarea"?cn:ln;return e.jsxs(rn,{...t,children:[e.jsx(an,{active:n===m,children:x}),e.jsx(a,{...t,onFocus:()=>c(m),onBlur:p,type:d,required:!0}),e.jsx(dn,{children:e.jsx(Fe,{icon:f})})]})};i.div`
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
`;const Ce=()=>{const[t,n]=l.useState(""),[o,c]=l.useState(""),[p,d]=l.useState(""),[x,m]=l.useState(!1),[f,a]=l.useState(!1),[h,$]=l.useState(""),k=/[а-яА-Яa-zA-Z]{3,}/,b=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,w=j=>{j.preventDefault(),C()},C=()=>{if(!b.test(o)){Q.warn("Email must have been correct");return}if(k.test(t))console.log({name:t,email:o,startDate:h,comment:p}),R(),location.reload();else{Q.warn("Name must have been 3 charge");return}},R=()=>{n(""),c(""),$(""),d(""),Q.success("Congratulations! Order received. Wait for a letter in the mail with further instructions")};return e.jsxs(Xt,{children:[e.jsx(Yt,{children:"Book your campervan now"}),e.jsx(en,{children:"Stay connected! We are always ready to help you."}),e.jsxs(tn,{onSubmit:w,children:[e.jsxs(nn,{children:[e.jsx(P,{label:"Name",placeholder:"Ivan Bereza",type:"text",name:"name",value:t,onChange:j=>{k.test(j.target.value)?m(!0):m(!1),n(j.target.value)}}),e.jsx(P,{label:"Email",type:"email",name:"email",value:o,onChange:j=>{b.test(j.target.value)?a(!0):a(!1),c(j.target.value)},placeholder:"ivan@gmail.com"}),e.jsx(P,{label:"Booking date",type:"text",name:"calendar",selected:h,onChange:j=>$(j),icon:"calendar",calendar:!0}),e.jsx(P,{label:"Comment",type:"textarea",name:"comment",value:p,onChange:j=>d(j.target.value),comment:!0})]}),e.jsx(ne,{children:"Send"})]})]})},pn=({onClose:t,data:n})=>{const[o,c]=l.useState(1),[p,d]=l.useState(!1),x=a=>{c(a)};q();const m=()=>{d(!1),setTimeout(t,500)},f=a=>{a.currentTarget===a.target&&m()};return l.useEffect(()=>(d(!0),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]),l.useEffect(()=>{const a=h=>{h.key==="Escape"&&t()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[t]),e.jsx(wt,{onClick:f,children:e.jsxs($t,{children:[e.jsx(kt,{onClick:m,children:e.jsx(Y,{size:"32px",children:e.jsx("use",{href:`${v}#icon-close`})})}),e.jsx(Ct,{children:n.name}),e.jsxs(zt,{children:[e.jsxs(ye,{children:[e.jsx(Y,{children:e.jsx("use",{href:`${v}#icon-star`})}),e.jsxs(Nt,{children:[n.rating,"(",n.reviews.length," Reviews)"]})]}),e.jsxs(ye,{children:[e.jsx(Y,{children:e.jsx("use",{href:`${v}#icon-map`})}),e.jsx(Bt,{children:n.location})]})]}),e.jsx(Tt,{children:e.jsxs(It,{children:["€ ",n.price,".00"]})}),e.jsx(St,{children:n.gallery.map(a=>e.jsx(Ft,{gallery:a},a))}),e.jsx(Rt,{children:e.jsx(Et,{children:n.description})}),e.jsx(At,{children:e.jsxs(re,{children:[e.jsx(ae,{children:e.jsxs(Dt,{children:[e.jsx(K,{children:e.jsx(we,{style:o===1?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},onClick:()=>x(1),children:"Features"})}),e.jsx(K,{children:e.jsx(we,{onClick:()=>x(2),style:o===2?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},children:"Reviews"})})]})}),e.jsx(M,{children:e.jsxs($e,{children:[e.jsxs(ke,{children:[e.jsx(Se,{details:n.details}),e.jsx(Vt,{data:n})]}),e.jsx(Ce,{})]})}),e.jsx(M,{children:e.jsxs($e,{children:[e.jsx(ke,{children:e.jsx(Qt,{reviews:n.reviews})}),e.jsx(Ce,{})]})})]})})]})})},xn=t=>t.favorites.favorites,On=({data:t})=>{const[n,o]=l.useState(!1),c=q(),p=()=>{o(!0)},d=()=>{o(!1)},x=_e(xn),m=x==null?void 0:x.some(j=>j._id===t._id),f=()=>{c(m?Ke(t):Me(t))},{name:a,price:h,rating:$,location:k,description:b,reviews:w,gallery:C,details:R}=t;return e.jsxs(Ge,{children:[C&&C.length>0&&e.jsx(He,{gallery:C[0]}),e.jsxs(Ze,{children:[e.jsxs(Je,{children:[e.jsx(Qe,{children:a}),e.jsxs(Xe,{children:[e.jsxs(Ye,{children:["€ ",h.toFixed(2)]}),e.jsx(et,{onClick:f,children:m?e.jsx(be,{color:"var(--button)",size:"24px",children:e.jsx("use",{href:`${v}#icon-heart`})}):e.jsx(be,{size:"24px",children:e.jsx("use",{href:`${v}#icon-heart`})})})]})]}),e.jsxs(tt,{children:[e.jsxs(me,{children:[e.jsx(ge,{children:e.jsx("use",{href:`${v}#icon-star`})}),e.jsxs(nt,{children:[$,"(",w&&w.length," Reviews)"]})]}),e.jsxs(me,{children:[e.jsx(ge,{children:e.jsx("use",{href:`${v}#icon-map`})}),e.jsx(it,{children:k})]})]}),e.jsx(ot,{children:e.jsx(st,{children:b})}),e.jsx(rt,{children:e.jsx(Se,{details:R})}),e.jsx(ne,{onClick:p,children:"Show more"})]}),n&&e.jsx(pn,{onClose:d,data:t})]})},fn=i.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(16, 24, 40, 0.6);
`,hn=i.input`
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
`,un=i.svg`
  position: absolute;
  left: 18px;
  top: 18px;
  width: ${t=>t.size||"32px"};
  height: ${t=>t.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,mn=i.div`
  position: relative;
`,Vn=()=>{const[t,n]=l.useState(""),o=q(),c=p=>{n(p.target.value),o(Ue(p.target.value))};return console.log(t),e.jsxs(e.Fragment,{children:[e.jsx(fn,{children:"Location"}),e.jsxs(mn,{children:[e.jsx(hn,{type:"text",name:"filter",value:t,onChange:c,placeholder:"Kyiv, Ukraine"}),e.jsx(un,{children:e.jsx("use",{href:`${v}#icon-map`})})]})]})},gn=i.div`
  margin-top: 32px;
  gap: 32px;
  border: none;
  display: flex;
  flex-direction: column;
`,bn=i.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Te=i.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,Ie=i.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`,vn=i.div`
  display: flex;
  gap: 10px;
`;i.div`
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
`;i.input``;i.div`
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
`;const ee=i.svg`
  width: ${t=>t.size||"60px"};
  height: ${t=>t.size||"48px"};
  stroke-width: 0.9px;
`,B=i.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
`,ze=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,O=i.svg`
  width: ${t=>t.size||"32px"};
  height: ${t=>t.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,jn=i.svg`
  width: ${t=>t.size||"32px"};
  height: ${t=>t.size||"32px"};
  fill: ${t=>t.color||"#000000"};
`;i.button`
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
`;const F=i.label`
  position: relative;
`,z=i.input`
  display: none;
`,S=i.div`
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

  ${z}:checked + & {
    border: 1px solid var(--button);
  }
`,Ne=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12px;
  left: 22px;
`,yn=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2px;
  left: 4px;
`,wn=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 8px;
`,Be=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 32px;
`,$n=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 22px;
`,kn=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 15px;
`,Wn=()=>{const t=q(),[n,o]=l.useState(""),[c,p]=l.useState([]),d=f=>{o(f.target.value),t(ue(f.target.value))},x=f=>{console.log("e.target.value",f.target.value),p(a=>[...a,f.target.value]),t(qe(f.target.value)),console.log("equipment useState",c)},m=f=>{f.preventDefault(),o(""),p(""),t(ue(""))};return e.jsx("form",{children:e.jsxs(gn,{children:[e.jsx(bn,{children:"Filters"}),e.jsx(Te,{children:"Vehicle equipment"}),e.jsx(Ie,{}),e.jsxs(ze,{children:[e.jsxs(F,{children:[e.jsxs(Be,{children:[e.jsx(jn,{children:e.jsx("use",{href:`${v}#icon-AC`})}),e.jsx(B,{children:"AC"})]}),e.jsx(z,{type:"checkbox",id:"airConditioner",name:"options",value:"airConditioner",checked:c.includes("airConditioner"),onChange:x}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(kn,{children:[e.jsx(O,{children:e.jsx("use",{href:`${v}#icon-automatic`})}),e.jsx(B,{children:"Automatic"})]}),e.jsx(z,{type:"checkbox",id:"automatic",name:"options",value:"automatic",checked:c.includes("automatic"),onChange:x}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs($n,{children:[e.jsx(O,{children:e.jsx("use",{href:`${v}#icon-kitchen`})}),e.jsx(B,{children:"Kitchen"})]}),e.jsx(z,{type:"checkbox",id:"kitchen",name:"options",value:"kitchen",checked:c.includes("kitchen"),onChange:x}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(Be,{children:[e.jsx(O,{children:e.jsx("use",{href:`${v}#icon-TV`})}),e.jsx(B,{children:"TV"})]}),e.jsx(z,{type:"checkbox",id:"TV",name:"options",value:"TV",checked:c.includes("TV"),onChange:x}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(wn,{children:[e.jsx(O,{children:e.jsx("use",{href:`${v}#icon-shower`})}),e.jsx(B,{children:"Shower/WC"})]}),e.jsx(z,{type:"radio",id:"shower",name:"options",value:"shower",checked:c.includes("shower"),onChange:x}),e.jsx(S,{})]})]}),e.jsx(Te,{children:"Vehicle type"}),e.jsx(Ie,{}),e.jsx(vn,{children:e.jsxs(ze,{children:[e.jsxs(F,{children:[e.jsxs(Ne,{children:[e.jsx(ee,{children:e.jsx("use",{href:`${v}#icon-van`})}),e.jsx(B,{children:"Van"})]}),e.jsx(z,{type:"radio",id:"panelTruck",name:"options",value:"panelTruck",checked:n==="panelTruck",onChange:d}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(yn,{children:[e.jsx(ee,{children:e.jsx("use",{href:`${v}#icon-fully-integrated`})}),e.jsx(B,{children:"Fully Integrated"})]}),e.jsx(z,{type:"radio",id:"fullyIntegrated",name:"options",value:"fullyIntegrated",checked:n==="fullyIntegrated",onChange:d}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(Ne,{children:[e.jsx(ee,{children:e.jsx("use",{href:`${v}#icon-alcove`})}),e.jsx(B,{children:"Alcove"})]}),e.jsx(z,{type:"radio",id:"alcove",name:"options",value:"alcove",checked:n==="alcove",onChange:d}),e.jsx(S,{})]})]})}),e.jsx(ne,{margin:"0",onClick:m,children:"Reset"})]})})};export{On as A,ne as B,An as C,Ln as F,Vn as L,Pn as T,Dn as a,Wn as b,xn as s};
