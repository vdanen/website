"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[98589],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2053:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return f}});var a=n(3905),l=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e};const m={},d="15 - Accessing PVC Data",k={unversionedId:"manual/SCALE Apps/Quick-Start Guides/pvc-access",id:"manual/SCALE Apps/Quick-Start Guides/pvc-access",title:"15 - Accessing PVC Data",description:"Where are my application files?",source:"@site/docs/manual/SCALE Apps/Quick-Start Guides/15-pvc-access.md",sourceDirName:"manual/SCALE Apps/Quick-Start Guides",slug:"/manual/SCALE Apps/Quick-Start Guides/pvc-access",permalink:"/docs/manual/SCALE Apps/Quick-Start Guides/pvc-access",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/manual/SCALE Apps/Quick-Start Guides/15-pvc-access.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"manualSidebar",previous:{title:"14 - Backup and Restore",permalink:"/docs/manual/SCALE Apps/Quick-Start Guides/backup-restore"},next:{title:"How to: Create Certificates",permalink:"/docs/manual/SCALE Apps/indepth/certificates"}},h={},f=[{value:"Where are my application files?",id:"where-are-my-application-files",level:2},{value:"Mounting PVC Data",id:"mounting-pvc-data",level:2},{value:"Heavy_Script",id:"heavy_script",level:3},{value:"Manual Method - New User Guide",id:"manual-method---new-user-guide",level:3},{value:"Recommended Items",id:"recommended-items",level:3},{value:"Manual Method - Advanced User Guide",id:"manual-method---advanced-user-guide",level:3},{value:"To get the PVCNAME:",id:"to-get-the-pvcname",level:4},{value:"To get the PVCPATH:",id:"to-get-the-pvcpath",level:4},{value:"If you want to mount the PVC content:",id:"if-you-want-to-mount-the-pvc-content",level:4},{value:"and when you&#39;re done editing:",id:"and-when-youre-done-editing",level:4}],g={toc:f};function y(e){var t,l=e,{components:s}=l,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(l,["components"]);return(0,a.kt)("wrapper",(t=c(c({},g),m),r(t,o({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("h1",c({},{id:"15---accessing-pvc-data"}),"15 - Accessing PVC Data"),(0,a.kt)("h2",c({},{id:"where-are-my-application-files"}),"Where are my application files?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your files are held within the container"),(0,a.kt)("li",{parentName:"ul"},"They are not visible from your server's file structure without first mounting that PVC")),(0,a.kt)("h2",c({},{id:"mounting-pvc-data"}),"Mounting PVC Data"),(0,a.kt)("h3",c({},{id:"heavy_script"}),"Heavy_Script"),(0,a.kt)("p",null,"One option is to use Heavy_Script."),(0,a.kt)("p",null,"If you plan on mounting PVC storage more than just a couple of times this may be the best option for you."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The script will list all of your PVC information for each application"),(0,a.kt)("li",{parentName:"ol"},"Safely shut down your application before mounting"),(0,a.kt)("li",{parentName:"ol"},"Mount your PVC to /mnt/temporary/STORAGE-NAME")),(0,a.kt)("p",null,"The video will start at the mounting feature so you can see what it looks like."),(0,a.kt)("p",null,"Afterwards, if you wish to install it, follow the video guide starting at 15:52."),(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"https://youtu.be/uZp4x_Susgo?t=616",title:"Heavy_Script"}),(0,a.kt)("img",{alt:"Heavy_Script",src:n(68408).Z,width:"889",height:"500"}))),(0,a.kt)("h3",c({},{id:"manual-method---new-user-guide"}),"Manual Method - New User Guide"),(0,a.kt)("p",null,"Manually mounting PVC storage takes a little bit more time than the script method."),(0,a.kt)("p",null,"However, I know some users like to know exactly what commands they are running etc."),(0,a.kt)("h3",c({},{id:"recommended-items"}),"Recommended Items"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A terminal that allows copying and pasting"),(0,a.kt)("li",{parentName:"ul"},"An open notepad")),(0,a.kt)("p",null,"1","."," ",(0,a.kt)("strong",{parentName:"p"},"STOP the application you plan on mounting")),(0,a.kt)("p",null,"2","."," ",(0,a.kt)("strong",{parentName:"p"},"Run the following command to view your PVC data")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'k3s kubectl get pvc -A | sort -u | awk \'{print "\\t" $1 "\\t" $2 "\\t" $4}\' | column -t\n')),(0,a.kt)("p",null,"3","."," ",(0,a.kt)("strong",{parentName:"p"},"Find the application you would like to mount")),(0,a.kt)("p",null,"This can be confusing at first because many applications will have many different instances of PVC."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pvc_list",src:n(59119).Z,width:"889",height:"53"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You'll see in this photo, Nextcloud has many different PVC's.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"However, if you break it down by looking at the middle column, it's not too confusing.")),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"data-nextcloud-redis-0"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is your Redis PVC"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"db-nextcloud-postgresql-0"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is your PostgreSQL PVC"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"nextcloud-data"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is your Data PVC")))))),(0,a.kt)("p",null,"4","."," ",(0,a.kt)("strong",{parentName:"p"},"After finding which PVC you would like to mount, copy the far right column (The Volume) that starts with pvc- into a notepad for use in the next command")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If I was wanting to mount ",(0,a.kt)("inlineCode",{parentName:"li"},"nextcloud-data"),", I would use:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe"))),(0,a.kt)("p",null,"5","."," ",(0,a.kt)("strong",{parentName:"p"},"Run the following command to find the full path to your applications PVC")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs list | grep PVC_VOLUME\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Going off of the Nextcloud example, I would simply replace ",(0,a.kt)("inlineCode",{parentName:"li"},"PVC_VOLUME")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs list | grep pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe\n")),(0,a.kt)("p",null,"Here is what the output should look like\n",(0,a.kt)("img",{alt:"nextcloud_volumes",src:n(62142).Z,width:"748",height:"73"})),(0,a.kt)("p",null,"6","."," ",(0,a.kt)("strong",{parentName:"p"},"Mount your PVC")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs set mountpoint=/temporary/NAME FULL_PVC_PATH\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs set mountpoint=/temporary/nextcloud-data speed/ix-applications/releases/nextcloud/volumes/pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This command will produce no output if it's successful"),(0,a.kt)("li",{parentName:"ul"},"Now you should be able to do whatever you want within the app's PVC")),(0,a.kt)("p",null,"7","."," ",(0,a.kt)("strong",{parentName:"p"},"Remounting")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs set mountpoint=legacy POOL_NAME/ix-applications/releases/APPLICATION_NAME/volumes/VOLUME-NAME\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs set mountpoint=legacy speed/ix-applications/releases/nextcloud/volumes/pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe\n")),(0,a.kt)("p",null,"Afterwards, I always like to ",(0,a.kt)("inlineCode",{parentName:"p"},"rmdir")," on the directory that was created when mounting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In my case I would run:")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"rmdir /mnt/temporary/nextcloud-data\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This just helps keep your temporary folder clean, and lets you know what is or is not currently mounted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Do not worry, ",(0,a.kt)("inlineCode",{parentName:"p"},"rmdir")," cannot delete mounted folders, or folders with contents in them."))),(0,a.kt)("h3",c({},{id:"manual-method---advanced-user-guide"}),"Manual Method - Advanced User Guide"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ALWAYS MAKE SURE THE APP IS STOPPED WHILE MOUNTING THE PVC")),(0,a.kt)("h4",c({},{id:"to-get-the-pvcname"}),"To get the PVCNAME:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"k3s kubectl get pvc -n ix-APPNAME\n")),(0,a.kt)("h4",c({},{id:"to-get-the-pvcpath"}),"To get the PVCPATH:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs list | grep legacy | grep APPNAME\n")),(0,a.kt)("h4",c({},{id:"if-you-want-to-mount-the-pvc-content"}),"If you want to mount the PVC content:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs set mountpoint=/temporary PVCPATH\n")),(0,a.kt)("p",null,"Your PVC will be mounted under ",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/temporary")),(0,a.kt)("h4",c({},{id:"and-when-youre-done-editing"}),"and when you're done editing:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zfs set mountpoint=legacy PVCPATH\n")))}y.isMDXComponent=!0},62142:function(e,t,n){t.Z=n.p+"assets/images/nextcloud_volumes-456e0729ab5cbbc3b457753ae20fdea2.png"},59119:function(e,t,n){t.Z=n.p+"assets/images/pvc_list-9335d18307028aa87dafdcc779f394ab.png"},68408:function(e,t,n){t.Z=n.p+"assets/images/video_thumbnail-615e3e1377696e3840818eeb317fa80e.jpg"}}]);