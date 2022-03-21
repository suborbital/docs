"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7436],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return l}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=u(n),l=a,f=p["".concat(c,".").concat(l)]||p[l]||d[l]||o;return n?r.createElement(f,s(s({ref:t},g),{},{components:n})):r.createElement(f,s({ref:t},g))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8767:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},c="Using the Grav Instance",u={unversionedId:"grav/usage/getting-started/using-the-grav-instance",id:"grav/usage/getting-started/using-the-grav-instance",title:"Using the Grav Instance",description:"Once you have a Grav instance, you can start connecting Pods and sending messages!",source:"@site/docs/grav/usage/getting-started/using-the-grav-instance.md",sourceDirName:"grav/usage/getting-started",slug:"/grav/usage/getting-started/using-the-grav-instance",permalink:"/docs/arbourd-patch-1/grav/usage/getting-started/using-the-grav-instance",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/getting-started/using-the-grav-instance.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/arbourd-patch-1/grav/usage/getting-started/start-here"},next:{title:"Sending Messages",permalink:"/docs/arbourd-patch-1/grav/usage/getting-started/sending-messages"}},g=[],d={toc:g};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-grav-instance"},"Using the Grav Instance"),(0,o.kt)("p",null,"Once you have a Grav instance, you can start connecting Pods and sending messages!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc useGravInstance() {\n    g := grav.New()\n\n    // create a pod and set a function to be called on each message\n    p := g.Connect()\n    p.On(func(msg grav.Message) error {\n        fmt.Println("message received:", string(msg.Data()))\n\n        return nil\n    })\n\n    // create a second pod and send a message\n    p2 := g.Connect()\n    p2.Send(grav.NewMsg(grav.MsgTypeDefault, []byte("hello, world")))\n\n    // messages are asyncronous, so pause for a second to allow the message to send\n    <-time.After(time.Second)\n}\n\n')),(0,o.kt)("p",null,"Here we can see Pods being created, and the two main Pod methods\nbeing used. ",(0,o.kt)("a",{parentName:"p",href:"/docs/arbourd-patch-1/grav/introduction/concepts/pods"},"Read about Pods"),"\nif you haven't already."),(0,o.kt)("p",null,"Each time ",(0,o.kt)("inlineCode",{parentName:"p"},"On")," is called, the function used to receive messages\ngets ",(0,o.kt)("strong",{parentName:"p"},"replaced"),". Therefore if multiple receiving functions\nare needed, multiple Pods should be created."))}p.isMDXComponent=!0}}]);