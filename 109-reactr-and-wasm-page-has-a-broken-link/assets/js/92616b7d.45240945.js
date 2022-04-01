"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[1999],{3905:function(e,t,r){r.d(t,{Zo:function(){return g},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=a,f=l["".concat(c,".").concat(d)]||l[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},g),{},{components:r})):n.createElement(f,i({ref:t},g))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},7106:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return g}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},c="Getting Started",u={unversionedId:"grav/usage/getting-started/start-here",id:"grav/usage/getting-started/start-here",title:"Getting Started",description:"To get started, import github.com/suborbital/grav/grav and",source:"@site/docs/grav/usage/getting-started/start-here.md",sourceDirName:"grav/usage/getting-started",slug:"/grav/usage/getting-started/start-here",permalink:"/docs/109-reactr-and-wasm-page-has-a-broken-link/grav/usage/getting-started/start-here",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/getting-started/start-here.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Reciepts",permalink:"/docs/109-reactr-and-wasm-page-has-a-broken-link/grav/introduction/concepts/receipts"},next:{title:"Using the Grav Instance",permalink:"/docs/109-reactr-and-wasm-page-has-a-broken-link/grav/usage/getting-started/using-the-grav-instance"}},g=[],p={toc:g};function l(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"To get started, import ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/suborbital/grav/grav")," and\ncreate a Grav instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc gettingStarted() {\n    g := grav.New()\n\n    fmt.Println(g.NodeUUID)\n}\n')),(0,o.kt)("p",null,"Every Grav instance gets a UUID so that it can can identify itself\nto other instances when meshing is in use. ",(0,o.kt)("inlineCode",{parentName:"p"},"grav.New")," can take a\nset of ",(0,o.kt)("a",{parentName:"p",href:"/docs/109-reactr-and-wasm-page-has-a-broken-link/grav/usage/getting-started/grav-instance-options"},"options"),", but for an in-process\nGrav instance, no options are needed."))}l.isMDXComponent=!0}}]);