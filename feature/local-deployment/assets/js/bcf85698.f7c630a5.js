"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[45],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3936:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},l="Reactr \u2795 Grav",c={unversionedId:"reactr/grav",id:"reactr/grav",title:"Reactr \u2795 Grav",description:"Reactr is designed to integrate with the other Suborbital projects such as Grav. Grav is a decentralized message bus which allows for your application code to communicate in a scalable, resilient way.",source:"@site/docs/reactr/grav.md",sourceDirName:"reactr",slug:"/reactr/grav",permalink:"/docs/feature/local-deployment/reactr/grav",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/reactr/grav.md",tags:[],version:"current",lastUpdatedAt:1645993708,formattedLastUpdatedAt:"2/27/2022",frontMatter:{},sidebar:"docs",previous:{title:"Reactr \u2764\ufe0f WebAssembly",permalink:"/docs/feature/local-deployment/reactr/wasm"},next:{title:"Language support",permalink:"/docs/feature/local-deployment/reactr/language-support"}},u={},p=[{value:"Handle Messages",id:"handle-messages",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reactr--grav"},"Reactr \u2795 Grav"),(0,o.kt)("p",null,"Reactr is designed to integrate with the other ",(0,o.kt)("a",{parentName:"p",href:"https://suborbital.dev"},"Suborbital")," projects such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/grav"},"Grav"),". Grav is a decentralized message bus which allows for your application code to communicate in a scalable, resilient way."),(0,o.kt)("h2",{id:"handle-messages"},"Handle Messages"),(0,o.kt)("p",null,"Reactr can respond to messages by connecting to a ",(0,o.kt)("inlineCode",{parentName:"p"},"grav.Pod")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"HandleMsg"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"reactr := rt.New()\ng := grav.New()\n\nreactr.HandleMsg(g.Connect(), msgTypeLogin, &loginEmailRunner{})\n")),(0,o.kt)("p",null,"Whenever a message with the given type is received from the bus, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Job")," will be queued to be handled by the provided Runnable. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Job")," will contain the message data."),(0,o.kt)("p",null,"The result returned by the Runnable's ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," function may be a ",(0,o.kt)("inlineCode",{parentName:"p"},"grav.Message"),". If so, it will be sent back out over the message bus. Anything else will be put into a message (by converting it into bytes) and sent back over the bus. If ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," returns an error, a message with type ",(0,o.kt)("inlineCode",{parentName:"p"},"reactr.runerr")," will be sent. If ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"nil, nil"),", then a message of type ",(0,o.kt)("inlineCode",{parentName:"p"},"reactr.nil")," will be sent. All messages sent will be a reply to the message that triggered the job."))}m.isMDXComponent=!0}}]);