"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3630],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(u,".").concat(b)]||d[b]||p[b]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7816:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},u="Usage",s={unversionedId:"subo/usage",id:"subo/usage",title:"Usage",description:"Subo includes the WebAssembly toolchain for Suborbital projects.",source:"@site/docs/subo/usage.md",sourceDirName:"subo",slug:"/subo/usage",permalink:"/docs/laura/add-wasm-ed-links/subo/usage",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/subo/usage.md",tags:[],version:"current",lastUpdatedAt:1650471156,formattedLastUpdatedAt:"4/20/2022",frontMatter:{},sidebar:"docs",previous:{title:"Subo",permalink:"/docs/laura/add-wasm-ed-links/subo/"},next:{title:"Reactr",permalink:"/docs/laura/add-wasm-ed-links/reactr/"}},c={},p=[{value:"Create a project",id:"create-a-project",level:2},{value:"Create a Runnable",id:"create-a-runnable",level:2},{value:"Building Wasm Runnables",id:"building-wasm-runnables",level:2},{value:"Bundles",id:"bundles",level:2},{value:"Building without Docker",id:"building-without-docker",level:2},{value:"Suborbital Runnable API",id:"suborbital-runnable-api",level:2}],d={toc:p};function b(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Subo includes the WebAssembly toolchain for Suborbital projects."),(0,l.kt)("p",null,"The Suborbital Development Platform aims for Wasm to be a first-class citizen. ",(0,l.kt)("inlineCode",{parentName:"p"},"subo")," is the toolchain for building Wasm Runnables for ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suborbital/reactr"},"Reactr")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"subo")," CLI can build Wasm Runnables, and can package several Wasm Runnables into a deployable Bundle."),(0,l.kt)("p",null,"Building a Runnable in languages other than Go is designed to be simple and powerful:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'impl runnable::Runnable for Example {\n    fn run(&self, input: Vec<u8>) -> Option<Vec<u8>> {\n        let in_string = String::from_utf8(input).unwrap();\n    \n        Some(String::from(format!("hello {}", in_string)).as_bytes().to_vec())\n    }\n}\n')),(0,l.kt)("p",null,"subo will package your Runnable into a Wasm module that can be used by Reactr or Atmo and run just like any other Runnable! You can see examples of Runnables in the ",(0,l.kt)("a",{parentName:"p",href:"../test-project"},"test project"),"."),(0,l.kt)("h2",{id:"create-a-project"},"Create a project"),(0,l.kt)("p",null,"To create a new project for Atmo or Reactr, use ",(0,l.kt)("inlineCode",{parentName:"p"},"subo create project <name>"),". This will create a new folder which contains a Directive.yaml and an example Runnable."),(0,l.kt)("p",null,"Full options for ",(0,l.kt)("inlineCode",{parentName:"p"},"create project"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'create a new project for Atmo or Reactr\n\nUsage:\n  subo create project <name> [flags]\n\nFlags:\n      --branch string      git branch to download templates from (default "main")\n  -h, --help               help for project\n      --update-templates   update with the newest templates\n')),(0,l.kt)("h2",{id:"create-a-runnable"},"Create a Runnable"),(0,l.kt)("p",null,"To create a new Runnable, use the create runnable command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> subo create runnable <name>\n")),(0,l.kt)("p",null,"Rust is chosen by default, but if you prefer Swift, just pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--lang=swift"),"! You can now use the Runnable API to build your function. A directory is created for each Runnable, and each contains a ",(0,l.kt)("inlineCode",{parentName:"p"},".runnable.yaml")," file that includes some metadata."),(0,l.kt)("p",null,"The full options for ",(0,l.kt)("inlineCode",{parentName:"p"},"create runnable"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Usage:\n  subo create <name> [flags]\n\nFlags:\n      --branch string      git branch to download templates from (default "main")\n      --dir string         the directory to put the new runnable in (default "/Users/cohix-16/Workspaces/suborbital/subo")\n  -h, --help               help for create\n      --lang string        the language of the new runnable (default "rust")\n      --namespace string   the namespace for the new runnable (default "default")\n      --update-templates   update with the newest runnable templates\n')),(0,l.kt)("h2",{id:"building-wasm-runnables"},"Building Wasm Runnables"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"It is reccomended that Docker be installed to build Wasm Runnables. See below if you do not have Docker installed.")),(0,l.kt)("p",null,"To build your Runnable into a Wasm module for Reactr or Atmo, use the build command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> subo build .\n")),(0,l.kt)("p",null,"If the current working directory is a Runnable, subo will build it. If the current directory contains many runnables, subo will build them all. Any directory with a ",(0,l.kt)("inlineCode",{parentName:"p"},".runnable.yaml")," file is considered a Runnable and will be built. Building Runnables is not fully tested on Windows."),(0,l.kt)("h2",{id:"bundles"},"Bundles"),(0,l.kt)("p",null,"By default, subo will write all of the Runnables in the current directory into a Bundle. Atmo uses Runnable Bundles to help you build powerful web services by composing Runnables declaratively. If you want to skip bundling, you can pass ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-bundle")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"subo build")),(0,l.kt)("p",null,"The resulting Bundle can also be used with a Reactr instance by calling ",(0,l.kt)("inlineCode",{parentName:"p"},"h.HandleBundle({path/to/bundle})"),". See the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suborbital/reactr/blob/master/docs/wasm.md"},"Reactr Wasm instructions")," for details."),(0,l.kt)("p",null,"The full options for ",(0,l.kt)("inlineCode",{parentName:"p"},"build"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Usage:\n  subo build [dir] [flags]\n\nFlags:\n      --builder-tag string   use the provided tag for builder images\n      --docker               build your project's Dockerfile. It will be tagged {identifier}:{appVersion}\n  -h, --help                 help for build\n      --langs strings        build only Runnables for the listed languages (comma-separated)\n      --make string          execute the provided make target before building the project Bundle\n      --mountpath string     if passed, the Docker builders will mount their volumes at the provided path\n      --native               use native (locally installed) toolchain rather than Docker\n      --no-bundle            if passed, a .wasm.zip Bundle will not be generated\n      --relpath subo build   if passed, the Docker builders will run subo build using the provided path, relative to '--mountpath'\n")),(0,l.kt)("h2",{id:"building-without-docker"},"Building without Docker"),(0,l.kt)("p",null,"If you prefer not to use Docker, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--native")," flag. This will cause subo to use your local machine's toolchain to build Runnables instead of Docker containers. You will need to install the toolchains yourself:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rust: Install the latest Rust toolchain and ",(0,l.kt)("a",{parentName:"li",href:"https://bytecodealliance.github.io/cargo-wasi/steps.html#managing-the-wasm32-wasi-target"},"the additional ",(0,l.kt)("inlineCode",{parentName:"a"},"wasm32-wasi")," target"),"."),(0,l.kt)("li",{parentName:"ul"},"Swift: Install the ",(0,l.kt)("a",{parentName:"li",href:"https://book.swiftwasm.org/getting-started/setup.html"},"SwiftWasm")," toolchain. If using macOS, ensure XCode developer tools are installed (xcrun is required).")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"subo")," is continually evolving alongside ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suborbital/reactr"},"Reactr")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suborbital/atmo"},"Atmo"),"."),(0,l.kt)("h2",{id:"suborbital-runnable-api"},"Suborbital Runnable API"),(0,l.kt)("p",null,"Reactr and Atmo provide an ",(0,l.kt)("a",{parentName:"p",href:"https://atmo.suborbital.dev/runnable-api/introduction"},"API")," which gives Wasm Runnables the ability to access resources and communicate with the host application. This API currently has capabilities such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ability to make HTTP requests"),(0,l.kt)("li",{parentName:"ul"},"Structured logging"),(0,l.kt)("li",{parentName:"ul"},"Access to persistent cache"),(0,l.kt)("li",{parentName:"ul"},"Access to a static filesystem")),(0,l.kt)("p",null,"This API will soon have:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ability to render templates"),(0,l.kt)("li",{parentName:"ul"},"Database access"),(0,l.kt)("li",{parentName:"ul"},"Access to blob storage")))}b.isMDXComponent=!0}}]);