"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8775],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],u={},c="Working with functions",l={unversionedId:"compute/quickstart/write-functions",id:"compute/quickstart/write-functions",title:"Working with functions",description:"Compute functions are built, tested, deployed, and run through the Compute API.",source:"@site/docs/compute/quickstart/write-functions.md",sourceDirName:"compute/quickstart",slug:"/compute/quickstart/write-functions",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/compute/quickstart/write-functions",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/quickstart/write-functions.md",tags:[],version:"current",lastUpdatedAt:1647971013,formattedLastUpdatedAt:"3/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Run Compute locally",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/compute/quickstart/run-compute-locally"},next:{title:"Connect your application",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/compute/quickstart/connect-your-application"}},s={},p=[{value:"Compute function editor",id:"compute-function-editor",level:2},{value:"Editor URLs",id:"editor-urls",level:3},{value:"Build, test and deploy functions",id:"build-test-and-deploy-functions",level:2},{value:"Executing functions",id:"executing-functions",level:2}],d={toc:p};function m(e){var t=e.components,u=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-functions"},"Working with functions"),(0,a.kt)("p",null,"Compute functions are built, tested, deployed, and run through the Compute API."),(0,a.kt)("p",null,"The Suborbital Compute function editor uses the API to provide a low-friction environment for your users to write, build, test, and deploy functions to your Compute instance in a single place."),(0,a.kt)("p",null,"Alternatively, the Builder API can be used programmatically, if that better suits your use case. (see ",(0,a.kt)("a",{parentName:"p",href:"connect-your-application"},"Connect your application"),")."),(0,a.kt)("h2",{id:"compute-function-editor"},"Compute function editor"),(0,a.kt)("p",null,"A quick way to try the editor is to use the REPL built into the Subo CLI introduced in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.suborbital.dev/compute/quickstart/run-compute-locally"},"Run Compute Locally"),". The Subo REPL includes a proxy that makes it easy to connect the hosted editor to your local Compute installation."),(0,a.kt)("p",null,"By default, it makes the editor accessible on ",(0,a.kt)("a",{parentName:"p",href:"http://local.suborbital.network:80/"},(0,a.kt)("inlineCode",{parentName:"a"},"local.suborbital.network:80")),". The editor proxy port can be configured with the ",(0,a.kt)("inlineCode",{parentName:"p"},"subo compute deploy core --local --proxy-port <some port>")," option. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"local.suborbital.network")," subdomain points to ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),", i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),". You may need to substitute a different hostname or IP address depending on your particular network setup."),(0,a.kt)("h3",{id:"editor-urls"},"Editor URLs"),(0,a.kt)("p",null,"To edit a function via the editor, you\u2014or more likely your application\u2014must construct a valid URL to pass to the editor. When working locally, the Subo REPL can generate editor URLs for you automatically."),(0,a.kt)("p",null,"In a ",(0,a.kt)("strong",{parentName:"p"},"development environment"),", the URL should have these components:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://local.suborbital.network/?builder=http://local.suborbital.network:8082&token=ogbWUbzCZaYLga3GggP0cxht&ident=com.suborbital.acmeco&namespace=default&fn=foobar\n")),(0,a.kt)("p",null,"In a ",(0,a.kt)("strong",{parentName:"p"},"production environment"),", the URL may look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://editor.suborbital.network?builder=https://builder.acmeco.com&token=K78as0aslwi30l8h5lbF4lS7&ident=com.suborbital.customer&fn=add-record&template=rust\n")),(0,a.kt)("p",null,"The important differences to note between these URLs are the local and public hostnames and HTTP and HTTPS schemes for the editor itself and the ",(0,a.kt)("inlineCode",{parentName:"p"},"&builder=")," parameter."),(0,a.kt)("p",null,"For more information, check out our ",(0,a.kt)("a",{parentName:"p",href:"/docs/laura/update-docusaurus-sidebar-autocollaps/compute/integrate-the-function-editor/code-editor#configuration"},"complete documentation for each of the URL parameters"),"."),(0,a.kt)("h2",{id:"build-test-and-deploy-functions"},"Build, test and deploy functions"),(0,a.kt)("p",null,"Once inside the editor, you can edit, build, test, and deploy your functions all in one place."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6806).Z,width:"2822",height:"1414"})),(0,a.kt)("h2",{id:"executing-functions"},"Executing functions"),(0,a.kt)("p",null,"Once your first function has been built and deployed, it can be run with a request to the Execution API. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export ENV_TOKEN=<token from Step 1>\n\ncurl http://local.suborbital.network:8080/com.suborbital.acmeco/default/hello/v1.0.0 \\\n     --header \"Authorization: Bearer $ENV_TOKEN\" \\\n     -d 'my friend'\n\nhello, my friend\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please note"),": If you are invoking the Test API, you will need to import the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.suborbital.dev/integrate-the-function-editor/code-editor#editor-token"},"Editor Token")," provided by the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.suborbital.dev/concepts/data-plane-vs-control-plane#control-plane"},"Control Plane service")," ",(0,a.kt)("a",{parentName:"p",href:"https://suborbital-compute.readme.io/reference/api-reference"},"API")," instead of the Environment token in the code snippet above."))}m.isMDXComponent=!0},6806:function(e,t,n){t.Z=n.p+"assets/images/rocketship-screen-5dd3e5ead75e6161582968cd3dfd7897.png"}}]);