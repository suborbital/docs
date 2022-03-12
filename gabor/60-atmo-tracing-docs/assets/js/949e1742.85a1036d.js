"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7699],{3905:function(t,r,e){e.d(r,{Zo:function(){return l},kt:function(){return g}});var n=e(7294);function a(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function o(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?o(Object(e),!0).forEach((function(r){a(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function i(t,r){if(null==t)return{};var e,n,a=function(t,r){if(null==t)return{};var e,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],r.indexOf(e)>=0||(a[e]=t[e]);return a}(t,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var p=n.createContext({}),c=function(t){var r=n.useContext(p),e=r;return t&&(e="function"==typeof t?t(r):s(s({},r),t)),e},l=function(t){var r=c(t.components);return n.createElement(p.Provider,{value:r},t.children)},u={inlineCode:"code",wrapper:function(t){var r=t.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(t,r){var e=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),d=c(e),g=a,f=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return e?n.createElement(f,s(s({ref:r},l),{},{components:e})):n.createElement(f,s({ref:r},l))}));function g(t,r){var e=arguments,a=r&&r.mdxType;if("string"==typeof t||a){var o=e.length,s=new Array(o);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var c=2;c<o;c++)s[c]=e[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,e)}d.displayName="MDXCreateElement"},3879:function(t,r,e){e.r(r),e.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=e(7462),a=e(3366),o=(e(7294),e(3905)),s=["components"],i={},p="Transports",c={unversionedId:"grav/networking/transports/getting-started-transports",id:"grav/networking/transports/getting-started-transports",title:"Transports",description:"Transports are plugins that allow Grav instances to connect",source:"@site/docs/grav/networking/transports/getting-started-transports.md",sourceDirName:"grav/networking/transports",slug:"/grav/networking/transports/getting-started-transports",permalink:"/docs/gabor/60-atmo-tracing-docs/grav/networking/transports/getting-started-transports",editUrl:"https://github.com/suborbital/docs/docs/grav/networking/transports/getting-started-transports.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Grav Instance Options",permalink:"/docs/gabor/60-atmo-tracing-docs/grav/usage/getting-started/grav-instance-options"},next:{title:"HTTP Transport",permalink:"/docs/gabor/60-atmo-tracing-docs/grav/networking/transports/http-transport"}},l=[],u={toc:l};function d(t){var r=t.components,e=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,e,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transports"},"Transports"),(0,o.kt)("p",null,"Transports are plugins that allow Grav instances to connect\nto one another over the network. In order to keep Grav itself\nas simple as possible, all messages remain in-process only\nunless a transport plugin is configured."),(0,o.kt)("p",null,"There are two types of Transports; mesh and bridge."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mesh transports connect Grav nodes to one another directly, forming a mesh network of instances which is completely decentralized."),(0,o.kt)("li",{parentName:"ul"},"Bridge transports connect a Grav node to a 'bridge' such as a centralized broker to allow for additional topographies.")),(0,o.kt)("p",null,"Grav has three first-party transports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTTP, a simple mesh transport using HTTP requests to emit messages."),(0,o.kt)("li",{parentName:"ul"},"Websocket, a streaming mesh transport based on standard websockets."),(0,o.kt)("li",{parentName:"ul"},"NATS, a streaming bridge transport based on the popular NATS server.")),(0,o.kt)("p",null,"Grav transports are designed as plugins, and as such anyone\ncan create one for their own purposes. Transports for\nadditional platforms such as Kafka are planned.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/grav/blob/main/transport"},"transport")," directory\nto see example transport code."))}d.isMDXComponent=!0}}]);