"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9859],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:e},p),{},{components:n})):a.createElement(f,i({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3868:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Constellations",c={unversionedId:"sat/constellations",id:"sat/constellations",title:"Constellations",description:"Sat is designed to run in a constellation, i.e. a meshed cluster of instances. This enables very interesting network topologies which can run applications in massively distributed and 'edge' environments. The Sat project includes the constd tool, which is a companion constellation manager that can run Atmo applications using a Sat constellation.",source:"@site/docs/sat/constellations.md",sourceDirName:"sat",slug:"/sat/constellations",permalink:"/docs/oscar/update-nodejs-docs/sat/constellations",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/sat/constellations.md",tags:[],version:"current",lastUpdatedAt:1650471099,formattedLastUpdatedAt:"4/20/2022",frontMatter:{},sidebar:"docs",previous:{title:"Building Sat",permalink:"/docs/oscar/update-nodejs-docs/sat/building-sat"},next:{title:"Subo",permalink:"/docs/oscar/update-nodejs-docs/subo/"}},p={},u=[{value:"Build and run constd",id:"build-and-run-constd",level:2}],d={toc:u};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"constellations"},"Constellations"),(0,r.kt)("p",null,"Sat is designed to run in a constellation, i.e. a meshed cluster of instances. This enables very interesting network topologies which can run applications in massively distributed and 'edge' environments. The Sat project includes the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suborbital/sat/tree/main/constd"},(0,r.kt)("inlineCode",{parentName:"a"},"constd"))," tool, which is a companion constellation manager that can run ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo")," applications using a Sat constellation."),(0,r.kt)("p",null,"Atmo applications are comprised of several functions that coordinate to create a backend system. Since these projects are ",(0,r.kt)("a",{parentName:"p",href:"https://atmo.suborbital.dev/concepts/the-directive"},"declarative"),", it is possible to distribute the app's compute and let the constellation figure out how to efficiently execute your application. That's the goal of ",(0,r.kt)("inlineCode",{parentName:"p"},"constd"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"constd")," uses two main components to run your application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sat, a small and fast WebAssembly server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atmo-proxy"),", an application-aware router")),(0,r.kt)("h2",{id:"build-and-run-constd"},"Build and run constd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You'll need Go (and optionally Docker) to run Sat and ",(0,r.kt)("inlineCode",{parentName:"p"},"constd"),", and you'll need to clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suborbital/sat"},"Sat")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo")," repos.")),(0,r.kt)("p",null,"To get started, build ",(0,r.kt)("inlineCode",{parentName:"p"},"atmo-proxy"),". In the Atmo repo, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make atmo/proxy\n")),(0,r.kt)("p",null,"This installs ",(0,r.kt)("inlineCode",{parentName:"p"},"atmo-proxy")," into your ",(0,r.kt)("inlineCode",{parentName:"p"},"GOBIN"),"."),(0,r.kt)("p",null,"Next, in the Sat repo, build ",(0,r.kt)("inlineCode",{parentName:"p"},"constd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make constd/install\n")),(0,r.kt)("p",null,"Now launch ",(0,r.kt)("inlineCode",{parentName:"p"},"constd")," by providing the path to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/oscar/update-nodejs-docs/atmo/usage/build-your-application"},"Runnable Bundle"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CONSTD_EXEC_MODE=metal constd {absolute/path/to}/atmo/example-project/runnables.wasm.zip\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"constd")," will launch ",(0,r.kt)("inlineCode",{parentName:"p"},"atmo-proxy")," and a constellation of Sat instances. Make a request to test it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:8080/hello -d 'my friend'\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"atmo-proxy")," receives the request, and proxies execution of the WebAssembly functions to the Sat constellation."),(0,r.kt)("p",null,"Currently, the following features normally found in an Atmo project won't work very well:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access to cache"),(0,r.kt)("li",{parentName:"ul"},"Authentication for HTTP/GraphQL requests"),(0,r.kt)("li",{parentName:"ul"},"Access to static files"),(0,r.kt)("li",{parentName:"ul"},"Access to databases")),(0,r.kt)("p",null,"But these will come in time!"))}m.isMDXComponent=!0}}]);