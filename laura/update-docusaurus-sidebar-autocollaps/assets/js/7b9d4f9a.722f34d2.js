"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[6542],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2389),i=n(7392),l=n(7094),u=n(2466),s=n(6010),c="tabList_uSqn",p="tabItem_LplD";function m(e){var t,n,o,m=e.lazy,d=e.block,b=e.defaultValue,f=e.values,y=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===b?b:null!=(t=null!=b?b:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),C=w.tabGroupChoices,O=w.setTabGroupChoices,T=(0,a.useState)(N),E=T[0],x=T[1],j=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var S=C[y];null!=S&&S!==E&&g.some((function(e){return e.value===S}))&&x(S)}var A=function(e){var t=e.currentTarget,n=j.indexOf(t),r=g[n].value;r!==E&&(P(t),x(r),null!=y&&O(y,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;n=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:A,onClick:A},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),m?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},4590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(2360),u=["components"],s={},c="Custom libraries",p={unversionedId:"compute/customizing-functions/custom-libraries",id:"compute/customizing-functions/custom-libraries",title:"Custom libraries",description:"To continue to tailor your users' experience to your product, you can create a custom library with functions and utilities designed specifically for your product. For example, your users will import library functions from @acmeco/acmeco instead of @suborbital/suborbital, and you'll be able to export library functions such as acmeco.getUsers versus the plain suborbital.httpGet.",source:"@site/docs/compute/customizing-functions/custom-libraries.md",sourceDirName:"compute/customizing-functions",slug:"/compute/customizing-functions/custom-libraries",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/compute/customizing-functions/custom-libraries",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/customizing-functions/custom-libraries.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"Custom function templates",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/compute/customizing-functions/custom-function-templates"},next:{title:"Configure capabilities",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/compute/cloud-deployment/configure-capabilities"}},m={},d=[{value:"Setup",id:"setup",level:2},{value:"Configuring Compute",id:"configuring-compute",level:2}],b={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-libraries"},"Custom libraries"),(0,o.kt)("p",null,"To continue to tailor your users' experience to your product, you can create a custom library with functions and utilities designed specifically for your product. For example, your users will import library functions from ",(0,o.kt)("inlineCode",{parentName:"p"},"@acmeco/acmeco")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"@suborbital/suborbital"),", and you'll be able to export library functions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeco.getUsers")," versus the plain ",(0,o.kt)("inlineCode",{parentName:"p"},"suborbital.httpGet"),"."),(0,o.kt)("p",null,"We want to help! Creating custom templates and libraries are an important aspect of Compute, so ",(0,o.kt)("a",{parentName:"p",href:"mailto:team@suborbital.dev"},"send us an email")," and we'll help you make the most out of these abilities."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"We provide a base library for you to modify and publish to the language-specific package manager, which can then be included as a project dependency in a custom function template."),(0,o.kt)("p",null,"If you haven't already, create a fork of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/runnable-templates"},(0,o.kt)("inlineCode",{parentName:"a"},"runnable-templates"))," git repository. Once the repo has been forked into your company or personal account, you can begin editing the libraries in the ",(0,o.kt)("inlineCode",{parentName:"p"},"library")," directory."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Custom libraries are currently only officially supported for AssemblyScript, with more coming soon."))),(0,o.kt)(i.Z,{groupId:"language-selection",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"assemblyscript",label:"AssemblyScript",mdxType:"TabItem"},(0,o.kt)("p",null,"The AssemblyScript library is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"library/assemblyscript"),". As your custom library will need to be published, you will need to give it a custom name. In ",(0,o.kt)("inlineCode",{parentName:"p"},"library/assemblyscript/package.json"),", replace all instances of ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeco")," with your desired name. Add your custom library as a dependency in ",(0,o.kt)("inlineCode",{parentName:"p"},"templates/assemblyscript/package.json.tmpl")," so your users' functions can use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'"dependencies": {\n  "@assemblyscript/loader": "^0.19",\n  "@acmeco/acmeco": "^0.1.0" // your library here\n}\n')),(0,o.kt)("p",null,"You can modify ",(0,o.kt)("inlineCode",{parentName:"p"},"library/assemblyscript/assembly/index.ts")," to expose new utility functions and/or remove existing ones. To learn more about the available APIs, check out ",(0,o.kt)("a",{parentName:"p",href:"https://atmo.suborbital.dev/runnable-api/introduction"},"Atmo's Runnable API docs"),"."),(0,o.kt)("p",null,"Once this is done, publish your library to npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd library/assemblyscript\nnpm publish --access public\n")))),(0,o.kt)("h2",{id:"configuring-compute"},"Configuring Compute"),(0,o.kt)("p",null,"Since your custom library is listed as a dependency of the template project, it will be installed when your users' functions are built for the first time."),(0,o.kt)("p",null,"In your Compute installation, you will need to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"SCC_TEMPLATES_REPO")," environment variable."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For a local deployment, edit ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," to add ",(0,o.kt)("inlineCode",{parentName:"li"},"SCC_TEMPLATES_REPO:")," to the builder with the value set to your fork ","(","e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"acmeco/runnable-templates"),")"),(0,o.kt)("li",{parentName:"ul"},"For a cloud deployment, edit ",(0,o.kt)("inlineCode",{parentName:"li"},"suborbital/scc-controlplane.yaml"),", and add the following to the ",(0,o.kt)("inlineCode",{parentName:"li"},"builder")," container's ",(0,o.kt)("inlineCode",{parentName:"li"},"environment"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: SCC_TEMPLATES_REPO\n  value: "{your fork}"\n')))),(0,o.kt)("p",null,"Apply the change by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f .suborbital/\n")))}f.isMDXComponent=!0}}]);