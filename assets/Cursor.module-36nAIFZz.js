import{r,j as s}from"./index-BzgU2gYV.js";import{u as f,a as v}from"./use-spring-D-u3Ibu3.js";import{m as o}from"./motion-B4hoxqpt.js";const L="_cursor_e9kni_1",j="_top_e9kni_9",b="_bottom_e9kni_10",N="_left_e9kni_11",S="_right_e9kni_12",n={cursor:L,top:j,bottom:b,left:N,right:S};function z(){const[p,a]=r.useState(!1),[c,e]=r.useState(!1),m=24,i={x:f(-20),y:f(-20)},u={damping:20,stiffness:500,mass:.1},d={x:v(i.x,u),y:v(i.y,u)},l=E=>{c||e(!0);const{clientX:g,clientY:h}=E;i.x.set(g-m/2),i.y.set(h-m/2)};r.useEffect(()=>(window.addEventListener("mousemove",l),window.addEventListener("mousedown",()=>a(!0)),window.addEventListener("mouseup",()=>a(!1)),window.addEventListener("mouseover",()=>e(!0)),window.addEventListener("mouseout",()=>e(!1)),()=>{window.removeEventListener("mousemove",l),window.removeEventListener("mousedown",()=>a(!0)),window.removeEventListener("mouseup",()=>a(!1)),window.removeEventListener("mouseenter",()=>e(!0)),window.removeEventListener("mouseleave",()=>e(!1))}),[]);const w={default:{scale:1.25},clicked:{scale:1}},x={default:{x:0,y:0},clicked:{x:0,y:2}},y={default:{x:0,y:0},clicked:{x:-2,y:0}},_={default:{x:0,y:0},clicked:{x:0,y:-2}},k={default:{x:0,y:0},clicked:{x:2,y:0}},t=p?"clicked":"default";return s.jsxs(o.div,{className:n.cursor,style:{top:d.y,left:d.x,opacity:c?1:0},transition:{type:"spring",stiffness:500,damping:28},variants:w,animate:t,children:[s.jsx(o.span,{className:n.top,variants:x,animate:t}),s.jsx(o.span,{className:n.right,variants:y,animate:t}),s.jsx(o.span,{className:n.bottom,variants:_,animate:t}),s.jsx(o.span,{className:n.left,variants:k,animate:t})]})}export{z as default};
