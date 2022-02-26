"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[400],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={},u="Function editor",c={unversionedId:"compute/integrate-the-function-editor/code-editor",id:"compute/integrate-the-function-editor/code-editor",title:"Function editor",description:"The Compute code editor is available for you to embed in your application, so your customers can build their functions quickly and easily:",source:"@site/docs/compute/integrate-the-function-editor/code-editor.md",sourceDirName:"compute/integrate-the-function-editor",slug:"/compute/integrate-the-function-editor/code-editor",permalink:"/docs/compute/integrate-the-function-editor/code-editor",editUrl:"https://github.com/suborbital/docs/docs/compute/integrate-the-function-editor/code-editor.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Namespaces",permalink:"/docs/compute/concepts/namespaces"},next:{title:"Custom function templates",permalink:"/docs/compute/customizing-functions/custom-function-templates"}},p=[{value:"Editor token",id:"editor-token",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Building and deploying",id:"building-and-deploying",children:[],level:2}],s={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"function-editor"},"Function editor"),(0,i.kt)("p",null,"The Compute code editor is available for you to embed in your application, so your customers can build their functions quickly and easily:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4529).Z,width:"2822",height:"1414"})),(0,i.kt)("p",null,"The editor is hosted at ",(0,i.kt)("inlineCode",{parentName:"p"},"https://editor.suborbital.network"),", and uses URL parameters to configure its connection to your builder service."),(0,i.kt)("p",null,"You will host the Compute ",(0,i.kt)("a",{parentName:"p",href:"/docs/compute/concepts/data-plane-vs-control-plane"},"builder service")," in your cloud infrastructure with a configured DNS name. In order to use the editor, an HTTPS connection to the builder is required."),(0,i.kt)("p",null,"To launch the editor, you can either embed it in a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"frame")," within your own webpage, or launch it in a new tab."),(0,i.kt)("h2",{id:"editor-token"},"Editor token"),(0,i.kt)("p",null,"To authenticate the editor for a specific user to edit their own functions, the ",(0,i.kt)("inlineCode",{parentName:"p"},"control-plane")," service provides an API to create an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor token")," for a given function:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://local.suborbital.network:8081/api/v1/token/com.acmeco.gr9fas97234b/default/httpget")),(0,i.kt)("p",null,"When giving your users access to the editor, you must use an authenticated endpoint provided by your application server to fetch a token that is used to authenticate their editing session."),(0,i.kt)("p",null,"Full details for the token API are described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/compute/api-reference/"},"API Reference")," section."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The editor is configured with URL parameters. Here's an example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://editor.suborbital.network?builder=https://builder.acmeco.com&token=K78as0aslwi30l8h5lbF4lS7&ident=com.suborbital.customer&fn=add-record")),(0,i.kt)("p",null,"Let's break it down:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Builder"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"?builder=https://builder.acmeco.com")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is the URL of your builder service")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Token"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"&token=K78as0aslwi30l8h5lbF4lS7")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The editor token retrieved from the control-plane service")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ident"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"&ident=com.suborbital.customer")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The identifier used when addressing your specific user, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/compute/concepts/fully-qualified-function-names"},"Fully-qualified function names")," for more details")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fn"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"&fn=add-record")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The specific function name that the editor should load")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Namespace")," (optional): ",(0,i.kt)("inlineCode",{parentName:"p"},"&namespace=default")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The function namespace (if not included, the ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," namespace is used, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/compute/concepts/namespaces"},"Namespaces")," for more details)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Template")," (optional): ",(0,i.kt)("inlineCode",{parentName:"p"},"&template=assemblyscript")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The language template used for new functions. Currently, ",(0,i.kt)("inlineCode",{parentName:"li"},"assemblyscript")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"rust")," are available (default ",(0,i.kt)("inlineCode",{parentName:"li"},"assemblyscript"),"), with more coming in future versions of Compute.")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," in question does not exist, the editor will automatically create a new function."),(0,i.kt)("h2",{id:"building-and-deploying"},"Building and deploying"),(0,i.kt)("p",null,"Once the customer has edited their function, the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," button in the top right will allow them to check to ensure the function builds. The builder service will build the function and then return the results to the console area."),(0,i.kt)("p",null,"Assuming the build succeeds, the customer can choose to deploy the latest version with the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," button. If they choose not to deploy, the draft will be available to them later."),(0,i.kt)("p",null,"Until the customer deploys the function, it will remain at the previous version. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/compute/api-reference/"},"API Reference")," gives you details about the draft and active versions of any function."))}d.isMDXComponent=!0},4529:function(e,t,n){t.Z=n.p+"assets/images/rocketship-screen-5dd3e5ead75e6161582968cd3dfd7897.png"}}]);