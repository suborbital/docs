"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3778],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3318:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="Background",l={unversionedId:"atmo/background",id:"atmo/background",title:"Background",description:"Atmo was born out of a desire to simplify server-side development by making it easy to bootstrap new projects, automatically scale to handle large amounts of traffic, and ensure their security with new technology and best practices.",source:"@site/docs/atmo/background.md",sourceDirName:"atmo",slug:"/atmo/background",permalink:"/docs/laura/97-expose-contribution-docs-on-contribute/atmo/background",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/background.md",tags:[],version:"current",lastUpdatedAt:1647507963,formattedLastUpdatedAt:"3/17/2022",frontMatter:{}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"background"},"Background"),(0,a.kt)("p",null,"Atmo was born out of a desire to simplify server-side development by making it easy to bootstrap new projects, automatically scale to handle large amounts of traffic, and ensure their security with new technology and best practices."),(0,a.kt)("p",null,"Atmo embodies the ",(0,a.kt)("a",{parentName:"p",href:"https://blog.suborbital.dev/building-a-better-monolith"},"SUFA design pattern")," by making it easy to develop, deploy, and scale your application. To develop applications using Atmo, a declarative file called the Directive is used to describe how to handle requests and events using composable functions. This allows the developer to describe the entirety of their application's behaviour, while only needing to write code for the functions being called. Atmo then uses the Directive to run the desired application, automatically running a web server, job scheduler, and messaging mesh together to form a powerful platform upon which your application can thrive."),(0,a.kt)("p",null,"The core of Atmo is a job scheduler running WebAssembly modules, which allows running functions written in a variety of languages with near-native performance and massive improvements to security and ease of orchestration."),(0,a.kt)("p",null,"Atmo scales out using capability groups, which allows groups of Atmo instances to access sensitive resources, scale independently, and ensure your application is able to grow efficiently to handle increases in traffic with ease. Atmo's built in meshing capabilities means that building a flat network of instances is automated, secure, and efficient."),(0,a.kt)("p",null,'Atmo strives to make everything about developing and deploying your application simple so that you can focus on the hard problems of building your product. Atmo\'s mission statement is "help developers build applications that are powerful but never complicated".'))}d.isMDXComponent=!0}}]);