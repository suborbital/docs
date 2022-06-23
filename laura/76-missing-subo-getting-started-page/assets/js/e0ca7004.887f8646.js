"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9895],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1344:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Managing state",u={unversionedId:"atmo/usage/managing-state",id:"atmo/usage/managing-state",title:"Managing state",description:"Let's take another look at the example Directive:",source:"@site/docs/atmo/usage/managing-state.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/managing-state",permalink:"/docs/laura/76-missing-subo-getting-started-page/atmo/usage/managing-state",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/managing-state.md",tags:[],version:"current",lastUpdatedAt:1645128064,formattedLastUpdatedAt:"2/17/2022",frontMatter:{},sidebar:"docs",previous:{title:"Headless Mode",permalink:"/docs/laura/76-missing-subo-getting-started-page/atmo/usage/headless"},next:{title:"Scheduled jobs",permalink:"/docs/laura/76-missing-subo-getting-started-page/atmo/usage/schedules"}},p=[{value:"As",id:"as",children:[],level:2},{value:"With",id:"with",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-state"},"Managing state"),(0,i.kt)("p",null,"Let's take another look at the example Directive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"identifier: com.suborbital.test\nappVersion: v0.0.1\natmoVersion: v0.0.6\n\nhandlers:\n  - type: request\n    resource: /hello\n    method: POST\n    steps:\n      - group:\n        - fn: modify-url\n        - fn: helloworld-rs\n          as: hello\n      - fn: fetch-test\n        with:\n          url: modify-url\n          logme: hello\n")),(0,i.kt)("p",null,"After each ",(0,i.kt)("inlineCode",{parentName:"p"},"step"),", its function results gets stored in the request\nhandler's ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," is an ephemeral set of key/value pairs\ncreated for each request. State is used to pass values between\nfunctions, since they are completely isolated and unaware of one another."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"modify-url")," function for example takes the request body\n(in this case, a URL), and modifies it (by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"/suborbital")," to it)."),(0,i.kt)("p",null,"The second step (",(0,i.kt)("inlineCode",{parentName:"p"},"fetch-test"),") takes that modified URL and\nmakes an HTTP request to fetch it."),(0,i.kt)("p",null,"There are two clauses, ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"with")," that make working with\nrequest state easier."),(0,i.kt)("h2",{id:"as"},"As"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"as")," will assign the value returned by a function to a particular name in state.\nIn the above example, ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld-rs")," is saved into state as ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),".\nYou can think of this just like storing a value into a variable!"),(0,i.kt)("p",null,"For example, the request state after the first step will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{\n    "modify-url": "https://github.com/suborbital"\n    "hello": "hello github.com"\n}\n')),(0,i.kt)("h2",{id:"with"},"With"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"with"),' allows the developer to pass a "desired state" into a given function.\nRather than passing the entire state with the existing keys, the developer\ncan optionally define a custom state by choosing aliases for some or all of\nthe keys available in request state. This is just like choosing parameter\nvalues to pass into function arguments!'),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch-test")," function above will recieve a state object\nthat looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{\n    "url": "https://github.com/suborbital",\n    "logme": "hello github.com"\n}\n')),(0,i.kt)("p",null,"As outlined in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/laura/76-missing-subo-getting-started-page/atmo/concepts/the-directive"},"Directive page"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subo")," will automatically validate your Directive,\nincluding validating that you're not accessing keys that don't exist in state."))}d.isMDXComponent=!0}}]);