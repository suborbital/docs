"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8032],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(u,".").concat(b)]||p[b]||d[b]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},u="Building Sat",s={unversionedId:"sat/building-sat",id:"sat/building-sat",title:"Building Sat",description:"Build the Sat Docker image",source:"@site/docs/sat/building-sat.md",sourceDirName:"sat",slug:"/sat/building-sat",permalink:"/docs/laura/add-wasm-ed-links/sat/building-sat",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/sat/building-sat.md",tags:[],version:"current",lastUpdatedAt:1645993708,formattedLastUpdatedAt:"2/27/2022",frontMatter:{},sidebar:"docs",previous:{title:"Using Sat",permalink:"/docs/laura/add-wasm-ed-links/sat/using-sat"},next:{title:"Constellations",permalink:"/docs/laura/add-wasm-ed-links/sat/constellations"}},c={},d=[{value:"Build the Sat Docker image",id:"build-the-sat-docker-image",level:2},{value:"Build the Sat binary",id:"build-the-sat-binary",level:2}],p={toc:d};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-sat"},"Building Sat"),(0,i.kt)("h2",{id:"build-the-sat-docker-image"},"Build the Sat Docker image"),(0,i.kt)("p",null,"If you'd like to build Sat yourself, clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suborbital/sat"},"the Sat repo")," and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# On M1 Macs, you may need to run `export DOCKER_BUILDKIT=0`\nmake docker run\n")),(0,i.kt)("p",null,"This will build the ",(0,i.kt)("inlineCode",{parentName:"p"},"suborbital/sat:dev")," Docker image and then launch it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello-echo")," example module."),(0,i.kt)("h2",{id:"build-the-sat-binary"},"Build the Sat binary"),(0,i.kt)("p",null,"To build Sat as a binary, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make sat\n")),(0,i.kt)("p",null,"The binary will be put in ",(0,i.kt)("inlineCode",{parentName:"p"},".bin"),"."),(0,i.kt)("p",null,"To build a statically compiled Sat binary, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make sat/static\n")),(0,i.kt)("p",null,"Static linking is not available on Mac."))}b.isMDXComponent=!0}}]);