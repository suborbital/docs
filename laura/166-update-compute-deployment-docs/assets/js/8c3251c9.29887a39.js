"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2973:(e,t,n)=>{n.d(t,{s:()=>f});var a=n(7294),r=n(5488),l=n(5162),o=n(3612);const i=JSON.parse('{"rust":{"lang":"rust","name":"Rust","status":"stable"},"js":{"lang":"js","name":"JavaScript & TypeScript","status":"beta","alts":["javascript","typescript"]},"go":{"lang":"go","name":"Go","status":"beta"},"assemblyscript":{"lang":"assemblyscript","name":"AssemblyScript","status":"beta","highlighting":"typescript"},"grain":{"lang":"grain","name":"Grain","status":"beta"},"swift":{"lang":"swift","name":"Swift","status":"preview"}}');var s=n(9960),u=n(4996);const c=Object.keys(i),p=new Map;Object.entries(i).forEach((e=>{var t;let[n,a]=e;null==(t=a.alts)||t.forEach((e=>{p.set(e,n)}))}));const d=e=>c.filter((t=>!!m(t,e))).map((e=>i[e])),m=(e,t)=>{let n;if(a.Children.forEach(t,(t=>{e===(e=>{var t;return null!=(t=p.get(e))?t:e})((e=>{var t;return"CodeBlock"===e.props.mdxType?e.props.language:"pre"===e.props.mdxType&&"code"===(null==(t=e.props.children)?void 0:t.props.mdxType)?e.props.children.props.className.replace("language-",""):null})(t))&&(n=t)})),n||console.log(e," not found."),n&&i[e].highlighting){var r;if("CodeBlock"===n.props.mdxType)return a.cloneElement(n,{language:i[e].highlighting});if("pre"===n.props.mdxType&&"code"===(null==(r=n.props.children)?void 0:r.props.mdxType))return a.cloneElement(n,{},a.cloneElement(n.props.children,{className:"language-"+i[e].highlighting}))}return n},f=e=>{var t,n;let{children:i}=e;return a.createElement(a.Fragment,null,a.createElement(r.Z,{groupId:"reactr-language",defaultValue:null!=(t=null==(n=d(i))?void 0:n[0].lang)?t:null},d(i).map((e=>{let{lang:t,name:n,status:r}=e;return a.createElement(l.Z,{value:t,label:n},(e=>"stable"===e?a.createElement(s.Z,{to:(0,u.Z)("reactr/language-support#stable")},a.createElement(o.Z,{type:"tip",title:"STATUS: STABLE"})):"beta"===e?a.createElement(s.Z,{to:(0,u.Z)("reactr/language-support#beta")},a.createElement(o.Z,{type:"info",title:"STATUS: BETA"})):"preview"===e?a.createElement(s.Z,{to:(0,u.Z)("reactr/language-support#preview")},a.createElement(o.Z,{type:"caution",title:"STATUS: PREVIEW"})):void 0)(r),m(t,i))}))))}},3612:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),r=n(6010),l=n(5281),o=n(5999);const i="admonition_LlT9",s="admonitionHeading_tbUL",u="admonitionIcon_kALy",c="admonitionContent_S0QG";const p={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){var t;const{mdxAdmonitionTitle:n,rest:r}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:r}}function f(e){const{children:t,type:n,title:o,icon:f}=m(e),h=function(e){var t;const n=null!=(t=d[e])?t:e;return p[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),p.info)}(n),b=null!=o?o:h.label,{iconComponent:g}=h,v=null!=f?f:a.createElement(g,null);return a.createElement("div",{className:(0,r.Z)(l.k.common.admonition,l.k.common.admonitionType(e.type),"alert","alert--"+h.infimaClassName,i)},a.createElement("div",{className:s},a.createElement("span",{className:u},v),b),a.createElement("div",{className:c},t))}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:f,groupId:h,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const E=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==E&&!v.some((e=>e.value===E)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:k}=(0,s.U)(),[w,C]=(0,r.useState)(E),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=T[h];null!=e&&e!==w&&v.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==w&&(x(t),C(a),null!=h&&k(h,String(a)))},Z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=N.indexOf(e.currentTarget)+1;n=null!=(a=N[t])?a:N[0];break}case"ArrowLeft":{var r;const t=N.indexOf(e.currentTarget)-1;n=null!=(r=N[t])?r:N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:Z,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162),i=n(2973);const s={},u="Modifying responses",c={unversionedId:"atmo/runnable-api/response",id:"atmo/runnable-api/response",title:"Modifying responses",description:"When a Runnable is used to handle an HTTP request, Atmo will bind that request to the Runnable. The resp namespace of the Runnable API can then be used to modify the response that Atmo will send to the caller.",source:"@site/docs/atmo/runnable-api/response.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/response",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/runnable-api/response",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/runnable-api/response.md",tags:[],version:"current",lastUpdatedAt:1647046484,formattedLastUpdatedAt:"Mar 12, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Handling requests",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/runnable-api/request"},next:{title:"Structured logging",permalink:"/docs/laura/166-update-compute-deployment-docs/atmo/runnable-api/logging"}},p={},d=[{value:"Set header",id:"set-header",level:2},{value:"Content-Type",id:"content-type",level:2}],m={toc:d};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modifying-responses"},"Modifying responses"),(0,r.kt)("p",null,"When a Runnable is used to handle an HTTP request, Atmo will bind that request to the Runnable. The ",(0,r.kt)("inlineCode",{parentName:"p"},"resp")," namespace of the Runnable API can then be used to modify the response that Atmo will send to the caller."),(0,r.kt)("admonition",{title:"NOTE",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Currently the Response API has limited language support, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suborbital/reactr/issues/215"},"additional implementations are tracked in this issue"),".")),(0,r.kt)(l.Z,{groupId:"reactr-language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("p",null,"In Rust these methods are available under the ",(0,r.kt)("inlineCode",{parentName:"p"},"resp")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'# Use the "resp" module\nuse suborbital::resp;\n\n# Invoke the "SetHeader" method\nresp::set_header(\u2026)\n')))),(0,r.kt)("p",null,"The following namespace methods are available:"),(0,r.kt)("h2",{id:"set-header"},"Set header"),(0,r.kt)("p",null,"Sets an HTTP response header:"),(0,r.kt)(i.s,{mdxType:"MultiLanguageCodeBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn set_header(key: &str, val: &str)\n"))),(0,r.kt)("h2",{id:"content-type"},"Content-Type"),(0,r.kt)("p",null,"An alias of ",(0,r.kt)("inlineCode",{parentName:"p"},"set_header")," that allows easily setting the\nresponse Content-Type:"),(0,r.kt)(i.s,{mdxType:"MultiLanguageCodeBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn content_type(ctype: &str)\n"))))}f.isMDXComponent=!0}}]);