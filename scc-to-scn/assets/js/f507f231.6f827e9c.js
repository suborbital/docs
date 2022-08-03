"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3766],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8794:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},c="Request / Reply",u={unversionedId:"grav/usage/request-reply",id:"grav/usage/request-reply",title:"Request / Reply",description:"Beyond just sending messages, Grav can be used to make requests and get replies. This can be useful for service-to-service communication, RPC-style message, and more.",source:"@site/docs/grav/usage/request-reply.md",sourceDirName:"grav/usage",slug:"/grav/usage/request-reply",permalink:"/docs/scc-to-scn/grav/usage/request-reply",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/request-reply.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"6/30/2022",frontMatter:{}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"request--reply"},"Request / Reply"),(0,o.kt)("p",null,"Beyond just sending messages, Grav can be used to make requests and get replies. This can be useful for service-to-service communication, RPC-style message, and more."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc requestReply() {\n    g := grav.New()\n\n    // connect a pod and set it to reply to any message that it receives\n    p1 := g.Connect()\n    p1.On(func(msg grav.Message) error {\n        data := string(msg.Data())\n\n        reply := grav.NewMsg(grav.MsgTypeDefault, []byte(fmt.Sprintf("hey %s", data)))\n        p1.ReplyTo(msg, reply)\n\n        return nil\n    })\n\n    p2 := g.Connect()\n    msg := grav.NewMsg(grav.MsgTypeDefault, []byte("joey"))\n\n    // send a message and wait for a response\n    p2.Send(msg).WaitOn(func(msg grav.Message) error {\n        fmt.Println("got a reply:", string(msg.Data()))\n\n        return nil\n    })\n}\n\n')),(0,o.kt)("p",null,"This is an example of ",(0,o.kt)("a",{parentName:"p",href:"../../introduction/concepts/receipts.md"},"Receipts")," in action. When a message is sent, the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgReceipt")," is returned, and then the ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitOn")," method is used to retrieve a reply from the message stream."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WaitOn")," will block forever until a reply is received. There is an alternate method ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitUntil")," that accepts a timeout. Since a receipt is an extension of the Pod that created it, calling any of its methods will replace the receive function for the Pod. "),(0,o.kt)("p",null,"Receipts also have an async method, ",(0,o.kt)("inlineCode",{parentName:"p"},"OnReply"),". This will run the provided function in the background when a reply is received, and will set the Pod's receive function to ",(0,o.kt)("inlineCode",{parentName:"p"},"nil")," afterwards."))}m.isMDXComponent=!0}}]);