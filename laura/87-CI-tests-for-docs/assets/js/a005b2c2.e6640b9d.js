"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8049],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1890:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s="Creating Runnables",u={unversionedId:"atmo/usage/creating-runnables",id:"atmo/usage/creating-runnables",title:"Creating Runnables",description:"Make sure you have the prerequisites installed before proceeding.",source:"@site/docs/atmo/usage/creating-runnables.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/creating-runnables",permalink:"/docs/laura/87-CI-tests-for-docs/atmo/usage/creating-runnables",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/creating-runnables.md",tags:[],version:"current",lastUpdatedAt:1648609152,formattedLastUpdatedAt:"3/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"Static Directory",permalink:"/docs/laura/87-CI-tests-for-docs/atmo/concepts/static-directory"},next:{title:"Creating handlers",permalink:"/docs/laura/87-CI-tests-for-docs/atmo/usage/creating-handlers"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"creating-runnables"},"Creating Runnables"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Make sure you ",(0,l.kt)("a",{parentName:"p",href:"../get-started#prerequisites"},"have the prerequisites installed")," before proceeding."))),(0,l.kt)("p",null,"You can create a new Runnable with subo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"subo create runnable myfunction\n")),(0,l.kt)("p",null,"By default, Rust will be used. To use one of the other ",(0,l.kt)("a",{parentName:"p",href:"/docs/laura/87-CI-tests-for-docs/reactr/language-support"},"supported languages"),", pass the relevant value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"--lang")," parameter:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Language"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"--lang=")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JavaScript"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--lang=javascript"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TypeScript"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--lang=typescript"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Swift"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--lang=swift"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AssemblyScript"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--lang=assemblyscript"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TinyGo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--lang=tinygo"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grain"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--lang=grain"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rust"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--lang=rust"))))),(0,l.kt)("p",null," For example, to use JavaScript, pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--lang=javascript"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"subo create runnable myjavascriptfunction --lang=javascript\n")),(0,l.kt)("p",null,"Each runnable has a ",(0,l.kt)("inlineCode",{parentName:"p"},".runnable.yaml")," that describes it.\nThe name you provide to the ",(0,l.kt)("inlineCode",{parentName:"p"},"create runnable")," command is the\nname that will be used to call the Runnable in ",(0,l.kt)("a",{parentName:"p",href:"../concepts/the-directive"},"Directive"),"\nhandlers, which are discussed next."),(0,l.kt)("p",null,"Your Runnables will use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/laura/87-CI-tests-for-docs/atmo/runnable-api/introduction"},"Runnable API")," to access\nresources such as the network, files, and more."))}d.isMDXComponent=!0}}]);