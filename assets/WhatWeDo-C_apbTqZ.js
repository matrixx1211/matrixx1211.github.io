import{r as o,j as t,m as p,i as N,u as D,F as f,S as u}from"./index-DXhAUj-p.js";import{A as j,L as g}from"./Layout-o3QXLMAG.js";import{a as x,L as I}from"./Line-CTDQvpR-.js";import{D as A}from"./types-DNXdvWDI.js";import{u as y}from"./hooks-C64WFBQt.js";import{L}from"./LinesWithDetailPopUp-BT0r2rkJ.js";import{P as v}from"./PageNumber-BO-gQ9H4.js";const d=.5;function h({src:e,alt:s,className:l,style:r={},plusDelay:i=0,maxOpacity:a=1}){const{ref:n,isInView:m}=y(),[c,w]=o.useState(!0);return o.useEffect(()=>{m&&c&&setTimeout(()=>w(!1),d*1e3)},[m,c]),t.jsx(p.img,{src:e,alt:s,className:`opacity-0 ${l}`,style:r,ref:n,animate:{opacity:m&&c?[0,a]:[a]},transition:{duration:d,delay:N+i}})}const E={start:{x:"100vw",display:"none"},show:{x:0,display:"block"},hide:{x:"-100vw",display:"none"}};function W({index:e,line:s}){const[l,r]=o.useState("start");o.useEffect(()=>{if(l==="hide"){const a=setTimeout(()=>r("start"),300);return()=>clearTimeout(a)}},[l]);const i=()=>r(a=>a==="start"?"show":a==="show"?"hide":"start");return t.jsxs("div",{className:"relative",children:[t.jsx(p.div,{className:"fixed bottom-0 pt-12 lg:pt-16 2xl:pt-20 w-screen h-dvh bg-black z-20 overflow-y-scroll hidden",animate:l,variants:E,children:t.jsxs("div",{className:"flex flex-col justify-center items-center gap-4 pt-8 lg:w-5xl mx-auto",children:[t.jsx(x,{className:"px-4 text-white font-nimbus font-black text-3xl sm:text-5xl",plusDelay:-1+.2,children:s.title}),t.jsx(h,{src:s.src,alt:s.alt,className:"w-full max-w-lg object-contain",plusDelay:-1+.2}),t.jsx(x,{className:"grow px-4 text-white text-base sm:text-lg",textAlign:"left",plusDelay:-1+.2,children:s.detail}),t.jsx(j,{onClick:i,direction:A.left})]})}),t.jsxs("div",{className:"w-full relative lg:w-5xl mx-auto",onClick:i,onKeyDown:i,children:[t.jsx("div",{className:"flex items-center relative z-10 h-40 sm:h-48 md:h-56 w-full px-1",children:t.jsx("div",{className:"flex flex-wrap gap-x-3 w-full",style:{justifyContent:e%2===0?"left":"right"},children:s.title.split(" ").map((a,n)=>t.jsx(x,{className:"font-nimbus font-black text-5xl text-white",textAlign:e%2===0?"left":"right",index:e,shouldWrap:!0,children:a},`LineWithDetailModal-${n}`))})}),t.jsx(h,{src:s.src,alt:s.alt,className:"inset-0 absolute max-w-4/5 sm:max-w-1/2 max-h-40 sm:max-h-48 md:max-h-56 aspect-[3/2]",style:{marginLeft:e%2===0?"auto":0},plusDelay:I*e,maxOpacity:.7})]})]})}const b=o.memo(W);function $(){const{isDesktop:e}=D();return t.jsxs(g,{sectionId:u.WhatWeDo,nextSectionId:u.BeforeOurTools,className:"flex flex-col gap-8 2xl:justify-center py-8 overflow-hidden 2xl:overflow-visible",children:[e&&t.jsx(L,{lines:f}),!e&&t.jsx(v,{pageNumber:"03",className:"w-20 ml-auto",textAlign:"left"}),!e&&f.map((s,l)=>t.jsx(b,{line:s,index:l},`LineWithDetailModal-${l}`))]})}export{$ as default};
