import{r as Y,u as d,a as u,j as r,m as x}from"./index-i_PpmdL0.js";import{s as j}from"./Helpers-B0zxVGTg.js";const I="_area400_qds7w_52",P="_area600_qds7w_58",S="_nimbus900_qds7w_64",z="_contentContainer_qds7w_77",T="_transitionContainer_qds7w_83",W="_circlesContainer_qds7w_89",A="_centerContainer_qds7w_98",O="_circle_qds7w_89",R="_iconContainer_qds7w_111",k="_icon_qds7w_111",y={area400:I,area600:P,nimbus900:S,contentContainer:z,transitionContainer:T,circlesContainer:W,centerContainer:A,circle:O,iconContainer:R,icon:k};function B(){const[e,t]=Y.useState({x:0,y:0,elementX:0,elementY:0,elementPositionX:0,elementPositionY:0}),i=Y.useRef(null);return Y.useLayoutEffect(()=>{const c=n=>{var g;let o={x:n.pageX,y:n.pageY};if(((g=i.current)==null?void 0:g.nodeType)===Node.ELEMENT_NODE){const{left:l,top:f}=i.current.getBoundingClientRect(),w=l+window.scrollX,C=f+window.scrollY,_=n.pageX-w,E=n.pageY-C;o.elementX=_,o.elementY=E,o.elementPositionX=w,o.elementPositionY=C}t(l=>({...l,...o}))};return document.addEventListener("mousemove",c),()=>{document.removeEventListener("mousemove",c)}},[]),[e,i]}function J({id:e,anim:t}){const[i,c]=B(),n={x1:d(0),y1:d(0),x2:d(0),y2:d(0),x3:d(0),y3:d(0)},o={damping:20,stiffness:500,mass:.1},g={damping:20,stiffness:150,mass:.1},l={damping:20,stiffness:300,mass:.1},f={x1:u(n.x1,o),y1:u(n.y1,o),x2:u(n.x2,g),y2:u(n.y2,g),x3:u(n.x3,l),y3:u(n.y3,l)},w=()=>{i.elementX<=44*2*2&&i.elementX>=-44*2&&i.elementY<=44*2*2&&i.elementY>=-44*2&&(n.x1.set(i.elementX-44),n.y1.set(i.elementY-44),n.x2.set(i.elementX-44),n.y2.set(i.elementY-44),n.x3.set(i.elementX-44),n.y3.set(i.elementY-44))},C=()=>{n.x1.set(0),n.y1.set(0),n.x2.set(0),n.y2.set(0),n.x3.set(0),n.y3.set(0)};return r.jsx(x.div,{className:y.circlesContainer,onMouseMove:w,onMouseLeave:C,...t?t.circleContainer:{},children:r.jsxs("a",{onClick:_=>{j(_,e)},href:"#"+e,className:y.centerContainer,ref:c,children:[r.jsx(x.div,{className:y.circle,...t?t.circle1(f):{}}),r.jsx(x.div,{className:y.circle,...t?t.circle2(f):{}}),r.jsx(x.div,{className:y.iconContainer,...t?t.iconContainer(f):{},children:r.jsx("svg",{className:y.icon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25",children:r.jsx(x.path,{fill:"#ffffff",d:"M12.5 18 2 7.707 2.707 7l9.793 9.586L22.293 7l.707.707L12.5 18z",...t?t.icon:{}})})})]})})}const q=new URLSearchParams(window.location.search),m=parseFloat(q.get("delay")??"0"),p=parseFloat(q.get("duration")??"1"),s=.85*p,v=.2+m,D=.3*p,F=.8+m,H=.75*p,U=.2+m,L=.5*p,M=.8+m,b=.5*p,N=.8+m,X=.5*p,h=1+m,a=1.2,K={general:{header:e=>({headerContainer:{animate:{opacity:[0,1]},transition:{type:"spring",duration:H,delay:U+(e?a:0)}}}),navigation:e=>({navItem:(t,i,c)=>({animate:{x:[180,0],opacity:t&&!i?0:1},whileHover:{opacity:1,transition:{duration:0}},transition:{type:"spring",duration:L,delay:M+c*.1+(e?a:0)}}),navLinkLine:t=>({style:{opacity:t?1:0},animate:{width:["0%","100%"]},transition:{type:"spring",duration:L,delay:M+.8+(e?a:0)}}),navLinkPage:{}}),circle:e=>({circleContainer:{animate:{y:[15,0,-15]},whileHover:{y:[null]},transition:{type:"spring",repeat:1/0,repeatType:"mirror",stiffness:200,damping:50,mass:.75,delay:h+(e?a:0)}},circle1:t=>({animate:{x:[-10,0],y:[-10,0],opacity:[0,1]},transition:{type:"string",duration:X,delay:h+(e?a:0)},style:{x:t.x1,y:t.y1}}),circle2:t=>({animate:{x:[10,0],y:[10,0],opacity:[0,1]},transition:{type:"string",duration:X,delay:h+(e?a:0)},style:{x:t.x2,y:t.y2}}),iconContainer:t=>({transition:{type:"string",duration:X,delay:h+(e?a:0)},style:{x:t.x3,y:t.y3}}),icon:{variants:{hidden:{y:-20,scale:.5},visible:{y:0,scale:1.5}},initial:"hidden",animate:"visible",transition:{type:"string",duration:X,delay:h+(e?a:0)}}})},intro:{introContent:{lines:{introText:e=>({animate:{zIndex:e?0:10},transition:{type:"string",duration:s}}),line:e=>({variants:{initial:{y:[100,0],transition:{type:"spring",duration:s,delay:v+e*.1}},default:{color:"#ffffffff",textShadow:"0 0 0 white, 0 0 0 white, 0 0 0 white, 0 0 0 white",transition:{type:"spring",duration:s}},focus:{color:"#000000ff",textShadow:"0 0 2px white, 0 0 2px white, 0 0 2px white, 0 0 2px white",overflow:"visible",transition:{type:"spring",duration:s}}}})},focusableImage:{focusableImage:()=>{const e=Math.random()*.5+.1;return{variants:{initial:{opacity:[0,.5],filter:"blur(2px)",transition:{duration:D,delay:F+e}},default:{opacity:.5,scale:1,filter:"blur(2px)",transition:{type:"string",duration:D}},focus:{opacity:1,scale:1.1,filter:"blur(0)",transition:{type:"string",duration:D}}}}}},pageNumber:{pageIndicator:{animate:{x:[-60,0]},transition:{type:"spring",duration:b,delay:N}},pageNumber:{animate:{x:[-60,0],scale:[.2,1]},transition:{type:"spring",duration:b,delay:N}}}}},whoWeAre:{whoWeAreContent:{bigLines:{line:e=>({animate:{y:[55,0]},transition:{type:"spring",duration:s,delay:v+e*.1+a}})},pageNumber:{pageIndicator:{animate:{width:["0%","100%"]},transition:{type:"spring",duration:b+.5,delay:N+a}},pageNumber:{animate:{scale:[0,1]},transition:{type:"spring",duration:b+.5,delay:N+a}}},smallLines:{line:e=>({animate:{y:[25,0]},transition:{type:"spring",duration:s,delay:v+e*.1+a}})}}},whatWeDo:{whatWeDoContent:{linesText:{line:e=>({animate:{y:[70,0]},transition:{type:"spring",duration:s,delay:v+e*.1+a}})}}},ourTools:{},contact:{}};export{K as A,J as C};
