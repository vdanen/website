"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8691],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=["components"],o={},s="Clustering",p={unversionedId:"manual/SCALE Apps/indepth/clustering",id:"manual/SCALE Apps/indepth/clustering",title:"Clustering",description:"One of the eventual goals of SCALE is to run hyper-converged clusters based on ZFS, Gluster and Kubernetes.",source:"@site/docs/manual/SCALE Apps/indepth/clustering.md",sourceDirName:"manual/SCALE Apps/indepth",slug:"/manual/SCALE Apps/indepth/clustering",permalink:"/fa/docs/manual/SCALE Apps/indepth/clustering",draft:!1,editUrl:"https://github.com/truecharts/pub/docs/manual/SCALE Apps/indepth/clustering.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"How to: Create Certificates",permalink:"/fa/docs/manual/SCALE Apps/indepth/certificates"},next:{title:"Networking",permalink:"/fa/docs/manual/SCALE Apps/indepth/networking"}},u={},c=[{value:"Single-Pod Flexible",id:"single-pod-flexible",level:5},{value:"Single-Pod non-flexible",id:"single-pod-non-flexible",level:5},{value:"High Availability Apps",id:"high-availability-apps",level:5}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clustering"},"Clustering"),(0,l.kt)("p",null,"One of the eventual goals of SCALE is to run hyper-converged clusters based on ZFS, Gluster and Kubernetes.\nWhile this is awesome, we like to highlight 3 ways of using Clustering with TrueCharts Apps in the future."),(0,l.kt)("p",null,"Currently no clustering is supported with TrueCharts yet, but we already make precautions during our design phase to implement clustering smoothly in the future."),(0,l.kt)("h5",{id:"single-pod-flexible"},"Single-Pod Flexible"),(0,l.kt)("p",null,'These Apps (can) only run a single instance of a pod at a time, so no "high available" setup available. However these Apps can still dynamically moved over to different nodes if a node fails, this should make sure the downtime stays relatively small.\nThese apps can also be "spread" over all nodes by kubernetes. This also means it\'s worth cutting big Single-Pod Apps into multiple smaller deployements, For example: n we prefer to deploy small database servers with every App (as those can more dynamically be spread over multiple nodes) over one Big single-pod Flexbile App.'),(0,l.kt)("p",null,"Some examples of Apps that can not run with more than one pod at a time, even if we wanted to, are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sonarr"),(0,l.kt)("li",{parentName:"ul"},"Lidarr"),(0,l.kt)("li",{parentName:"ul"},"Radarr"),(0,l.kt)("li",{parentName:"ul"},"Plex")),(0,l.kt)("h5",{id:"single-pod-non-flexible"},"Single-Pod non-flexible"),(0,l.kt)("p",null,"These Apps can not be run with more than 1 pod at a time and on the other hand are bound to a node.\nThis means: Host-Down? Pod-Down!"),(0,l.kt)("p",null,"Almost always this is caused by Apps being bound to a specific hardware setup."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Examples:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"zwavejs2mqtt"),(0,l.kt)("li",{parentName:"ul"},"HomeAssistant (depending on added hardware)"),(0,l.kt)("li",{parentName:"ul"},"Handbrake (depending on added hardware)")),(0,l.kt)("h5",{id:"high-availability-apps"},"High Availability Apps"),(0,l.kt)("p",null,"These Apps are designed to be the most resiliant of all, they can handle node failures and pod failures without any issue, because they always run multiple Pods at once that fill in once pods or nodes start failing."),(0,l.kt)("p",null,"Because these Apps are also the most complicated of all, we try to limit them to key-area's of the TrueCharts ecosystem that can not be cut into smaller pieces (Single-Pod Flexible) easily. Like: Ingress and Monitoring."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Examples:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Traefik")))}m.isMDXComponent=!0}}]);