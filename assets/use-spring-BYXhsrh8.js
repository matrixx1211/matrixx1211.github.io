import{r as a}from"./index-DiEQyjsE.js";import{u as g,M as m,a as S,i as l,f as y,b as V,c as d,d as x}from"./motion-DoIRfBB4.js";function C(t){const r=g(()=>S(t)),{isStatic:o}=a.useContext(m);if(o){const[,s]=a.useState(t);a.useEffect(()=>r.on("change",s),[])}return r}function M(t,r={}){const{isStatic:o}=a.useContext(m),s=a.useRef(null),e=C(l(t)?t.get():t),i=a.useRef(e.get()),u=a.useRef(()=>{}),p=()=>{const n=s.current;n&&n.time===0&&n.sample(d.delta),c(),s.current=x({keyframes:[e.get(),i.current],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:u.current})},c=()=>{s.current&&s.current.stop()};return a.useInsertionEffect(()=>e.attach((n,f)=>o?f(n):(i.current=n,u.current=f,y.update(p),e.get()),c),[JSON.stringify(r)]),V(()=>{if(l(t))return t.on("change",n=>e.set(parseFloat(n)))},[e]),e}export{M as a,C as u};
