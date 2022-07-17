"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[48070],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21410:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={},h="doublecommander",m={unversionedId:"charts/stable/doublecommander/index",id:"charts/stable/doublecommander/index",title:"doublecommander",description:"A free cross platform open source file manager with two panels side by side.",source:"@site/docs/charts/stable/doublecommander/index.md",sourceDirName:"charts/stable/doublecommander",slug:"/charts/stable/doublecommander/",permalink:"/docs/charts/stable/doublecommander/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/doublecommander/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/double-take/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/doublecommander/CHANGELOG"}},f={},b=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Upgrading, Rolling Back and Uninstalling the Chart",id:"upgrading-rolling-back-and-uninstalling-the-chart",level:2},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:5},{value:"Support",id:"support",level:2}],g={toc:b};function k(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},g),c),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"doublecommander"}),"doublecommander"),(0,n.kt)("p",null,"A free cross platform open source file manager with two panels side by side."),(0,n.kt)("p",null,"TrueCharts are designed to be installed as TrueNAS SCALE app only. We can not guarantee this charts works as a stand-alone helm installation.\n",(0,n.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,n.kt)("a",p({parentName:"strong"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"here"))),(0,n.kt)("h2",p({},{id:"source-code"}),"Source Code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/linuxserver/docker-doublecommander"}),"https://github.com/linuxserver/docker-doublecommander")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://doublecmd.sourceforge.io/"}),"https://doublecmd.sourceforge.io/"))),(0,n.kt)("h2",p({},{id:"requirements"}),"Requirements"),(0,n.kt)("p",null,"Kubernetes: ",(0,n.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,n.kt)("h2",p({},{id:"dependencies"}),"Dependencies"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Repository"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("a",p({parentName:"td"},{href:"https://library-charts.truecharts.org"}),"https://library-charts.truecharts.org")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"common"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"10.4.4")))),(0,n.kt)("h2",p({},{id:"installing-the-chart"}),"Installing the Chart"),(0,n.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,n.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/"}),"Quick-Start Guide"),"."),(0,n.kt)("h2",p({},{id:"upgrading-rolling-back-and-uninstalling-the-chart"}),"Upgrading, Rolling Back and Uninstalling the Chart"),(0,n.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,n.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"}),"Quick-Start Guide"),"."),(0,n.kt)("h5",p({},{id:"connecting-to-other-apps"}),"Connecting to other apps"),(0,n.kt)("p",null,"If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our ",(0,n.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/06-linking-apps/"}),"Linking Apps Internally")," quick-start guide."),(0,n.kt)("h2",p({},{id:"support"}),"Support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please check our ",(0,n.kt)("a",p({parentName:"li"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/"}),"quick-start guides")," first."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",p({parentName:"li"},{href:"https://truecharts.org"}),"Wiki")),(0,n.kt)("li",{parentName:"ul"},"Check our ",(0,n.kt)("a",p({parentName:"li"},{href:"https://discord.gg/tVsPTHWTtr"}),"Discord")),(0,n.kt)("li",{parentName:"ul"},"Open a ",(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"issue"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}k.isMDXComponent=!0}}]);