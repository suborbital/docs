"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[1745],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5246:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},s="Creating handlers",u={unversionedId:"atmo/usage/creating-handlers",id:"atmo/usage/creating-handlers",title:"Creating handlers",description:"If you haven't created a project yet, see Creating a Project first.",source:"@site/docs/atmo/usage/creating-handlers.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/creating-handlers",permalink:"/docs/preview/atmo/usage/creating-handlers",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/creating-handlers.md",tags:[],version:"current",lastUpdatedAt:1647288527,formattedLastUpdatedAt:"3/14/2022",frontMatter:{},sidebar:"docs",previous:{title:"Creating Runnables",permalink:"/docs/preview/atmo/usage/creating-runnables"},next:{title:"Build your Application",permalink:"/docs/preview/atmo/usage/build-your-application"}},c={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-handlers"},"Creating handlers"),(0,o.kt)("p",null,"If you haven't created a project yet, see ",(0,o.kt)("a",{parentName:"p",href:"../getstarted/creating-a-project"},"Creating a Project")," first."),(0,o.kt)("p",null,"Your project contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"Directive.yaml")," file that controls your\nentire application. ",(0,o.kt)("a",{parentName:"p",href:"../concepts/the-directive"},"The Directive")," is included in\nthe Runnable Bundle used by Atmo to run your application."),(0,o.kt)("p",null,"The Directive has some metadata such as a unique application\nidentifier and a version number, as well as some handlers."),(0,o.kt)("p",null,"Each handler tells Atmo how to handle a ",(0,o.kt)("strong",{parentName:"p"},"resource."),"\nA resource is an input that Atmo makes available via HTTP endpoints,\nevent handlers, and more."),(0,o.kt)("p",null,"Here is an example Directive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"identifier: com.suborbital.test\nappVersion: v0.0.1\natmoVersion: v0.4.2\n\nhandlers:\n  - type: request\n    resource: /hello\n    method: POST\n    steps:\n      - group:\n          - fn: modify-url\n          - fn: helloworld-rs\n            as: hello\n      - fn: fetch-test\n        with:\n          url: modify-url\n          logme: hello\n")),(0,o.kt)("p",null,"This describes the application being constructed. It declares a resource\n(",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP POST /hello"),") and a set of ",(0,o.kt)("inlineCode",{parentName:"p"},"steps")," to handle that request.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"steps")," are a set of Runnable functions to be ",(0,o.kt)("strong",{parentName:"p"},"composed")," when\nhandling requests to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/hello")," endpoint."),(0,o.kt)("p",null,"There are two types of ",(0,o.kt)("inlineCode",{parentName:"p"},"steps"),". The first step you see above is a ",(0,o.kt)("inlineCode",{parentName:"p"},"group"),".\nThis allows for all of the functions in that group to be executed ",(0,o.kt)("strong",{parentName:"p"},"concurrently"),"."),(0,o.kt)("p",null,"The second step shown above is a single ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," , which calls a Runnable\nthat uses the ",(0,o.kt)("a",{parentName:"p",href:"/docs/preview/atmo/runnable-api/introduction"},"Runnable API")," to make\nan HTTP request. The API is continually evolving to include more capabilities.\nIn addition to making HTTP requests, it includes logging, database\nconnections, caching, and more."),(0,o.kt)("p",null,"The output of the final function in a handler is used as the response data\nfor the request, by default. If you wish to use the output from a different\nfunction, you can include the ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," option in your handler, listing\nthe name of the function to use as a response. If the final step is a group,\nthen the ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," clause must be included."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n  - group:\n      - fn: modify-url\n      - fn: helloworld-rs\n        as: hello\n  - fn: fetch-test\n    with:\n      url: modify-url\n      logme: hello\nresponse: hello\n")),(0,o.kt)("p",null,"Your application can contain as many handlers as needed, and functions\ncan be re-used among many handlers. Each Runnable in your project can\nbe called by its name. The ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," tool will validate your directive to\nensure it is not calling any Runnables that don't exist in your project."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"with")," clauses shown above are addressed further in ",(0,o.kt)("a",{parentName:"p",href:"/docs/preview/atmo/usage/managing-state"},"Managing State"),"."))}m.isMDXComponent=!0}}]);