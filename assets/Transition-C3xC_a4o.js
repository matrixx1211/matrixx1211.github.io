import{r as t,l as E,T as A,k as h,x as r,s as R,y as l,j as n,m as p,z as c,A as _,B as O}from"./index-BawjgINe.js";import{u as v}from"./hooks-DCEPydoI.js";const b=()=>({initial:"enter",variants:{enter:{y:["-100vh",0],transition:{type:"string",duration:O,delay:_}},leave:{y:[0,"100vh"],transition:{type:"string",duration:c,delay:l}}}});function S({sectionId:s,text:T,pageNumber:m}){const{ref:u,isInView:e}=v(!1),{startTransition:N,endTransition:I}=E(),[f,i]=t.useState("enter"),a=t.useRef(s.replace(A,"")).current,o=h();return t.useEffect(()=>(e&&N(),()=>{I()}),[e]),t.useEffect(()=>{if(a&&o.hash.includes(s)&&e){i("enter");const x=setTimeout(()=>i("leave"),r*1e3),d=setTimeout(()=>R(null,a,c*1e3),(r+l)*1e3);return()=>{clearTimeout(x),clearTimeout(d)}}},[a,o.hash,s,e]),n.jsx("section",{id:s,className:"w-screen h-dvh flex justify-center items-center bg-white mb-px overflow-hidden",ref:u,children:n.jsxs(p.div,{className:"flex gap-1 xl:gap-2 items-end overflow-hidden will-change-transform",animate:f,...e?b():{},children:[n.jsx("span",{className:"text-base/5 xl:text-3xl/7 inline-block font-area font-semibold",children:m}),n.jsx("span",{className:"text-4xl xl:text-6xl inline-block font-black font-nimbus",children:T})]})})}const w=t.memo(S);export{w as default};
