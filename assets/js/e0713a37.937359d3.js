"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[94481],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||l;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},86198:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return h},metadata:function(){return m},toc:function(){return f}});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&u(e,r,t[r]);return e};const h={},d="clamav",m={unversionedId:"charts/stable/clamav/index",id:"charts/stable/clamav/index",title:"clamav",description:"ClamAV\xae is an open source antivirus engine for detecting trojans, viruses, malware & other malicious threats.",source:"@site/docs/charts/stable/clamav/index.md",sourceDirName:"charts/stable/clamav",slug:"/charts/stable/clamav/",permalink:"/docs/charts/stable/clamav/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/clamav/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/chevereto/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/clamav/CHANGELOG"}},g={},f=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Upgrading, Rolling Back and Uninstalling the Chart",id:"upgrading-rolling-back-and-uninstalling-the-chart",level:2},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:5},{value:"Support",id:"support",level:2}],k={toc:f};function b(e){var t,r=e,{components:n}=r,u=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=p(p({},k),u),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"clamav"}),"clamav"),(0,a.kt)("p",null,"ClamAV\xae is an open source antivirus engine for detecting trojans, viruses, malware & other malicious threats."),(0,a.kt)("p",null,"TrueCharts are designed to be installed as TrueNAS SCALE app only. We can not guarantee this charts works as a stand-alone helm installation.\n",(0,a.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,a.kt)("a",p({parentName:"strong"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"here"))),(0,a.kt)("h2",p({},{id:"source-code"}),"Source Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/Cisco-Talos/clamav"}),"https://github.com/Cisco-Talos/clamav")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://hub.docker.com/r/clamav/clamav"}),"https://hub.docker.com/r/clamav/clamav")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://docs.clamav.net/"}),"https://docs.clamav.net/"))),(0,a.kt)("h2",p({},{id:"requirements"}),"Requirements"),(0,a.kt)("p",null,"Kubernetes: ",(0,a.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,a.kt)("h2",p({},{id:"dependencies"}),"Dependencies"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Repository"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("a",p({parentName:"td"},{href:"https://library-charts.truecharts.org"}),"https://library-charts.truecharts.org")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"common"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"10.4.4")))),(0,a.kt)("h2",p({},{id:"installing-the-chart"}),"Installing the Chart"),(0,a.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,a.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/"}),"Quick-Start Guide"),"."),(0,a.kt)("h2",p({},{id:"upgrading-rolling-back-and-uninstalling-the-chart"}),"Upgrading, Rolling Back and Uninstalling the Chart"),(0,a.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,a.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"}),"Quick-Start Guide"),"."),(0,a.kt)("h5",p({},{id:"connecting-to-other-apps"}),"Connecting to other apps"),(0,a.kt)("p",null,"If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our ",(0,a.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/06-linking-apps/"}),"Linking Apps Internally")," quick-start guide."),(0,a.kt)("h2",p({},{id:"support"}),"Support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please check our ",(0,a.kt)("a",p({parentName:"li"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/"}),"quick-start guides")," first."),(0,a.kt)("li",{parentName:"ul"},"See the ",(0,a.kt)("a",p({parentName:"li"},{href:"https://truecharts.org"}),"Wiki")),(0,a.kt)("li",{parentName:"ul"},"Check our ",(0,a.kt)("a",p({parentName:"li"},{href:"https://discord.gg/tVsPTHWTtr"}),"Discord")),(0,a.kt)("li",{parentName:"ul"},"Open a ",(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"issue"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}b.isMDXComponent=!0}}]);