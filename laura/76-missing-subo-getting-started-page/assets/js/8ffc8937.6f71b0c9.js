"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2987],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},158:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},c="Reciepts",l={unversionedId:"grav/introduction/concepts/receipts",id:"grav/introduction/concepts/receipts",title:"Reciepts",description:"When you send a message using a Pod, it will return a MsgReceipt. This object is a reference to the message that you sent, and allows you to easily get replies to the message. A receipt is an extension of the Pod that sent the original message, so any methods that you call are essentially called on the Pod itself. This means that calling receipt.WaitOn(msgFunc) is a shortcut for calling WaitOn on the Pod itself \\(with filtering enabled to only receive replies to the original message\\).",source:"@site/docs/grav/introduction/concepts/receipts.md",sourceDirName:"grav/introduction/concepts",slug:"/grav/introduction/concepts/receipts",permalink:"/docs/laura/76-missing-subo-getting-started-page/grav/introduction/concepts/receipts",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/introduction/concepts/receipts.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Pods",permalink:"/docs/laura/76-missing-subo-getting-started-page/grav/introduction/concepts/pods"},next:{title:"Getting Started",permalink:"/docs/laura/76-missing-subo-getting-started-page/grav/usage/getting-started/start-here"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reciepts"},"Reciepts"),(0,o.kt)("p",null,"When you send a message using a Pod, it will return a ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgReceipt"),". This object is a reference to the message that you sent, and allows you to easily get replies to the message. A receipt is an extension of the Pod that sent the original message, so any methods that you call are essentially called on the Pod itself. This means that calling ",(0,o.kt)("inlineCode",{parentName:"p"},"receipt.WaitOn(msgFunc)")," is a shortcut for calling ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitOn")," on the Pod itself ","(","with filtering enabled to only receive replies to the original message",")","."),(0,o.kt)("p",null,"Receipts are the basis for request/reply with Grav. They will be discussed in detail in the ",(0,o.kt)("a",{parentName:"p",href:"../../usage/getting-started/"},"Usage")," section."))}d.isMDXComponent=!0}}]);