import{n as v,h as Ct,u as s,e as ne,j as a,r as m,R as K,f as xe,a as ae,i as Ye,k as Ot,d as st,B as we,l as St,m as Mt,o as Pt,t as Be,p as $t}from"./index-f7074bc4.js";const Fa=v.div`
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
`,Wa=v.div`
  width: 100%;
`,Ft=v.li`
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
`,Wt=v.div`
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
`,Et=v.div`
  width: 100%;
`,It=v.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Nt=v.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,Yt=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
  }
`,Bt=v.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,Rt=v.div``,zt=v.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 16px;
`,Lt=v.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`,At=v.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`,Re=v.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,qt=v.div`
  width: 280px;
  margin-top: 24px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`,_t=v.p`
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
`,Ht=v.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`,ze=v.svg`
  width: ${e=>e.size||"16px"};
  height: ${e=>e.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,Le=v.svg`
  width: ${e=>e.size||"16px"};
  height: ${e=>e.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`;v.button`
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
`;const Vt=Ct`
    0% {
transform: rotateZ(0deg)
    }
    100% {
transform: rotateZ(360deg)
    }
`,Gt=s.button`
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

  background-color: ${({theme:e})=>e.animation.cubicBezier};
  box-shadow: ${({theme:e})=>e.shadows.small};

  &:hover {
    background: #d84343;
    outline: none;
    box-shadow: ${({theme:e})=>e.shadows.small};

    /* animation: ${Vt} 2s infinite linear; */
  }

  align-self: ${e=>e.align||"stretch"};

  ${e=>e.loadmore&&ne`
      border: 1px solid rgba(71, 84, 103, 0.2);
      padding: 16px 32px;
      width: 145px;
      background-color: ${({theme:t})=>t.colors.inputs};
      color: #101828;

      &:hover {
        border: 1px solid var(--button);
        background: #f2f4f7;
        outline: none;
        transition: border ${({theme:t})=>t.animation.cubicBezier};
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

  ${e=>e.next&&ne`
      padding: 0;
      margin: 0;
      width: 24px;
      height: 24px;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        background-color: transparent;
        outline: none;
        box-shadow: none;
      }
    `}
`,J=e=>a.jsx(Gt,{...e}),Qt=v.div`
  /* width: 430px; */
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,Xt=v.div`
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
`,Ut=v.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
  text-transform: capitalize;
`,O="/CV/assets/sprite-e5ae8524.svg",Kt=s.svg`
  width: ${e=>e.size||"20px"};
  height: ${e=>e.size||"20px"};
  stroke-width: 1.5px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,re=e=>{const{icon:t}=e;return a.jsx(Kt,{...e,children:a.jsx("use",{href:`${O}#icon-${t}`})})},ct=({details:e})=>a.jsx(Qt,{children:e&&Object.keys(e).map(t=>e[t]===0?"":a.jsxs(Xt,{children:[a.jsx(re,{icon:t}),e[t]===1?"":e[t],a.jsx(Ut,{children:t})]},t))});function Ce(e){return t=>!!t.type&&t.type.tabsRole===e}const pe=Ce("Tab"),Oe=Ce("TabList"),Se=Ce("TabPanel");function Jt(e){return pe(e)||Oe(e)||Se(e)}function Te(e,t){return m.Children.map(e,n=>n===null?null:Jt(n)?t(n):n.props&&n.props.children&&typeof n.props.children=="object"?m.cloneElement(n,{...n.props,children:Te(n.props.children,t)}):n)}function lt(e,t){return m.Children.forEach(e,n=>{n!==null&&(pe(n)||Se(n)?t(n):n.props&&n.props.children&&typeof n.props.children=="object"&&(Oe(n)&&t(n),lt(n.props.children,t)))})}function dt(e){let t=0;return lt(e,n=>{pe(n)&&t++}),t}function ut(e){return e&&"getAttribute"in e}function Ae(e){return ut(e)&&e.getAttribute("data-rttab")}function V(e){return ut(e)&&e.getAttribute("aria-disabled")==="true"}let de;function Zt(e){const t=e||(typeof window<"u"?window:void 0);try{de=!!(typeof t<"u"&&t.document&&t.document.activeElement)}catch{de=!1}}const en={className:"react-tabs",focus:!1},ft=e=>{let t=m.useRef([]),n=m.useRef([]);const r=m.useRef();function i(d,x){if(d<0||d>=f())return;const{onSelect:D,selectedIndex:Q}=e;D(d,Q,x)}function o(d){const x=f();for(let D=d+1;D<x;D++)if(!V(h(D)))return D;for(let D=0;D<d;D++)if(!V(h(D)))return D;return d}function c(d){let x=d;for(;x--;)if(!V(h(x)))return x;for(x=f();x-- >d;)if(!V(h(x)))return x;return d}function l(){const d=f();for(let x=0;x<d;x++)if(!V(h(x)))return x;return null}function u(){let d=f();for(;d--;)if(!V(h(d)))return d;return null}function f(){const{children:d}=e;return dt(d)}function h(d){return t.current[`tabs-${d}`]}function g(){let d=0;const{children:x,disabledTabClassName:D,focus:Q,forceRenderTabPanel:$,selectedIndex:I,selectedTabClassName:N,selectedTabPanelClassName:$e,environment:Fe}=e;n.current=n.current||[];let kt=n.current.length-f();const Dt=m.useId();for(;kt++<0;)n.current.push(`${Dt}${n.current.length}`);return Te(x,H=>{let ge=H;if(Oe(H)){let R=0,We=!1;de==null&&Zt(Fe);const Ee=Fe||(typeof window<"u"?window:void 0);de&&Ee&&(We=K.Children.toArray(H.props.children).filter(pe).some((Ie,be)=>Ee.document.activeElement===h(be))),ge=m.cloneElement(H,{children:Te(H.props.children,Ie=>{const be=`tabs-${R}`,Ne=I===R,ye={tabRef:Tt=>{t.current[be]=Tt},id:n.current[R],selected:Ne,focus:Ne&&(Q||We)};return N&&(ye.selectedClassName=N),D&&(ye.disabledClassName=D),R++,m.cloneElement(Ie,ye)})})}else if(Se(H)){const R={id:n.current[d],selected:I===d};$&&(R.forceRender=$),$e&&(R.selectedClassName=$e),d++,ge=m.cloneElement(H,R)}return ge})}function T(d){const{direction:x,disableUpDownKeys:D,disableLeftRightKeys:Q}=e;if(C(d.target)){let{selectedIndex:$}=e,I=!1,N=!1;(d.code==="Space"||d.keyCode===32||d.code==="Enter"||d.keyCode===13)&&(I=!0,N=!1,b(d)),!Q&&(d.keyCode===37||d.code==="ArrowLeft")||!D&&(d.keyCode===38||d.code==="ArrowUp")?(x==="rtl"?$=o($):$=c($),I=!0,N=!0):!Q&&(d.keyCode===39||d.code==="ArrowRight")||!D&&(d.keyCode===40||d.code==="ArrowDown")?(x==="rtl"?$=c($):$=o($),I=!0,N=!0):d.keyCode===35||d.code==="End"?($=u(),I=!0,N=!0):(d.keyCode===36||d.code==="Home")&&($=l(),I=!0,N=!0),I&&d.preventDefault(),N&&i($,d)}}function b(d){let x=d.target;do if(C(x)){if(V(x))return;const D=[].slice.call(x.parentNode.children).filter(Ae).indexOf(x);i(D,d);return}while((x=x.parentNode)!=null)}function C(d){if(!Ae(d))return!1;let x=d.parentElement;do{if(x===r.current)return!0;if(x.getAttribute("data-rttabs"))break;x=x.parentElement}while(x);return!1}const{children:P,className:F,disabledTabClassName:W,domRef:y,focus:w,forceRenderTabPanel:E,onSelect:_,selectedIndex:S,selectedTabClassName:k,selectedTabPanelClassName:M,environment:oe,disableUpDownKeys:Ma,disableLeftRightKeys:Pa,...jt}={...en,...e};return K.createElement("div",Object.assign({},jt,{className:xe(F),onClick:b,onKeyDown:T,ref:d=>{r.current=d,y&&y(d)},"data-rttabs":!0}),g())};ft.propTypes={};const tn=0,le=1,nn={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},rn=e=>e.selectedIndex===null?le:tn,Me=e=>{const{children:t,defaultFocus:n,defaultIndex:r,focusTabOnClick:i,onSelect:o,...c}={...nn,...e},[l,u]=m.useState(n),[f]=m.useState(rn(c)),[h,g]=m.useState(f===le?r||0:null);if(m.useEffect(()=>{u(!1)},[]),f===le){const C=dt(t);m.useEffect(()=>{if(h!=null){const P=Math.max(0,C-1);g(Math.min(h,P))}},[C])}const T=(C,P,F)=>{typeof o=="function"&&o(C,P,F)===!1||(i&&u(!0),f===le&&g(C))};let b={...e,...c};return b.focus=l,b.onSelect=T,h!=null&&(b.selectedIndex=h),delete b.defaultFocus,delete b.defaultIndex,delete b.focusTabOnClick,K.createElement(ft,b,t)};Me.propTypes={};Me.tabsRole="Tabs";const an={className:"react-tabs__tab-list"},Pe=e=>{const{children:t,className:n,...r}={...an,...e};return K.createElement("ul",Object.assign({},r,{className:xe(n),role:"tablist"}),t)};Pe.tabsRole="TabList";Pe.propTypes={};const ve="react-tabs__tab",on={className:ve,disabledClassName:`${ve}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${ve}--selected`},ue=e=>{let t=m.useRef();const{children:n,className:r,disabled:i,disabledClassName:o,focus:c,id:l,selected:u,selectedClassName:f,tabIndex:h,tabRef:g,...T}={...on,...e};return m.useEffect(()=>{u&&c&&t.current.focus()},[u,c]),K.createElement("li",Object.assign({},T,{className:xe(r,{[f]:u,[o]:i}),ref:b=>{t.current=b,g&&g(b)},role:"tab",id:`tab${l}`,"aria-selected":u?"true":"false","aria-disabled":i?"true":"false","aria-controls":`panel${l}`,tabIndex:h||(u?"0":null),"data-rttab":!0}),n)};ue.propTypes={};ue.tabsRole="Tab";const qe="react-tabs__tab-panel",sn={className:qe,forceRender:!1,selectedClassName:`${qe}--selected`},fe=e=>{const{children:t,className:n,forceRender:r,id:i,selected:o,selectedClassName:c,...l}={...sn,...e};return K.createElement("div",Object.assign({},l,{className:xe(n,{[c]:o}),role:"tabpanel",id:`panel${i}`,"aria-labelledby":`tab${i}`}),r||o?t:null)};fe.tabsRole="TabPanel";fe.propTypes={};const ht=s.div`
  position: fixed;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  overflow: auto;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`,mt=s.div`
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
`,xt=s.div`
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

  &:hover,
  &:active {
    background: rgba(21, 26, 29, 0.1);
    border-radius: 50%;
    transition: background ${({theme:e})=>e.animation.cubicBezier};
    box-shadow: ${({theme:e})=>e.shadows.small};
  }
`,cn=s.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,ln=s.div`
  margin-top: 16px;
`,dn=s.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`,un=s.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 16px;
`,fn=s.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`,hn=s.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`,_e=s.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,mn=s.div`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  background-image: url(${e=>e.gallery});
  background-size: cover;
  background-position: center;
`,xn=s.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`,pn=s.div`
  width: 100%;
  margin-top: 24px;
`,gn=s.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,je=s.svg`
  width: ${e=>e.size||"16px"};
  height: ${e=>e.size||"16px"};
  stroke-width: 2.3px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,bn=s.div`
  margin-top: 44px;
`,yn=s.div`
  display: flex;
  gap: 40px;
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`,He=s.div`
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
`,Ve=s.div`
  display: flex;
  gap: 24px;
`,Ge=s.div`
  margin-top: 44px;
  width: 430px;
`,wn=s.p`
  margin-top: 44px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,vn=s.div`
  height: 48px;
  border-bottom: 1px solid #bcbcbd;
`,jn=s.table`
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
`,kn=({data:e})=>{const{length:t,width:n,height:r,tank:i,consumption:o}=e;return a.jsx(a.Fragment,{children:a.jsxs(vn,{children:[a.jsx(wn,{children:"Vehicle details"}),a.jsx(jn,{children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"Length"}),a.jsx("td",{children:t})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Width"}),a.jsx("td",{children:n})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Height"}),a.jsx("td",{children:r})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Tank"}),a.jsx("td",{children:i})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"Consumption"}),a.jsx("td",{children:o})]})]})})]})})},Dn=s.div`
  margin-top: 44px;
  /* width: 430px; */
  display: flex;
  flex-direction: column;
`,Tn=s.div`
  display: flex;
  gap: 16px;
`,Cn=s.div`
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
`,On=s.div``,Sn=s.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: var(--main);
`,Mn=s.div``,Pn=s.div`
  margin-top: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,$n=s.span`
  font-size: 30px;
`,Fn="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let pt=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+=Fn[n[e]&63];return t};const Wn=({reviews:e})=>e.map(t=>a.jsxs(Dn,{children:[a.jsxs(Tn,{children:[a.jsx(Cn,{children:t.reviewer_name.charAt(0)}),a.jsxs(On,{children:[a.jsx(Sn,{children:t.reviewer_name}),a.jsx(Mn,{children:[1,2,3,4,5].map(n=>a.jsx($n,{style:{color:n<=t.reviewer_rating?"gold":"gray"},children:"★"},n))})]})]}),a.jsx(Pn,{children:t.comment})]},pt()));const En=s.div`
  margin-top: 44px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  padding: 24px;
  width: 448px;
  height: 532px;
  position: relative;
`,In=s.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,Nn=s.p`
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,Yn=s.form`
  margin-top: 24px;
`,Bn=s.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Rn=s.div`
  display: flex;
  flex-direction: ${e=>e.direction||"row"};
  align-items: ${e=>e.align||"stretch"};
  justify-content: ${e=>e.justify||"stretch"};
  gap: ${e=>e.gap||"0"};
  margin: ${({margin:e})=>e||"0"};
`,zn=e=>a.jsx(Rn,{...e}),Ln=s.h1`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 30px;
  line-height: 125%;
  margin-top: 40px;
  /* color: var(--main); */
  color: ${e=>e.color};
`,Ea=e=>a.jsx(Ln,{...e}),An=s.div`
  position: relative;
  border-radius: 10px;
  padding: 18px 18px 18px 80px;
  width: 400px;
  height: 56px;
  background: var(--inputs);
  outline: none;
  border: none;

  ${e=>e.comment&&ne`
      height: 114px;
      padding: 18px 18px 18px 95px;
    `}
  ${e=>e.calendar&&ne`
      padding: 18px 18px 18px 120px;
    `}
`,qn=s.label`
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
`,_n=s.input`
  outline: none;
  border: none;
  width: 300px;
  background: var(--inputs);
  ${e=>e.calendar&&ne`
      width: 260px;
    `}
`,Hn=s.textarea`
  outline: none;
  border: none;
  width: 290px;
  height: 80px;
  background: var(--inputs);
  resize: none;
`,Vn=s.div`
  position: absolute;
  right: 16px;
  top: 16px;
`,se=e=>{const[t,n]=m.useState(null),r=g=>{n(g)},i=()=>{n(null)},{type:o,label:c,inputId:l,icon:u,onClick:f}=e,h=o==="textarea"?Hn:_n;return a.jsxs(An,{...e,children:[a.jsx(qn,{active:t===l,children:c}),a.jsx(h,{...e,onFocus:()=>r(l),onBlur:i,type:o,required:!0,onClick:f}),a.jsx(Vn,{children:a.jsx(re,{icon:u})})]})},Gn=s.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 12px;
  padding: 16px;
  width: 325px;
  height: 273px;
  background: #fff;
  position: absolute;
  z-index: 10;
  bottom: -40px;
  right: 55px;
`,Qn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,Xn=s.div`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  /* color: var(--main); */
  white-space: nowrap;
`;s.div`
  display: flex;
  justify-content: center;
  width: 90px;
  /* background-color: blue; */
`;s.svg`
  width: 14px;
  height: 14px;
  fill: #407bff;
  transition: fill 500ms ease-in-out;
  cursor: pointer;

  &:hover {
    fill: var(--secondary-color-5);
  }
`;s.div`
  margin: 0;
  padding: 0;
  border: none;
  /* background-color: black; */
  width: 14px;
  height: 14px;
`;s.button`
  /* width: 50px; */
  background-color: transparent;
  border: none;
`;const Un=s.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
  text-align: center;
  /* color: var(--text); */
  text-transform: uppercase;
`,Kn=s.div`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
`,Jn=s.div`
  width: 41px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    font-weight: 600;
    font-size: 16px;
  }
`;function j(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function B(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function gt(e,t){const n=j(e);if(isNaN(t))return B(e,NaN);if(!t)return n;const r=n.getDate(),i=B(e,n.getTime());i.setMonth(n.getMonth()+t+1,0);const o=i.getDate();return r>=o?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}function Zn(e){const t=j(e).getDay();return t===0||t===6}const bt=6048e5,er=864e5;let tr={};function ie(){return tr}function Z(e,t){var l,u,f,h;const n=ie(),r=(t==null?void 0:t.weekStartsOn)??((u=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.weekStartsOn)??0,i=j(e),o=i.getDay(),c=(o<r?7:0)+o-r;return i.setDate(i.getDate()-c),i.setHours(0,0,0,0),i}function he(e){return Z(e,{weekStartsOn:1})}function yt(e){const t=j(e),n=t.getFullYear(),r=B(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=he(r),o=B(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const c=he(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=c.getTime()?n:n-1}function me(e){const t=j(e);return t.setHours(0,0,0,0),t}function Qe(e){const t=j(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function nr(e,t){const n=me(e),r=me(t),i=+n-Qe(n),o=+r-Qe(r);return Math.round((i-o)/er)}function rr(e){const t=yt(e),n=B(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),he(n)}function Xe(e,t){const n=me(e),r=me(t);return+n==+r}function ar(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ir(e){if(!ar(e)&&typeof e!="number")return!1;const t=j(e);return!isNaN(Number(t))}function or(e,t){const n=j(e.start),r=j(e.end);let i=+n>+r;const o=i?+n:+r,c=i?r:n;c.setHours(0,0,0,0);let l=(t==null?void 0:t.step)??1;if(!l)return[];l<0&&(l=-l,i=!i);const u=[];for(;+c<=o;)u.push(j(c)),c.setDate(c.getDate()+l),c.setHours(0,0,0,0);return i?u.reverse():u}function sr(e){const t=j(e);return t.setDate(1),t.setHours(0,0,0,0),t}function cr(e){const t=j(e),n=B(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const lr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},dr=(e,t,n)=>{let r;const i=lr[e];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function ke(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const ur={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},fr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},hr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},mr={date:ke({formats:ur,defaultWidth:"full"}),time:ke({formats:fr,defaultWidth:"full"}),dateTime:ke({formats:hr,defaultWidth:"full"})},xr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},pr=(e,t,n,r)=>xr[e];function ee(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const c=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):c;i=e.formattingValues[l]||e.formattingValues[c]}else{const c=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[l]||e.values[c]}const o=e.argumentCallback?e.argumentCallback(t):t;return i[o]}}const gr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},br={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},yr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},wr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},vr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},jr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},kr=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Dr={ordinalNumber:kr,era:ee({values:gr,defaultWidth:"wide"}),quarter:ee({values:br,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ee({values:yr,defaultWidth:"wide"}),day:ee({values:wr,defaultWidth:"wide"}),dayPeriod:ee({values:vr,defaultWidth:"wide",formattingValues:jr,defaultFormattingWidth:"wide"})};function te(e){return(t,n={})=>{const r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;const c=o[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?Cr(l,g=>g.test(c)):Tr(l,g=>g.test(c));let f;f=e.valueCallback?e.valueCallback(u):u,f=n.valueCallback?n.valueCallback(f):f;const h=t.slice(c.length);return{value:f,rest:h}}}function Tr(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Cr(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Or(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const i=r[0],o=t.match(e.parsePattern);if(!o)return null;let c=e.valueCallback?e.valueCallback(o[0]):o[0];c=n.valueCallback?n.valueCallback(c):c;const l=t.slice(i.length);return{value:c,rest:l}}}const Sr=/^(\d+)(th|st|nd|rd)?/i,Mr=/\d+/i,Pr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$r={any:[/^b/i,/^(a|c)/i]},Fr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Wr={any:[/1/i,/2/i,/3/i,/4/i]},Er={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ir={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Nr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Yr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Br={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Rr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},zr={ordinalNumber:Or({matchPattern:Sr,parsePattern:Mr,valueCallback:e=>parseInt(e,10)}),era:te({matchPatterns:Pr,defaultMatchWidth:"wide",parsePatterns:$r,defaultParseWidth:"any"}),quarter:te({matchPatterns:Fr,defaultMatchWidth:"wide",parsePatterns:Wr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:te({matchPatterns:Er,defaultMatchWidth:"wide",parsePatterns:Ir,defaultParseWidth:"any"}),day:te({matchPatterns:Nr,defaultMatchWidth:"wide",parsePatterns:Yr,defaultParseWidth:"any"}),dayPeriod:te({matchPatterns:Br,defaultMatchWidth:"any",parsePatterns:Rr,defaultParseWidth:"any"})},Lr={code:"en-US",formatDistance:dr,formatLong:mr,formatRelative:pr,localize:Dr,match:zr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ar(e){const t=j(e);return nr(t,cr(t))+1}function qr(e){const t=j(e),n=+he(t)-+rr(t);return Math.round(n/bt)+1}function wt(e,t){var h,g,T,b;const n=j(e),r=n.getFullYear(),i=ie(),o=(t==null?void 0:t.firstWeekContainsDate)??((g=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:g.firstWeekContainsDate)??i.firstWeekContainsDate??((b=(T=i.locale)==null?void 0:T.options)==null?void 0:b.firstWeekContainsDate)??1,c=B(e,0);c.setFullYear(r+1,0,o),c.setHours(0,0,0,0);const l=Z(c,t),u=B(e,0);u.setFullYear(r,0,o),u.setHours(0,0,0,0);const f=Z(u,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function _r(e,t){var l,u,f,h;const n=ie(),r=(t==null?void 0:t.firstWeekContainsDate)??((u=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.firstWeekContainsDate)??1,i=wt(e,t),o=B(e,0);return o.setFullYear(i,0,r),o.setHours(0,0,0,0),Z(o,t)}function Hr(e,t){const n=j(e),r=+Z(n,t)-+_r(n,t);return Math.round(r/bt)+1}function p(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const z={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return p(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):p(n+1,2)},d(e,t){return p(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return p(e.getHours()%12||12,t.length)},H(e,t){return p(e.getHours(),t.length)},m(e,t){return p(e.getMinutes(),t.length)},s(e,t){return p(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return p(i,t.length)}},X={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ue={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return z.y(e,t)},Y:function(e,t,n,r){const i=wt(e,r),o=i>0?i:1-i;if(t==="YY"){const c=o%100;return p(c,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):p(o,t.length)},R:function(e,t){const n=yt(e);return p(n,t.length)},u:function(e,t){const n=e.getFullYear();return p(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return p(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return p(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return z.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return p(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const i=Hr(e,r);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):p(i,t.length)},I:function(e,t,n){const r=qr(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):p(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):z.d(e,t)},D:function(e,t,n){const r=Ar(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):p(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const i=e.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return p(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const i=e.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return p(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),i=r===0?7:r;switch(t){case"i":return String(i);case"ii":return p(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let i;switch(r===12?i=X.noon:r===0?i=X.midnight:i=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let i;switch(r>=17?i=X.evening:r>=12?i=X.afternoon:r>=4?i=X.morning:i=X.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return z.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):z.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):p(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):p(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):z.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):z.s(e,t)},S:function(e,t){return z.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return Je(r);case"XXXX":case"XX":return G(r);case"XXXXX":case"XXX":default:return G(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return Je(r);case"xxxx":case"xx":return G(r);case"xxxxx":case"xxx":default:return G(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Ke(r,":");case"OOOO":default:return"GMT"+G(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Ke(r,":");case"zzzz":default:return"GMT"+G(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return p(r,t.length)},T:function(e,t,n){const r=e.getTime();return p(r,t.length)}};function Ke(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),o=r%60;return o===0?n+String(i):n+String(i)+t+p(o,2)}function Je(e,t){return e%60===0?(e>0?"-":"+")+p(Math.abs(e)/60,2):G(e,t)}function G(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=p(Math.trunc(r/60),2),o=p(r%60,2);return n+i+t+o}const Ze=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},vt=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Vr=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Ze(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",Ze(r,t)).replace("{{time}}",vt(i,t))},Gr={p:vt,P:Vr},Qr=/^D+$/,Xr=/^Y+$/,Ur=["D","DD","YY","YYYY"];function Kr(e){return Qr.test(e)}function Jr(e){return Xr.test(e)}function Zr(e,t,n){const r=ea(e,t,n);if(console.warn(r),Ur.includes(e))throw new RangeError(r)}function ea(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ta=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,na=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ra=/^'([^]*?)'?$/,aa=/''/g,ia=/[a-zA-Z]/;function U(e,t,n){var h,g,T,b,C,P,F,W;const r=ie(),i=(n==null?void 0:n.locale)??r.locale??Lr,o=(n==null?void 0:n.firstWeekContainsDate)??((g=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:g.firstWeekContainsDate)??r.firstWeekContainsDate??((b=(T=r.locale)==null?void 0:T.options)==null?void 0:b.firstWeekContainsDate)??1,c=(n==null?void 0:n.weekStartsOn)??((P=(C=n==null?void 0:n.locale)==null?void 0:C.options)==null?void 0:P.weekStartsOn)??r.weekStartsOn??((W=(F=r.locale)==null?void 0:F.options)==null?void 0:W.weekStartsOn)??0,l=j(e);if(!ir(l))throw new RangeError("Invalid time value");let u=t.match(na).map(y=>{const w=y[0];if(w==="p"||w==="P"){const E=Gr[w];return E(y,i.formatLong)}return y}).join("").match(ta).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const w=y[0];if(w==="'")return{isToken:!1,value:oa(y)};if(Ue[w])return{isToken:!0,value:y};if(w.match(ia))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return{isToken:!1,value:y}});i.localize.preprocessor&&(u=i.localize.preprocessor(l,u));const f={firstWeekContainsDate:o,weekStartsOn:c,locale:i};return u.map(y=>{if(!y.isToken)return y.value;const w=y.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Jr(w)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Kr(w))&&Zr(w,t,String(e));const E=Ue[w[0]];return E(l,w,i.localize,f)}).join("")}function oa(e){const t=e.match(ra);return t?t[1].replace(aa,"'"):e}function sa(e){const t=j(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}function ca(e,t){const n=j(e),r=j(t);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function la(e,t){var l,u,f,h;const n=ie(),r=(t==null?void 0:t.weekStartsOn)??((u=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((h=(f=n.locale)==null?void 0:f.options)==null?void 0:h.weekStartsOn)??0,i=j(e),o=i.getDay(),c=(o<r?-7:0)+6-(o-r);return i.setHours(0,0,0,0),i.setDate(i.getDate()+c),i}function da(e,t){return gt(e,-t)}const ua="MM",fa="eee",et="d",ha=({onClose:e})=>{const t=ae(),[n,r]=m.useState(new Date),[i,o]=m.useState(""),[c,l]=m.useState(new Date),[u,f]=m.useState(!1),h=new Date,g=sr(c),T=sa(c),b=Z(g,{weekStartsOn:1}),C=la(T,{weekStartsOn:1}),P=or({start:b,end:C}),F=(k=>{const M=[];for(let oe=0;oe<=6;oe++)M.push(k[oe]);return M})(P),W=k=>Xe(k,h),y=k=>Xe(k,n),w=P.map(k=>({id:`${U(k,et)}-${U(k,ua)}`,date:k})),E=k=>{const M=U(k,"d/MM/yyyy");t(Ye(M))},_=()=>{f(!1),setTimeout(e,250)},S=k=>{k.currentTarget===k.target&&(_(),t(Ye("")))};return a.jsx(a.Fragment,{children:a.jsxs(Gn,{onClick:S,children:[a.jsxs(Qn,{children:[a.jsx(J,{next:!0,onClick:()=>l(da(c,1)),children:a.jsx(re,{color:"#101828",icon:"nextRight"})}),a.jsx(Xn,{children:U(c,"MMMM yyyy")}),a.jsx(J,{next:!0,onClick:()=>l(gt(c,1)),children:a.jsx(re,{color:"#101828",icon:"nextLeft"})})]}),a.jsxs(Kn,{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",alignItems:"center",justifyContent:"center",justifyItems:"center"},children:[F.map(k=>a.jsx(Un,{children:U(k,fa)},pt())),w.map(({id:k,date:M})=>a.jsx(Jn,{onClick:()=>{r(M),E(M),_()},style:{color:ca(M,c)?W(M)?"green":y(M)?"blue":(Zn(M),""):"gray"},children:a.jsx("span",{onClick:()=>{o({date:M})},children:U(M,et)})},k))]})]})})},ma=s.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(16, 24, 40, 0.6);
`,xa=s.input`
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
`,pa=s.svg`
  position: absolute;
  left: 18px;
  top: 18px;
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,ga=s.div`
  position: relative;
`,Ia=()=>{const[e,t]=m.useState(""),n=ae(),r=i=>{t(i.target.value),n(Ot(i.target.value))};return console.log(e),a.jsxs(a.Fragment,{children:[a.jsx(ma,{children:"Location"}),a.jsxs(ga,{children:[a.jsx(xa,{type:"text",name:"filter",value:e,onChange:r,placeholder:"Kyiv, Ukraine"}),a.jsx(pa,{children:a.jsx("use",{href:`${O}#icon-map`})})]})]})},tt=()=>{const[e,t]=m.useState(""),[n,r]=m.useState(""),[i,o]=m.useState(""),[c,l]=m.useState(!1),[u,f]=m.useState(!1),[h,g]=m.useState(""),[T,b]=m.useState(!1),C=()=>b(!0),P=()=>b(!1),F=/[а-яА-Яa-zA-Z]{3,}/,W=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,y=S=>{S.preventDefault(),w()},w=()=>{if(!W.test(n)){we.warn("Email must have been correct");return}if(F.test(e))console.log({name:e,email:n,startDate:h,comment:i}),E(),location.reload();else{we.warn("Name must have been 3 charge");return}},E=()=>{t(""),r(""),g(""),o(""),we.success("Congratulations! Order received. Wait for a letter in the mail with further instructions")},_=st(S=>S.time.stateHandleDate);return a.jsxs(En,{children:[a.jsx(In,{children:"Book your campervan now"}),a.jsx(Nn,{children:"Stay connected! We are always ready to help you."}),a.jsxs(Yn,{onSubmit:y,children:[a.jsxs(Bn,{children:[a.jsx(se,{label:"Name",placeholder:"Ivan Bereza",type:"text",name:"name",value:e,onChange:S=>{F.test(S.target.value)?l(!0):l(!1),t(S.target.value)}}),a.jsx(se,{label:"Email",type:"email",name:"email",value:n,onChange:S=>{W.test(S.target.value)?f(!0):f(!1),r(S.target.value)},placeholder:"ivan@gmail.com"}),a.jsx(se,{label:"Booking date",type:"text",name:"calendar",value:_,icon:"calendar",calendar:!0,onClick:C}),T&&a.jsx(ha,{onClose:P}),a.jsx(se,{label:"Comment",type:"textarea",name:"comment",value:i,onChange:S=>o(S.target.value),comment:!0})]}),a.jsx(J,{children:"Send"})]})]})},ba=({onClose:e,data:t})=>{const[n,r]=m.useState(1),[i,o]=m.useState(!1),c=f=>{r(f)};ae();const l=()=>{o(!1),setTimeout(e,500)},u=f=>{f.currentTarget===f.target&&l()};return m.useEffect(()=>(o(!0),document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]),m.useEffect(()=>{const f=h=>{h.key==="Escape"&&e()};return window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}},[e]),a.jsx(ht,{onClick:u,children:a.jsxs(mt,{children:[a.jsx(xt,{onClick:l,children:a.jsx(je,{size:"32px",children:a.jsx("use",{href:`${O}#icon-close`})})}),a.jsx(cn,{children:t.name}),a.jsxs(un,{children:[a.jsxs(_e,{children:[a.jsx(je,{children:a.jsx("use",{href:`${O}#icon-star`})}),a.jsxs(fn,{children:[t.rating,"(",t.reviews.length," Reviews)"]})]}),a.jsxs(_e,{children:[a.jsx(je,{children:a.jsx("use",{href:`${O}#icon-map`})}),a.jsx(hn,{children:t.location})]})]}),a.jsx(ln,{children:a.jsxs(dn,{children:["€ ",t.price,".00"]})}),a.jsx(xn,{children:t.gallery.map(f=>a.jsx(mn,{gallery:f},f))}),a.jsx(pn,{children:a.jsx(gn,{children:t.description})}),a.jsx(bn,{children:a.jsxs(Me,{children:[a.jsx(Pe,{children:a.jsxs(yn,{children:[a.jsx(ue,{children:a.jsx(He,{style:n===1?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},onClick:()=>c(1),children:"Features"})}),a.jsx(ue,{children:a.jsx(He,{onClick:()=>c(2),style:n===2?{borderBottom:"4px solid #e44848"}:{borderBottom:"none"},children:"Reviews"})})]})}),a.jsx(fe,{children:a.jsxs(Ve,{children:[a.jsxs(Ge,{children:[a.jsx(ct,{details:t.details}),a.jsx(kn,{data:t})]}),a.jsx(tt,{})]})}),a.jsx(fe,{children:a.jsxs(Ve,{children:[a.jsx(Ge,{children:a.jsx(Wn,{reviews:t.reviews})}),a.jsx(tt,{})]})})]})})]})})},ya=e=>e.favorites.favorites,wa=({isOpen:e,onClose:t,children:n})=>{const[r,i]=m.useState(!1),o=()=>{i(!1),setTimeout(t,500)},c=l=>{l.currentTarget===l.target&&o()};return m.useEffect(()=>(e&&(i(!0),document.body.style.overflow="hidden"),()=>{document.body.style.overflow="unset"}),[e]),m.useEffect(()=>{const l=u=>{u.key==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[t]),e?a.jsx(ht,{onClick:c,children:a.jsxs(mt,{children:[a.jsx(xt,{onClick:t,children:a.jsx(re,{size:"32px",icon:"close"})}),a.jsx("div",{className:"modal-content",children:n})]})}):null},Na=({data:e})=>{const[t,n]=m.useState(!1),r=()=>n(!0),i=()=>n(!1),[o,c]=m.useState(!1),l=ae(),u=()=>{c(!0)},f=()=>{c(!1)},h=st(ya),g=h==null?void 0:h.some(_=>_._id===e._id),T=()=>{l(g?Mt(e):Pt(e))},{name:b,price:C,rating:P,location:F,description:W,reviews:y,gallery:w,details:E}=e;return a.jsxs(Ft,{children:[w&&w.length>0&&a.jsx(Wt,{gallery:w[0]}),a.jsxs(Et,{children:[a.jsxs(It,{children:[a.jsx(Nt,{children:b}),a.jsxs(Yt,{children:[a.jsxs(Bt,{children:["€ ",parseFloat(C).toFixed(2)]}),a.jsx(Rt,{onClick:T,children:g?a.jsx(Le,{color:"var(--button)",size:"24px",children:a.jsx("use",{href:`${O}#icon-heart`})}):a.jsx(Le,{size:"24px",children:a.jsx("use",{href:`${O}#icon-heart`})})})]})]}),a.jsxs(zt,{children:[a.jsxs(Re,{children:[a.jsx(ze,{children:a.jsx("use",{href:`${O}#icon-star`})}),a.jsxs(Lt,{children:[P,"(",y&&y.length," Reviews)"]})]}),a.jsxs(Re,{children:[a.jsx(ze,{children:a.jsx("use",{href:`${O}#icon-map`})}),a.jsx(At,{children:F})]})]}),a.jsx(qt,{children:a.jsx(_t,{children:W})}),a.jsx(Ht,{children:a.jsx(ct,{details:E})}),a.jsxs(zn,{gap:"20px",children:[a.jsx(J,{onClick:u,children:"Show more"}),a.jsxs("div",{children:[a.jsx(J,{type:"button",onClick:r,children:"Modal"}),St.createPortal(a.jsx(wa,{isOpen:t,onClose:i,children:"Зміст модалки"}),document.getElementById("modal-root"))]})]})]}),o&&a.jsx(ba,{onClose:f,data:e})]})},va=s.div`
  margin-top: 32px;
  gap: 32px;
  border: none;
  display: flex;
  flex-direction: column;
`,ja=s.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
`,nt=s.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: var(--main);
`,rt=s.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`,ka=s.div`
  display: flex;
  gap: 10px;
`;s.div`
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
`;s.input``;s.div`
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
`;const De=s.svg`
  width: ${e=>e.size||"60px"};
  height: ${e=>e.size||"48px"};
  stroke-width: 0.9px;
`,L=s.span`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: var(--main);
`,at=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,ce=s.svg`
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  stroke-width: 0.9px;
  stroke: ${e=>e.color||"#101828"};
  fill: ${e=>e.color||"#ffffff"};
`,Da=s.svg`
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  fill: ${e=>e.color||"#000000"};
`;s.button`
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
`;const A=s.label`
  position: relative;
`,Y=s.input`
  display: none;
`,q=s.div`
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

  ${Y}:checked + & {
    border: 1px solid var(--button);
  }
`,it=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12px;
  left: 22px;
`,Ta=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2px;
  left: 4px;
`,Ca=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 8px;
`,ot=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 32px;
`,Oa=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 22px;
`,Sa=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 22px;
  left: 15px;
`,Ya=()=>{const e=ae(),[t,n]=m.useState(""),[r,i]=m.useState([]),o=u=>{n(u.target.value),e(Be(u.target.value))},c=u=>{console.log("e.target.value",u.target.value),i(f=>[...f,u.target.value]),e($t(u.target.value)),console.log("equipment useState",r)},l=u=>{u.preventDefault(),n(""),i(""),e(Be(""))};return a.jsx("form",{children:a.jsxs(va,{children:[a.jsx(ja,{children:"Filters"}),a.jsx(nt,{children:"Vehicle equipment"}),a.jsx(rt,{}),a.jsxs(at,{children:[a.jsxs(A,{children:[a.jsxs(ot,{children:[a.jsx(Da,{children:a.jsx("use",{href:`${O}#icon-AC`})}),a.jsx(L,{children:"AC"})]}),a.jsx(Y,{type:"checkbox",id:"airConditioner",name:"options",value:"airConditioner",checked:r.includes("airConditioner"),onChange:c}),a.jsx(q,{})]}),a.jsxs(A,{children:[a.jsxs(Sa,{children:[a.jsx(ce,{children:a.jsx("use",{href:`${O}#icon-automatic`})}),a.jsx(L,{children:"Automatic"})]}),a.jsx(Y,{type:"checkbox",id:"automatic",name:"options",value:"automatic",checked:r.includes("automatic"),onChange:c}),a.jsx(q,{})]}),a.jsxs(A,{children:[a.jsxs(Oa,{children:[a.jsx(ce,{children:a.jsx("use",{href:`${O}#icon-kitchen`})}),a.jsx(L,{children:"Kitchen"})]}),a.jsx(Y,{type:"checkbox",id:"kitchen",name:"options",value:"kitchen",checked:r.includes("kitchen"),onChange:c}),a.jsx(q,{})]}),a.jsxs(A,{children:[a.jsxs(ot,{children:[a.jsx(ce,{children:a.jsx("use",{href:`${O}#icon-TV`})}),a.jsx(L,{children:"TV"})]}),a.jsx(Y,{type:"checkbox",id:"TV",name:"options",value:"TV",checked:r.includes("TV"),onChange:c}),a.jsx(q,{})]}),a.jsxs(A,{children:[a.jsxs(Ca,{children:[a.jsx(ce,{children:a.jsx("use",{href:`${O}#icon-shower`})}),a.jsx(L,{children:"Shower/WC"})]}),a.jsx(Y,{type:"radio",id:"shower",name:"options",value:"shower",checked:r.includes("shower"),onChange:c}),a.jsx(q,{})]})]}),a.jsx(nt,{children:"Vehicle type"}),a.jsx(rt,{}),a.jsx(ka,{children:a.jsxs(at,{children:[a.jsxs(A,{children:[a.jsxs(it,{children:[a.jsx(De,{children:a.jsx("use",{href:`${O}#icon-van`})}),a.jsx(L,{children:"Van"})]}),a.jsx(Y,{type:"radio",id:"panelTruck",name:"options",value:"panelTruck",checked:t==="panelTruck",onChange:o}),a.jsx(q,{})]}),a.jsxs(A,{children:[a.jsxs(Ta,{children:[a.jsx(De,{children:a.jsx("use",{href:`${O}#icon-fully-integrated`})}),a.jsx(L,{children:"Fully Integrated"})]}),a.jsx(Y,{type:"radio",id:"fullyIntegrated",name:"options",value:"fullyIntegrated",checked:t==="fullyIntegrated",onChange:o}),a.jsx(q,{})]}),a.jsxs(A,{children:[a.jsxs(it,{children:[a.jsx(De,{children:a.jsx("use",{href:`${O}#icon-alcove`})}),a.jsx(L,{children:"Alcove"})]}),a.jsx(Y,{type:"radio",id:"alcove",name:"options",value:"alcove",checked:t==="alcove",onChange:o}),a.jsx(q,{})]})]})}),a.jsx(J,{type:"reset",margin:"0",onClick:l,children:"Reset"})]})})};export{Na as A,J as B,Fa as C,zn as F,Ia as L,Ea as T,Wa as a,Ya as b,ya as s};
