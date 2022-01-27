"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[6471],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2597:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={},u="Building a Bundle",s={unversionedId:"atmo/usage/building-a-bundle",id:"atmo/usage/building-a-bundle",isDocsHomePage:!1,title:"Building a Bundle",description:"To run your Atmo application, we need to create a Runnable Bundle.",source:"@site/docs/atmo/usage/building-a-bundle.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/building-a-bundle",permalink:"/docs/docs/atmo/usage/building-a-bundle",editUrl:"https://github.com/suborbital/docs/docs/atmo/usage/building-a-bundle.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/23/2022",frontMatter:{},sidebar:"docs",previous:{title:"Creating handlers",permalink:"/docs/docs/atmo/usage/creating-handlers"},next:{title:"Deploying Atmo",permalink:"/docs/docs/atmo/usage/deploying-atmo"}},c=[{value:"Running the Atmo development server",id:"running-the-atmo-development-server",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-a-bundle"},"Building a Bundle"),(0,a.kt)("p",null,"To run your Atmo application, we need to create a Runnable Bundle.\nA Bundle is a ",(0,a.kt)("inlineCode",{parentName:"p"},".wasm.zip")," file that includes your Directive, along\nwith all of your Runnables compiled to WebAssembly modules. Bundles\nare built using ",(0,a.kt)("inlineCode",{parentName:"p"},"subo"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," that you should pass the root of your Atmo project as the\nfirst argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"subo build .\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If building the example project with subo from the root of the repository,\npass the directory: subo build ./example-project"),(0,a.kt)("p",null,"The end of this command should read:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u2705 DONE: bundle was created -> ./runnables.wasm.zip")),(0,a.kt)("h2",{id:"running-the-atmo-development-server"},"Running the Atmo development server"),(0,a.kt)("p",null,"Once you have your Runnable Bundle, you can run Atmo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"> subo dev\n")),(0,a.kt)("p",null,"Atmo will start up serving on port 8080, and you will begin to see its structured\nlogs in your terminal. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," Check Docker to ensure only Atmo is running on the port or else the\nAtmo developement server will not start correctly. "),(0,a.kt)("p",null,"Make a request to ",(0,a.kt)("inlineCode",{parentName:"p"},"POST localhost:8080/hello")," with a request body to see it in action."),(0,a.kt)("p",null,"The version of Atmo being run by ",(0,a.kt)("inlineCode",{parentName:"p"},"subo dev")," is dictated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"atmoVersion")," key in your Directive."),(0,a.kt)("p",null,"To learn how to operate Atmo in real-world scenarios."))}d.isMDXComponent=!0}}]);