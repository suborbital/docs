"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3721],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9300:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},u="Fully-qualified function names",c={unversionedId:"compute/concepts/fully-qualified-function-names",id:"compute/concepts/fully-qualified-function-names",title:"Fully-qualified function names",description:"Each function uploaded by your users has a unique name called a fully-qualified function name, or FQFN. The string representation of an FQFN is as follows:",source:"@site/docs/compute/concepts/fully-qualified-function-names.md",sourceDirName:"compute/concepts",slug:"/compute/concepts/fully-qualified-function-names",permalink:"/docs/laura/78-add-algolia-search-support-1/compute/concepts/fully-qualified-function-names",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/concepts/fully-qualified-function-names.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Data Plane vs Control Plane",permalink:"/docs/laura/78-add-algolia-search-support-1/compute/concepts/data-plane-vs-control-plane"},next:{title:"Namespaces",permalink:"/docs/laura/78-add-algolia-search-support-1/compute/concepts/namespaces"}},s={},p=[{value:"Environment name",id:"environment-name",level:2},{value:"FQFN URLs",id:"fqfn-urls",level:2}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fully-qualified-function-names"},"Fully-qualified function names"),(0,o.kt)("p",null,"Each function uploaded by your users has a unique name called a fully-qualified function name, or FQFN. The string representation of an FQFN is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"com.awesomeco.nawronuq98hqwekj198fkljbeco#default::record-event@v1.0.0\n|____________|___________________________|________|____________|______|\n Environment          User ID             Namespace  Function   Version\n")),(0,o.kt)("p",null,"Here's a breakdown:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Environment"),": your company's reverse domain; ",(0,o.kt)("inlineCode",{parentName:"li"},"com.awesomeco")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User ID"),": The unique value that your application uses to identify your users within your system; ",(0,o.kt)("inlineCode",{parentName:"li"},"nawronuq98hqwekj198fkljbeco")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Namespace"),": The namespace this function belongs to; allows for separated groups of functions based on product needs ","(","see ",(0,o.kt)("a",{parentName:"li",href:"/docs/laura/78-add-algolia-search-support-1/compute/concepts/namespaces"},"Namespaces")," ",")","; ",(0,o.kt)("inlineCode",{parentName:"li"},"default")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Function"),":  The name of the function as chosen by the user; ",(0,o.kt)("inlineCode",{parentName:"li"},"record-event")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Version"),": The version of this function ","(","incremented each time a user updates this function",")","; ",(0,o.kt)("inlineCode",{parentName:"li"},"v1.0.0"))),(0,o.kt)("h2",{id:"environment-name"},"Environment name"),(0,o.kt)("p",null,"The domain of your email address should match the ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," you configure for Compute, i.e. if your email is ",(0,o.kt)("inlineCode",{parentName:"p"},"sally@awesomeco.com"),", your Compute environment would be called ",(0,o.kt)("inlineCode",{parentName:"p"},"com.awesomeco"),"."),(0,o.kt)("h2",{id:"fqfn-urls"},"FQFN URLs"),(0,o.kt)("p",null,"To execute a function in Compute you will use a URL representation of FQFN. To reference an FQFN by URL, use the following pattern:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/{environment}.{userid}/{namespace}/{function}/{version}\n\nExample:\n/com.awesomeco.nawronuq98hqwekj198fkljbeco/default/record-event/v1.0.0\n")))}f.isMDXComponent=!0}}]);