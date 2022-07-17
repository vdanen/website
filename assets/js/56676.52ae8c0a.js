"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[56676],{67911:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(67294),n=a(34334),l=a(9809),o=a(89078),i=a(39130),c=a(33084),s="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",p="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function g({sidebar:e}){return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.Z)(s,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,n.Z)(u,"clean-list")},e.items.map((e=>r.createElement("li",{key:e.permalink,className:d},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:f},e.title)))))))}var b=a(15043);function v({sidebar:e}){return r.createElement("ul",{className:"menu__list"},e.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function h(e){return r.createElement(b.Zo,{component:v,props:e})}function E({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(h,{sidebar:e}):r.createElement(g,{sidebar:e}):null}var P=Object.defineProperty,y=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,O=(e,t,a)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function Z(e){const t=e,{sidebar:a,toc:o,children:i}=t,c=((e,t)=>{var a={};for(var r in e)N.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&y)for(var r of y(e))t.indexOf(r)<0&&_.call(e,r)&&(a[r]=e[r]);return a})(t,["sidebar","toc","children"]),s=a&&a.items.length>0;return r.createElement(l.Z,((e,t)=>{for(var a in t||(t={}))N.call(t,a)&&O(e,a,t[a]);if(y)for(var a of y(t))_.call(t,a)&&O(e,a,t[a]);return e})({},c),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(E,{sidebar:a}),r.createElement("main",{className:(0,n.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),o&&r.createElement("div",{className:"col col--2"},o))))}},22367:function(e,t,a){a.d(t,{Z:function(){return re}});var r=a(67294),n=a(34334),l=a(28973),o=a(25026);function i({children:e,className:t}){var a;const{frontMatter:n,assets:i}=(0,l.C)(),{withBaseUrl:c}=(0,o.C)(),s=null!=(a=i.image)?a:n.image;return r.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&r.createElement("meta",{itemProp:"image",content:c(s,{absolute:!0})}),e)}var c=a(39130),s="title_f1Hy";function m({className:e}){const{metadata:t,isBlogPostPage:a}=(0,l.C)(),{permalink:o,title:i}=t,m=a?"h1":"h2";return r.createElement(m,{className:(0,n.Z)(s,e),itemProp:"headline"},a?i:r.createElement(c.Z,{itemProp:"url",to:o},i))}var u=a(33084),d=a(11368);const p=["zero","one","two","few","many","other"];function f(e){return p.filter((t=>e.includes(t)))}const g={locale:"en",pluralForms:f(["one","other"]),select:e=>1===e?"one":"other"};function b(){const{i18n:{currentLocale:e}}=(0,d.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:f(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),g}}),[e])}function v(){const e=b();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}var h="container_mt6G";function E({readingTime:e}){const t=function(){const{selectMessage:e}=v();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return r.createElement(r.Fragment,null,t(e))}function P({date:e,formattedDate:t}){return r.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function y(){return r.createElement(r.Fragment,null," \xb7 ")}function N({className:e}){const{metadata:t}=(0,l.C)(),{date:a,formattedDate:o,readingTime:i}=t;return r.createElement("div",{className:(0,n.Z)(h,"margin-vert--md",e)},r.createElement(P,{date:a,formattedDate:o}),void 0!==i&&r.createElement(r.Fragment,null,r.createElement(y,null),r.createElement(E,{readingTime:i})))}var _=Object.defineProperty,O=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,w=(e,t,a)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function j(e){return e.href?r.createElement(c.Z,((e,t)=>{for(var a in t||(t={}))Z.call(t,a)&&w(e,a,t[a]);if(O)for(var a of O(t))k.call(t,a)&&w(e,a,t[a]);return e})({},e)):r.createElement(r.Fragment,null,e.children)}function T({author:e,className:t}){const{name:a,title:l,url:o,imageURL:i,email:c}=e,s=o||c&&`mailto:${c}`||void 0;return r.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",t)},i&&r.createElement(j,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(j,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var C="authorCol_Hf19",x="imageOnlyAuthorRow_pa_O",I="imageOnlyAuthorCol_G86a",B=Object.defineProperty,F=Object.defineProperties,L=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,U=(e,t,a)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,A=(e,t)=>{for(var a in t||(t={}))R.call(t,a)&&U(e,a,t[a]);if(M)for(var a of M(t))S.call(t,a)&&U(e,a,t[a]);return e};function D({className:e}){const{metadata:{authors:t},assets:a}=(0,l.C)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",o?x:"row",e)},t.map(((e,t)=>{var l,i,c;return r.createElement("div",{className:(0,n.Z)(!o&&"col col--6",o?I:C),key:t},r.createElement(T,{author:(i=A({},e),c={imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL},F(i,L(c)))}))})))}function $(){return r.createElement("header",null,r.createElement(m,null),r.createElement(N,null),r.createElement(D,null))}var z=a(67023),H=a(47918);function G({children:e,className:t}){const{isBlogPostPage:a}=(0,l.C)();return r.createElement("div",{id:a?z.blogPostContainerID:void 0,className:(0,n.Z)("markdown",t),itemProp:"articleBody"},r.createElement(H.Z,null,e))}var V=a(97090),q=a(2549),Q=Object.defineProperty,W=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,J=(e,t,a)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function K(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function ee(e){const t=e,{blogPostTitle:a}=t,n=((e,t)=>{var a={};for(var r in e)X.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&W)for(var r of W(e))t.indexOf(r)<0&&Y.call(e,r)&&(a[r]=e[r]);return a})(t,["blogPostTitle"]);return r.createElement(c.Z,((e,t)=>{for(var a in t||(t={}))X.call(t,a)&&J(e,a,t[a]);if(W)for(var a of W(t))Y.call(t,a)&&J(e,a,t[a]);return e})({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:a})},n),r.createElement(K,null))}var te="blogPostFooterDetailsFull_mRVl";function ae(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:a,title:o,editUrl:i,hasTruncateMarker:c}=e,s=!t&&c,m=a.length>0;return m||s||i?r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&te)},m&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":s})},r.createElement(q.Z,{tags:a})),t&&i&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(V.Z,{editUrl:i})),s&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":m})},r.createElement(ee,{blogPostTitle:o,to:e.permalink}))):null}function re({children:e,className:t}){const a=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return r.createElement(i,{className:(0,n.Z)(a,t)},r.createElement($,null),r.createElement(G,null,e),r.createElement(ae,null))}},97090:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(67294),n=a(33084),l=a(83631),o=a(34334),i="iconEdit_Z9Sw",c=Object.defineProperty,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p(e){var t=e,{className:a}=t,n=((e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(t,["className"]);return r.createElement("svg",((e,t)=>{for(var a in t||(t={}))m.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))u.call(t,a)&&d(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(i,a),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function f({editUrl:e}){return r.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},r.createElement(p,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},31961:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(67294),n=a(34334),l=a(39130);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return r.createElement(l.Z,{className:(0,n.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},a))}},2549:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(67294),n=a(34334),l=a(33084),o=a(39130),i="tag_zVej",c="tagRegular_sFm0",s="tagWithCount_h2kH";function m({permalink:e,label:t,count:a}){return r.createElement(o.Z,{href:e,className:(0,n.Z)(i,a?s:c)},t,a&&r.createElement("span",null,a))}var u="tags_jXut",d="tag_QGVx";function p({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(u,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:d},r.createElement(m,{label:e,permalink:t}))))))}},28973:function(e,t,a){a.d(t,{C:function(){return i},n:function(){return o}});var r=a(67294),n=a(21651);const l=r.createContext(null);function o({children:e,content:t,isBlogPostPage:a=!1}){const n=function({content:e,isBlogPostPage:t}){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:a});return r.createElement(l.Provider,{value:n},e)}function i(){const e=(0,r.useContext)(l);if(null===e)throw new n.i6("BlogPostProvider");return e}}}]);