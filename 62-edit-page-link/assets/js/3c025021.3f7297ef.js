"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[276],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),l=n(2389),i=n(9548),o=n(6010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),k=g.tabGroupChoices,T=g.setTabGroupChoices,w=(0,r.useState)(h),O=w[0],N=w[1],x=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=k[m];null!=S&&S!==O&&v.some((function(e){return e.value===S}))&&N(S)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==O&&(E(t),N(a),null!=m&&T(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},8827:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(9877),o=n(8215),u=["components"],s={},c="Static files",p={unversionedId:"atmo/runnable-api/file",id:"atmo/runnable-api/file",title:"Static files",description:"Files in the static directory of an Atmo project will be copied into the Runnable Bundle by subo. Those files can then be accessed by Runnables. The directory is mounted as a sandboxed read-only filesystem.",source:"@site/docs/atmo/runnable-api/file.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/file",permalink:"/docs/62-edit-page-link/atmo/runnable-api/file",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/runnable-api/file.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"Accessing cache",permalink:"/docs/62-edit-page-link/atmo/runnable-api/cache"},next:{title:"Background",permalink:"/docs/62-edit-page-link/atmo/background"}},d=[{value:"Get Static",id:"get-static",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"static-files"},"Static files"),(0,l.kt)("p",null,"Files in the ",(0,l.kt)("inlineCode",{parentName:"p"},"static")," directory of an Atmo project will be copied into the Runnable Bundle by ",(0,l.kt)("inlineCode",{parentName:"p"},"subo"),". Those files can then be accessed by Runnables. The directory is mounted as a sandboxed read-only filesystem."),(0,l.kt)(i.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("p",null,"In Rust these methods are available under the ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," module:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'# Use the "file" module\nuse suborbital::file;\n\n# Invoke the "Get Static" method\nfile::get_static(\u2026)\n'))),(0,l.kt)(o.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Not yet supported"))),(0,l.kt)(o.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,"In Swift these methods are available individually:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'// Invoke the "Get Static" method\nSuborbital.GetStaticFile(\u2026)\n')))),(0,l.kt)("p",null,"The following namespace methods are available:"),(0,l.kt)("h2",{id:"get-static"},"Get Static"),(0,l.kt)("p",null,"Retrieves the contents of the static file with the given name:"),(0,l.kt)(i.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get_static(name: &str) -> Result<Vec<u8>, RunErr>\n"))),(0,l.kt)(o.Z,{value:"assemblyscript",label:"AssemblyScript \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Not yet supported"))),(0,l.kt)(o.Z,{value:"swift",label:"Swift \ud83e\uddea",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"public func GetStaticFile(name: String) -> String\n")))))}f.isMDXComponent=!0}}]);