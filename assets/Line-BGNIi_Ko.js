import{r as o,j as r,m,i as u}from"./index-DdyM8_Ll.js";import{u as w}from"./hooks-ChI2fTtH.js";const n=.5,A=0,T=.1;function x({children:c,className:l="",textAlign:d="center",width:f="100%",index:I=0,plusDelay:E=0,plusDuration:t=0,shouldWrap:a=!1}){const{ref:N,isInView:e}=w(),[s,L]=o.useState(!0),i=A+I*T+E+u;return o.useEffect(()=>{if(e&&s){const _=setTimeout(()=>L(!1),(t+n+i)*1e3);return()=>clearTimeout(_)}},[e,i,t,s]),r.jsx(m.div,{className:`overflow-hidden ${l}`,ref:N,transition:{delay:t+i+n},children:r.jsx(m.span,{className:"inline-block drop-shadow-sm translate-y-full",style:{textAlign:d,width:f,overflow:e&&s&&a?"hidden":"visible",wordBreak:a?"break-word":"initial"},animate:e?{y:s&&e?[0,"-100%"]:["-100%"]}:{},transition:{duration:n+t,delay:i},children:c})})}const v=o.memo(x);export{T as L,v as a};
