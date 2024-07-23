"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[758],{5723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=n(4848),a=n(8453);const s={},i="Translation guide",r={id:"dev/translation-guide",title:"Translation guide",description:"If you want to make FoodCoopShop available in a new language, register on Github and create a new issue. We will then prepare everything (e.g. create empty translation files) and you can start with the translation.",source:"@site/docs/dev/translation-guide.md",sourceDirName:"dev",slug:"/dev/translation-guide",permalink:"/dev/translation-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/foodcoopshop/foodcoopshop.github.io/edit/main/docs/dev/translation-guide.md",tags:[],version:"current",lastUpdatedAt:172175967e4,frontMatter:{},sidebar:"mySidebar",previous:{title:"Docker Dev Environment",permalink:"/dev/docker-dev-environment"},next:{title:"Details",permalink:"/dorfladen-online/"}},l={},d=[{value:"1. Translate po files",id:"1-translate-po-files",level:2},{value:"2. Translate date and time formats",id:"2-translate-date-and-time-formats",level:2},{value:"3. Translate legal texts in template files",id:"3-translate-legal-texts-in-template-files",level:2},{value:"4. Translate some database strings",id:"4-translate-some-database-strings",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"translation-guide",children:"Translation guide"}),"\n",(0,o.jsxs)(t.p,{children:["If you want to make FoodCoopShop available in a new language, register on Github and ",(0,o.jsx)(t.a,{href:"https://github.com/foodcoopshop/foodcoopshop/issues/new",children:"create a new issue"}),". We will then prepare everything (e.g. create empty translation files) and you can start with the translation."]}),"\n",(0,o.jsx)(t.h2,{id:"1-translate-po-files",children:"1. Translate po files"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["4 po-files need to be translated: ",(0,o.jsx)(t.a,{href:"https://github.com/foodcoopshop/foodcoopshop/tree/main/resources/locales/en_US/default.po",children:"default.po"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/foodcoopshop/foodcoopshop/tree/main/plugins/Admin/resources/locales/en_US/admin.po",children:"admin.po"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/foodcoopshop/foodcoopshop/tree/main/plugins/Network/resources/locales/en_US/network.po",children:"network.po"})," and ",(0,o.jsx)(t.a,{href:"https://github.com/foodcoopshop/foodcoopshop/tree/main/resources/locales/de_DE/cake.po",children:"cake.po"})," (just the translated parts for cake.po)"]}),"\n",(0,o.jsx)(t.li,{children:'msgids starting with "docs_route_" or "route_" need to contain a string that is valid in urls (please avoid special characters)'}),"\n",(0,o.jsx)(t.li,{children:'msgids ending with "_html" can contain some html (eg. b-tag for bold text)'}),"\n",(0,o.jsx)(t.li,{children:"if there are variables like {0} or {1} in the translation source, they can also be used in the translation"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"2-translate-date-and-time-formats",children:"2. Translate date and time formats"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/foodcoopshop/foodcoopshop/tree/main/config/Locale/en_US/date.php",children:"'DateFormat' in date.php"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"3-translate-legal-texts-in-template-files",children:"3. Translate legal texts in template files"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/foodcoopshop/foodcoopshop/tree/main/templates/element/legal/en_US",children:"English files"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"4-translate-some-database-strings",children:"4. Translate some database strings"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/foodcoopshop/foodcoopshop/tree/main/config/Seeds/locale/en_US/InitDataSeed.php",children:"InitDataSeed.php"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(6540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);