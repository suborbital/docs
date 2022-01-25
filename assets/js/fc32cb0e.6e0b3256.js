"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[2015],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5352:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="Creating a Project",p={unversionedId:"atmo/getstarted/creating-a-project",id:"atmo/getstarted/creating-a-project",isDocsHomePage:!1,title:"Creating a Project",description:"With subo installed, you can now create a project:",source:"@site/docs/atmo/getstarted/creating-a-project.md",sourceDirName:"atmo/getstarted",slug:"/atmo/getstarted/creating-a-project",permalink:"/docs/docs/atmo/getstarted/creating-a-project",editUrl:"https://github.com/suborbital/docs/docs/atmo/getstarted/creating-a-project.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Get Started",permalink:"/docs/docs/atmo/getstarted/what-is-atmo"},next:{title:"Building and Running",permalink:"/docs/docs/atmo/getstarted/building-and-running"}},s=[{value:"Overview",id:"overview",children:[],level:3}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-project"},"Creating a Project"),(0,a.kt)("p",null,"With subo installed, you can now create a project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"subo create project important-api\n")),(0,a.kt)("p",null,"The project contains two important things: a ",(0,a.kt)("inlineCode",{parentName:"p"},"Directive.yaml")," file,\nand an example Runnable called ",(0,a.kt)("inlineCode",{parentName:"p"},"helloworld")," written in Rust.\nThe ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/atmo/concepts/the-directive"},"Directive")," file defines route\nhandlers and connects ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/atmo/concepts/runnables"},"Runnables")," to them."),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In the Directive file, you'll see a handler set up for you that\nserves the ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /hello")," route using the ",(0,a.kt)("inlineCode",{parentName:"p"},"helloworld")," Runnable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# the Directive is a complete description of your application, including all of its business logic.\n# appVersion should be updated for each new deployment of your app.\n# atmoVersion declares which version of Atmo is used for the `subo dev` command.\n\nidentifier: com.suborbital.important-api\nappVersion: v0.1.0\natmoVersion: v0.2.3\n\n\nhandlers:\n  - type: request\n    resource: /hello\n    method: POST\n    steps:\n      - fn: helloworld\n")))}d.isMDXComponent=!0}}]);