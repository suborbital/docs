"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[4927],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},611:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="Glossary",u={unversionedId:"atmo/concepts/glossary",id:"atmo/concepts/glossary",title:"Glossary",description:"| Term                                     | Definition                                                                                                                                                                                                                                                                                      | Other form(s)              |",source:"@site/docs/atmo/concepts/glossary.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/glossary",permalink:"/docs/laura/41-review-documentation-around-compute-repl-and-actual-usage/atmo/concepts/glossary",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/concepts/glossary.md",tags:[],version:"current",lastUpdatedAt:1647270084,formattedLastUpdatedAt:"3/14/2022",frontMatter:{},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/laura/41-review-documentation-around-compute-repl-and-actual-usage/atmo/get-started"},next:{title:"Runnables",permalink:"/docs/laura/41-review-documentation-around-compute-repl-and-actual-usage/atmo/concepts/runnables"}},c=[],d={toc:c};function p(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Term"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"),(0,o.kt)("th",{parentName:"tr",align:null},"Other form(s)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"WebAssembly"),(0,o.kt)("td",{parentName:"tr",align:null},"A binary instruction format, designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications."),(0,o.kt)("td",{parentName:"tr",align:null},"Wasm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"WASI"),(0,o.kt)("td",{parentName:"tr",align:null},"The WebAssembly System Interface, an API designed by the Wasmtime project that provides Wasm modules with access to several operating-system-like features, including files and filesystems, Berkeley sockets, clocks, and random numbers"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/laura/41-review-documentation-around-compute-repl-and-actual-usage/atmo/concepts/runnables"},"Runnable")),(0,o.kt)("td",{parentName:"tr",align:null},"A Runnable can be written in any of the supported languages (such as TypeScript, Rust or Swift), and is compiled to WebAssembly when you build it."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/laura/41-review-documentation-around-compute-repl-and-actual-usage/atmo/concepts/the-directive"},"The Directive")),(0,o.kt)("td",{parentName:"tr",align:null},"A declarative file that allows you to describe your application's business logic. By describing your application declaratively, you can avoid all of the boilerplate code that normally comes with building a web service such as binding to ports, setting up TLS, constructing a router, etc."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/laura/41-review-documentation-around-compute-repl-and-actual-usage/atmo/usage/creating-handlers"},"Handler")),(0,o.kt)("td",{parentName:"tr",align:null},"Each handler tells Atmo how to handle a resource. A resource is an input that Atmo makes available via HTTP endpoints, event handlers, and more. To start, Atmo supports handlers for HTTP requests, particulary designed to help building web APIs. Handlers are declared in the directive."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../usage/building-a-bundle.md"},"Bundle")),(0,o.kt)("td",{parentName:"tr",align:null},"A Bundle is a .wasm.zip file that includes your Directive, along with all of your Runnables compiled to WebAssembly modules. Bundles are built using subo."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Building Blocks"),(0,o.kt)("td",{parentName:"tr",align:null},"The projects that are used to build Atmo (Reactr, Vektor, Grav)"),(0,o.kt)("td",{parentName:"tr",align:null},"RVG")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FFI"),(0,o.kt)("td",{parentName:"tr",align:null},"The concept of two different programming languages calling functions that one another have exposed; this is how Runnable WebAssembly modules communicate with Reactr/Atmo"),(0,o.kt)("td",{parentName:"tr",align:null},"Foreign Function Interface")))))}p.isMDXComponent=!0}}]);