"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8032],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,m=d["".concat(u,".").concat(b)]||d[b]||p[b]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u="Building Sat",c={unversionedId:"sat/building-sat",id:"sat/building-sat",title:"Building Sat",description:"Build the Sat Docker image",source:"@site/docs/sat/building-sat.md",sourceDirName:"sat",slug:"/sat/building-sat",permalink:"/docs/arbourd-patch-1/sat/building-sat",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/sat/building-sat.md",tags:[],version:"current",lastUpdatedAt:1645993708,formattedLastUpdatedAt:"2/27/2022",frontMatter:{},sidebar:"docs",previous:{title:"Using Sat",permalink:"/docs/arbourd-patch-1/sat/using-sat"},next:{title:"Constellations",permalink:"/docs/arbourd-patch-1/sat/constellations"}},s={},p=[{value:"Build the Sat Docker image",id:"build-the-sat-docker-image",level:2},{value:"Build the Sat binary",id:"build-the-sat-binary",level:2}],d={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-sat"},"Building Sat"),(0,i.kt)("h2",{id:"build-the-sat-docker-image"},"Build the Sat Docker image"),(0,i.kt)("p",null,"If you'd like to build Sat yourself, clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suborbital/sat"},"the Sat repo")," and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# On M1 Macs, you may need to run `export DOCKER_BUILDKIT=0`\nmake docker run\n")),(0,i.kt)("p",null,"This will build the ",(0,i.kt)("inlineCode",{parentName:"p"},"suborbital/sat:dev")," Docker image and then launch it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello-echo")," example module."),(0,i.kt)("h2",{id:"build-the-sat-binary"},"Build the Sat binary"),(0,i.kt)("p",null,"To build Sat as a binary, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make sat\n")),(0,i.kt)("p",null,"The binary will be put in ",(0,i.kt)("inlineCode",{parentName:"p"},".bin"),"."),(0,i.kt)("p",null,"To build a statically compiled Sat binary, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make sat/static\n")),(0,i.kt)("p",null,"Static linking is not available on Mac."))}b.isMDXComponent=!0}}]);