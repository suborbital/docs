"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[9844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="Authentication",c={unversionedId:"atmo/usage/authentication",id:"atmo/usage/authentication",title:"Authentication",description:"Atmo helps with authenticating these requests by injecting the Authorization",source:"@site/docs/atmo/usage/authentication.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/authentication",permalink:"/docs/laura/update-scn-docs/atmo/usage/authentication",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/authentication.md",tags:[],version:"current",lastUpdatedAt:1645828798,formattedLastUpdatedAt:"Feb 25, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Deploying Atmo",permalink:"/docs/laura/update-scn-docs/atmo/usage/deploying-atmo"},next:{title:"Error handling",permalink:"/docs/laura/update-scn-docs/atmo/usage/error-handling"}},u={},s=[],l={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Atmo helps with authenticating these requests by injecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization"),"\nheader to your Runnable's requests based on the configuration in your Directive. "),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"authentication:\n  domains:\n    api.github.com:\n      headerType: bearer\n      value: env(GITHUB_TOKEN)\n")),(0,r.kt)("p",null,"This uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," keyword to augment any request (either HTTP or GraphQL) to\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"api.github.com")," domain with an ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header containing the value\n",(0,r.kt)("inlineCode",{parentName:"p"},"bearer {GITHUB_TOKEN}"),", with the environment variable evaluated at runtime.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," can be a static string if needed, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," keyword is more common\nas it allows your application to be configured in different environments."),(0,r.kt)("p",null,"This strategy of authentication injection allows Atmo to handle sensitive values\nwithout ever giving the code inside the Runnable sandbox access to them.\nThis is an important aspect of Atmo's security model, and helps maintain healthy\nsecurity practices."))}p.isMDXComponent=!0}}]);