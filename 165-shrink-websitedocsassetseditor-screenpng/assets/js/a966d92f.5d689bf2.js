"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i="Getting started with Compute",l={unversionedId:"compute/get-started",id:"compute/get-started",title:"Getting started with Compute",description:"Installation",source:"@site/docs/compute/get-started.md",sourceDirName:"compute",slug:"/compute/get-started",permalink:"/docs/165-shrink-websitedocsassetseditor-screenpng/compute/get-started",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/get-started.md",tags:[],version:"current",lastUpdatedAt:1660843970,formattedLastUpdatedAt:"Aug 18, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Suborbital Compute",permalink:"/docs/165-shrink-websitedocsassetseditor-screenpng/compute/"},next:{title:"Using Compute's APIs",permalink:"/docs/165-shrink-websitedocsassetseditor-screenpng/compute/using-api"}},u={},s=[{value:"Installation",id:"installation",level:2},{value:"Install Subo: the Compute CLI",id:"install-subo-the-compute-cli",level:3},{value:"Generate your token",id:"generate-your-token",level:2},{value:"Run Compute locally",id:"run-compute-locally",level:2},{value:"Prepare your local environment",id:"prepare-your-local-environment",level:3},{value:"Start Compute",id:"start-compute",level:3},{value:"Run Compute",id:"run-compute",level:3},{value:"Meet the Compute editor",id:"meet-the-compute-editor",level:2},{value:"Editor URLs",id:"editor-urls",level:4},{value:"Your first function",id:"your-first-function",level:2},{value:"Executing functions",id:"executing-functions",level:3},{value:"Connect your application",id:"connect-your-application",level:2}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-compute"},"Getting started with Compute"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To use Compute, you'll need an environment token and the Subo command line\ntool. The environment token allows Compute to authenticate with\nour service that manages metadata storage, telemetry, and more."),(0,r.kt)("h3",{id:"install-subo-the-compute-cli"},"Install Subo: the Compute CLI"),(0,r.kt)("p",null,"If you use macOS, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," to install the\n",(0,r.kt)("inlineCode",{parentName:"p"},"subo")," command line tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap suborbital/subo\nbrew install subo\n")),(0,r.kt)("p",null,"Note: this may take a few minutes! Next, run ",(0,r.kt)("inlineCode",{parentName:"p"},"subo --version")," to ensure the\ninstallation was successful. "),(0,r.kt)("p",null,"To install on Linux (or macOS without Homebrew), you can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo/releases"},"download Subo directly"),"."),(0,r.kt)("h2",{id:"generate-your-token"},"Generate your token"),(0,r.kt)("p",null,"You can get a Compute Environment token either with our ",(0,r.kt)("a",{parentName:"p",href:"https://suborbital.network/"},"environment token generator web app")," or with the ",(0,r.kt)("inlineCode",{parentName:"p"},"subo")," command line tool."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The domain of your email address should match the ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," you\nconfigure for Compute; i.e., if your email is ",(0,r.kt)("inlineCode",{parentName:"p"},"laika@example.com"),", your\nCompute environment would be called ",(0,r.kt)("inlineCode",{parentName:"p"},"com.example"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/165-shrink-websitedocsassetseditor-screenpng/compute/customizing-functions/fully-qualified-function-names"},"Fully-qualified\nfunction names"),"\nfor more\ninformation.")),(0,r.kt)("p",null,"To create your token, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"subo compute create token <email>\n")),(0,r.kt)("p",null,"A verification code will be sent to your email address, and the token will be\nused to authenticate you and link your Compute installation to you."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Subo will print out your token in your terminal, and cache it for use in\nsubsequent steps.")),(0,r.kt)("p",null,"Keep your environment token safe (store it in your password manager), and\nonly use it when running or installing Compute. If you lose it, just repeat\nthis token generation process."),(0,r.kt)("h2",{id:"run-compute-locally"},"Run Compute locally"),(0,r.kt)("p",null,"To run Compute locally, you'll use the Subo CLI and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com"},"Docker"),", both of which must be installed before continuing."),(0,r.kt)("h3",{id:"prepare-your-local-environment"},"Prepare your local environment"),(0,r.kt)("p",null,"The Subo CLI will create some files on disk to set up your local deployment,\nso get started by creating a directory somewhere on your filesystem. In the\nexample below, we'll name our directory ",(0,r.kt)("inlineCode",{parentName:"p"},"suborbital"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir suborbital\ncd suborbital\n")),(0,r.kt)("h3",{id:"start-compute"},"Start Compute"),(0,r.kt)("p",null,"Next, use Subo to start your local Compute Core instance. Make sure to do\nthis within the same directory you created above! You can verify that\nyou're in the correct directory by verifying that it contains the\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"subo compute deploy core --local\n")),(0,r.kt)("p",null,"You may be asked to enter your Environment Token, and then Subo will use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," to launch your Compute Core instance automatically. Compute runs in the background by default. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose logs -f")," to view the logs of the running containers. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose down")," to terminate the containers."),(0,r.kt)("h3",{id:"run-compute"},"Run Compute"),(0,r.kt)("p",null,"When you run Compute, it will wait for you to press enter to start a REPL where you can add or edit functions (see ",(0,r.kt)("a",{parentName:"p",href:"get-started#meet-the-compute-editor"},"Meet the Compute Editor"),"). In the example below, we'll create a function named ",(0,r.kt)("inlineCode",{parentName:"p"},"hello"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2705 DONE: ready to start installation\n\u23e9 START: installing...\n\u25b6\ufe0f docker-compose up -d\nContainer suborbital-scc-control-plane-1  Recreate\nContainer suborbital-scc-control-plane-1  Recreated\nContainer suborbital-scc-atmo-1  Recreate\nContainer suborbital-scc-atmo-1  Recreated\nContainer suborbital-scc-control-plane-1  Starting\nContainer suborbital-scc-builder-1  Starting\nContainer suborbital-scc-control-plane-1  Started\nContainer suborbital-scc-builder-1  Started\nContainer suborbital-scc-atmo-1  Starting\nContainer suborbital-scc-atmo-1  Started\n\u2139\ufe0f  use `docker ps` and `docker-compose logs` to check deployment status\n\nPROXY: local tunnel to function editor started\n\n\nPress enter to launch the local Compute REPL...\n\n\n1. Create or edit a function\n\nChoose an option: 1\n\nTo create or edit a function, enter its name (or FQFN): hello\n")),(0,r.kt)("p",null,"This will allow you to create functions and use the Compute editor locally\nwhile you work on integrating your application. Follow the instructions in the REPL to create your first function."),(0,r.kt)("h2",{id:"meet-the-compute-editor"},"Meet the Compute editor"),(0,r.kt)("p",null,"The Suborbital Compute function editor uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/165-shrink-websitedocsassetseditor-screenpng/compute/using-api"},"Compute's\nAPIs")," to provide a\nlow-friction environment for your users to write, build, test, and deploy\nfunctions to your Compute an instance in a single place.  Alternatively,\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://suborbital-compute.readme.io/reference/api-reference"},"Builder API")," can be used programmatically, if that better\nsuits your use case. "),(0,r.kt)("p",null,"A quick way to try the editor is to use the REPL built into the Subo CLI\nintroduced above in ",(0,r.kt)("a",{parentName:"p",href:"get-started#run-compute-locally"},"Run Compute Locally"),".\nThe\nSubo REPL includes a proxy that makes it easy to connect the hosted editor to your local Compute installation."),(0,r.kt)("p",null,"By default, it makes the editor accessible on ",(0,r.kt)("a",{parentName:"p",href:"http://local.suborbital.network:80/"},(0,r.kt)("inlineCode",{parentName:"a"},"local.suborbital.network:80")),". The editor proxy port can be configured with the ",(0,r.kt)("inlineCode",{parentName:"p"},"subo compute deploy core --local --proxy-port <some port>")," option. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"local.suborbital.network")," subdomain points to ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),", i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),". You may need to substitute a different hostname or IP address depending on your particular network setup."),(0,r.kt)("h4",{id:"editor-urls"},"Editor URLs"),(0,r.kt)("p",null,"To edit a function via the editor, you\u2014or more likely your application\u2014must build a valid URL to pass to the editor. When working locally, the Subo REPL can generate editor URLs for you automatically."),(0,r.kt)("p",null,"In a ",(0,r.kt)("strong",{parentName:"p"},"development environment"),", the URL should have these components:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://local.suborbital.network/?builder=http://local.suborbital.network:8082&token=ogbWUbzCZaYLga3GggP0cxht&ident=com.suborbital.acmeco&namespace=default&fn=hello\n")),(0,r.kt)("p",null,"In a ",(0,r.kt)("strong",{parentName:"p"},"production environment"),", the URL may look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://editor.suborbital.network?builder=https://builder.acmeco.com&token=K78as0aslwi30l8h5lbF4lS7&ident=com.suborbital.customer&fn=add-record&template=rust   \n")),(0,r.kt)("p",null,"The important differences to note between these URLs are the local and public hostnames and HTTP and HTTPS schemes for the editor itself and the ",(0,r.kt)("inlineCode",{parentName:"p"},"&builder=")," parameter."),(0,r.kt)("p",null,"For more information, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/165-shrink-websitedocsassetseditor-screenpng/compute/customizing-functions/code-editor#configuration"},"complete documentation for each of the\nURL parameters"),"."),(0,r.kt)("h2",{id:"your-first-function"},"Your first function"),(0,r.kt)("p",null,"Once inside the editor, you can edit, build, test, and deploy your\nfunctions all in one place. By default, the editor will load pre-populated\nwith the greeting function below. We can use it to run the editor for the\nfirst time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { log } from \'\'@suborbital/runnable";\n\nexport const run = (input) => {\n    let message = "Hello, " + input;\n    \n    log.info(message);\n    return message;\n};\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The function provided is complete, so we can just click "Build"'),(0,r.kt)("li",{parentName:"ul"},'In the "TEST" field, add some text. Here, we\'ve added "new\nSuborbital user!"'),(0,r.kt)("li",{parentName:"ul"},'Click "Run test"'),(0,r.kt)("li",{parentName:"ul"},'Toward the bottom of the editor, click "TEST RESULTS". There\'s our\ngreeting!')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Editor displaying the greeting function above with the test output &#39;Hello, new Suborbital user!&#39;",src:n(8897).Z,width:"1868",height:"1050"})),(0,r.kt)("h3",{id:"executing-functions"},"Executing functions"),(0,r.kt)("p",null,"Once your first function has been built and deployed, it can be run with a request to the Execution API. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ENV_TOKEN=<your previously generated token>\n\ncurl http://local.suborbital.network:8080/com.suborbital.acmeco/default/hello/v1.0.0 \\\n     --header \"Authorization: Bearer $ENV_TOKEN\" \\\n     -d 'my friend'\n\nhello, my friend\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're invoking the Test API, you'll need to import\nthe ",(0,r.kt)("a",{parentName:"p",href:"./customizing-functions/code-editor#editor-token.md"},"Editor Token"),"\ninstead of the\nEnvironment token in the code snippet above.")),(0,r.kt)("h2",{id:"connect-your-application"},"Connect your application"),(0,r.kt)("p",null,"Now that you've set up Compute and created your first function, you can use\n",(0,r.kt)("a",{parentName:"p",href:"/docs/165-shrink-websitedocsassetseditor-screenpng/compute/using-api"},"Compute's APIs")," to start integrating functions into your\napplication."))}p.isMDXComponent=!0},8897:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/editor-screen-35b2739bd6f6940c24601e08ffa3f8fa.png"}}]);