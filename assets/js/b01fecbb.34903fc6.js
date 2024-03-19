"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[12],{354:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=o(4848),t=o(8453);const s={},d="Docker Dev Environment",r={id:"dev/docker-dev-environment",title:"Docker Dev Environment",description:"The provided docker configuration should not be used in production environments!",source:"@site/docs/dev/docker-dev-environment.md",sourceDirName:"dev",slug:"/dev/docker-dev-environment",permalink:"/dev/docker-dev-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/foodcoopshop/foodcoopshop.github.io/edit/main/docs/dev/docker-dev-environment.md",tags:[],version:"current",lastUpdatedAt:1710844398,formattedLastUpdatedAt:"19. M\xe4rz 2024",frontMatter:{},sidebar:"mySidebar",previous:{title:"Configuration",permalink:"/dev/configuration"},next:{title:"Translation guide",permalink:"/dev/translation-guide"}},l={},c=[{value:"Installation on your local machine",id:"installation-on-your-local-machine",level:2},{value:"Installation on Gitpod",id:"installation-on-gitpod",level:2},{value:"Login credentials",id:"login-credentials",level:2},{value:"Unit Tests",id:"unit-tests",level:2},{value:"Tools",id:"tools",level:2},{value:"Tips for using Docker on Windows",id:"tips-for-using-docker-on-windows",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"docker-dev-environment",children:"Docker Dev Environment"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"The provided docker configuration should not be used in production environments!"})}),"\n",(0,i.jsx)(n.h2,{id:"installation-on-your-local-machine",children:"Installation on your local machine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"})," and ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})]}),"\n",(0,i.jsxs)(n.li,{children:["Create a new folder and clone ",(0,i.jsx)(n.a,{href:"https://github.com/foodcoopshop/foodcoopshop.git",children:"the repository"})]}),"\n",(0,i.jsxs)(n.li,{children:["Start containers with ",(0,i.jsx)(n.code,{children:"CURRENT_UID=$(id -u):$(id -g) docker compose up -d"})]}),"\n",(0,i.jsxs)(n.li,{children:["When all containers are up and running, run: ",(0,i.jsx)(n.code,{children:"bash ./devtools/init-dev-setup.sh"})]}),"\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.a,{href:"http://localhost:8001",children:"http://localhost:8001"})," to get to the homepage"]}),"\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"})," to get to phpmyadmin of database-dev"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you add ",(0,i.jsx)(n.code,{children:"127.0.0.1 foodcoopshop.test"})," to your hosts file, you can use ",(0,i.jsx)(n.code,{children:"http://foodcoopshop.test:8001"}),". Do not forget to change ",(0,i.jsx)(n.code,{children:"App.fullBaseUrl"})," to ",(0,i.jsx)(n.code,{children:"http://foodcoopshop.test:8001"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"installation-on-gitpod",children:"Installation on Gitpod"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://gitpod.io/#https://github.com/foodcoopshop/foodcoopshop",children:(0,i.jsx)(n.img,{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When all containers are up and running (takes between 1 and 2 minutes), open your Bash-terminal (not the Docker-terminal) and run ",(0,i.jsx)(n.code,{children:"bash ./devtools/init-dev-setup.sh"})]}),"\n",(0,i.jsxs)(n.li,{children:["In your custom_config.php, change ",(0,i.jsx)(n.code,{children:"App.fullBaseUrl"})," to your custom Gitpod-Domain (starting with ",(0,i.jsx)(n.code,{children:"https://8001-foodcoopsho-foodcoopsho..."})," ",(0,i.jsx)(n.strong,{children:"Be careful, the domain must not end with a slash!"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"login-credentials",children:"Login credentials"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The available demo test data is in German."}),"\n",(0,i.jsxs)(n.li,{children:["You can chose between 4 different users to login on ",(0,i.jsx)(n.a,{href:"http://localhost:8001/anmelden",children:"http://localhost:8001/anmelden"})]}),"\n",(0,i.jsxs)(n.li,{children:["Superadmin: ",(0,i.jsx)(n.a,{href:"mailto:fcs-demo-superadmin@mailinator.com",children:"fcs-demo-superadmin@mailinator.com"})," / Password: foodcoopshop"]}),"\n",(0,i.jsxs)(n.li,{children:["Admin: ",(0,i.jsx)(n.a,{href:"mailto:fcs-demo-admin@mailinator.com",children:"fcs-demo-admin@mailinator.com"})," / Password: foodcoopshop"]}),"\n",(0,i.jsxs)(n.li,{children:["Member: ",(0,i.jsx)(n.a,{href:"mailto:fcs-demo-mitglied@mailinator.com",children:"fcs-demo-mitglied@mailinator.com"})," / Password: foodcoopshop"]}),"\n",(0,i.jsxs)(n.li,{children:["Manufacturer: ",(0,i.jsx)(n.a,{href:"mailto:fcs-demo-fleisch-hersteller@mailinator.com",children:"fcs-demo-fleisch-hersteller@mailinator.com"})," / Password: foodcoopshop"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"docker exec -w /app fcs.php php ./vendor/bin/phpunit"})}),"\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.a,{href:"http://localhost:8081",children:"http://localhost:8081"})," to get to phpmyadmin of database-test"]}),"\n",(0,i.jsx)(n.li,{children:"On my local machine the current 546 tests finish in around 1:40 min, On Github Actions they need around 4:30 min."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tools",children:"Tools"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run composer: ",(0,i.jsx)(n.code,{children:"docker exec -w /app fcs.php composer install|update|outdated"})]}),"\n",(0,i.jsxs)(n.li,{children:["Run npm-check-updates: ",(0,i.jsx)(n.code,{children:"docker exec -w /app/webroot fcs.php ncu"})]}),"\n",(0,i.jsxs)(n.li,{children:["Run npm: ",(0,i.jsx)(n.code,{children:"docker exec -w /app/webroot fcs.php npm install"})]}),"\n",(0,i.jsxs)(n.li,{children:["Update po-Files (translations): ",(0,i.jsx)(n.code,{children:"docker exec -w /app fcs.php bash ./devtools/update-translations.sh"})]}),"\n",(0,i.jsxs)(n.li,{children:["Running migrations: ",(0,i.jsx)(n.code,{children:"docker exec -w /app fcs.php bash ./bin/cake migrations migrate"})]}),"\n",(0,i.jsxs)(n.li,{children:["Build assets: ",(0,i.jsx)(n.code,{children:"docker exec -w /app fcs.php bash ./bin/cake asset_compress build"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tips-for-using-docker-on-windows",children:"Tips for using Docker on Windows"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Install Ubuntu and switch to WSL2"}),"\n",(0,i.jsx)(n.li,{children:'Docker Desktop: Settings / Resources / WSL Integration: Enable integration with additional distros: Enable "Ubuntu"'}),"\n",(0,i.jsx)(n.li,{children:"Clone the repo and start docker from Ubuntu (1.000 times faster than if you start it in Windows)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>r});var i=o(6540);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);