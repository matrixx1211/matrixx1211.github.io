import{d as r,j as e,m as o,u as c,H as x,e as p,f as d,g,s as h,S as C,h as E,i as f}from"./index-BawjgINe.js";const u="data:image/svg+xml,%3csvg%20width='500'%20height='500'%20viewBox='0%200%20500%20500'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M250%20465C368.741%20465%20465%20368.741%20465%20250C465%20131.259%20368.741%2035%20250%2035C131.259%2035%2035%20131.259%2035%20250C35%20368.741%20131.259%20465%20250%20465Z'%20fill='white'/%3e%3cpath%20d='M210.679%20281.611C203.519%20290.202%20192.725%20295.93%20178.296%20295.93C149.659%20295.93%20135.341%20274.121%20135.341%20250.11C135.341%20226.099%20149.659%20204.291%20178.296%20204.291C206.934%20204.291%20197.902%20207.485%20204.731%20212.661V158.471C196.58%20156.598%20187.769%20155.607%20178.296%20155.607C114.193%20155.607%2078.0659%20201.427%2078.0659%20250.11C78.0659%20298.794%20114.193%20344.613%20178.296%20344.613C242.4%20344.613%20222.574%20337.013%20238.765%20324.787C223.896%20313.553%20216.516%20298.463%20210.679%20281.611Z'%20fill='black'/%3e%3cpath%20d='M321.703%20155.497C312.231%20155.497%20303.53%20156.488%20295.269%20158.361V212.551C301.988%20207.375%20310.799%20204.18%20321.703%20204.18C350.341%20204.18%20364.659%20225.989%20364.659%20250C364.659%20274.011%20350.341%20295.82%20321.703%20295.82C293.066%20295.82%20279.739%20275.443%20278.858%20252.423V155.497H221.583V252.423C222.795%20300.225%20258.811%20344.503%20321.814%20344.503C384.816%20344.503%20422.044%20298.683%20422.044%20250C422.044%20201.317%20385.917%20155.497%20321.814%20155.497H321.703Z'%20fill='black'/%3e%3c/svg%3e",a={top:{closed:{rotate:0,translateY:0},opened:{rotate:45,translateY:1.25}},center:{closed:{opacity:1},opened:{opacity:0}},bottom:{closed:{rotate:0,translateY:0},opened:{rotate:-45,translateY:-1.25}}};function v({size:t=24}){const s=r(),n={stroke:"#fff",strokeWidth:2,vectorEffect:"non-scaling-stroke",initial:"closed",animate:s.isMenuOpened?"opened":"closed"};return e.jsxs(o.svg,{viewBox:"0 0 4 4",overflow:"visible",width:t,height:t,onClick:s.toggleMenu,children:[e.jsx("title",{children:"Burger"}),e.jsx(o.line,{x1:"0",x2:"4",y1:"0.75",y2:"0.75",variants:a.top,...n}),e.jsx(o.line,{x1:"0",x2:"4",y1:"2",y2:"2",variants:a.center,...n}),e.jsx(o.line,{x1:"0",x2:"4",y1:"3.25",y2:"3.25",variants:a.bottom,...n})]})}const m={animate:{opacity:[0,1]},transition:{type:"spring",duration:x,delay:E+f}};function y(){return e.jsx("span",{className:"bg-transparent text-white text-xs overflow-visible",children:"CZ"})}function A(){const{isMobile:t,isTablet:s,isDesktop:i}=c(),n=t?p:s?d:g;return e.jsxs(o.header,{className:"font-area w-screen z-40 flex justify-between items-center opacity-0 box-border fixed top-0 px-2 py-2 lg:px-3 lg:py-3 2xl:px-4 2xl:py-1 bg-black",style:{height:n},...m,children:[e.jsx("img",{src:u,className:"h-full",alt:"logo",onClick:()=>h(null,C.Intro),onKeyDown:l=>l.preventDefault()}),i&&e.jsx(y,{}),(s||t)&&e.jsx(v,{})]})}export{A as default};
