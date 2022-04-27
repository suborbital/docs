"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2913],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(o),d=n,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return o?r.createElement(m,s(s({ref:t},c),{},{components:o})):r.createElement(m,s({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},6195:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),s=["components"],i={},l="The Suborbital Ecosystem",u={unversionedId:"suborbital-ecosystem/the-suborbital-ecosystem",id:"suborbital-ecosystem/the-suborbital-ecosystem",title:"The Suborbital Ecosystem",description:"Suborbital is a collection of open source projects and an associated enterprise product. Everything we do revolves around making server-side WebAssembly a useful and powerful tool for developers.",source:"@site/docs/suborbital-ecosystem/the-suborbital-ecosystem.md",sourceDirName:"suborbital-ecosystem",slug:"/suborbital-ecosystem/the-suborbital-ecosystem",permalink:"/docs/laura/87-CI-checks-for-docs-a11y/suborbital-ecosystem/the-suborbital-ecosystem",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/suborbital-ecosystem/the-suborbital-ecosystem.md",tags:[],version:"current",lastUpdatedAt:1643759246,formattedLastUpdatedAt:"2/1/2022",frontMatter:{},sidebar:"docs",next:{title:"Glossary",permalink:"/docs/laura/87-CI-checks-for-docs-a11y/suborbital-ecosystem/glossary"}},c={},p=[{value:"Atmo",id:"atmo",level:3},{value:"Subo",id:"subo",level:3},{value:"Sat",id:"sat",level:3},{value:"Compute",id:"compute",level:3},{value:"The building blocks",id:"the-building-blocks",level:3}],b={toc:p};function d(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-suborbital-ecosystem"},"The Suborbital Ecosystem"),(0,a.kt)("p",null,"Suborbital is a collection of open source projects and an associated enterprise product. Everything we do revolves around making ",(0,a.kt)("strong",{parentName:"p"},"server-side WebAssembly")," a useful and powerful tool for developers."),(0,a.kt)("h3",{id:"atmo"},"Atmo"),(0,a.kt)("p",null,"The flagship open source project is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo"),", which is an all-in-one server application environment for pure-WebAssembly cloud applications. What does that mean?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Atmo allows you to build powerful backend services by writing serverless functions in various languages.")),(0,a.kt)("p",null,"Atmo uses a declarative file called ",(0,a.kt)("strong",{parentName:"p"},"The Directive")," to describe your application's business logic, and is able to set up and operate your application without any boilerplate code. It manages all connections your application needs (such as caches, messaging systems, databases, etc), and it automatically manages things like networking, autoscaling, TLS, and more."),(0,a.kt)("h3",{id:"subo"},"Subo"),(0,a.kt)("p",null,"In order to make WebAssembly on the server as easy to develop and operate as possible, we created the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo"},"Subo CLI"),". Subo is the only tool you need to create Suborbital projects, build any language into WebAssembly, package your applications, run development servers, and much more. Our CLI can use ",(0,a.kt)("a",{parentName:"p",href:"https://docker.com"},"Docker")," to build many languages (Rust, Go, JavaScript/TypeScript, AssemblyScript, Grain, and more) to Wasm without needing to install any of the individual toolchains for these languages."),(0,a.kt)("h3",{id:"sat"},"Sat"),(0,a.kt)("p",null,"While Atmo is an all-in-one application server, ",(0,a.kt)("a",{parentName:"p",href:"https:/github.com/suborbital/sat"},"Sat")," is instead a small, low-overhead edge compute server that executes a single WebAssembly function as efficiently as possible. Sat is designed to operate in resource-constrained environments such as edge data centers and small ARM devices. Sat can also operate in a meshed configuration known as a 'constellation' using its daemon, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/sat/tree/main/constd"},"constd"),", which turns Sat into an infinitely scaleble Functions-as-a-Service environment suitable for serverless functions in central or edge cloud."),(0,a.kt)("h3",{id:"compute"},"Compute"),(0,a.kt)("p",null,"Our enterprise product, ",(0,a.kt)("a",{parentName:"p",href:"https://suborbital.dev"},"Compute"),", is a SaaS extension engine build on top of Atmo. Compute allows SaaS product developers to run functions - written by their users - in a secure and serverless environment. Compute allows users to customize and extend products to fit their exact needs. Product developers can add hook points anywhere in their app's business logic to run user-defined functions."),(0,a.kt)("p",null,"Compute includes a control plane for integration with Kubernetes and enterprise environments as well as a builder service that can compile users' code to Wasm easily. It also includes a powerful ",(0,a.kt)("a",{parentName:"p",href:"/docs/laura/87-CI-checks-for-docs-a11y/compute/integrate-the-function-editor/code-editor"},"code editor")," which can be embedded into any web application."),(0,a.kt)("h3",{id:"the-building-blocks"},"The building blocks"),(0,a.kt)("p",null,"All of Suborbital is built on top of three building blocks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suborbital/reactr"},"Reactr")," is our multi-tenant WebAssembly function scheduler which securely and efficiently runs Wasm functions while providing useful APIs for developers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suborbital/vektor"},"Vektor")," is a web server framework for Go that tightly integrates with Reactr and Grav."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suborbital/grav"},"Grav")," is a networking library that facilitates discovery and async communication between nodes in a distributed network of servers.")))}d.isMDXComponent=!0}}]);