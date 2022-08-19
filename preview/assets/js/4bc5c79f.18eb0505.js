"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7692],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(i,".").concat(d)]||p[d]||g[d]||o;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={},s="Using the Grav Instance",c={unversionedId:"grav/usage/using-the-grav-instance",id:"grav/usage/using-the-grav-instance",title:"Using the Grav Instance",description:"Once you have a Grav instance, you can start connecting Pods and sending messages!",source:"@site/docs/grav/usage/using-the-grav-instance.md",sourceDirName:"grav/usage",slug:"/grav/usage/using-the-grav-instance",permalink:"/docs/preview/grav/usage/using-the-grav-instance",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/using-the-grav-instance.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"Jun 30, 2022",frontMatter:{}},i={},u=[],l={toc:u};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-the-grav-instance"},"Using the Grav Instance"),(0,a.kt)("p",null,"Once you have a Grav instance, you can start connecting Pods and sending messages!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc useGravInstance() {\n    g := grav.New()\n\n    // create a pod and set a function to be called on each message\n    p := g.Connect()\n    p.On(func(msg grav.Message) error {\n        fmt.Println("message received:", string(msg.Data()))\n\n        return nil\n    })\n\n    // create a second pod and send a message\n    p2 := g.Connect()\n    p2.Send(grav.NewMsg(grav.MsgTypeDefault, []byte("hello, world")))\n\n    // messages are asyncronous, so pause for a second to allow the message to send\n    <-time.After(time.Second)\n}\n\n')),(0,a.kt)("p",null,"Here we can see Pods being created, and the two main Pod methods\nbeing used. ",(0,a.kt)("a",{parentName:"p",href:"../../introduction/concepts/pods.md"},"Read about Pods"),"\nif you haven't already."),(0,a.kt)("p",null,"Each time ",(0,a.kt)("inlineCode",{parentName:"p"},"On")," is called, the function used to receive messages\ngets ",(0,a.kt)("strong",{parentName:"p"},"replaced"),". Therefore if multiple receiving functions\nare needed, multiple Pods should be created."))}g.isMDXComponent=!0}}]);