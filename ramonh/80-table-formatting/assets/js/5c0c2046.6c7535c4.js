"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[4927],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,l(l({ref:e},u),{},{components:n})):r.createElement(g,l({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},611:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="Glossary",c={unversionedId:"atmo/concepts/glossary",id:"atmo/concepts/glossary",title:"Glossary",description:"| Term                                     | Definition                                                                                                                                                                                                                                                                                      | Other form(s)              |",source:"@site/docs/atmo/concepts/glossary.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/glossary",permalink:"/docs/ramonh/80-table-formatting/atmo/concepts/glossary",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/concepts/glossary.md",tags:[],version:"current",lastUpdatedAt:1647270084,formattedLastUpdatedAt:"3/14/2022",frontMatter:{},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/ramonh/80-table-formatting/atmo/get-started"},next:{title:"Runnables",permalink:"/docs/ramonh/80-table-formatting/atmo/concepts/runnables"}},u=[],m={toc:u};function p(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Term"),(0,o.kt)("th",{parentName:"tr",align:null},"Definition"),(0,o.kt)("th",{parentName:"tr",align:null},"Other form(s)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"WebAssembly"),(0,o.kt)("td",{parentName:"tr",align:null},"A binary instruction format, designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications."),(0,o.kt)("td",{parentName:"tr",align:null},"Wasm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"WASI"),(0,o.kt)("td",{parentName:"tr",align:null},"The WebAssembly System Interface, an API designed by the Wasmtime project that provides Wasm modules with access to several operating-system-like features, including files and filesystems, Berkeley sockets, clocks, and random numbers"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/ramonh/80-table-formatting/atmo/concepts/runnables"},"Runnable")),(0,o.kt)("td",{parentName:"tr",align:null},"A Runnable can be written in any of the supported languages (such as TypeScript, Rust or Swift), and is compiled to WebAssembly when you build it."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/ramonh/80-table-formatting/atmo/concepts/the-directive"},"The Directive")),(0,o.kt)("td",{parentName:"tr",align:null},"A declarative file that allows you to describe your application's business logic. By describing your application declaratively, you can avoid all of the boilerplate code that normally comes with building a web service such as binding to ports, setting up TLS, constructing a router, etc."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/ramonh/80-table-formatting/atmo/usage/creating-handlers"},"Handler")),(0,o.kt)("td",{parentName:"tr",align:null},"Each handler tells Atmo how to handle a resource. A resource is an input that Atmo makes available via HTTP endpoints, event handlers, and more. To start, Atmo supports handlers for HTTP requests, particulary designed to help building web APIs. Handlers are declared in the directive."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../usage/building-a-bundle.md"},"Bundle")),(0,o.kt)("td",{parentName:"tr",align:null},"A Bundle is a .wasm.zip file that includes your Directive, along with all of your Runnables compiled to WebAssembly modules. Bundles are built using subo."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Building Blocks"),(0,o.kt)("td",{parentName:"tr",align:null},"The projects that are used to build Atmo (Reactr, Vektor, Grav)"),(0,o.kt)("td",{parentName:"tr",align:null},"RVG")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FFI"),(0,o.kt)("td",{parentName:"tr",align:null},"The concept of two different programming languages calling functions that one another have exposed; this is how Runnable WebAssembly modules communicate with Reactr/Atmo"),(0,o.kt)("td",{parentName:"tr",align:null},"Foreign Function Interface")))))}p.isMDXComponent=!0}}]);