"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[4927],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},611:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s="Glossary",c={unversionedId:"atmo/concepts/glossary",id:"atmo/concepts/glossary",title:"Glossary",description:"| Term                                     | Definition                                                                                                                                                                                                                                                                                      | Other form(s)              |",source:"@site/docs/atmo/concepts/glossary.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/glossary",permalink:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/atmo/concepts/glossary",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/concepts/glossary.md",tags:[],version:"current",lastUpdatedAt:1647270084,formattedLastUpdatedAt:"3/14/2022",frontMatter:{},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/atmo/get-started"},next:{title:"Runnables",permalink:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/atmo/concepts/runnables"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"glossary"},"Glossary"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Term"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"),(0,l.kt)("th",{parentName:"tr",align:null},"Other form(s)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WebAssembly"),(0,l.kt)("td",{parentName:"tr",align:null},"A binary instruction format, designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications."),(0,l.kt)("td",{parentName:"tr",align:null},"Wasm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WASI"),(0,l.kt)("td",{parentName:"tr",align:null},"The WebAssembly System Interface, an API designed by the Wasmtime project that provides Wasm modules with access to several operating-system-like features, including files and filesystems, Berkeley sockets, clocks, and random numbers"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/atmo/concepts/runnables"},"Runnable")),(0,l.kt)("td",{parentName:"tr",align:null},"A Runnable can be written in any of the supported languages (such as TypeScript, Rust or Swift), and is compiled to WebAssembly when you build it."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/atmo/concepts/the-directive"},"The Directive")),(0,l.kt)("td",{parentName:"tr",align:null},"A declarative file that allows you to describe your application's business logic. By describing your application declaratively, you can avoid all of the boilerplate code that normally comes with building a web service such as binding to ports, setting up TLS, constructing a router, etc."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/atmo/usage/creating-handlers"},"Handler")),(0,l.kt)("td",{parentName:"tr",align:null},"Each handler tells Atmo how to handle a resource. A resource is an input that Atmo makes available via HTTP endpoints, event handlers, and more. To start, Atmo supports handlers for HTTP requests, particulary designed to help building web APIs. Handlers are declared in the directive."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../usage/building-a-bundle.md"},"Bundle")),(0,l.kt)("td",{parentName:"tr",align:null},"A Bundle is a .wasm.zip file that includes your Directive, along with all of your Runnables compiled to WebAssembly modules. Bundles are built using subo."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Building Blocks"),(0,l.kt)("td",{parentName:"tr",align:null},"The projects that are used to build Atmo (Reactr, Vektor, Grav)"),(0,l.kt)("td",{parentName:"tr",align:null},"RVG")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FFI"),(0,l.kt)("td",{parentName:"tr",align:null},"The concept of two different programming languages calling functions that one another have exposed; this is how Runnable WebAssembly modules communicate with Reactr/Atmo"),(0,l.kt)("td",{parentName:"tr",align:null},"Foreign Function Interface")))))}d.isMDXComponent=!0}}]);