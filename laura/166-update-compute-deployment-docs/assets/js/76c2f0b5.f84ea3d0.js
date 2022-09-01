"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="The Directive",c={unversionedId:"atmo/concepts/the-directive",id:"atmo/concepts/the-directive",title:"The Directive",description:"The Directive is a declarative file that allows you to describe your application's business logic. By describing your application declaratively, you can avoid all of the boilerplate code that normally comes with building a web service such as binding to ports, setting up TLS, constructing a router, etc.",source:"@site/docs/atmo/concepts/the-directive.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/the-directive",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/concepts/the-directive",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/concepts/the-directive.md",tags:[],version:"current",lastUpdatedAt:1645128064,formattedLastUpdatedAt:"Feb 17, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Runnables",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/concepts/runnables"},next:{title:"State",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/concepts/state"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-directive"},"The Directive"),(0,o.kt)("p",null,"The Directive is a declarative file that allows you to describe your application's business logic. By describing your application declaratively, you can avoid all of the boilerplate code that normally comes with building a web service such as binding to ports, setting up TLS, constructing a router, etc."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"subo")," will validate your Directive to help ensure that it is correct.")),(0,o.kt)("p",null,"Here's an example Directive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"identifier: com.suborbital.guide\nappVersion: v0.0.1\natmoVersion: v0.4.2\n\nhandlers:\n  - type: request\n    resource: /hello\n    method: POST\n    steps:\n      - group:\n        - fn: modify-url\n        - fn: helloworld-rs\n          onErr:\n            any: continue\n\n      - fn: fetch\n\n  - type: request\n    resource: /set/:key\n    method: POST\n    steps:\n      - fn: cache-set\n\n  - type: request\n    resource: /get/:key\n    method: GET\n    steps:\n      - fn: cache-get\n")),(0,o.kt)("p",null,"This directive encapsulates all of the logic for your application. It describes three endpoints and the logic needed to handle them. Each handler describes a set of ",(0,o.kt)("inlineCode",{parentName:"p"},"steps")," that composes a series of Runnables to handle the request."),(0,o.kt)("p",null,"Atmo uses the Directive to build your application and run it automatically, without any need to write boilerplate yourself."))}u.isMDXComponent=!0}}]);