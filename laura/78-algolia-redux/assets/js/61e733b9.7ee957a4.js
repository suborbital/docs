"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7436],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,f=d["".concat(c,".").concat(p)]||d[p]||l[p]||s;return t?r.createElement(f,o(o({ref:n},g),{},{components:t})):r.createElement(f,o({ref:n},g))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8767:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),o=["components"],i={},c="Using the Grav Instance",u={unversionedId:"grav/usage/getting-started/using-the-grav-instance",id:"grav/usage/getting-started/using-the-grav-instance",title:"Using the Grav Instance",description:"Once you have a Grav instance, you can start connecting Pods and sending messages!",source:"@site/docs/grav/usage/getting-started/using-the-grav-instance.md",sourceDirName:"grav/usage/getting-started",slug:"/grav/usage/getting-started/using-the-grav-instance",permalink:"/docs/laura/78-algolia-redux/grav/usage/getting-started/using-the-grav-instance",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/getting-started/using-the-grav-instance.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/laura/78-algolia-redux/grav/usage/getting-started/start-here"},next:{title:"Sending Messages",permalink:"/docs/laura/78-algolia-redux/grav/usage/getting-started/sending-messages"}},g={},l=[],d={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-the-grav-instance"},"Using the Grav Instance"),(0,s.kt)("p",null,"Once you have a Grav instance, you can start connecting Pods and sending messages!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc useGravInstance() {\n    g := grav.New()\n\n    // create a pod and set a function to be called on each message\n    p := g.Connect()\n    p.On(func(msg grav.Message) error {\n        fmt.Println("message received:", string(msg.Data()))\n\n        return nil\n    })\n\n    // create a second pod and send a message\n    p2 := g.Connect()\n    p2.Send(grav.NewMsg(grav.MsgTypeDefault, []byte("hello, world")))\n\n    // messages are asyncronous, so pause for a second to allow the message to send\n    <-time.After(time.Second)\n}\n\n')),(0,s.kt)("p",null,"Here we can see Pods being created, and the two main Pod methods\nbeing used. ",(0,s.kt)("a",{parentName:"p",href:"/docs/laura/78-algolia-redux/grav/introduction/concepts/pods"},"Read about Pods"),"\nif you haven't already."),(0,s.kt)("p",null,"Each time ",(0,s.kt)("inlineCode",{parentName:"p"},"On")," is called, the function used to receive messages\ngets ",(0,s.kt)("strong",{parentName:"p"},"replaced"),". Therefore if multiple receiving functions\nare needed, multiple Pods should be created."))}p.isMDXComponent=!0}}]);