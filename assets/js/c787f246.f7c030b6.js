"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[288],{9703:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=i(4848),o=i(8453);const c={},l="Migration guide",s={id:"dev/migration-guide",title:"Migration guide",description:"Always make a database and file backup before updating your installation!",source:"@site/docs/dev/migration-guide.md",sourceDirName:"dev",slug:"/dev/migration-guide",permalink:"/dev/migration-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/foodcoopshop/foodcoopshop.github.io/edit/main/docs/dev/migration-guide.md",tags:[],version:"current",lastUpdatedAt:1714632042e3,frontMatter:{},sidebar:"mySidebar",previous:{title:"Installation guide",permalink:"/dev/installation-guide"},next:{title:"Cronjobs",permalink:"/dev/cronjobs"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"v4.0.0",id:"v400",level:2},{value:"v3.6.2",id:"v362",level:2},{value:"v3.5.1",id:"v351",level:2},{value:"v3.4.2",id:"v342",level:2},{value:"v3.3.0",id:"v330",level:2},{value:"v3.2.2",id:"v322",level:2},{value:"v3.2.1",id:"v321",level:2},{value:"v3.2.0",id:"v320",level:2},{value:"v3.1.0",id:"v310",level:2},{value:"v3.0.x",id:"v30x",level:2},{value:"replace source code",id:"replace-source-code",level:2},{value:"execute migrations",id:"execute-migrations",level:2},{value:"clear cache",id:"clear-cache",level:2}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"migration-guide",children:"Migration guide"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Always make a database and file backup before updating your installation!"})})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"There is no automatic update tool, updating FoodCoopShop needs to be done manually. But it's not too hard and this migration guide helps you."}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Updating to v3.6 or later can only be done from v3.5.x"})}),"\n",(0,r.jsxs)(n.li,{children:["Updating from v2.x to v3.x can only be done from v2.7.x ",(0,r.jsx)(n.a,{href:"/dev/migration-guide-v2",children:"Migration guide for v2.x"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"v400",children:"v4.0.0"}),"\n",(0,r.jsx)(n.admonition,{title:"This is the latest stable version.",type:"tip"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Release date: 2024-03-29"}),"\n",(0,r.jsxs)(n.li,{children:["Add the configuration ",(0,r.jsx)(n.code,{children:"Salt.cookieKey"})," to your custom_config.php. It should be a random string with at least 32 characters."]}),"\n",(0,r.jsx)(n.li,{children:"Uploading images is now handled by Imagick and not by GD any more. Be sure that Imagick is installed on your server."}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#replace-source-code",children:"replace source code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#execute-migrations",children:"execute migrations"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clear-cache",children:"clear cache"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"v362",children:"v3.6.2"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Release date: 2023-11-27"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Updating to this version can only be done from v3.5.x!"})}),"\n",(0,r.jsx)(n.li,{children:"Minimal requirement for PHP is 8.1 (PHP 8.2 is recommended)"}),"\n",(0,r.jsxs)(n.li,{children:['PHP bzip2 lib is required (for automatic database backups). You can find out, if bzip2 is installed, if you can find "bzip2" ',(0,r.jsx)(n.a,{href:"https://www.internetwerk.de/support/webhosting/php-info-datei-erstellen-und-konfiguration-anzeigen",children:"within your phpinfo output"}),". If not, it needs to be installed."]}),"\n",(0,r.jsxs)(n.li,{children:["Replace ",(0,r.jsx)(n.code,{children:"app.cakeServerName"})," with ",(0,r.jsx)(n.code,{children:"App.fullBaseUrl"}),". Notice the uppercase A in ",(0,r.jsx)(n.strong,{children:"A"}),"pp.fullBaseUrl:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"'App' => [\n    'fullBaseUrl' => 'https://wwww.example.com', // no slash at the end!\n],\n'app' => [\n    //your other configs\n],\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you created mailto-links in any editor (eg. pages, footer...), then remove the link and just save the plain email address. The software now automatically generates a spam protected mailto-link."}),"\n",(0,r.jsx)(n.li,{children:"replace source code => see bottom of page"}),"\n",(0,r.jsxs)(n.li,{children:['If you use PHP 8.1 (not recommended!), you have to manually replace "8.2" with "8.1" twice in your composer.json before executing your migrations: ',(0,r.jsx)(n.a,{href:"https://github.com/foodcoopshop/foodcoopshop/blob/d3d10e33a2f6e26854b8ced4389dae13d7197b63/composer.json#L14",children:"first"}),", ",(0,r.jsx)(n.a,{href:"https://github.com/foodcoopshop/foodcoopshop/blob/d3d10e33a2f6e26854b8ced4389dae13d7197b63/composer.json#L22",children:"second"})]}),"\n",(0,r.jsxs)(n.li,{children:["run ",(0,r.jsx)(n.code,{children:"bin/cake migrations migrate --source Migrations/prepare-for-update-from-v3.5"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#replace-source-code",children:"replace source code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#execute-migrations",children:"execute migrations"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clear-cache",children:"clear cache"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"v351",children:"v3.5.1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Release date: 2023-02-28"}),"\n",(0,r.jsx)(n.li,{children:"Minimal requirement for PHP is now 8.1"}),"\n",(0,r.jsx)(n.li,{children:"Minimal requirement for MySQL is now 8.0"}),"\n",(0,r.jsx)(n.li,{children:"add the array indizes 'emailFormat' and 'transport' to your credentials.php:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"'Email' => [\n    'debug' => [\n        'emailFormat' => 'html',\n        'transport' => 'debug',\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["remove ",(0,r.jsx)(n.code,{children:"Email.fallback"})," and ",(0,r.jsx)(n.code,{children:"EmailTransport.fallback"})," from credentials.php"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#replace-source-code",children:"replace source code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#execute-migrations",children:"execute migrations"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clear-cache",children:"clear cache"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"v342",children:"v3.4.2"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Minimal requirement for PHP is now 8.0"}),"\n",(0,r.jsxs)(n.li,{children:["Rename ",(0,r.jsx)(n.code,{children:"app.sendEmailWhenOrderDetailQuantityOrPriceChanged"})," to ",(0,r.jsx)(n.code,{children:"app.sendEmailWhenOrderDetailQuantityChanged"})," in custom_config.php"]}),"\n",(0,r.jsx)(n.li,{children:"Frontend caching of product / category data is enabled by default. If you manipulate product data in the database directly, do not forget to clear the cache manually (see bottom of page)."}),"\n",(0,r.jsxs)(n.li,{children:["It's recommended to add cache prefixes to custom_config.php see ",(0,r.jsx)(n.a,{href:"https://github.com/foodcoopshop/foodcoopshop/blob/main/config/custom_config.default.php",children:"custom_config.default.php"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"'Cache' => [\n    'default' => [\n        'prefix' => 'example_com_',\n    ],\n    '_cake_core_' => [\n        'prefix' => 'example_com_',\n    ],\n    '_cake_model_' => [\n        'prefix' => 'example_com_',\n    ],\n],\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#replace-source-code",children:"replace source code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#execute-migrations",children:"execute migrations"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clear-cache",children:"clear cache"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"v330",children:"v3.3.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The old member fee system was removed. If you used it, remove ",(0,r.jsx)(n.code,{children:"app.memberFeeEnabled"})," from custom_config.php. ",(0,r.jsx)(n.a,{href:"https://foodcoopshop.github.io/de/mitgliedsbeitraege.html",children:"How to use the new member fee system"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"The minimal requirement for npm is now v7 (if you install vendors by yourself)"}),"\n",(0,r.jsxs)(n.li,{children:["Change the cronjob to run the worker. See ",(0,r.jsx)(n.a,{href:"/dev/cronjobs",children:"cronjobs"})," (bottom of page)"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#replace-source-code",children:"replace source code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#execute-migrations",children:"execute migrations"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clear-cache",children:"clear cache"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"v322",children:"v3.2.2"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#replace-source-code",children:"replace source code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#execute-migrations",children:"execute migrations"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clear-cache",children:"clear cache"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"v321",children:"v3.2.1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#replace-source-code",children:"replace source code"})}),"\n",(0,r.jsxs)(n.li,{children:["Due to a code cleaning problem where all old migrations were removed in v3.0, two migrations were lost. Installations that migrated from v3.0 to v3.2.x need to copy these two migrations - ",(0,r.jsx)(n.a,{href:"https://github.com/foodcoopshop/foodcoopshop/blob/1d7561acd589eb0f4cc04b33c960dcef6cb4c414/config/Migrations/20200319092123_ChangeDefaultTableCollationToUtf8mb4.php",children:"Migration A"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/foodcoopshop/foodcoopshop/blob/1d7561acd589eb0f4cc04b33c960dcef6cb4c414/config/Migrations/20200319192745_MarkPricePerUnitAsSaved.php",children:"Migration B"}),' - into the folder /config/Migrations/ and then go on with the next point "execute migrations". ',(0,r.jsx)(n.a,{href:"https://github.com/foodcoopshop/foodcoopshop/issues/649",children:"Details"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#execute-migrations",children:"execute migrations"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clear-cache",children:"clear cache"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"v320",children:"v3.2.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["add a new cronjob to handle the new ",(0,r.jsx)(n.a,{href:"https://github.com/dereuromark/cakephp-queue",children:"queue"}),": ",(0,r.jsx)(n.code,{children:"*/5 * * * * /your-app/bin/cake queue runworker -q"})]}),"\n",(0,r.jsxs)(n.li,{children:["rename ",(0,r.jsx)(n.code,{children:"app.customFrontendColorTheme"})," to ",(0,r.jsx)(n.code,{children:"app.customThemeMainColor"})]}),"\n",(0,r.jsxs)(n.li,{children:["The new default logo format is png. You can change back to jpg setting ",(0,r.jsx)(n.code,{children:"app.logoFileName"})," to ",(0,r.jsx)(n.code,{children:"logo.jpg"})]}),"\n",(0,r.jsx)(n.li,{children:"Minimal requirement for PHP is now 7.4"}),"\n",(0,r.jsxs)(n.li,{children:["After the update, please remove ",(0,r.jsx)(n.code,{children:"app.adminEmail"})," and ",(0,r.jsx)(n.code,{children:"app.adminPassword"}),"."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#replace-source-code",children:"replace source code"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#execute-migrations",children:"execute migrations"})," ",(0,r.jsx)(n.strong,{children:"the command changed with this version!"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clear-cache",children:"clear cache"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"v310",children:"v3.1.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#replace-source-code",children:"replace source code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#execute-migrations",children:"execute migrations"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clear-cache",children:"clear cache"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"v30x",children:"v3.0.x"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"PHP >= 7.3"}),"\n",(0,r.jsx)(n.li,{children:"MySQL >= 5.7.7 (to support utf8mb4)"}),"\n",(0,r.jsx)(n.li,{children:"FCS v3.x uses CakePHP v4 as the base framework."}),"\n",(0,r.jsxs)(n.li,{children:["For the new major version v3 a lot of legacy code was removed. Please ensure that your last v2.x installation at least runs ",(0,r.jsx)(n.strong,{children:"two full months in production"})," before updating to v3! The reason is, that in v2.2 / v2.3 the invoice generation was changed. If you don't use the invoice cronjob, you can update to v3 immediately."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"app.dateOfFirstSendInvoiceCronjobWithPickupDayUpdate"})," can be removed"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#replace-source-code",children:"replace source code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#execute-migrations",children:"execute migrations"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clear-cache",children:"clear cache"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"replace-source-code",children:"replace source code"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"rename old installation folder (e.g. foodcoopshop-old)"}),"\n",(0,r.jsx)(n.li,{children:"upload source code of new version into new folder with the name of the old version before renaming"}),"\n",(0,r.jsxs)(n.li,{children:["copy the following files and folders from your old installation directory into the new directory\nconfig/custom_config.php","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"config/credentials.php"}),"\n",(0,r.jsx)(n.li,{children:"webroot/files"}),"\n",(0,r.jsx)(n.li,{children:"files_private"}),"\n",(0,r.jsx)(n.li,{children:"and any other adapted files (favicons, /css/custom.css, /css/mobile-frontend-custom.css...)"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"execute-migrations",children:"execute migrations"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:">= v3.2: $ bin/cake migrations migrate && bin/cake migrations migrate -p Queue\n<  v3.2: $ bin/cake migrations migrate\n"})})}),"\n",(0,r.jsx)(n.h2,{id:"clear-cache",children:"clear cache"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"bin/cake cache clear_all\n"})})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var r=i(6540);const o={},c=r.createContext(o);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);