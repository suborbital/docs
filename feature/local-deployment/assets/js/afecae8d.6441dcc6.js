"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[6908],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(b,o(o({ref:n},c),{},{components:t})):a.createElement(b,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2973:(e,n,t)=>{t.d(n,{s:()=>b});var a=t(7294),r=t(5488),l=t(5162),o=t(3612);const i=JSON.parse('{"rust":{"lang":"rust","name":"Rust","status":"stable"},"js":{"lang":"js","name":"JavaScript & TypeScript","status":"beta","alts":["javascript","typescript"]},"go":{"lang":"go","name":"Go","status":"beta"},"assemblyscript":{"lang":"assemblyscript","name":"AssemblyScript","status":"beta","highlighting":"typescript"},"grain":{"lang":"grain","name":"Grain","status":"beta"},"swift":{"lang":"swift","name":"Swift","status":"preview"}}');var u=t(9960),s=t(4996);const c=Object.keys(i),p=new Map;Object.entries(i).forEach((e=>{var n;let[t,a]=e;null==(n=a.alts)||n.forEach((e=>{p.set(e,t)}))}));const d=e=>c.filter((n=>!!m(n,e))).map((e=>i[e])),m=(e,n)=>{let t;if(a.Children.forEach(n,(n=>{e===(e=>{var n;return null!=(n=p.get(e))?n:e})((e=>{var n;return"CodeBlock"===e.props.mdxType?e.props.language:"pre"===e.props.mdxType&&"code"===(null==(n=e.props.children)?void 0:n.props.mdxType)?e.props.children.props.className.replace("language-",""):null})(n))&&(t=n)})),t||console.log(e," not found."),t&&i[e].highlighting){var r;if("CodeBlock"===t.props.mdxType)return a.cloneElement(t,{language:i[e].highlighting});if("pre"===t.props.mdxType&&"code"===(null==(r=t.props.children)?void 0:r.props.mdxType))return a.cloneElement(t,{},a.cloneElement(t.props.children,{className:"language-"+i[e].highlighting}))}return t},b=e=>{var n,t;let{children:i}=e;return a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"reactr-language",defaultValue:null!=(n=null==(t=d(i))?void 0:t[0].lang)?n:null},d(i).map((e=>{let{lang:n,name:t,status:r}=e;return a.createElement(l.Z,{value:n,label:t},(e=>"stable"===e?a.createElement(u.Z,{to:(0,s.Z)("reactr/language-support#stable")},a.createElement(o.Z,{type:"tip",title:"STATUS: STABLE"})):"beta"===e?a.createElement(u.Z,{to:(0,s.Z)("reactr/language-support#beta")},a.createElement(o.Z,{type:"info",title:"STATUS: BETA"})):"preview"===e?a.createElement(u.Z,{to:(0,s.Z)("reactr/language-support#preview")},a.createElement(o.Z,{type:"caution",title:"STATUS: PREVIEW"})):void 0)(r),m(n,i))}))))}},3612:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(7294),r=t(6010),l=t(5281),o=t(5999);const i="admonition_LlT9",u="admonitionHeading_tbUL",s="admonitionIcon_kALy",c="admonitionContent_S0QG";const p={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){var n;const{mdxAdmonitionTitle:t,rest:r}=function(e){const n=a.Children.toArray(e),t=n.find((e=>{var n;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),r=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:r}}(e.children);return{...e,title:null!=(n=e.title)?n:t,children:r}}function b(e){const{children:n,type:t,title:o,icon:b}=m(e),f=function(e){var n;const t=null!=(n=d[e])?n:e;return p[t]||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),p.info)}(t),h=null!=o?o:f.label,{iconComponent:g}=f,v=null!=b?b:a.createElement(g,null);return a.createElement("div",{className:(0,r.Z)(l.k.common.admonition,l.k.common.admonitionType(e.type),"alert","alert--"+f.infimaClassName,i)},a.createElement("div",{className:u},a.createElement("span",{className:s},v),h),a.createElement("div",{className:c},n))}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),r=t(7294),l=t(6010),o=t(2389),i=t(7392),u=t(7094),s=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:o,block:d,defaultValue:m,values:b,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,i.l)(v,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(n=null!=m?m:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:E,setTabGroupChoices:w}=(0,u.U)(),[T,N]=(0,r.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:R}=(0,s.o5)();if(null!=f){const e=E[f];null!=e&&e!==T&&v.some((n=>n.value===e))&&N(e)}const x=e=>{const n=e.currentTarget,t=C.indexOf(n),a=v[t].value;a!==T&&(R(n),N(a),null!=f&&w(f,String(a)))},A=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=C.indexOf(e.currentTarget)+1;t=null!=(a=C[n])?a:C[0];break}case"ArrowLeft":{var r;const n=C.indexOf(e.currentTarget)-1;t=null!=(r=C[n])?r:C[C.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},v.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>C.push(e),onKeyDown:A,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function m(e){const n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},9927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),l=t(2973);const o={pagination_prev:null},i="Introduction to the Runnable API",u={unversionedId:"atmo/runnable-api/introduction",id:"atmo/runnable-api/introduction",title:"Introduction to the Runnable API",description:"The Runnables that you write for your Atmo application are compiled to",source:"@site/docs/atmo/runnable-api/introduction.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/introduction",permalink:"/docs/feature/local-deployment/atmo/runnable-api/introduction",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/runnable-api/introduction.md",tags:[],version:"current",lastUpdatedAt:1660755378,formattedLastUpdatedAt:"Aug 17, 2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"Handling requests",permalink:"/docs/feature/local-deployment/atmo/runnable-api/request"}},s={},c=[{value:"The Runnable interface",id:"the-runnable-interface",level:2},{value:"An example Runnable",id:"an-example-runnable",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-the-runnable-api"},"Introduction to the Runnable API"),(0,r.kt)("p",null,"The Runnables that you write for your Atmo application are compiled to\nWebAssembly, and are run in a controlled sandbox. The ",(0,r.kt)("strong",{parentName:"p"},"Runnable API"),"\nis the set of capabilities Atmo grants to the sandbox which can be used\nto build your application's logic."),(0,r.kt)("p",null,'When a Runnable is handling a particular request, Atmo binds that request\nto the module while it\'s being run. The Runnable API allows your code to\naccess everything about the request, and also gives you the ability to\naccess the "outside world" by giving functions for HTTP requests,\naccessing static files, logging, and more. This section describes all of\nthe capabilities available via the Runnable API and how to use them in\nRust and Swift Runnable code.'),(0,r.kt)("p",null,"The Runnable API is provided via a library for each of the supported languages,\nand simply needs to be imported to turn your module into a Runnable.\n",(0,r.kt)("inlineCode",{parentName:"p"},"subo")," will configure all of this on your behalf."),(0,r.kt)("h2",{id:"the-runnable-interface"},"The Runnable interface"),(0,r.kt)("p",null,"The first and most basic part of the Runnable API is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Runnable")," interface\n(also known as a Rust trait or Swift protocol). Every Runnable you write will\nprovide an instance of an object that conforms to this interface.\nIt is very simple, and only requires one method, ",(0,r.kt)("inlineCode",{parentName:"p"},"run"),"."),(0,r.kt)(l.s,{mdxType:"MultiLanguageCodeBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Runnable {\n    fn run(&self, input: Vec<u8>) -> Result<Vec<u8>, RunErr>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-assemblyscript"},"export function run(input: ArrayBuffer): ArrayBuffer\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public protocol Runnable {\n    func run(input: String) -> String\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Runnable interface {\n    Run(input []byte) ([]byte, error)\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function run(input: String): String\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-grain"},"export let run = input => {\n    Ok()\n}\n"))),(0,r.kt)("p",null,"Your Runnable object will be created automatically by ",(0,r.kt)("inlineCode",{parentName:"p"},"subo")," when you use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"create runnable")," command. All you need to do is write your logic within the ",(0,r.kt)("inlineCode",{parentName:"p"},"run"),"\nmethod, and Atmo will handle executing it."),(0,r.kt)("p",null,"There are several namespaces available in the Runnable API, each are discussed in\nthe various pages in this reference."),(0,r.kt)("p",null,"When handling HTTP requests, the input to the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," method is the body of the\nrequest being handled. The other details of the request are available using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"req")," namespace and will be discussed in the coming ",(0,r.kt)("a",{parentName:"p",href:"request"},"sections"),"."),(0,r.kt)("h2",{id:"an-example-runnable"},"An example Runnable"),(0,r.kt)("p",null,"Here is an example of a Runnable, written in Rust."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"subo")," CLI tool will automatically create new Runnables for you with the ",(0,r.kt)("inlineCode",{parentName:"p"},"subo create runnable")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use suborbital::runnable::*;\nuse suborbital::{req, util};\n\nstruct Foobar{}\n\nimpl Runnable for Foobar {\n    fn run(&self, _: Vec<u8>) -> Result<Vec<u8>, RunErr> {\n        let body = req::body_raw();\n        let body_string = util::to_string(body);\n\n        Ok(String::from(format!("hello {}", body_string)).as_bytes().to_vec())\n    }\n}\n\n\n// initialize the runner, do not edit below //\nstatic RUNNABLE: &Foobar = &Foobar{};\n\n#[no_mangle]\npub extern fn init() {\n    use_runnable(RUNNABLE);\n}\n')),(0,r.kt)("p",null,"This Runnable uses the ",(0,r.kt)("a",{parentName:"p",href:"request"},(0,r.kt)("inlineCode",{parentName:"a"},"req"))," namespace to fetch the body of the HTTP request being handled, and then returns it."),(0,r.kt)("p",null,"To learn about all of the Runnable API namespaces, read on!"))}d.isMDXComponent=!0}}]);