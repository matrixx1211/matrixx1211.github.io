import{j as e,M as p,A as f,r as l,P as M,C as E,m as T,n as L,l as h,a as j,k as v}from"./index-D1YzwdXT.js";const C="_area400_1b77m_60",N="_area600_1b77m_66",A="_nimbus900_1b77m_72",F="_contentContainer_1b77m_91",y="_transitionContainer_1b77m_97",R="_introLogo_1b77m_112",O="_pageIndicator_1b77m_118",W="_pageNumber_1b77m_132",P="_introText_1b77m_139",w="_introTextLine_1b77m_154",D="_focusableImage_1b77m_163",g={area400:C,area600:N,nimbus900:A,contentContainer:F,transitionContainer:y,introLogo:R,pageIndicator:O,pageNumber:W,introText:P,introTextLine:w,focusableImage:D};function S({src:n,x:t,y:r,onMouseEnter:o,onMouseLeave:s,isFocused:a,variant:c,anim:x}){const[u,b]=l.useState({x:10,y:10,mt:100,mb:200}),i={min:window.innerWidth>800?15:0,max:window.innerWidth>800?25:0},m={min:15,max:25},d={min:100,max:150},_={min:180,max:220};l.useEffect(()=>{b({x:Math.random()*(i.max-i.min+1)+i.min,y:Math.random()*(m.max-m.min+1)+m.min,mt:Math.random()*(d.max-d.min+1)+d.min,mb:Math.random()*(_.max-_.min+1)+_.min})},[]);const I={top:r.includes("-")?"0":"auto",marginTop:r.includes("-")?`${u.mt}px`:"auto",bottom:r.includes("+")?"0":"auto",marginBottom:r.includes("+")?`${u.mb}px`:"auto",left:t.includes("-")?`${u.x}%`:"auto",right:t.includes("+")?`${u.x}%`:"auto"};return e.jsx(T.img,{className:g.focusableImage,onMouseEnter:o,onMouseLeave:s,src:n,alt:"",style:{...I},animate:c==="initial"?"initial":a?c:"default",...x?x.focusableImage():{}})}function $({imageFocus:n,anim:t}){const r=["WE ARE","MODERN","DIGITAL","FACTORY","THAT HELPS","TO OPTIMIZE,","MODERNIZE","AND GROW."];function o({text:s,index:a}){return e.jsx("div",{children:e.jsx(T.span,{animate:n.anim,...t?t.line(a):{},className:g.introTextLine,children:s})})}return e.jsx(T.div,{...t?t.introText(n.image>=0):{},className:g.introText,children:r.map((s,a)=>e.jsx(o,{text:s,index:a},a))})}function k({anim:n}){const[t,r]=l.useState(!0),[o,s]=l.useState({anim:"initial",image:-1});let a,c;const x=i=>{!t&&o.image!==i&&(clearTimeout(a),clearTimeout(c),a=setTimeout(()=>{s({anim:"focus",image:i})},150))},u=()=>{!t&&o.image!==-1&&(clearTimeout(a),clearTimeout(c),c=setTimeout(()=>{s({anim:"default",image:-1})},250))};l.useEffect(()=>{const i=setTimeout(()=>{t&&(s({anim:"afterLoad",image:-1}),r(!1))},1400);return()=>clearTimeout(i)},[t]);const b=[{src:L,x:"-",y:"-"},{src:h,x:"+",y:"-"},{src:j,x:"-",y:"+"},{src:v,x:"+",y:"+"}];return e.jsxs(e.Fragment,{children:[e.jsx(M,{number:"01",anim:n?n.pageNumber:null,style:g}),e.jsx($,{imageFocus:o,anim:n?n.lines:null}),b.map((i,m)=>l.createElement(S,{...i,isFocused:o.image===m,variant:o.anim,onMouseEnter:()=>x(m),onMouseLeave:u,key:m,anim:n?n.focusableImage:null})),e.jsx(E,{id:"Before-MobileWhoWeAre",anim:f.general.circle(!0)})]})}function G(){return e.jsxs("section",{id:"MobileIntro",className:g.contentContainer+" contentContainer",children:[e.jsx(p,{onlyActive:!1,anim:f.mobile.general.navigation(!1),activePage:1}),e.jsx(k,{anim:f.mobile.intro.introContent})]})}export{G as default};
