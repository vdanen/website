"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3903],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,v=p["".concat(o,".").concat(h)]||p[h]||d[h]||s;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5665:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=t(3117),a=t(102),s=(t(7294),t(3905)),i=["components"],l={},o="Ingress",u={unversionedId:"manual/development/ingress",id:"manual/development/ingress",title:"Ingress",description:'Ingress is what we call "Reverse Proxy" in the UI and in the user side of the documentation. Please be aware that those refer to the same system. An Ingress is, simply put, just Kubernetes way of connecting outsides to Apps running in containers.',source:"@site/docs/manual/development/ingress.md",sourceDirName:"manual/development",slug:"/manual/development/ingress",permalink:"/fr/docs/manual/development/ingress",draft:!1,editUrl:"https://github.com/truecharts/pub/docs/manual/development/ingress.md",tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"Command Cheatsheet",permalink:"/fr/docs/manual/development/handycommands"},next:{title:"Portal Button",permalink:"/fr/docs/manual/development/portal"}},c={},d=[{value:"Ingress Types",id:"ingress-types",level:3},{value:"Ingress and Services",id:"ingress-and-services",level:5},{value:"The Main Ingress",id:"the-main-ingress",level:5},{value:"Standards/Examples",id:"standardsexamples",level:3},{value:"HTTP Ingress",id:"http-ingress",level:5},{value:"TCP Ingress",id:"tcp-ingress",level:5},{value:"UDP Ingress",id:"udp-ingress",level:5},{value:"Other Ingress options",id:"other-ingress-options",level:3},{value:"servicePort",id:"serviceport",level:5},{value:"serviceKind",id:"servicekind",level:5},{value:"External Services",id:"external-services",level:3}],p={toc:d};function h(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ingress"},"Ingress"),(0,s.kt)("p",null,'Ingress is what we call "Reverse Proxy" in the UI and in the user side of the documentation. Please be aware that those refer to the same system. An Ingress is, simply put, just Kubernetes way of connecting outsides to Apps running in containers.'),(0,s.kt)("h3",{id:"ingress-types"},"Ingress Types"),(0,s.kt)("p",null,"We currently support:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"HTTP via Ingres"),(0,s.kt)("li",{parentName:"ul"},"HTTP via Traefik IngressRoute (HTTP-IR)"),(0,s.kt)("li",{parentName:"ul"},"TCP via Traefik IngressRouteTCP"),(0,s.kt)("li",{parentName:"ul"},"UDP via Traefik IngressRouteUDP")),(0,s.kt)("p",null,'From questions.yaml and the UI, these can be changed with selecting another "Type". However: Under the hood IngressRoutes and Ingress are totally different beasts and have a seperate creation process. Errors for Plain HTTP  do NOT have to be present in HTTP-IR.'),(0,s.kt)("p",null,"It's also important to note that TCP (and even more so: UDP) have less options available. The example configurations below contain a mostly complete overview of what is currently available and reasonable."),(0,s.kt)("h5",{id:"ingress-and-services"},"Ingress and Services"),(0,s.kt)("p",null,"It's important to know what Ingress does, before you start creating ingresses in questions.yaml. Ingresses send outside Traffic, to a kubernetes Service, which in turn forwards traffic to the actual containers."),(0,s.kt)("p",null,"This means that every container needs to know how to reach their Service. If they do not, things go wrong."),(0,s.kt)("p",null,"To ensure this, it's adviced to keep the names of your Ingresses the same as the names of your services. We made sure the ingress would automatically detect (and connect to) the main port of a Service with the same name."),(0,s.kt)("p",null,"However: In case you need to do this differently, need to connect to additionalServices and/or need to connect to a secondary port, you can manually set both the serviceName and servicePort in questions.yaml. We advice however, to only do so if absolutely necessary!"),(0,s.kt)("h5",{id:"the-main-ingress"},"The Main Ingress"),(0,s.kt)("p",null,'The main Ingress and Main service take an important role in our standardisation. Where the main Service is used for healthchecks and the "portal" button, the main Ingress is just used for the portal button.'),(0,s.kt)("p",null,"However: As the maintainers expect new features to be connecting to the main service and main ingress, it will cause problems if you decide to bypass/ignore these."),(0,s.kt)("h3",{id:"standardsexamples"},"Standards/Examples"),(0,s.kt)("p",null,"We try to maintain as much of a standardised questions.yaml format as possible, to ensure (bulk) editing stays as easy as possible."),(0,s.kt)("h5",{id:"http-ingress"},"HTTP Ingress"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  - variable: ingress\n    label: "Ingress Configuration"\n    group: "Ingress Configuration"\n    schema:\n      type: dict\n      attrs:\n        - variable: main\n          label: "Main Ingress"\n          schema:\n            type: dict\n            attrs:\n              - variable: enabled\n                label: "Enable Ingress"\n                schema:\n                  type: boolean\n                  default: false\n                  show_subquestions_if: true\n                  subquestions:\n                    - variable: hosts\n                      label: "Hosts"\n                      schema:\n                        type: list\n                        default: []\n                        items:\n                          - variable: host\n                            label: "Host"\n                            schema:\n                              type: dict\n                              attrs:\n                                - variable: host\n                                  label: "HostName"\n                                  schema:\n                                    type: string\n                                    default: ""\n                                    required: true\n                                - variable: paths\n                                  label: "Hosts"\n                                  schema:\n                                    type: list\n                                    default: []\n                                    items:\n                                      - variable: path\n                                        label: "path"\n                                        schema:\n                                          type: string\n                                          required: true\n                                          hidden: false\n                                          default: "/"\n                                      - variable: pathType\n                                        label: "pathType"\n                                        schema:\n                                          type: string\n                                          required: true\n                                          hidden: false\n                                          default: "Prefix"\n                    - variable: tls\n                      label: "TLS-Settings"\n                      schema:\n                        type: list\n                        default: []\n                        items:\n                          - variable: hosts\n                            label: "Certificate Hosts"\n                            schema:\n                              type: list\n                              default: []\n                              items:\n                                - variable: host\n                                  label: "Host"\n                                  schema:\n                                    type: string\n                                    default: ""\n                                    required: true\n                          - variable: scaleCERT\n                            label: "Select TrueNAS SCALE Certificate"\n                            schema:\n                              type: int\n                              $ref:\n                                - "definitions/certificate"\n\n')),(0,s.kt)("h5",{id:"tcp-ingress"},"TCP Ingress"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'        - variable: tcp\n          label: "TCP Reverse Proxy Configuration"\n          schema:\n            type: dict\n            attrs:\n              - variable: enabled\n                label: "Enable TCP Reverse Proxy"\n                schema:\n                  type: boolean\n                  default: false\n                  show_subquestions_if: true\n                  subquestions:\n                    - variable: type\n                      label: "Select Reverse Proxy Type"\n                      schema:\n                        type: string\n                        default: "TCP"\n                        required: true\n                        editable: false\n                        hidden: true\n                    - variable: serviceName\n                      label: "Service name to proxy to"\n                      schema:\n                        hidden: true\n                        editable: false\n                        type: string\n                        default: ""\n                    - variable: entrypoint\n                      label: "Select Entrypoint"\n                      schema:\n                        type: string\n                        default: "torrent-tcp"\n                        required: true\n                        enum:\n                          - value: "torrent-tcp"\n                            description: "Torrent-TCP: port 51413"\n')),(0,s.kt)("h5",{id:"udp-ingress"},"UDP Ingress"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'        - variable: udp\n          label: "UDP Reverse Proxy Configuration"\n          schema:\n            type: dict\n            attrs:\n              - variable: enabled\n                label: "Enable UDP Reverse Proxy"\n                schema:\n                  type: boolean\n                  default: false\n                  show_subquestions_if: true\n                  subquestions:\n                    - variable: type\n                      label: "Select Reverse Proxy Type"\n                      schema:\n                        type: string\n                        default: "UDP"\n                        required: true\n                        editable: false\n                        hidden: true\n                    - variable: serviceName\n                      label: "Service name to proxy to"\n                      schema:\n                        hidden: true\n                        editable: false\n                        type: string\n                        default: ""\n                    - variable: entrypoint\n                      label: "Select Entrypoint"\n                      schema:\n                        type: string\n                        default: "torrent-udp"\n                        required: true\n                        enum:\n                          - value: "torrent-udp"\n                            description: "Torrent-UDP: port 51413"\n')),(0,s.kt)("h3",{id:"other-ingress-options"},"Other Ingress options"),(0,s.kt)("p",null,"There are a few other options that are rarely (if ever) used."),(0,s.kt)("h5",{id:"serviceport"},"servicePort"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'                     - variable: servicePort\n                       label: "Service Port to proxy to"\n                       schema:\n                         hidden: true\n                         editable: false\n                         type: int\n                         default: 80\n')),(0,s.kt)("h5",{id:"servicekind"},"serviceKind"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'                    - variable: serviceKind\n                      label: "Service Kind to proxy to"\n                      schema:\n                        hidden: true\n                        editable: false\n                        type: string\n                        default: ""\n')),(0,s.kt)("h3",{id:"external-services"},"External Services"),(0,s.kt)("p",null,'The externalServices option, is actually mostly an Ingress "under the hood" which just creates a very small (minimal) service.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  - variable: externalServices\n    label: "(Advanced) Add External Services"\n    group: "Advanced"\n    schema:\n      type: list\n      default: []\n      items:\n        - variable: externalService\n          label: "External Service"\n          schema:\n            type: dict\n            attrs:\n              - variable: enabled\n                label: "Enable Web Reverse Proxy"\n                schema:\n                  type: boolean\n                  hidden: true\n                  editable: false\n                  default: true\n              - variable: type\n                label: "Reverse Proxy Type"\n                schema:\n                  type: string\n                  default: "HTTP"\n                  hidden: true\n                  editable: false\n                  required: true\n              - variable: serviceName\n                label: "Service name to proxy to"\n                schema:\n                  hidden: true\n                  editable: false\n                  type: string\n                  default: ""\n              - variable: serviceTarget\n                label: "IP Adress of the external service"\n                schema:\n                  hidden: false\n                  editable: true\n                  required: true\n                  type: string\n                  default: "192.168.0.0"\n              - variable: servicePort\n                label: "External Service Port"\n                description: "The port on the external service you want to proxy"\n                schema:\n                  hidden: false\n                  required: true\n                  editable: true\n                  type: int\n                  default: 80\n              - variable: serviceType\n                label: "Connection Type"\n                description: "Connection Type between Traefik and the external service"\n                schema:\n                  hidden: false\n                  editable: true\n                  required: true\n                  default: "HTTP"\n                  type: string\n                  enum:\n                    - value: "HTTP"\n                      description: "HTTP"\n                    - value: "HTTPS"\n                      description: "HTTPS"\n              - variable: serviceKind\n                label: "Service Kind to proxy to"\n                schema:\n                  hidden: true\n                  editable: false\n                  type: string\n                  default: ""\n              - variable: entrypoint\n                label: "Select Entrypoint"\n                schema:\n                  type: string\n                  default: "websecure"\n                  required: true\n                  enum:\n                    - value: "websecure"\n                      description: "Websecure: HTTPS/TLS port 443"\n              - variable: host\n                label: "Domain Name"\n                required: true\n                schema:\n                  type: string\n              - variable: path\n                label: "path"\n                schema:\n                  type: string\n                  required: true\n                  hidden: false\n                  default: "/"\n              - variable: certType\n                label: "Select Certificate Type"\n                schema:\n                  type: string\n                  default: "selfsigned"\n                  enum:\n                    - value: ""\n                      description: "No Encryption/TLS/Certificates"\n                    - value: "selfsigned"\n                      description: "Self-Signed Certificate"\n                    - value: "ixcert"\n                      description: "TrueNAS SCALE Certificate"\n              - variable: certificate\n                label: "Select TrueNAS SCALE Certificate"\n                schema:\n                  type: int\n                  show_if: [["certType", "=", "ixcert"]]\n                  $ref:\n                    - "definitions/certificate"\n              - variable: authForwardURL\n                label: "Forward Authentication URL"\n                schema:\n                  type: string\n                  default: ""\n')))}h.isMDXComponent=!0}}]);