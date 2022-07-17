"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96129],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70750:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e};const d={},h="radarr",m={unversionedId:"charts/stable/radarr/index",id:"charts/stable/radarr/index",title:"radarr",description:"A fork of Sonarr to work with movies \xe0 la Couchpotato",source:"@site/docs/charts/stable/radarr/index.md",sourceDirName:"charts/stable/radarr",slug:"/charts/stable/radarr/",permalink:"/docs/charts/stable/radarr/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/radarr/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/quassel-web/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/radarr/CHANGELOG"}},f={},g=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Upgrading, Rolling Back and Uninstalling the Chart",id:"upgrading-rolling-back-and-uninstalling-the-chart",level:2},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:5},{value:"Support",id:"support",level:2}],k={toc:g};function b(e){var t,r=e,{components:n}=r,c=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=p(p({},k),c),o(t,l({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"radarr"}),"radarr"),(0,a.kt)("p",null,"A fork of Sonarr to work with movies \xe0 la Couchpotato"),(0,a.kt)("p",null,"TrueCharts are designed to be installed as TrueNAS SCALE app only. We can not guarantee this charts works as a stand-alone helm installation.\n",(0,a.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,a.kt)("a",p({parentName:"strong"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"here"))),(0,a.kt)("h2",p({},{id:"source-code"}),"Source Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/Radarr/Radarr"}),"https://github.com/Radarr/Radarr"))),(0,a.kt)("h2",p({},{id:"requirements"}),"Requirements"),(0,a.kt)("p",null,"Kubernetes: ",(0,a.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,a.kt)("h2",p({},{id:"dependencies"}),"Dependencies"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Repository"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("a",p({parentName:"td"},{href:"https://library-charts.truecharts.org"}),"https://library-charts.truecharts.org")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"common"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"10.4.4")))),(0,a.kt)("h2",p({},{id:"installing-the-chart"}),"Installing the Chart"),(0,a.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,a.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/"}),"Quick-Start Guide"),"."),(0,a.kt)("h2",p({},{id:"upgrading-rolling-back-and-uninstalling-the-chart"}),"Upgrading, Rolling Back and Uninstalling the Chart"),(0,a.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,a.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"}),"Quick-Start Guide"),"."),(0,a.kt)("h5",p({},{id:"connecting-to-other-apps"}),"Connecting to other apps"),(0,a.kt)("p",null,"If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our ",(0,a.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/06-linking-apps/"}),"Linking Apps Internally")," quick-start guide."),(0,a.kt)("h2",p({},{id:"support"}),"Support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please check our ",(0,a.kt)("a",p({parentName:"li"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/"}),"quick-start guides")," first."),(0,a.kt)("li",{parentName:"ul"},"See the ",(0,a.kt)("a",p({parentName:"li"},{href:"https://truecharts.org"}),"Wiki")),(0,a.kt)("li",{parentName:"ul"},"Check our ",(0,a.kt)("a",p({parentName:"li"},{href:"https://discord.gg/tVsPTHWTtr"}),"Discord")),(0,a.kt)("li",{parentName:"ul"},"Open a ",(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"issue"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}b.isMDXComponent=!0}}]);