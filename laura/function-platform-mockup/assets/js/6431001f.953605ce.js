"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[5242],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(o),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return o?n.createElement(f,i(i({ref:t},s),{},{components:o})):n.createElement(f,i({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},63:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={},i="Configure webhooks",l={unversionedId:"compute/deployment/cloud-deployment/configure-webhooks",id:"compute/deployment/cloud-deployment/configure-webhooks",title:"Configure webhooks",description:"Certain actions in Compute can trigger webhooks to notify other services of the event. The receivers of webhooks get contextually relevant information about the request Compute receiver. By default, no webhooks are configured.",source:"@site/docs/compute/deployment/cloud-deployment/configure-webhooks.md",sourceDirName:"compute/deployment/cloud-deployment",slug:"/compute/deployment/cloud-deployment/configure-webhooks",permalink:"/docs/laura/function-platform-mockup/compute/deployment/cloud-deployment/configure-webhooks",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/deployment/cloud-deployment/configure-webhooks.md",tags:[],version:"current",lastUpdatedAt:1660846669,formattedLastUpdatedAt:"Aug 18, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Configure storage",permalink:"/docs/laura/function-platform-mockup/compute/deployment/cloud-deployment/configure-storage"},next:{title:"Install Compute in your cloud environment",permalink:"/docs/laura/function-platform-mockup/compute/deployment/cloud-deployment/install-compute-in-your-cloud-environment"}},p={},c=[{value:"Configuration options",id:"configuration-options",level:2},{value:"Examples",id:"examples",level:2},{value:"Hook points",id:"hook-points",level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-webhooks"},"Configure webhooks"),(0,r.kt)("p",null,"Certain actions in Compute can trigger webhooks to notify other services of the event. The receivers of webhooks get contextually relevant information about the request Compute receiver. By default, no webhooks are configured."),(0,r.kt)("p",null,"You can set your own webhooks in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scc-config.yaml")," file that ",(0,r.kt)("inlineCode",{parentName:"p"},"subo")," created for you in your ",(0,r.kt)("inlineCode",{parentName:"p"},"suborbital/config")," directory."),(0,r.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"webhooks")," stanza in ",(0,r.kt)("inlineCode",{parentName:"p"},"scc-config.yaml")," consists of a top level ",(0,r.kt)("inlineCode",{parentName:"p"},"webhooks")," object with a list of entries."),(0,r.kt)("p",null,"Each entry has an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," referencing the ",(0,r.kt)("inlineCode",{parentName:"p"},"builder.function.promoted")," hook point and a list of ",(0,r.kt)("strong",{parentName:"p"},"one or more")," HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"targets"),", which consist of a ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"method"),", and dictionary of ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," (optional)."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"A simple inline example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=scc-config.yaml",title:"scc-config.yaml"},"capabilities:\n  # ...\n\nwebhooks:\n  - id: builder.function.promoted\n    targets:\n     - url: http://example.com/promoted\n       method: POST\n       headers:\n         'X-Some-Header': 'some value'\n")),(0,r.kt)("p",null,"An example with shared headers and multiple targets for a single hook point:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=scc-config.yaml",title:"scc-config.yaml"},"commonHeaders: &commonHeaders\n  'Authorization': 'Bearer d2UncmUgaGlyaW5nCg=='\n\nwebhooks:\n  - id: builder.function.promoted\n    targets:\n     - url: http://echo-server:1234/promoted\n       method: POST\n       headers: *commonHeaders\n\n     - url: https://postman-echo.com/post\n       method: POST\n       headers: *commonHeaders\n")),(0,r.kt)("h2",{id:"hook-points"},"Hook points"),(0,r.kt)("admonition",{title:"Devs at work",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Stay tuned for more hook points!")),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"builder.function.promoted")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")," Runs when an end user successfully deploys a function. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample response(JSON):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "webhook_id": "builder.function.promoted",\n    "compute_context": {\n        "request_id": "ac1f5e84-5327-46a5-9d71-8ad766f39979",\n        "request_url": "/api/v1/draft/com.suborbital.demo/default/webhook/promote"\n    },\n    "response_body": {\n        "ident": "com.suborbital.demo",\n        "namespace": "default",\n        "fn": "webhook",\n        "version": "v1.0.0"\n    }\n}\n')))}u.isMDXComponent=!0}}]);