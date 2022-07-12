"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7692],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,f=p["".concat(i,".").concat(d)]||p[d]||l[d]||o;return t?r.createElement(f,s(s({ref:n},g),{},{components:t})):r.createElement(f,s({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3829:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],c={},i="Using the Grav Instance",u={unversionedId:"grav/usage/using-the-grav-instance",id:"grav/usage/using-the-grav-instance",title:"Using the Grav Instance",description:"Once you have a Grav instance, you can start connecting Pods and sending messages!",source:"@site/docs/grav/usage/using-the-grav-instance.md",sourceDirName:"grav/usage",slug:"/grav/usage/using-the-grav-instance",permalink:"/docs/laura/145-document-dependency-on-wasmedge-gov09/grav/usage/using-the-grav-instance",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/using-the-grav-instance.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"6/30/2022",frontMatter:{}},g={},l=[],p={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-grav-instance"},"Using the Grav Instance"),(0,o.kt)("p",null,"Once you have a Grav instance, you can start connecting Pods and sending messages!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc useGravInstance() {\n    g := grav.New()\n\n    // create a pod and set a function to be called on each message\n    p := g.Connect()\n    p.On(func(msg grav.Message) error {\n        fmt.Println("message received:", string(msg.Data()))\n\n        return nil\n    })\n\n    // create a second pod and send a message\n    p2 := g.Connect()\n    p2.Send(grav.NewMsg(grav.MsgTypeDefault, []byte("hello, world")))\n\n    // messages are asyncronous, so pause for a second to allow the message to send\n    <-time.After(time.Second)\n}\n\n')),(0,o.kt)("p",null,"Here we can see Pods being created, and the two main Pod methods\nbeing used. ",(0,o.kt)("a",{parentName:"p",href:"../../introduction/concepts/pods.md"},"Read about Pods"),"\nif you haven't already."),(0,o.kt)("p",null,"Each time ",(0,o.kt)("inlineCode",{parentName:"p"},"On")," is called, the function used to receive messages\ngets ",(0,o.kt)("strong",{parentName:"p"},"replaced"),". Therefore if multiple receiving functions\nare needed, multiple Pods should be created."))}d.isMDXComponent=!0}}]);