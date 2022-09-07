"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2042],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1205:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},p="Language support",s={unversionedId:"reactr/language-support",id:"reactr/language-support",title:"Language support",description:"This page explains the various levels of support for the growing number of source languages supported for writing Runnables in Reactr. Projects in the Suborbital ecosystem such as Atmo or Sat use the Reactr runtime to execute these WebAssembly, allowing them to interface with the runtime through the Runnable interface. The languages supported may vary across Reactr releases, and Runtime API support offered for some of these languages may be limited depending on the state of the current implementation.",source:"@site/docs/reactr/language-support.md",sourceDirName:"reactr",slug:"/reactr/language-support",permalink:"/docs/arbourd-patch-1/reactr/language-support",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/reactr/language-support.md",tags:[],version:"current",lastUpdatedAt:1648649970,formattedLastUpdatedAt:"3/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Reactr \u2795 Grav",permalink:"/docs/arbourd-patch-1/reactr/grav"},next:{title:"Vektor",permalink:"/docs/arbourd-patch-1/vektor/"}},u={},m=[{value:"Support status",id:"support-status",level:2},{value:"Stable",id:"stable",level:3},{value:"Support status interpretation",id:"support-status-interpretation",level:3},{value:"Stable",id:"stable-1",level:4},{value:"Beta",id:"beta",level:3},{value:"Preview",id:"preview",level:3}],d={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"language-support"},"Language support"),(0,o.kt)("p",null,"This page explains the various levels of support for the growing number of source languages supported for writing ",(0,o.kt)("a",{parentName:"p",href:"/docs/arbourd-patch-1/atmo/concepts/runnables"},"Runnables")," in Reactr. Projects in the Suborbital ecosystem such as ",(0,o.kt)("a",{parentName:"p",href:"../atmo/"},"Atmo")," or ",(0,o.kt)("a",{parentName:"p",href:"../sat/"},"Sat")," use the Reactr runtime to execute these WebAssembly, allowing them to interface with the runtime through the ",(0,o.kt)("a",{parentName:"p",href:"../atmo/runnable-api/introduction#the-runnable-interface"},"Runnable interface"),". The languages supported may vary across Reactr releases, and Runtime API support offered for some of these languages may be limited depending on the state of the current implementation."),(0,o.kt)("p",null,"Our ",(0,o.kt)("a",{parentName:"p",href:"../subo"},(0,o.kt)("inlineCode",{parentName:"a"},"subo"))," command line tool can help you create starter templates for Runnables in the various supported languages. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/arbourd-patch-1/atmo/usage/creating-runnables"},"Creating Runnables")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"--lang")," parameters for each."),(0,o.kt)("h2",{id:"support-status"},"Support status"),(0,o.kt)("h3",{id:"stable"},"Stable"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Language"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"th"},"--lang=")),(0,o.kt)("th",{parentName:"tr",align:null},"Support Status"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#javascript"},"JavaScript")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--lang=javascript")),(0,o.kt)("td",{parentName:"tr",align:null},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#typescript"},"TypeScript")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--lang=typescript")),(0,o.kt)("td",{parentName:"tr",align:null},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#swift"},"Swift")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--lang=swift")),(0,o.kt)("td",{parentName:"tr",align:null},"Preview")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#assemblyscript"},"AssemblyScript")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--lang=assemblyscript")),(0,o.kt)("td",{parentName:"tr",align:null},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#go"},"TinyGo")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--lang=tinygo")),(0,o.kt)("td",{parentName:"tr",align:null},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#grain"},"Grain")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--lang=grain")),(0,o.kt)("td",{parentName:"tr",align:null},"Beta")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#rust"},"Rust")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--lang=rust")),(0,o.kt)("td",{parentName:"tr",align:null},"Stable")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rust support is implemented through the ",(0,o.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/what/wasm"},"native WebAssembly support")," of the Rust compiler."),(0,o.kt)("li",{parentName:"ul"},"Go support uses the ",(0,o.kt)("a",{parentName:"li",href:"https://tinygo.org/"},"Tiny Go compiler")," to target WebAssembly.")),(0,o.kt)("h3",{id:"support-status-interpretation"},"Support status interpretation"),(0,o.kt)("h4",{id:"stable-1"},"Stable"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"STATUS: STABLE")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("p",null,"Indicates complete support of language features and most, if not all Runnable APIs. The languages in this group are usually the first to receive updates when a new feature is added to the Runnable API."),(0,o.kt)("h3",{id:"beta"},"Beta"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"STATUS: BETA")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("p",null,"Indicative of widespread support for language features and most Runnable APIs. Some newer or more complex APIs might be missing, and certain language features might be unimplemented, or may not be completely stable."),(0,o.kt)("h3",{id:"preview"},"Preview"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"STATUS: PREVIEW")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("p",null,"Support for the language has only recently landed, or is considered experimental. Some language features may not work, or will fail. Some Runnable APIs might not be implemented yet, or may not work as intended."))}c.isMDXComponent=!0}}]);