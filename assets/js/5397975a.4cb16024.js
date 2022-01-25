"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[4240],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,d=g["".concat(u,".").concat(m)]||g[m]||s[m]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9306:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},u="Structured logging",p={unversionedId:"atmo/runnable-api/logging",id:"atmo/runnable-api/logging",isDocsHomePage:!1,title:"Structured logging",description:"Your Runnable code can log to Atmo's structured output using",source:"@site/docs/atmo/runnable-api/logging.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/logging",permalink:"/docs/docs/atmo/runnable-api/logging",editUrl:"https://github.com/suborbital/docs/docs/atmo/runnable-api/logging.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"HTTP requests",permalink:"/docs/docs/atmo/runnable-api/http"},next:{title:"Handling requests",permalink:"/docs/docs/atmo/runnable-api/request"}},c=[{value:"Info",id:"info",children:[],level:2},{value:"Warn",id:"warn",children:[],level:2},{value:"Error",id:"error",children:[],level:2}],s={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"structured-logging"},"Structured logging"),(0,l.kt)("p",null,"Your Runnable code can log to Atmo's structured output using\nthe logging methods."),(0,l.kt)("p",null,"For Rust, these methods are available under the ",(0,l.kt)("inlineCode",{parentName:"p"},"log")," module."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"log::info()"),". "),(0,l.kt)("p",null,"For Swift, they are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"Log"),"."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"Suborbital.LogInfo()")," "),(0,l.kt)("p",null,"For TypeScript/AssemblyScript they are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"log"),"."),(0,l.kt)("p",null,"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"import { logInfo } from '@suborbital/suborbital'")),(0,l.kt)("p",null,"The following namespace methods are available:"),(0,l.kt)("h2",{id:"info"},"Info"),(0,l.kt)("p",null,"Logs the message with the 'info' level:"),(0,l.kt)("p",null,"Rust:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn info(msg: &str)\n")),(0,l.kt)("p",null,"AssemblyScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function logInfo(msg: string): void\n")),(0,l.kt)("p",null,"Swift:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func LogInfo(msg: String)\n")),(0,l.kt)("h2",{id:"warn"},"Warn"),(0,l.kt)("p",null,"Logs the message with the 'warn' level:"),(0,l.kt)("p",null,"Rust:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn warn(msg: &str)\n")),(0,l.kt)("p",null,"AssemblyScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function logWarn(msg: string): void\n")),(0,l.kt)("p",null,"Swift:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func LogWarn(msg: String)\n")),(0,l.kt)("h2",{id:"error"},"Error"),(0,l.kt)("p",null,"Logs the message with the 'err' level:"),(0,l.kt)("p",null,"Rust:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn error(msg: &str)\n")),(0,l.kt)("p",null,"AssemblyScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function logErr(msg: string): void\n")),(0,l.kt)("p",null,"Swift:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func LogErr(msg: String)\n")))}g.isMDXComponent=!0}}]);