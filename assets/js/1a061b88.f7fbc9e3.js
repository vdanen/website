"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[20344],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98243:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return f}});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&u(e,r,t[r]);return e};const d={},h="pyload",m={unversionedId:"charts/stable/pyload/index",id:"charts/stable/pyload/index",title:"pyload",description:"pyLoad is a Free and Open Source download manager written in Python and designed to be extremely lightweight, easily extensible and fully manageable via web.",source:"@site/docs/charts/stable/pyload/index.md",sourceDirName:"charts/stable/pyload",slug:"/charts/stable/pyload/",permalink:"/docs/charts/stable/pyload/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/pyload/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/pydio-cells/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/pyload/CHANGELOG"}},g={},f=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Upgrading, Rolling Back and Uninstalling the Chart",id:"upgrading-rolling-back-and-uninstalling-the-chart",level:2},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:5},{value:"Support",id:"support",level:2}],k={toc:f};function y(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),u),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"pyload"}),"pyload"),(0,n.kt)("p",null,"pyLoad is a Free and Open Source download manager written in Python and designed to be extremely lightweight, easily extensible and fully manageable via web."),(0,n.kt)("p",null,"TrueCharts are designed to be installed as TrueNAS SCALE app only. We can not guarantee this charts works as a stand-alone helm installation.\n",(0,n.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,n.kt)("a",c({parentName:"strong"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"here"))),(0,n.kt)("h2",c({},{id:"source-code"}),"Source Code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/pyload/pyload"}),"https://github.com/pyload/pyload")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://hub.docker.com/r/linuxserver/pyload"}),"https://hub.docker.com/r/linuxserver/pyload"))),(0,n.kt)("h2",c({},{id:"requirements"}),"Requirements"),(0,n.kt)("p",null,"Kubernetes: ",(0,n.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,n.kt)("h2",c({},{id:"dependencies"}),"Dependencies"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Repository"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"https://library-charts.truecharts.org"}),"https://library-charts.truecharts.org")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"common"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"10.4.4")))),(0,n.kt)("h2",c({},{id:"installing-the-chart"}),"Installing the Chart"),(0,n.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,n.kt)("a",c({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/"}),"Quick-Start Guide"),"."),(0,n.kt)("h2",c({},{id:"upgrading-rolling-back-and-uninstalling-the-chart"}),"Upgrading, Rolling Back and Uninstalling the Chart"),(0,n.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,n.kt)("a",c({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"}),"Quick-Start Guide"),"."),(0,n.kt)("h5",c({},{id:"connecting-to-other-apps"}),"Connecting to other apps"),(0,n.kt)("p",null,"If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our ",(0,n.kt)("a",c({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/06-linking-apps/"}),"Linking Apps Internally")," quick-start guide."),(0,n.kt)("h2",c({},{id:"support"}),"Support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please check our ",(0,n.kt)("a",c({parentName:"li"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/"}),"quick-start guides")," first."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",c({parentName:"li"},{href:"https://truecharts.org"}),"Wiki")),(0,n.kt)("li",{parentName:"ul"},"Check our ",(0,n.kt)("a",c({parentName:"li"},{href:"https://discord.gg/tVsPTHWTtr"}),"Discord")),(0,n.kt)("li",{parentName:"ul"},"Open a ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"issue"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}y.isMDXComponent=!0}}]);