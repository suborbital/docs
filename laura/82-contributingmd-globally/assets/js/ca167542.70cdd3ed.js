"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[5512],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:e},u),{},{components:n})):r.createElement(f,c({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9377:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={},l="Static Directory",s={unversionedId:"atmo/concepts/static-directory",id:"atmo/concepts/static-directory",title:"Static Directory",description:"An Atmo project can optionally contain a static directory. When present,",source:"@site/docs/atmo/concepts/static-directory.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/static-directory",permalink:"/docs/laura/82-contributingmd-globally/atmo/concepts/static-directory",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/concepts/static-directory.md",tags:[],version:"current",lastUpdatedAt:1645828798,formattedLastUpdatedAt:"2/25/2022",frontMatter:{},sidebar:"docs",previous:{title:"State",permalink:"/docs/laura/82-contributingmd-globally/atmo/concepts/state"},next:{title:"Creating Runnables",permalink:"/docs/laura/82-contributingmd-globally/atmo/usage/creating-runnables"}},u=[],p={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"static-directory"},"Static Directory"),(0,o.kt)("p",null,"An Atmo project can optionally contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," directory. When present,\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," CLI will package the static directory into your application Bundle."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"important-api\n-- get-users\n-- create-user\n-- static\n   -- index.html\n   -- main.css\n   -- bundle.js\n-- Directive.yaml\n")),(0,o.kt)("p",null,"Do not use the static directory for sensitive data such as secrets."),(0,o.kt)("p",null,"Atmo will be gaining a secrets management system in 2022."),(0,o.kt)("p",null,"Since the directory is included in your Bundle, your Runnables can access the\nfiles! Atmo will mount the directory as a read-only filesystem that can be\naccessed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," namespace of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/laura/82-contributingmd-globally/atmo/runnable-api/introduction"},"Runnable API"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use suborbital::file;\n\nlet indexHtml = file::get_static("index.html");\n')),(0,o.kt)("p",null,"This allows Atmo to serve static sites, access template files, and more!"))}m.isMDXComponent=!0}}]);