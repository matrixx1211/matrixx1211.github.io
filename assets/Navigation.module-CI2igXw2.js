import{j as a,m as o,l as m,b as g}from"./index-BqSG1-yq.js";const f="/assets/LogoWithText-JPILyVEX.svg",C="_area400_jwv5m_49",L="_area600_jwv5m_55",w="_nimbus900_jwv5m_61",d="_contentContainer_jwv5m_74",h="_transitionContainer_jwv5m_80",j="_headerContainer_jwv5m_86",u="_logo_jwv5m_98",k="_languageSelector_jwv5m_102",c={area400:C,area600:L,nimbus900:w,contentContainer:d,transitionContainer:h,headerContainer:j,logo:u,languageSelector:k};function y({onlyActive:t,anim:e}){return a.jsxs(o.header,{className:c.headerContainer,...e?e.headerContainer:{},children:[a.jsx("img",{src:t?m:f,className:c.logo,alt:"logo"}),a.jsx("span",{style:{opacity:t?0:1},className:c.languageSelector,children:"CZ"})]})}const x="_area400_vfwof_49",N="_area600_vfwof_55",p="_nimbus900_vfwof_61",I="_contentContainer_vfwof_74",b="_transitionContainer_vfwof_80",O="_navigationContainer_vfwof_86",T="_navItem_vfwof_103",$="_navLink_vfwof_110",P="_navLinkLine_vfwof_119",W="_navLinkPage_vfwof_128",i={area400:x,area600:N,nimbus900:p,contentContainer:I,transitionContainer:b,navigationContainer:O,navItem:T,navLink:$,navLinkLine:P,navLinkPage:W},l=[{id:"#intro",title:"INTRO"},{id:"#whoweare",title:"WHO WE ARE"},{id:"#whatwedo",title:"WHAT WE DO"},{id:"#ourtools",title:"OUR TOOLS"},{id:"#contact",title:"CONTACT"}];function E({id:t,title:e,pos:r,anim:n,onlyActive:s,location:_}){const v=_.hash?_.hash===t:l[0].id;return a.jsxs(o.a,{href:t,className:i.navItem,...n?n.navItem(s,v):{},children:[a.jsxs(o.span,{className:i.navLink,children:[e,a.jsx(o.span,{className:i.navLinkLine,...n?n.navLinkLine(v):{}})]}),a.jsx(o.span,{className:i.navLinkPage,...n?n.navLinkPage:{},children:"0"+r})]})}function H({onlyActive:t,anim:e}){const r=g();return a.jsx("nav",{className:i.navigationContainer,children:l.map((n,s)=>a.jsx(E,{id:n.id,title:n.title,pos:s+1,anim:e,onlyActive:t,location:r},"nav"+s+1))})}export{y as H,H as N};
