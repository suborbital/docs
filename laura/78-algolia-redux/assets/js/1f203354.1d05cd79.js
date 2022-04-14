"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9844],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={},c="Authentication",l={unversionedId:"atmo/usage/authentication",id:"atmo/usage/authentication",title:"Authentication",description:"Atmo helps with authenticating these requests by injecting the Authorization",source:"@site/docs/atmo/usage/authentication.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/authentication",permalink:"/docs/laura/78-algolia-redux/atmo/usage/authentication",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/authentication.md",tags:[],version:"current",lastUpdatedAt:1645828798,formattedLastUpdatedAt:"2/25/2022",frontMatter:{},sidebar:"docs",previous:{title:"Deploying Atmo",permalink:"/docs/laura/78-algolia-redux/atmo/usage/deploying-atmo"},next:{title:"Error handling",permalink:"/docs/laura/78-algolia-redux/atmo/usage/error-handling"}},s={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Atmo helps with authenticating these requests by injecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization"),"\nheader to your Runnable's requests based on the configuration in your Directive. "),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"authentication:\n  domains:\n    api.github.com:\n      headerType: bearer\n      value: env(GITHUB_TOKEN)\n")),(0,o.kt)("p",null,"This uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," keyword to augment any request (either HTTP or GraphQL) to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"api.github.com")," domain with an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header containing the value\n",(0,o.kt)("inlineCode",{parentName:"p"},"bearer {GITHUB_TOKEN}"),", with the environment variable evaluated at runtime.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," can be a static string if needed, but the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," keyword is more common\nas it allows your application to be configured in different environments."),(0,o.kt)("p",null,"This strategy of authentication injection allows Atmo to handle sensitive values\nwithout ever giving the code inside the Runnable sandbox access to them.\nThis is an important aspect of Atmo's security model, and helps maintain healthy\nsecurity practices."))}d.isMDXComponent=!0}}]);