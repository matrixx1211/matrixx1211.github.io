import{V as i,r as n,X as h,Y as x,Z as C,_ as b,$ as E,a0 as m,a1 as R}from"./index-D4vIppqs.js";function A(t){const e=i(()=>x(t)),{isStatic:u}=n.useContext(h);if(u){const[,a]=n.useState(t);n.useEffect(()=>e.on("change",a),[])}return e}function I(t,e={}){const{isStatic:u}=n.useContext(h),a=n.useRef(null),s=i(()=>m(t)?t.get():t),c=i(()=>typeof s=="string"?s.replace(/[\d.-]/g,""):void 0),r=A(s),f=n.useRef(s),p=n.useRef(C),y=()=>{l(),a.current=R({keyframes:[d(r.get()),d(f.current)],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:p.current})},l=()=>{a.current&&a.current.stop()};return n.useInsertionEffect(()=>r.attach((o,g)=>u?g(o):(f.current=o,p.current=S=>g(V(S,c)),b.postRender(y),r.get()),l),[JSON.stringify(e)]),E(()=>{if(m(t))return t.on("change",o=>r.set(V(o,c)))},[r,c]),r}function V(t,e){return e?t+e:t}function d(t){return typeof t=="number"?t:parseFloat(t)}var M=(t=>(t.up="up",t.down="down",t.left="left",t.right="right",t))(M||{}),v=(t=>(t.top="top",t.bottom="bottom",t.left="left",t.right="right",t))(v||{});export{M as D,v as P,I as a,A as u};
