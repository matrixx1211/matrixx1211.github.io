import{r,j as i}from"./index-DZIjgnO9.js";import{u as N}from"./use-in-view-D3hnPnw1.js";import{m as d}from"./motion-BF3MoFrH.js";function D({anim:s,linesWithDetail:x,style:o,className:h="linesText",customLines:f}){const[e,u]=r.useState({anim:"-",id:-1}),[l,F]=r.useState(!0);let m,c;const E=t=>{!l&&e.id!==t&&(clearTimeout(m),clearTimeout(c),m=setTimeout(()=>{u({anim:"focus",id:t})},250))},v=()=>{!l&&e.id!==-1&&(clearTimeout(m),clearTimeout(c),c=setTimeout(()=>{u({anim:"default",id:-1}),p===1&&I(.35)},250))},T=r.useRef(null),j=N(T,{once:!0}),[p,I]=r.useState(1);r.useEffect(()=>{if(j){l&&e.anim!=="initial"&&u({anim:"initial",id:-1});const t=setTimeout(()=>{l&&(u({anim:"default",id:-1}),F(!1))},2500);return()=>clearTimeout(t)}},[l,j]);function g({lineWithDetail:t,index:n,customLine:a}){return i.jsxs(d.div,{animate:e.id===n||e.anim==="initial"?e.anim:"default",...s?s.lineContainer:{},className:o.lineContainer,children:[i.jsxs(d.span,{animate:e.id===n||e.anim==="initial"?e.anim:e.id!==-1?"unfocus":"default",...s?s.line(n):{},className:o.lineTitle,onMouseEnter:()=>E(n),onMouseLeave:()=>v(),style:{opacity:p},children:[a?i.jsx(i.Fragment,{children:a.childBefore}):i.jsx(i.Fragment,{}),t.title,a?i.jsx(i.Fragment,{children:a.childAfter}):i.jsx(i.Fragment,{})]}),i.jsx(d.p,{animate:e.id===n||e.anim==="initial"?e.anim:"default",...s?s.detail:{},className:o.lineDetail,children:t.detail})]})}return i.jsx("div",{className:o[h],ref:T,children:x.map((t,n)=>{let a;return f&&(a=f.find(L=>L.index===n)),i.jsx(g,{lineWithDetail:t,index:n,customLine:a},n)})})}export{D as L};
