"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[1287],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return n?o.createElement(m,c(c({ref:t},p),{},{components:n})):o.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4061:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],i={},u="Namespaces",s={unversionedId:"compute/concepts/namespaces",id:"compute/concepts/namespaces",title:"Namespaces",description:"Within Compute, your users' functions can be organized into namespaces at your discretion \\(you control them, not your users\\). Namespces can be used to organize groups of functions designed for different use-cases within your product.",source:"@site/docs/compute/concepts/namespaces.md",sourceDirName:"compute/concepts",slug:"/compute/concepts/namespaces",permalink:"/docs/laura/97-expose-contribution-docs-on-contribute-updated/compute/concepts/namespaces",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/concepts/namespaces.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Fully-qualified function names",permalink:"/docs/laura/97-expose-contribution-docs-on-contribute-updated/compute/concepts/fully-qualified-function-names"},next:{title:"Function editor",permalink:"/docs/laura/97-expose-contribution-docs-on-contribute-updated/compute/integrate-the-function-editor/code-editor"}},p=[{value:"Default",id:"default",children:[],level:2}],l={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"namespaces"},"Namespaces"),(0,a.kt)("p",null,"Within Compute, your users' functions can be organized into ",(0,a.kt)("inlineCode",{parentName:"p"},"namespaces")," at your discretion ","(","you control them, not your users",")",". Namespces can be used to organize groups of functions designed for different use-cases within your product."),(0,a.kt)("p",null,"Namespaces are the main organizational unit for your users' functions."),(0,a.kt)("p",null,"For example, if you have two different event types that can be handled, ",(0,a.kt)("inlineCode",{parentName:"p"},"alert")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"audit"),", it would make sense to create a namespace for each. If you wish to display a list of functions in your application UI, these namespaces would allow you to list only relevant functions."),(0,a.kt)("h2",{id:"default"},"Default"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," namespace is always available if you don't wish to define multiple namespaces, and is especially useful when experimenting with or testing Compute."))}d.isMDXComponent=!0}}]);