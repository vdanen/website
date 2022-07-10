"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8354],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=u(n),p=r,d=f["".concat(s,".").concat(p)]||f[p]||m[p]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6638:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={},s="Values.yaml Files",u={unversionedId:"manual/development/values-yaml",id:"manual/development/values-yaml",title:"Values.yaml Files",description:"Values.yaml files generally always contain configuration setting for Helm charts, TrueCharts is no different.",source:"@site/docs/manual/development/values-yaml.md",sourceDirName:"manual/development",slug:"/manual/development/values-yaml",permalink:"/fa/docs/manual/development/values-yaml",draft:!1,editUrl:"https://github.com/truecharts/pub/docs/manual/development/values-yaml.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Unit tests",permalink:"/fa/docs/manual/development/unit-tests"},next:{title:"Migration between versions",permalink:"/fa/docs/manual/migration"}},c={},m=[{value:"The Files",id:"the-files",level:3},{value:"values.yaml",id:"valuesyaml",level:5},{value:"ix_values.yaml",id:"ix_valuesyaml",level:5}],f={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"valuesyaml-files"},"Values.yaml Files"),(0,l.kt)("p",null,"Values.yaml files generally always contain configuration setting for Helm charts, TrueCharts is no different.\nHowever, we have multiple different values.yaml files, with different goals. Because TrueNAS SCALE just works slightly differently from standard Helm Charts"),(0,l.kt)("h3",{id:"the-files"},"The Files"),(0,l.kt)("h5",{id:"valuesyaml"},"values.yaml"),(0,l.kt)("p",null,"This file contains the default config when running the App using stock helm (not SCALE). It also gets used for the testingsuite."),(0,l.kt)("h5",{id:"ix_valuesyaml"},"ix_values.yaml"),(0,l.kt)("p",null,"This file contains config values that are not included in questions.yaml, but should be copied into the resulting configuration anyway. It's mostly used to ensure setting can be changed by the maintainer with every update, such as versions, which is not possible when setting things as defaults inside questions.yaml"),(0,l.kt)("p",null,"This file is, however, not very well checked by validation and CI. Use it when you absolutely have to."),(0,l.kt)("p",null,"One important setting in ix_values.yaml is the optional setting: ",(0,l.kt)("inlineCode",{parentName:"p"},"startAsRoot: true"),"\nThis setting is a compatibility toggle for containers that need to be started by root, often these containers use PUID and PGID to descalate (lower) away from root but require it to start."),(0,l.kt)("p",null,"A minimal example ix_values.yaml would be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'##\n# This file contains Values.yaml content that gets added to the output of questions.yaml\n# It\'s ONLY meant for content that the user is NOT expected to change.\n# Example: Everything under "image" is not included in questions.yaml but is included here.\n##\n\nimage:\n  repository: jacobalberty/unifi\n  tag: 6.0.45\n  pullPolicy: IfNotPresent\n\n\n##\n# Most other defaults are set in questions.yaml\n# For other options please refer to the wiki, default_values.yaml or the common library chart\n##\n\n')))}p.isMDXComponent=!0}}]);