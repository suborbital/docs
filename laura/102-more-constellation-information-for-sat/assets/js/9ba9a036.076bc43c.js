"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3939],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Getting started",u={unversionedId:"atmo/get-started",id:"atmo/get-started",title:"Getting started",description:"The following guide will help you install the tooling and spin up an Atmo instance on your computer for local development.",source:"@site/docs/atmo/get-started.md",sourceDirName:"atmo",slug:"/atmo/get-started",permalink:"/docs/laura/102-more-constellation-information-for-sat/atmo/get-started",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/get-started.md",tags:[],version:"current",lastUpdatedAt:1646245257,formattedLastUpdatedAt:"3/2/2022",frontMatter:{},sidebar:"docs",previous:{title:"Atmo",permalink:"/docs/laura/102-more-constellation-information-for-sat/atmo/"},next:{title:"Runnables",permalink:"/docs/laura/102-more-constellation-information-for-sat/atmo/concepts/runnables"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Project",id:"creating-a-project",level:2},{value:"Overview",id:"overview",level:3},{value:"Building and Running",id:"building-and-running",level:2},{value:"Building",id:"building",level:3},{value:"Running a development server",id:"running-a-development-server",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"The following guide will help you install the tooling and spin up an Atmo instance on your computer for local development."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As of the time of writing, ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," does not officially support the Windows operating system. You may, however, try installing and using ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/about#what-is-wsl-2"},"WSL2"),"."))),(0,o.kt)("p",null,"First, you will need to have the subo CLI and Docker installed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker")," will be used to build Runnables and run the Atmo development server."),(0,o.kt)("li",{parentName:"ul"},"To install subo, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/suborbital/subo"},"visit its GitHub repository")," and follow the instructions in the README.")),(0,o.kt)("h2",{id:"creating-a-project"},"Creating a Project"),(0,o.kt)("p",null,"With subo installed, you can now create a project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"subo create project important-api\n")),(0,o.kt)("p",null,"The project contains two important things: a ",(0,o.kt)("inlineCode",{parentName:"p"},"Directive.yaml")," file,\nand an example Runnable called ",(0,o.kt)("inlineCode",{parentName:"p"},"helloworld")," written in Rust.\nThe ",(0,o.kt)("a",{parentName:"p",href:"/docs/laura/102-more-constellation-information-for-sat/atmo/concepts/the-directive"},"Directive")," file defines route\nhandlers and connects ",(0,o.kt)("a",{parentName:"p",href:"/docs/laura/102-more-constellation-information-for-sat/atmo/concepts/runnables"},"Runnables")," to them."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In the Directive file, you'll see a handler set up for you that\nserves the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /hello")," route using the ",(0,o.kt)("inlineCode",{parentName:"p"},"helloworld")," Runnable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# the Directive is a complete description of your application, including all of its business logic.\n# appVersion should be updated for each new deployment of your app.\n# atmoVersion declares which version of Atmo is used for the `subo dev` command.\n\nidentifier: com.suborbital.important-api\nappVersion: v0.1.0\natmoVersion: v0.2.3\n\nhandlers:\n  - type: request\n    resource: /hello\n    method: POST\n    steps:\n      - fn: helloworld\n")),(0,o.kt)("h2",{id:"building-and-running"},"Building and Running"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," command line tool is used again here to build and run your Atmo project."),(0,o.kt)("h3",{id:"building"},"Building"),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"important-api")," directory run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"subo build .\n")),(0,o.kt)("p",null,"This automatically compiles each of your Runnables in a Docker container and bundles\nthem together in ",(0,o.kt)("inlineCode",{parentName:"p"},"runnables.wasm.zip")," to be used in Atmo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-no-copy"},"\u23e9 START: building runnables in .\n\u2139\ufe0f  \ud83d\udc33 using Docker toolchain\n\u23e9 START: building runnable: helloworld (rust)\n    Updating crates.io index\n[...]\n\n\u2705 DONE: bundle was created -> runnables.wasm.zip @ v0.1.0\n")),(0,o.kt)("p",null,"If you prefer not to use Docker, you can also ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo/blob/main/docs/get-started.md#building-without-docker"},"build your Runnables natively"),"."),(0,o.kt)("h3",{id:"running-a-development-server"},"Running a development server"),(0,o.kt)("p",null,"Now that we have our application bundle built, we can start a development server."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"important-api")," directory, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"subo dev\n")),(0,o.kt)("p",null,"This creates a Docker container running Atmo, copies your ",(0,o.kt)("inlineCode",{parentName:"p"},"runnables.wasm.zip")," into\nthe container, and starts an Atmo server listening on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,o.kt)("p",null,"You can test the ",(0,o.kt)("inlineCode",{parentName:"p"},"/hello")," route in a second terminal by sending a POST request\nwith a body to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:8080/hello -d 'from the K\xe1rm\xe1n line!'\n")),(0,o.kt)("p",null,"Atmo runs and responds successfuly if you get a 200 OK response with the request body replayed to you in the response."))}m.isMDXComponent=!0}}]);