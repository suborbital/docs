"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2092],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,m=u["".concat(c,".").concat(p)]||u[p]||l[p]||s;return t?r.createElement(m,i(i({ref:n},g),{},{components:t})):r.createElement(m,i({ref:n},g))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6782:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return l}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),i=["components"],o={},c="Receiving Messages",d={unversionedId:"grav/usage/getting-started/receiving-messages",id:"grav/usage/getting-started/receiving-messages",title:"Receiving Messages",description:'Pods have several different methods beyond On to help with receiving messages in different scenarios. There are two types of receive methods: asynchronous and synchronous. Synchronous receive methods block until the desired message is received, whereas asynchronous receive methods run "in the background" and do not block at the callsite.',source:"@site/docs/grav/usage/getting-started/receiving-messages.md",sourceDirName:"grav/usage/getting-started",slug:"/grav/usage/getting-started/receiving-messages",permalink:"/docs/laura/87-CI-checks-for-docs-a11y/grav/usage/getting-started/receiving-messages",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/getting-started/receiving-messages.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"Sending Messages",permalink:"/docs/laura/87-CI-checks-for-docs-a11y/grav/usage/getting-started/sending-messages"},next:{title:"Request / Reply",permalink:"/docs/laura/87-CI-checks-for-docs-a11y/grav/usage/getting-started/request-reply"}},g={},l=[],u={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"receiving-messages"},"Receiving Messages"),(0,s.kt)("p",null,"Pods have several different methods beyond ",(0,s.kt)("inlineCode",{parentName:"p"},"On"),' to help with receiving messages in different scenarios. There are two types of receive methods: asynchronous and synchronous. Synchronous receive methods block until the desired message is received, whereas asynchronous receive methods run "in the background" and do not block at the callsite.'),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"On")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"OnType")," are async, and they are shown here:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc receiveMessagesAsync() {\n    g := grav.New()\n\n    // create a pod and set a function to be called on each message\n    // if the msgFunc returns an error, it indicates to the Gav instance that\n    // the message could not be handled.\n    p := g.Connect()\n    p.On(func(msg grav.Message) error {\n        fmt.Println("message received:", string(msg.Data()))\n\n        return nil\n    })\n\n    // create a second pod and set it to receive only messages of a specific type\n    // errors indicate that a message could not be handled.\n    p2 := g.Connect()\n    p2.OnType("grav.specialmessage", func(msg grav.Message) error {\n        fmt.Println("special message received:", string(msg.Data()))\n\n        return nil\n    })\n}\n\n')),(0,s.kt)("p",null,"The sync receive methods ",(0,s.kt)("inlineCode",{parentName:"p"},"WaitOn")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"WaitUntil")," are shown here:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc receiveMessagesSync() {\n    g := grav.New()\n\n    go sendMessages(g.Connect())\n\n    // create a pod and set it to wait for a specific message.\n    // WaitOn will block forever if the message is never received.\n    p3 := g.Connect()\n    p3.WaitOn(func(msg grav.Message) error {\n        if msg.Type() != "grav.desiredmessage" {\n            return grav.ErrMsgNotWanted\n        }\n\n        fmt.Println("desired message received:", string(msg.Data()))\n\n        return nil\n    })\n\n    // create a pod that waits up to 3 seconds for a specific message\n    // ErrWaitTimeout is returned if the timeout elapses\n    p4 := g.Connect()\n    err := p4.WaitUntil(grav.Timeout(3), func(msg grav.Message) error {\n        if msg.Type() != "grav.importantmessage" {\n            return grav.ErrMsgNotWanted\n        }\n\n        fmt.Println("important message received:", string(msg.Data()))\n\n        return nil\n    })\n\n    // timeout will occur because message is never received\n    fmt.Println(err)\n}\n\nfunc sendMessages(p *grav.Pod) {\n    <-time.After(time.Millisecond * 500)\n    p.Send(grav.NewMsg("grav.desiredmessage", []byte("desired!")))\n}\n\n')),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The sync receive methods set the Pod's receive function to ",(0,s.kt)("inlineCode",{parentName:"p"},"nil")," after returning, so the Pod stops accepting new messages. The async methods however will cause the Pod to continue receiving until the Pod is disconnected or the receive function is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"nil"),". This can be done with ",(0,s.kt)("inlineCode",{parentName:"p"},"pod.On(nil)")))),(0,s.kt)("p",null,"For sync receive methods, the ",(0,s.kt)("inlineCode",{parentName:"p"},"grav.ErrMsgNotWanted")," error is used to indicate that the desired message has not yet been received. Returning ",(0,s.kt)("inlineCode",{parentName:"p"},"nil")," or another error will let the Pod know that the operation has completed, and the return value will be propagated to the caller if desired."))}p.isMDXComponent=!0}}]);