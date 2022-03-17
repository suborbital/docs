"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[6843],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),i=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(b,c(c({ref:t},s),{},{components:n})):o.createElement(b,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1358:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],l={},u="Run Compute locally",i={unversionedId:"compute/quickstart/run-compute-locally",id:"compute/quickstart/run-compute-locally",title:"Run Compute locally",description:"To run Compute locally, you'll use the Subo CLI and Docker Compose, both of which must be installed before continuing.",source:"@site/docs/compute/quickstart/run-compute-locally.md",sourceDirName:"compute/quickstart",slug:"/compute/quickstart/run-compute-locally",permalink:"/docs/laura/75-combine-atmo-about-with-background/compute/quickstart/run-compute-locally",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/quickstart/run-compute-locally.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Setup",permalink:"/docs/laura/75-combine-atmo-about-with-background/compute/quickstart/create-an-environment-token-with-subo"},next:{title:"Working with functions",permalink:"/docs/laura/75-combine-atmo-about-with-background/compute/quickstart/write-functions"}},s=[{value:"Prepare your local environment",id:"prepare-your-local-environment",children:[],level:2},{value:"Start Compute",id:"start-compute",children:[],level:2},{value:"REPL",id:"repl",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-compute-locally"},"Run Compute locally"),(0,a.kt)("p",null,"To run Compute locally, you'll use the Subo CLI and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),", both of which must be installed before continuing."),(0,a.kt)("h2",{id:"prepare-your-local-environment"},"Prepare your local environment"),(0,a.kt)("p",null,"The Subo CLI will create some files on disk to set up your local deployment, so get started by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"suborbital")," directory somewhere on your filesystem:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir suborbital\ncd suborbital\n")),(0,a.kt)("h2",{id:"start-compute"},"Start Compute"),(0,a.kt)("p",null,"Next, use Subo to start your local Compute Core instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"subo compute deploy core --local\n")),(0,a.kt)("p",null,"You may be asked to enter your Environment Token, and then Subo will use ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," to launch your Compute Core instance automatically. Compute runs in the background by default. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose logs -f")," to view the logs of the running containers. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose down")," to terminate the containers."),(0,a.kt)("h2",{id:"repl"},"REPL"),(0,a.kt)("p",null,"When you first launch Compute, you will be prompted to start a REPL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2705 DONE: ready to start installation\n\u23e9 START: installing...\n\u25b6\ufe0f docker-compose up -d\nContainer suborbital-scc-control-plane-1  Recreate\nContainer suborbital-scc-control-plane-1  Recreated\nContainer suborbital-scc-atmo-1  Recreate\nContainer suborbital-scc-atmo-1  Recreated\nContainer suborbital-scc-control-plane-1  Starting\nContainer suborbital-scc-builder-1  Starting\nContainer suborbital-scc-control-plane-1  Started\nContainer suborbital-scc-builder-1  Started\nContainer suborbital-scc-atmo-1  Starting\nContainer suborbital-scc-atmo-1  Started\n\u2139\ufe0f  use `docker ps` and `docker-compose logs` to check deployment status\n\nPROXY: local tunnel to function editor started\n\n\nPress enter to launch the local Compute REPL...\n\n\n1. Create or edit a function\n\nChoose an option: 1\n\nTo create or edit a function, enter its name (or FQFN): new-fn\n")),(0,a.kt)("p",null,"This will allow you create functions and use the Compute editor locally while you work on integrating your application. Follow the instructions in the REPL to create your first function."))}m.isMDXComponent=!0}}]);