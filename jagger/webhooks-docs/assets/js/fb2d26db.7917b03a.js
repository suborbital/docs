"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7345],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return o?n.createElement(f,a(a({ref:t},s),{},{components:o})):n.createElement(f,a({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8613:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],c={},l="Configure Webhooks",u={unversionedId:"compute/cloud-deployment/configure-webhooks",id:"compute/cloud-deployment/configure-webhooks",title:"Configure Webhooks",description:"Certain actions in Compute can trigger webhooks to notify other services of the event. The receivers of webhooks get contextually relevant information about the request Compute receiver. By default, no webhooks are configured.",source:"@site/docs/compute/cloud-deployment/configure-webhooks.md",sourceDirName:"compute/cloud-deployment",slug:"/compute/cloud-deployment/configure-webhooks",permalink:"/docs/jagger/webhooks-docs/compute/cloud-deployment/configure-webhooks",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/cloud-deployment/configure-webhooks.md",tags:[],version:"current",lastUpdatedAt:1656550167,formattedLastUpdatedAt:"6/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Configure Storage",permalink:"/docs/jagger/webhooks-docs/compute/cloud-deployment/configure-storage"},next:{title:"Deploy Compute to your cloud environment",permalink:"/docs/jagger/webhooks-docs/compute/cloud-deployment/install-compute-in-your-cloud-environment"}},s={},p=[{value:"Configuration options",id:"configuration-options",level:2},{value:"Examples",id:"examples",level:2},{value:"Hook points",id:"hook-points",level:2},{value:"<code>builder.function.promoted</code>",id:"builderfunctionpromoted",level:3}],d={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-webhooks"},"Configure Webhooks"),(0,i.kt)("p",null,"Certain actions in Compute can trigger webhooks to notify other services of the event. The receivers of webhooks get contextually relevant information about the request Compute receiver. By default, no webhooks are configured."),(0,i.kt)("p",null,"You can set your own webhooks in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scc-config.yaml")," file that ",(0,i.kt)("inlineCode",{parentName:"p"},"subo")," created for you in your ",(0,i.kt)("inlineCode",{parentName:"p"},"suborbital/config")," directory."),(0,i.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"webhooks")," stanza in ",(0,i.kt)("inlineCode",{parentName:"p"},"scc-config.yaml")," consists of a top level ",(0,i.kt)("inlineCode",{parentName:"p"},"webhooks")," object with a list of entries."),(0,i.kt)("p",null,"Each entry has an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," referencing one of the predefined ",(0,i.kt)("a",{parentName:"p",href:"#hook-points"},"hook points")," and a list of ",(0,i.kt)("strong",{parentName:"p"},"one or more")," HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"targets"),", which consist of a ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"method"),", and dictionary of ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," (optional)."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"A simple inline example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=scc-config.yaml",title:"scc-config.yaml"},"capabilities:\n  # ...\n\nwebhooks:\n  - id: builder.function.promoted\n    targets:\n     - url: http://example.com/promoted\n       method: POST\n       headers:\n         'X-Some-Header': 'some value'\n")),(0,i.kt)("p",null,"An example with shared headers and multiple targets for a single hook point:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=scc-config.yaml",title:"scc-config.yaml"},"commonHeaders: &commonHeaders\n  'Authorization': 'Bearer d2UncmUgaGlyaW5nCg=='\n\nwebhooks:\n  - id: builder.function.promoted\n    targets:\n     - url: http://echo-server:1234/promoted\n       method: POST\n       headers: *commonHeaders\n\n     - url: https://postman-echo.com/post\n       method: POST\n       headers: *commonHeaders\n")),(0,i.kt)("h2",{id:"hook-points"},"Hook points"),(0,i.kt)("h3",{id:"builderfunctionpromoted"},(0,i.kt)("inlineCode",{parentName:"h3"},"builder.function.promoted")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),": Runs when an end user successfully deploys a function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sample response")," (JSON):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "webhook_id": "builder.function.promoted",\n    "compute_context": {\n        "request_id": "ac1f5e84-5327-46a5-9d71-8ad766f39979",\n        "request_url": "/api/v1/draft/com.suborbital.demo/default/webhook/promote"\n    },\n    "response_body": {\n        "ident": "com.suborbital.demo",\n        "namespace": "default",\n        "fn": "webhook",\n        "version": "v1.0.0"\n    }\n}\n')))}m.isMDXComponent=!0}}]);