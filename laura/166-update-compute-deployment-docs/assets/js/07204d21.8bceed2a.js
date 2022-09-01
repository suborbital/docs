"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},s="Streams",i={unversionedId:"atmo/usage/streams",id:"atmo/usage/streams",title:"Streams",description:"Atmo can handle several different types of input.",source:"@site/docs/atmo/usage/streams.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/streams",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/usage/streams",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/streams.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"Jan 22, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Scheduled jobs",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/usage/schedules"},next:{title:"Connections",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/usage/connections"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"streams"},"Streams"),(0,a.kt)("p",null,"Atmo can handle several different types of input.\nThe default is an HTTP request, which is defined with ",(0,a.kt)("inlineCode",{parentName:"p"},"type: request"),"\nin a Directive handler. There is another type of input called ",(0,a.kt)("inlineCode",{parentName:"p"},"stream"),"\nwhich allows Atmo to listen to streaming data sources and handle\nmessages it receives from them."),(0,a.kt)("p",null,"A stream handler looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: stream\n  resource: /stream\n  steps:\n    - fn: handle-message\n")),(0,a.kt)("p",null,"By default, a stream handler allows a client to connect to Atmo's webserver\nusing a ",(0,a.kt)("strong",{parentName:"p"},"standard websocket"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," defines the URI that the\nwebsocket handler is available on, and it uses Atmo's built-in server\nto expose these endpoints. Each message sent by the client over this\nconnection is handled by executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"steps")," in the handler."),(0,a.kt)("p",null,"Streams can also come from external sources such as NATS and Kafka as detailed in the next section."))}u.isMDXComponent=!0}}]);