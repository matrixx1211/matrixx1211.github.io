import{r as g}from"./index-CKM1m-Dz.js";function p(e,r,s){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const E={some:0,all:1};function h(e,r,{root:s,margin:c,amount:n="some"}={}){const f=p(e),o=new WeakMap,u=a=>{a.forEach(t=>{const l=o.get(t.target);if(t.isIntersecting!==!!l)if(t.isIntersecting){const d=r(t);typeof d=="function"?o.set(t.target,d):i.unobserve(t.target)}else l&&(l(t),o.delete(t.target))})},i=new IntersectionObserver(u,{root:s,rootMargin:c,threshold:typeof n=="number"?n:E[n]});return f.forEach(a=>i.observe(a)),()=>i.disconnect()}function w(e,{root:r,margin:s,amount:c,once:n=!1}={}){const[f,o]=g.useState(!1);return g.useEffect(()=>{if(!e.current||n&&f)return;const u=()=>(o(!0),n?void 0:()=>o(!1)),i={root:r&&r.current||void 0,margin:s,amount:c};return h(e.current,u,i)},[r,e,s,n,c]),f}export{w as u};
