import{u as y,r as m,R as p,j as e,m as x,i as f,I as v,S as w,o as M,p as N,q as j,s as b,t as I}from"./index-D8FNQ89s.js";import{L as F}from"./Layout-DjRf0tEe.js";import{P as T}from"./PageNumber-B8gK7DYF.js";import"./hooks-GJlQlbkL.js";import"./types-LU87cJX-.js";import"./utils-CEb115jY.js";const E=a=>({initial:{opacity:[0,.65],transition:{opacity:{delay:f+(a+Math.ceil(Math.random()*10)%4)*.1}}},default:{opacity:[.65]},imageFocused:{scale:1.1,opacity:1},imageNotFocused:{opacity:.5}}),L={initial:{opacity:[0,1],transition:{opacity:{delay:f}}},default:{opacity:1,transition:{opacity:{duration:0}}},imageFocused:{zIndex:100}};function u({src:a,alt:s,className:c="",index:i,onMouseEnter:g,onMouseLeave:d,animate:t}){const{isMobile:o}=y(),[r,n]=m.useState({paddingTop:0,paddingLeft:0,paddingBottom:0,paddingRight:0});return m.useEffect(()=>{const l=Math.random()>.5?Math.ceil(Math.random()*21+60):Math.ceil(Math.random()*21),h=Math.random()>.5?Math.ceil(Math.random()*21+60):Math.ceil(Math.random()*21);n({paddingTop:h,paddingLeft:o?0:l,paddingBottom:2*p-h,paddingRight:o?0:2*p-l})},[o]),e.jsx(x.div,{style:{...r},className:`flex opacity-0 absolute z-10 max-w-sm max-h-xs ${c}`,animate:t.imageFocused===i||t.imageFocused===-1?t.variant:"imageNotFocused",variants:L,children:e.jsx(x.img,{className:"object-contain opacity-65 w-full h-full max-w-sm lg:max-w-md 2xl:max-w-xl",src:a,alt:s,animate:t.imageFocused===i||t.imageFocused===-1?t.variant:"imageNotFocused",variants:E(i),onMouseEnter:()=>g(i),onMouseLeave:d})})}const S=a=>({initial:{y:[0,"-100%"],transition:{duration:.5,delay:f+.1*a}},default:{y:["-100%"],transition:{duration:0}},imageFocused:{filter:"drop-shadow(0px 0px 1px rgba(255,255,255,1))",color:"#000"}}),A={initial:{},default:{overflow:"visible",transition:{duration:0}},imageFocused:{overflow:"visible",transition:{duration:0}}};function R(){const{isDesktop:a}=y(),[s,c]=m.useState({variant:"initial",imageFocused:-1}),[i,g]=m.useState(!0);let d,t;m.useEffect(()=>{if(i){const n=setTimeout(()=>{g(!1),c(l=>({...l,variant:"default"}))},(1.5+v.length*.1)*1e3);return()=>clearTimeout(n)}},[i]);const o=n=>{!a||i||(clearTimeout(d),clearTimeout(t),d=setTimeout(()=>c({variant:"imageFocused",imageFocused:n}),200))},r=()=>{!a||i||(clearTimeout(d),clearTimeout(t),t=setTimeout(()=>c({variant:"default",imageFocused:-1}),250))};return e.jsxs(F,{sectionId:w.Intro,nextSectionId:w.BeforeWhoWeAre,className:"flex justify-center 2xl:justify-center flex-col gap-4",children:[e.jsx(T,{pageNumber:M.number,className:"absolute w-20 z-30 top-0 max-2xl:ml-auto max-2xl:mt-4 max-2xl:right-0 2xl:mt-8 2xl:-ml-40",textAlign:a?"right":"left"}),e.jsxs("div",{className:"p-4 relative h-full flex justify-center max-2xl:py-12",children:[e.jsx(u,{index:0,onMouseEnter:o,onMouseLeave:r,src:N,alt:"notino",animate:s,className:`top-0 h-[45%]
					left-0 sm:left-[15%] md:left-[20%] lg:left-[15%] 2xl:left-[10%]
					w-[48%] sm:w-[33%] md:w-[28%] lg:w-[33%] 2xl:w-[33%]`}),e.jsx(u,{index:1,onMouseEnter:o,onMouseLeave:r,src:j,alt:"kresleni",animate:s,className:`top-0 h-[45%]
					right-0 sm:right-[15%] md:right-[20%] lg:right-[15%] 2xl:right-[10%]
					w-[48%] sm:w-[33%] md:w-[28%] lg:w-[33%] 2xl:w-[33%]`}),e.jsx(u,{index:2,onMouseEnter:o,onMouseLeave:r,src:b,alt:"livestreaming",animate:s,className:`bottom-0 h-[45%]
					left-0 sm:left-[15%] md:left-[20%] lg:left-[15%] 2xl:left-[10%]
					w-[48%] sm:w-[33%] md:w-[28%] lg:w-[33%] 2xl:w-[33%]`}),e.jsx(u,{index:3,onMouseEnter:o,onMouseLeave:r,src:I,alt:"richly",animate:s,className:`bottom-0 h-[45%]
					right-0 sm:right-[15%] md:right-[20%] lg:right-[15%] 2xl:right-[10%]
					w-[48%] sm:w-[33%] md:w-[28%] lg:w-[33%] 2xl:w-[33%]`}),e.jsx("div",{className:"relative z-20 flex justify-center items-center pointer-events-none",children:e.jsx("div",{className:"text-white flex justify-center items-center overflow-visible flex-col font-nimbus text-4xl sm:text-6xl lg:text-7xl font-black",children:v.map((n,l)=>e.jsx(x.div,{className:"overflow-hidden",animate:s.variant,variants:A,children:e.jsx(x.span,{className:"inline-block overflow-visible translate-y-full",variants:S(l),animate:s.variant,children:n})},`IntroLine-${l}`))})})]})]})}const _=m.memo(R);export{_ as default};
