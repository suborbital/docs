"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7059],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),c=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(g.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,g=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(g,".").concat(d)]||p[d]||l[d]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9839:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return g},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={},g="Sending Messages",c={unversionedId:"grav/usage/getting-started/sending-messages",id:"grav/usage/getting-started/sending-messages",title:"Sending Messages",description:"Sending a message using a Pod is as simple as calling Send(msg). The only required field is the message type, which is analogous to a topic or subject in other messaging systems. Messages have a few other properties that can be taken advantage of, which will be discussed in a future section.",source:"@site/docs/grav/usage/getting-started/sending-messages.md",sourceDirName:"grav/usage/getting-started",slug:"/grav/usage/getting-started/sending-messages",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/grav/usage/getting-started/sending-messages",editUrl:"https://github.com/suborbital/docs/docs/grav/usage/getting-started/sending-messages.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Using the Grav Instance",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/grav/usage/getting-started/using-the-grav-instance"},next:{title:"Receiving Messages",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/grav/usage/getting-started/receiving-messages"}},u=[],l={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sending-messages"},"Sending Messages"),(0,s.kt)("p",null,"Sending a message using a Pod is as simple as calling ",(0,s.kt)("inlineCode",{parentName:"p"},"Send(msg)"),". The only required field is the message type, which is analogous to a topic or subject in other messaging systems. Messages have a few other properties that can be taken advantage of, which will be discussed in a future section."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "encoding/json"\n\n    "github.com/suborbital/grav/grav"\n)\n\ntype heartbeat struct {\n    Healthy bool `json:"healthy"`\n}\n\nfunc sending() {\n    g := grav.New()\n\n    heart := heartbeat{Healthy: true}\n    msg := grav.NewMsg(grav.MsgTypeDefault, heart.JSON())\n\n    p := g.Connect()\n    p.Send(msg)\n}\n\nfunc (h *heartbeat) JSON() []byte {\n    bytes, _ := json.Marshal(h)\n    return bytes\n}\n\n')))}p.isMDXComponent=!0}}]);