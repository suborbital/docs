"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[9940],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},c="Configure capabilities",u={unversionedId:"compute/cloud-deployment/configure-capabilities",id:"compute/cloud-deployment/configure-capabilities",isDocsHomePage:!1,title:"Configure capabilities",description:"Compute functions can access a number of capabilities:",source:"@site/docs/compute/cloud-deployment/configure-capabilities.md",sourceDirName:"compute/cloud-deployment",slug:"/compute/cloud-deployment/configure-capabilities",permalink:"/docs/docs/compute/cloud-deployment/configure-capabilities",editUrl:"https://github.com/suborbital/docs/docs/compute/cloud-deployment/configure-capabilities.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/23/2022",frontMatter:{},sidebar:"docs",previous:{title:"Custom libraries",permalink:"/docs/docs/compute/customizing-functions/custom-libraries"},next:{title:"Deploy Compute to your cloud environment",permalink:"/docs/docs/compute/cloud-deployment/install-compute-in-your-cloud-environment"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-capabilities"},"Configure capabilities"),(0,a.kt)("p",null,"Compute functions can access a number of capabilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Logger"),(0,a.kt)("li",{parentName:"ul"},"HTTP requests"),(0,a.kt)("li",{parentName:"ul"},"GraphQL requests"),(0,a.kt)("li",{parentName:"ul"},"Key/value store (cache)"),(0,a.kt)("li",{parentName:"ul"},"SQL databases"),(0,a.kt)("li",{parentName:"ul"},"Static files")),(0,a.kt)("p",null,'You can configure each capability. If you disable all capabilities, your users\' functions will not be able to access the "outside world" in any way.'),(0,a.kt)("p",null,"To configure capabilities, edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"scc-config.yaml")," file that ",(0,a.kt)("inlineCode",{parentName:"p"},"subo")," created for you in your ",(0,a.kt)("inlineCode",{parentName:"p"},"suborbital/config")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'networkRules: &networkRules\n  allowIPs: false\n  allowPrivate: false\n  allowHTTP: true\n  blockedDomains:\n    - "*.cluster.local"\n    - "scc-controlplane-service"\n    - "scc-builder-service"\n\ncapabilities:\n  logger:\n    enabled: true\n  http:\n    enabled: true\n    rules: *networkRules\n  graphql:\n    enabled: true\n    rules: *networkRules\n  cache:\n    enabled: false\n  file:\n    enabled: false\n  db:\n    enabled: false\n')),(0,a.kt)("p",null,"When you run ",(0,a.kt)("inlineCode",{parentName:"p"},"subo compute deploy core"),", your installation will use the configuration file. If you do not create a config file, then the above default is used. The defaults are designed to be a sane configuration for the average use-case."),(0,a.kt)("p",null,"More capability types are being developed and will be available in upcoming versions."))}d.isMDXComponent=!0}}]);