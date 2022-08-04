"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[6200],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||r;return n?o.createElement(k,a(a({ref:t},c),{},{components:n})):o.createElement(k,a({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8457:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var o=n(7462),l=n(3366),r=(n(7294),n(3905)),a=["components"],i={},u="Local Deployment with Minikube",p={unversionedId:"compute/local-deployment/minikube",id:"compute/local-deployment/minikube",title:"Local Deployment with Minikube",description:"It\u2019s possible to deploy a Compute environment to a local environment using a local Kubernetes cluster.",source:"@site/docs/compute/local-deployment/minikube.md",sourceDirName:"compute/local-deployment",slug:"/compute/local-deployment/minikube",permalink:"/docs/feature/local-deployment/compute/local-deployment/minikube",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/local-deployment/minikube.md",tags:[],version:"current",lastUpdatedAt:1659649974,formattedLastUpdatedAt:"8/4/2022",frontMatter:{},sidebar:"docs",previous:{title:"Deploy Compute to your cloud environment",permalink:"/docs/feature/local-deployment/compute/cloud-deployment/install-compute-in-your-cloud-environment"},next:{title:"Atmo",permalink:"/docs/feature/local-deployment/atmo/"}},c={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create a folder for the environment",id:"1-create-a-folder-for-the-environment",level:3},{value:"2. Start up our Kubernetes cluster",id:"2-start-up-our-kubernetes-cluster",level:3},{value:"3. Expose our cluster to the internet with ngrok",id:"3-expose-our-cluster-to-the-internet-with-ngrok",level:3},{value:"4. Generate your Compute manifests",id:"4-generate-your-compute-manifests",level:3},{value:"5. Disable TLS checks in the Compute environment",id:"5-disable-tls-checks-in-the-compute-environment",level:3},{value:"6. Deploy to your cluster",id:"6-deploy-to-your-cluster",level:3},{value:"7. Setup minikube tunneling",id:"7-setup-minikube-tunneling",level:3},{value:"8. Create an editor token",id:"8-create-an-editor-token",level:3},{value:"9. Try out the function editor",id:"9-try-out-the-function-editor",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-deployment-with-minikube"},"Local Deployment with Minikube"),(0,r.kt)("p",null,"It\u2019s possible to deploy a Compute environment to a local environment using a local Kubernetes cluster."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ngrok.com/download"},"ngrok")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/suborbital/subo#installing"},"subo"))),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-create-a-folder-for-the-environment"},"1. Create a folder for the environment"),(0,r.kt)("p",null,"This is a temporary place where we\u2019ll create and configure our Compute environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-compute; cd my-compute\n")),(0,r.kt)("h3",{id:"2-start-up-our-kubernetes-cluster"},"2. Start up our Kubernetes cluster"),(0,r.kt)("p",null,"Kubernetes clusters usually live on the cloud. However, with minikube, we can create a local one to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\n")),(0,r.kt)("h3",{id:"3-expose-our-cluster-to-the-internet-with-ngrok"},"3. Expose our cluster to the internet with ngrok"),(0,r.kt)("p",null,"This command will forward all requests to a randomly-generated URL to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:80")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http http://localhost\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Jot down that URL generated by ngrok! It\u2019ll look something like ",(0,r.kt)("a",{parentName:"p",href:"https://84925795ffae.eu.ngrok.io/"},"https://84925795ffae.eu.ngrok.io"))),(0,r.kt)("h3",{id:"4-generate-your-compute-manifests"},"4. Generate your Compute manifests"),(0,r.kt)("p",null,"Next we\u2019ll be using subo to generate our Kubernetes manifest files!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"subo compute deploy core --dryrun\n")),(0,r.kt)("p",null,"You will be asked for a domain. Please make sure to enter your domain from ngrok."),(0,r.kt)("p",null,"These will now live in the ",(0,r.kt)("inlineCode",{parentName:"p"},".suborbital/")," folder."),(0,r.kt)("h3",{id:"5-disable-tls-checks-in-the-compute-environment"},"5. Disable TLS checks in the Compute environment"),(0,r.kt)("p",null,"Open up ",(0,r.kt)("inlineCode",{parentName:"p"},".suborbital/scc-controlplane-deployment.yaml")," in your editor of choice, and make the following changes:"),(0,r.kt)("p",null,"Under the Builder Container (Line 51):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: builder\n          image: suborbital/scc-builder:v0.3.1\n          command: ["builder"]\n\n          ports:\n            - containerPort: 8080\n            - containerPort: 8443\n\n          env:\n            - name: SCC_DOMAIN\n              value: "<YOUR_NGROK_DOMAIN>"\n\n            - name: SCC_TLS_PORT\n              value: "8443"\n\n            - name: SCC_LOG_LEVEL\n              value: "info"\n\n            - name: SCC_CONTROL_PLANE\n              value: "scc-controlplane-service:8081"\n\n          volumeMounts:\n            - mountPath: "/home/scn"\n              name: controlplane-storage\n')),(0,r.kt)("p",null,"Delete the following line:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"delete containerPort: 8443")),(0,r.kt)("p",null,"Delete the following key-value pair:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: SCC_DOMAIN\n  value: "<YOUR_NGROK_DOMAIN>"\n')),(0,r.kt)("p",null,"Replacing the following key-value pair:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: SCC_TLS_PORT\n  value: "8443"\n')),(0,r.kt)("p",null,"With the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: SCC_HTTP_PORT\nvalue: "8080"\n')),(0,r.kt)("p",null,"Under the ",(0,r.kt)("inlineCode",{parentName:"p"},"scc-builder-service")," in line 124:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  namespace: suborbital\n  name: scc-builder-service\nspec:\n  selector:\n    app: scc-controlplane\n  ports:\n    - protocol: TCP\n      name: challenge\n      port: 80\n      targetPort: 8080\n    - protocol: TCP\n      name: https\n      port: 443\n      targetPort: 8443\n  type: LoadBalancer\n")),(0,r.kt)("p",null,"Remove the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- protocol: TCP\n  name: https\n  port: 443\n  targetPort: 8443\n")),(0,r.kt)("h3",{id:"6-deploy-to-your-cluster"},"6. Deploy to your cluster"),(0,r.kt)("p",null,"Run the following subo command to deploy Compute to your cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"subo compute deploy core\n")),(0,r.kt)("h3",{id:"7-setup-minikube-tunneling"},"7. Setup minikube tunneling"),(0,r.kt)("p",null,"Let\u2019s tell minikube to forward requests to port 80 to our cluster!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube tunnel\n")),(0,r.kt)("h3",{id:"8-create-an-editor-token"},"8. Create an editor token"),(0,r.kt)("p",null,"In order to test our editor, we\u2019re going to come up with a function name, and create a token so we can access it!"),(0,r.kt)("p",null,"This can only be done as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.suborbital.dev/compute/integrate-the-function-editor/code-editor"},"an API call to the control plane service")," from within your cluster. Since we\u2019re currently not running an app in our cluster, we\u2019ll just make the call from within!"),(0,r.kt)("p",null,"First, we\u2019ll need the name of our control plane pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n suborbital\n")),(0,r.kt)("p",null,"Your output will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                           READY   STATUS    RESTARTS   AGE\nscc-atmo-deployment-7bfb9d76c6-sv5dr           1/1     Running   0          27s\nscc-controlplane-deployment-5699f779f7-xmkhr   2/2     Running   0          27s\n")),(0,r.kt)("p",null,"Let\u2019s take that full name of our ",(0,r.kt)("inlineCode",{parentName:"p"},"scc-controlplane-deployment")," pod and start a bash session inside it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -n suborbital -it scc-controlplane-deployment-<REST OF POD CODENAME> -- bash\n")),(0,r.kt)("p",null,"Would you look at that, we\u2019re inside our cluster now!"),(0,r.kt)("p",null,"Let\u2019s install ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt update; apt install curl\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," installed, we can now get our editor token for testing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl [http://local.suborbital.network:8081/api/v1/token/<IDENT>/default/](http://local.suborbital.network:8081/api/v1/token/com.acmeco.gr9fas97234b/default/httpget)<FUNCTION_NAME>\n")),(0,r.kt)("p",null,"In which:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENT"),": Customer identity, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.example.12345")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FUNCTION_NAME")," : A name for your function")),(0,r.kt)("p",null,"This will give you a JSON response with a token. Let\u2019s copy it!"),(0,r.kt)("h3",{id:"9-try-out-the-function-editor"},"9. Try out the function editor"),(0,r.kt)("p",null,"The function editor is available through ",(0,r.kt)("a",{parentName:"p",href:"https://docs.suborbital.dev/compute/integrate-the-function-editor/code-editor"},"building a specific URL"),". We can do that now that we have all the ingredients. In your browser, try opening up the following URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[https://editor.suborbital.network/?builder=https://<NGROK_DOMAIN>&token=<EDITOR_TOKEN>&ident=<IDENT>&fn=](https://editor.suborbital.network/?builder=https://4515-62-178-0-213.eu.ngrok.io&token=StIsWXsIAPJsjVlxcgItgvWS&ident=com.acmeco.gr9fas97234b&fn=ramono)<FUNCTION_NAME>&template=<LANGUAGE_TEMPLATE>\n")),(0,r.kt)("p",null,"In which:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NGROK_DOMAIN"),": The domain generated by ",(0,r.kt)("inlineCode",{parentName:"li"},"ngrok")," in step 3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EDITOR_TOKEN"),": The token generated by the control plane API in step 8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDENT"),": Customer identity, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.example.12345")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FUNCTION_NAME")," : A name for your function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LANGUAGE_TEMPLATE"),": ",(0,r.kt)("a",{parentName:"li",href:"https://docs.suborbital.dev/compute/integrate-the-function-editor/code-editor#configuration"},"A template to be prefilled")," when opening the editor for a new function, defaulting to ",(0,r.kt)("inlineCode",{parentName:"li"},"AssemblyScript"),".")))}d.isMDXComponent=!0}}]);