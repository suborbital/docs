"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[629],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5240:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="Data Plane vs Control Plane",s={unversionedId:"compute/concepts/data-plane-vs-control-plane",id:"compute/concepts/data-plane-vs-control-plane",title:"Data Plane vs Control Plane",description:"There are two components of Compute: the Data Plane and the Control Plane.",source:"@site/docs/compute/concepts/data-plane-vs-control-plane.md",sourceDirName:"compute/concepts",slug:"/compute/concepts/data-plane-vs-control-plane",permalink:"/docs/ramonh/wasm32-wasi-target-link/compute/concepts/data-plane-vs-control-plane",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/concepts/data-plane-vs-control-plane.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"Using Compute from Go",permalink:"/docs/ramonh/wasm32-wasi-target-link/compute/quickstart/client-libraries/golang"},next:{title:"Fully-qualified function names",permalink:"/docs/ramonh/wasm32-wasi-target-link/compute/concepts/fully-qualified-function-names"}},p={},u=[{value:"Data Plane",id:"data-plane",level:2},{value:"Control Plane",id:"control-plane",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2}],d={toc:u};function m(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-plane-vs-control-plane"},"Data Plane vs Control Plane"),(0,o.kt)("p",null,"There are two components of Compute: the Data Plane and the Control Plane."),(0,o.kt)("h2",{id:"data-plane"},"Data Plane"),(0,o.kt)("p",null,'The "data plane" is the component that actually ',(0,o.kt)("strong",{parentName:"p"},"executes")," your users' functions, and it is comprised of an auto-scaled group of containers running ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo"),". In your cluster, Atmo will be running in a pod called ",(0,o.kt)("inlineCode",{parentName:"p"},"scc-atmo"),"."),(0,o.kt)("p",null,"The Atmo instances are run in 'headless' mode, which means they load configuration from a remote source, the control plane in this case."),(0,o.kt)("h2",{id:"control-plane"},"Control Plane"),(0,o.kt)("p",null,"The Control Plane is comprised of two components; ",(0,o.kt)("inlineCode",{parentName:"p"},"scc-control-plane")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"scc-builder"),". These two components are responsible for administering the cluster of Atmo instances and your users' functions, respectively."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scc-builder")," is the component that builds your users' functions and provides the embedded code editor. It can compile various languages to WebAssembly, it powers the ",(0,o.kt)("a",{parentName:"li",href:"/docs/ramonh/wasm32-wasi-target-link/compute/integrate-the-function-editor/code-editor"},"code editor"),", and it provides CI/CD functionality for your users' code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scc-control-plane")," acts as a 'director' for Atmo, and controls things like autoscaling, collecting usage and error metrics, connecting to the Suborbital Telemetry service, and providing administrative APIs. It also manages the functions kept in your storage bucket.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The control plane connects to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.suborbital.network"),", our authentication, billing, metadata, and telemetry service. An environment token is needed for the control plane to operate."))),(0,o.kt)("h2",{id:"architecture-diagram"},"Architecture Diagram"),(0,o.kt)("p",null,"An Architecture diagram can be seen here:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1090).Z,width:"3300",height:"2646"})))}m.isMDXComponent=!0},1090:function(e,t,n){t.Z=n.p+"assets/images/flight_deck_internal_architecture-ce4cfff43c31e5d9b453f86be668bfa1.png"}}]);