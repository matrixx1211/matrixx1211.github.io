import{r as a,o as d,j as o,A as e}from"./index-DiEQyjsE.js";import{m as i}from"./motion-DoIRfBB4.js";const g="/assets/Onboarding-D8EsHhA0.png",m="_boardingContainer_6reni_1",l="_loader_6reni_15",r={boardingContainer:m,loader:l};function b(){const[n,t]=a.useState("loading");return a.useEffect(()=>{const s=setTimeout(()=>{n==="loading"&&t("hide")},d*.85*1e3);return()=>{clearTimeout(s)}},[n]),o.jsx(i.div,{id:"Onboarding",className:r.boardingContainer,animate:n,...e.general.onboarding.div,children:o.jsx(i.img,{src:g,className:r.loader,animate:n,...e.general.onboarding.image})})}export{b as default};