import{j as e,A as x,r as u}from"./index-BzgU2gYV.js";import{H as I,N as b}from"./Navigation.module-CN635QCl.js";import{C as j}from"./Circle.module-bZeguQgk.js";import{P as L}from"./PageNumber-CoFomNsS.js";import{m as T}from"./motion-B4hoxqpt.js";import"./use-spring-D-u3Ibu3.js";const E="_area400_1ldnv_54",h="_area600_1ldnv_60",C="_nimbus900_1ldnv_66",N="_contentContainer_1ldnv_79",M="_transitionContainer_1ldnv_85",y="_introLogo_1ldnv_99",A="_pageIndicator_1ldnv_105",D="_pageNumber_1ldnv_119",F="_introText_1ldnv_126",k="_introTextLine_1ldnv_140",O="_focusableImage_1ldnv_149",g={area400:E,area600:h,nimbus900:C,contentContainer:N,transitionContainer:M,introLogo:y,pageIndicator:A,pageNumber:D,introText:F,introTextLine:k,focusableImage:O},R="/assets/notino-TWOzfJLK.jpg",H="/assets/livestreaming-D1ojVLTe.jpg",P="/assets/richly-DrudTxHL.jpg",W="/assets/kresleni-MUwwsi_a.jpg";function S({src:n,x:t,y:r,onMouseEnter:i,onMouseLeave:s,isFocused:a,variant:c,anim:d}){const[l,f]=u.useState({x:10,y:10,mt:100,mb:200}),o={min:15,max:25},m={min:15,max:25},_={min:100,max:150},p={min:180,max:220};u.useEffect(()=>{f({x:Math.random()*(o.max-o.min+1)+o.min,y:Math.random()*(m.max-m.min+1)+m.min,mt:Math.random()*(_.max-_.min+1)+_.min,mb:Math.random()*(p.max-p.min+1)+p.min})},[]);const v={top:r.includes("-")?"0":"auto",marginTop:r.includes("-")?`${l.mt}px`:"auto",bottom:r.includes("+")?"0":"auto",marginBottom:r.includes("+")?`${l.mb}px`:"auto",left:t.includes("-")?`${l.x}%`:"auto",right:t.includes("+")?`${l.x}%`:"auto"};return e.jsx(T.img,{className:g.focusableImage,onMouseEnter:i,onMouseLeave:s,src:n,alt:"",style:{...v},animate:c==="initial"?"initial":a?c:"default",...d?d.focusableImage():{}})}function $({imageFocus:n,anim:t}){const r=["WE ARE","MODERN","DIGITAL","FACTORY","THAT HELPS","TO OPTIMIZE,","MODERNIZE","AND GROW."];function i({text:s,index:a}){return e.jsx("div",{children:e.jsx(T.span,{animate:n.anim,...t?t.line(a):{},className:g.introTextLine,children:s})})}return e.jsx(T.div,{...t?t.introText(n.image>=0):{},className:g.introText,children:r.map((s,a)=>e.jsx(i,{text:s,index:a},a))})}function B({anim:n}){const[t,r]=u.useState(!0),[i,s]=u.useState({anim:"initial",image:-1});let a,c;const d=o=>{!t&&i.image!==o&&(clearTimeout(a),clearTimeout(c),a=setTimeout(()=>{s({anim:"focus",image:o})},50))},l=()=>{!t&&i.image!==-1&&(clearTimeout(a),clearTimeout(c),c=setTimeout(()=>{s({anim:"default",image:-1})},250))};u.useEffect(()=>{const o=setTimeout(()=>{t&&(s({anim:"afterLoad",image:-1}),r(!1))},1400);return()=>clearTimeout(o)},[t]);const f=[{src:R,x:"-",y:"-"},{src:H,x:"+",y:"-"},{src:P,x:"-",y:"+"},{src:W,x:"+",y:"+"}];return e.jsxs(e.Fragment,{children:[e.jsx(L,{number:"01",anim:n?n.pageNumber:null,style:g}),e.jsx($,{imageFocus:i,anim:n?n.lines:null}),f.map((o,m)=>u.createElement(S,{...o,isFocused:i.image===m,variant:i.anim,onMouseEnter:()=>d(m),onMouseLeave:l,key:m,anim:n?n.focusableImage:null})),e.jsx(j,{id:"Before-DesktopWhoWeAre",anim:x.general.circle(!1)})]})}function K(){return e.jsxs("section",{id:"DesktopIntro",className:g.contentContainer+" contentContainer",children:[e.jsx(I,{onlyActive:!1,anim:x.general.header(!0)}),e.jsx(b,{onlyActive:!1,anim:x.general.navigation(!0),activePage:1}),e.jsx(B,{anim:x.desktop.intro.introContent})]})}export{K as default};