"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[629],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5240:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={},l="Data Plane vs Control Plane",s={unversionedId:"compute/concepts/data-plane-vs-control-plane",id:"compute/concepts/data-plane-vs-control-plane",title:"Data Plane vs Control Plane",description:"There are two components of Compute: the Data Plane and the Control Plane.",source:"@site/docs/compute/concepts/data-plane-vs-control-plane.md",sourceDirName:"compute/concepts",slug:"/compute/concepts/data-plane-vs-control-plane",permalink:"/docs/jagger/webhooks-docs/compute/concepts/data-plane-vs-control-plane",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/concepts/data-plane-vs-control-plane.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"Using Compute from Go",permalink:"/docs/jagger/webhooks-docs/compute/quickstart/client-libraries/golang"},next:{title:"Fully-qualified function names",permalink:"/docs/jagger/webhooks-docs/compute/concepts/fully-qualified-function-names"}},p={},u=[{value:"Data Plane",id:"data-plane",level:2},{value:"Control Plane",id:"control-plane",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2}],d={toc:u};function m(e){var t=e.components,c=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-plane-vs-control-plane"},"Data Plane vs Control Plane"),(0,r.kt)("p",null,"There are two components of Compute: the Data Plane and the Control Plane."),(0,r.kt)("h2",{id:"data-plane"},"Data Plane"),(0,r.kt)("p",null,'The "data plane" is the component that actually ',(0,r.kt)("strong",{parentName:"p"},"executes")," your users' functions, and it is comprised of an auto-scaled group of containers running ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo"),". In your cluster, Atmo will be running in a pod called ",(0,r.kt)("inlineCode",{parentName:"p"},"scc-atmo"),"."),(0,r.kt)("p",null,"The Atmo instances are run in 'headless' mode, which means they load configuration from a remote source, the control plane in this case."),(0,r.kt)("h2",{id:"control-plane"},"Control Plane"),(0,r.kt)("p",null,"The Control Plane is comprised of two components; ",(0,r.kt)("inlineCode",{parentName:"p"},"scc-control-plane")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scc-builder"),". These two components are responsible for administering the cluster of Atmo instances and your users' functions, respectively."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scc-builder")," is the component that builds your users' functions and provides the embedded code editor. It can compile various languages to WebAssembly, it powers the ",(0,r.kt)("a",{parentName:"li",href:"/docs/jagger/webhooks-docs/compute/integrate-the-function-editor/code-editor"},"code editor"),", and it provides CI/CD functionality for your users' code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scc-control-plane")," acts as a 'director' for Atmo, and controls things like autoscaling, collecting usage and error metrics, connecting to the Suborbital Telemetry service, and providing administrative APIs. It also manages the functions kept in your storage bucket.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The control plane connects to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.suborbital.network"),", our authentication, billing, metadata, and telemetry service. An environment token is needed for the control plane to operate."))),(0,r.kt)("h2",{id:"architecture-diagram"},"Architecture Diagram"),(0,r.kt)("p",null,"An Architecture diagram can be seen here:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1090).Z,width:"3300",height:"2646"})))}m.isMDXComponent=!0},1090:function(e,t,n){t.Z=n.p+"assets/images/flight_deck_internal_architecture-ce4cfff43c31e5d9b453f86be668bfa1.png"}}]);