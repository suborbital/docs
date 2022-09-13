"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},i),{},{components:n})):r.createElement(f,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},s="Scheduled jobs",u={unversionedId:"atmo/usage/schedules",id:"atmo/usage/schedules",title:"Scheduled jobs",description:"You can easily define background jobs in your Directive",source:"@site/docs/atmo/usage/schedules.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/schedules",permalink:"/docs/laura/function-platform-mockup/atmo/usage/schedules",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/schedules.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"Jan 22, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Managing state",permalink:"/docs/laura/function-platform-mockup/atmo/usage/managing-state"},next:{title:"Streams",permalink:"/docs/laura/function-platform-mockup/atmo/usage/streams"}},l={},c=[],i={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scheduled-jobs"},"Scheduled jobs"),(0,a.kt)("p",null,"You can easily define background jobs in your Directive\nthat Atmo will run on a schedule. Schedules run a set of steps,\nexactly like a handler. Schedules can be set up with an\ninitial state to provide input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"schedules:\n  - name: atmo-report\n    every:\n      hours: 1\n    state:\n      repo: suborbital/atmo\n    steps:\n      - fn: ghstars\n\n      - fn: send-report\n        with:\n          stargazers: ghstars\n")),(0,a.kt)("p",null,"As you can see, you can choose how often the job runs\nusing the ",(0,a.kt)("inlineCode",{parentName:"p"},"every")," clause. You can set seconds, minutes,\nhours, or days (and you can combine them for values such as 'every 1 hour and 15 minutes')."),(0,a.kt)("p",null,"If you need to change a Runnable's behaviour to run in a schedule,\nyou can check ",(0,a.kt)("inlineCode",{parentName:"p"},'req::method() == "SCHED"'),". This can be useful when\nusing the same Runnable for both request handlers and schedules."),(0,a.kt)("p",null,"Setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," clause will allow you to 'seed' the job\nwith values, and that state will update after each step,\njust as with request handlers. "),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/laura/function-platform-mockup/atmo/concepts/state"},"state")," for more details."),(0,a.kt)("p",null,"Any issues running schedules (such as Runnables returning errors or any failures to execute the Runnables)\nwill be logged, but nothing else."))}p.isMDXComponent=!0}}]);