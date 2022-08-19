"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={pagination_next:null},l="Constellations",i={unversionedId:"sat/constellations",id:"sat/constellations",title:"Constellations",description:"Sat is designed to run in a constellation, i.e. a meshed cluster of instances. This enables very interesting network topologies which can run applications in massively distributed and 'edge' environments. The Sat project includes the constd tool, which is a companion constellation manager that can run Atmo applications using a Sat constellation.",source:"@site/docs/sat/constellations.md",sourceDirName:"sat",slug:"/sat/constellations",permalink:"/docs/preview/sat/constellations",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/sat/constellations.md",tags:[],version:"current",lastUpdatedAt:1660755378,formattedLastUpdatedAt:"Aug 17, 2022",frontMatter:{pagination_next:null},sidebar:"docs",previous:{title:"Building Sat",permalink:"/docs/preview/sat/building-sat"}},s={},c=[{value:"Build and run constd",id:"build-and-run-constd",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"constellations"},"Constellations"),(0,o.kt)("p",null,"Sat is designed to run in a constellation, i.e. a meshed cluster of instances. This enables very interesting network topologies which can run applications in massively distributed and 'edge' environments. The Sat project includes the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/sat/tree/main/constd"},(0,o.kt)("inlineCode",{parentName:"a"},"constd"))," tool, which is a companion constellation manager that can run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo")," applications using a Sat constellation."),(0,o.kt)("p",null,"Atmo applications are comprised of several functions that coordinate to create a backend system. Since these projects are ",(0,o.kt)("a",{parentName:"p",href:"https://atmo.suborbital.dev/concepts/the-directive"},"declarative"),", it is possible to distribute the app's compute and let the constellation figure out how to efficiently execute your application. That's the goal of ",(0,o.kt)("inlineCode",{parentName:"p"},"constd"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"constd")," uses two main components to run your application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sat, a small and fast WebAssembly server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"atmo-proxy"),", an application-aware router")),(0,o.kt)("h2",{id:"build-and-run-constd"},"Build and run constd"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You'll need Go (and optionally Docker) to run Sat and ",(0,o.kt)("inlineCode",{parentName:"p"},"constd"),", and you'll need to clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/sat"},"Sat")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo")," repos.")),(0,o.kt)("p",null,"To get started, build ",(0,o.kt)("inlineCode",{parentName:"p"},"atmo-proxy"),". In the Atmo repo, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make atmo/proxy\n")),(0,o.kt)("p",null,"This installs ",(0,o.kt)("inlineCode",{parentName:"p"},"atmo-proxy")," into your ",(0,o.kt)("inlineCode",{parentName:"p"},"GOBIN"),"."),(0,o.kt)("p",null,"Next, in the Sat repo, build ",(0,o.kt)("inlineCode",{parentName:"p"},"constd"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make constd/install\n")),(0,o.kt)("p",null,"Now launch ",(0,o.kt)("inlineCode",{parentName:"p"},"constd")," by providing the path to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/preview/atmo/usage/build-your-application"},"Runnable Bundle"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CONSTD_EXEC_MODE=metal constd {absolute/path/to}/atmo/example-project/runnables.wasm.zip\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"constd")," will launch ",(0,o.kt)("inlineCode",{parentName:"p"},"atmo-proxy")," and a constellation of Sat instances. Make a request to test it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:8080/hello -d 'my friend'\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"atmo-proxy")," receives the request, and proxies execution of the WebAssembly functions to the Sat constellation."),(0,o.kt)("p",null,"Currently, the following features normally found in an Atmo project won't work very well:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access to cache"),(0,o.kt)("li",{parentName:"ul"},"Authentication for HTTP/GraphQL requests"),(0,o.kt)("li",{parentName:"ul"},"Access to static files"),(0,o.kt)("li",{parentName:"ul"},"Access to databases")),(0,o.kt)("p",null,"But these will come in time!"))}u.isMDXComponent=!0}}]);