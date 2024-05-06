import{n as u,h as Ge,u as i,d as _,j as e,r as a,R as P,e as H,a as Z,f as He,B as ee,b as Ze,i as Je,k as Qe,l as Xe,t as ve,m as Ye}from"./index-27a024d1.js";const Pn=u.div`
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
`,et=u.li`
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
`,tt=u.div`
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
`,nt=u.div`
  width: 100%;
`,it=u.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ot=u.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,st=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
  }
`,rt=u.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,at=u.div``,lt=u.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 16px;
`,ct=u.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`,dt=u.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`,je=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,pt=u.div`
  width: 280px;
  margin-top: 24px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`,xt=u.p`
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
`,ft=u.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`,ye=u.svg`
  width: ${t=>t.size||"16px"};
  height: ${t=>t.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,we=u.svg`
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
`;const ht=Ge`
    0% {
transform: rotateZ(0deg)
    }
    100% {
transform: rotateZ(360deg)
    }
`,ut=i.button`
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

    /* animation: ${ht} 2s infinite linear; */
  }

  align-self: ${t=>t.align||"stretch"};

  ${t=>t.loadmore&&_`
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
`,K=t=>e.jsx(ut,{...t}),mt=u.div`
  /* width: 430px; */
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,gt=u.div`
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
`,bt=u.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
  text-transform: capitalize;
`,v="/CV/assets/sprite-668ac865.svg",vt=i.svg`
  width: ${t=>t.size||"20px"};
  height: ${t=>t.size||"20px"};
  stroke-width: 1.5px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,se=t=>{const{icon:n}=t;return e.jsx(vt,{...t,children:e.jsx("use",{href:`${v}#icon-${n}`})})},Ae=({details:t})=>e.jsx(mt,{children:t&&Object.keys(t).map(n=>t[n]===0?"":e.jsxs(gt,{children:[e.jsx(se,{icon:n}),t[n]===1?"":t[n],e.jsx(bt,{children:n})]},n))});function re(t){return n=>!!n.type&&n.type.tabsRole===t}const J=re("Tab"),ae=re("TabList"),le=re("TabPanel");function jt(t){return J(t)||ae(t)||le(t)}function oe(t,n){return a.Children.map(t,o=>o===null?null:jt(o)?n(o):o.props&&o.props.children&&typeof o.props.children=="object"?a.cloneElement(o,{...o.props,children:oe(o.props.children,n)}):o)}function De(t,n){return a.Children.forEach(t,o=>{o!==null&&(J(o)||le(o)?n(o):o.props&&o.props.children&&typeof o.props.children=="object"&&(ae(o)&&n(o),De(o.props.children,n)))})}function Pe(t){let n=0;return De(t,o=>{J(o)&&n++}),n}function Le(t){return t&&"getAttribute"in t}function ke(t){return Le(t)&&t.getAttribute("data-rttab")}function A(t){return Le(t)&&t.getAttribute("aria-disabled")==="true"}let U;function yt(t){const n=t||(typeof window<"u"?window:void 0);try{U=!!(typeof n<"u"&&n.document&&n.document.activeElement)}catch{U=!1}}const wt={className:"react-tabs",focus:!1},Oe=t=>{let n=a.useRef([]),o=a.useRef([]);const c=a.useRef();function p(s,r){if(s<0||s>=l())return;const{onSelect:g,selectedIndex:D}=t;g(s,D,r)}function d(s){const r=l();for(let g=s+1;g<r;g++)if(!A(h(g)))return g;for(let g=0;g<s;g++)if(!A(h(g)))return g;return s}function f(s){let r=s;for(;r--;)if(!A(h(r)))return r;for(r=l();r-- >s;)if(!A(h(r)))return r;return s}function m(){const s=l();for(let r=0;r<s;r++)if(!A(h(r)))return r;return null}function x(){let s=l();for(;s--;)if(!A(h(s)))return s;return null}function l(){const{children:s}=t;return Pe(s)}function h(s){return n.current[`tabs-${s}`]}function w(){let s=0;const{children:r,disabledTabClassName:g,focus:D,forceRenderTabPanel:y,selectedIndex:C,selectedTabClassName:T,selectedTabPanelClassName:fe,environment:he}=t;o.current=o.current||[];let Ke=o.current.length-l();const Ue=a.useId();for(;Ke++<0;)o.current.push(`${Ue}${o.current.length}`);return oe(r,E=>{let Q=E;if(ae(E)){let N=0,ue=!1;U==null&&yt(he);const me=he||(typeof window<"u"?window:void 0);U&&me&&(ue=P.Children.toArray(E.props.children).filter(J).some((ge,X)=>me.document.activeElement===h(X))),Q=a.cloneElement(E,{children:oe(E.props.children,ge=>{const X=`tabs-${N}`,be=C===N,Y={tabRef:qe=>{n.current[X]=qe},id:o.current[N],selected:be,focus:be&&(D||ue)};return T&&(Y.selectedClassName=T),g&&(Y.disabledClassName=g),N++,a.cloneElement(ge,Y)})})}else if(le(E)){const N={id:o.current[s],selected:C===s};y&&(N.forceRender=y),fe&&(N.selectedClassName=fe),s++,Q=a.cloneElement(E,N)}return Q})}function $(s){const{direction:r,disableUpDownKeys:g,disableLeftRightKeys:D}=t;if(k(s.target)){let{selectedIndex:y}=t,C=!1,T=!1;(s.code==="Space"||s.keyCode===32||s.code==="Enter"||s.keyCode===13)&&(C=!0,T=!1,b(s)),!D&&(s.keyCode===37||s.code==="ArrowLeft")||!g&&(s.keyCode===38||s.code==="ArrowUp")?(r==="rtl"?y=d(y):y=f(y),C=!0,T=!0):!D&&(s.keyCode===39||s.code==="ArrowRight")||!g&&(s.keyCode===40||s.code==="ArrowDown")?(r==="rtl"?y=f(y):y=d(y),C=!0,T=!0):s.keyCode===35||s.code==="End"?(y=x(),C=!0,T=!0):(s.keyCode===36||s.code==="Home")&&(y=m(),C=!0,T=!0),C&&s.preventDefault(),T&&p(y,s)}}function b(s){let r=s.target;do if(k(r)){if(A(r))return;const g=[].slice.call(r.parentNode.children).filter(ke).indexOf(r);p(g,s);return}while((r=r.parentNode)!=null)}function k(s){if(!ke(s))return!1;let r=s.parentElement;do{if(r===c.current)return!0;if(r.getAttribute("data-rttabs"))break;r=r.parentElement}while(r);return!1}const{children:z,className:R,disabledTabClassName:j,domRef:L,focus:O,forceRenderTabPanel:pe,onSelect:xe,selectedIndex:Bn,selectedTabClassName:Fn,selectedTabPanelClassName:Sn,environment:Rn,disableUpDownKeys:En,disableLeftRightKeys:An,..._e}={...wt,...t};return P.createElement("div",Object.assign({},_e,{className:H(R),onClick:b,onKeyDown:$,ref:s=>{c.current=s,L&&L(s)},"data-rttabs":!0}),w())};Oe.propTypes={};const kt=0,W=1,$t={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},Ct=t=>t.selectedIndex===null?W:kt,ce=t=>{const{children:n,defaultFocus:o,defaultIndex:c,focusTabOnClick:p,onSelect:d,...f}={...$t,...t},[m,x]=a.useState(o),[l]=a.useState(Ct(f)),[h,w]=a.useState(l===W?c||0:null);if(a.useEffect(()=>{x(!1)},[]),l===W){const k=Pe(n);a.useEffect(()=>{if(h!=null){const z=Math.max(0,k-1);w(Math.min(h,z))}},[k])}const $=(k,z,R)=>{typeof d=="function"&&d(k,z,R)===!1||(p&&x(!0),l===W&&w(k))};let b={...t,...f};return b.focus=m,b.onSelect=$,h!=null&&(b.selectedIndex=h),delete b.defaultFocus,delete b.defaultIndex,delete b.focusTabOnClick,P.createElement(Oe,b,n)};ce.propTypes={};ce.tabsRole="Tabs";const Tt={className:"react-tabs__tab-list"},de=t=>{const{children:n,className:o,...c}={...Tt,...t};return P.createElement("ul",Object.assign({},c,{className:H(o),role:"tablist"}),n)};de.tabsRole="TabList";de.propTypes={};const te="react-tabs__tab",It={className:te,disabledClassName:`${te}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${te}--selected`},q=t=>{let n=a.useRef();const{children:o,className:c,disabled:p,disabledClassName:d,focus:f,id:m,selected:x,selectedClassName:l,tabIndex:h,tabRef:w,...$}={...It,...t};return a.useEffect(()=>{x&&f&&n.current.focus()},[x,f]),P.createElement("li",Object.assign({},$,{className:H(c,{[l]:x,[d]:p}),ref:b=>{n.current=b,w&&w(b)},role:"tab",id:`tab${m}`,"aria-selected":x?"true":"false","aria-disabled":p?"true":"false","aria-controls":`panel${m}`,tabIndex:h||(x?"0":null),"data-rttab":!0}),o)};q.propTypes={};q.tabsRole="Tab";const $e="react-tabs__tab-panel",zt={className:$e,forceRender:!1,selectedClassName:`${$e}--selected`},G=t=>{const{children:n,className:o,forceRender:c,id:p,selected:d,selectedClassName:f,...m}={...zt,...t};return P.createElement("div",Object.assign({},m,{className:H(o,{[f]:d}),role:"tabpanel",id:`panel${p}`,"aria-labelledby":`tab${p}`}),c||d?n:null)};G.tabsRole="TabPanel";G.propTypes={};const Me=i.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  overflow: auto;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`,Ve=i.div`
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
`,We=i.div`
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
`,Nt=i.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,Bt=i.div`
  margin-top: 16px;
`,Ft=i.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,St=i.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 16px;
`,Rt=i.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`,Et=i.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`,Ce=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,At=i.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  background-image: url(${t=>t.gallery});
  background-size: cover;
  background-position: center;
`,Dt=i.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`,Pt=i.div`
  width: 100%;
  margin-top: 24px;
`,Lt=i.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,ne=i.svg`
  width: ${t=>t.size||"16px"};
  height: ${t=>t.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,Ot=i.div`
  margin-top: 44px;
`,Mt=i.div`
  display: flex;
  gap: 40px;
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`,Te=i.div`
  height: 48px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
  cursor: pointer;
  /* &:focus,
  &:active {
    border-bottom: 4px solid #e44848;
  } */
`,Ie=i.div`
  display: flex;
  gap: 24px;
`,ze=i.div`
  margin-top: 44px;
  width: 430px;
`,Vt=i.p`
  margin-top: 44px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,Wt=i.div`
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`,_t=i.table`
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
`,Kt=({data:t})=>{const{length:n,width:o,height:c,tank:p,consumption:d}=t;return e.jsx(e.Fragment,{children:e.jsxs(Wt,{children:[e.jsx(Vt,{children:"Vehicle details"}),e.jsx(_t,{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Length"}),e.jsx("td",{children:n})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Width"}),e.jsx("td",{children:o})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Height"}),e.jsx("td",{children:c})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tank"}),e.jsx("td",{children:p})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Consumption"}),e.jsx("td",{children:d})]})]})})]})})},Ut=i.div`
  margin-top: 44px;
  /* width: 430px; */
  display: flex;
  flex-direction: column;
`,qt=i.div`
  display: flex;
  gap: 16px;
`,Gt=i.div`
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
`,Ht=i.div``,Zt=i.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: var(--main);
`,Jt=i.div``,Qt=i.div`
  margin-top: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Xt=i.span`
  font-size: 30px;
`,Yt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let en=(t=21)=>{let n="",o=crypto.getRandomValues(new Uint8Array(t));for(;t--;)n+=Yt[o[t]&63];return n};const tn=({reviews:t})=>t.map(n=>e.jsxs(Ut,{children:[e.jsxs(qt,{children:[e.jsx(Gt,{children:n.reviewer_name.charAt(0)}),e.jsxs(Ht,{children:[e.jsx(Zt,{children:n.reviewer_name}),e.jsx(Jt,{children:[1,2,3,4,5].map(o=>e.jsx(Xt,{style:{color:o<=n.reviewer_rating?"gold":"gray"},children:"★"},o))})]})]}),e.jsx(Qt,{children:n.comment})]},en()));const nn=i.div`
  margin-top: 44px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
  position: relative;
`,on=i.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,sn=i.p`
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,rn=i.form`
  margin-top: 24px;
`,an=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,ln=i.div`
  display: flex;
  flex-direction: ${t=>t.direction||"row"};
  align-items: ${t=>t.align||"stretch"};
  justify-content: ${t=>t.justify||"stretch"};
  margin: ${({margin:t})=>t||"0"};
`,On=t=>e.jsx(ln,{...t}),cn=i.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 30px;
  line-height: 125%;
  /* color: var(--main); */
  color: ${t=>t.color};
`,Mn=t=>e.jsx(cn,{...t}),dn=i.div`
  position: relative;
  border-radius: 10px;
  padding: 18px 18px 18px 80px;
  width: 400px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;

  ${t=>t.comment&&_`
      height: 114px;
      padding: 18px 18px 18px 95px;
    `}
  ${t=>t.calendar&&_`
      padding: 18px 18px 18px 120px;
    `}
`,pn=i.label`
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
`,xn=i.input`
  outline: none;
  border: none;
  width: 300px;
  background: var(--inputs);
  ${t=>t.calendar&&_`
      width: 260px;
    `}
`,fn=i.textarea`
  outline: none;
  border: none;
  width: 290px;
  height: 80px;
  background: var(--inputs);
  resize: none;
`,hn=i.div`
  position: absolute;
  right: 16px;
  top: 16px;
`,M=t=>{const[n,o]=a.useState(null),c=h=>{o(h)},p=()=>{o(null)},{type:d,label:f,inputId:m,icon:x}=t,l=d==="textarea"?fn:xn;return e.jsxs(dn,{...t,children:[e.jsx(pn,{active:n===m,children:f}),e.jsx(l,{...t,onFocus:()=>c(m),onBlur:p,type:d,required:!0}),e.jsx(hn,{children:e.jsx(se,{icon:x})})]})};i.div`
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
`;const un=i.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(16, 24, 40, 0.6);
`,mn=i.input`
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
`,gn=i.svg`
  position: absolute;
  left: 18px;
  top: 18px;
  width: ${t=>t.size||"32px"};
  height: ${t=>t.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,bn=i.div`
  position: relative;
`,Vn=()=>{const[t,n]=a.useState(""),o=Z(),c=p=>{n(p.target.value),o(He(p.target.value))};return console.log(t),e.jsxs(e.Fragment,{children:[e.jsx(un,{children:"Location"}),e.jsxs(bn,{children:[e.jsx(mn,{type:"text",name:"filter",value:t,onChange:c,placeholder:"Kyiv, Ukraine"}),e.jsx(gn,{children:e.jsx("use",{href:`${v}#icon-map`})})]})]})},Ne=()=>{const[t,n]=a.useState(""),[o,c]=a.useState(""),[p,d]=a.useState(""),[f,m]=a.useState(!1),[x,l]=a.useState(!1),[h,w]=a.useState(""),$=/[а-яА-Яa-zA-Z]{3,}/,b=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,k=j=>{j.preventDefault(),z()},z=()=>{if(!b.test(o)){ee.warn("Email must have been correct");return}if($.test(t))console.log({name:t,email:o,startDate:h,comment:p}),R(),location.reload();else{ee.warn("Name must have been 3 charge");return}},R=()=>{n(""),c(""),w(""),d(""),ee.success("Congratulations! Order received. Wait for a letter in the mail with further instructions")};return e.jsxs(nn,{children:[e.jsx(on,{children:"Book your campervan now"}),e.jsx(sn,{children:"Stay connected! We are always ready to help you."}),e.jsxs(rn,{onSubmit:k,children:[e.jsxs(an,{children:[e.jsx(M,{label:"Name",placeholder:"Ivan Bereza",type:"text",name:"name",value:t,onChange:j=>{$.test(j.target.value)?m(!0):m(!1),n(j.target.value)}}),e.jsx(M,{label:"Email",type:"email",name:"email",value:o,onChange:j=>{b.test(j.target.value)?l(!0):l(!1),c(j.target.value)},placeholder:"ivan@gmail.com"}),e.jsx(M,{label:"Booking date",type:"text",name:"calendar",selected:h,onChange:j=>w(j),icon:"calendar",calendar:!0}),e.jsx(M,{label:"Comment",type:"textarea",name:"comment",value:p,onChange:j=>d(j.target.value),comment:!0})]}),e.jsx(K,{children:"Send"})]})]})},vn=({onClose:t,data:n})=>{const[o,c]=a.useState(1),[p,d]=a.useState(!1),f=l=>{c(l)};Z();const m=()=>{d(!1),setTimeout(t,500)},x=l=>{l.currentTarget===l.target&&m()};return a.useEffect(()=>(d(!0),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]),a.useEffect(()=>{const l=h=>{h.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[t]),e.jsx(Me,{onClick:x,children:e.jsxs(Ve,{children:[e.jsx(We,{onClick:m,children:e.jsx(ne,{size:"32px",children:e.jsx("use",{href:`${v}#icon-close`})})}),e.jsx(Nt,{children:n.name}),e.jsxs(St,{children:[e.jsxs(Ce,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${v}#icon-star`})}),e.jsxs(Rt,{children:[n.rating,"(",n.reviews.length," Reviews)"]})]}),e.jsxs(Ce,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${v}#icon-map`})}),e.jsx(Et,{children:n.location})]})]}),e.jsx(Bt,{children:e.jsxs(Ft,{children:["€ ",n.price,".00"]})}),e.jsx(Dt,{children:n.gallery.map(l=>e.jsx(At,{gallery:l},l))}),e.jsx(Pt,{children:e.jsx(Lt,{children:n.description})}),e.jsx(Ot,{children:e.jsxs(ce,{children:[e.jsx(de,{children:e.jsxs(Mt,{children:[e.jsx(q,{children:e.jsx(Te,{style:o===1?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},onClick:()=>f(1),children:"Features"})}),e.jsx(q,{children:e.jsx(Te,{onClick:()=>f(2),style:o===2?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},children:"Reviews"})})]})}),e.jsx(G,{children:e.jsxs(Ie,{children:[e.jsxs(ze,{children:[e.jsx(Ae,{details:n.details}),e.jsx(Kt,{data:n})]}),e.jsx(Ne,{})]})}),e.jsx(G,{children:e.jsxs(Ie,{children:[e.jsx(ze,{children:e.jsx(tn,{reviews:n.reviews})}),e.jsx(Ne,{})]})})]})})]})})},jn=t=>t.favorites.favorites,yn=({isOpen:t,onClose:n,children:o})=>t?e.jsx(Me,{children:e.jsxs(Ve,{children:[e.jsx(We,{onClick:n,children:e.jsx(se,{size:"32px",icon:"close"})}),e.jsx("div",{className:"modal-content",children:o})]})}):null,Wn=({data:t})=>{const[n,o]=a.useState(!1),c=()=>o(!0),p=()=>o(!1),[d,f]=a.useState(!1),m=Z(),x=()=>{f(!0)},l=()=>{f(!1)},h=Ze(jn),w=h==null?void 0:h.some(xe=>xe._id===t._id),$=()=>{m(w?Qe(t):Xe(t))},{name:b,price:k,rating:z,location:R,description:j,reviews:L,gallery:O,details:pe}=t;return e.jsxs(et,{children:[O&&O.length>0&&e.jsx(tt,{gallery:O[0]}),e.jsxs(nt,{children:[e.jsxs(it,{children:[e.jsx(ot,{children:b}),e.jsxs(st,{children:[e.jsxs(rt,{children:["€ ",parseFloat(k).toFixed(2)]}),e.jsx(at,{onClick:$,children:w?e.jsx(we,{color:"var(--button)",size:"24px",children:e.jsx("use",{href:`${v}#icon-heart`})}):e.jsx(we,{size:"24px",children:e.jsx("use",{href:`${v}#icon-heart`})})})]})]}),e.jsxs(lt,{children:[e.jsxs(je,{children:[e.jsx(ye,{children:e.jsx("use",{href:`${v}#icon-star`})}),e.jsxs(ct,{children:[z,"(",L&&L.length," Reviews)"]})]}),e.jsxs(je,{children:[e.jsx(ye,{children:e.jsx("use",{href:`${v}#icon-map`})}),e.jsx(dt,{children:R})]})]}),e.jsx(pt,{children:e.jsx(xt,{children:j})}),e.jsx(ft,{children:e.jsx(Ae,{details:pe})}),e.jsx(K,{onClick:x,children:"Show more"}),e.jsxs("div",{children:[e.jsx(K,{type:"button",onClick:c,children:"Modal"}),Je.createPortal(e.jsx(yn,{isOpen:n,onClose:p,children:"Зміст модалки"}),document.getElementById("modal-root"))]})]}),d&&e.jsx(vn,{onClose:l,data:t})]})},wn=i.div`
  margin-top: 32px;
  gap: 32px;
  border: none;
  display: flex;
  flex-direction: column;
`,kn=i.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Be=i.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,Fe=i.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`,$n=i.div`
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
`;const ie=i.svg`
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
`,Se=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,V=i.svg`
  width: ${t=>t.size||"32px"};
  height: ${t=>t.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${t=>t.color||"#101828"};
  fill: ${t=>t.color||"#ffffff"};
`,Cn=i.svg`
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
`,I=i.input`
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

  ${I}:checked + & {
    border: 1px solid var(--button);
  }
`,Re=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12px;
  left: 22px;
`,Tn=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2px;
  left: 4px;
`,In=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 8px;
`,Ee=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 32px;
`,zn=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 22px;
`,Nn=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 15px;
`,_n=()=>{const t=Z(),[n,o]=a.useState(""),[c,p]=a.useState([]),d=x=>{o(x.target.value),t(ve(x.target.value))},f=x=>{console.log("e.target.value",x.target.value),p(l=>[...l,x.target.value]),t(Ye(x.target.value)),console.log("equipment useState",c)},m=x=>{x.preventDefault(),o(""),p(""),t(ve(""))};return e.jsx("form",{children:e.jsxs(wn,{children:[e.jsx(kn,{children:"Filters"}),e.jsx(Be,{children:"Vehicle equipment"}),e.jsx(Fe,{}),e.jsxs(Se,{children:[e.jsxs(F,{children:[e.jsxs(Ee,{children:[e.jsx(Cn,{children:e.jsx("use",{href:`${v}#icon-AC`})}),e.jsx(B,{children:"AC"})]}),e.jsx(I,{type:"checkbox",id:"airConditioner",name:"options",value:"airConditioner",checked:c.includes("airConditioner"),onChange:f}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(Nn,{children:[e.jsx(V,{children:e.jsx("use",{href:`${v}#icon-automatic`})}),e.jsx(B,{children:"Automatic"})]}),e.jsx(I,{type:"checkbox",id:"automatic",name:"options",value:"automatic",checked:c.includes("automatic"),onChange:f}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(zn,{children:[e.jsx(V,{children:e.jsx("use",{href:`${v}#icon-kitchen`})}),e.jsx(B,{children:"Kitchen"})]}),e.jsx(I,{type:"checkbox",id:"kitchen",name:"options",value:"kitchen",checked:c.includes("kitchen"),onChange:f}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(Ee,{children:[e.jsx(V,{children:e.jsx("use",{href:`${v}#icon-TV`})}),e.jsx(B,{children:"TV"})]}),e.jsx(I,{type:"checkbox",id:"TV",name:"options",value:"TV",checked:c.includes("TV"),onChange:f}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(In,{children:[e.jsx(V,{children:e.jsx("use",{href:`${v}#icon-shower`})}),e.jsx(B,{children:"Shower/WC"})]}),e.jsx(I,{type:"radio",id:"shower",name:"options",value:"shower",checked:c.includes("shower"),onChange:f}),e.jsx(S,{})]})]}),e.jsx(Be,{children:"Vehicle type"}),e.jsx(Fe,{}),e.jsx($n,{children:e.jsxs(Se,{children:[e.jsxs(F,{children:[e.jsxs(Re,{children:[e.jsx(ie,{children:e.jsx("use",{href:`${v}#icon-van`})}),e.jsx(B,{children:"Van"})]}),e.jsx(I,{type:"radio",id:"panelTruck",name:"options",value:"panelTruck",checked:n==="panelTruck",onChange:d}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(Tn,{children:[e.jsx(ie,{children:e.jsx("use",{href:`${v}#icon-fully-integrated`})}),e.jsx(B,{children:"Fully Integrated"})]}),e.jsx(I,{type:"radio",id:"fullyIntegrated",name:"options",value:"fullyIntegrated",checked:n==="fullyIntegrated",onChange:d}),e.jsx(S,{})]}),e.jsxs(F,{children:[e.jsxs(Re,{children:[e.jsx(ie,{children:e.jsx("use",{href:`${v}#icon-alcove`})}),e.jsx(B,{children:"Alcove"})]}),e.jsx(I,{type:"radio",id:"alcove",name:"options",value:"alcove",checked:n==="alcove",onChange:d}),e.jsx(S,{})]})]})}),e.jsx(K,{type:"reset",margin:"0",onClick:m,children:"Reset"})]})})};export{Wn as A,K as B,Pn as C,On as F,Vn as L,Mn as T,Ln as a,_n as b,jn as s};
