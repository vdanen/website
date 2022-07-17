"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[15047],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return C},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={},f="Installation Notes",m={unversionedId:"charts/stable/jdownloader2/installation_notes",id:"charts/stable/jdownloader2/installation_notes",title:"Installation Notes",description:"- If you enable Ingress for this app, you need to have SECURE_CONNECTION set to false and Port Type set to HTTP, otherwise you may run into errors for Too many redirects.",source:"@site/docs/charts/stable/jdownloader2/installation_notes.md",sourceDirName:"charts/stable/jdownloader2",slug:"/charts/stable/jdownloader2/installation_notes",permalink:"/docs/charts/stable/jdownloader2/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/jdownloader2/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/jdownloader2/CHANGELOG"},next:{title:"jellyfin",permalink:"/docs/charts/stable/jellyfin/"}},y={},b=[],N={toc:b};function C(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},N),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"installation-notes"}),"Installation Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you enable ",(0,r.kt)("inlineCode",{parentName:"li"},"Ingress")," for this app, you need to have ",(0,r.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Port Type")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTP"),", otherwise you may run into errors for ",(0,r.kt)("inlineCode",{parentName:"li"},"Too many redirects"),"."),(0,r.kt)("li",{parentName:"ul"},"You can't enable ",(0,r.kt)("inlineCode",{parentName:"li"},"Ingress")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"VNC")," If you want to use ",(0,r.kt)("inlineCode",{parentName:"li"},"VNC"),", you must set this service to ",(0,r.kt)("inlineCode",{parentName:"li"},"Simple")," instead"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VNC")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," set ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", only works with very few clients. One of them is ",(0,r.kt)("inlineCode",{parentName:"li"},"SSVNC"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," affects both ",(0,r.kt)("inlineCode",{parentName:"li"},"WebUI")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"VNC"),".")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are passing through devices such as ",(0,r.kt)("inlineCode",{parentName:"li"},"Optical Drives"),", you have to Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Container Security Settings")," and set ",(0,r.kt)("inlineCode",{parentName:"li"},"PUID")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),".")))}C.isMDXComponent=!0}}]);