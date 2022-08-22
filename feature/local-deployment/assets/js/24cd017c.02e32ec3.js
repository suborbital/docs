"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[4058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},M={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},L=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),L=c(n),y=r,N=L["".concat(u,".").concat(y)]||L[y]||M[y]||i;return n?a.createElement(N,s(s({ref:t},l),{},{components:n})):a.createElement(N,s({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=L;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}L.displayName="MDXCreateElement"},2362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>M,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={pagination_prev:null},s="Grav",o={unversionedId:"grav/grav",id:"grav/grav",title:"Grav",description:"The distributed async message bus for Go",source:"@site/docs/grav/grav.md",sourceDirName:"grav",slug:"/grav/",permalink:"/docs/feature/local-deployment/grav/",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/grav.md",tags:[],version:"current",lastUpdatedAt:1646082232,formattedLastUpdatedAt:"Feb 28, 2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"The Grav Instance",permalink:"/docs/feature/local-deployment/grav/introduction/concepts/the-grav-instance"}},u={},c=[{value:"The distributed async message bus for Go",id:"the-distributed-async-message-bus-for-go",level:3}],l={toc:c};function M(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grav"},"Grav"),(0,r.kt)("h3",{id:"the-distributed-async-message-bus-for-go"},"The distributed async message bus for Go"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1376).Z,width:"767",height:"327"})),(0,r.kt)("p",null,"Grav is an embedded distributed messaging library for Go applications\nthat allows interconnected components of your system to communicate\neffectively in a reliable, asynchronous manner. HTTP and RPC are difficult\nto scale well in modern distributed systems, so Grav was created with\nend goal of adding a performant and resilient messaging system to\nvarious distributed environments."),(0,r.kt)("p",null,"Grav's main purpose is to act as a flexible abstraction that allows\nyour application to discover and communicate using a variety of\nprotocols without needing to re-write any code."),(0,r.kt)("p",null,"As of today, this project has several goals and a few non-goals as listed below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Goals:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Have very low resource and memory consumption."),(0,r.kt)("li",{parentName:"ul"},"Be resilient against data loss due to node failure."),(0,r.kt)("li",{parentName:"ul"},"Act as a reliable core upon which more complex behaviour can be built."),(0,r.kt)("li",{parentName:"ul"},"Support request/reply and broadcast message patterns."),(0,r.kt)("li",{parentName:"ul"},"Support internal ","(","in-process",")"," and external ","(","networked",")"," messaging equally.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Non-Goals:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support every type of messaging pattern.")),(0,r.kt)("p",null,"Since Grav is embedded, it is instantiated as a ",(0,r.kt)("inlineCode",{parentName:"p"},"grav.Grav")," object\nthat your application code connects to in order to send and receive messages.\nGrav connects to other nodes via ",(0,r.kt)("a",{parentName:"p",href:"../../meshing/transports/"},"transport plugins")," which extend\nthe Grav core to become a networked distributed messaging mesh.\nGrav instances can also discover each other automatically using\n",(0,r.kt)("a",{parentName:"p",href:"../../meshing/discovery/"},"discovery plugins"),". "),(0,r.kt)("p",null," Grav does not require a centralized broker, and as such has some limitations,\nbut for certain applications it is vastly simpler (and more extensible)\nthan a centralized messaging system."))}M.isMDXComponent=!0},1376:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3NjYuOSAzMjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDc2Ni45IDMyNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOiMyMzFGMjA7fQoJLnN0MntmaWxsOiMzNTdGQkU7fQoJLnN0M3tmaWxsOiMyMjRFODQ7fQoJLnN0NHtmaWxsOiM3NEMyQjA7fQoJLnN0NXtmaWxsOiNBNkE4QUI7fQoJLnN0NntmaWxsOiM1ODU5NUI7fQoJLnN0N3tmaWxsOiM0QzYyNzU7fQoJLnN0OHtmaWxsOiMzMDNFNEU7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik00MDUuOSwxNjUuOWg3LjF2MjYuN2MtMy4zLDIuOS03LjEsNS4xLTExLjYsNi42Yy00LjUsMS41LTkuMiwyLjMtMTQuMSwyLjNjLTcsMC0xMy4zLTEuNS0xOC45LTQuNgoJCWMtNS42LTMuMS0xMC03LjMtMTMuMi0xMi44Yy0zLjItNS40LTQuOC0xMS41LTQuOC0xOC4yYzAtNi43LDEuNi0xMi44LDQuOC0xOC4yYzMuMi01LjQsNy42LTkuNywxMy4yLTEyLjgKCQljNS42LTMuMSwxMS45LTQuNiwxOS00LjZjNS4zLDAsMTAuMiwwLjgsMTQuNywyLjVjNC41LDEuNyw4LjIsNC4yLDExLjMsNy41bC00LjYsNC43Yy01LjUtNS41LTEyLjYtOC4yLTIxLjEtOC4yCgkJYy01LjcsMC0xMC44LDEuMi0xNS4zLDMuOGMtNC42LDIuNS04LjIsNi0xMC44LDEwLjRjLTIuNiw0LjQtMy45LDkuNC0zLjksMTQuOGMwLDUuNSwxLjMsMTAuNCwzLjksMTQuOGMyLjYsNC40LDYuMiw3LjksMTAuNywxMC40CgkJYzQuNSwyLjUsOS42LDMuOCwxNS4zLDMuOGM3LjIsMCwxMy4zLTEuOCwxOC4zLTUuNFYxNjUuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik01MDEuNywyMDAuOWwtMTYtMjIuNWMtMS44LDAuMi0zLjcsMC4zLTUuNiwwLjNoLTE4Ljh2MjIuMmgtNy40di03MGgyNi4yYzguOSwwLDE1LjksMi4xLDIxLDYuNAoJCWM1LjEsNC4zLDcuNiwxMC4xLDcuNiwxNy42YzAsNS41LTEuNCwxMC4xLTQuMiwxMy44Yy0yLjgsMy44LTYuNyw2LjUtMTEuOCw4LjJsMTcuMSwyNEg1MDEuN3ogTTQ5NS44LDE2Ny44CgkJYzMuNy0zLjEsNS41LTcuNCw1LjUtMTIuOWMwLTUuNy0xLjgtMTAtNS41LTEzYy0zLjctMy05LTQuNS0xNS45LTQuNWgtMTguNnYzNS4xaDE4LjZDNDg2LjksMTcyLjQsNDkyLjIsMTcwLjksNDk1LjgsMTY3Ljh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNNTkwLjEsMTgyLjJoLTM5bC04LjQsMTguN0g1MzVsMzItNzBoNy4zbDMyLDcwaC03LjhMNTkwLjEsMTgyLjJ6IE01ODcuNCwxNzYuMmwtMTYuOC0zNy42bC0xNi44LDM3LjZINTg3LjR6CgkJIi8+Cgk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNNjkyLjUsMTMwLjlsLTMxLDcwaC03LjNsLTMxLTcwaDhsMjYuOCw2MC44bDI3LTYwLjhINjkyLjV6Ii8+CjwvZz4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3Q3IiBwb2ludHM9IjExMi42LDE5Ny4xIDE2OS4yLDIyNyAyMjUuNywxOTcgMjc0LjksMjIyLjggMTY5LjIsMjc4LjIgNjMuNiwyMjIuOCAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjExMi42LDEzNy44IDE2OS4xLDE2Ny40IDIyNS43LDEzNy43IDI3NC45LDE2My41IDE2OS4yLDIxOC45IDYzLjYsMTYzLjUgCSIvPgoJPGc+CgkJPHBvbHlnb24gY2xhc3M9InN0OCIgcG9pbnRzPSIyMTguMyw3NC41IDE2OS4yLDQ4LjggMTIwLDc0LjYgMTY5LjEsMTAwLjMgCQkiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3Q4IiBwb2ludHM9IjEyMCwxMzMuOCAxNjkuMiwxNTkuNiAyMTguMywxMzMuOCAxNjkuMSwxMDguMSAJCSIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDgiIHBvaW50cz0iMjI1LjcsNzguNCAxNzYuNSwxMDQuMiAyMjUuNywxMjkuOSAyNzQuOSwxMDQuMiAJCSIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDgiIHBvaW50cz0iMTEyLjYsNzguNSA2My42LDEwNC4yIDExMi42LDEyOS45IDE2MS42LDEwNC4yIAkJIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="}}]);