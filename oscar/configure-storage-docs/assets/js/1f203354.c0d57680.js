"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9844],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},u="Authentication",s={unversionedId:"atmo/usage/authentication",id:"atmo/usage/authentication",title:"Authentication",description:"Atmo helps with authenticating these requests by injecting the Authorization",source:"@site/docs/atmo/usage/authentication.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/authentication",permalink:"/docs/oscar/configure-storage-docs/atmo/usage/authentication",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/authentication.md",tags:[],version:"current",lastUpdatedAt:1645828798,formattedLastUpdatedAt:"2/25/2022",frontMatter:{},sidebar:"docs",previous:{title:"Deploying Atmo",permalink:"/docs/oscar/configure-storage-docs/atmo/usage/deploying-atmo"},next:{title:"Error handling",permalink:"/docs/oscar/configure-storage-docs/atmo/usage/error-handling"}},l={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Atmo helps with authenticating these requests by injecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization"),"\nheader to your Runnable's requests based on the configuration in your Directive. "),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"authentication:\n  domains:\n    api.github.com:\n      headerType: bearer\n      value: env(GITHUB_TOKEN)\n")),(0,o.kt)("p",null,"This uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," keyword to augment any request (either HTTP or GraphQL) to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"api.github.com")," domain with an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header containing the value\n",(0,o.kt)("inlineCode",{parentName:"p"},"bearer {GITHUB_TOKEN}"),", with the environment variable evaluated at runtime.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," can be a static string if needed, but the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," keyword is more common\nas it allows your application to be configured in different environments."),(0,o.kt)("p",null,"This strategy of authentication injection allows Atmo to handle sensitive values\nwithout ever giving the code inside the Runnable sandbox access to them.\nThis is an important aspect of Atmo's security model, and helps maintain healthy\nsecurity practices."))}d.isMDXComponent=!0}}]);