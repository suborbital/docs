"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2042],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(a),c=n,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?r.createElement(g,o(o({ref:t},s),{},{components:a})):r.createElement(g,o({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={pagination_next:null},o="Language support",i={unversionedId:"reactr/language-support",id:"reactr/language-support",title:"Language support",description:"This page explains the various levels of support for the growing number of source languages supported for writing Runnables in Reactr. Projects in the Suborbital ecosystem such as Atmo or Sat use the Reactr runtime to execute these WebAssembly, allowing them to interface with the runtime through the Runnable interface. The languages supported may vary across Reactr releases, and Runtime API support offered for some of these languages may be limited depending on the state of the current implementation.",source:"@site/docs/reactr/language-support.md",sourceDirName:"reactr",slug:"/reactr/language-support",permalink:"/docs/feature/local-deployment/reactr/language-support",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/reactr/language-support.md",tags:[],version:"current",lastUpdatedAt:1660755378,formattedLastUpdatedAt:"Aug 17, 2022",frontMatter:{pagination_next:null},sidebar:"docs",previous:{title:"Reactr \u2795 Grav",permalink:"/docs/feature/local-deployment/reactr/grav"}},p={},u=[{value:"Support status",id:"support-status",level:2},{value:"Stable",id:"stable",level:3},{value:"Support status interpretation",id:"support-status-interpretation",level:3},{value:"Stable",id:"stable-1",level:4},{value:"Beta",id:"beta",level:3},{value:"Preview",id:"preview",level:3}],s={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"language-support"},"Language support"),(0,n.kt)("p",null,"This page explains the various levels of support for the growing number of source languages supported for writing ",(0,n.kt)("a",{parentName:"p",href:"/docs/feature/local-deployment/atmo/concepts/runnables"},"Runnables")," in Reactr. Projects in the Suborbital ecosystem such as ",(0,n.kt)("a",{parentName:"p",href:"../atmo/"},"Atmo")," or ",(0,n.kt)("a",{parentName:"p",href:"../sat/"},"Sat")," use the Reactr runtime to execute these WebAssembly, allowing them to interface with the runtime through the ",(0,n.kt)("a",{parentName:"p",href:"../atmo/runnable-api/introduction#the-runnable-interface"},"Runnable interface"),". The languages supported may vary across Reactr releases, and Runtime API support offered for some of these languages may be limited depending on the state of the current implementation."),(0,n.kt)("p",null,"Our ",(0,n.kt)("a",{parentName:"p",href:"../subo"},(0,n.kt)("inlineCode",{parentName:"a"},"subo"))," command line tool can help you create starter templates for Runnables in the various supported languages. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/feature/local-deployment/atmo/usage/creating-runnables"},"Creating Runnables")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"--lang")," parameters for each."),(0,n.kt)("h2",{id:"support-status"},"Support status"),(0,n.kt)("h3",{id:"stable"},"Stable"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Language"),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"th"},"--lang=")),(0,n.kt)("th",{parentName:"tr",align:null},"Support Status"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#javascript"},"JavaScript")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--lang=javascript")),(0,n.kt)("td",{parentName:"tr",align:null},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#typescript"},"TypeScript")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--lang=typescript")),(0,n.kt)("td",{parentName:"tr",align:null},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#swift"},"Swift")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--lang=swift")),(0,n.kt)("td",{parentName:"tr",align:null},"Preview")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#assemblyscript"},"AssemblyScript")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--lang=assemblyscript")),(0,n.kt)("td",{parentName:"tr",align:null},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#go"},"TinyGo")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--lang=tinygo")),(0,n.kt)("td",{parentName:"tr",align:null},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#grain"},"Grain")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--lang=grain")),(0,n.kt)("td",{parentName:"tr",align:null},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#rust"},"Rust")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--lang=rust")),(0,n.kt)("td",{parentName:"tr",align:null},"Stable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#wat"},"WebAssembly Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--lang=wat")),(0,n.kt)("td",{parentName:"tr",align:null},"Stable")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rust support is implemented through the ",(0,n.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/what/wasm"},"native WebAssembly support")," of the Rust compiler."),(0,n.kt)("li",{parentName:"ul"},"Go support uses the ",(0,n.kt)("a",{parentName:"li",href:"https://tinygo.org/"},"Tiny Go compiler")," to target WebAssembly.")),(0,n.kt)("h3",{id:"support-status-interpretation"},"Support status interpretation"),(0,n.kt)("h4",{id:"stable-1"},"Stable"),(0,n.kt)("admonition",{title:"STATUS: STABLE",type:"tip"}),(0,n.kt)("p",null,"Indicates complete support of language features and most, if not all Runnable APIs. The languages in this group are usually the first to receive updates when a new feature is added to the Runnable API."),(0,n.kt)("h3",{id:"beta"},"Beta"),(0,n.kt)("admonition",{title:"STATUS: BETA",type:"info"}),(0,n.kt)("p",null,"Indicative of widespread support for language features and most Runnable APIs. Some newer or more complex APIs might be missing, and certain language features might be unimplemented, or may not be completely stable."),(0,n.kt)("h3",{id:"preview"},"Preview"),(0,n.kt)("admonition",{title:"STATUS: PREVIEW",type:"caution"}),(0,n.kt)("p",null,"Support for the language has only recently landed, or is considered experimental. Some language features may not work, or will fail. Some Runnable APIs might not be implemented yet, or may not work as intended."))}m.isMDXComponent=!0}}]);