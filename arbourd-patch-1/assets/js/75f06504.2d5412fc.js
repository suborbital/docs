"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[6141],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2540:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={},u="Deploying Atmo",s={unversionedId:"atmo/usage/deploying-atmo",id:"atmo/usage/deploying-atmo",title:"Deploying Atmo",description:"Atmo is in beta, and is suitable production workloads. If you're using Atmo in production, please reach out to us via Discord or team@suborbital.dev so we can learn how you're using it!",source:"@site/docs/atmo/usage/deploying-atmo.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/deploying-atmo",permalink:"/docs/arbourd-patch-1/atmo/usage/deploying-atmo",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/deploying-atmo.md",tags:[],version:"current",lastUpdatedAt:1650471099,formattedLastUpdatedAt:"4/20/2022",frontMatter:{},sidebar:"docs",previous:{title:"Build your Application",permalink:"/docs/arbourd-patch-1/atmo/usage/build-your-application"},next:{title:"Authentication",permalink:"/docs/arbourd-patch-1/atmo/usage/authentication"}},p={},c=[{value:"Volume mount",id:"volume-mount",level:2},{value:"Embed Bundle",id:"embed-bundle",level:2},{value:"Bundle upload",id:"bundle-upload",level:2},{value:"HTTPS",id:"https",level:3},{value:"Logging",id:"logging",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Schedules",id:"schedules",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploying-atmo"},"Deploying Atmo"),(0,i.kt)("p",null,"Atmo is in beta, and is suitable production workloads. If you're using Atmo in production, please reach out to us via ",(0,i.kt)("a",{parentName:"p",href:"chat.suborbital.dev"},"Discord")," or ",(0,i.kt)("a",{parentName:"p",href:"mailto:team@suborbital.dev"},"team@suborbital.dev")," so we can learn how you're using it!"),(0,i.kt)("p",null,"Atmo is distributed as a Docker image: ",(0,i.kt)("inlineCode",{parentName:"p"},"suborbital/atmo")),(0,i.kt)("p",null,"To run Atmo, you can mount your Runnable Bundle as a volume, build your own container image that embeds it, or set Atmo to wait for a Bundle to be uploaded."),(0,i.kt)("h2",{id:"volume-mount"},"Volume mount"),(0,i.kt)("p",null,"To mount as a volume:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v $(pwd):/home/atmo -e ATMO_HTTP_PORT=8080 -p 8080:8080 suborbital/atmo:latest atmo\n")),(0,i.kt)("p",null,"This will launch Atmo, assign it to listen on port 8080, and run in HTTP mode."),(0,i.kt)("h2",{id:"embed-bundle"},"Embed Bundle"),(0,i.kt)("p",null,"To create your own Docker image with your Bundle embedded, you can use the Dockerfile that was created for your project by Subo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"FROM suborbital/atmo:latest\n\nCOPY ./runnables.wasm.zip .\n\nENTRYPOINT atmo\n")),(0,i.kt)("p",null,"Building this Dockerfile would result in an image that doesn't need a volume mount."),(0,i.kt)("h2",{id:"bundle-upload"},"Bundle upload"),(0,i.kt)("p",null,"To upload a Bundle after launching Atmo, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--wait")," flag or set the\n",(0,i.kt)("inlineCode",{parentName:"p"},"ATMO_WAIT=true")," env var. This will cause Atmo to check the disk once per\nsecond until it finds a Bundle rather than exiting with an error if no Bundle\nis found. This method allows you to launch Atmo and then upload a Bundle\nseparately by copying it into the running container, as with the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo-k8s-helm"},"experimental Kubernetes deployment"),"."),(0,i.kt)("h3",{id:"https"},"HTTPS"),(0,i.kt)("p",null,"To run with HTTPS, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"ATMO_HTTP_PORT=8080")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"ATMO_DOMAIN=example.com"),"\nto enable LetsEncrypt on ports 443 and 80. You will need to pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," Docker flag\nfor each."),(0,i.kt)("h3",{id:"logging"},"Logging"),(0,i.kt)("p",null,"To control logging in Atmo, you can use its environment variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATMO_LOG_LEVEL")," can be set to any of ",(0,i.kt)("inlineCode",{parentName:"li"},"trace, debug, info, warn, error")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATMO_LOG_FILE")," can be set to a file to log to ","(","stdout will become plaintext logs, structured logs will be written to the file",")")),(0,i.kt)("h3",{id:"tracing"},"Tracing"),(0,i.kt)("p",null,"When Atmo is running in proxy mode, you can configure one of three tracers:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"direct export to honeycomb.io if you have an account with them"),(0,i.kt)("li",{parentName:"ol"},"local export to an opentelemetry collector running on the same machine / within the same pod"),(0,i.kt)("li",{parentName:"ol"},"no tracing")),(0,i.kt)("p",null,"Atmo is going to use a noop tracer that does nothing by default if it doesn't see any of the following configuration values."),(0,i.kt)("p",null,"Options are set via environment variables. The full list is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATMO_TRACER_TYPE")," can be set to any of ",(0,i.kt)("inlineCode",{parentName:"li"},'"", "none", "collector", "honeycomb"'),". The default is ",(0,i.kt)("inlineCode",{parentName:"li"},'"none"'),'. Specifies the tracer to use. Any other value not listed in the list above is going to leave a log warning, and fall back to the "none" tracer.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATMO_TRACER_PROBABILITY")," is a float between 0 and 1 where 0 means no requests are traced, and 1 means 100% of the requests are traced. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},"0.5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATMO_TRACER_SERVICENAME")," can be set to any string. The default is ",(0,i.kt)("inlineCode",{parentName:"li"},'"atmo"'),". This gets added to the traced spans as an attribute passed to this conversion function: ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/go.opentelemetry.io/otel/attribute#Key.String"},"semconv.ServiceNameKey.String"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"semconv.ServiceNameKey")," is an otel attribute key."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATMO_TRACER_COLLECTOR_ENDPOINT")," is only used if the tracer type is ",(0,i.kt)("inlineCode",{parentName:"li"},'"collector"'),". Can be set to a string that ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/google.golang.org/grpc#DialContext"},(0,i.kt)("inlineCode",{parentName:"a"},"grpc.DialContext"))," accepts as valid target. Default: not set, required if collector is used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATMO_TRACER_HONEYCOMB_ENDPOINT")," is only used if the tracer type is ",(0,i.kt)("inlineCode",{parentName:"li"},'"honeycomb"'),". Can be set to any string that ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc#WithEndpoint"},(0,i.kt)("inlineCode",{parentName:"a"},"otlptracegrpc.WithEndpoint"))," will take. Default is not set, though required if tracer type is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"honeycomb"),". For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"api.honeycomb.io:443"),". It will need an address and a port, but no scheme."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATMO_TRACER_HONEYCOMB_APIKEY")," is only used if the tracer type is ",(0,i.kt)("inlineCode",{parentName:"li"},'"honeycomb"'),". It's your account's API key. Required if honeycomb is used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATMO_TRACER_HONEYCOMB_DATASET")," is a non-empty string. Only used for honeycomb tracer. Default is not set, but required if trace type is ",(0,i.kt)("inlineCode",{parentName:"li"},"honeycomb"),". It's the name of the dataset within honeycomb that will group the traces together in.")),(0,i.kt)("h3",{id:"schedules"},"Schedules"),(0,i.kt)("p",null,"To prevent an Atmo instance from executing the ",(0,i.kt)("a",{parentName:"p",href:"/docs/arbourd-patch-1/atmo/usage/schedules"},"Schedules")," defined in your Directive, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ATMO_RUN_SCHEDULES=false")," env var. This can be useful for running non-idempotent jobs on a specific worker instance."))}m.isMDXComponent=!0}}]);