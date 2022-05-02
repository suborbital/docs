"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7699],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return g}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),d=c(r),g=a,f=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(f,s(s({ref:e},l),{},{components:r})):n.createElement(f,s({ref:e},l))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3879:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={},p="Transports",c={unversionedId:"grav/networking/transports/getting-started-transports",id:"grav/networking/transports/getting-started-transports",title:"Transports",description:"Transports are plugins that allow Grav instances to connect",source:"@site/docs/grav/networking/transports/getting-started-transports.md",sourceDirName:"grav/networking/transports",slug:"/grav/networking/transports/getting-started-transports",permalink:"/docs/ramonh/test-a11y/grav/networking/transports/getting-started-transports",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/networking/transports/getting-started-transports.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Grav Instance Options",permalink:"/docs/ramonh/test-a11y/grav/usage/getting-started/grav-instance-options"},next:{title:"HTTP Transport",permalink:"/docs/ramonh/test-a11y/grav/networking/transports/http-transport"}},l={},u=[],d={toc:u};function g(t){var e=t.components,r=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transports"},"Transports"),(0,o.kt)("p",null,"Transports are plugins that allow Grav instances to connect\nto one another over the network. In order to keep Grav itself\nas simple as possible, all messages remain in-process only\nunless a transport plugin is configured."),(0,o.kt)("p",null,"There are two types of Transports; mesh and bridge."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mesh transports connect Grav nodes to one another directly, forming a mesh network of instances which is completely decentralized."),(0,o.kt)("li",{parentName:"ul"},"Bridge transports connect a Grav node to a 'bridge' such as a centralized broker to allow for additional topographies.")),(0,o.kt)("p",null,"Grav has three first-party transports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTTP, a simple mesh transport using HTTP requests to emit messages."),(0,o.kt)("li",{parentName:"ul"},"Websocket, a streaming mesh transport based on standard websockets."),(0,o.kt)("li",{parentName:"ul"},"NATS, a streaming bridge transport based on the popular NATS server.")),(0,o.kt)("p",null,"Grav transports are designed as plugins, and as such anyone\ncan create one for their own purposes. Transports for\nadditional platforms such as Kafka are planned.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/grav/blob/main/transport"},"transport")," directory\nto see example transport code."))}g.isMDXComponent=!0}}]);