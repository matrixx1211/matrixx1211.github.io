import{k as _,d as O,l as L,S as A,r as c,P as N,j as u,m as x,N as H,n as E,i as j,u as S,e as k,f as G,g as R}from"./index-D8FNQ89s.js";import{u as C}from"./hooks-GJlQlbkL.js";import{t as B,s as b}from"./utils-CEb115jY.js";const g=(t,a,s,n,i)=>({variants:{initial:{x:[180,0],opacity:t&&!a?0:1},default:{x:[0],opacity:t&&!a?0:1,transition:{duration:.5,delay:.5}},focused:{x:[0],opacity:s===n?1:t&&!a?0:1,transition:{duration:0,delay:0}}},transition:{type:"spring",duration:H,delay:i?E+s*.1+j:E+s*.1}}),M=(t,a)=>({variants:{initial:{width:["0%","100%"],opacity:t?[1]:[0],transition:{opacity:{duration:0}}},default:{opacity:t?[1]:[0]},focused:{}},transition:{type:"spring",duration:H,delay:a?E+.8+j:E}});function P({id:t,title:a,position:s,animate:n,onMouseEnter:i,onMouseLeave:m,isInView:l,isDesktop:d}){const f=_(),{toggleMenu:r,isMenuOpened:h}=O(),{startTransition:T,isMoving:e}=L(),o=f.hash.includes(t),v=!f.hash.includes(`#${A.Intro}`)&&d,[I,w]=c.useState(!1),y=Math.abs(N.findIndex(p=>p.id===t)-N.findIndex(p=>(f.hash??N[0].id).includes(p.id)))*1e3,D=p=>{T(y),r(),b(p,t,y)};return c.useEffect(()=>{h&&!I&&w(!0)},[h,I]),u.jsxs(x.a,{href:`#${t}`,onClick:D,className:"flex justify-end text-end no-underline text-white visible w-full gap-1",animate:n.variant,onMouseEnter:()=>i(s),onMouseLeave:m,...l&&d?g(v,o,s,n.focus,!0):l&&I?g(v,o,s,n.focus,!1):{},children:[u.jsxs(x.span,{className:"text-sm inline-block pl-4 relative visible font-area font-semibold pt-1",children:[B(a),u.jsx(x.span,{className:"absolute left-0 bg-transparent h-0.5 top-1/2",style:{backgroundColor:e?"transparent":"var(--color-red-600)"},animate:n.variant,...l&&d?M(o,!0):l&&I?M(o,!1):{}})]}),u.jsx(x.span,{className:"text-[10px]",children:`0${s}`})]})}const V={variant:"initial",focus:-1,disabled:!0},$={hidden:{x:"100vw",opacity:0},shown:{x:"0vw",opacity:1},desktop:{opacity:1,x:"0vw",transition:{duration:0}}};function z(){const[t,a]=c.useState(V),{isMobile:s,isTablet:n,isDesktop:i}=S(),{ref:m,isInView:l}=C(),d=s?k:n?G:R,{isMenuOpened:f}=O(),r=_();c.useEffect(()=>{r.hash&&b(null,r.hash,0)},[r]),c.useEffect(()=>{r.hash.includes(A.OurToolsDetail2)&&i&&b(null,A.BeforeContact,0)},[r,i]),c.useEffect(()=>{const e=setTimeout(()=>{t.disabled&&a(o=>({...o,disabled:!1}))},3500);return()=>clearTimeout(e)},[t]);const h=e=>{t.disabled||a(o=>({...o,variant:"focused",focus:e}))},T=()=>{t.disabled||a(e=>({...e,variant:"default",focus:-1}))};return u.jsx(x.nav,{className:`font-area font-semibold flex flex-col items-end gap-1 text-white fixed z-40 
			pt-2 w-screen h-dvh pr-2 bg-black opacity-0
			lg:pt-3 lg:pr-3
			2xl:pt-4 2xl:w-auto 2xl:h-auto 2xl:pr-4 2xl:right-0 2xl:bg-transparent 2xl:opacity-100 2xl:mix-blend-difference`,style:{top:d},ref:m,variants:$,animate:i?"desktop":f?"shown":"hidden",children:N.map(e=>u.jsx(P,{id:e.id,title:e.title,position:e.position,animate:t,onMouseEnter:h,onMouseLeave:T,isInView:l,isDesktop:i},e.number))})}export{z as default};
