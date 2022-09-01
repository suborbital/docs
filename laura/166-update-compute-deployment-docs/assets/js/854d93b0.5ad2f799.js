"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7851],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={},l="Headless Mode",i={unversionedId:"atmo/usage/headless",id:"atmo/usage/headless",title:"Headless Mode",description:"Atmo can be run 'headless' mode, which causes it to ignore the",source:"@site/docs/atmo/usage/headless.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/headless",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/usage/headless",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/headless.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"Jun 30, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Error handling",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/usage/error-handling"},next:{title:"Managing state",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/usage/managing-state"}},s={},u=[{value:"Running in Headless mode",id:"running-in-headless-mode",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"headless-mode"},"Headless Mode"),(0,r.kt)("p",null,"Atmo can be run 'headless' mode, which causes it to ignore the\nDirective and instead make each Runnable in your application\navailable as an individual endpoint. This can be useful for a\nnumber of things such as automated testing (being able to test\neach Runnable in isolation with controlled inputs)."),(0,r.kt)("p",null,"Each function will be made available at a URI such as this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"POST /com.suborbital.test/default/get-file/v0.0.1\n")),(0,r.kt)("p",null,"The format of this URL is: ",(0,r.kt)("inlineCode",{parentName:"p"},"/[identifier]/[namespace]/[name]/[appVersion]"),".\nYour Directive defines the identifier, appVersion, the namespace and\nname of each Runnable. These are listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},".runnable.yaml")," file within\neach Runnable's directory."),(0,r.kt)("p",null,"To define the inputs for the request, you can use the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Desired input"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Headless Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Runnable API"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Request body"),(0,r.kt)("td",{parentName:"tr",align:"left"},"POST request body"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"req::body()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Request state"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"X-Atmo-State")," header, formatted as JSON key/value pairs"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"req::state(key)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"URL parameters ","(","such as /:name",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"X-Atmo-Params")," header, formatted as JSON key/value pairs"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"req::param(key)"))))),(0,r.kt)("p",null,"For example, if your Runnable expects data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/laura/166-update-compute-deployment-docs/atmo/concepts/state"},"request state")," key, you would set the\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Atmo-State")," header as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{"user": "user@suborbital.dev"}\n')),(0,r.kt)("p",null,"And if your Runnable expects to parse URL parameters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/:user"),",\nyou can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Atmo-Params")," header in a similar fashion."),(0,r.kt)("p",null,"When running in headless mode, the unique UUID for each request will be\nreturned in the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Atmo-Requestid")," response header field."),(0,r.kt)("h2",{id:"running-in-headless-mode"},"Running in Headless mode"),(0,r.kt)("p",null,"To run Atmo in headless mode, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ATMO_HEADLESS")," env var:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ATMO_HEADLESS=true\n")),(0,r.kt)("p",null,"In a Dockerfile, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ENV")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ENV ATMO_HEADLESS=true\n")),(0,r.kt)("p",null,"Or with the Docker CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker run [...] -e ATMO_HEADLESS=true suborbital/atmo atmo\n")))}p.isMDXComponent=!0}}]);