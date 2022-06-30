"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[21],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3388:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],u={},s="Custom function templates",l={unversionedId:"compute/customizing-functions/custom-function-templates",id:"compute/customizing-functions/custom-function-templates",title:"Custom function templates",description:"When your users interact with Compute, you want them to have an experience that is tailored to your product. To ensure they get the most out of Compute, you can create custom function templates to control what your users see when they create a new function. You can also create custom libraries with utilities specific to your application for users to import from, which we'll explore in the next section.",source:"@site/docs/compute/customizing-functions/custom-function-templates.md",sourceDirName:"compute/customizing-functions",slug:"/compute/customizing-functions/custom-function-templates",permalink:"/docs/jagger/webhooks-docs/compute/customizing-functions/custom-function-templates",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/customizing-functions/custom-function-templates.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Function editor",permalink:"/docs/jagger/webhooks-docs/compute/integrate-the-function-editor/code-editor"},next:{title:"Custom libraries",permalink:"/docs/jagger/webhooks-docs/compute/customizing-functions/custom-libraries"}},c={},p=[{value:"Setup",id:"setup",level:2},{value:"AssemblyScript",id:"assemblyscript",level:3},{value:"Rust",id:"rust",level:3},{value:"Configuring Compute",id:"configuring-compute",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-function-templates"},"Custom function templates"),(0,i.kt)("p",null,"When your users interact with Compute, you want them to have an experience that is tailored to your product. To ensure they get the most out of Compute, you can create custom function templates to control what your users see when they create a new function. You can also create custom libraries with utilities specific to your application for users to import from, which we'll explore in the next section."),(0,i.kt)("p",null,"We want to help! Creating custom templates and libraries are an important aspect of Compute, so ",(0,i.kt)("a",{parentName:"p",href:"mailto:team@suborbital.dev"},"send us an email")," and we'll help you make the most out of these abilities."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To create a custom function template, create a fork of the ",(0,i.kt)("inlineCode",{parentName:"p"},"runnable-templates")," git repository:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suborbital/runnable-templates"},"GitHub - suborbital/runnable-templates: Custom templates for Atmo, Reactr, and Compute")),(0,i.kt)("p",null,"Once the repo has been forked into your company or personal account, you can begin editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," directory to fit your needs."),(0,i.kt)("p",null,"For now, you are limited to one template per language, but in the future you will be able to create a set of templates for your users to choose from."),(0,i.kt)("h3",{id:"assemblyscript"},"AssemblyScript"),(0,i.kt)("p",null,"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"templates/assemblyscript/src/lib.ts")," to change what your users will see when they create a new AssemblyScript function. If you'd like to transform the data that the user's ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," function will receive before it is called, edit both ",(0,i.kt)("inlineCode",{parentName:"p"},"templates/assemblyscript/src/custom.ts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"templates/assemblyscript/src/lib.ts")," and ensure that the type signatures match."),(0,i.kt)("h3",{id:"rust"},"Rust"),(0,i.kt)("p",null,"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"templates/rust/src/lib.rs.tmpl")," to change what your users will see when they create a new Rust function. In the future, you'll be able to transform the data passed to the user's ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," function."),(0,i.kt)("h2",{id:"configuring-compute"},"Configuring Compute"),(0,i.kt)("p",null,"To use the custom templates in your Compute installation, the ",(0,i.kt)("inlineCode",{parentName:"p"},"SCC_TEMPLATES_REPO")," environment variable must be set on the builder service."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a local deployment, edit ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," to add ",(0,i.kt)("inlineCode",{parentName:"li"},"SCC_TEMPLATES_REPO:")," to the builder with the value set to your fork ","(","e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"acmeco/runnable-templates"),")"),(0,i.kt)("li",{parentName:"ul"},"For a cloud deployment, edit ",(0,i.kt)("inlineCode",{parentName:"li"},"suborbital/scc-controlplane.yaml"),", and add the following to the ",(0,i.kt)("inlineCode",{parentName:"li"},"builder")," container's ",(0,i.kt)("inlineCode",{parentName:"li"},"environment"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: SCC_TEMPLATES_REPO\n  value: "{your fork}"\n')),(0,i.kt)("p",null,"Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f .suborbital/")," to apply the change."))}f.isMDXComponent=!0}}]);