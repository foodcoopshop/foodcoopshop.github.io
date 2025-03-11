"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7289],{171:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"dev/configuration","title":"Configuration","description":"Most of the settings are self-explaining and can be made in the admin area as a superadmin.","source":"@site/docs/dev/configuration.md","sourceDirName":"dev","slug":"/dev/configuration","permalink":"/dev/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/foodcoopshop/foodcoopshop.github.io/edit/main/docs/dev/configuration.md","tags":[],"version":"current","lastUpdatedAt":1739525733000,"frontMatter":{},"sidebar":"mySidebar","previous":{"title":"Cronjobs","permalink":"/dev/cronjobs"},"next":{"title":"Docker Dev Environment","permalink":"/dev/docker-dev-environment"}}');var t=d(4848),i=d(8453);const s={},a="Configuration",c={},o=[{value:"Change weekly pickup day",id:"change-weekly-pickup-day",level:2},{value:"Change the day where the order lists are sent",id:"change-the-day-where-the-order-lists-are-sent",level:2},{value:"Officially supported delivery cycles",id:"officially-supported-delivery-cycles",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Most of the settings are self-explaining and can be made in the admin area as a superadmin."})}),"\n",(0,t.jsxs)(n.p,{children:["To override the file-based settings in the files ",(0,t.jsx)(n.code,{children:"config/app_config.php"}),", ",(0,t.jsx)(n.code,{children:"config/custom_config.php"})," or ",(0,t.jsx)(n.code,{children:"config/credentials.php"}),", modify the files ",(0,t.jsx)(n.code,{children:"config/custom_config.php"})," or ",(0,t.jsx)(n.code,{children:"config/credentials.php"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The file ",(0,t.jsx)(n.code,{children:"config/app_config.php"})," must not be changed, as it would be overwritten by the next update."]}),"\n",(0,t.jsx)(n.h2,{id:"change-weekly-pickup-day",children:"Change weekly pickup day"}),"\n",(0,t.jsxs)(n.p,{children:["Use the script ",(0,t.jsx)(n.em,{children:"ChangeWeeklyPickupDayByOneDayCommand"})," to change the setting ",(0,t.jsx)(n.code,{children:"FCS_WEEKLY_PICKUP_DAY"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bin/cake ChangeWeeklyPickupDayByOneDay decrease"})," => Changed Friday to Thursday"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bin/cake ChangeWeeklyPickupDayByOneDay increase"})," => Changed Thursday to Friday"]}),"\n",(0,t.jsx)(n.p,{children:"The script automatically changes custom order list send days for certain products."}),"\n",(0,t.jsxs)(n.p,{children:["Do not forget to change the days when certain cronjobs run (e.g. EmailOrderReminder). Change that directly in the cronjob settings (",(0,t.jsx)(n.a,{href:"https://www.yourdomain.com/admin/cronjobs",children:"https://www.yourdomain.com/admin/cronjobs"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"change-the-day-where-the-order-lists-are-sent",children:"Change the day where the order lists are sent"}),"\n",(0,t.jsx)(n.p,{children:'Open the table fcs_configuration and change the value of the field "FCS_DEFAULT_SEND_ORDER_LISTS_DAY_DELTA" (default: 2) to eg. 1.'}),"\n",(0,t.jsx)(n.p,{children:"Example: If you want to change the default weekly order cycle from Tuesday midnight (last order possible) - Wednesday morning (order lists are sent) - Friday (pickup day) - to: Thursday midnight (last order possible) - Friday morning (order lists are sent) - Saturday: (pickup day), you would need to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["execute ",(0,t.jsx)(n.code,{children:"bin/cake ChangeWeeklyPickupDayByOneDay increase"})," once"]}),"\n",(0,t.jsx)(n.li,{children:"change FCS_DEFAULT_SEND_ORDER_LISTS_DAY_DELTA to 1"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"officially-supported-delivery-cycles",children:"Officially supported delivery cycles"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Last order day"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"pickup day"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"info"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Tuesday"}),(0,t.jsx)(n.td,{children:"Friday"}),(0,t.jsx)(n.td,{children:"default, usage: approx. 90%"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Wednesday"}),(0,t.jsx)(n.td,{children:"Friday"}),(0,t.jsx)(n.td,{children:"usage: approx. 5%"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Monday"}),(0,t.jsx)(n.td,{children:"Thursday"}),(0,t.jsx)(n.td,{children:"rarely used"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thursday"}),(0,t.jsx)(n.td,{children:"Friday"}),(0,t.jsx)(n.td,{children:"rarely used"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Monday"}),(0,t.jsx)(n.td,{children:"Tuesday"}),(0,t.jsx)(n.td,{children:"rarely used"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Saturday"}),(0,t.jsx)(n.td,{children:"Thursday"}),(0,t.jsx)(n.td,{children:"rarely used"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>s,x:()=>a});var r=d(6540);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);