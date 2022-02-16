"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[9036],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2138:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={pagination_prev:null},s="About Sat",u={unversionedId:"sat/about-sat",id:"sat/about-sat",title:"About Sat",description:"Sat is a WebAssembly-powered server designed to have the maximum performance and smallest possible footprint. Our Atmo project is a fully-fledged platform with support for running entire applications, whereas Sat takes the opposite approach: run a single Wasm module blazing fast!",source:"@site/docs/sat/about-sat.md",sourceDirName:"sat",slug:"/sat/about-sat",permalink:"/docs/sat/about-sat",editUrl:"https://github.com/suborbital/docs/docs/sat/about-sat.md",tags:[],version:"current",lastUpdatedAt:1644841752,formattedLastUpdatedAt:"2/14/2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"Get started with Reactr \ud83d\ude80",permalink:"/docs/reactr/guide"}},c=[{value:"Using Sat",id:"using-sat",children:[],level:2},{value:"Building Sat",id:"building-sat",children:[],level:2},{value:"Stdin mode",id:"stdin-mode",children:[],level:2},{value:"Run from URL",id:"run-from-url",children:[],level:2},{value:"Statically compiling",id:"statically-compiling",children:[],level:2},{value:"Constellations",id:"constellations",children:[],level:2}],p={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-sat"},"About Sat"),(0,o.kt)("p",null,"Sat is a WebAssembly-powered server designed to have the maximum performance and smallest possible footprint. Our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo")," project is a fully-fledged platform with support for running entire applications, whereas Sat takes the opposite approach: run a single Wasm module blazing fast!"),(0,o.kt)("p",null,"Sat has no dependencies (it is statically compiled), and can run in a tiny Docker container (Distroless) or on bare metal. It i s meant to live in small places such as edge compute environments."),(0,o.kt)("h2",{id:"using-sat"},"Using Sat"),(0,o.kt)("p",null,"To run Sat, Docker is easiest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -e SAT_HTTP_PORT=8080 -p 8080:8080 suborbital/sat:latest sat https://github.com/suborbital/reactr/blob/main/rwasm/testdata/hello-echo/hello-echo.wasm\\?raw\\=true\n")),(0,o.kt)("p",null,"Sat will start up, download the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-echo")," module from the ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," directory, and make it available on port 8080. You can then make a POST request to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8080"),", and the body will be echoed back to you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:8080 -d 'my friend'\n")),(0,o.kt)("p",null,"Sat executes modules with the ",(0,o.kt)("a",{parentName:"p",href:"https://atmo.suborbital.dev/runnable-api/introduction"},"Runnable API")," enabled, so you can create modules using our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo"},"Subo CLI")," and all of the capabilities are available for use."),(0,o.kt)("h2",{id:"building-sat"},"Building Sat"),(0,o.kt)("p",null,"If you'd like to build Sat yourself, clone this repo and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# On M1, you may need to run `export DOCKER_BUILDKIT=0`\nmake docker run\n")),(0,o.kt)("p",null,"This will build the ",(0,o.kt)("inlineCode",{parentName:"p"},"suborbital/sat:dev")," Docker image and then launch it using the same ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-echo")," module."),(0,o.kt)("h2",{id:"stdin-mode"},"Stdin mode"),(0,o.kt)("p",null,"As an alternative to running Sat as a server, you can also use it in ",(0,o.kt)("inlineCode",{parentName:"p"},"stdin")," mode. First, build Sat:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make sat\n")),(0,o.kt)("p",null,"Then, run Sat with an input on stdin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "world" | .bin/sat --stdin ./examples/hello-echo/hello-echo.wasm\n')),(0,o.kt)("p",null,"Sat will write the response to stdout and exit."),(0,o.kt)("h2",{id:"run-from-url"},"Run from URL"),(0,o.kt)("p",null,"If you provide a URL as the path argument to Sat, it will download the module from that URL, write it to a temp directory, and use it for execution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'.bin/sat "https://github.com/suborbital/reactr/blob/main/rwasm/testdata/hello-echo/hello-echo.wasm?raw=true"\n')),(0,o.kt)("p",null,"The URL must be HTTPS and must have a ",(0,o.kt)("inlineCode",{parentName:"p"},".wasm")," suffix (excluding query parameters)"),(0,o.kt)("h2",{id:"statically-compiling"},"Statically compiling"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"make sat")," target creates a dynamically linked binary. To create a statically linked version, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make sat/static\n")),(0,o.kt)("p",null,"Static linking is not available on Mac."),(0,o.kt)("h2",{id:"constellations"},"Constellations"),(0,o.kt)("p",null,"Sat is designed to run in a constellation, i.e. a meshed cluster of instances. This enables very interesting network topologies which can run applications in massively distributed and 'edge' environments. This repo includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"constd")," tool, which is an experiment-atop-experiment constellation manager that can run ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo")," applications in a distributed manner using a Sat constellation. You can learn more ",(0,o.kt)("a",{parentName:"p",href:"./constd"},"here"),"."))}d.isMDXComponent=!0}}]);