"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[527],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6948:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={},p="Validation",u={unversionedId:"manual/SCALE Apps/indepth/validation",id:"manual/SCALE Apps/indepth/validation",title:"Validation",description:"Validation makes sure that your input is in the desired format, so the application can parse it without problems.",source:"@site/docs/manual/SCALE Apps/indepth/validation.md",sourceDirName:"manual/SCALE Apps/indepth",slug:"/manual/SCALE Apps/indepth/validation",permalink:"/fr/docs/manual/SCALE Apps/indepth/validation",draft:!1,editUrl:"https://github.com/truecharts/pub/docs/manual/SCALE Apps/indepth/validation.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Storage",permalink:"/fr/docs/manual/SCALE Apps/indepth/storage"},next:{title:"Support Policy",permalink:"/fr/docs/manual/SUPPORT"}},s={},c=[{value:"All Apps",id:"all-apps",level:3},{value:"Resources and Devices",id:"resources-and-devices",level:4},{value:"Paths",id:"paths",level:4},{value:"You can try live here",id:"you-can-try-live-here",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validation"},"Validation"),(0,i.kt)("p",null,"Validation makes sure that your input is in the desired format, so the application can parse it without problems.\nBelow you can find more info about which fields have the mentioned validation and what formats are accepted."),(0,i.kt)("h3",{id:"all-apps"},"All Apps"),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"resources-and-devices"},"Resources and Devices"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"CPU")),"\nAccepted formats are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plain integer (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),") - This means 1 hyperthread"),(0,i.kt)("li",{parentName:"ul"},"Float (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"0.5"),") - This means half hyperthread"),(0,i.kt)("li",{parentName:"ul"},"Milicpu (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"500m"),") This means also half hyperthread")),(0,i.kt)("p",null,"Regex used to match those: ",(0,i.kt)("inlineCode",{parentName:"p"},"^(?!^0(\\.0|m|)$)([0-9]+)(\\.[0-9]|m?)$"),"\nYou can try live ",(0,i.kt)("a",{parentName:"p",href:"https://regex101.com/r/WxComc/1"},"here"),"\nMore detailed info can be found ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu"},"here")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Memory RAM")),"\nAccepted formats are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Suffixed with E, P, T, G, M, K (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"5G"),") - This means 5Gigabyte of RAM"),(0,i.kt)("li",{parentName:"ul"},"Suffixed with Ei, Pi, Ti, Gi, Mi, Ki (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"5Gi"),") - This means 5Gibibyte of RAM"),(0,i.kt)("li",{parentName:"ul"},"Plain integer (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"134217728"),") - This means 128Megabyte of RAM"),(0,i.kt)("li",{parentName:"ul"},"As an exponent format (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"134e6"),") This means ~128Megabyte of RAM")),(0,i.kt)("p",null,"Regex uesd to match those: ",(0,i.kt)("inlineCode",{parentName:"p"},"^(?!^0(e[0-9]|[EPTGMK]i?|)$)([0-9]+)(|[EPTGMK]i?|e[0-9]+)$"),"\nYou can try live ",(0,i.kt)("a",{parentName:"p",href:"https://regex101.com/r/LyDc6u/1"},"here"),"\nMore detailed info can be found ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory"},"here")),(0,i.kt)("h4",{id:"paths"},"Paths"),(0,i.kt)("p",null,"Accepted formats are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Paths prefixed with ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),", without whitespace characters on begin or end of each segment (eg. ",(0,i.kt)("inlineCode",{parentName:"li"},"/media"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/media/shows"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"/media/movies/"),")")),(0,i.kt)("p",null,"Accepted characters are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a-z"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"A-Z")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0-9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"."),", ",(0,i.kt)("inlineCode",{parentName:"li"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"}," ")," (Whitespace, Not on begin or end)")),(0,i.kt)("p",null,"Regex used to match those: ",(0,i.kt)("inlineCode",{parentName:"p"},"^\\/([a-zA-Z0-9._-]+(\\s?[a-zA-Z0-9._-]+|\\/?))+$")),(0,i.kt)("h2",{id:"you-can-try-live-here"},"You can try live ",(0,i.kt)("a",{parentName:"h2",href:"https://regex101.com/r/WjSpXg/1"},"here")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you find a field that you think it needs validation, please open an issue on github")))}m.isMDXComponent=!0}}]);