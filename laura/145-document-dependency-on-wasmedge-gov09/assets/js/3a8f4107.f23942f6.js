"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[97],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(t),f=o,d=g["".concat(c,".").concat(f)]||g[f]||l[f]||a;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3079:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={},c="Grav Instance Options",u={unversionedId:"grav/usage/grav-instance-options",id:"grav/usage/grav-instance-options",title:"Grav Instance Options",description:"When calling grav.New, you can optionally include some options:",source:"@site/docs/grav/usage/grav-instance-options.md",sourceDirName:"grav/usage",slug:"/grav/usage/grav-instance-options",permalink:"/docs/laura/145-document-dependency-on-wasmedge-gov09/grav/usage/grav-instance-options",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/grav-instance-options.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"6/30/2022",frontMatter:{}},p={},l=[],g={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grav-instance-options"},"Grav Instance Options"),(0,a.kt)("p",null,"When calling ",(0,a.kt)("inlineCode",{parentName:"p"},"grav.New"),", you can optionally include some options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// UseLogger allows a custom logger to be used\nfunc UseLogger(logger *vlog.Logger) OptionsModifier\n\n// UseTransport sets the transport plugin to be used.\nfunc UseTransport(transport Transport) OptionsModifier\n\n// UseEndpoint sets the endpoint settings for the instance to broadcast for discovery\n// Pass empty strings for either if you would like to keep the defaults (8080 and /meta/message)\nfunc UseEndpoint(port, uri string) OptionsModifier\n\n// UseDiscovery sets the discovery plugin to be used\nfunc UseDiscovery(discovery Discovery) OptionsModifier\n")),(0,a.kt)("p",null,"If no options are passed, then the default options are used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'Logger:    vlog.Default(),\nPort:      "8080",\nURI:       "/meta/message",\nTransport: nil,\nDiscovery: nil,\n')))}f.isMDXComponent=!0}}]);