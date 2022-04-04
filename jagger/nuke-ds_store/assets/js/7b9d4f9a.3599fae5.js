"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[6542],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),o=n(2389),i=n(9548),l=n(6010),u="tabItem_LplD";function s(e){var t,n,o,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,b=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(y,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),k=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(v),C=w[0],O=w[1],T=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=k[d];null!=x&&x!==C&&y.some((function(e){return e.value===x}))&&O(x)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),r=y[n].value;r!==C&&(E(t),O(r),null!=d&&N(d,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},4590:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),u=["components"],s={},c="Custom libraries",p={unversionedId:"compute/customizing-functions/custom-libraries",id:"compute/customizing-functions/custom-libraries",title:"Custom libraries",description:"To continue to tailor your users' experience to your product, you can create a custom library with functions and utilities designed specifically for your product. For example, your users will import library functions from @acmeco/acmeco instead of @suborbital/suborbital, and you'll be able to export library functions such as acmeco.getUsers versus the plain suborbital.httpGet.",source:"@site/docs/compute/customizing-functions/custom-libraries.md",sourceDirName:"compute/customizing-functions",slug:"/compute/customizing-functions/custom-libraries",permalink:"/docs/jagger/nuke-ds_store/compute/customizing-functions/custom-libraries",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/customizing-functions/custom-libraries.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"Custom function templates",permalink:"/docs/jagger/nuke-ds_store/compute/customizing-functions/custom-function-templates"},next:{title:"Configure capabilities",permalink:"/docs/jagger/nuke-ds_store/compute/cloud-deployment/configure-capabilities"}},m=[{value:"Setup",id:"setup",children:[],level:2},{value:"Configuring Compute",id:"configuring-compute",children:[],level:2}],d={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-libraries"},"Custom libraries"),(0,o.kt)("p",null,"To continue to tailor your users' experience to your product, you can create a custom library with functions and utilities designed specifically for your product. For example, your users will import library functions from ",(0,o.kt)("inlineCode",{parentName:"p"},"@acmeco/acmeco")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"@suborbital/suborbital"),", and you'll be able to export library functions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeco.getUsers")," versus the plain ",(0,o.kt)("inlineCode",{parentName:"p"},"suborbital.httpGet"),"."),(0,o.kt)("p",null,"We want to help! Creating custom templates and libraries are an important aspect of Compute, so ",(0,o.kt)("a",{parentName:"p",href:"mailto:team@suborbital.dev"},"send us an email")," and we'll help you make the most out of these abilities."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"We provide a base library for you to modify and publish to the language-specific package manager, which can then be included as a project dependency in a custom function template."),(0,o.kt)("p",null,"If you haven't already, create a fork of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/runnable-templates"},(0,o.kt)("inlineCode",{parentName:"a"},"runnable-templates"))," git repository. Once the repo has been forked into your company or personal account, you can begin editing the libraries in the ",(0,o.kt)("inlineCode",{parentName:"p"},"library")," directory."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Custom libraries are currently only officially supported for AssemblyScript, with more coming soon."))),(0,o.kt)(i.Z,{groupId:"language-selection",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"assemblyscript",label:"AssemblyScript",mdxType:"TabItem"},(0,o.kt)("p",null,"The AssemblyScript library is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"library/assemblyscript"),". As your custom library will need to be published, you will need to give it a custom name. In ",(0,o.kt)("inlineCode",{parentName:"p"},"library/assemblyscript/package.json"),", replace all instances of ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeco")," with your desired name. Add your custom library as a dependency in ",(0,o.kt)("inlineCode",{parentName:"p"},"templates/assemblyscript/package.json.tmpl")," so your users' functions can use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"dependencies": {\n  "@assemblyscript/loader": "^0.19",\n  "@acmeco/acmeco": "^0.1.0" // your library here\n}\n')),(0,o.kt)("p",null,"You can modify ",(0,o.kt)("inlineCode",{parentName:"p"},"library/assemblyscript/assembly/index.ts")," to expose new utility functions and/or remove existing ones. To learn more about the available APIs, check out ",(0,o.kt)("a",{parentName:"p",href:"https://atmo.suborbital.dev/runnable-api/introduction"},"Atmo's Runnable API docs"),"."),(0,o.kt)("p",null,"Once this is done, publish your library to npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd library/assemblyscript\nnpm publish --access public\n")))),(0,o.kt)("h2",{id:"configuring-compute"},"Configuring Compute"),(0,o.kt)("p",null,"Since your custom library is listed as a dependency of the template project, it will be installed when your users' functions are built for the first time."),(0,o.kt)("p",null,"In your Compute installation, you will need to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"SCC_TEMPLATES_REPO")," environment variable."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For a local deployment, edit ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," to add ",(0,o.kt)("inlineCode",{parentName:"li"},"SCC_TEMPLATES_REPO:")," to the builder with the value set to your fork ","(","e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"acmeco/runnable-templates"),")"),(0,o.kt)("li",{parentName:"ul"},"For a cloud deployment, edit ",(0,o.kt)("inlineCode",{parentName:"li"},"suborbital/scc-controlplane.yaml"),", and add the following to the ",(0,o.kt)("inlineCode",{parentName:"li"},"builder")," container's ",(0,o.kt)("inlineCode",{parentName:"li"},"environment"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: SCC_TEMPLATES_REPO\n  value: "{your fork}"\n')))),(0,o.kt)("p",null,"Apply the change by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f .suborbital/\n")))}b.isMDXComponent=!0}}]);