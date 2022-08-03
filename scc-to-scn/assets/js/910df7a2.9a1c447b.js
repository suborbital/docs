"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3752],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},u="Runnables",s={unversionedId:"atmo/concepts/runnables",id:"atmo/concepts/runnables",title:"Runnables",description:"When building an application with Atmo, you segment your application's",source:"@site/docs/atmo/concepts/runnables.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/runnables",permalink:"/docs/scc-to-scn/atmo/concepts/runnables",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/concepts/runnables.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/scc-to-scn/atmo/get-started"},next:{title:"The Directive",permalink:"/docs/scc-to-scn/atmo/concepts/the-directive"}},l={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"runnables"},"Runnables"),(0,a.kt)("p",null,"When building an application with Atmo, you segment your application's\nlogic into individual functions known as ",(0,a.kt)("strong",{parentName:"p"},"Runnables"),". A Runnable can\nbe written in any of the supported languages (such as TypeScript, Rust\nor Swift), and is compiled to WebAssembly when you build it."),(0,a.kt)("p",null,"Runnables are completely independent from one another, and have no\nknowledge of each other's execution.\nRunnables take an input from Atmo, use the ",(0,a.kt)("a",{parentName:"p",href:"(../runnable-api/introduction)"},(0,a.kt)("strong",{parentName:"a"},"Runnable API"))," to run\nyour application logic, and then return an output."),(0,a.kt)("p",null,"You can see some example Runnables in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo/tree/main/example-project"},"example project"),"."),(0,a.kt)("p",null,"Atmo loads a ",(0,a.kt)("strong",{parentName:"p"},"Bundle")," of Runnables at startup and uses your application\n",(0,a.kt)("a",{parentName:"p",href:"./the-directive"},(0,a.kt)("strong",{parentName:"a"},"Directive")),' to set up and execute your application.\nRunnables are executed using a job scheduler, meaning that Atmo will\n"figure out" how to run your application as you\'ve designed,\nrather than needing to imperatively call functions and structure a\nlarge code project like you might be used to with other frameworks.'),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../runnable-api/introduction"},(0,a.kt)("strong",{parentName:"a"},"Runnable API"))," is a library that you include with your application\ncode to gain access to resources such as logging, caching, and access to\nthe network. Atmo dynamically binds resources to your Runnables at\nruntime. This means that you can swap out various components such as the\ncache being used without re-writing any code. The CLI tool ",(0,a.kt)("strong",{parentName:"p"},"subo")," takes\ncare of setting up projects, creating Runnables, and building Bundles."))}d.isMDXComponent=!0}}]);