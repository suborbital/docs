"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8264],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return p}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var M=n.createContext({}),u=function(e){var t=n.useContext(M),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(M.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,M=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),w=u(i),p=o,y=w["".concat(M,".").concat(p)]||w[p]||l[p]||a;return i?n.createElement(y,r(r({ref:t},c),{},{components:i})):n.createElement(y,r({ref:t},c))}));function p(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=w;var s={};for(var M in t)hasOwnProperty.call(t,M)&&(s[M]=t[M]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}w.displayName="MDXCreateElement"},3173:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return M},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=i(7462),o=i(3366),a=(i(7294),i(3905)),r=["components"],s={pagination_prev:null},M="Atmo",u={unversionedId:"atmo/atmo",id:"atmo/atmo",title:"Atmo",description:"The application framework for cloud native WebAssembly",source:"@site/docs/atmo/atmo.md",sourceDirName:"atmo",slug:"/atmo/",permalink:"/docs/jagger/webhooks-docs/atmo/",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/atmo.md",tags:[],version:"current",lastUpdatedAt:1647889177,formattedLastUpdatedAt:"3/21/2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"Getting started",permalink:"/docs/jagger/webhooks-docs/atmo/get-started"}},c={},l=[{value:"The application framework for cloud native WebAssembly",id:"the-application-framework-for-cloud-native-webassembly",level:3}],w={toc:l};function p(e){var t=e.components,s=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},w,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"atmo"},"Atmo"),(0,a.kt)("h3",{id:"the-application-framework-for-cloud-native-webassembly"},"The application framework for cloud native WebAssembly"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6632).Z,width:"775",height:"327"})),(0,a.kt)("p",null,"Atmo was born out of a desire to simplify server-side development by making it easy to bootstrap new projects, automatically scale to handle large amounts of traffic, and ensure their security with new technology and best practices, embodying the ",(0,a.kt)("a",{parentName:"p",href:"https://blog.suborbital.dev/building-a-better-monolith"},"SUFA design pattern"),"."),(0,a.kt)("p",null,"Atmo is an application framework for cloud native WebAssembly. It allows you to build polyglot server apps that execute in a high performance sandboxed execution engine. Atmo applications are comprised of functions compiled into WebAssembly modules from various languages such as JavaScript, Rust, Go, and Grain."),(0,a.kt)("p",null,"To develop applications using Atmo, a declarative file called the Directive is used to describe how to handle requests and events using composable functions. This allows the developer to describe the entirety of their application's behaviour, while only needing to write code for the functions being called. Atmo then uses the Directive to run the desired application, automatically running a web server, job scheduler, and messaging. It also includes automatic connections with resources like databases, and security best practices such as auto-TLS and capability-based security. Together these form a powerful platform upon which your application can thrive."),(0,a.kt)("p",null,"The core of Atmo is a job scheduler running WebAssembly modules, which allows running functions written in a variety of languages with near-native performance and massive improvements to security and ease of orchestration."),(0,a.kt)("p",null,"Atmo scales out using capability groups, which allows groups of Atmo instances to access sensitive resources, scale independently, and ensure your application is able to grow efficiently to handle increases in traffic with ease. Atmo's built in meshing capabilities means that building a flat network of instances is automated, secure, and efficient."),(0,a.kt)("p",null,'Atmo strives to make everything about developing and deploying your application simple so that you can focus on the hard problems of building your product. Atmo\'s mission statement is "Help developers build applications that are powerful but never complicated".'))}p.isMDXComponent=!0},6632:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iZThkMmZmNDgtODUxNy00ODM1LTlmYzQtMjUzMzQ2M2MwNzk4IiBkYXRhLW5hbWU9IkxheWVyIDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc3NS4xMTkyIDMyNi45NTk0Ij48cGF0aCBkPSJNMjY3LjIxLDIxNi4xNjQxVjEwOS40MzY2YTYuOTIzOCw2LjkyMzgsMCwwLDAtMy40NjE4LTUuOTk2TDE3MS4zMiw1MC4wNzY5YTYuOTIzNSw2LjkyMzUsMCwwLDAtNi45MjM2LDBMNzEuOTY3NCwxMDMuNDQwNmE2LjkyMzYsNi45MjM2LDAsMCwwLTMuNDYxOCw1Ljk5NlYyMTYuMTY0MWE2LjkyMzQsNi45MjM0LDAsMCwwLDMuNDYxOCw1Ljk5Nmw5Mi40Mjg3LDUzLjM2MzhhNi45MjM1LDYuOTIzNSwwLDAsMCw2LjkyMzYsMEwyNjMuNzQ4NSwyMjIuMTZBNi45MjM2LDYuOTIzNiwwLDAsMCwyNjcuMjEsMjE2LjE2NDFaIiBzdHlsZT0iZmlsbDojNGM2Mjc1Ii8+PHBvbHlnb24gcG9pbnRzPSI5OS42MzIgMjE5Ljg0OSAxNjcuODU4IDE4MC40NTggMjM2LjA4NCAyMTkuODQ5IDE2Ny44NTggMjU5LjIzOSA5OS42MzIgMjE5Ljg0OSIgc3R5bGU9ImZpbGw6IzMwM2U0ZSIvPjxwb2x5Z29uIHBvaW50cz0iMjM1LjgxMyAyMDEuNzIxIDIzNS44MTMgMTIzLjI1NCAxNjcuODU4IDg0LjAyIDk5LjkwMyAxMjMuMjU0IDk5LjkwMyAyMDEuNzIxIDE2Ny44NTggMjQwLjk1NSAyMzUuODEzIDIwMS43MjEiIHN0eWxlPSJmaWxsOiM3NGMyYjAiLz48cG9seWdvbiBwb2ludHM9Ijk5LjYzMiAxMjMuNDEgMTY3Ljg1OCA4NC4wMiAyMzYuMDg0IDEyMy40MSAxNjcuODU4IDE2Mi44IDk5LjYzMiAxMjMuNDEiIHN0eWxlPSJmaWxsOiMzMDNlNGUiLz48cGF0aCBkPSJNMzk5LjE0MTgsMTgxLjU0MjJoLTM5bC04LjM5OTQsMTguN2gtNy43bDMyLTcwaDcuM2wzMiw3MGgtNy44Wm0tMi43LTYtMTYuOC0zNy42LTE2LjgsMzcuNloiIHN0eWxlPSJmaWxsOiM0YzYyNzUiLz48cGF0aCBkPSJNNDU3LjA0MjIsMTM2LjY0MjhoLTI0LjZ2LTYuNGg1Ni42djYuNGgtMjQuNnY2My42aC03LjRaIiBzdHlsZT0iZmlsbDojNGM2Mjc1Ii8+PHBhdGggZD0iTTU5My41NDEyLDEzMC4yNDI0djcwaC03LjF2LTU2bC0yNy41LDQ3LjFoLTMuNWwtMjcuNS00Ni44djU1LjdoLTcuMXYtNzBoNi4xbDMwLjQsNTEuOSwzMC4xLTUxLjlaIiBzdHlsZT0iZmlsbDojNGM2Mjc1Ii8+PHBhdGggZD0iTTY0OC4wOTEsMTk2LjE5MjZhMzMuOTUyNiwzMy45NTI2LDAsMCwxLTEzLjItMTIuNzUsMzcuMjQzMSwzNy4yNDMxLDAsMCwxLDAtMzYuNCwzMy45NTI2LDMzLjk1MjYsMCwwLDEsMTMuMi0xMi43NSw0MC41MjU2LDQwLjUyNTYsMCwwLDEsMzcuNi0uMDUsMzQuMDYzOCwzNC4wNjM4LDAsMCwxLDEzLjE1LDEyLjc1LDM3LjA5NTQsMzcuMDk1NCwwLDAsMSwwLDM2LjUsMzQuMDM1NywzNC4wMzU3LDAsMCwxLTEzLjE1LDEyLjc1LDQwLjUyNTYsNDAuNTI1NiwwLDAsMS0zNy42LS4wNVptMzMuODUtNS43YTI3LjE0MzEsMjcuMTQzMSwwLDAsMCwxMC41LTEwLjQsMzAuOTE1MywzMC45MTUzLDAsMCwwLDAtMjkuNjk5MiwyNy4xNSwyNy4xNSwwLDAsMC0xMC41LTEwLjQsMzEuOTc0NiwzMS45NzQ2LDAsMCwwLTMwLjA1LDAsMjcuMzk3MiwyNy4zOTcyLDAsMCwwLTEwLjYwMDUsMTAuNCwzMC41NjQ4LDMwLjU2NDgsMCwwLDAsMCwyOS42OTkyLDI3LjM5LDI3LjM5LDAsMCwwLDEwLjYwMDUsMTAuNCwzMS45NzQ2LDMxLjk3NDYsMCwwLDAsMzAuMDUsMFoiIHN0eWxlPSJmaWxsOiM0YzYyNzUiLz48L3N2Zz4="}}]);