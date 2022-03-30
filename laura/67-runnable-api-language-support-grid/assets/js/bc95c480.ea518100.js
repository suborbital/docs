"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3754],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(r),b=a,d=m["".concat(u,".").concat(b)]||m[b]||p[b]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2357:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],l={},u="Reactr \u2764\ufe0f WebAssembly",i={unversionedId:"reactr/wasm",id:"reactr/wasm",title:"Reactr \u2764\ufe0f WebAssembly",description:"Reactr has first-class support for WebAssembly-packaged Runnables. Wasm is an incredibly useful modern portable binary format that allows multiple languages to be compiled into .wasm modules.",source:"@site/docs/reactr/wasm.md",sourceDirName:"reactr",slug:"/reactr/wasm",permalink:"/docs/laura/67-runnable-api-language-support-grid/reactr/wasm",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/reactr/wasm.md",tags:[],version:"current",lastUpdatedAt:1644267905,formattedLastUpdatedAt:"2/7/2022",frontMatter:{},sidebar:"docs",previous:{title:"Reactr",permalink:"/docs/laura/67-runnable-api-language-support-grid/reactr/"},next:{title:"Reactr \u2795 Grav",permalink:"/docs/laura/67-runnable-api-language-support-grid/reactr/grav"}},c=[],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reactr-\ufe0f-webassembly"},"Reactr \u2764\ufe0f WebAssembly"),(0,o.kt)("p",null,"Reactr has first-class support for WebAssembly-packaged Runnables. Wasm is an incredibly useful modern portable binary format that allows multiple languages to be compiled into .wasm modules."),(0,o.kt)("p",null,"The current supported languages are Rust (stable), TypeScript/AssemblyScript (beta) and Swift (alpha). The Runnable API is available for each. More languages such as Go and C++ are coming soon!"),(0,o.kt)("p",null,"To create a Wasm runnable, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo"},"subo CLI"),". Once you've generated a ",(0,o.kt)("inlineCode",{parentName:"p"},".wasm")," file, you can use it with Reactr just like any other Runnable!"),(0,o.kt)("p",null,"A multitude of example Runnables can be found in the ",(0,o.kt)("a",{parentName:"p",href:"../rwasm/testdata"},"testdata directory"),"."),(0,o.kt)("p",null,"Due to the memory layout of WebAssembly, Wasm runners accept bytes (rather than arbitrary input) and return bytes. Reactr will handle the conversion of inputs and outputs automatically. Wasm runners cannot currently schedule other jobs."),(0,o.kt)("p",null,"To get started with Wasm Runnables, install Reactr's WebAssembly package ",(0,o.kt)("inlineCode",{parentName:"p"},"rwasm"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/suborbital/reactr/rwasm\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'r := rt.New()\n\ndoWasm := r.Register("wasm", rwasm.NewRunner("path/to/runnable/file.wasm"))\n\nres, err := doWasm("input_will_be_converted_to_bytes").Then()\nif err != nil {\n    log.Fatal(err)\n}\n\nfmt.Println(string(res.([]byte)))\n')),(0,o.kt)("p",null,"By default, Reactr uses the Wasmer runtime internally, but supports the Wasmtime runtime as well. Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"-tags wasmtime")," to any ",(0,o.kt)("inlineCode",{parentName:"p"},"go")," command to use Wasmtime. Wasmtime is not yet supported on ARM."),(0,o.kt)("p",null,"And that's it! You can schedule Wasm jobs as normal, and Wasm environments will be managed automatically to run your jobs."))}m.isMDXComponent=!0}}]);