import{u as d,r as o,j as e}from"./index-DzOopfs5.js";import{s as x,A as C}from"./AnimCfg-Dx0wImge.js";import{u as g}from"./use-in-view-BC19WDmO.js";import{m as b}from"./motion-D2yoArFy.js";const N="_area400_17smf_54",h="_area600_17smf_60",j="_nimbus900_17smf_66",I="_contentContainer_17smf_79",E="_transitionContainer_17smf_85",w="_pageNumber_17smf_96",A="_pageTitle_17smf_104",n={area400:N,area600:h,nimbus900:j,contentContainer:I,transitionContainer:E,pageNumber:w,pageTitle:A};function V({toId:m,pageTitle:i,pageNumber:c}){const t="#"+i.toLowerCase().split(" ").join(""),s=d(),u=C.general.transition,[l,a]=o.useState("enter"),r=o.useRef(null),_=g(r);return o.useEffect(()=>{if(t&&s&&s.hash===t.replace("#","#before-")){a("enter");const f=setTimeout(()=>{a("leave")},1500),p=setTimeout(()=>{x(null,t,1e3)},2e3),T=setTimeout(()=>{a("enter")},3e3);return()=>{clearTimeout(f),clearTimeout(p),clearTimeout(T)}}},[t,s]),e.jsx("section",{id:m,className:`${n.transitionContainer} transitionContainer`,ref:r,children:e.jsxs(b.div,{className:n.transitionText,..._?u.transitionText(l):{},children:[e.jsx("span",{className:n.pageNumber,children:c}),e.jsxs("span",{className:n.pageTitle,children:[" ",i]})]})})}export{V as default};