"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9942],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||l[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3596:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={},s="Pods",d={unversionedId:"grav/introduction/concepts/pods",id:"grav/introduction/concepts/pods",title:"Pods",description:"The Grav instance on its own is not very useful without anything connected to it. A Pod is a lightweight bi-directional connection to the Grav instance. A Pod is created by calling the Connect() method on the Grav instance. The Grav instance can be connected to many Pods, up to thousands at once. A Pod can send messages to be routed through the bus, and it can receive messages from the bus.",source:"@site/docs/grav/introduction/concepts/pods.md",sourceDirName:"grav/introduction/concepts",slug:"/grav/introduction/concepts/pods",permalink:"/docs/oscar/vektor-websockets/grav/introduction/concepts/pods",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/introduction/concepts/pods.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"The Grav Instance",permalink:"/docs/oscar/vektor-websockets/grav/introduction/concepts/the-grav-instance"},next:{title:"Reciepts",permalink:"/docs/oscar/vektor-websockets/grav/introduction/concepts/receipts"}},u={},l=[],p={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pods"},"Pods"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Grav")," instance on its own is not very useful without anything connected to it. A ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod")," is a lightweight bi-directional connection to the Grav instance. A Pod is created by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect()")," method on the Grav instance. The Grav instance can be connected to many Pods, up to thousands at once. A Pod can send messages to be routed through the bus, and it can receive messages from the bus."),(0,a.kt)("p",null,"The two core methods of a Pod are ",(0,a.kt)("inlineCode",{parentName:"p"},"Send(msg)")," and  ",(0,a.kt)("inlineCode",{parentName:"p"},"On(msgFunc)"),", which allow sending and receiving messages. The caller of ",(0,a.kt)("inlineCode",{parentName:"p"},"On")," provides a function to handle incoming messages ","(","called the ",(0,a.kt)("inlineCode",{parentName:"p"},"receive function"),")",", and it is called each time a message comes from the Grav instance. There are other methods to do more specific operations, which will be discussed in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/oscar/vektor-websockets/grav/usage/getting-started/receiving-messages"},"Usage")," section."),(0,a.kt)("p",null,'A Pod is mainly just a connection, allowing the Grav instance to do the majority of the work, but it does contain some limited "smarts". For example, Pods include a filter that gives you control over which messages get received. Pods are in constant communication with the Grav instance, and they are able to report things such as their health, failed message delivery, and more. Unhealthy Pods will be disconnected after a certain number of failed deliveries, but pods that recover automatically get failed messages replayed.'),(0,a.kt)("p",null,"Using Pods is discussed in detail in the ",(0,a.kt)("a",{parentName:"p",href:"../../usage/getting-started/"},"Usage")," section."))}m.isMDXComponent=!0}}]);