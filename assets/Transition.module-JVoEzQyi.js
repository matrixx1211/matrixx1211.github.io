import{u as g,r as s,s as x,j as t,A as C}from"./index-DiEQyjsE.js";import{u as b}from"./use-in-view-BdGPnx43.js";import{m as h}from"./motion-DoIRfBB4.js";const N="_area400_12ejk_60",k="_area600_12ejk_66",I="_nimbus900_12ejk_72",w="_contentContainer_12ejk_92",E="_transitionContainer_12ejk_98",A="_pageNumber_12ejk_111",S="_pageTitle_12ejk_126",n={area400:N,area600:k,nimbus900:I,contentContainer:w,transitionContainer:E,pageNumber:A,pageTitle:S};function W({toId:c,pageTitle:m,pageNumber:u,nextSectionId:l}){const e="#"+l,a=g(),_=C.general.transition,[p,i]=s.useState("enter"),o=s.useRef(null),d=b(o);return s.useEffect(()=>{const r=window.innerWidth<1536;if(e&&a&&a.hash===e.replace("#","#Before-")){i("enter");const T=setTimeout(()=>{i("leave")},1500),j=setTimeout(()=>{x(null,e,r?1200:1e3)},r?1600:2e3),f=setTimeout(()=>{i("enter")},3e3);return()=>{clearTimeout(T),clearTimeout(j),clearTimeout(f)}}},[e,a]),t.jsx("section",{id:c,className:`${n.transitionContainer} transitionContainer`,ref:o,children:t.jsxs(h.div,{className:n.transitionText,animate:p,...d?_.transitionText:{},children:[t.jsx("span",{className:n.pageNumber,children:u}),t.jsxs("span",{className:n.pageTitle,children:[" ",m]})]})})}export{W as default};
