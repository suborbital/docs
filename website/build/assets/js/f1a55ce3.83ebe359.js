"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[2491],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,v=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6592:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={},s="The Grav Instance",p={unversionedId:"grav/introduction/concepts/the-grav-instance",id:"grav/introduction/concepts/the-grav-instance",isDocsHomePage:!1,title:"The Grav Instance",description:"The main component of Grav is the grav.Grav instance. It contains the core message bus that facilitates sending and receiving messages. Each application instance should get one Grav instance. If meshing is needed, Transport and Discovery plugins are configured when instantiating the Grav instance. Your application code then creates connections to the Grav instance in the form of Pods, which are discussed next.",source:"@site/docs/grav/introduction/concepts/the-grav-instance.md",sourceDirName:"grav/introduction/concepts",slug:"/grav/introduction/concepts/the-grav-instance",permalink:"/docs/docs/grav/introduction/concepts/the-grav-instance",editUrl:"https://github.com/suborbital/docs/docs/grav/introduction/concepts/the-grav-instance.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/23/2022",frontMatter:{},sidebar:"docs",previous:{title:"A brief overview",permalink:"/docs/docs/grav/introduction/concepts/a-brief-overview"},next:{title:"Pods",permalink:"/docs/docs/grav/introduction/concepts/pods"}},u=[],l={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-grav-instance"},"The Grav Instance"),(0,o.kt)("p",null,"The main component of Grav is the ",(0,o.kt)("inlineCode",{parentName:"p"},"grav.Grav")," instance. It contains the core message bus that facilitates sending and receiving messages. Each application instance should get one Grav instance. If meshing is needed, Transport and Discovery plugins are configured when instantiating the Grav instance. Your application code then creates connections to the Grav instance in the form of Pods, which are discussed next."),(0,o.kt)("p",null,'The Grav instance contains all of the "smarts", meaning that it is responsible for keeping track of all the connected Pods, verifying their health, and routing messages between them. The Transport and Discovery plugins connect to the Grav instance and allow for communication over the network between many Grav instances. Transport and Discovery are both optional, as Grav operates happily as an in-process message bus to facilitate asyncronous application design.'),(0,o.kt)("p",null,"Grav instance configuration and use will be discussed in the ",(0,o.kt)("a",{parentName:"p",href:"../../usage/getting-started/"},"Usage")," section."))}d.isMDXComponent=!0}}]);