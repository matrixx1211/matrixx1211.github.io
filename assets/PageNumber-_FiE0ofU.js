import{r,F as n,G as s,i as a,j as i,m}from"./index-qDtQ62_f.js";import{u}from"./hooks-C3dusNMo.js";function N({pageNumber:c,className:d="",textAlign:o="left"}){const{ref:l,isInView:e}=u(),[t,f]=r.useState(!0);return r.useEffect(()=>{t&&e&&setTimeout(()=>f(!1),(n+s+a)*1e3)},[t,e]),i.jsx("div",{className:`z-10 ${d}`,dir:o==="left"?"rtl":"ltr",ref:l,children:i.jsx(m.div,{className:"w-0 border-b text-white border-white font-area font-semibold text-base",animate:{width:t&&e?[0,"100%"]:"100%"},transition:{duration:n,delay:s+a},style:{textAlign:o},children:i.jsx(m.span,{className:"opacity-0",animate:{opacity:t&&e?[0,1]:1},transition:{duration:0,delay:s+a},children:c})})})}const p=r.memo(N);export{p as P};
