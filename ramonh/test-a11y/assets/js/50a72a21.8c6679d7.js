"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3721],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(t),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return t?o.createElement(d,i(i({ref:n},s),{},{components:t})):o.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9300:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],u={},l="Fully-qualified function names",c={unversionedId:"compute/concepts/fully-qualified-function-names",id:"compute/concepts/fully-qualified-function-names",title:"Fully-qualified function names",description:"Each function uploaded by your users has a unique name called a fully-qualified function name, or FQFN. The string representation of an FQFN is as follows:",source:"@site/docs/compute/concepts/fully-qualified-function-names.md",sourceDirName:"compute/concepts",slug:"/compute/concepts/fully-qualified-function-names",permalink:"/docs/ramonh/test-a11y/compute/concepts/fully-qualified-function-names",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/concepts/fully-qualified-function-names.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Data Plane vs Control Plane",permalink:"/docs/ramonh/test-a11y/compute/concepts/data-plane-vs-control-plane"},next:{title:"Namespaces",permalink:"/docs/ramonh/test-a11y/compute/concepts/namespaces"}},s={},p=[{value:"Environment name",id:"environment-name",level:2},{value:"FQFN URLs",id:"fqfn-urls",level:2}],m={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fully-qualified-function-names"},"Fully-qualified function names"),(0,a.kt)("p",null,"Each function uploaded by your users has a unique name called a fully-qualified function name, or FQFN. The string representation of an FQFN is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"com.awesomeco.nawronuq98hqwekj198fkljbeco#default::record-event@v1.0.0\n|____________|___________________________|________|____________|______|\n Environment          User ID             Namespace  Function   Version\n")),(0,a.kt)("p",null,"Here's a breakdown:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Environment"),": your company's reverse domain; ",(0,a.kt)("inlineCode",{parentName:"li"},"com.awesomeco")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User ID"),": The unique value that your application uses to identify your users within your system; ",(0,a.kt)("inlineCode",{parentName:"li"},"nawronuq98hqwekj198fkljbeco")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Namespace"),": The namespace this function belongs to; allows for separated groups of functions based on product needs ","(","see ",(0,a.kt)("a",{parentName:"li",href:"/docs/ramonh/test-a11y/compute/concepts/namespaces"},"Namespaces")," ",")","; ",(0,a.kt)("inlineCode",{parentName:"li"},"default")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Function"),":  The name of the function as chosen by the user; ",(0,a.kt)("inlineCode",{parentName:"li"},"record-event")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Version"),": The version of this function ","(","incremented each time a user updates this function",")","; ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.0.0"))),(0,a.kt)("h2",{id:"environment-name"},"Environment name"),(0,a.kt)("p",null,"The domain of your email address should match the ",(0,a.kt)("inlineCode",{parentName:"p"},"environment")," you configure for Compute, i.e. if your email is ",(0,a.kt)("inlineCode",{parentName:"p"},"sally@awesomeco.com"),", your Compute environment would be called ",(0,a.kt)("inlineCode",{parentName:"p"},"com.awesomeco"),"."),(0,a.kt)("h2",{id:"fqfn-urls"},"FQFN URLs"),(0,a.kt)("p",null,"To execute a function in Compute you will use a URL representation of FQFN. To reference an FQFN by URL, use the following pattern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/{environment}.{userid}/{namespace}/{function}/{version}\n\nExample:\n/com.awesomeco.nawronuq98hqwekj198fkljbeco/default/record-event/v1.0.0\n")))}f.isMDXComponent=!0}}]);