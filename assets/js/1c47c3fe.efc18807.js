"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[90838],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||l;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},72683:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return h},metadata:function(){return d},toc:function(){return g}});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e};const h={},m="ml-workspace",d={unversionedId:"charts/stable/ml-workspace/index",id:"charts/stable/ml-workspace/index",title:"ml-workspace",description:"All-in-one web-based development environment for machine learning",source:"@site/docs/charts/stable/ml-workspace/index.md",sourceDirName:"charts/stable/ml-workspace",slug:"/charts/stable/ml-workspace/",permalink:"/docs/charts/stable/ml-workspace/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/ml-workspace/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/mkvtoolnix/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/stable/ml-workspace/CHANGELOG"}},k={},g=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Upgrading, Rolling Back and Uninstalling the Chart",id:"upgrading-rolling-back-and-uninstalling-the-chart",level:2},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:5},{value:"Support",id:"support",level:2}],f={toc:g};function b(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},f),p),l(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"ml-workspace"}),"ml-workspace"),(0,n.kt)("p",null,"All-in-one web-based development environment for machine learning"),(0,n.kt)("p",null,"TrueCharts are designed to be installed as TrueNAS SCALE app only. We can not guarantee this charts works as a stand-alone helm installation.\n",(0,n.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,n.kt)("a",u({parentName:"strong"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"here"))),(0,n.kt)("h2",u({},{id:"source-code"}),"Source Code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/ml-tooling/ml-workspace"}),"https://github.com/ml-tooling/ml-workspace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://hub.docker.com/r/mltooling/ml-workspace"}),"https://hub.docker.com/r/mltooling/ml-workspace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://hub.docker.com/r/mltooling/ml-workspace-gpu"}),"https://hub.docker.com/r/mltooling/ml-workspace-gpu")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://hub.docker.com/r/mltooling/ml-workspace-light"}),"https://hub.docker.com/r/mltooling/ml-workspace-light")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://hub.docker.com/r/mltooling/ml-workspace-minimal"}),"https://hub.docker.com/r/mltooling/ml-workspace-minimal"))),(0,n.kt)("h2",u({},{id:"requirements"}),"Requirements"),(0,n.kt)("p",null,"Kubernetes: ",(0,n.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,n.kt)("h2",u({},{id:"dependencies"}),"Dependencies"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Repository"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("a",u({parentName:"td"},{href:"https://library-charts.truecharts.org"}),"https://library-charts.truecharts.org")),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"common"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"10.4.4")))),(0,n.kt)("h2",u({},{id:"installing-the-chart"}),"Installing the Chart"),(0,n.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,n.kt)("a",u({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/"}),"Quick-Start Guide"),"."),(0,n.kt)("h2",u({},{id:"upgrading-rolling-back-and-uninstalling-the-chart"}),"Upgrading, Rolling Back and Uninstalling the Chart"),(0,n.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,n.kt)("a",u({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"}),"Quick-Start Guide"),"."),(0,n.kt)("h5",u({},{id:"connecting-to-other-apps"}),"Connecting to other apps"),(0,n.kt)("p",null,"If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our ",(0,n.kt)("a",u({parentName:"p"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/06-linking-apps/"}),"Linking Apps Internally")," quick-start guide."),(0,n.kt)("h2",u({},{id:"support"}),"Support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please check our ",(0,n.kt)("a",u({parentName:"li"},{href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/"}),"quick-start guides")," first."),(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",u({parentName:"li"},{href:"https://truecharts.org"}),"Wiki")),(0,n.kt)("li",{parentName:"ul"},"Check our ",(0,n.kt)("a",u({parentName:"li"},{href:"https://discord.gg/tVsPTHWTtr"}),"Discord")),(0,n.kt)("li",{parentName:"ul"},"Open a ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/truecharts/apps/issues/new/choose"}),"issue"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}b.isMDXComponent=!0}}]);