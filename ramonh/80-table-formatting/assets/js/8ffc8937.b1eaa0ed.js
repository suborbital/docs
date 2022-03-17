"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2987],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},158:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},c="Reciepts",l={unversionedId:"grav/introduction/concepts/receipts",id:"grav/introduction/concepts/receipts",title:"Reciepts",description:"When you send a message using a Pod, it will return a MsgReceipt. This object is a reference to the message that you sent, and allows you to easily get replies to the message. A receipt is an extension of the Pod that sent the original message, so any methods that you call are essentially called on the Pod itself. This means that calling receipt.WaitOn(msgFunc) is a shortcut for calling WaitOn on the Pod itself \\(with filtering enabled to only receive replies to the original message\\).",source:"@site/docs/grav/introduction/concepts/receipts.md",sourceDirName:"grav/introduction/concepts",slug:"/grav/introduction/concepts/receipts",permalink:"/docs/ramonh/80-table-formatting/grav/introduction/concepts/receipts",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/introduction/concepts/receipts.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Pods",permalink:"/docs/ramonh/80-table-formatting/grav/introduction/concepts/pods"},next:{title:"Getting Started",permalink:"/docs/ramonh/80-table-formatting/grav/usage/getting-started/start-here"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reciepts"},"Reciepts"),(0,i.kt)("p",null,"When you send a message using a Pod, it will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgReceipt"),". This object is a reference to the message that you sent, and allows you to easily get replies to the message. A receipt is an extension of the Pod that sent the original message, so any methods that you call are essentially called on the Pod itself. This means that calling ",(0,i.kt)("inlineCode",{parentName:"p"},"receipt.WaitOn(msgFunc)")," is a shortcut for calling ",(0,i.kt)("inlineCode",{parentName:"p"},"WaitOn")," on the Pod itself ","(","with filtering enabled to only receive replies to the original message",")","."),(0,i.kt)("p",null,"Receipts are the basis for request/reply with Grav. They will be discussed in detail in the ",(0,i.kt)("a",{parentName:"p",href:"../../usage/getting-started/"},"Usage")," section."))}d.isMDXComponent=!0}}]);