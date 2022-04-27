"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[4058],{3905:function(e,t,n){n.d(t,{Zo:function(){return M},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},M=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},L=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,M=o(e,["components","mdxType","originalType","parentName"]),L=c(n),y=a,N=L["".concat(u,".").concat(y)]||L[y]||l[y]||i;return n?r.createElement(N,s(s({ref:t},M),{},{components:n})):r.createElement(N,s({ref:t},M))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=L;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}L.displayName="MDXCreateElement"},2362:function(e,t,n){n.r(t),n.d(t,{assets:function(){return M},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={pagination_prev:null},u="Grav",c={unversionedId:"grav/grav",id:"grav/grav",title:"Grav",description:"The distributed async message bus for Go",source:"@site/docs/grav/grav.md",sourceDirName:"grav",slug:"/grav/",permalink:"/docs/laura/87-CI-checks-for-docs-a11y/grav/",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/grav.md",tags:[],version:"current",lastUpdatedAt:1646082232,formattedLastUpdatedAt:"2/28/2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"The Grav Instance",permalink:"/docs/laura/87-CI-checks-for-docs-a11y/grav/introduction/concepts/the-grav-instance"}},M={},l=[{value:"The distributed async message bus for Go",id:"the-distributed-async-message-bus-for-go",level:3}],L={toc:l};function y(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},L,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grav"},"Grav"),(0,i.kt)("h3",{id:"the-distributed-async-message-bus-for-go"},"The distributed async message bus for Go"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1376).Z,width:"767",height:"327"})),(0,i.kt)("p",null,"Grav is an embedded distributed messaging library for Go applications\nthat allows interconnected components of your system to communicate\neffectively in a reliable, asynchronous manner. HTTP and RPC are difficult\nto scale well in modern distributed systems, so Grav was created with\nend goal of adding a performant and resilient messaging system to\nvarious distributed environments."),(0,i.kt)("p",null,"Grav's main purpose is to act as a flexible abstraction that allows\nyour application to discover and communicate using a variety of\nprotocols without needing to re-write any code."),(0,i.kt)("p",null,"As of today, this project has several goals and a few non-goals as listed below."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goals:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Have very low resource and memory consumption."),(0,i.kt)("li",{parentName:"ul"},"Be resilient against data loss due to node failure."),(0,i.kt)("li",{parentName:"ul"},"Act as a reliable core upon which more complex behaviour can be built."),(0,i.kt)("li",{parentName:"ul"},"Support request/reply and broadcast message patterns."),(0,i.kt)("li",{parentName:"ul"},"Support internal ","(","in-process",")"," and external ","(","networked",")"," messaging equally.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Non-Goals:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support every type of messaging pattern.")),(0,i.kt)("p",null,"Since Grav is embedded, it is instantiated as a ",(0,i.kt)("inlineCode",{parentName:"p"},"grav.Grav")," object\nthat your application code connects to in order to send and receive messages.\nGrav connects to other nodes via ",(0,i.kt)("a",{parentName:"p",href:"../../meshing/transports/"},"transport plugins")," which extend\nthe Grav core to become a networked distributed messaging mesh.\nGrav instances can also discover each other automatically using\n",(0,i.kt)("a",{parentName:"p",href:"../../meshing/discovery/"},"discovery plugins"),". "),(0,i.kt)("p",null," Grav does not require a centralized broker, and as such has some limitations,\nbut for certain applications it is vastly simpler (and more extensible)\nthan a centralized messaging system."))}y.isMDXComponent=!0},1376:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3NjYuOSAzMjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDc2Ni45IDMyNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOiMyMzFGMjA7fQoJLnN0MntmaWxsOiMzNTdGQkU7fQoJLnN0M3tmaWxsOiMyMjRFODQ7fQoJLnN0NHtmaWxsOiM3NEMyQjA7fQoJLnN0NXtmaWxsOiNBNkE4QUI7fQoJLnN0NntmaWxsOiM1ODU5NUI7fQoJLnN0N3tmaWxsOiM0QzYyNzU7fQoJLnN0OHtmaWxsOiMzMDNFNEU7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik00MDUuOSwxNjUuOWg3LjF2MjYuN2MtMy4zLDIuOS03LjEsNS4xLTExLjYsNi42Yy00LjUsMS41LTkuMiwyLjMtMTQuMSwyLjNjLTcsMC0xMy4zLTEuNS0xOC45LTQuNgoJCWMtNS42LTMuMS0xMC03LjMtMTMuMi0xMi44Yy0zLjItNS40LTQuOC0xMS41LTQuOC0xOC4yYzAtNi43LDEuNi0xMi44LDQuOC0xOC4yYzMuMi01LjQsNy42LTkuNywxMy4yLTEyLjgKCQljNS42LTMuMSwxMS45LTQuNiwxOS00LjZjNS4zLDAsMTAuMiwwLjgsMTQuNywyLjVjNC41LDEuNyw4LjIsNC4yLDExLjMsNy41bC00LjYsNC43Yy01LjUtNS41LTEyLjYtOC4yLTIxLjEtOC4yCgkJYy01LjcsMC0xMC44LDEuMi0xNS4zLDMuOGMtNC42LDIuNS04LjIsNi0xMC44LDEwLjRjLTIuNiw0LjQtMy45LDkuNC0zLjksMTQuOGMwLDUuNSwxLjMsMTAuNCwzLjksMTQuOGMyLjYsNC40LDYuMiw3LjksMTAuNywxMC40CgkJYzQuNSwyLjUsOS42LDMuOCwxNS4zLDMuOGM3LjIsMCwxMy4zLTEuOCwxOC4zLTUuNFYxNjUuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik01MDEuNywyMDAuOWwtMTYtMjIuNWMtMS44LDAuMi0zLjcsMC4zLTUuNiwwLjNoLTE4Ljh2MjIuMmgtNy40di03MGgyNi4yYzguOSwwLDE1LjksMi4xLDIxLDYuNAoJCWM1LjEsNC4zLDcuNiwxMC4xLDcuNiwxNy42YzAsNS41LTEuNCwxMC4xLTQuMiwxMy44Yy0yLjgsMy44LTYuNyw2LjUtMTEuOCw4LjJsMTcuMSwyNEg1MDEuN3ogTTQ5NS44LDE2Ny44CgkJYzMuNy0zLjEsNS41LTcuNCw1LjUtMTIuOWMwLTUuNy0xLjgtMTAtNS41LTEzYy0zLjctMy05LTQuNS0xNS45LTQuNWgtMTguNnYzNS4xaDE4LjZDNDg2LjksMTcyLjQsNDkyLjIsMTcwLjksNDk1LjgsMTY3Ljh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNNTkwLjEsMTgyLjJoLTM5bC04LjQsMTguN0g1MzVsMzItNzBoNy4zbDMyLDcwaC03LjhMNTkwLjEsMTgyLjJ6IE01ODcuNCwxNzYuMmwtMTYuOC0zNy42bC0xNi44LDM3LjZINTg3LjR6CgkJIi8+Cgk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNNjkyLjUsMTMwLjlsLTMxLDcwaC03LjNsLTMxLTcwaDhsMjYuOCw2MC44bDI3LTYwLjhINjkyLjV6Ii8+CjwvZz4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3Q3IiBwb2ludHM9IjExMi42LDE5Ny4xIDE2OS4yLDIyNyAyMjUuNywxOTcgMjc0LjksMjIyLjggMTY5LjIsMjc4LjIgNjMuNiwyMjIuOCAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjExMi42LDEzNy44IDE2OS4xLDE2Ny40IDIyNS43LDEzNy43IDI3NC45LDE2My41IDE2OS4yLDIxOC45IDYzLjYsMTYzLjUgCSIvPgoJPGc+CgkJPHBvbHlnb24gY2xhc3M9InN0OCIgcG9pbnRzPSIyMTguMyw3NC41IDE2OS4yLDQ4LjggMTIwLDc0LjYgMTY5LjEsMTAwLjMgCQkiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3Q4IiBwb2ludHM9IjEyMCwxMzMuOCAxNjkuMiwxNTkuNiAyMTguMywxMzMuOCAxNjkuMSwxMDguMSAJCSIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDgiIHBvaW50cz0iMjI1LjcsNzguNCAxNzYuNSwxMDQuMiAyMjUuNywxMjkuOSAyNzQuOSwxMDQuMiAJCSIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDgiIHBvaW50cz0iMTEyLjYsNzguNSA2My42LDEwNC4yIDExMi42LDEyOS45IDE2MS42LDEwNC4yIAkJIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="}}]);