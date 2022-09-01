"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[5434],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||r;return t?o.createElement(d,i(i({ref:n},s),{},{components:t})):o.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={pagination_next:null},i="Fully-qualified function names",u={unversionedId:"compute/customizing-functions/fully-qualified-function-names",id:"compute/customizing-functions/fully-qualified-function-names",title:"Fully-qualified function names",description:"Each function uploaded by your users has a unique name called a fully-qualified function name, or FQFN. The string representation of an FQFN is as follows:",source:"@site/docs/compute/customizing-functions/fully-qualified-function-names.md",sourceDirName:"compute/customizing-functions",slug:"/compute/customizing-functions/fully-qualified-function-names",permalink:"/docs/laura/166-update-compute-deployment-docs/compute/customizing-functions/fully-qualified-function-names",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/customizing-functions/fully-qualified-function-names.md",tags:[],version:"current",lastUpdatedAt:1660843970,formattedLastUpdatedAt:"Aug 18, 2022",frontMatter:{pagination_next:null},sidebar:"docs",previous:{title:"Namespaces",permalink:"/docs/laura/166-update-compute-deployment-docs/compute/customizing-functions/namespaces"}},l={},c=[{value:"Environment name",id:"environment-name",level:2},{value:"FQFN URLs",id:"fqfn-urls",level:2}],s={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fully-qualified-function-names"},"Fully-qualified function names"),(0,a.kt)("p",null,"Each function uploaded by your users has a unique name called a fully-qualified function name, or FQFN. The string representation of an FQFN is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"com.example.nawronuq98hqwekj198fkljbeco#default::record-event@v1.0.0\n|_____________|___________________________|________|____________|______|\n Environment          User ID             Namespace  Function   Version\n")),(0,a.kt)("p",null,"Here's a breakdown:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Environment"),": your company's reverse domain; ",(0,a.kt)("inlineCode",{parentName:"li"},"com.example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User ID"),": The unique value that your application uses to identify your users within your system; ",(0,a.kt)("inlineCode",{parentName:"li"},"nawronuq98hqwekj198fkljbeco")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Namespace"),": The namespace this function belongs to; allows for separated groups of functions based on product needs (see ",(0,a.kt)("a",{parentName:"li",href:"/docs/laura/166-update-compute-deployment-docs/compute/customizing-functions/namespaces"},"Namespaces")," ); ",(0,a.kt)("inlineCode",{parentName:"li"},"default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Function"),":  The name of the function as chosen by the user; ",(0,a.kt)("inlineCode",{parentName:"li"},"record-event")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Version"),": The version of this function ","(","incremented each time a user updates this function",")","; ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.0.0"))),(0,a.kt)("h2",{id:"environment-name"},"Environment name"),(0,a.kt)("p",null,"The domain of your email address should match the ",(0,a.kt)("inlineCode",{parentName:"p"},"environment")," you\nconfigure for Compute, i.e. if your email is ",(0,a.kt)("inlineCode",{parentName:"p"},"laika@example.com"),", your\nCompute environment would be called ",(0,a.kt)("inlineCode",{parentName:"p"},"com.example"),"."),(0,a.kt)("h2",{id:"fqfn-urls"},"FQFN URLs"),(0,a.kt)("p",null,"To execute a function in Compute you will use a URL representation of FQFN. To reference an FQFN by URL, use the following pattern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/{environment}.{userid}/{namespace}/{function}/{version}\n\nExample:\ncom.example.nawronuq98hqwekj198fkljbeco/default/record-event/v1.0.0\n")))}m.isMDXComponent=!0}}]);