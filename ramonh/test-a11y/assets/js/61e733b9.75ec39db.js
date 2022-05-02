"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7436],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),l=u(n),p=a,m=l["".concat(c,".").concat(p)]||l[p]||d[p]||s;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},8767:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={},c="Using the Grav Instance",u={unversionedId:"grav/usage/getting-started/using-the-grav-instance",id:"grav/usage/getting-started/using-the-grav-instance",title:"Using the Grav Instance",description:"Once you have a Grav instance, you can start connecting Pods and sending messages!",source:"@site/docs/grav/usage/getting-started/using-the-grav-instance.md",sourceDirName:"grav/usage/getting-started",slug:"/grav/usage/getting-started/using-the-grav-instance",permalink:"/docs/ramonh/test-a11y/grav/usage/getting-started/using-the-grav-instance",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/grav/usage/getting-started/using-the-grav-instance.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/ramonh/test-a11y/grav/usage/getting-started/start-here"},next:{title:"Sending Messages",permalink:"/docs/ramonh/test-a11y/grav/usage/getting-started/sending-messages"}},g={},d=[],l={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"using-the-grav-instance"},"Using the Grav Instance"),(0,s.kt)("p",null,"Once you have a Grav instance, you can start connecting Pods and sending messages!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n\n    "github.com/suborbital/grav/grav"\n)\n\nfunc useGravInstance() {\n    g := grav.New()\n\n    // create a pod and set a function to be called on each message\n    p := g.Connect()\n    p.On(func(msg grav.Message) error {\n        fmt.Println("message received:", string(msg.Data()))\n\n        return nil\n    })\n\n    // create a second pod and send a message\n    p2 := g.Connect()\n    p2.Send(grav.NewMsg(grav.MsgTypeDefault, []byte("hello, world")))\n\n    // messages are asyncronous, so pause for a second to allow the message to send\n    <-time.After(time.Second)\n}\n\n')),(0,s.kt)("p",null,"Here we can see Pods being created, and the two main Pod methods\nbeing used. ",(0,s.kt)("a",{parentName:"p",href:"/docs/ramonh/test-a11y/grav/introduction/concepts/pods"},"Read about Pods"),"\nif you haven't already."),(0,s.kt)("p",null,"Each time ",(0,s.kt)("inlineCode",{parentName:"p"},"On")," is called, the function used to receive messages\ngets ",(0,s.kt)("strong",{parentName:"p"},"replaced"),". Therefore if multiple receiving functions\nare needed, multiple Pods should be created."))}p.isMDXComponent=!0}}]);