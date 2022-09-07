"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[4282],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),l=s(n),d=a,f=l["".concat(u,".").concat(d)]||l[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},g),{},{components:n})):r.createElement(f,i({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},7063:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},u="Getting Started",s={unversionedId:"grav/usage/getting-started",id:"grav/usage/getting-started",title:"Getting Started",description:"To get started, import github.com/suborbital/grav/grav and",source:"@site/docs/grav/usage/getting-started.md",sourceDirName:"grav/usage",slug:"/grav/usage/getting-started",permalink:"/docs/laura/145-document-dependency-on-wasmedge-gov09/grav/usage/getting-started",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/getting-started.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"6/30/2022",frontMatter:{}},g={},p=[],l={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"To get started, import ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/suborbital/grav/grav")," and\ncreate a Grav instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc gettingStarted() {\n    g := grav.New()\n\n    fmt.Println(g.NodeUUID)\n}\n')),(0,o.kt)("p",null,"Every Grav instance gets a UUID so that it can can identify itself\nto other instances when meshing is in use. ",(0,o.kt)("inlineCode",{parentName:"p"},"grav.New")," can take a\nset of ",(0,o.kt)("a",{parentName:"p",href:"/docs/laura/145-document-dependency-on-wasmedge-gov09/grav/usage/grav-instance-options"},"options"),", but for an in-process\nGrav instance, no options are needed."))}d.isMDXComponent=!0}}]);