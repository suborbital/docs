"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[5867],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),b=o,f=m["".concat(l,".").concat(b)]||m[b]||p[b]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7394:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={},l="1. Create an environment token with Subo",c={unversionedId:"compute/installing/create-an-environment-token-with-subo",id:"compute/installing/create-an-environment-token-with-subo",title:"1. Create an environment token with Subo",description:"To use Compute, you'll need an environment token which allows the control plane to authenticate with the Suborbital Compute Network.",source:"@site/docs/compute/installing/1.-create-an-environment-token-with-subo.md",sourceDirName:"compute/installing",slug:"/compute/installing/create-an-environment-token-with-subo",permalink:"/docs/laura/41-review-documentation-around-compute-repl-and-actual-usage/compute/installing/create-an-environment-token-with-subo",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/installing/1.-create-an-environment-token-with-subo.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",sidebarPosition:1,frontMatter:{}},s=[{value:"Install Subo",id:"install-subo",children:[],level:2},{value:"Generate your token",id:"generate-your-token",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-create-an-environment-token-with-subo"},"1. Create an environment token with Subo"),(0,a.kt)("p",null,"To use Compute, you'll need an environment token which allows the control plane to authenticate with the Suborbital Compute Network."),(0,a.kt)("h2",{id:"install-subo"},"Install Subo"),(0,a.kt)("p",null,"For macOS: use ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap suborbital/subo\nbrew install subo\nsubo --version\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"version")," must be at least ",(0,a.kt)("inlineCode",{parentName:"strong"},"v0.1.0")," for full Compute support.")),(0,a.kt)("p",null,"For Linux (or Mac without Homebrew), install from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo/releases"},"Subo repository"),"."),(0,a.kt)("h2",{id:"generate-your-token"},"Generate your token"),(0,a.kt)("p",null,"Run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"subo compute create token <email>\n")),(0,a.kt)("p",null,"A verification code will be sent to your email address."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Subo will print out your token.")),(0,a.kt)("p",null,"Keep this token safe (store it in your password manager), and use only when running or installing Compute."))}m.isMDXComponent=!0}}]);