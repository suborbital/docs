"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),b=n,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return r?a.createElement(d,s(s({ref:t},u),{},{components:r})):a.createElement(d,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},s="Reactr \u2764\ufe0f WebAssembly",l={unversionedId:"reactr/wasm",id:"reactr/wasm",title:"Reactr \u2764\ufe0f WebAssembly",description:"Reactr has first-class support for WebAssembly-packaged Runnables. Wasm is an incredibly useful modern portable binary format that allows multiple languages to be compiled into .wasm modules.",source:"@site/docs/reactr/wasm.md",sourceDirName:"reactr",slug:"/reactr/wasm",permalink:"/docs/laura/166-update-compute-deployment-docs/reactr/wasm",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/reactr/wasm.md",tags:[],version:"current",lastUpdatedAt:1653587223,formattedLastUpdatedAt:"May 26, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Reactr",permalink:"/docs/laura/166-update-compute-deployment-docs/reactr/"},next:{title:"Reactr \u2795 Grav",permalink:"/docs/laura/166-update-compute-deployment-docs/reactr/grav"}},i={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reactr-\ufe0f-webassembly"},"Reactr \u2764\ufe0f WebAssembly"),(0,n.kt)("p",null,"Reactr has first-class support for WebAssembly-packaged Runnables. Wasm is an incredibly useful modern portable binary format that allows multiple languages to be compiled into .wasm modules."),(0,n.kt)("p",null,"The current supported languages are Rust (stable), TypeScript/AssemblyScript (beta) and Swift (alpha). The Runnable API is available for each. More languages such as Go and C++ are coming soon!"),(0,n.kt)("p",null,"To create a Wasm runnable, check out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo"},"subo CLI"),". Once you've generated a ",(0,n.kt)("inlineCode",{parentName:"p"},".wasm")," file, you can use it with Reactr just like any other Runnable!"),(0,n.kt)("p",null,"A multitude of example Runnables can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/suborbital/reactr/tree/main/engine/testdata"},"testdata directory"),"."),(0,n.kt)("p",null,"Due to the memory layout of WebAssembly, Wasm runners accept bytes (rather than arbitrary input) and return bytes. Reactr will handle the conversion of inputs and outputs automatically. Wasm runners cannot currently schedule other jobs."),(0,n.kt)("p",null,"To get started with Wasm Runnables, install Reactr's WebAssembly package ",(0,n.kt)("inlineCode",{parentName:"p"},"engine"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/suborbital/reactr/engine\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'r := rt.New()\n\ndoWasm := r.Register("wasm", engine.NewRunner("path/to/runnable/file.wasm"))\n\nres, err := doWasm("input_will_be_converted_to_bytes").Then()\nif err != nil {\n    log.Fatal(err)\n}\n\nfmt.Println(string(res.([]byte)))\n')),(0,n.kt)("p",null,"By default, Reactr uses the Wasmer runtime internally, but supports the Wasmtime runtime as well. Pass ",(0,n.kt)("inlineCode",{parentName:"p"},"-tags wasmtime")," to any ",(0,n.kt)("inlineCode",{parentName:"p"},"go")," command to use Wasmtime. Wasmtime is not yet supported on ARM."),(0,n.kt)("p",null,"And that's it! You can schedule Wasm jobs as normal, and Wasm environments will be managed automatically to run your jobs."))}p.isMDXComponent=!0}}]);