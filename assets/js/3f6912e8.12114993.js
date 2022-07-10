"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6448],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,g=d["".concat(u,".").concat(h)]||d[h]||c[h]||i;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3875:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),l=["components"],o={},u="04 - Upgrading, Rollback and Delete",s={unversionedId:"manual/SCALE Apps/Quick-Start Guides/Upgrade-rollback-delete-an-App",id:"manual/SCALE Apps/Quick-Start Guides/Upgrade-rollback-delete-an-App",title:"04 - Upgrading, Rollback and Delete",description:"With TrueCharts we always push new versions of an App for any change. Even for the containers.",source:"@site/docs/manual/SCALE Apps/Quick-Start Guides/04-Upgrade-rollback-delete-an-App.md",sourceDirName:"manual/SCALE Apps/Quick-Start Guides",slug:"/manual/SCALE Apps/Quick-Start Guides/Upgrade-rollback-delete-an-App",permalink:"/docs/manual/SCALE Apps/Quick-Start Guides/Upgrade-rollback-delete-an-App",draft:!1,editUrl:"https://github.com/truecharts/pub/docs/manual/SCALE Apps/Quick-Start Guides/04-Upgrade-rollback-delete-an-App.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"manualSidebar",previous:{title:"03 - Editing Apps",permalink:"/docs/manual/SCALE Apps/Quick-Start Guides/Edit-an-App"},next:{title:"05 - Adding additional storage",permalink:"/docs/manual/SCALE Apps/Quick-Start Guides/add-storage"}},p={},c=[{value:"Requirements",id:"requirements",level:5},{value:"Upgrading",id:"upgrading",level:2},{value:"Upgrading the App  using the GUI",id:"upgrading-the-app--using-the-gui",level:5},{value:"Rollback",id:"rollback",level:2},{value:"Reverting using the GUI",id:"reverting-using-the-gui",level:3},{value:"Reverting using the CLI",id:"reverting-using-the-cli",level:3},{value:"Finding the last installed version",id:"finding-the-last-installed-version",level:3},{value:"Delete",id:"delete",level:2},{value:"Delete using the GUI",id:"delete-using-the-gui",level:3},{value:"Delete using the CLI",id:"delete-using-the-cli",level:3},{value:"Video Guide",id:"video-guide",level:4}],d={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"04---upgrading-rollback-and-delete"},"04 - Upgrading, Rollback and Delete"),(0,i.kt)("p",null,"With TrueCharts we always push new versions of an App for any change. Even for the containers.\nThis ensures upgrading the App always gives you the Latest-and-Greatest from TrueCharts"),(0,i.kt)("h5",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure your storage-pool is created and working"),(0,i.kt)("li",{parentName:"ul"},'Make Make sure you selected your storage-pool when you first opened the "Apps" interface, if not please refer to quick-start guide ',(0,i.kt)("inlineCode",{parentName:"li"},"01 - First time Apps setup")),(0,i.kt)("li",{parentName:"ul"},"Make sure you have a working internet connection and can reach github and truecharts.org from the host system."),(0,i.kt)("li",{parentName:"ul"},"Make sure you already added the TrueCharts catalog from guide 02"),(0,i.kt)("li",{parentName:"ul"},"Make sure your App is installed and, preferably, working")),(0,i.kt)("h2",{id:"upgrading"},"Upgrading"),(0,i.kt)("h5",{id:"upgrading-the-app--using-the-gui"},"Upgrading the App  using the GUI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Installed Applications")),(0,i.kt)("li",{parentName:"ul"},"Make sure your App reports that an Upgrade is available on the App Card."),(0,i.kt)("li",{parentName:"ul"},"Make note of the current version, you might want to revert to this version in the future."),(0,i.kt)("li",{parentName:"ul"},"click the menu button on the right side of the App card"),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Upgrade")),(0,i.kt)("li",{parentName:"ul"},"Confirm your wish to upgrade")),(0,i.kt)("p",null,"The App will then go through a process of backing up(!) and upgrading. If the process fails, your changes will not be submitted and the edit will be reverted.\nAfter the process popup disappears, it might take a few minutes to actually deploy your newly upgraded App, due to some things that happen in the background."),(0,i.kt)("h2",{id:"rollback"},"Rollback"),(0,i.kt)("h3",{id:"reverting-using-the-gui"},"Reverting using the GUI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the top 3 dots on your application card"),(0,i.kt)("li",{parentName:"ol"},'Select "Roll Back"'),(0,i.kt)("li",{parentName:"ol"},'Under "Version" - Click the dropdown and select which version you would like to rollback to'),(0,i.kt)("li",{parentName:"ol"},'Check the "Roll Back Snapshot" box'),(0,i.kt)("li",{parentName:"ol"},'Select "Roll Back"')),(0,i.kt)("h3",{id:"reverting-using-the-cli"},"Reverting using the CLI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"enter cli to enter the SCALE command line interface"),(0,i.kt)("li",{parentName:"ol"},"enter app chart_release rollback\nIt should give you this screen:",(0,i.kt)("a",{href:"https://truecharts.org/_static/img/rollback/cli-rollback1.png"},(0,i.kt)("img",{src:"https://truecharts.org/_static/img/rollback/cli-rollback1.png",width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Enter the release name and item_version like this:",(0,i.kt)("a",{href:"https://truecharts.org/_static/img/rollback/cli-rollback2.png"},(0,i.kt)("img",{src:"https://truecharts.org/_static/img/rollback/cli-rollback2.png",width:"100%"})),"(be sure to remove the # before the releasename)"),(0,i.kt)("li",{parentName:"ol"},"Click save then click quit\nIt should show something like this, confirming the rollback:",(0,i.kt)("a",{href:"https://truecharts.org/_static/img/rollback/cli-rollback3.png"},(0,i.kt)("img",{src:"https://truecharts.org/_static/img/rollback/cli-rollback3.png",width:"100%"})))),(0,i.kt)("h3",{id:"finding-the-last-installed-version"},"Finding the last installed version"),(0,i.kt)("p",null,"Sadly enough, SCALE does not lists which versions are available to roll-back to, but does required a version to be entered.\nThere is a short walk-through to get the versioning history for the App in question:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"export KUBECONFIG=/etc/rancher/k3s/k3s.yaml")),(0,i.kt)("li",{parentName:"ol"},"run  ",(0,i.kt)("inlineCode",{parentName:"li"},'helm history jackett -n ix-jackett where "jackett"')," should be replaced with the name of the App that broke your UI\nYou'll see this:",(0,i.kt)("a",{href:"https://truecharts.org/_static/img/rollback/history.png"},(0,i.kt)("img",{src:"https://truecharts.org/_static/img/rollback/history.png",width:"100%"})),'Take note of the "Chart" column, it lists the version numbers you can enter in the rollback interface, prefixed by the App Name. Of coarse only enter the version number in the GUI or CLI, not the name')),(0,i.kt)("h2",{id:"delete"},"Delete"),(0,i.kt)("h3",{id:"delete-using-the-gui"},"Delete using the GUI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the top 3 dots on your application card"),(0,i.kt)("li",{parentName:"ol"},'Select "Delete"'),(0,i.kt)("li",{parentName:"ol"},'Check the "Confirm" box'),(0,i.kt)("li",{parentName:"ol"},'Select "Continue" ')),(0,i.kt)("h3",{id:"delete-using-the-cli"},"Delete using the CLI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter Truenas SCALE terminal via the GUI or SSH"),(0,i.kt)("li",{parentName:"ol"},"Type the following command",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cli -c 'app chart_release delete release_name=NAME_OF_APPLICATION'")),(0,i.kt)("li",{parentName:"ul"},"ex: ",(0,i.kt)("inlineCode",{parentName:"li"},"cli -c 'app chart_release delete release_name=traefik'"))))),(0,i.kt)("h4",{id:"video-guide"},"Video Guide"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.youtube.com/embed/ONbMhQJPQwc",alt:"type:video"})))}h.isMDXComponent=!0}}]);