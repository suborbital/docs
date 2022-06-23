"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[1745],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5246:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Creating handlers",u={unversionedId:"atmo/usage/creating-handlers",id:"atmo/usage/creating-handlers",title:"Creating handlers",description:"If you haven't created a project yet, see Creating a Project first.",source:"@site/docs/atmo/usage/creating-handlers.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/creating-handlers",permalink:"/docs/laura/59-add-missing-put-options-head-request-docs-to-the-http-runtime-api/atmo/usage/creating-handlers",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/creating-handlers.md",tags:[],version:"current",lastUpdatedAt:1647288527,formattedLastUpdatedAt:"3/14/2022",frontMatter:{},sidebar:"docs",previous:{title:"Creating Runnables",permalink:"/docs/laura/59-add-missing-put-options-head-request-docs-to-the-http-runtime-api/atmo/usage/creating-runnables"},next:{title:"Build your Application",permalink:"/docs/laura/59-add-missing-put-options-head-request-docs-to-the-http-runtime-api/atmo/usage/build-your-application"}},p={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-handlers"},"Creating handlers"),(0,o.kt)("p",null,"If you haven't created a project yet, see ",(0,o.kt)("a",{parentName:"p",href:"../getstarted/creating-a-project"},"Creating a Project")," first."),(0,o.kt)("p",null,"Your project contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"Directive.yaml")," file that controls your\nentire application. ",(0,o.kt)("a",{parentName:"p",href:"../concepts/the-directive"},"The Directive")," is included in\nthe Runnable Bundle used by Atmo to run your application."),(0,o.kt)("p",null,"The Directive has some metadata such as a unique application\nidentifier and a version number, as well as some handlers."),(0,o.kt)("p",null,"Each handler tells Atmo how to handle a ",(0,o.kt)("strong",{parentName:"p"},"resource."),"\nA resource is an input that Atmo makes available via HTTP endpoints,\nevent handlers, and more."),(0,o.kt)("p",null,"Here is an example Directive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"identifier: com.suborbital.test\nappVersion: v0.0.1\natmoVersion: v0.4.2\n\nhandlers:\n  - type: request\n    resource: /hello\n    method: POST\n    steps:\n      - group:\n          - fn: modify-url\n          - fn: helloworld-rs\n            as: hello\n      - fn: fetch-test\n        with:\n          url: modify-url\n          logme: hello\n")),(0,o.kt)("p",null,"This describes the application being constructed. It declares a resource\n(",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP POST /hello"),") and a set of ",(0,o.kt)("inlineCode",{parentName:"p"},"steps")," to handle that request.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"steps")," are a set of Runnable functions to be ",(0,o.kt)("strong",{parentName:"p"},"composed")," when\nhandling requests to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/hello")," endpoint."),(0,o.kt)("p",null,"There are two types of ",(0,o.kt)("inlineCode",{parentName:"p"},"steps"),". The first step you see above is a ",(0,o.kt)("inlineCode",{parentName:"p"},"group"),".\nThis allows for all of the functions in that group to be executed ",(0,o.kt)("strong",{parentName:"p"},"concurrently"),"."),(0,o.kt)("p",null,"The second step shown above is a single ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," , which calls a Runnable\nthat uses the ",(0,o.kt)("a",{parentName:"p",href:"/docs/laura/59-add-missing-put-options-head-request-docs-to-the-http-runtime-api/atmo/runnable-api/introduction"},"Runnable API")," to make\nan HTTP request. The API is continually evolving to include more capabilities.\nIn addition to making HTTP requests, it includes logging, database\nconnections, caching, and more."),(0,o.kt)("p",null,"The output of the final function in a handler is used as the response data\nfor the request, by default. If you wish to use the output from a different\nfunction, you can include the ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," option in your handler, listing\nthe name of the function to use as a response. If the final step is a group,\nthen the ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," clause must be included."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n  - group:\n      - fn: modify-url\n      - fn: helloworld-rs\n        as: hello\n  - fn: fetch-test\n    with:\n      url: modify-url\n      logme: hello\nresponse: hello\n")),(0,o.kt)("p",null,"Your application can contain as many handlers as needed, and functions\ncan be re-used among many handlers. Each Runnable in your project can\nbe called by its name. The ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," tool will validate your directive to\nensure it is not calling any Runnables that don't exist in your project."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"with")," clauses shown above are addressed further in ",(0,o.kt)("a",{parentName:"p",href:"/docs/laura/59-add-missing-put-options-head-request-docs-to-the-http-runtime-api/atmo/usage/managing-state"},"Managing State"),"."))}m.isMDXComponent=!0}}]);