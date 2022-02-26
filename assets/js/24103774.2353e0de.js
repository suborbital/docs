"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[6600],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6567:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},l="What is Grav?",c={unversionedId:"grav/what-is-grav",id:"grav/what-is-grav",title:"What is Grav?",description:"Grav is an embedded distributed messaging library for Go applications",source:"@site/docs/grav/what-is-grav.md",sourceDirName:"grav",slug:"/grav/what-is-grav",permalink:"/docs/grav/what-is-grav",editUrl:"https://github.com/suborbital/docs/docs/grav/what-is-grav.md",tags:[],version:"current",lastUpdatedAt:1645910164,formattedLastUpdatedAt:"2/26/2022",frontMatter:{},sidebar:"docs",previous:{title:"Testing Vektor Servers",permalink:"/docs/vektor/testing-vk-servers"},next:{title:"The Grav Instance",permalink:"/docs/grav/introduction/concepts/the-grav-instance"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-grav"},"What is Grav?"),(0,o.kt)("p",null,"Grav is an embedded distributed messaging library for Go applications\nthat allows interconnected components of your system to communicate\neffectively in a reliable, asynchronous manner. HTTP and RPC are difficult\nto scale well in modern distributed systems, so Grav was created with\nend goal of adding a performant and resilient messaging system to\nvarious distributed environments."),(0,o.kt)("p",null,"Grav's main purpose is to act as a flexible abstraction that allows\nyour application to discover and communicate using a variety of\nprotocols without needing to re-write any code."),(0,o.kt)("p",null,"As of today, this project has several goals and a few non-goals as listed below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goals:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Have very low resource and memory consumption."),(0,o.kt)("li",{parentName:"ul"},"Be resilient against data loss due to node failure."),(0,o.kt)("li",{parentName:"ul"},"Act as a reliable core upon which more complex behaviour can be built."),(0,o.kt)("li",{parentName:"ul"},"Support request/reply and broadcast message patterns."),(0,o.kt)("li",{parentName:"ul"},"Support internal ","(","in-process",")"," and external ","(","networked",")"," messaging equally.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Non-Goals:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support every type of messaging pattern.")),(0,o.kt)("p",null,"Since Grav is embedded, it is instantiated as a ",(0,o.kt)("inlineCode",{parentName:"p"},"grav.Grav")," object\nthat your application code connects to in order to send and receive messages.\nGrav connects to other nodes via ",(0,o.kt)("a",{parentName:"p",href:"../../meshing/transports/"},"transport plugins")," which extend\nthe Grav core to become a networked distributed messaging mesh.\nGrav instances can also discover each other automatically using\n",(0,o.kt)("a",{parentName:"p",href:"../../meshing/discovery/"},"discovery plugins"),". "),(0,o.kt)("p",null," Grav does not require a centralized broker, and as such has some limitations,\nbut for certain applications it is vastly simpler (and more extensible)\nthan a centralized messaging system."))}d.isMDXComponent=!0}}]);