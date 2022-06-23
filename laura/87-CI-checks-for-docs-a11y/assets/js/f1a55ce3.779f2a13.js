"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2491],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,h=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6592:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={},s="The Grav Instance",u={unversionedId:"grav/introduction/concepts/the-grav-instance",id:"grav/introduction/concepts/the-grav-instance",title:"The Grav Instance",description:"The main component of Grav is the grav.Grav instance. It contains the core message bus that facilitates sending and receiving messages. Each application instance should get one Grav instance. If meshing is needed, Transport and Discovery plugins are configured when instantiating the Grav instance. Your application code then creates connections to the Grav instance in the form of Pods, which are discussed next.",source:"@site/docs/grav/introduction/concepts/the-grav-instance.md",sourceDirName:"grav/introduction/concepts",slug:"/grav/introduction/concepts/the-grav-instance",permalink:"/docs/laura/87-CI-checks-for-docs-a11y/grav/introduction/concepts/the-grav-instance",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/introduction/concepts/the-grav-instance.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Grav",permalink:"/docs/laura/87-CI-checks-for-docs-a11y/grav/"},next:{title:"Pods",permalink:"/docs/laura/87-CI-checks-for-docs-a11y/grav/introduction/concepts/pods"}},p={},l=[],d={toc:l};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-grav-instance"},"The Grav Instance"),(0,o.kt)("p",null,"The main component of Grav is the ",(0,o.kt)("inlineCode",{parentName:"p"},"grav.Grav")," instance. It contains the core message bus that facilitates sending and receiving messages. Each application instance should get one Grav instance. If meshing is needed, Transport and Discovery plugins are configured when instantiating the Grav instance. Your application code then creates connections to the Grav instance in the form of Pods, which are discussed next."),(0,o.kt)("p",null,'The Grav instance contains all of the "smarts", meaning that it is responsible for keeping track of all the connected Pods, verifying their health, and routing messages between them. The Transport and Discovery plugins connect to the Grav instance and allow for communication over the network between many Grav instances. Transport and Discovery are both optional, as Grav operates happily as an in-process message bus to facilitate asyncronous application design.'),(0,o.kt)("p",null,"Grav instance configuration and use will be discussed in the ",(0,o.kt)("a",{parentName:"p",href:"../../usage/getting-started/"},"Usage")," section."))}f.isMDXComponent=!0}}]);