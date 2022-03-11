"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3886],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8631:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={},c="State",l={unversionedId:"atmo/concepts/state",id:"atmo/concepts/state",title:"State",description:"Since Runnables are completely unaware of one another when being executed, there needs to be a way to pass data between them. Atmo uses a shared object called the request state to accomplish this. Request state is a key/value map that is updated automatically after each step in a handler.",source:"@site/docs/atmo/concepts/state.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/state",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/atmo/concepts/state",editUrl:"https://github.com/suborbital/docs/docs/atmo/concepts/state.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"The Directive",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/atmo/concepts/the-directive"},next:{title:"Static Directory",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/atmo/concepts/static-directory"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state"},"State"),(0,o.kt)("p",null,"Since Runnables are completely unaware of one another when being executed, there needs to be a way to pass data between them. Atmo uses a shared object called the ",(0,o.kt)("strong",{parentName:"p"},"request state")," to accomplish this. Request state is a key/value map that is updated automatically after each step in a handler."),(0,o.kt)("p",null,"Let's take a look at a handler from the Directive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"handlers:\n  - type: request\n    resource: /hello\n    method: POST\n    steps:\n      - fn: verify-request\n      - group:\n        - fn: modify-url\n        - fn: cache-get\n      - fn: fetch\n")),(0,o.kt)("p",null,"Here we can see a request with three steps. The first and third are single functions being called, and the second is a function group."),(0,o.kt)("p",null,"After each step in the handler, the request state is updated from the output of the functions in that step."),(0,o.kt)("p",null,"For example, after the ",(0,o.kt)("strong",{parentName:"p"},"first step"),", the state will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'{\n    "verify-request": "ok"\n}\n')),(0,o.kt)("p",null,"And then after the ",(0,o.kt)("strong",{parentName:"p"},"second step"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'{\n    "verify-request": "ok"\n    "modify-url": "https://github.com/suborbital"\n    "cache-get": {"Auth-Header": "nuw45tpjno998w3un10nfwe8h"}\n}\n')),(0,o.kt)("p",null,"When each step executes, the current request state is made available to the Runnable using ",(0,o.kt)("strong",{parentName:"p"},"Runnable API")," functions."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Request state is updated after each ",(0,o.kt)("strong",{parentName:"p"},"step"),", so it is important to note that multiple functions in a ",(0,o.kt)("strong",{parentName:"p"},"group")," will all receive the same state from the beginning of the step, and all of their outputs will be added to state after they've all completed executing."))),(0,o.kt)("p",null,"You can access request state like the following Runnable example written in Rust."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use suborbital::req;\n\n[...]\n\nlet url = req::state("modify-url");\n')),(0,o.kt)("p",null,"There are several clauses that allow you to control how the request state is set up ","(","for example, choosing the key that a function's output is stored in",")",", which will be covered later."))}d.isMDXComponent=!0}}]);