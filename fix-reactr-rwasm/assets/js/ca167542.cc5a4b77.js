"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[5512],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={},s="Static Directory",l={unversionedId:"atmo/concepts/static-directory",id:"atmo/concepts/static-directory",title:"Static Directory",description:"An Atmo project can optionally contain a static directory. When present,",source:"@site/docs/atmo/concepts/static-directory.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/static-directory",permalink:"/docs/fix-reactr-rwasm/atmo/concepts/static-directory",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/concepts/static-directory.md",tags:[],version:"current",lastUpdatedAt:1645828798,formattedLastUpdatedAt:"2/25/2022",frontMatter:{},sidebar:"docs",previous:{title:"State",permalink:"/docs/fix-reactr-rwasm/atmo/concepts/state"},next:{title:"Creating Runnables",permalink:"/docs/fix-reactr-rwasm/atmo/usage/creating-runnables"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"static-directory"},"Static Directory"),(0,o.kt)("p",null,"An Atmo project can optionally contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," directory. When present,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," CLI will package the static directory into your application Bundle."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"important-api\n-- get-users\n-- create-user\n-- static\n   -- index.html\n   -- main.css\n   -- bundle.js\n-- Directive.yaml\n")),(0,o.kt)("p",null,"Do not use the static directory for sensitive data such as secrets."),(0,o.kt)("p",null,"Atmo will be gaining a secrets management system in 2022."),(0,o.kt)("p",null,"Since the directory is included in your Bundle, your Runnables can access the\nfiles! Atmo will mount the directory as a read-only filesystem that can be\naccessed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," namespace of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/fix-reactr-rwasm/atmo/runnable-api/introduction"},"Runnable API"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use suborbital::file;\n\nlet indexHtml = file::get_static("index.html");\n')),(0,o.kt)("p",null,"This allows Atmo to serve static sites, access template files, and more!"))}d.isMDXComponent=!0}}]);