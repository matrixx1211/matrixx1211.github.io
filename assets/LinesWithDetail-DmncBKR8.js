import{r as c,j as e}from"./index-DzOopfs5.js";import{m}from"./motion-D2yoArFy.js";function v({anim:a,linesWithDetail:f,style:l,className:x="linesText",customLines:u}){const[i,r]=c.useState({anim:"initial",id:-1}),[o,j]=c.useState(!0);let d;const T=t=>{o||(clearTimeout(d),r({anim:"focus",id:t}))},h=()=>{o||(d=setTimeout(()=>{console.log(i),i.id!==-1&&r({anim:"default",id:-1})},500))};c.useEffect(()=>{const t=setTimeout(()=>{o&&(r({anim:"default",id:-1}),j(!1))},1500);return()=>clearTimeout(t)},[i]);function F({lineWithDetail:t,index:n,customLine:s}){return e.jsxs("div",{className:l.lineContainer,children:[e.jsxs(m.span,{animate:i.id===n?i.anim:i.id!==-1?"unfocus":"default",...a?a.line(n):{},className:l.lineTitle,onMouseEnter:()=>T(n),onMouseLeave:()=>h(),children:[s?e.jsx(e.Fragment,{children:s.childBefore}):e.jsx(e.Fragment,{}),t.title,s?e.jsx(e.Fragment,{children:s.childAfter}):e.jsx(e.Fragment,{})]}),e.jsx(m.p,{animate:i.id===n?i.anim:"default",...a?a.detail:{},className:l.lineDetail,children:t.detail})]})}return e.jsx("div",{className:l[x],children:f.map((t,n)=>{let s;return u&&(s=u.find(p=>p.index===n)),e.jsx(F,{lineWithDetail:t,index:n,customLine:s},n)})})}export{v as L};
