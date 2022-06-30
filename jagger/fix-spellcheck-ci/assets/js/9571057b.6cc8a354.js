"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2660],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2354:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={},u="Using Compute from Go",c={unversionedId:"compute/quickstart/client-libraries/golang",id:"compute/quickstart/client-libraries/golang",title:"Using Compute from Go",description:"The compute-go library helps you easily interact with the Compute API from your Go application. Suborbital Compute is designed to run alongside your application in a Kubernetes or Docker Compose environment.",source:"@site/docs/compute/quickstart/client-libraries/golang.md",sourceDirName:"compute/quickstart/client-libraries",slug:"/compute/quickstart/client-libraries/golang",permalink:"/docs/jagger/fix-spellcheck-ci/compute/quickstart/client-libraries/golang",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/compute/quickstart/client-libraries/golang.md",tags:[],version:"current",lastUpdatedAt:1647971013,formattedLastUpdatedAt:"3/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Using Compute from JavaScript or TypeScript",permalink:"/docs/jagger/fix-spellcheck-ci/compute/quickstart/client-libraries/nodejs"},next:{title:"Data Plane vs Control Plane",permalink:"/docs/jagger/fix-spellcheck-ci/compute/concepts/data-plane-vs-control-plane"}},p={},s=[{value:"Documentation",id:"documentation",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Build and run a function",id:"build-and-run-a-function",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-compute-from-go"},"Using Compute from Go"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/compute-go"},(0,a.kt)("inlineCode",{parentName:"a"},"compute-go")," library")," helps you easily interact with the Compute API from your Go application. Suborbital Compute is designed to run alongside your application in a Kubernetes or Docker Compose environment."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"Like most Go packages, you can find ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/suborbital/compute-go#section-readme"},"complete and up to date technical documentation for ",(0,a.kt)("inlineCode",{parentName:"a"},"compute-go")," on ",(0,a.kt)("inlineCode",{parentName:"a"},"pkg.go.dev")),". Those docs are generated from inline comments in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/compute-go"},(0,a.kt)("inlineCode",{parentName:"a"},"compute-go")," source code"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In a directory with a ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod")," file, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/suborbital/compute-go@latest\n")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This example sets up a basic client with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.suborbital.dev/compute/quickstart/create-an-environment-token-with-subo#generate-your-token"},'token generated in "Setup"')," or with the web app. The ",(0,a.kt)("inlineCode",{parentName:"p"},"compute.Client")," object created here assumes that Compute is running on the same host on its default ports. Feel free to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/compute-go/blob/main/examples/app"},"check out the code for this example!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="client.go"',title:'"client.go"'},'package main\n\nimport (\n    "os"\n\n    "github.com/suborbital/compute-go"\n)\n\nfunc client() *compute.Client {\n    token, _ := os.LookupEnv("SCC_ENV_TOKEN")\n    client, _ := compute.NewClient(compute.LocalConfig(), token)\n\n    return client\n}\n')),(0,a.kt)("h3",{id:"build-and-run-a-function"},"Build and run a function"),(0,a.kt)("p",null,"We can now integrate Compute into an application. ",(0,a.kt)("inlineCode",{parentName:"p"},"compute-go")," has access to all of Compute's APIs. It can run builds, list existing functions, run tests, and execute functions."),(0,a.kt)("p",null,"Behind the scenes, ",(0,a.kt)("inlineCode",{parentName:"p"},"compute-go")," manages authentication, so you don't have to worry about setting the right HTTP headers when interacting with the Compute API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="app.go"',title:'"app.go"'},'package main\n\nimport (\n    "log"\n\n    "github.com/suborbital/compute-go"\n)\n\nfunc main() {\n    client := client()\n\n    // This is a local reference to some Runnable. Nothing has run in Compute at this point.\n    runnable := compute.NewRunnable("com.suborbital", "acmeco", "default", "rs-hello-world", "rust")\n\n    // Request template source code for the above Runnable.\n    template, _ := client.BuilderTemplate(runnable)\n\n    // Log the default \'hello world\' Rust template to stdout\n    log.Println(template.Contents)\n\n    // Run a remote build for the provided Runnable and the unmodified \'hello world\'\n    // template source code.\n    build, _ := client.BuildFunctionString(runnable, template.Contents)\n\n    if !build.Succeeded {\n        // Log the compiler output to see why the build failed\n        log.Fatal(build.OutputLog)\n    }\n\n    // Deploy the function (the runnable\'s .Version field is adjusted here)\n    client.PromoteDraft(runnable)\n\n    // Execute the function\n    result, _ := client.ExecString(runnable, "world!")\n\n    // Log the execution output\n    log.Println(string(result))\n}\n')),(0,a.kt)("p",null,"Now that the Runnable has been built, it can be executed as much as you like without rebuilding using ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/suborbital/compute-go#Client.Exec"},(0,a.kt)("inlineCode",{parentName:"a"},"client.Exec"))," or ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/suborbital/compute-go#Client.ExecString"},(0,a.kt)("inlineCode",{parentName:"a"},"client.ExecString")),"."))}d.isMDXComponent=!0}}]);