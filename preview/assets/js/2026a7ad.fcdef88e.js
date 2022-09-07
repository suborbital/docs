"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[1941],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),b=s(n),m=a,c=b["".concat(u,".").concat(m)]||b[m]||d[m]||l;return n?r.createElement(c,o(o({ref:e},p),{},{components:n})):r.createElement(c,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9086:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={pagination_prev:null},o="Subo",i={unversionedId:"subo/subo",id:"subo/subo",title:"Subo",description:"The Suborbital CLI",source:"@site/docs/subo/subo.md",sourceDirName:"subo",slug:"/subo/",permalink:"/docs/preview/subo/",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/subo/subo.md",tags:[],version:"current",lastUpdatedAt:1647877541,formattedLastUpdatedAt:"Mar 21, 2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"Usage",permalink:"/docs/preview/subo/usage"}},u={},s=[{value:"The Suborbital CLI",id:"the-suborbital-cli",level:3},{value:"Installing",id:"installing",level:2},{value:"macOS (Homebrew)",id:"macos-homebrew",level:3},{value:"Install from source (requires Go)",id:"install-from-source-requires-go",level:3},{value:"Verify installation",id:"verify-installation",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Builders",id:"builders",level:2},{value:"Platforms",id:"platforms",level:2},{value:"Contributing",id:"contributing",level:2}],p={toc:s};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subo"},"Subo"),(0,a.kt)("h3",{id:"the-suborbital-cli"},"The Suborbital CLI"),(0,a.kt)("p",null,"Subo is the command-line tool for working with the Suborbital Development Platform. Subo is used to build Wasm Runnables, generate new projects and config files, and more over time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You do not need to install language-specific tools to get started with WebAssembly and Subo!")," A Docker toolchain is supported (see below) that can build your Runnables without needing to install language toolchains."),(0,a.kt)("h2",{id:"installing"},"Installing"),(0,a.kt)("h3",{id:"macos-homebrew"},"macOS (Homebrew)"),(0,a.kt)("p",null,"If you're on Mac (M1 or Intel), the easiest way to install is via ",(0,a.kt)("inlineCode",{parentName:"p"},"brew"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew tap suborbital/subo\nbrew install subo\n")),(0,a.kt)("h3",{id:"install-from-source-requires-go"},"Install from source (requires Go)"),(0,a.kt)("p",null,"If you use Linux or otherwise prefer to build from source, simply clone this repository or download a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo/releases/latest"},"source code release")," archive and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make subo\n")),(0,a.kt)("p",null,"This will install ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," into your GOPATH (",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin/subo")," by default) which you may need to add to your shell's ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH")," variable."),(0,a.kt)("p",null,"Subo does not have official support for Windows."),(0,a.kt)("h2",{id:"verify-installation"},"Verify installation"),(0,a.kt)("p",null,"Verify subo was installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subo --help\n")),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To get started with Subo, visit the ",(0,a.kt)("a",{parentName:"strong",href:"./atmo/get-started.md"},"Get started guide"),".")),(0,a.kt)("h2",{id:"builders"},"Builders"),(0,a.kt)("p",null,"This repo contains builders for the various languages supported by Wasm Runnables. A builder is a Docker image that can build Runnables into Wasm modules, and is used internally by ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," to build your code! See the ",(0,a.kt)("a",{parentName:"p",href:"./builder/docker"},"builders")," directory for more."),(0,a.kt)("h2",{id:"platforms"},"Platforms"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," tool supports the following platforms and operating systems:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"x86_64"),(0,a.kt)("th",{parentName:"tr",align:null},"arm64"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mac"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Linux"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Windows"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab")))),(0,a.kt)("p",null,"The language toolchains used by ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," support the following platforms:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"x86_64"),(0,a.kt)("th",{parentName:"tr",align:null},"arm64"),(0,a.kt)("th",{parentName:"tr",align:null},"Docker"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rust"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AssemblyScript"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Swift"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udeab"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe1 (no arm64)")))),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"Please read the ",(0,a.kt)("a",{parentName:"p",href:"./CONTRIBUTING.md"},"contributing guide")," to learn about how you can contribute to Subo! We welcome all types of contribution."),(0,a.kt)("p",null,"By the way, Subo is also the name of our mascot, and it's pronounced Sooooobo."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5942370/129103528-8b013445-a8a2-44bb-8b39-65d912a66767.png",alt:"SOS-Space_Panda-Dark-small"})),(0,a.kt)("p",null,"Copyright Suborbital contributors 2021."))}d.isMDXComponent=!0}}]);