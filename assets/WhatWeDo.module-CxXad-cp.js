import{r as i,j as n}from"./index-i_PpmdL0.js";import{H as r,N as s}from"./Navigation.module-BvUkgwlj.js";import{A as o,C as l}from"./AnimCfg-DBIgvjUv.js";import{u as c,L as x}from"./Lines-BY4mUgIR.js";import"./Helpers-B0zxVGTg.js";const u="_area400_1vx64_52",_="_area600_1vx64_58",m="_nimbus900_1vx64_64",T="_contentContainer_1vx64_77",A="_transitionContainer_1vx64_83",C="_linesText_1vx64_96",f="_lineText_1vx64_120",a={area400:u,area600:_,nimbus900:m,contentContainer:T,transitionContainer:A,linesText:C,lineText:f};function v({anim:e}){const t=["WEB & APP","PHOTO & VIDEO","CHATBOT","LIVESTREAM","AI & MACHINE LEARNING","CONTENT ADAPTATION","STAFF AUGMENTATION"];return n.jsxs(n.Fragment,{children:[n.jsx(x,{anim:e?e.linesText:null,lines:t,style:a}),n.jsx(l,{id:"before-ourtools",anim:o.general.circle(!0)})]})}function h(){const e=i.useRef(null),t=c(e,{once:!0});return n.jsxs("section",{id:"whatwedo",className:`${a.contentContainer} contentContainer`,ref:e,children:[n.jsx(r,{onlyActive:!0,anim:t?o.general.header(!0):null}),n.jsx(s,{onlyActive:!0,anim:t?o.general.navigation(!0):null}),n.jsx(v,{anim:t?o.whatWeDo.whatWeDoContent:null})]})}export{h as default};