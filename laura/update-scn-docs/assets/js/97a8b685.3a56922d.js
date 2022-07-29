"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[1365],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],u={},l="Function editor",c={unversionedId:"compute/customizing-functions/code-editor",id:"compute/customizing-functions/code-editor",title:"Function editor",description:"The Compute code editor is available for you to embed in your application,",source:"@site/docs/compute/customizing-functions/code-editor.md",sourceDirName:"compute/customizing-functions",slug:"/compute/customizing-functions/code-editor",permalink:"/docs/laura/update-scn-docs/compute/customizing-functions/code-editor",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/customizing-functions/code-editor.md",tags:[],version:"current",lastUpdatedAt:1659020645,formattedLastUpdatedAt:"7/28/2022",frontMatter:{},sidebar:"docs",previous:{title:"Using the Compute API",permalink:"/docs/laura/update-scn-docs/compute/using-api"},next:{title:"Custom function templates",permalink:"/docs/laura/update-scn-docs/compute/customizing-functions/custom-function-templates"}},s={},p=[{value:"Editor token",id:"editor-token",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Building and deploying",id:"building-and-deploying",level:2}],d={toc:p};function m(e){var t=e.components,u=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-editor"},"Function editor"),(0,r.kt)("p",null,"The Compute code editor is available for you to embed in your application,\nso your users can build their functions quickly and easily:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Compute editor containing a &#39;Hello&#39; function",src:n(8897).Z,width:"3456",height:"1936"})),(0,r.kt)("p",null,"The editor is hosted at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://editor.suborbital.network"),", and uses URL parameters to configure its connection to your builder service."),(0,r.kt)("p",null,"You will host the Compute builder service in your cloud infrastructure with a configured DNS name. In order to use the editor, an HTTPS connection to the builder is required."),(0,r.kt)("p",null,"To launch the editor, you can either ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"embed the editor in a frame")," within your own webpage, or launch it in a new tab."),(0,r.kt)("h2",{id:"editor-token"},"Editor token"),(0,r.kt)("p",null,"To authenticate the editor for a specific user to edit their own functions, the ",(0,r.kt)("inlineCode",{parentName:"p"},"control-plane")," service provides an API to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"editor token")," for a given function:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://local.suborbital.network:8081/api/v1/token/com.acmeco.gr9fas97234b/default/httpget")),(0,r.kt)("p",null,"When giving your users access to the editor, you must use an authenticated endpoint provided by your application server to fetch a token that is used to authenticate their editing session."),(0,r.kt)("p",null,"Full details for the token API are described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/laura/update-scn-docs/compute/api-reference"},"API Reference")," section."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The editor is configured with URL parameters. Here's an example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://editor.suborbital.network?builder=https://builder.acmeco.com&token=K78as0aslwi30l8h5lbF4lS7&ident=com.suborbital.customer&fn=add-record")),(0,r.kt)("p",null,"Let's break it down:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Builder"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"?builder=https://builder.acmeco.com")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is the URL of your builder service")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Token"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"&token=K78as0aslwi30l8h5lbF4lS7")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The editor token retrieved from the control-plane service")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ident"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"&ident=com.suborbital.customer")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The identifier used when addressing your specific user, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/laura/update-scn-docs/compute/customizing-functions/fully-qualified-function-names"},"Fully-qualified function names")," for more details")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fn"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"&fn=add-record")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The specific function name that the editor should load")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Namespace")," (optional): ",(0,r.kt)("inlineCode",{parentName:"p"},"&namespace=default")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The function namespace (if not included, the ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," namespace is used, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/laura/update-scn-docs/compute/customizing-functions/namespaces"},"Namespaces")," for more details)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Template")," (optional): ",(0,r.kt)("inlineCode",{parentName:"p"},"&template=assemblyscript")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The language template used for new functions. Check out our ",(0,r.kt)("a",{parentName:"li",href:"/docs/laura/update-scn-docs/reactr/language-support"},"supported\nlanguages"),"!")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"fn")," in question does not exist, the editor will automatically create a new function."),(0,r.kt)("h2",{id:"building-and-deploying"},"Building and deploying"),(0,r.kt)("p",null,"Once the customer has edited their function, the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," button in the top right will allow them to check to ensure the function builds. The builder service will build the function and then return the results to the console area."),(0,r.kt)("p",null,"Assuming the build succeeds, the customer can choose to deploy the latest version with the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," button. If they choose not to deploy, the draft will be available to them later."),(0,r.kt)("p",null,"Until the customer deploys the function, it will remain at the previous version. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/laura/update-scn-docs/compute/api-reference"},"API Reference")," gives you details about the draft and active versions of any function."))}m.isMDXComponent=!0},8897:function(e,t,n){t.Z=n.p+"assets/images/editor-screen-e9b3743f3e0da3f52e9694c2f292bf9a.png"}}]);