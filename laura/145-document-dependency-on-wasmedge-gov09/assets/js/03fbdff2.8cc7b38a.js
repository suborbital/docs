"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[5659],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(c,".").concat(d)]||p[d]||l[d]||s;return t?r.createElement(f,o(o({ref:n},g),{},{components:t})):r.createElement(f,o({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7632:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),o=["components"],i={},c="Sending Messages",u={unversionedId:"grav/usage/sending-messages",id:"grav/usage/sending-messages",title:"Sending Messages",description:"Sending a message using a Pod is as simple as calling Send(msg). The only required field is the message type, which is analogous to a topic or subject in other messaging systems. Messages have a few other properties that can be taken advantage of, which will be discussed in a future section.",source:"@site/docs/grav/usage/sending-messages.md",sourceDirName:"grav/usage",slug:"/grav/usage/sending-messages",permalink:"/docs/laura/145-document-dependency-on-wasmedge-gov09/grav/usage/sending-messages",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/sending-messages.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"6/30/2022",frontMatter:{}},g={},l=[],p={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"sending-messages"},"Sending Messages"),(0,s.kt)("p",null,"Sending a message using a Pod is as simple as calling ",(0,s.kt)("inlineCode",{parentName:"p"},"Send(msg)"),". The only required field is the message type, which is analogous to a topic or subject in other messaging systems. Messages have a few other properties that can be taken advantage of, which will be discussed in a future section."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "encoding/json"\n\n    "github.com/suborbital/grav/grav"\n)\n\ntype heartbeat struct {\n    Healthy bool `json:"healthy"`\n}\n\nfunc sending() {\n    g := grav.New()\n\n    heart := heartbeat{Healthy: true}\n    msg := grav.NewMsg(grav.MsgTypeDefault, heart.JSON())\n\n    p := g.Connect()\n    p.Send(msg)\n}\n\nfunc (h *heartbeat) JSON() []byte {\n    bytes, _ := json.Marshal(h)\n    return bytes\n}\n\n')))}d.isMDXComponent=!0}}]);