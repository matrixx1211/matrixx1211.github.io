import{j as a,m as d,s as C,e as h,f as p,g as L,r as g}from"./index-4BTvO7ms.js";const m="_area400_autds_60",D="_area600_autds_66",b="_nimbus900_autds_72",I="_contentContainer_autds_91",N="_transitionContainer_autds_97",j="_headerContainer_autds_103",w="_logo_autds_117",T="_languageSelector_autds_121",v={area400:m,area600:D,nimbus900:b,contentContainer:I,transitionContainer:N,headerContainer:j,logo:w,languageSelector:T},W="/assets/LogoWithText-Cbpc9m43.svg";function z({dark:t=!1,onlyActive:s,anim:e}){return a.jsxs(d.header,{className:v.headerContainer,...e?e.headerContainer:{},onClick:()=>C(null,"DesktopIntro"),children:[a.jsx("img",{src:s?t?h:p:W,className:v.logo,alt:"logo"}),a.jsx("span",{style:{opacity:s?0:1},className:v.languageSelector,children:"CZ"})]})}const E="_area400_w2xn8_60",O="_area600_w2xn8_66",$="_nimbus900_w2xn8_72",M="_contentContainer_w2xn8_91",P="_transitionContainer_w2xn8_97",A="_navigationContainer_w2xn8_103",R="_navigationContainerDark_w2xn8_120",S="_navItem_w2xn8_137",y="_navLink_w2xn8_146",H="_navLinkLine_w2xn8_156",U="_navLinkPage_w2xn8_166",r={area400:E,area600:O,nimbus900:$,contentContainer:M,transitionContainer:P,navigationContainer:A,navigationContainerDark:R,navItem:S,navLink:y,navLinkLine:H,navLinkPage:U},u=[{id:"#DesktopIntro",title:"INTRO",pos:1},{id:"#DesktopWhoWeAre",title:"WHO WE ARE",pos:2},{id:"#DesktopWhatWeDo",title:"WHAT WE DO",pos:3},{id:"#DesktopOurTools",title:"OUR TOOLS",pos:4},{id:"#DesktopContact",title:"CONTACT",pos:5}];function Z({id:t,title:s,pos:e,anim:o,onlyActive:c,location:l,isActive:i,animState:n,onMouseEnter:x,onMouseLeave:k}){const f=Math.abs(u.findIndex(_=>_.id===t)-u.findIndex(_=>_.id===(l.hash??u[0].id)))*1e3;return a.jsxs(d.a,{href:t,onClick:_=>C(_,t,f),className:r.navItem,animate:n.variant,...o?o.navItem(c,i,e,n.focus):{},onMouseEnter:()=>{n.disabled||x({variant:"focused",focus:e,disabled:!1})},onMouseLeave:()=>{n.disabled||k({variant:"default",focus:-1,disabled:!1})},children:[a.jsxs(d.span,{className:r.navLink,children:[s,a.jsx(d.span,{className:r.navLinkLine,animate:n.variant,...o?o.navLinkLine(i):{}})]}),a.jsx(d.span,{className:r.navLinkPage,...o?o.navLinkPage:{},children:"0"+e})]})}function B({dark:t=!1,onlyActive:s,anim:e,activePage:o}){const c=L();c.hash||(c.hash=u[0].id);const[l,i]=g.useState({variant:"initial",focus:-1,disabled:!0});return g.useEffect(()=>{const n=setTimeout(()=>{l.disabled&&i({variant:"initial",focus:-1,disabled:!1})},3500);return()=>clearTimeout(n)},[l]),a.jsx("nav",{className:t?r.navigationContainerDark:r.navigationContainer,children:u.map(n=>a.jsx(Z,{dark:t,id:n.id,title:n.title,pos:n.pos,anim:e,onlyActive:s,location:c,isActive:o===n.pos,animState:l,onMouseEnter:i,onMouseLeave:i},n.pos))})}export{z as D,B as N};
