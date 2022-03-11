"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[715],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3134:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],u={},l="Setup",s={unversionedId:"compute/quickstart/create-an-environment-token-with-subo",id:"compute/quickstart/create-an-environment-token-with-subo",title:"Setup",description:"To use Compute, you need an environment token and the Subo command line tool. This token allows the control plane to authenticate with the Suborbital Compute Network, our hosted service that manages billing, metadata storage, telemetry, and more.",source:"@site/docs/compute/quickstart/create-an-environment-token-with-subo.md",sourceDirName:"compute/quickstart",slug:"/compute/quickstart/create-an-environment-token-with-subo",permalink:"/docs/compute/quickstart/create-an-environment-token-with-subo",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/quickstart/create-an-environment-token-with-subo.md",tags:[],version:"current",lastUpdatedAt:1646203888,formattedLastUpdatedAt:"3/2/2022",frontMatter:{},sidebar:"docs",previous:{title:"Suborbital Compute",permalink:"/docs/compute/"},next:{title:"Run Compute locally",permalink:"/docs/compute/quickstart/run-compute-locally"}},c=[{value:"Install Subo",id:"install-subo",children:[],level:2},{value:"Generate your token",id:"generate-your-token",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup"},"Setup"),(0,a.kt)("p",null,"To use Compute, you need an environment token and the Subo command line tool. This token allows the control plane to authenticate with the Suborbital Compute Network, our hosted service that manages billing, metadata storage, telemetry, and more."),(0,a.kt)("h2",{id:"install-subo"},"Install Subo"),(0,a.kt)("p",null,"If you use macOS, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," command line tool:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap suborbital/subo\nbrew install subo\n")),(0,a.kt)("p",null,"Then, run ",(0,a.kt)("inlineCode",{parentName:"p"},"subo --version")," to ensure the installation was successful. ",(0,a.kt)("strong",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"version")," must be at least ",(0,a.kt)("inlineCode",{parentName:"strong"},"v0.2.1")," for full Compute support.")),(0,a.kt)("p",null,"To install on Linux (or macOS without Homebrew), you can download ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo/releases"},"Subo directly"),"."),(0,a.kt)("h2",{id:"generate-your-token"},"Generate your token"),(0,a.kt)("p",null,"You can get a Compute Environment token either with our ",(0,a.kt)("a",{parentName:"p",href:"https://suborbital.network/"},"web app")," or with the ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," command line tool."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The domain of your email address should match the ",(0,a.kt)("inlineCode",{parentName:"p"},"environment")," you configure for Compute, i.e. if your email is ",(0,a.kt)("inlineCode",{parentName:"p"},"sally@awesomeco.com"),", your Compute environment would be called ",(0,a.kt)("inlineCode",{parentName:"p"},"com.awesomeco"),". See ",(0,a.kt)("a",{parentName:"p",href:"/docs/compute/concepts/fully-qualified-function-names"},"Fully-qualified function names")," for more information."))),(0,a.kt)("p",null,"To create your token, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"subo compute create token <email>\n")),(0,a.kt)("p",null,"A verification code will be sent to your email address which will be used to authenticate you and link your Compute installation to you."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Subo will print out your token.")),(0,a.kt)("p",null,"Keep your environment token safe (store it in your password manager), and only use it when running or installing Compute."))}m.isMDXComponent=!0}}]);