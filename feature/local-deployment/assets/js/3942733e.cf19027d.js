"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={},s="State",l={unversionedId:"atmo/concepts/state",id:"atmo/concepts/state",title:"State",description:"Since Runnables are completely unaware of one another when being executed, there needs to be a way to pass data between them. Atmo uses a shared object called the request state to accomplish this. Request state is a key/value map that is updated automatically after each step in a handler.",source:"@site/docs/atmo/concepts/state.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/state",permalink:"/docs/feature/local-deployment/atmo/concepts/state",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/concepts/state.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"Feb 16, 2022",frontMatter:{},sidebar:"docs",previous:{title:"The Directive",permalink:"/docs/feature/local-deployment/atmo/concepts/the-directive"},next:{title:"Static Directory",permalink:"/docs/feature/local-deployment/atmo/concepts/static-directory"}},c={},i=[],p={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state"},"State"),(0,r.kt)("p",null,"Since Runnables are completely unaware of one another when being executed, there needs to be a way to pass data between them. Atmo uses a shared object called the ",(0,r.kt)("strong",{parentName:"p"},"request state")," to accomplish this. Request state is a key/value map that is updated automatically after each step in a handler."),(0,r.kt)("p",null,"Let's take a look at a handler from the Directive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"handlers:\n  - type: request\n    resource: /hello\n    method: POST\n    steps:\n      - fn: verify-request\n      - group:\n        - fn: modify-url\n        - fn: cache-get\n      - fn: fetch\n")),(0,r.kt)("p",null,"Here we can see a request with three steps. The first and third are single functions being called, and the second is a function group."),(0,r.kt)("p",null,"After each step in the handler, the request state is updated from the output of the functions in that step."),(0,r.kt)("p",null,"For example, after the ",(0,r.kt)("strong",{parentName:"p"},"first step"),", the state will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{\n    "verify-request": "ok"\n}\n')),(0,r.kt)("p",null,"And then after the ",(0,r.kt)("strong",{parentName:"p"},"second step"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{\n    "verify-request": "ok"\n    "modify-url": "https://github.com/suborbital"\n    "cache-get": {"Auth-Header": "nuw45tpjno998w3un10nfwe8h"}\n}\n')),(0,r.kt)("p",null,"When each step executes, the current request state is made available to the Runnable using ",(0,r.kt)("strong",{parentName:"p"},"Runnable API")," functions."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Request state is updated after each ",(0,r.kt)("strong",{parentName:"p"},"step"),", so it is important to note that multiple functions in a ",(0,r.kt)("strong",{parentName:"p"},"group")," will all receive the same state from the beginning of the step, and all of their outputs will be added to state after they've all completed executing.")),(0,r.kt)("p",null,"You can access request state like the following Runnable example written in Rust."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use suborbital::req;\n\n[...]\n\nlet url = req::state("modify-url");\n')),(0,r.kt)("p",null,"There are several clauses that allow you to control how the request state is set up ","(","for example, choosing the key that a function's output is stored in",")",", which will be covered later."))}u.isMDXComponent=!0}}]);