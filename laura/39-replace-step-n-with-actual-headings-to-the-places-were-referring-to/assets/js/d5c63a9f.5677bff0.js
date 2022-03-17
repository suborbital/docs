"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[7850],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1207:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={},u="Deploy Compute to your cloud environment",s={unversionedId:"compute/cloud-deployment/install-compute-in-your-cloud-environment",id:"compute/cloud-deployment/install-compute-in-your-cloud-environment",title:"Deploy Compute to your cloud environment",description:"To install Compute in the cloud, you'll use the subo tool to automatically install the Suborbital Compute Core into a Kubernetes cluster. You need to ensure you have some pre-requisites ready:",source:"@site/docs/compute/cloud-deployment/install-compute-in-your-cloud-environment.md",sourceDirName:"compute/cloud-deployment",slug:"/compute/cloud-deployment/install-compute-in-your-cloud-environment",permalink:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/compute/cloud-deployment/install-compute-in-your-cloud-environment",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/cloud-deployment/install-compute-in-your-cloud-environment.md",tags:[],version:"current",lastUpdatedAt:1647288527,formattedLastUpdatedAt:"3/14/2022",frontMatter:{},sidebar:"docs",previous:{title:"Configure capabilities",permalink:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/compute/cloud-deployment/configure-capabilities"},next:{title:"Atmo",permalink:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/atmo/"}},c=[{value:"Set up DNS",id:"set-up-dns",children:[],level:2},{value:"What&#39;s next",id:"whats-next",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-compute-to-your-cloud-environment"},"Deploy Compute to your cloud environment"),(0,r.kt)("p",null,"To install Compute in the cloud, you'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"subo")," tool to automatically install the Suborbital Compute Core into a Kubernetes cluster. You need to ensure you have some ",(0,r.kt)("strong",{parentName:"p"},"pre-requisites")," ready:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy a Kubernetes cluster into your cloud provider of choice (if you have a pre-existing one, that works too!).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"Ensure there is a storage class available in kubernetes"),". Some cloud providers such as AWS do not have a default storage class. See this great ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/charts/installation/storage.html#configuring-cluster-storage"},"GitLab guide on how to set up a storage class"),"."),(0,r.kt)("li",{parentName:"ul"},"If you would like assistance with storage, ",(0,r.kt)("a",{parentName:"li",href:"mailto:team@suborbital.dev"},"send us an email"),"!"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Install the ",(0,r.kt)("inlineCode",{parentName:"a"},"kubectl")," tool")," and authenticate it with the cluster you want to use."),(0,r.kt)("li",{parentName:"ol"},"Ensure you have access to modify your company's DNS records, as you need to create a domain name for the builder service (it must run on HTTPS, which requires a domain)"),(0,r.kt)("li",{parentName:"ol"},"Ensure you've run the ",(0,r.kt)("inlineCode",{parentName:"li"},"subo compute create token <email>")," command from ",(0,r.kt)("a",{parentName:"li",href:"../quickstart/1.-create-an-environment-token-with-subo.md"},"Create an environment token")," before attempting the install")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"subo")," creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"suborbital")," Kubernetes namespace and installs the ",(0,r.kt)("inlineCode",{parentName:"p"},"KEDA")," autoscaler. Don't worry about existing applications installed in the cluster; this won't affect them!"))),(0,r.kt)("p",null,"Once you have the pre-requisites in place, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"suborbital")," directory you created in the ",(0,r.kt)("a",{parentName:"p",href:"../quickstart/1.-create-an-environment-token-with-subo.md"},"quickstart guide")," and use ",(0,r.kt)("inlineCode",{parentName:"p"},"subo")," to install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"subo compute deploy core\n")),(0,r.kt)("p",null,"The tool will ask for your environment token and chosen domain name, and then automatically install everything into your cluster. The tool will attempt to auto-detect your cluster's storage class, but if it is unable, you will need to enter it manually."),(0,r.kt)("p",null,"After installation completes, use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to get details about the deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n suborbital\nkubectl get svc -n suborbital\n")),(0,r.kt)("h2",{id:"set-up-dns"},"Set up DNS"),(0,r.kt)("p",null,"When you deploy, a ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," is created for the builder called ",(0,r.kt)("inlineCode",{parentName:"p"},"scc-builder-service"),". You should wait until an external IP address is provisioned for the service (use the ",(0,r.kt)("inlineCode",{parentName:"p"},"get svc")," command above to check), and then create a DNS ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," record that matches the domain name you entered during setup. This will allow the builder to automatically provision a TLS certificate and connect with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/laura/39-replace-step-n-with-actual-headings-to-the-places-were-referring-to/compute/integrate-the-function-editor/code-editor"},"code editor")," securely."),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"The manifest files that were installed can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},".suborbital")," directory. If you would like to modify the deployment, edit the files and then deploy the changes by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f .suborbital/\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"As always, don't hesitate to reach out if you have any issues with this or any other aspect of Compute!")))}d.isMDXComponent=!0}}]);