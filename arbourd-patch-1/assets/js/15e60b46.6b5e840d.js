"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8775],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?o.createElement(f,a(a({ref:e},p),{},{components:n})):o.createElement(f,a({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8198:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],u={},c="Working with functions",l={unversionedId:"compute/quickstart/write-functions",id:"compute/quickstart/write-functions",title:"Working with functions",description:"Compute functions are built, tested, deployed, and run through the Compute API.",source:"@site/docs/compute/quickstart/write-functions.md",sourceDirName:"compute/quickstart",slug:"/compute/quickstart/write-functions",permalink:"/docs/arbourd-patch-1/compute/quickstart/write-functions",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/quickstart/write-functions.md",tags:[],version:"current",lastUpdatedAt:1647971013,formattedLastUpdatedAt:"3/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Run Compute locally",permalink:"/docs/arbourd-patch-1/compute/quickstart/run-compute-locally"},next:{title:"Connect your application",permalink:"/docs/arbourd-patch-1/compute/quickstart/connect-your-application"}},p={},s=[{value:"Compute function editor",id:"compute-function-editor",level:2},{value:"Editor URLs",id:"editor-urls",level:3},{value:"Build, test and deploy functions",id:"build-test-and-deploy-functions",level:2},{value:"Executing functions",id:"executing-functions",level:2}],d={toc:s};function m(t){var e=t.components,u=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-functions"},"Working with functions"),(0,i.kt)("p",null,"Compute functions are built, tested, deployed, and run through the Compute API."),(0,i.kt)("p",null,"The Suborbital Compute function editor uses the API to provide a low-friction environment for your users to write, build, test, and deploy functions to your Compute instance in a single place."),(0,i.kt)("p",null,"Alternatively, the Builder API can be used programmatically, if that better suits your use case. (see ",(0,i.kt)("a",{parentName:"p",href:"connect-your-application"},"Connect your application"),")."),(0,i.kt)("h2",{id:"compute-function-editor"},"Compute function editor"),(0,i.kt)("p",null,"A quick way to try the editor is to use the REPL built into the Subo CLI introduced in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.suborbital.dev/compute/quickstart/run-compute-locally"},"Run Compute Locally"),". The Subo REPL includes a proxy that makes it easy to connect the hosted editor to your local Compute installation."),(0,i.kt)("p",null,"By default, it makes the editor accessible on ",(0,i.kt)("a",{parentName:"p",href:"http://local.suborbital.network:80/"},(0,i.kt)("inlineCode",{parentName:"a"},"local.suborbital.network:80")),". The editor proxy port can be configured with the ",(0,i.kt)("inlineCode",{parentName:"p"},"subo compute deploy core --local --proxy-port <some port>")," option. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"local.suborbital.network")," subdomain points to ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),", i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),". You may need to substitute a different hostname or IP address depending on your particular network setup."),(0,i.kt)("h3",{id:"editor-urls"},"Editor URLs"),(0,i.kt)("p",null,"To edit a function via the editor, you\u2014or more likely your application\u2014must construct a valid URL to pass to the editor. When working locally, the Subo REPL can generate editor URLs for you automatically."),(0,i.kt)("p",null,"In a ",(0,i.kt)("strong",{parentName:"p"},"development environment"),", the URL should have these components:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"http://local.suborbital.network/?builder=http://local.suborbital.network:8082&token=ogbWUbzCZaYLga3GggP0cxht&ident=com.suborbital.acmeco&namespace=default&fn=foobar\n")),(0,i.kt)("p",null,"In a ",(0,i.kt)("strong",{parentName:"p"},"production environment"),", the URL may look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://editor.suborbital.network?builder=https://builder.acmeco.com&token=K78as0aslwi30l8h5lbF4lS7&ident=com.suborbital.customer&fn=add-record&template=rust\n")),(0,i.kt)("p",null,"The important differences to note between these URLs are the local and public hostnames and HTTP and HTTPS schemes for the editor itself and the ",(0,i.kt)("inlineCode",{parentName:"p"},"&builder=")," parameter."),(0,i.kt)("p",null,"For more information, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/arbourd-patch-1/compute/integrate-the-function-editor/code-editor#configuration"},"complete documentation for each of the URL parameters"),"."),(0,i.kt)("h2",{id:"build-test-and-deploy-functions"},"Build, test and deploy functions"),(0,i.kt)("p",null,"Once inside the editor, you can edit, build, test, and deploy your functions all in one place."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6806).Z,width:"2822",height:"1414"})),(0,i.kt)("h2",{id:"executing-functions"},"Executing functions"),(0,i.kt)("p",null,"Once your first function has been built and deployed, it can be run with a request to the Execution API. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export ENV_TOKEN=<token from Step 1>\n\ncurl http://local.suborbital.network:8080/com.suborbital.acmeco/default/hello/v1.0.0 \\\n     --header \"Authorization: Bearer $ENV_TOKEN\" \\\n     -d 'my friend'\n\nhello, my friend\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please note"),": If you are invoking the Test API, you will need to import the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.suborbital.dev/integrate-the-function-editor/code-editor#editor-token"},"Editor Token")," provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.suborbital.dev/concepts/data-plane-vs-control-plane#control-plane"},"Control Plane service")," ",(0,i.kt)("a",{parentName:"p",href:"https://suborbital-compute.readme.io/reference/api-reference"},"API")," instead of the Environment token in the code snippet above."))}m.isMDXComponent=!0},6806:function(t,e,n){e.Z=n.p+"assets/images/rocketship-screen-5dd3e5ead75e6161582968cd3dfd7897.png"}}]);