"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9705],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=c(r),p=o,d=b["".concat(l,".").concat(p)]||b[p]||m[p]||a;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6461:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={},l="Why WebAssembly",c={unversionedId:"intro-to-webassembly/why-webassembly",id:"intro-to-webassembly/why-webassembly",title:"Why WebAssembly",description:"As the web has progressed from document database to application platform to runs-damn-near-everything platform, the needs of the web browser evolved. While JavaScript is a vibrant and powerful language with a wide variety of libraries and a robust ecosystem, many computing platforms rely on other languages.",source:"@site/docs/intro-to-webassembly/why-webassembly.md",sourceDirName:"intro-to-webassembly",slug:"/intro-to-webassembly/why-webassembly",permalink:"/docs/oscar/update-nodejs-docs/intro-to-webassembly/why-webassembly",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/intro-to-webassembly/why-webassembly.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"6/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Intro to WebAssembly",permalink:"/docs/oscar/update-nodejs-docs/intro-to-webassembly/intro-to-wasm"},next:{title:"History of the World Wide Web",permalink:"/docs/oscar/update-nodejs-docs/intro-to-webassembly/history"}},u={},m=[],b={toc:m};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-webassembly"},"Why WebAssembly"),(0,a.kt)("p",null,"As the web has progressed from document database to application platform to runs-damn-near-everything platform, the needs of the web browser evolved. While JavaScript is a vibrant and powerful language with a wide variety of libraries and a robust ecosystem, many computing platforms rely on other languages."),(0,a.kt)("p",null,"When building high-performance applications, some programming languages lend themselves better to the task of processing large amounts of data, running machine learning models, rendering complex graphics, etc. The advent of WebAssembly came from the desire to run C++ code natively in the browser. After an initial experiment called asm.js which was a compile target for C++ and Emscripten that generated JavaScript, the learnings were used to design a next-gen bytecode standard with a sandboxed execution environment. This is an abridged history on the evolution of WebAssembly into the portable, performant, and flexible technology we know today."),(0,a.kt)("p",null,"In our view, WebAssembly's utility rests upon three tentpoles: performance, portability, and security."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WebAssembly is portable, meaning it can be run on any operating system or hardware architecture"),(0,a.kt)("li",{parentName:"ul"},"WebAssembly is performant, providing nearly the same level of performance as native code"),(0,a.kt)("li",{parentName:"ul"},"WebAssembly is secure, ensuring code is executed within a sandbox that embodies deny-by-default security")),(0,a.kt)("p",null,"By capitalizing on these three properties, and adding the ability to compile many different languages to this common bytecode format, a powerful computing platform has emerged. WebAssembly has become a sought-after technology that is used to run code in the browser, on the server, on IoT devices, and more. It is a young but very promising tool that enables developers to solve everyday problems with a technology that is inherently more secure."))}p.isMDXComponent=!0}}]);