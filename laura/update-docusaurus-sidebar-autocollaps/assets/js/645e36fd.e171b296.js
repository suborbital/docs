"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[1287],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4061:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],u={},i="Namespaces",s={unversionedId:"compute/concepts/namespaces",id:"compute/concepts/namespaces",title:"Namespaces",description:"Within Compute, your users' functions can be organized into namespaces at your discretion \\(you control them, not your users\\). Namespces can be used to organize groups of functions designed for different use-cases within your product.",source:"@site/docs/compute/concepts/namespaces.md",sourceDirName:"compute/concepts",slug:"/compute/concepts/namespaces",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/compute/concepts/namespaces",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/concepts/namespaces.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Fully-qualified function names",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/compute/concepts/fully-qualified-function-names"},next:{title:"Function editor",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/compute/integrate-the-function-editor/code-editor"}},p={},l=[{value:"Default",id:"default",level:2}],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"namespaces"},"Namespaces"),(0,a.kt)("p",null,"Within Compute, your users' functions can be organized into ",(0,a.kt)("inlineCode",{parentName:"p"},"namespaces")," at your discretion ","(","you control them, not your users",")",". Namespces can be used to organize groups of functions designed for different use-cases within your product."),(0,a.kt)("p",null,"Namespaces are the main organizational unit for your users' functions."),(0,a.kt)("p",null,"For example, if you have two different event types that can be handled, ",(0,a.kt)("inlineCode",{parentName:"p"},"alert")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"audit"),", it would make sense to create a namespace for each. If you wish to display a list of functions in your application UI, these namespaces would allow you to list only relevant functions."),(0,a.kt)("h2",{id:"default"},"Default"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," namespace is always available if you don't wish to define multiple namespaces, and is especially useful when experimenting with or testing Compute."))}f.isMDXComponent=!0}}]);