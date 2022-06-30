"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[5512],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={},s="Static Directory",l={unversionedId:"atmo/concepts/static-directory",id:"atmo/concepts/static-directory",title:"Static Directory",description:"An Atmo project can optionally contain a static directory. When present,",source:"@site/docs/atmo/concepts/static-directory.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/static-directory",permalink:"/docs/jagger/webhooks-docs/atmo/concepts/static-directory",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/concepts/static-directory.md",tags:[],version:"current",lastUpdatedAt:1645828798,formattedLastUpdatedAt:"2/25/2022",frontMatter:{},sidebar:"docs",previous:{title:"State",permalink:"/docs/jagger/webhooks-docs/atmo/concepts/state"},next:{title:"Creating Runnables",permalink:"/docs/jagger/webhooks-docs/atmo/usage/creating-runnables"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"static-directory"},"Static Directory"),(0,a.kt)("p",null,"An Atmo project can optionally contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," directory. When present,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," CLI will package the static directory into your application Bundle."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"important-api\n-- get-users\n-- create-user\n-- static\n   -- index.html\n   -- main.css\n   -- bundle.js\n-- Directive.yaml\n")),(0,a.kt)("p",null,"Do not use the static directory for sensitive data such as secrets."),(0,a.kt)("p",null,"Atmo will be gaining a secrets management system in 2022."),(0,a.kt)("p",null,"Since the directory is included in your Bundle, your Runnables can access the\nfiles! Atmo will mount the directory as a read-only filesystem that can be\naccessed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," namespace of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/jagger/webhooks-docs/atmo/runnable-api/introduction"},"Runnable API"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use suborbital::file;\n\nlet indexHtml = file::get_static("index.html");\n')),(0,a.kt)("p",null,"This allows Atmo to serve static sites, access template files, and more!"))}m.isMDXComponent=!0}}]);