"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[3818],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),v=o,f=d["".concat(s,".").concat(v)]||d[v]||l[v]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5254:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={},s="A brief overview",u={unversionedId:"grav/introduction/concepts/a-brief-overview",id:"grav/introduction/concepts/a-brief-overview",title:"A brief overview",description:"Since Grav is embedded, it is instantiated as a grav.Grav object",source:"@site/docs/grav/introduction/concepts/a-brief-overview.md",sourceDirName:"grav/introduction/concepts",slug:"/grav/introduction/concepts/a-brief-overview",permalink:"/docs/grav/introduction/concepts/a-brief-overview",editUrl:"https://github.com/suborbital/docs/docs/grav/introduction/concepts/a-brief-overview.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"What is Grav?",permalink:"/docs/grav/what-is-grav"},next:{title:"The Grav Instance",permalink:"/docs/grav/introduction/concepts/the-grav-instance"}},p=[],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a-brief-overview"},"A brief overview"),(0,i.kt)("p",null,"Since Grav is embedded, it is instantiated as a ",(0,i.kt)("inlineCode",{parentName:"p"},"grav.Grav")," object\nthat your application code connects to in order to send and receive messages.\nGrav connects to other nodes via ",(0,i.kt)("a",{parentName:"p",href:"../../meshing/transports/"},"transport plugins")," which extend\nthe Grav core to become a networked distributed messaging mesh.\nGrav instances can also discover each other automatically using\n",(0,i.kt)("a",{parentName:"p",href:"../../meshing/discovery/"},"discovery plugins"),". "),(0,i.kt)("p",null," Grav does not require a centralized broker, and as such has some limitations,\nbut for certain applications it is vastly simpler (and more extensible)\nthan a centralized messaging system."))}d.isMDXComponent=!0}}]);