"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[426],{1201:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var d=r(4848),i=r(8453);const o={},s="Netzwerk-Modul (API)",t={id:"netzwerk-modul",title:"Netzwerk-Modul (API)",description:"Das Netzwerk-Modul bietet eine vereinfachte Verwaltung der Produktdaten f\xfcr Hersteller, die mehrere Foodcoops beliefern.",source:"@site/docs/netzwerk-modul.md",sourceDirName:".",slug:"/netzwerk-modul",permalink:"/netzwerk-modul",draft:!1,unlisted:!1,editUrl:"https://github.com/foodcoopshop/foodcoopshop.github.io/edit/main/docs/netzwerk-modul.md",tags:[],version:"current",lastUpdatedAt:1719209742e3,frontMatter:{},sidebar:"mySidebar",previous:{title:"Selbstbedienungs-Modus",permalink:"/selbstbedienungs-modus"},next:{title:"Feedback-Funktionen",permalink:"/diverses/feedback"}},l={},a=[{value:"Funktionen / Konfiguration",id:"funktionen--konfiguration",level:2},{value:"Aktivierung",id:"aktivierung",level:2},{value:"Technische Ausdr\xfccke",id:"technische-ausdr\xfccke",level:2},{value:"1. Remote-Foodcoops erstellen",id:"1-remote-foodcoops-erstellen",level:2},{value:"2. Remote-Foodcoops f\xfcr Hersteller ausw\xe4hlen",id:"2-remote-foodcoops-f\xfcr-hersteller-ausw\xe4hlen",level:2},{value:"3. Produktdaten synchronisieren",id:"3-produktdaten-synchronisieren",level:2},{value:"4. Produkte zuordnen",id:"4-produkte-zuordnen",level:2},{value:"5. Produkte f\xfcr neue Foodcoop \xfcbertragen",id:"5-produkte-f\xfcr-neue-foodcoop-\xfcbertragen",level:2},{value:"6. API zum Abrufen von Bestellungen",id:"6-api-zum-abrufen-von-bestellungen",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"netzwerk-modul-api",children:"Netzwerk-Modul (API)"})}),"\n",(0,d.jsxs)(n.p,{children:["Das Netzwerk-Modul bietet eine vereinfachte Verwaltung der Produktdaten f\xfcr Hersteller, die ",(0,d.jsx)(n.strong,{children:"mehrere Foodcoops"})," beliefern."]}),"\n",(0,d.jsx)(n.admonition,{title:"Achtung",type:"danger",children:(0,d.jsxs)(n.p,{children:["Die Versionen 3.2.0 bis 3.6.0 enthalten ",(0,d.jsx)(n.a,{href:"https://github.com/foodcoopshop/foodcoopshop/security/advisories/GHSA-jhww-fx2j-3rf7",children:"eine Sicherheitsl\xfccke"})," im Netzwerk-Modul. Bitte updaten! Jede Remote-Foodcoop muss auch die Master-Foodcoops als Remote-Foodcoop anlegen."]})}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["Das Netzwerk-Modul stellt auch eine ",(0,d.jsx)(n.a,{href:"#6-api-zum-abrufen-von-bestellungen",children:"API zum Abrufen der Bestellungen"})," zur Verf\xfcgung. Sie ist f\xfcr alle Hersteller nutzbar."]})}),"\n",(0,d.jsx)(n.h2,{id:"funktionen--konfiguration",children:"Funktionen / Konfiguration"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Es ist dadurch m\xf6glich, die ",(0,d.jsx)(n.strong,{children:"verteilten Produktdaten der verschiedene Foodcoops"})," synchron zu halten. Die Daten werden daf\xfcr ",(0,d.jsx)(n.strong,{children:"nicht"})," auf einem einzigen Server zentral gespeichert, das ist wichtig f\xfcr die (technische) Unabh\xe4ngigkeit der Foodcoops."]}),"\n",(0,d.jsxs)(n.li,{children:["Jede Foodcoop muss zur Verwendung des Netzwerk-Moduls immer die ",(0,d.jsx)(n.a,{href:"https://www.foodcoopshop.com/download",children:"aktuellste FoodCoopShop-Version"})," installiert haben und ein SSL-Zertifikat (https) verwenden."]}),"\n",(0,d.jsxs)(n.li,{children:["Die Produktdaten ",(0,d.jsx)(n.strong,{children:"Bild, Name inkl. Beschreibungen, verf\xfcgbare Menge, Preis, Pfand"}),", ",(0,d.jsx)(n.strong,{children:"Lieferrhythmus"})," und ",(0,d.jsx)(n.strong,{children:"Status"})," k\xf6nnen von einer sogenannten Master-Foodcoop auf beliebig viele Remote-Foodcoops \xfcbertragen werden. Das spart vor allem bei w\xf6chentlichen Sortiments\xe4nderungen viel Zeit."]}),"\n",(0,d.jsxs)(n.li,{children:["Daf\xfcr notwendig: ",(0,d.jsx)(n.strong,{children:"einmalige"})," Zuordnung von bereits bestehenden Produkten und Varianten zwischen Master-Foodcoop und Remote-Foodcoop(s)"]}),"\n",(0,d.jsxs)(n.li,{children:["Hersteller, die ihre Produkte bereits bei einer Foodcoop eingepflegt haben und ",(0,d.jsx)(n.strong,{children:"eine neue Foodcoop beliefern"}),", k\xf6nnen ihre Produkte mit dem Netzwerk-Modul schneller neu anlegen. Details dazu unter ",(0,d.jsx)(n.a,{href:"#5-produkte-f%C3%BCr-neue-foodcoop-%C3%BCbertragen",children:"Punkt 5"}),"."]}),"\n",(0,d.jsx)(n.li,{children:"Nur Hersteller k\xf6nnen mit dem Netzwerk-Modul arbeiten, Admins bzw. Superadmins k\xf6nnen es nicht verwenden."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"aktivierung",children:"Aktivierung"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Das Netzwerk-Modul ist standardm\xe4\xdfig deaktiviert. Die Aktivierung des Netzwerk-Moduls f\xfcr die Verwendung als Master- und/oder Remote-Foodcoop erfolgt \xfcber die Datenbank: In der Tabelle ",(0,d.jsx)(n.code,{children:"fcs_configuration"})," das Feld ",(0,d.jsx)(n.code,{children:"value"})," f\xfcr ",(0,d.jsx)(n.code,{children:"name=FCS_NETWORK_PLUGIN_ENABLED"})," auf 1 setzen."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"technische-ausdr\xfccke",children:"Technische Ausdr\xfccke"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Master-Foodcoop"}),": Foodcoop, auf der die Produkt-Zuordnungen stattfinden. Jede Foodcoop kann als Master-Foodcoop verwendet werden. Empfehlenswert ist es, immer die gleiche Foodcoop als Master-Foodcoop zu verwenden, da sonst die Produkt-Zuordnungen mehrfach gepflegt werden m\xfcssen."]}),"\n"]}),"\n",(0,d.jsx)(n.admonition,{title:"Achtung",type:"warning",children:(0,d.jsx)(n.p,{children:"Wenn eine Foodcoop den variablen Mitgliedsbeitrag verwendet (x % Aufschlag), so kann diese Foodcoop nicht als Master-Foodcoop verwendet werden! Als Remote-Foodcoop kann sie aber  schon verwendet werden."})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Remote-Foodcoop"}),": Foodcoop, auf der die Daten der Master-Foodcoop \xfcbertragen werden. Das k\xf6nnen auch mehrere sein."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"1-remote-foodcoops-erstellen",children:"1. Remote-Foodcoops erstellen"}),"\n",(0,d.jsx)(n.p,{children:"In den Einstellungen k\xf6nnen Superadmins Remote-Foodcoops erstellen und bearbeiten."}),"\n",(0,d.jsx)(n.p,{children:"Seit dem Sicherheits-Update (v3.6.1) m\xfcssen auch alle Master-Foodcoops, von denen aus die Daten synchronisiert werden, als Remote-Foodcoops angelegt werden."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:r(3973).A+"",width:"800",height:"159"})}),"\n",(0,d.jsx)(n.h2,{id:"2-remote-foodcoops-f\xfcr-hersteller-ausw\xe4hlen",children:"2. Remote-Foodcoops f\xfcr Hersteller ausw\xe4hlen"}),"\n",(0,d.jsx)(n.p,{children:"Der Hersteller selbst (oder ein Superadmin) kann in den Hersteller-Einstellungen dann diese in Punkt 1 erstellten Remote-Foodcoops ausw\xe4hlen. Mit ihnen kann er dann seine Produktdaten synchronisieren."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:r(9080).A+"",width:"800",height:"206"})}),"\n",(0,d.jsx)(n.h2,{id:"3-produktdaten-synchronisieren",children:"3. Produktdaten synchronisieren"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:['Wenn der Hersteller (oder ein Superadmin) in den Hersteller-Einstellungen mindestens eine Remote-Foodcoop ausgew\xe4hlt hat, befindet sich im Hersteller-Login unter "Meine Produkte" oben rechts ein neuer Button ',(0,d.jsx)(n.strong,{children:"Produkte synchronisieren"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Ein Klick darauf bringt dich zur \xdcbersicht, von der aus du deine Produktdaten auf die Remote-Foodcoops \xfcbertragen kannst. Daf\xfcr m\xfcssen allerdings zuvor die Produkte und Varianten der Remote-Foodcoops mit den Produkten der Master-Foodcoop zugeordnet werden - siehe Punkt 4."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Ein Klick auf ",(0,d.jsx)(n.strong,{children:"Vorschau laden"})," (erfolgt automatisch, falls du die Zugangsdaten bereits einmal eingegeben hast) zeigt dir, welche Unterschiede bei den Produktdaten deiner Foodcoops bestehen. Rot hinterlegte Felder weisen auf einen Unterschied hin. Wenn du die Checkbox ",(0,d.jsx)(n.strong,{children:"Nur Produkte mit Abweichungen anzeigen"})," deaktivierst, kannst du dir auch jene Produkte anzeigen lassen, die bereits auf allen Foodcoops abgeglichen sind."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Durch Ausw\xe4hlen der H\xe4kchen kannst du festlegen, welche Produktdaten (horizontale H\xe4kchen) und welche Produkte (vertikale H\xe4kchen) synchronisiert werden sollen. Produkte, die keine Unterschiede aufweisen, k\xf6nnen nicht ausgew\xe4hlt werden."}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Klicke jetzt auf ",(0,d.jsx)(n.strong,{children:"Produkte synchronisieren"}),", um die Daten der Master-Foodcoop zu \xfcbertragen. Nach dem Synchronisieren wir die Vorschau automatisch aktualisiert."]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:r(321).A+"",width:"1048",height:"520"})}),"\n",(0,d.jsx)(n.h2,{id:"4-produkte-zuordnen",children:"4. Produkte zuordnen"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Trage in den Login-Formularen oben deine Zugangsdaten f\xfcr die entsprechenden Foodcoops ein und klicke auf ",(0,d.jsx)(n.strong,{children:"Produkte laden"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["Die Produkte der Remote-Foodcoops werden jetzt in den ",(0,d.jsx)(n.strong,{children:"orange"}),' umrahmten Tabellen angezeigt. Du kannst sie durch "Drag and Drop" auf die Produkte der ',(0,d.jsx)(n.strong,{children:"gr\xfcn"})," umrahmten Tabelle ganz links ziehen, um die Produkte zuzuordnen."]}),"\n",(0,d.jsx)(n.li,{children:'Das Netzwerk-Modul legt keine Produkte neu an, es k\xf6nnen nur bereits bestehende Produkte verkn\xfcpft werden - siehe auch 5). Gegebenfalls musst du dich bei den anderen Foodcoops einloggen und fehlende Produkte neu anlegen, dann erneut auf "Produkte laden" klicken und dann zuordnen.'}),"\n",(0,d.jsxs)(n.li,{children:["Achtung: Das Anmelden bei den Remote-Foodcoops \xfcber das Netzwerk-Modul erlaubt leider ",(0,d.jsx)(n.strong,{children:"keine Sonderzeichen im Passwort"}),". Falls das der Fall ist, muss es bei der Remote-Foodcoop ge\xe4ndert werden."]}),"\n",(0,d.jsx)(n.li,{children:"Varianten m\xfcssen immer einzeln zugeordnet werden."}),"\n",(0,d.jsx)(n.li,{children:'Es ist nicht m\xf6glich, Varianten und Produkte miteinander zu verkn\xfcpfen. Z.B. wenn bei der Master-Foodcoop nur eine Variante "1 Liter" verwendet wird und und bei einer Remote-Foodcoop wird dazu das Feld "Einheit" (ohne Variante) verwendet. Die Daten-Struktur muss daf\xfcr angeglichen werden (z.B. Variante l\xf6schen).'}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:r(2054).A+"",width:"1048",height:"522"})}),"\n",(0,d.jsx)(n.h2,{id:"5-produkte-f\xfcr-neue-foodcoop-\xfcbertragen",children:"5. Produkte f\xfcr neue Foodcoop \xfcbertragen"}),"\n",(0,d.jsx)(n.p,{children:"Es ist mit dem Netzwerk-Modul zwar (noch) nicht m\xf6glich, noch nicht vorhandene Produkte zu \xfcbertragen, mit folgender Vorgehensweise kann man aber seine Produkte viel schneller anlegen:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Auf der Remote-Foodcoop so viele leere Produkte anlegen, wie man ben\xf6tigt"}),"\n",(0,d.jsx)(n.li,{children:"Gegebenfalls auch die Varianten dazu anlegen (Achtung: Die Variante selbst muss die richtige sein, sie wird nicht synchronisiert)"}),"\n",(0,d.jsx)(n.li,{children:"Dann auf die Master-Foodcoop wechseln und die leeren Produkte zuordnen."}),"\n",(0,d.jsx)(n.li,{children:'Produktdaten synchronisieren - der Hersteller muss danach auf Remote-Foodcoop nur noch Bild, Kategorien, "als neu anzeigen" und Steuersatz anpassen.'}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"6-api-zum-abrufen-von-bestellungen",children:"6. API zum Abrufen von Bestellungen"}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsx)(n.p,{children:"Hersteller k\xf6nnen \xfcber folgenden Endpoint alle Bestellungen f\xfcr einen bestimmten Abholtag abrufen.\nDas Netzwerk-Modul muss dazu aktiviert sein."})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Authentifizierung"})}),"\n",(0,d.jsx)(n.p,{children:"Die Authentifizierung erfolgt \xfcber BasicAuthentication mit den Base64-encoded Login-Daten des Herstellers (E-Mail, Passwort)."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Headers"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"Content-Type:application/json\nAuthorization:Basic + Base64-String\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Endpoint"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"GET https://www.example.com/api/orders.json?pickupDay={date}\nPARAM pickupDay: Format: dd.mm.yyyy, Pflichtfeld\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Response"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.name"}),": string / Name der Foodcoop"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.domain"}),": string / Domain der Foodcoop"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.orders.{n}.id"}),": int / interne Order-Id"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.orders.{n}.product_id"}),": int / interne Produkt-Id"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.orders.{n}.attribute_id"}),": int / interne Varianten-Id (0 wenn das Produkt keine Varianten verwendet)"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.orders.{n}.name"}),': string / Name des Produktes (Produkt ohne Preis nach Gewicht: Einheit ist getrennt mit " : ")']}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.orders.{n}.amount"}),": int / Wie oft wurde das Produkt bestellt? z.B. 1,"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.orders.{n}.order_state"}),": int / 3=OPEN / 10=ORDER_LIST_SENT / 11=BILLED_CASHLESS / 12=BILLED_CASH"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.orders.{n}.created"}),": date / Wann wurde die Bestellung get\xe4tigt?"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.orders.{n}.unit"}),": array / Falls das Produkt mit Preis nach Gewicht verrechnet wird ist dieser Index nicht leer."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.orders.{n}.unit.name"}),': string / Einheit, z.B. "g"']}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"app.orders.{n}.unit.mark_as_saved"}),": boolean / Wurde das Gewicht bereits angepasst?"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},9080:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/hersteller-remote-foodcoops-auswaehlen-1-fc427558faf2cf86181b01fb932fc8e3.png"},321:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/produktdaten-synchronisieren-vorschau-1-a254ecc2954bc6800c69aed73ee27088.png"},2054:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/produkte-zuordnen-1-0179133cd89da2112c1c6064c04d93dc.png"},3973:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/superadmin-remote-foodcoops-erstellen-1-6a8ad59fe69eed1e0cd8d5f69a77eccd.png"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>t});var d=r(6540);const i={},o=d.createContext(i);function s(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);