"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7851],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},566:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Headless Mode",u={unversionedId:"atmo/usage/headless",id:"atmo/usage/headless",title:"Headless Mode",description:"Atmo can be run 'headless' mode, which causes it to ignore the",source:"@site/docs/atmo/usage/headless.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/headless",permalink:"/docs/jagger/fix-spellcheck-ci/atmo/usage/headless",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/headless.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"6/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Error handling",permalink:"/docs/jagger/fix-spellcheck-ci/atmo/usage/error-handling"},next:{title:"Managing state",permalink:"/docs/jagger/fix-spellcheck-ci/atmo/usage/managing-state"}},p={},d=[{value:"Running in Headless mode",id:"running-in-headless-mode",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"headless-mode"},"Headless Mode"),(0,i.kt)("p",null,"Atmo can be run 'headless' mode, which causes it to ignore the\nDirective and instead make each Runnable in your application\navailable as an individual endpoint. This can be useful for a\nnumber of things such as automated testing (being able to test\neach Runnable in isolation with controlled inputs)."),(0,i.kt)("p",null,"Each function will be made available at a URI such as this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"POST /com.suborbital.test/default/get-file/v0.0.1\n")),(0,i.kt)("p",null,"The format of this URL is: ",(0,i.kt)("inlineCode",{parentName:"p"},"/[identifier]/[namespace]/[name]/[appVersion]"),".\nYour Directive defines the identifier, appVersion, the namespace and\nname of each Runnable. These are listed in the ",(0,i.kt)("inlineCode",{parentName:"p"},".runnable.yaml")," file within\neach Runnable's directory."),(0,i.kt)("p",null,"To define the inputs for the request, you can use the following:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Desired input"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Headless Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Runnable API"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Request body"),(0,i.kt)("td",{parentName:"tr",align:"left"},"POST request body"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"req::body()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Request state"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"X-Atmo-State")," header, formatted as JSON key/value pairs"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"req::state(key)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"URL parameters ","(","such as /:name",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"X-Atmo-Params")," header, formatted as JSON key/value pairs"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"req::param(key)"))))),(0,i.kt)("p",null,"For example, if your Runnable expects data in the ",(0,i.kt)("inlineCode",{parentName:"p"},"user"),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/jagger/fix-spellcheck-ci/atmo/concepts/state"},"request state")," key, you would set the\n",(0,i.kt)("inlineCode",{parentName:"p"},"X-Atmo-State")," header as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{"user": "user@suborbital.dev"}\n')),(0,i.kt)("p",null,"And if your Runnable expects to parse URL parameters such as ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/:user"),",\nyou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Atmo-Params")," header in a similar fashion."),(0,i.kt)("p",null,"When running in headless mode, the unique UUID for each request will be\nreturned in the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Atmo-Requestid")," response header field."),(0,i.kt)("h2",{id:"running-in-headless-mode"},"Running in Headless mode"),(0,i.kt)("p",null,"To run Atmo in headless mode, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ATMO_HEADLESS")," env var:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ATMO_HEADLESS=true\n")),(0,i.kt)("p",null,"In a Dockerfile, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENV")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ENV ATMO_HEADLESS=true\n")),(0,i.kt)("p",null,"Or with the Docker CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"docker run [...] -e ATMO_HEADLESS=true suborbital/atmo atmo\n")))}m.isMDXComponent=!0}}]);