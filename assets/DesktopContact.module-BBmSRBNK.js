import{r,j as n,A as o}from"./index-DiEQyjsE.js";import{D as c,N as l}from"./DesktopNavigation.module-B5TqZqRz.js";import{L as i}from"./Lines-DIiZDfZ9.js";import{u as m}from"./use-in-view-BdGPnx43.js";import"./LogoDark-fvQe0hKf.js";import"./motion-DoIRfBB4.js";const u="_area400_dur8m_60",_="_area600_dur8m_66",d="_nimbus900_dur8m_72",p="_contentContainer_dur8m_92",x="_transitionContainer_dur8m_98",C="_linesContainer_dur8m_111",f="_email_dur8m_116",A="_linesText_dur8m_119",j="_lineText_dur8m_130",T="_spacer_dur8m_138",t={area400:u,area600:_,nimbus900:d,contentContainer:p,transitionContainer:x,linesContainer:C,email:f,linesText:A,lineText:j,spacer:T};function L({anim:e}){const s=["WANT TO TAKE","ADVANTAGE OF","OUR SKILLS","AND TOOLS?"],a=["JUST SEND US","AN "];return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:t.linesContainer,children:[n.jsx(i,{lines:s,anim:e?e.topLines:null,style:t}),n.jsx(i,{lines:a,anim:e?e.bottomLines:null,style:t,customLines:[{index:1,childAfter:n.jsx("a",{className:t.email,href:"mailto:info@contentbakery.cz",children:"E-MAIL."})}]})]}),n.jsx("div",{className:t.spacer})]})}function b(){const e=r.useRef(null),s=m(e,{once:!0});return n.jsxs("section",{id:"DesktopContact",className:`${t.contentContainer} contentContainer`,ref:e,children:[n.jsx(c,{onlyActive:!0,anim:s?o.desktop.general.header(!0):null}),n.jsx(l,{onlyActive:!0,anim:s?o.desktop.general.navigation(!0):null,activePage:5}),n.jsx(L,{anim:s?o.desktop.contact.contactContent:null})]})}export{b as default};
