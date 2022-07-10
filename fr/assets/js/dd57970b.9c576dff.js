"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[977],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1395:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),c=["components"],i={},u="Command Cheatsheet",l={unversionedId:"manual/development/handycommands",id:"manual/development/handycommands",title:"Command Cheatsheet",description:"These are some commands that are nice to keep track of:",source:"@site/docs/manual/development/handycommands.md",sourceDirName:"manual/development",slug:"/manual/development/handycommands",permalink:"/fr/docs/manual/development/handycommands",draft:!1,editUrl:"https://github.com/truecharts/pub/docs/manual/development/handycommands.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Contribution Guidelines",permalink:"/fr/docs/manual/development/contributing"},next:{title:"Ingress",permalink:"/fr/docs/manual/development/ingress"}},s={},m=[],p={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-cheatsheet"},"Command Cheatsheet"),(0,o.kt)("p",null,"These are some commands that are nice to keep track of:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"give execute permissions to all sh files:"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"find . -name '*.sh' | xargs git update-index --chmod=+x")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"list all used repositories in the catalog:"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"find . -name 'values.yaml' | xargs cat | grep \"repository\" | grep -v \"{\" | awk -F\":\" '{ print $2 }' | grep -v '^$' | sort --unique")))}d.isMDXComponent=!0}}]);