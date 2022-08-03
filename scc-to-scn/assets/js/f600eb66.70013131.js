"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8264],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var M=i.createContext({}),c=function(e){var t=i.useContext(M),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(M.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},w=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,M=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),w=c(n),p=o,y=w["".concat(M,".").concat(p)]||w[p]||l[p]||a;return n?i.createElement(y,r(r({ref:t},u),{},{components:n})):i.createElement(y,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=w;var s={};for(var M in t)hasOwnProperty.call(t,M)&&(s[M]=t[M]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}w.displayName="MDXCreateElement"},3173:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return M},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],s={pagination_prev:null},M="Atmo",c={unversionedId:"atmo/atmo",id:"atmo/atmo",title:"Atmo",description:"The application framework for cloud native WebAssembly",source:"@site/docs/atmo/atmo.md",sourceDirName:"atmo",slug:"/atmo/",permalink:"/docs/scc-to-scn/atmo/",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/atmo.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"6/30/2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"Getting started",permalink:"/docs/scc-to-scn/atmo/get-started"}},u={},l=[{value:"The application framework for cloud native WebAssembly",id:"the-application-framework-for-cloud-native-webassembly",level:2}],w={toc:l};function p(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},w,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"atmo"},"Atmo"),(0,a.kt)("h2",{id:"the-application-framework-for-cloud-native-webassembly"},"The application framework for cloud native WebAssembly"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Atmo logo",src:n(6632).Z,width:"775",height:"327"})),(0,a.kt)("p",null,"Atmo was born out of a desire to simplify server-side development by making it easy to bootstrap new projects, automatically scale to handle large amounts of traffic, and ensure their security with new technology and best practices, embodying the ",(0,a.kt)("a",{parentName:"p",href:"https://blog.suborbital.dev/building-a-better-monolith"},"SUFA design pattern"),"."),(0,a.kt)("p",null,"Atmo is an application framework for cloud native WebAssembly. It allows you to build polyglot server apps that execute in a high performance sandboxed execution engine. Atmo applications are comprised of functions compiled into WebAssembly modules from various languages such as JavaScript, Rust, Go, and Grain."),(0,a.kt)("p",null,"To develop applications using Atmo, a declarative file called the Directive is used to describe how to handle requests and events using composable functions. This allows the developer to describe the entirety of their application's behaviour, while only needing to write code for the functions being called. Atmo then uses the Directive to run the desired application, automatically running a web server, job scheduler, and messaging. It also includes automatic connections with resources like databases, and security best practices such as auto-TLS and capability-based security. Together these form a powerful platform upon which your application can thrive."),(0,a.kt)("p",null,"The core of Atmo is a job scheduler running WebAssembly modules, which allows running functions written in a variety of languages with near-native performance and massive improvements to security and ease of orchestration."),(0,a.kt)("p",null,"Atmo scales out using capability groups, which allows groups of Atmo instances to access sensitive resources, scale independently, and ensure your application is able to grow efficiently to handle increases in traffic with ease. Atmo's built in meshing capabilities means that building a flat network of instances is automated, secure, and efficient."),(0,a.kt)("p",null,'Atmo strives to make everything about developing and deploying your application simple so that you can focus on the hard problems of building your product. Atmo\'s mission statement is "Help developers build applications that are powerful but never complicated".'))}p.isMDXComponent=!0},6632:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iZThkMmZmNDgtODUxNy00ODM1LTlmYzQtMjUzMzQ2M2MwNzk4IiBkYXRhLW5hbWU9IkxheWVyIDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc3NS4xMTkyIDMyNi45NTk0Ij48cGF0aCBkPSJNMjY3LjIxLDIxNi4xNjQxVjEwOS40MzY2YTYuOTIzOCw2LjkyMzgsMCwwLDAtMy40NjE4LTUuOTk2TDE3MS4zMiw1MC4wNzY5YTYuOTIzNSw2LjkyMzUsMCwwLDAtNi45MjM2LDBMNzEuOTY3NCwxMDMuNDQwNmE2LjkyMzYsNi45MjM2LDAsMCwwLTMuNDYxOCw1Ljk5NlYyMTYuMTY0MWE2LjkyMzQsNi45MjM0LDAsMCwwLDMuNDYxOCw1Ljk5Nmw5Mi40Mjg3LDUzLjM2MzhhNi45MjM1LDYuOTIzNSwwLDAsMCw2LjkyMzYsMEwyNjMuNzQ4NSwyMjIuMTZBNi45MjM2LDYuOTIzNiwwLDAsMCwyNjcuMjEsMjE2LjE2NDFaIiBzdHlsZT0iZmlsbDojNGM2Mjc1Ii8+PHBvbHlnb24gcG9pbnRzPSI5OS42MzIgMjE5Ljg0OSAxNjcuODU4IDE4MC40NTggMjM2LjA4NCAyMTkuODQ5IDE2Ny44NTggMjU5LjIzOSA5OS42MzIgMjE5Ljg0OSIgc3R5bGU9ImZpbGw6IzMwM2U0ZSIvPjxwb2x5Z29uIHBvaW50cz0iMjM1LjgxMyAyMDEuNzIxIDIzNS44MTMgMTIzLjI1NCAxNjcuODU4IDg0LjAyIDk5LjkwMyAxMjMuMjU0IDk5LjkwMyAyMDEuNzIxIDE2Ny44NTggMjQwLjk1NSAyMzUuODEzIDIwMS43MjEiIHN0eWxlPSJmaWxsOiM3NGMyYjAiLz48cG9seWdvbiBwb2ludHM9Ijk5LjYzMiAxMjMuNDEgMTY3Ljg1OCA4NC4wMiAyMzYuMDg0IDEyMy40MSAxNjcuODU4IDE2Mi44IDk5LjYzMiAxMjMuNDEiIHN0eWxlPSJmaWxsOiMzMDNlNGUiLz48cGF0aCBkPSJNMzk5LjE0MTgsMTgxLjU0MjJoLTM5bC04LjM5OTQsMTguN2gtNy43bDMyLTcwaDcuM2wzMiw3MGgtNy44Wm0tMi43LTYtMTYuOC0zNy42LTE2LjgsMzcuNloiIHN0eWxlPSJmaWxsOiM0YzYyNzUiLz48cGF0aCBkPSJNNDU3LjA0MjIsMTM2LjY0MjhoLTI0LjZ2LTYuNGg1Ni42djYuNGgtMjQuNnY2My42aC03LjRaIiBzdHlsZT0iZmlsbDojNGM2Mjc1Ii8+PHBhdGggZD0iTTU5My41NDEyLDEzMC4yNDI0djcwaC03LjF2LTU2bC0yNy41LDQ3LjFoLTMuNWwtMjcuNS00Ni44djU1LjdoLTcuMXYtNzBoNi4xbDMwLjQsNTEuOSwzMC4xLTUxLjlaIiBzdHlsZT0iZmlsbDojNGM2Mjc1Ii8+PHBhdGggZD0iTTY0OC4wOTEsMTk2LjE5MjZhMzMuOTUyNiwzMy45NTI2LDAsMCwxLTEzLjItMTIuNzUsMzcuMjQzMSwzNy4yNDMxLDAsMCwxLDAtMzYuNCwzMy45NTI2LDMzLjk1MjYsMCwwLDEsMTMuMi0xMi43NSw0MC41MjU2LDQwLjUyNTYsMCwwLDEsMzcuNi0uMDUsMzQuMDYzOCwzNC4wNjM4LDAsMCwxLDEzLjE1LDEyLjc1LDM3LjA5NTQsMzcuMDk1NCwwLDAsMSwwLDM2LjUsMzQuMDM1NywzNC4wMzU3LDAsMCwxLTEzLjE1LDEyLjc1LDQwLjUyNTYsNDAuNTI1NiwwLDAsMS0zNy42LS4wNVptMzMuODUtNS43YTI3LjE0MzEsMjcuMTQzMSwwLDAsMCwxMC41LTEwLjQsMzAuOTE1MywzMC45MTUzLDAsMCwwLDAtMjkuNjk5MiwyNy4xNSwyNy4xNSwwLDAsMC0xMC41LTEwLjQsMzEuOTc0NiwzMS45NzQ2LDAsMCwwLTMwLjA1LDAsMjcuMzk3MiwyNy4zOTcyLDAsMCwwLTEwLjYwMDUsMTAuNCwzMC41NjQ4LDMwLjU2NDgsMCwwLDAsMCwyOS42OTkyLDI3LjM5LDI3LjM5LDAsMCwwLDEwLjYwMDUsMTAuNCwzMS45NzQ2LDMxLjk3NDYsMCwwLDAsMzAuMDUsMFoiIHN0eWxlPSJmaWxsOiM0YzYyNzUiLz48L3N2Zz4="}}]);