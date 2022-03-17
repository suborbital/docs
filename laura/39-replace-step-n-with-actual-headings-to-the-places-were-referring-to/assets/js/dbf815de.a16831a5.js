"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2042],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1205:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="Language support",p={unversionedId:"reactr/language-support",id:"reactr/language-support",title:"Language support",description:"Reactr supports a growing number of languages for writing Runnables in. Projects in the Suborbital ecosystem such as Atmo or Sat use the Reactr runtime to execute these WebAssembly, allowing them to interface with the runtime through the Runnable interface. The supported languages may vary across Reactr releases, and Runtime API support offered for some of these languages may be limited depending on the state of the current implementation.",source:"@site/docs/reactr/language-support.md",sourceDirName:"reactr",slug:"/reactr/language-support",permalink:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/reactr/language-support",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/reactr/language-support.md",tags:[],version:"current",lastUpdatedAt:1647046484,formattedLastUpdatedAt:"3/12/2022",frontMatter:{},sidebar:"docs",previous:{title:"Reactr \u2795 Grav",permalink:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/reactr/grav"},next:{title:"Vektor",permalink:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/vektor/"}},u=[{value:"Support status",id:"support-status",children:[{value:"Stable",id:"stable",children:[],level:3},{value:"Beta",id:"beta",children:[],level:3},{value:"Preview",id:"preview",children:[],level:3}],level:2},{value:"Supported languages",id:"supported-languages",children:[{value:"Rust",id:"rust",children:[],level:3},{value:"Go",id:"go",children:[],level:3},{value:"AssemblyScript",id:"assemblyscript",children:[],level:3},{value:"Grain",id:"grain",children:[],level:3},{value:"JavaScript &amp; Typescript",id:"javascript--typescript",children:[],level:3},{value:"Swift",id:"swift",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"language-support"},"Language support"),(0,i.kt)("p",null,"Reactr supports a growing number of languages for writing ",(0,i.kt)("a",{parentName:"p",href:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/atmo/concepts/runnables"},"Runnables")," in. Projects in the Suborbital ecosystem such as ",(0,i.kt)("a",{parentName:"p",href:"../atmo/"},"Atmo")," or ",(0,i.kt)("a",{parentName:"p",href:"../sat/"},"Sat")," use the Reactr runtime to execute these WebAssembly, allowing them to interface with the runtime through the ",(0,i.kt)("a",{parentName:"p",href:"../atmo/runnable-api/introduction#the-runnable-interface"},"Runnable interface"),". The supported languages may vary across Reactr releases, and Runtime API support offered for some of these languages may be limited depending on the state of the current implementation."),(0,i.kt)("p",null,"This page explains the various levels of support for source languages in Reactr, as well as lists the currently supported languages and the potential caveats associated with them."),(0,i.kt)("h2",{id:"support-status"},"Support status"),(0,i.kt)("h3",{id:"stable"},"Stable"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"STATUS: STABLE")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("p",null,"Indicates complete support of language features and most, if not all Runnable APIs. The languages in this group are usually the first to receive updates when a new feature is added to the Runnable API."),(0,i.kt)("p",null,"Languages in this stage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rust"},"Rust"))),(0,i.kt)("h3",{id:"beta"},"Beta"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"STATUS: BETA")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("p",null,"Indicative of widespread support for language features and most Runnable APIs. Some newer or more complex APIs might be missing, and certain language features might be unimplemented, or may not be completely stable."),(0,i.kt)("p",null,"Languages in this stage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#go"},"Go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#assemblyscript"},"AssemblyScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#grain"},"Grain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#js-ts"},"JavaScript / Typescript"))),(0,i.kt)("h3",{id:"preview"},"Preview"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"STATUS: PREVIEW")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"})),(0,i.kt)("p",null,"Support for the language has only been recently landed, or is considered experimental. Some language features may not work, or fail. Some Runnable APIs might not be implemented yet, or may not work as intended."),(0,i.kt)("p",null,"Languages in this stage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#swift"},"Swift"))),(0,i.kt)("h2",{id:"supported-languages"},"Supported languages"),(0,i.kt)("h3",{id:"rust"},"Rust"),(0,i.kt)("p",null,"Rust support is implemented through the ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/what/wasm"},"native WebAssembly support")," of the Rust compiler."),(0,i.kt)("h3",{id:"go"},"Go"),(0,i.kt)("p",null,"The Go support uses the ",(0,i.kt)("a",{parentName:"p",href:"https://tinygo.org/"},"Tiny Go compiler")," to target WebAssembly. While generally support for language features is good, please note that some Go features ",(0,i.kt)("a",{parentName:"p",href:"https://tinygo.org/docs/reference/lang-support/"},"may be unavailable or incomplete")," in this context."),(0,i.kt)("h3",{id:"assemblyscript"},"AssemblyScript"),(0,i.kt)("h3",{id:"grain"},"Grain"),(0,i.kt)("h3",{id:"javascript--typescript"},"JavaScript & Typescript"),(0,i.kt)("h3",{id:"swift"},"Swift"))}m.isMDXComponent=!0}}]);