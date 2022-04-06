"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3754],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return b}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(r),b=n,d=p["".concat(u,".").concat(b)]||p[b]||m[b]||o;return r?a.createElement(d,s(s({ref:t},i),{},{components:r})):a.createElement(d,s({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2357:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=["components"],l={},u="Reactr \u2764\ufe0f WebAssembly",c={unversionedId:"reactr/wasm",id:"reactr/wasm",title:"Reactr \u2764\ufe0f WebAssembly",description:"Reactr has first-class support for WebAssembly-packaged Runnables. Wasm is an incredibly useful modern portable binary format that allows multiple languages to be compiled into .wasm modules.",source:"@site/docs/reactr/wasm.md",sourceDirName:"reactr",slug:"/reactr/wasm",permalink:"/docs/laura/41-review-documentation-around-compute-repl-and-actual-usage/reactr/wasm",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/reactr/wasm.md",tags:[],version:"current",lastUpdatedAt:1648924792,formattedLastUpdatedAt:"4/2/2022",frontMatter:{},sidebar:"docs",previous:{title:"Reactr",permalink:"/docs/laura/41-review-documentation-around-compute-repl-and-actual-usage/reactr/"},next:{title:"Reactr \u2795 Grav",permalink:"/docs/laura/41-review-documentation-around-compute-repl-and-actual-usage/reactr/grav"}},i=[],m={toc:i};function p(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reactr-\ufe0f-webassembly"},"Reactr \u2764\ufe0f WebAssembly"),(0,o.kt)("p",null,"Reactr has first-class support for WebAssembly-packaged Runnables. Wasm is an incredibly useful modern portable binary format that allows multiple languages to be compiled into .wasm modules."),(0,o.kt)("p",null,"The current supported languages are Rust (stable), TypeScript/AssemblyScript (beta) and Swift (alpha). The Runnable API is available for each. More languages such as Go and C++ are coming soon!"),(0,o.kt)("p",null,"To create a Wasm runnable, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo"},"subo CLI"),". Once you've generated a ",(0,o.kt)("inlineCode",{parentName:"p"},".wasm")," file, you can use it with Reactr just like any other Runnable!"),(0,o.kt)("p",null,"A multitude of example Runnables can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/reactr/tree/main/rwasm/testdata"},"testdata directory"),"."),(0,o.kt)("p",null,"Due to the memory layout of WebAssembly, Wasm runners accept bytes (rather than arbitrary input) and return bytes. Reactr will handle the conversion of inputs and outputs automatically. Wasm runners cannot currently schedule other jobs."),(0,o.kt)("p",null,"To get started with Wasm Runnables, install Reactr's WebAssembly package ",(0,o.kt)("inlineCode",{parentName:"p"},"rwasm"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/suborbital/reactr/rwasm\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'r := rt.New()\n\ndoWasm := r.Register("wasm", rwasm.NewRunner("path/to/runnable/file.wasm"))\n\nres, err := doWasm("input_will_be_converted_to_bytes").Then()\nif err != nil {\n    log.Fatal(err)\n}\n\nfmt.Println(string(res.([]byte)))\n')),(0,o.kt)("p",null,"By default, Reactr uses the Wasmer runtime internally, but supports the Wasmtime runtime as well. Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"-tags wasmtime")," to any ",(0,o.kt)("inlineCode",{parentName:"p"},"go")," command to use Wasmtime. Wasmtime is not yet supported on ARM."),(0,o.kt)("p",null,"And that's it! You can schedule Wasm jobs as normal, and Wasm environments will be managed automatically to run your jobs."))}p.isMDXComponent=!0}}]);