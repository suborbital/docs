"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2791],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,m=g["".concat(u,".").concat(d)]||g[d]||p[d]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7426:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={},u="Request / Reply",c={unversionedId:"grav/usage/getting-started/request-reply",id:"grav/usage/getting-started/request-reply",title:"Request / Reply",description:"Beyond just sending messages, Grav can be used to make requests and get replies. This can be useful for service-to-service communication, RPC-style message, and more.",source:"@site/docs/grav/usage/getting-started/request-reply.md",sourceDirName:"grav/usage/getting-started",slug:"/grav/usage/getting-started/request-reply",permalink:"/docs/laura/22-list-supported-languages-for-runnables/grav/usage/getting-started/request-reply",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/getting-started/request-reply.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Receiving Messages",permalink:"/docs/laura/22-list-supported-languages-for-runnables/grav/usage/getting-started/receiving-messages"},next:{title:"Grav Instance Options",permalink:"/docs/laura/22-list-supported-languages-for-runnables/grav/usage/getting-started/grav-instance-options"}},l=[],p={toc:l};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"request--reply"},"Request / Reply"),(0,s.kt)("p",null,"Beyond just sending messages, Grav can be used to make requests and get replies. This can be useful for service-to-service communication, RPC-style message, and more."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc requestReply() {\n    g := grav.New()\n\n    // connect a pod and set it to reply to any message that it receives\n    p1 := g.Connect()\n    p1.On(func(msg grav.Message) error {\n        data := string(msg.Data())\n\n        reply := grav.NewMsg(grav.MsgTypeDefault, []byte(fmt.Sprintf("hey %s", data)))\n        p1.ReplyTo(msg, reply)\n\n        return nil\n    })\n\n    p2 := g.Connect()\n    msg := grav.NewMsg(grav.MsgTypeDefault, []byte("joey"))\n\n    // send a message and wait for a response\n    p2.Send(msg).WaitOn(func(msg grav.Message) error {\n        fmt.Println("got a reply:", string(msg.Data()))\n\n        return nil\n    })\n}\n\n')),(0,s.kt)("p",null,"This is an example of ",(0,s.kt)("a",{parentName:"p",href:"../../introduction/concepts/reciepts.md"},"Receipts")," in action. When a message is sent, the ",(0,s.kt)("inlineCode",{parentName:"p"},"MsgReceipt")," is returned, and then the ",(0,s.kt)("inlineCode",{parentName:"p"},"WaitOn")," method is used to retrieve a reply from the message stream."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"WaitOn")," will block forever until a reply is received. There is an alternate method ",(0,s.kt)("inlineCode",{parentName:"p"},"WaitUntil")," that accepts a timeout. Since a receipt is an extension of the Pod that created it, calling any of its methods will replace the receive function for the Pod. "),(0,s.kt)("p",null,"Receipts also have an async method, ",(0,s.kt)("inlineCode",{parentName:"p"},"OnReply"),". This will run the provided function in the background when a reply is received, and will set the Pod's receive function to ",(0,s.kt)("inlineCode",{parentName:"p"},"nil")," afterwards."))}g.isMDXComponent=!0}}]);