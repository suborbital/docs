"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2913],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return b}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(o),b=r,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6195:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),s=["components"],i={},l="The Suborbital Ecosystem",c={unversionedId:"suborbital-ecosystem/the-suborbital-ecosystem",id:"suborbital-ecosystem/the-suborbital-ecosystem",title:"The Suborbital Ecosystem",description:"Suborbital is a collection of open source projects and an associated enterprise product. Everything we do revolves around making server-side WebAssembly a useful and powerful tool for developers.",source:"@site/docs/suborbital-ecosystem/the-suborbital-ecosystem.md",sourceDirName:"suborbital-ecosystem",slug:"/suborbital-ecosystem/the-suborbital-ecosystem",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/suborbital-ecosystem/the-suborbital-ecosystem",editUrl:"https://github.com/suborbital/docs/docs/suborbital-ecosystem/the-suborbital-ecosystem.md",tags:[],version:"current",lastUpdatedAt:1643759246,formattedLastUpdatedAt:"2/1/2022",frontMatter:{},sidebar:"docs",next:{title:"History of the Internet",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/intro-to-webassembly/history"}},u=[{value:"Atmo",id:"atmo",children:[],level:3},{value:"Subo",id:"subo",children:[],level:3},{value:"Sat",id:"sat",children:[],level:3},{value:"Compute",id:"compute",children:[],level:3},{value:"The building blocks",id:"the-building-blocks",children:[],level:3}],p={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-suborbital-ecosystem"},"The Suborbital Ecosystem"),(0,a.kt)("p",null,"Suborbital is a collection of open source projects and an associated enterprise product. Everything we do revolves around making ",(0,a.kt)("strong",{parentName:"p"},"server-side WebAssembly")," a useful and powerful tool for developers."),(0,a.kt)("h3",{id:"atmo"},"Atmo"),(0,a.kt)("p",null,"The flagship open source project is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo"),", which is an all-in-one server application environment for pure-WebAssembly cloud applications. What does that mean?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Atmo allows you to build powerful backend services by writing serverless functions in various languages.")),(0,a.kt)("p",null,"Atmo uses a declarative file called ",(0,a.kt)("strong",{parentName:"p"},"The Directive")," to describe your application's business logic, and is able to set up and operate your application without any boilerplate code. It manages all connections your application needs (such as caches, messaging systems, databases, etc), and it automatically manages things like networking, autoscaling, TLS, and more."),(0,a.kt)("h3",{id:"subo"},"Subo"),(0,a.kt)("p",null,"In order to make WebAssembly on the server as easy to develop and operate as possible, we created the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo"},"Subo CLI"),". Subo is the only tool you need to create Suborbital projects, build any language into WebAssembly, package your applications, run development servers, and much more. Our CLI can use ",(0,a.kt)("a",{parentName:"p",href:"https://docker.com"},"Docker")," to build many languages (Rust, Go, JavaScript/TypeScript, AssemblyScript, Grain, and more) to Wasm without needing to install any of the individual toolchains for these languages."),(0,a.kt)("h3",{id:"sat"},"Sat"),(0,a.kt)("p",null,"While Atmo is an all-in-one application server, ",(0,a.kt)("a",{parentName:"p",href:"https:/github.com/suborbital/sat"},"Sat")," is instead a small, low-overhead edge compute server that executes a single WebAssembly function as efficiently as possible. Sat is designed to operate in resource-constrained environments such as edge data centers and small ARM devices. Sat can also operate in a meshed configuration known as a 'constellation' using its daemon, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/sat/tree/main/constd"},"constd"),", which turns Sat into an infinitely scaleble Functions-as-a-Service environment suitable for serverless functions in central or edge cloud."),(0,a.kt)("h3",{id:"compute"},"Compute"),(0,a.kt)("p",null,"Our enterprise product, ",(0,a.kt)("a",{parentName:"p",href:"https://suborbital.dev"},"Compute"),", is a SaaS extension engine build on top of Atmo. Compute allows SaaS product developers to run functions - written by their users - in a secure and serverless environment. Compute allows users to customize and extend products to fit their exact needs. Product developers can add hook points anywhere in their app's business logic to run user-defined functions."),(0,a.kt)("p",null,"Compute includes a control plane for integration with Kubernetes and enterprise environments as well as a builder service that can compile users' code to Wasm easily. It also includes a powerful ",(0,a.kt)("a",{parentName:"p",href:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/compute/integrate-the-function-editor/code-editor"},"code editor")," which can be embedded into any web application."),(0,a.kt)("h3",{id:"the-building-blocks"},"The building blocks"),(0,a.kt)("p",null,"All of Suborbital is built on top of three building blocks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suborbital/reactr"},"Reactr")," is our multi-tenant WebAssembly function scheduler which securely and efficiently runs Wasm functions while providing useful APIs for developers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suborbital/vektor"},"Vektor")," is a web server framework for Go that tightly integrates with Reactr and Grav."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/suborbital/grav"},"Grav")," is a networking library that facilitates discovery and async communication between nodes in a distributed network of servers.")))}d.isMDXComponent=!0}}]);