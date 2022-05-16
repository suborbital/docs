"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2791],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=u(n),d=a,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||s;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7426:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={},c="Request / Reply",u={unversionedId:"grav/usage/getting-started/request-reply",id:"grav/usage/getting-started/request-reply",title:"Request / Reply",description:"Beyond just sending messages, Grav can be used to make requests and get replies. This can be useful for service-to-service communication, RPC-style message, and more.",source:"@site/docs/grav/usage/getting-started/request-reply.md",sourceDirName:"grav/usage/getting-started",slug:"/grav/usage/getting-started/request-reply",permalink:"/docs/oscar/vektor-websockets/grav/usage/getting-started/request-reply",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/getting-started/request-reply.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Receiving Messages",permalink:"/docs/oscar/vektor-websockets/grav/usage/getting-started/receiving-messages"},next:{title:"Grav Instance Options",permalink:"/docs/oscar/vektor-websockets/grav/usage/getting-started/grav-instance-options"}},l={},p=[],g={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"request--reply"},"Request / Reply"),(0,s.kt)("p",null,"Beyond just sending messages, Grav can be used to make requests and get replies. This can be useful for service-to-service communication, RPC-style message, and more."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc requestReply() {\n    g := grav.New()\n\n    // connect a pod and set it to reply to any message that it receives\n    p1 := g.Connect()\n    p1.On(func(msg grav.Message) error {\n        data := string(msg.Data())\n\n        reply := grav.NewMsg(grav.MsgTypeDefault, []byte(fmt.Sprintf("hey %s", data)))\n        p1.ReplyTo(msg, reply)\n\n        return nil\n    })\n\n    p2 := g.Connect()\n    msg := grav.NewMsg(grav.MsgTypeDefault, []byte("joey"))\n\n    // send a message and wait for a response\n    p2.Send(msg).WaitOn(func(msg grav.Message) error {\n        fmt.Println("got a reply:", string(msg.Data()))\n\n        return nil\n    })\n}\n\n')),(0,s.kt)("p",null,"This is an example of ",(0,s.kt)("a",{parentName:"p",href:"../../introduction/concepts/reciepts.md"},"Receipts")," in action. When a message is sent, the ",(0,s.kt)("inlineCode",{parentName:"p"},"MsgReceipt")," is returned, and then the ",(0,s.kt)("inlineCode",{parentName:"p"},"WaitOn")," method is used to retrieve a reply from the message stream."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"WaitOn")," will block forever until a reply is received. There is an alternate method ",(0,s.kt)("inlineCode",{parentName:"p"},"WaitUntil")," that accepts a timeout. Since a receipt is an extension of the Pod that created it, calling any of its methods will replace the receive function for the Pod. "),(0,s.kt)("p",null,"Receipts also have an async method, ",(0,s.kt)("inlineCode",{parentName:"p"},"OnReply"),". This will run the provided function in the background when a reply is received, and will set the Pod's receive function to ",(0,s.kt)("inlineCode",{parentName:"p"},"nil")," afterwards."))}d.isMDXComponent=!0}}]);