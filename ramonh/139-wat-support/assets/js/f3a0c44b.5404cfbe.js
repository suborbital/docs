"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[1259],{3905:function(e,t,M){M.d(t,{Zo:function(){return c},kt:function(){return L}});var i=M(7294);function n(e,t,M){return t in e?Object.defineProperty(e,t,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[t]=M,e}function r(e,t){var M=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),M.push.apply(M,i)}return M}function s(e){for(var t=1;t<arguments.length;t++){var M=null!=arguments[t]?arguments[t]:{};t%2?r(Object(M),!0).forEach((function(t){n(e,t,M[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(M)):r(Object(M)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(M,t))}))}return e}function N(e,t){if(null==e)return{};var M,i,n=function(e,t){if(null==e)return{};var M,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)M=r[i],t.indexOf(M)>=0||(n[M]=e[M]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)M=r[i],t.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(e,M)&&(n[M]=e[M])}return n}var a=i.createContext({}),u=function(e){var t=i.useContext(a),M=t;return e&&(M="function"==typeof e?e(t):s(s({},t),e)),M},c=function(e){var t=u(e.components);return i.createElement(a.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},o=i.forwardRef((function(e,t){var M=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,c=N(e,["components","mdxType","originalType","parentName"]),o=u(M),L=n,D=o["".concat(a,".").concat(L)]||o[L]||j[L]||r;return M?i.createElement(D,s(s({ref:t},c),{},{components:M})):i.createElement(D,s({ref:t},c))}));function L(e,t){var M=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=M.length,s=new Array(r);s[0]=o;var N={};for(var a in t)hasOwnProperty.call(t,a)&&(N[a]=t[a]);N.originalType=e,N.mdxType="string"==typeof e?e:n,s[1]=N;for(var u=2;u<r;u++)s[u]=M[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,M)}o.displayName="MDXCreateElement"},4900:function(e,t,M){M.r(t),M.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return L},frontMatter:function(){return N},metadata:function(){return u},toc:function(){return j}});var i=M(7462),n=M(3366),r=(M(7294),M(3905)),s=["components"],N={pagination_prev:null},a="Sat",u={unversionedId:"sat/sat",id:"sat/sat",title:"Sat",description:"The tiny but mighty WebAssembly edge compute server",source:"@site/docs/sat/sat.md",sourceDirName:"sat",slug:"/sat/",permalink:"/docs/ramonh/139-wat-support/sat/",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/sat/sat.md",tags:[],version:"current",lastUpdatedAt:1646082232,formattedLastUpdatedAt:"2/28/2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"Using Sat",permalink:"/docs/ramonh/139-wat-support/sat/using-sat"}},c={},j=[{value:"The tiny but mighty WebAssembly edge compute server",id:"the-tiny-but-mighty-webassembly-edge-compute-server",level:3}],o={toc:j};function L(e){var t=e.components,N=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},o,N,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sat"},"Sat"),(0,r.kt)("h3",{id:"the-tiny-but-mighty-webassembly-edge-compute-server"},"The tiny but mighty WebAssembly edge compute server"),(0,r.kt)("p",null,(0,r.kt)("img",{src:M(1165).Z,width:"634",height:"327"})),(0,r.kt)("p",null,"Sat is a WebAssembly-powered server designed to have the maximum performance and smallest possible footprint. Our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo")," project is a fully-fledged platform with support for running entire applications, whereas Sat takes the opposite approach: run a single Wasm module blazing fast!"),(0,r.kt)("p",null,"Sat has no dependencies (it is statically compiled), and can run in a tiny Docker container (Distroless) or on bare metal. It is meant to live in small places such as edge compute environments."))}L.isMDXComponent=!0},1165:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iZTcwZjgzYjctYTI5NC00MmM4LTk5ODctMmRkNzM4ZDI2ZjJmIiBkYXRhLW5hbWU9IkxheWVyIDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYzMy43NDU1IDMyNi45NTk0Ij48cGF0aCBkPSJNMzQzLjU1NjQsMTkxLjczNWwyLjktNS43MDEyYzUsNC45LDEzLjkwMDksOC41MDE5LDIzLjEwMTYsOC41MDE5LDEzLjEwMDgsMCwxOC44MDEtNS41MDE5LDE4LjgwMS0xMi40MDIzLDAtMTkuMjAxMi00My4xMDI1LTcuNC00My4xMDI1LTMzLjMwMDgsMC0xMC4zMDA4LDgtMTkuMjAxMiwyNS44MDE1LTE5LjIwMTIsNy45MDA2LDAsMTYuMTAxMSwyLjMwMDgsMjEuNzAxNCw2LjE5OTNsLTIuNSw1LjlhMzYuMDM4MSwzNi4wMzgxLDAsMCwwLTE5LjIwMTItNS43OTg4Yy0xMi44MDA4LDAtMTguNTAxLDUuNjk5Mi0xOC41MDEsMTIuNjk5MiwwLDE5LjIwMTIsNDMuMTAyNiw3LjYwMTYsNDMuMTAyNiwzMy4xMDM2LDAsMTAuMzAwNy04LjIsMTkuMS0yNi4xMDE2LDE5LjFDMzU5LjA1NzQsMjAwLjgzNDYsMzQ4Ljc1NjgsMTk3LjEzNTMsMzQzLjU1NjQsMTkxLjczNVoiIHN0eWxlPSJmaWxsOiM0YzYyNzUiLz48cGF0aCBkPSJNNDc1LjY1ODcsMTgxLjUzMzhINDM2LjY1NjJsLTguNDAwNiwxOC43MDEyaC03LjdsMzIuMDAxOS03MC4wMDRoNy4zMDA1bDMyLjAwMiw3MC4wMDRoLTcuOFptLTIuNy02LTE2LjgwMS0zNy42MDE2LTE2LjgwMTEsMzcuNjAxNloiIHN0eWxlPSJmaWxsOiM0YzYyNzUiLz48cGF0aCBkPSJNNTMzLjU1NzQsMTM2LjYzMTRINTA4Ljk1NnYtNi40aDU2LjYwMzN2Ni40SDU0MC45NThWMjAwLjIzNWgtNy40MDA2WiIgc3R5bGU9ImZpbGw6IzRjNjI3NSIvPjxwYXRoIGQ9Ik0xNzAuOTUwNiwxNjIuMTc1MnMtLjAzMTYtMTA3LjM1LS4wMzE2LTEwOS41ODY0YTMuMjI1MSwzLjIyNTEsMCwwLDAtMy4zNDQ4LTMuMTYwNiw3LjY4NTYsNy42ODU2LDAsMCwwLTMuODU0OSwxLjE1NTdMNzEuNzI1MywxMDQuMDdhNi45Njc1LDYuOTY3NSwwLDAsMC0zLjQ2NTQsNi4wNDQ4bC4zMjMxLDEwNi40MTI0YTYuOTY3Miw2Ljk2NzIsMCwwLDAsMy41MDIsNi4wMjMybDkyLjMxNzUsNTIuOTI2M2E2Ljk2NTgsNi45NjU4LDAsMCwwLDYuOTY3My0uMDIxNUwyNjMuMzYzOSwyMjEuOTdhNi45NjgsNi45NjgsMCwwLDAsMy4xNTg5LTMuOTc5LDMuNDEsMy40MSwwLDAsMC0xLjU5MjctNC4yNTQyQzI2Mi44NTI5LDIxMi42MjYzLDE3MC45NTA2LDE2Mi4xNzUyLDE3MC45NTA2LDE2Mi4xNzUyWiIgc3R5bGU9ImZpbGw6IzRjNjI3NSIvPjxjaXJjbGUgY3g9IjE2Ny44NDI1IiBjeT0iMTY0LjE2OTUiIHI9IjU1LjkzNjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MC4wNDg3IDc2LjcyNzMpIHJvdGF0ZSgtMjIuNSkiIHN0eWxlPSJmaWxsOiMzMDNlNGUiLz48ZWxsaXBzZSBjeD0iMTE5LjEzNTMiIGN5PSIxOTIuMjg5NCIgcng9IjE1LjUyMDEiIHJ5PSIzMy42MjY5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODYuMTM1NyA5Ny4yNTEyKSByb3RhdGUoLTMzLjM3NTYpIiBzdHlsZT0iZmlsbDojOGFiZWIwIi8+PGVsbGlwc2UgY3g9IjEyMi41NjEyIiBjeT0iMTkwLjAxNjgiIHJ4PSI0LjA2OTgiIHJ5PSI4LjgxNzgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NC4zMjA0IDk4Ljc2MTEpIHJvdGF0ZSgtMzMuMzc1NikiIHN0eWxlPSJmaWxsOiMzMDNlNGUiLz48cGF0aCBkPSJNMjAxLjIxNzcsNjAuNzdhNC44NTc4LDQuODU3OCwwLDAsMSwzLjEwMDYsNi4xMzA1bC0xOC4xOCw1NS4zODc3Yy0uODM2OCwyLjU0OTMtMi4zODcxLS4yMzQ5LTQuOTM2Mi0xLjA3MTZzLTUuMTMxOS41OTA4LTQuMjk1Mi0xLjk1ODVsMTguMTgtNTUuMzg3NkE0Ljg1NzksNC44NTc5LDAsMCwxLDIwMS4yMTc3LDYwLjc3WiIgc3R5bGU9ImZpbGw6IzhhYmViMDtmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxlbGxpcHNlIGN4PSIxODEuNDA1NSIgY3k9IjEyMS40MTU5IiByeD0iMi43MDkyIiByeT0iNy44MTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuODc0NyAyNTYuNDIzMSkgcm90YXRlKC03MikiIHN0eWxlPSJmaWxsOiM4YWJlYjAiLz48cGF0aCBkPSJNMjc0LjE2NCwxODYuNTUzOGE0Ljg1OCw0Ljg1OCwwLDAsMS01Ljc3MjksMy43MjQ0bC01Ni45ODQ2LTEyLjI5MTFjLTIuNjIyOC0uNTY1OC0uMDE1OS0yLjM5ODYuNTUtNS4wMjEycy0xLjEyNDEtNS4wNDIxLDEuNDk4Ny00LjQ3NjNMMjcwLjQ0LDE4MC43ODA3QTQuODU3OSw0Ljg1NzksMCwwLDEsMjc0LjE2NCwxODYuNTUzOFoiIHN0eWxlPSJmaWxsOiM4YWJlYjA7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48ZWxsaXBzZSBjeD0iMjExLjc3OTciIGN5PSIxNzMuMTg5MiIgcng9IjcuODE0IiByeT0iMi43MDkyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS42NTY0IDM0NC4zMzMpIHJvdGF0ZSgtNzgpIiBzdHlsZT0iZmlsbDojOGFiZWIwIi8+PC9zdmc+"}}]);