"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2686],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=o,f=g["".concat(c,".").concat(d)]||g[d]||l[d]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8424:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={},c="Grav Instance Options",p={unversionedId:"grav/usage/getting-started/grav-instance-options",id:"grav/usage/getting-started/grav-instance-options",title:"Grav Instance Options",description:"When calling grav.New, you can optionally include some options:",source:"@site/docs/grav/usage/getting-started/grav-instance-options.md",sourceDirName:"grav/usage/getting-started",slug:"/grav/usage/getting-started/grav-instance-options",permalink:"/docs/flaki/29-code-examples/grav/usage/getting-started/grav-instance-options",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/getting-started/grav-instance-options.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Request / Reply",permalink:"/docs/flaki/29-code-examples/grav/usage/getting-started/request-reply"},next:{title:"Transports",permalink:"/docs/flaki/29-code-examples/grav/networking/transports/getting-started-transports"}},u=[],l={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grav-instance-options"},"Grav Instance Options"),(0,a.kt)("p",null,"When calling ",(0,a.kt)("inlineCode",{parentName:"p"},"grav.New"),", you can optionally include some options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// UseLogger allows a custom logger to be used\nfunc UseLogger(logger *vlog.Logger) OptionsModifier\n\n// UseTransport sets the transport plugin to be used.\nfunc UseTransport(transport Transport) OptionsModifier\n\n// UseEndpoint sets the endpoint settings for the instance to broadcast for discovery\n// Pass empty strings for either if you would like to keep the defaults (8080 and /meta/message)\nfunc UseEndpoint(port, uri string) OptionsModifier\n\n// UseDiscovery sets the discovery plugin to be used\nfunc UseDiscovery(discovery Discovery) OptionsModifier\n")),(0,a.kt)("p",null,"If no options are passed, then the default options are used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'Logger:    vlog.Default(),\nPort:      "8080",\nURI:       "/meta/message",\nTransport: nil,\nDiscovery: nil,\n')))}g.isMDXComponent=!0}}]);