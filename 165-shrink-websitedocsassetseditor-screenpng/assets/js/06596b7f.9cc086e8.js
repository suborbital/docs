"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[6190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={pagination_next:null},i="Namespaces",s={unversionedId:"compute/customizing-functions/namespaces",id:"compute/customizing-functions/namespaces",title:"Namespaces",description:"Within Compute, your users' functions can be organized into namespaces at your discretion \\(you control them, not your users\\). Namespaces can be used to organize groups of functions designed for different use-cases within your product.",source:"@site/docs/compute/customizing-functions/namespaces.md",sourceDirName:"compute/customizing-functions",slug:"/compute/customizing-functions/namespaces",permalink:"/docs/165-shrink-websitedocsassetseditor-screenpng/compute/customizing-functions/namespaces",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/customizing-functions/namespaces.md",tags:[],version:"current",lastUpdatedAt:1660755378,formattedLastUpdatedAt:"Aug 17, 2022",frontMatter:{pagination_next:null},sidebar:"docs",previous:{title:"Custom libraries",permalink:"/docs/165-shrink-websitedocsassetseditor-screenpng/compute/customizing-functions/custom-libraries"}},c={},u=[{value:"Default",id:"default",level:2}],p={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"namespaces"},"Namespaces"),(0,o.kt)("p",null,"Within Compute, your users' functions can be organized into ",(0,o.kt)("inlineCode",{parentName:"p"},"namespaces")," at your discretion ","(","you control them, not your users",")",". Namespaces can be used to organize groups of functions designed for different use-cases within your product."),(0,o.kt)("p",null,"Namespaces are the main organizational unit for your users' functions."),(0,o.kt)("p",null,"For example, if you have two different event types that can be handled, ",(0,o.kt)("inlineCode",{parentName:"p"},"alert")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"audit"),", it would make sense to create a namespace for each. If you wish to display a list of functions in your application UI, these namespaces would allow you to list only relevant functions."),(0,o.kt)("h2",{id:"default"},"Default"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace is always available if you don't wish to define multiple namespaces, and is especially useful when experimenting with or testing Compute."))}l.isMDXComponent=!0}}]);