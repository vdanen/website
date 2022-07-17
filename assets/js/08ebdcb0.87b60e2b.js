"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[82572],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6090:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return h}});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&u(e,r,t[r]);return e};const d={},m="Storage",g={unversionedId:"manual/SCALE Apps/indepth/storage",id:"manual/SCALE Apps/indepth/storage",title:"Storage",description:"TrueCharts uses multiple different storage systems:",source:"@site/docs/manual/SCALE Apps/indepth/storage.md",sourceDirName:"manual/SCALE Apps/indepth",slug:"/manual/SCALE Apps/indepth/storage",permalink:"/docs/manual/SCALE Apps/indepth/storage",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/indepth/storage.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Networking",permalink:"/docs/manual/SCALE Apps/indepth/networking"},next:{title:"Validation",permalink:"/docs/manual/SCALE Apps/indepth/validation"}},f={},h=[{value:"Storage types",id:"storage-types",level:2},{value:"Integrated Persistent Storage",id:"integrated-persistent-storage",level:2},{value:"Custom app storage aka &quot;hostPathMounts&quot;",id:"custom-app-storage-aka-hostpathmounts",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Integrated Persistent Storage",id:"integrated-persistent-storage-1",level:3},{value:"Custom app storage aka &quot;hostPathMounts&quot;",id:"custom-app-storage-aka-hostpathmounts-1",level:3}],y={toc:h};function b(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},y),u),a(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"storage"}),"Storage"),(0,n.kt)("p",null,"TrueCharts uses multiple different storage systems:"),(0,n.kt)("h2",c({},{id:"storage-types"}),"Storage types"),(0,n.kt)("p",null,"Storage is currently separated into two types:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Integrated Persistent Storage (PVC)"),(0,n.kt)("li",{parentName:"ol"},'Custom Storage aka "hostPathMounts"')),(0,n.kt)("h2",c({},{id:"integrated-persistent-storage"}),"Integrated Persistent Storage"),(0,n.kt)("p",null,"Integrated Persistent Storage is based around Kubernetes PVC's to integrate as closely as possible into TrueNAS SCALE. They are also heavily preconfigured to work as optimal as possible and provide options for future expansion such as NFS and Gluster options being added.\nThese storage options inherently are not well suited to being shared with multiple applications."),(0,n.kt)("p",null,"This storage is integrated into TrueNAS SCALE and completely supports reverting upgrades. Thats why this is the default (and only actually supported!) way of storing App configuration files."),(0,n.kt)("h2",c({},{id:"custom-app-storage-aka-hostpathmounts"}),'Custom app storage aka "hostPathMounts"'),(0,n.kt)("p",null,"Besides the earlier mentioned Integrated Persistent Storage, we also provide the option to mount as many host folders as you want."),(0,n.kt)("p",null,"hostPathMounts are actually quite simple:\nIt mounts a directory from your TrueNAS SCALE system, directly to a directory inside the App you're installing."),(0,n.kt)("h2",c({},{id:"permissions"}),"Permissions"),(0,n.kt)("p",null,"Permission settings are rather important and are often something that causes issues for users.\nFor both Integrated Persistent Storage and Custom storage, we offer special options to automatically set permissions to coincide with your container."),(0,n.kt)("h3",c({},{id:"integrated-persistent-storage-1"}),"Integrated Persistent Storage"),(0,n.kt)("p",null,"These get automatically set to be owned by: ",(0,n.kt)("strong",{parentName:"p"},"PGID")),(0,n.kt)("h3",c({},{id:"custom-app-storage-aka-hostpathmounts-1"}),'Custom app storage aka "hostPathMounts"'),(0,n.kt)("p",null,"We offer an optional automatic set the permissions according to App App fsGroup or PUID."),(0,n.kt)("p",null,"Setting permissions automatically means we ",(0,n.kt)("inlineCode",{parentName:"p"},"chown")," the folder and all folder within it, to a user and group of your choice.\nHowever, we only do so when installing or updating an app."),(0,n.kt)("p",null,"Please be aware that automatically setting ownership/permissions, does mean it overrides your current CHOWN and CHMOD settings. This could break things and yes, it will destroy your system if used carelessly. It's also not wise to enable the automatic permissions on mounted shares from an external system.\nThese permission get based on the user and group you enter in the App configuration dialog and default to ",(0,n.kt)("inlineCode",{parentName:"p"},"568")," (the SCALE default Apps user)."))}b.isMDXComponent=!0}}]);