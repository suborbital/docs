"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[4897],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7462),a=r(7294),l=r(2389),o=r(9548),u=r(6010),i="tabItem_LplD";function s(e){var t,r,l,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),k=g.tabGroupChoices,w=g.setTabGroupChoices,T=(0,a.useState)(y),x=T[0],O=T[1],E=[],N=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var q=k[d];null!=q&&q!==x&&v.some((function(e){return e.value===q}))&&O(q)}var I=function(e){var t=e.currentTarget,r=E.indexOf(t),n=v[r].value;n!==x&&(N(t),O(n),null!=d&&w(d,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:I,onClick:I},l,{className:(0,u.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,n.Z)({key:String(t)},e))}},4986:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=r(9877),u=r(8215),i=["components"],s={},c="GraphQL client",p={unversionedId:"atmo/runnable-api/graphql-client",id:"atmo/runnable-api/graphql-client",title:"GraphQL client",description:"You can use the graphql namespace of the Runnable API to make GraphQL queries from your Runnable code. GraphQL is a common way of exposing external APIs, and makes connecting to external services very straightforward.",source:"@site/docs/atmo/runnable-api/graphql-client.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/graphql-client",permalink:"/docs/atmo/runnable-api/graphql-client",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/runnable-api/graphql-client.md",tags:[],version:"current",lastUpdatedAt:1645828798,formattedLastUpdatedAt:"2/25/2022",frontMatter:{},sidebar:"docs",previous:{title:"HTTP client",permalink:"/docs/atmo/runnable-api/http-client"},next:{title:"Using SQL databases",permalink:"/docs/atmo/usage/using-sql-databases"}},m=[{value:"QUERY",id:"query",children:[],level:2}],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"graphql-client"},"GraphQL client"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," namespace of the Runnable API to make GraphQL queries from your Runnable code. GraphQL is a common way of exposing external APIs, and makes connecting to external services very straightforward."),(0,l.kt)(o.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("p",null,"In Rust these methods are available under the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," module:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'# Use the "graphql" module\nuse suborbital::graphql;\n\n# Invoke the "Query" method\ngraphql::query(\u2026)\n'))),(0,l.kt)(u.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,"In TypeScript/AssemblyScript all methods are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"graphQL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// Import then invoke \"Get\" method\nimport { graphQLQuery } from '@suborbital/suborbital'\n\ngraphQLQuery(\u2026)\n"))),(0,l.kt)(u.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Swift support is coming soon")))),(0,l.kt)("p",null,"The following namespace methods are available:"),(0,l.kt)("h2",{id:"query"},"QUERY"),(0,l.kt)("p",null,"Performs a graphQL query:"),(0,l.kt)(o.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn query(endpoint: &str, query: &str) -> Result<Vec<u8>,super::runnable::RunErr>\n"))),(0,l.kt)(u.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function graphQLQuery(endpoint: string, query: string): ArrayBuffer\n"))),(0,l.kt)(u.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Swift support is coming soon")))))}f.isMDXComponent=!0}}]);