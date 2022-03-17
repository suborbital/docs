"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[1689],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1766:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),a=["components"],i={},u="Testing Vektor Servers",l={unversionedId:"vektor/testing-vk-servers",id:"vektor/testing-vk-servers",title:"Testing Vektor Servers",description:"vtest is a powerful package for testing your Vektor servers without running an HTTP server bound to a port. vtest uses the standard Go testing package, which lets you integrate server route testing into your test suite. Let's explore a simple wordcount API server and add some tests to it.",source:"@site/docs/vektor/testing-vk-servers.md",sourceDirName:"vektor",slug:"/vektor/testing-vk-servers",permalink:"/docs/laura/75-combine-atmo-about-with-background/vektor/testing-vk-servers",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/vektor/testing-vk-servers.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{}},p=[{value:"The Server",id:"the-server",children:[],level:2},{value:"Writing Tests",id:"writing-tests",children:[],level:2},{value:"Running Tests",id:"running-tests",children:[],level:2},{value:"Documentation",id:"documentation",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-vektor-servers"},"Testing Vektor Servers"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vtest")," is a powerful package for testing your Vektor servers without running an HTTP server bound to a port. ",(0,o.kt)("inlineCode",{parentName:"p"},"vtest")," uses the standard Go ",(0,o.kt)("inlineCode",{parentName:"p"},"testing")," package, which lets you integrate server route testing into your test suite. Let's explore a simple wordcount API server and add some tests to it."),(0,o.kt)("p",null,"All of the code on this page is runnable and can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/vektor/tree/main/docs/examples/wordcount"},"GitHub"),". Some code samples have been slightly shortened or simplified for clarity."),(0,o.kt)("h2",{id:"the-server"},"The Server"),(0,o.kt)("p",null,"Our API consists of helper functions, a middleware function to call the helper functions, and a single ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," endpoint."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Wordcount")," type is a simple wrapper around ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," that adds some handy helper methods similar to the ubiquitous UNIX program ",(0,o.kt)("inlineCode",{parentName:"p"},"wc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="wordcount.go"',title:'"wordcount.go"'},'type Wordcount string\n\nfunc (w Wordcount) Words() int {\n    return len(strings.Fields(string(w)))\n}\n\nfunc (w Wordcount) Lines() int {\n    return len(strings.Split(string(w), "\\n"))\n}\n\nfunc (w Wordcount) Characters() int {\n    runes := []rune(w)\n    return len(runes)\n}\n')),(0,o.kt)("p",null,"There are a few interesting things to point out in our server that are relevant to testing. The ",(0,o.kt)("inlineCode",{parentName:"p"},"setupServer()")," function is reused later to setup our testing server in the same way it is used in ",(0,o.kt)("inlineCode",{parentName:"p"},"main()"),". This is useful if you have a more complex routing setup."),(0,o.kt)("p",null,"The other thing to note here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"WCResponse")," struct. We can reuse it directly to make writing tests a breeze."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="server.go"',title:'"server.go"'},'func setupServer() *vk.Server {\n    server := vk.New(vk.UseAppName("wordcount"), vk.UseHTTPPort(9090))\n    api := vk.Group("/api/v1").Before(createWordcountMiddleware)\n    api.POST("/wc", handlePost)\n\n    server.AddGroup(api)\n\n    return server\n}\n\nfunc createWordcountMiddleware(r *http.Request, ctx *vk.Ctx) error {\n    text, err := ioutil.ReadAll(r.Body)\n    if err != nil {\n        return err\n    }\n\n    wc := Wordcount(string(text))\n    ctx.Set(wordcountCtxKey, wc)\n\n    return nil\n}\n\ntype WCResponse struct {\n    Words      int `json:"words"`\n    Lines      int `json:"lines"`\n    Characters int `json:"chars"`\n}\n\nfunc NewWCResponse(wc Wordcount) *WCResponse {\n    return &WCResponse{\n        Words:      wc.Words(),\n        Lines:      wc.Lines(),\n        Characters: wc.Characters(),\n    }\n}\n\nfunc handlePost(r *http.Request, ctx *vk.Ctx) (interface{}, error) {\n    wc := ctx.Get(wordcountCtxKey).(Wordcount)\n\n    return vk.R(http.StatusOK, NewWCResponse(wc)), nil\n}\n\nfunc main() {\n    server := setupServer()\n\n    if err := server.Start(); err != nil {\n        log.Fatal(err)\n    }\n}\n')),(0,o.kt)("p",null,"As a quick check, let's run our wordcount server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd docs/examples/wordcount\ngo run .\n")),(0,o.kt)("p",null,"You should see the default logger output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'{"log_message":"(W) configured to use HTTP with no TLS","timestamp":"2021-08-16T10:45:46.273974908-04:00","level":2}\n{"log_message":"(I) starting wordcount ...","timestamp":"2021-08-16T10:45:46.274132326-04:00","level":3}\n{"log_message":"(I) serving on :9090","timestamp":"2021-08-16T10:45:46.274144389-04:00","level":3}\n')),(0,o.kt)("p",null,"Let's send it a request. In a separate terminal run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://localhost:9090/api/v1/wc -d "Hello, word count"\n')),(0,o.kt)("p",null,"Which should produce:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{"words":3,"lines":1,"chars":17}\n')),(0,o.kt)("h2",{id:"writing-tests"},"Writing Tests"),(0,o.kt)("p",null,"Now that our server seems to be running as expected,\nlet's write tests with the ",(0,o.kt)("inlineCode",{parentName:"p"},"vtest")," package."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"vtest")," package is part of Vektor and can be imported as\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/vektor/tree/main/vtest"},"github.com/suborbital/vektor/vtest"),"."),(0,o.kt)("p",null,"Tests written with ",(0,o.kt)("inlineCode",{parentName:"p"},"vtest")," use the usual Go testing idioms.\nIf you're not familiar with the ",(0,o.kt)("inlineCode",{parentName:"p"},"testing")," package, you can\n",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/doc/tutorial/add-a-test"},"read about it here"),"\nas part of the official Go tutorial."),(0,o.kt)("p",null,"Here is a complete test function for a Vektor server.\nLet's break it down."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func TestWordcount(t *testing.T) {\n    server := setupServer()\n\n    vt := vtest.New(server)\n\n    body := strings.NewReader("There\'s a starman waiting in the sky\\nHe\'d like to come and meet us")\n\n    req, _ := http.NewRequest(http.MethodPost, "/api/v1/wc", body)\n\n    vt.Do(req, t).\n        AssertStatus(http.StatusOK).\n        AssertJSON(WCResponse{\n            Words:      14,\n            Lines:      2,\n            Characters: 66,\n        })\n}\n')),(0,o.kt)("p",null,"The only thing different from creating a regular Vektor server is that we construct a ",(0,o.kt)("inlineCode",{parentName:"p"},"vtest.VTest")," struct with ",(0,o.kt)("inlineCode",{parentName:"p"},"vtest.New()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"server := setupServer()\nvt := vtest.New(server)\n")),(0,o.kt)("p",null,"Next, we create a normal HTTP request with Go standard library functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'body := strings.NewReader("Hello!")\nreq, err := http.NewRequest(http.MethodPost, "/api/v1/wc", body)\n')),(0,o.kt)("p",null,"And finally, the interesting part, passing the request\nto our ",(0,o.kt)("inlineCode",{parentName:"p"},"vt")," object. Note that we use the exact same\nstruct here as was used in the server itself. This is\nsuper useful if you have defined a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"MarshalJSON"),"\nmethod, for example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"vt.Do(req, t).\n    AssertStatus(http.StatusOK).\n    AssertJSON(WCResponse{\n        Words:      1,\n        Lines:      1,\n        Characters: 6,\n    })\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Do()")," returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"*Response")," object, as do each of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Assert")," methods of ",(0,o.kt)("inlineCode",{parentName:"p"},"Response"),", which lets us chain\nassertions together without rerunning the request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (vt *VTest) Do(req *http.Request, t *testing.T) *Response\n")),(0,o.kt)("h2",{id:"running-tests"},"Running Tests"),(0,o.kt)("p",null,"Just as you would test any other standard Go package, simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"go test . -v\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," ","(","verbose",")"," flag lets us see details of tests,\neven if they pass. One thing to note here is that certain assertion\nhelpers, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"AssertJSON()"),", perform more than one test.\n",(0,o.kt)("inlineCode",{parentName:"p"},"vtest")," creates subtests automatically for you in these cases.\nThese are shown indented below. Another example is the ",(0,o.kt)("inlineCode",{parentName:"p"},"AssertHeaders()"),"\nhelper, which performs a nested subtest for each header."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vtest")," tries to stick to standard Go testing idioms\nwhile making common testing tasks easy to do."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"=== RUN   TestWordcount\n=== RUN   TestWordcount/status\n=== RUN   TestWordcount/JSON\n=== RUN   TestWordcount/JSON/Content-Type\n=== RUN   TestWordcount/JSON/body\n--- PASS: TestWordcount (0.00s)\n    --- PASS: TestWordcount/status (0.00s)\n    --- PASS: TestWordcount/JSON (0.00s)\n        --- PASS: TestWordcount/JSON/Content-Type (0.00s)\n        --- PASS: TestWordcount/JSON/body (0.00s)\nPASS\nok      github.com/suborbital/vektor/docs/examples/wordcount    0.003s\n")),(0,o.kt)("p",null,"All of our tests have passed. Great!"),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Further documentation for ",(0,o.kt)("inlineCode",{parentName:"p"},"vtest")," and Vektor itself can\nalways be found in ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/suborbital/vektor/vtest#Response"},"go doc")," online or on the command line.\nThere are also more examples in the ",(0,o.kt)("inlineCode",{parentName:"p"},"vk/test")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"vtest/")," directories."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go doc github.com/suborbital/vektor/vtest Response\n")))}d.isMDXComponent=!0}}]);