"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9844],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},153:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={},c="Authentication",s={unversionedId:"atmo/usage/authentication",id:"atmo/usage/authentication",title:"Authentication",description:"Atmo helps with authenticating these requests by injecting the Authorization",source:"@site/docs/atmo/usage/authentication.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/authentication",permalink:"/docs/laura/97-expose-contribution-docs-on-contribute-updated/atmo/usage/authentication",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/authentication.md",tags:[],version:"current",lastUpdatedAt:1645828798,formattedLastUpdatedAt:"2/25/2022",frontMatter:{},sidebar:"docs",previous:{title:"Deploying Atmo",permalink:"/docs/laura/97-expose-contribution-docs-on-contribute-updated/atmo/usage/deploying-atmo"},next:{title:"Error handling",permalink:"/docs/laura/97-expose-contribution-docs-on-contribute-updated/atmo/usage/error-handling"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Atmo helps with authenticating these requests by injecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization"),"\nheader to your Runnable's requests based on the configuration in your Directive. "),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"authentication:\n  domains:\n    api.github.com:\n      headerType: bearer\n      value: env(GITHUB_TOKEN)\n")),(0,a.kt)("p",null,"This uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," keyword to augment any request (either HTTP or GraphQL) to\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"api.github.com")," domain with an ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header containing the value\n",(0,a.kt)("inlineCode",{parentName:"p"},"bearer {GITHUB_TOKEN}"),", with the environment variable evaluated at runtime.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," can be a static string if needed, but the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," keyword is more common\nas it allows your application to be configured in different environments."),(0,a.kt)("p",null,"This strategy of authentication injection allows Atmo to handle sensitive values\nwithout ever giving the code inside the Runnable sandbox access to them.\nThis is an important aspect of Atmo's security model, and helps maintain healthy\nsecurity practices."))}d.isMDXComponent=!0}}]);