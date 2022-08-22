"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="Getting started",l={unversionedId:"atmo/get-started",id:"atmo/get-started",title:"Getting started",description:"The following guide will help you install the tooling and spin up an Atmo instance on your computer for local development.",source:"@site/docs/atmo/get-started.md",sourceDirName:"atmo",slug:"/atmo/get-started",permalink:"/docs/feature/local-deployment/atmo/get-started",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/get-started.md",tags:[],version:"current",lastUpdatedAt:1650471099,formattedLastUpdatedAt:"Apr 20, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Atmo",permalink:"/docs/feature/local-deployment/atmo/"},next:{title:"Runnables",permalink:"/docs/feature/local-deployment/atmo/concepts/runnables"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Project",id:"creating-a-project",level:2},{value:"Overview",id:"overview",level:3},{value:"Building and Running",id:"building-and-running",level:2},{value:"Building",id:"building",level:3},{value:"Running a development server",id:"running-a-development-server",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"The following guide will help you install the tooling and spin up an Atmo instance on your computer for local development."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"As of the time of writing, ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," does not officially support the Windows operating system. You may, however, try installing and using ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/about#what-is-wsl-2"},"WSL2"),".")),(0,o.kt)("p",null,"First, you will need to have the subo CLI and Docker installed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker")," will be used to build Runnables and run the Atmo development server."),(0,o.kt)("li",{parentName:"ul"},"To install subo, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/suborbital/subo"},"visit its GitHub repository")," and follow the instructions in the README.")),(0,o.kt)("h2",{id:"creating-a-project"},"Creating a Project"),(0,o.kt)("p",null,"With subo installed, you can now create a project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"subo create project important-api\n")),(0,o.kt)("p",null,"The project contains two important things: a ",(0,o.kt)("inlineCode",{parentName:"p"},"Directive.yaml")," file,\nand an example Runnable called ",(0,o.kt)("inlineCode",{parentName:"p"},"helloworld")," written in Rust.\nThe ",(0,o.kt)("a",{parentName:"p",href:"/docs/feature/local-deployment/atmo/concepts/the-directive"},"Directive")," file defines route\nhandlers and connects ",(0,o.kt)("a",{parentName:"p",href:"/docs/feature/local-deployment/atmo/concepts/runnables"},"Runnables")," to them."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In the Directive file, you'll see a handler set up for you that\nserves the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /hello")," route using the ",(0,o.kt)("inlineCode",{parentName:"p"},"helloworld")," Runnable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# the Directive is a complete description of your application, including all of its business logic.\n# appVersion should be updated for each new deployment of your app.\n# atmoVersion declares which version of Atmo is used for the `subo dev` command.\n\nidentifier: com.suborbital.important-api\nappVersion: v0.1.0\natmoVersion: v0.2.3\n\nhandlers:\n  - type: request\n    resource: /hello\n    method: POST\n    steps:\n      - fn: helloworld\n")),(0,o.kt)("h2",{id:"building-and-running"},"Building and Running"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," command line tool is used again here to build and run your Atmo project."),(0,o.kt)("h3",{id:"building"},"Building"),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"important-api")," directory run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"subo build .\n")),(0,o.kt)("p",null,"This automatically compiles each of your Runnables in a Docker container and bundles\nthem together in ",(0,o.kt)("inlineCode",{parentName:"p"},"runnables.wasm.zip")," to be used in Atmo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-no-copy"},"\u23e9 START: building Runnables in .\n\u2139\ufe0f  \ud83d\udc33 using Docker toolchain\n\u23e9 START: building Runnable: helloworld (rust)\n    Updating crates.io index\n[...]\n\n\u2705 DONE: Bundle was created -> runnables.wasm.zip @ v0.1.0\n")),(0,o.kt)("p",null,"If you prefer not to use Docker, you can also ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo/blob/main/docs/get-started.md#building-without-docker"},"build your Runnables natively"),"."),(0,o.kt)("h3",{id:"running-a-development-server"},"Running a development server"),(0,o.kt)("p",null,"Now that we have our application Bundle built, we can start a development server."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"important-api")," directory, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"subo dev\n")),(0,o.kt)("p",null,"This creates a Docker container running Atmo, copies your ",(0,o.kt)("inlineCode",{parentName:"p"},"runnables.wasm.zip")," into\nthe container, and starts an Atmo server listening on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,o.kt)("p",null,"You can test the ",(0,o.kt)("inlineCode",{parentName:"p"},"/hello")," route in a second terminal by sending a POST request\nwith a body to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:8080/hello -d 'from the K\xe1rm\xe1n line!'\n")),(0,o.kt)("p",null,"Atmo runs and responds successfuly if you get a 200 OK response with the request body replayed to you in the response."))}d.isMDXComponent=!0}}]);