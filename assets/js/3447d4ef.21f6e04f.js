"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[28603],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,l(l({ref:e},u),{},{components:r})):a.createElement(m,l({ref:e},u))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83359:function(t,e,r){r.r(e),r.d(e,{assets:function(){return f},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,p=(t,e)=>{for(var r in e||(e={}))s.call(e,r)&&u(t,r,e[r]);if(i)for(var r of i(e))c.call(e,r)&&u(t,r,e[r]);return t};const d={},h="focalboard",m={unversionedId:"charts/stable/focalboard/index",id:"charts/stable/focalboard/index",title:"focalboard",description:"Focalboard is an open source, self-hosted alternative to Trello, Notion, and Asana.",source:"@site/docs/charts/stable/focalboard/index.md",sourceDirName:"charts/stable/focalboard",slug:"/charts/stable/focalboard/",permalink:"/docs/charts/stable/focalboard/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/focalboard/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/fluidd/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/focalboard/CHANGELOG"}},f={},b=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Upgrading, Rolling Back and Uninstalling the Chart",id:"upgrading-rolling-back-and-uninstalling-the-chart",level:2},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:5},{value:"Support",id:"support",level:2}],g={toc:b};function k(t){var e,r=t,{components:n}=r,u=((t,e)=>{var r={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&c.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=p(p({},g),u),o(e,l({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"focalboard"}),"focalboard"),(0,a.kt)("p",null,"Focalboard is an open source, self-hosted alternative to Trello, Notion, and Asana."),(0,a.kt)("p",null,"TrueCharts are designed to be installed as TrueNAS SCALE app only. We can not guarantee this charts works as a stand-alone helm installation.\n",(0,a.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,a.kt)("a",p({parentName:"strong"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"here"))),(0,a.kt)("h2",p({},{id:"source-code"}),"Source Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://www.focalboard.com/"}),"https://www.focalboard.com/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/mattermost/focalboard"}),"https://github.com/mattermost/focalboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/FlipEnergy/container-images/blob/main/focalboard"}),"https://github.com/FlipEnergy/container-images/blob/main/focalboard"))),(0,a.kt)("h2",p({},{id:"requirements"}),"Requirements"),(0,a.kt)("p",null,"Kubernetes: ",(0,a.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,a.kt)("h2",p({},{id:"dependencies"}),"Dependencies"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Repository"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("a",p({parentName:"td"},{href:"https://charts.truecharts.org/"}),"https://charts.truecharts.org/")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"postgresql"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"8.0.30")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("a",p({parentName:"td"},{href:"https://library-charts.truecharts.org"}),"https://library-charts.truecharts.org")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"common"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"10.4.4")))),(0,a.kt)("h2",p({},{id:"installing-the-chart"}),"Installing the Chart"),(0,a.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,a.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/"}),"Quick-Start Guide"),"."),(0,a.kt)("h2",p({},{id:"upgrading-rolling-back-and-uninstalling-the-chart"}),"Upgrading, Rolling Back and Uninstalling the Chart"),(0,a.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,a.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"}),"Quick-Start Guide"),"."),(0,a.kt)("h5",p({},{id:"connecting-to-other-apps"}),"Connecting to other apps"),(0,a.kt)("p",null,"If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our ",(0,a.kt)("a",p({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/06-linking-apps/"}),"Linking Apps Internally")," quick-start guide."),(0,a.kt)("h2",p({},{id:"support"}),"Support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please check our ",(0,a.kt)("a",p({parentName:"li"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/"}),"quick-start guides")," first."),(0,a.kt)("li",{parentName:"ul"},"See the ",(0,a.kt)("a",p({parentName:"li"},{href:"https://truecharts.org"}),"Wiki")),(0,a.kt)("li",{parentName:"ul"},"Check our ",(0,a.kt)("a",p({parentName:"li"},{href:"https://discord.gg/tVsPTHWTtr"}),"Discord")),(0,a.kt)("li",{parentName:"ul"},"Open a ",(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"issue"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}k.isMDXComponent=!0}}]);