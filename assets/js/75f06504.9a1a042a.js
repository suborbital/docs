"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[6141],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(g,l(l({ref:t},s),{},{components:n})):o.createElement(g,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2540:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={},u="Deploying Atmo",d={unversionedId:"atmo/usage/deploying-atmo",id:"atmo/usage/deploying-atmo",title:"Deploying Atmo",description:"Atmo is still in early Beta, and as such should not yet be used for",source:"@site/docs/atmo/usage/deploying-atmo.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/deploying-atmo",permalink:"/docs/atmo/usage/deploying-atmo",editUrl:"https://github.com/suborbital/docs/docs/atmo/usage/deploying-atmo.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Building a Bundle",permalink:"/docs/atmo/usage/building-a-bundle"},next:{title:"Error handling",permalink:"/docs/atmo/usage/error-handling"}},s=[{value:"Volume mount",id:"volume-mount",children:[],level:2},{value:"Embed Bundle",id:"embed-bundle",children:[],level:2},{value:"Bundle upload",id:"bundle-upload",children:[{value:"HTTPS",id:"https",children:[],level:3},{value:"Logging",id:"logging",children:[],level:3},{value:"Schedules",id:"schedules",children:[],level:3}],level:2}],c={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-atmo"},"Deploying Atmo"),(0,a.kt)("p",null,"Atmo is still in early Beta, and as such should not yet be used for\nproduction workloads."),(0,a.kt)("p",null,"Atmo is distributed as a Docker image: ",(0,a.kt)("inlineCode",{parentName:"p"},"suborbital/atmo")),(0,a.kt)("p",null,"To run Atmo, you can mount your Runnable Bundle as a volume, build your own container image that embeds it, or set Atmo to wait for a bundle to be uploaded."),(0,a.kt)("h2",{id:"volume-mount"},"Volume mount"),(0,a.kt)("p",null,"To mount as a volume:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"> docker run -v /path/to/bundle/directory:/home/atmo -e ATMO_HTTP_PORT=8080 -p 8080:8080 suborbital/atmo:latest atmo\n")),(0,a.kt)("p",null,"This will launch Atmo, assign it to listen on port 8080, and run in HTTP mode."),(0,a.kt)("h2",{id:"embed-bundle"},"Embed Bundle"),(0,a.kt)("p",null,"To create your own Docker image with your Bundle embedded, you can use\na Dockerfile similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"FROM suborbital/atmo:latest\n\nCOPY ./runnables.wasm.zip .\n\nENTRYPOINT atmo\n")),(0,a.kt)("p",null,"Building this Dockerfile would result in an image that doesn't need a volume mount."),(0,a.kt)("h2",{id:"bundle-upload"},"Bundle upload"),(0,a.kt)("p",null,"To upload a bundle after launching Atmo, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--wait")," flag or set the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ATMO_WAIT=true")," env var. This will cause Atmo to check the disk once per\nsecond until it finds a bundle rather than exiting with an error if no bundle\nis found. This method allows you to launch Atmo and then upload a bundle\nseparately by copying it into the running container, as with the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo-k8s-helm"},"experimental Kubernetes deployment"),"."),(0,a.kt)("h3",{id:"https"},"HTTPS"),(0,a.kt)("p",null,"To run with HTTPS, replace ",(0,a.kt)("inlineCode",{parentName:"p"},"ATMO_HTTP_PORT=8080")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"ATMO_DOMAIN=example.com"),"\nto enable LetsEncrypt on ports 443 and 80. You will need to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," Docker flag\nfor each."),(0,a.kt)("h3",{id:"logging"},"Logging"),(0,a.kt)("p",null,"To control logging in Atmo, you can use its environment variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ATMO_LOG_LEVEL")," can be set to any of ",(0,a.kt)("inlineCode",{parentName:"li"},"trace, debug, info, warn, error")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ATMO_LOG_FILE")," can be set to a file to log to ","(","stdout will become plaintext logs, structured logs will be written to the file",")")),(0,a.kt)("h3",{id:"schedules"},"Schedules"),(0,a.kt)("p",null,"To prevent an Atmo instance from executing the ",(0,a.kt)("a",{parentName:"p",href:"/docs/atmo/usage/schedules"},"Schedules")," defined in your Directive, you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ATMO_RUN_SCHEDULES=false")," env var. This can be useful for running non-idempotent jobs on a specific worker instance."))}p.isMDXComponent=!0}}]);