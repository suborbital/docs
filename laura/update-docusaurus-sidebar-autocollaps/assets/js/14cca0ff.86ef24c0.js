"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[8472],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),k=a,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9851:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={pagination_prev:null},s="Vektor",d={unversionedId:"vektor/vektor",id:"vektor/vektor",title:"Vektor",description:"The opinionated, production-grade server framework for Go",source:"@site/docs/vektor/vektor.md",sourceDirName:"vektor",slug:"/vektor/",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/vektor/",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/vektor/vektor.md",tags:[],version:"current",lastUpdatedAt:1652725569,formattedLastUpdatedAt:"5/16/2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"Vektor",permalink:"/docs/laura/update-docusaurus-sidebar-autocollaps/vektor/"}},p={},u=[{value:"The opinionated, production-grade server framework for Go",id:"the-opinionated-production-grade-server-framework-for-go",level:3},{value:"The server object",id:"the-server-object",level:2},{value:"Handler functions",id:"handler-functions",level:2},{value:"WebSockets",id:"websockets",level:3},{value:"Mounting routes",id:"mounting-routes",level:2},{value:"Route groups",id:"route-groups",level:2},{value:"Middleware and Afterware",id:"middleware-and-afterware",level:2},{value:"Response types",id:"response-types",level:2},{value:"Response handling rules",id:"response-handling-rules",level:2},{value:"Successful responses (i.e. the <code>interface{}</code> returned by handler functions):",id:"successful-responses-ie-the-interface-returned-by-handler-functions",level:3},{value:"Failure responses (i.e. the <code>error</code> returned by middleware or handler functions):",id:"failure-responses-ie-the-error-returned-by-middleware-or-handler-functions",level:3},{value:"Standard http.HandlerFunc",id:"standard-httphandlerfunc",level:2},{value:"The Ctx Object",id:"the-ctx-object",level:2}],c={toc:u};function k(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vektor"},"Vektor"),(0,o.kt)("h3",{id:"the-opinionated-production-grade-server-framework-for-go"},"The opinionated, production-grade server framework for Go"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2479).Z,width:"919",height:"327"})),(0,o.kt)("p",null,"Vektor's goal is to help you develop web services faster.\nVektor handles much of the boilerplate needed to start\nbuilding a Go server, so you can serve a request in\nless than 10 lines of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/suborbital/vektor/vk"\n\nserver := vk.New(vk.UseAppName("Vektor API Server"), vk.UseDomain("vektor.example.com"))\n\nserver.GET("/ping", HandlePing)\n\nif err := server.Start(); err != nil {\n    log.Fatal(err)\n}\n\nfunc HandlePing(r *http.Request, ctx *vk.Ctx) (interface{}, error) {\n    return "pong", nil\n}\n')),(0,o.kt)("p",null,"Those are the basics, but Vektor is capable of\nscaling up to serve powerful production workloads,\nusing its full suite of API-oriented features."),(0,o.kt)("h1",{id:"set-up-vk"},"Set up ",(0,o.kt)("inlineCode",{parentName:"h1"},"vk")),(0,o.kt)("h2",{id:"the-server-object"},"The server object"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Server")," type contains everything needed to\nbuild a web service. It includes the router,\na middleware system, customizable plug-in points,\nand handy built-in components like LetsEncrypt\nsupport and CORS handlers."),(0,o.kt)("p",null,"Creating a server object is done with ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.New()"),"\nand accepts an optional list of ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionModifiers"),"\nwhich allow customization of the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'server := vk.New(\n    vk.UseAppName("Vektor API Server"),\n    vk.UseDomain("vektor.example.com"),\n)\n')),(0,o.kt)("p",null,"To create a server object without TLS support,\nomit the ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.UseDomain()")," modifier and specify\nan HTTP port to listen on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'server := vk.New(\n    vk.UseAppName("Vektor API HTTP-only"),\n    vk.UseHTTPPort(8000),\n)\n')),(0,o.kt)("p",null,"The included ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionsModifiers")," are:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"ENV key"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseDomain(domain string)"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable LetsEncrypt support with the provided domain name (will serve on :80 and :443 for challenge server and API server). LetsEncrypt is disabled by default."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"VK_DOMAIN"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseTLSConfig(config *tls.Config)"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable TLS and use the provided TLS config to serve HTTPS. This will override the ",(0,o.kt)("inlineCode",{parentName:"td"},"domain")," option."),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseTLSPort(port int)"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose an HTTPS port on which to serve requests."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"VK_TLS_PORT"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseHTTPPort(port int)"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose an HTTP port on which to serve requests. When using TLS, the LetsEncrypt challenge server will run on the configured HTTP port."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"VK_HTTP_PORT"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseAppName(name string)"),(0,o.kt)("td",{parentName:"tr",align:null},"When the application starts, ",(0,o.kt)("inlineCode",{parentName:"td"},"name")," will be logged. Empty by default."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"VK_APP_NAME"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseEnvPrefix(prefix string)"),(0,o.kt)("td",{parentName:"tr",align:null},"Use ",(0,o.kt)("inlineCode",{parentName:"td"},"prefix")," instead of ",(0,o.kt)("inlineCode",{parentName:"td"},"VK")," for environment variables, for example ",(0,o.kt)("inlineCode",{parentName:"td"},"APP_HTTP_PORT")," instead of ",(0,o.kt)("inlineCode",{parentName:"td"},"VK_HTTP_PORT"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UseLogger(logger *vlog.Logger)"),(0,o.kt)("td",{parentName:"tr",align:null},"Set the logger object to be used. The logger is used internally by ",(0,o.kt)("inlineCode",{parentName:"td"},"vk")," and is available to all handler functions via the ",(0,o.kt)("inlineCode",{parentName:"td"},"ctx")," object. If this option is not passed, ",(0,o.kt)("inlineCode",{parentName:"td"},"vlog.Default")," is used, and its environment variable prefix set to the same as vk's. (",(0,o.kt)("inlineCode",{parentName:"td"},"VK")," by default)."),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,o.kt)("p",null,"Each of the options can be set using the modifier function, or by setting the associated environment variable. The environment variable will override the modifier function."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"UseEnvPrefix")," if you would prefer to use something other than ",(0,o.kt)("inlineCode",{parentName:"p"},"VK")," for your environment variables!")),(0,o.kt)("h2",{id:"handler-functions"},"Handler functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk"),"'s handler function definition is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func HandlePing(r *http.Request, ctx *vk.Ctx) (interface{}, error)\n")),(0,o.kt)("p",null,"Here's a breakdown of each part:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"r *http.Request"),": The request object for the request being handled."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ctx *vk.Ctx"),": A context object containing more options for\ninteracting with the request. See more below."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(interface{}, error)"),": The return types of the handler allow you\nto respond to HTTP requests by simply returning values. If an\nerror is returned, ",(0,o.kt)("inlineCode",{parentName:"p"},"vk")," will interpret it as a failed request and\nrespond with an error code, if error is ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),", then the ",(0,o.kt)("inlineCode",{parentName:"p"},"interface{}"),"\nvalue is used to respond based on the response handling rules.\n",(0,o.kt)("strong",{parentName:"p"},"Responding to requests is handled in depth below in ",(0,o.kt)("a",{parentName:"strong",href:"#responding-to-requests"},"Responding to requests"))),(0,o.kt)("h3",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"Similar to handlers for HTTP requests, here is the function definition for WebSocket connections:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func(r *http.Request, ctx *Ctx, conn *websocket.Conn) error\n")),(0,o.kt)("p",null,"Each of the arguments are equivalent to the arguments passed to HTTP handlers, with one additonal argument:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"conn")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"*websocket.Conn")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/gorilla/websocket#Conn"},"Gorilla library"),"."),(0,o.kt)("p",null,"View the Gorilla documentation for more information on reading and writing to the connection."),(0,o.kt)("h2",{id:"mounting-routes"},"Mounting routes"),(0,o.kt)("p",null,"To define routes for your ",(0,o.kt)("inlineCode",{parentName:"p"},"vk")," server, use the HTTP method\nfunctions on the server object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'server := vk.New(\n    vk.UseAppName("Vektor API Server"),\n    vk.UseDomain("vektor.example.com"),\n)\n\nserver.GET("/users", HandleGetUsers)\nserver.POST("/groups", HandleCreateGroup)\n')),(0,o.kt)("p",null,"If you prefer to pass the HTTP method as an argument, use ",(0,o.kt)("inlineCode",{parentName:"p"},"server.Handle()")," instead."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that attempting to add new handlers after calling ",(0,o.kt)("inlineCode",{parentName:"strong"},"server.Start()")," is a no-op")),(0,o.kt)("h2",{id:"route-groups"},"Route groups"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk")," allows grouping routes by a common path prefix. For example, if you want a group of routes to begin with the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/")," path, you can create an API route group and then mount all of your handlers to that group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'apiGroup := vk.Group("/api")\napiGroup.GET("/events", HandleGetEvents)\n\nserver.AddGroup(apiGroup)\n')),(0,o.kt)("p",null,"Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"AddGroup")," will calculate the full paths for all routes and mount them to the server. In the example above, the handler would be mounted at ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/events"),"."),(0,o.kt)("p",null,"Groups can even be added to groups!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'v1 := vk.Group("/v1")\nv1.GET("/events", HandleEventsV1)\n\nv2 := vk.Group("/v2")\nv2.GET("/events", HandleEventsV2)\n\napiGroup := vk.Group("/api")\napiGroup.AddGroup(v1)\napiGroup.AddGroup(v2)\n\nserver.AddGroup(api)\n')),(0,o.kt)("p",null,"This will create a natural grouping of your routes,\nwith the above example creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v1/events"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v2/events")," routes."),(0,o.kt)("h2",{id:"middleware-and-afterware"},"Middleware and Afterware"),(0,o.kt)("p",null,"Groups become even more powerful when combined with Middleware\nand Afterware. Middleware are pseudo request handlers that run\nin sequence before the mounted ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.HandlerFunc")," is run.\nMiddleware functions can modify a request and its context,\nor they can return an error, which causes the request handling\nto be terminated immediately. Two examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func headerMiddleware(r *http.Request, ctx *vk.Ctx) error {\n    ctx.Headers.Set("X-Vektor-Test", "foobar")\n\n    return nil\n}\n\nfunc denyMiddleware(r *http.Request, ctx *vk.Ctx) error {\n    if strings.Contains(r.URL.Path, "hack") {\n        ctx.Log.ErrorString("HACKER!!")\n\n        return vk.E(403, "begone, hacker")\n    }\n\n    return nil\n}\n')),(0,o.kt)("p",null,"Middleware have a similar function signature to ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.HandlerFunc"),", but only return an error. The first example modifies the request context to add a response header. The second example detects a hacker and returns an error, which is handled exactly like any other error response (see below). Returning an error from a Middleware prevents the request from ever reaching the registered handler."),(0,o.kt)("p",null,"Middleware are applied to route groups with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Before")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'v1 := vk.Group("/v1").Before(vk.ContentTypeMiddleware("application/json"), denyMiddleware, headerMiddleware)\nv1.GET("/events", HandleEventsV1)\n')),(0,o.kt)("p",null,"This example shows a group created with three middleware. The first adds the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," response header (and is included with ",(0,o.kt)("inlineCode",{parentName:"p"},"vk"),"), the second and third are the examples from above. When the group is mounted to the server, the chain of middleware are put in place, and are run before the registered handler. When groups are nested, the middleware from the parent group are run before the middleware of any child groups. In the example of nested groups above, any middleware set on the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiGroup")," groups would run before any middleware set on the ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"v2")," groups."),(0,o.kt)("p",null,"Afterware is similar, but is run ",(0,o.kt)("em",{parentName:"p"},"after")," the request handler. Who knew! Afterware cannot modify response body or status code, but can modify response headers using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," object. Afterware will ",(0,o.kt)("strong",{parentName:"p"},"always run"),", even if something earlier in the request chain fails. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func logAfter(r *http.Request, ctx *vk.Ctx) {\n    ctx.Log.Info("request completed")\n}\n\nv2 := vk.Group("/v2").Before(vk.ContentTypeMiddleware("application/json")).After(logAfter)\nv2.GET("/events", HandleEventsV2)\n')),(0,o.kt)("p",null,"Middleware and Afterware in ",(0,o.kt)("inlineCode",{parentName:"p"},"vk")," is designed to be easily composable, creating chains of behaviour easily grouped to sets of routes. Middleware can also help increase security of applications, allowing authentication, request throttling, active defence, etc, to run before the registered handler and keeping sensitive code from even being reached in the case of an unauthorized request."),(0,o.kt)("h1",{id:"responding-to-requests"},"Responding to requests"),(0,o.kt)("h2",{id:"response-types"},"Response types"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk")," includes two types, ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Error"),"\n(with helper functions ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Respond(...)")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Err(...)"),") that can be used to gain extra\ncontrol over the response code and contents\nthat you want to return:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type createdResponse struct {\n    Name string `json:"name"`\n    UUID string `json:"uuid"`\n}\n\nfunc HandleCreate(r *http.Request, ctx *vk.Ctx) (interface{}, error) {\n    // Do some work\n\n    resp := createdResponse {\n        Name: "Wendy",\n        UUID: "jfioqerjhp98qergnjw98h23"\n    }\n\n    // Return 201 (Created) and JSON\n    return vk.Respond(http.StatusCreated, resp), nil\n}\n\nfunc HandleDelete(r *http.Request, ctx *vk.Ctx) (interface{}, error) {\n    // Oops, something went wrong\n\n    return nil, vk.Err(http.StatusConflict, "the user is already deleted") // responds with HTTP status 409 and body {"status": 409, "message": "the user is already deleted"}\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk.Respond")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Err")," can be used with their shortcuts\n",(0,o.kt)("inlineCode",{parentName:"p"},"vk.R")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.E")," if you like your code to be terse."),(0,o.kt)("h2",{id:"response-handling-rules"},"Response handling rules"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk")," processes the ",(0,o.kt)("inlineCode",{parentName:"p"},"(interface{}, error)")," returned by handler functions in a spcific way to ensure you always know how it will behave while still being able to use simple types in your code."),(0,o.kt)("h3",{id:"successful-responses-ie-the-interface-returned-by-handler-functions"},"Successful responses (i.e. the ",(0,o.kt)("inlineCode",{parentName:"h3"},"interface{}")," returned by handler functions):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk.Response")," is an (optional) type that can be used to control the behaviour of the response, if desired. ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Respond(...)")," returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Response"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the type is ",(0,o.kt)("inlineCode",{parentName:"li"},"vk.Response"),", set the HTTP status code provided and process ",(0,o.kt)("inlineCode",{parentName:"li"},"Response.body")," as follows. (If the type is NOT ",(0,o.kt)("inlineCode",{parentName:"li"},"vk.Response"),", the status code is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"200 OK"),")"),(0,o.kt)("li",{parentName:"ol"},"If the type is string, write the string (as UTF-8 bytes) to the response body."),(0,o.kt)("li",{parentName:"ol"},"If the type is bytes, write them directly to the response body."),(0,o.kt)("li",{parentName:"ol"},"If the type is a struct, attempt to marshal to JSON and write JSON bytes to the response body.")),(0,o.kt)("p",null,"If a Content-Type is not explicitly set by your code in the middleware chain or ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerFunc"),", the value will be inferred from the type returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerFunc"),"."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Handler returns..."),(0,o.kt)("th",{parentName:"tr",align:null},"Status Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Response body"),(0,o.kt)("th",{parentName:"tr",align:null},"Content-Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'return "Hello, World", nil')),(0,o.kt)("td",{parentName:"tr",align:null},"200 OK"),(0,o.kt)("td",{parentName:"tr",align:null},'"Hello World" (as UTF-8 bytes)'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"text/plain"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"return jsonBytesFromJSONMarshal, nil")),(0,o.kt)("td",{parentName:"tr",align:null},"200 OK"),(0,o.kt)("td",{parentName:"tr",align:null},"[JSON bytes as generated by json.Marshal]"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/octet-stream"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"return someStructInstance, nil")),(0,o.kt)("td",{parentName:"tr",align:null},"200 OK"),(0,o.kt)("td",{parentName:"tr",align:null},"[JSON respresentation of struct automatically marshalled by ",(0,o.kt)("inlineCode",{parentName:"td"},"vk"),"]"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'return vk.R(http.StatusCreated, "created"), nil')),(0,o.kt)("td",{parentName:"tr",align:null},"201 Created"),(0,o.kt)("td",{parentName:"tr",align:null},'"created" (as UTF-8 bytes)'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"text/plain"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"return vk.R(http.StatusCreated, someStructInstance), nil")),(0,o.kt)("td",{parentName:"tr",align:null},"201 Created"),(0,o.kt)("td",{parentName:"tr",align:null},"[JSON respresentation of struct automatically marshalled by ",(0,o.kt)("inlineCode",{parentName:"td"},"vk"),"]"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,o.kt)("h3",{id:"failure-responses-ie-the-error-returned-by-middleware-or-handler-functions"},"Failure responses (i.e. the ",(0,o.kt)("inlineCode",{parentName:"h3"},"error")," returned by middleware or handler functions):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error")," is an interface that can be used to control the behaviour of error responses. ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.ErrorResponse")," is a concrete type that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error"),". Any errors that do NOT implement ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error")," will be treated as potentially unsafe, and their contents will be logged but not returned to the caller. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Wrap(...)")," if you'd like to wrap an ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.ErrorResponse"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Err")," returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Error interface {\n    Error() string // this ensures all Errors will also conform to the normal error interface\n\n    Message() string\n    Status() int\n}\n")),(0,o.kt)("p",null,"Errors returned from middleware or ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerFunc"),"s are\nhandled as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the type is ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error"),", set the HTTP status code\nprovided and respond with JSON as follows: ",(0,o.kt)("inlineCode",{parentName:"p"},'{"status": err.Status(), "message": err.Message()}'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the type is NOT ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Error"),', log the potentially\nunsafe error contents, set the HTTP status code to 500,\nand respond with "Internal Server Error"'))),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Handler returns..."),(0,o.kt)("th",{parentName:"tr",align:null},"Status Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Response body"),(0,o.kt)("th",{parentName:"tr",align:null},"Content-Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'return nil, errors.New("failed to add user")')),(0,o.kt)("td",{parentName:"tr",align:null},"500 Internal Server Error"),(0,o.kt)("td",{parentName:"tr",align:null},'"Internal Server Error" (as UTF-8 bytes)'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"text/plain"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'return nil, vk.E(http.StatusForbidden, "not permitted to do this thing")')),(0,o.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'{"status": 403, "message": "not permitted to do this thing"}')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"return nil, vk.Wrap(http.StatusApplicationError, err)")),(0,o.kt)("td",{parentName:"tr",align:null},"434 Application Error"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'{"status": 434, "message": err.Error()}')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,o.kt)("h2",{id:"standard-httphandlerfunc"},"Standard http.HandlerFunc"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vk")," can use standard ",(0,o.kt)("inlineCode",{parentName:"p"},"http.HandlerFunc")," handlers\nby mounting them with ",(0,o.kt)("inlineCode",{parentName:"p"},"server.HandleHTTP"),". This\nis useful for mounting handler functions provided\nby third party libraries (such as Prometheus),\nbut they are not able to take advantage of many ",(0,o.kt)("inlineCode",{parentName:"p"},"vk"),"\nfeatures such as middleware or route groups currently."),(0,o.kt)("h2",{id:"the-ctx-object"},"The Ctx Object"),(0,o.kt)("p",null,"Each request handler is passed a ",(0,o.kt)("inlineCode",{parentName:"p"},"vk.Ctx")," object,\nwhich is a context object for the request. It is\nsimilar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"context.Context")," type (and uses\none under the hood), but ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctx")," has been augmented\nfor use in web service development."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ctx")," includes a standard Go ",(0,o.kt)("inlineCode",{parentName:"p"},"context.Context"),"\nwhich can be used as a pseudo key/value store using\n",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.Set()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.Get()"),". This allows passing\nthings into request handlers such as database\nconnections or other persistent objects. Middleware\nand Afterware can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctx")," to modify it,\nor access data from it."),(0,o.kt)("p",null,"The server's configured ",(0,o.kt)("inlineCode",{parentName:"p"},"vlog.Logger")," object is\nincluded (",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.Log"),") for logging within request\nhandlers, and a shortcut for setting the logger's\nscope for the current request exists with\n",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.UseScope(...)"),". You can learn about scope\nin ",(0,o.kt)("a",{parentName:"p",href:"../vlog/README.md"},"the vlog docs"),". A default\nscope will always be set with the request ID included."),(0,o.kt)("p",null,"Accessing the URL params for the request\n(such as ",(0,o.kt)("inlineCode",{parentName:"p"},"/users/:uuid"),") is done with ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.Params"),",\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.RespHeaders")," can be used to set response headers\nif needed."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Ctx")," can also be used to easily get a request ID,\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.RequestID()"),". The Request ID is generated\nand cached on the object, and so calling it multiple\ntimes will return the same value. If you prefer to\nset your own Request ID, ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.UseRequestID()")," will do\nthe trick. However it will mean the first log message\nfor the request will have a different ID as it uses\nthe default ID generated for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),"."))}k.isMDXComponent=!0},2479:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5MTguOSAzMjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkxOC45IDMyNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOiMyMzFGMjA7fQoJLnN0MntmaWxsOiMzNTdGQkU7fQoJLnN0M3tmaWxsOiMyMjRFODQ7fQoJLnN0NHtmaWxsOiM3NEMyQjA7fQoJLnN0NXtmaWxsOiNBNkE4QUI7fQoJLnN0NntmaWxsOiM1ODU5NUI7fQoJLnN0N3tmaWxsOiM0QzYyNzU7fQoJLnN0OHtmaWxsOiMzMDNFNEU7fQo8L3N0eWxlPgo8Zz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LjUsMTQyIDEyNS42LDE0MiA5Ny41LDEyNS44IDk3LjUsMTI1LjggCSIvPgoJPGc+CgkJPHBvbHlnb24gY2xhc3M9InN0NyIgcG9pbnRzPSIxNjkuOSw4NC4yIDE2OS45LDQ4LjggNzMuNywxMDQuMSAxMDQuNSwxMjEuOCAJCSIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iMTY5LjksMTI0LjEgNjcuMSwxODMuNyA2Ny4xLDIxOC41IDE2OS45LDE1OS40IAkJIi8+CgkJPHBvbHlnb24gY2xhc3M9InN0NyIgcG9pbnRzPSIxNjkuOSwxNjcuNCAxNjkuOSwyMDIuOSAyNzIuNywxNDMuNyAyNzIuNywxMDguNCAyNzIuNywxMDguMyAJCSIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDciIHBvaW50cz0iMTY5LjksMjc4LjIgMjcyLjcsMjE5IDI3Mi43LDIxOC42IDI3Mi43LDE4My43IDI3Mi43LDE4My40IDE2OS45LDI0Mi44IAkJIi8+Cgk8L2c+Cgk8Zz4KCQk8cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjE2OS45LDIwMi45IDE2OS45LDE2Ny40IDEzOS4xLDE4NS4xIAkJIi8+CgkJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSI3My43LDIyMi44IDE2OS45LDI3OC4yIDE2OS45LDI0Mi44IDEwNC40LDIwNS4xIAkJIi8+CgkJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIxMjUuNSwxNDIgOTcuNSwxMjUuOCA5Ny41LDEyNS44IDY3LjEsMTA4LjMgNjcuMSwxMDguNCA2Ny4xLDE0My4zIDY3LjEsMTQzLjcgOTQuOCwxNTkuNyAJCSIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDQiIHBvaW50cz0iMjY2LjEsMTA0LjEgMTY5LjksNDguOCAxNjkuOSw4NC4yIDIzNS40LDEyMS44IAkJIi8+CgkJPHBvbHlnb24gY2xhc3M9InN0NCIgcG9pbnRzPSIyMTQuNywxODUuMiAyMzUuMiwxOTcgMjY1LjksMTc5LjMgMjQ1LjQsMTY3LjUgCQkiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3Q0IiBwb2ludHM9IjE2OS45LDE1OS40IDIwMC43LDE0MS44IDE2OS45LDEyNC4xIAkJIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNNDE1LjUsMTMwLjlsLTMxLDcwaC03LjNsLTMxLTcwaDhsMjYuOCw2MC44bDI3LTYwLjhINDE1LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNNDk1LjEsMTk0LjV2Ni40aC00OS41di03MGg0OHY2LjRINDUzdjI0LjloMzYuMnY2LjNINDUzdjI2SDQ5NS4xeiIvPgoJPHBhdGggY2xhc3M9InN0NyIgZD0iTTU1NC4yLDE2OGwtMTQuMywxNC41djE4LjRoLTcuNHYtNzBoNy40djQyLjNsNDEuMS00Mi4zaDguNWwtMzAuMywzMS43bDMyLjQsMzguM2gtOC44TDU1NC4yLDE2OHoiLz4KCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik02MzMuMiwxMzcuM2gtMjQuNnYtNi40aDU2LjZ2Ni40aC0yNC42djYzLjZoLTcuNFYxMzcuM3oiLz4KCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik03MDcuOCwxOTYuOGMtNS42LTMuMS0xMC03LjQtMTMuMi0xMi44Yy0zLjItNS40LTQuOC0xMS41LTQuOC0xOC4yYzAtNi43LDEuNi0xMi44LDQuOC0xOC4yCgkJYzMuMi01LjQsNy42LTkuNiwxMy4yLTEyLjhjNS42LTMuMSwxMS45LTQuNiwxOC44LTQuNmM2LjksMCwxMy4yLDEuNSwxOC44LDQuNmM1LjYsMy4xLDEwLDcuMywxMy4yLDEyLjgKCQljMy4yLDUuNCw0LjgsMTEuNSw0LjgsMTguMmMwLDYuNy0xLjYsMTIuOC00LjgsMTguMmMtMy4yLDUuNC03LjYsOS43LTEzLjIsMTIuOGMtNS42LDMuMS0xMS44LDQuNi0xOC44LDQuNgoJCUM3MTkuNywyMDEuNSw3MTMuNCwxOTkuOSw3MDcuOCwxOTYuOHogTTc0MS42LDE5MS4xYzQuNS0yLjUsOC02LDEwLjUtMTAuNGMyLjUtNC40LDMuOC05LjQsMy44LTE0LjhjMC01LjUtMS4zLTEwLjQtMy44LTE0LjgKCQljLTIuNS00LjQtNi03LjktMTAuNS0xMC40Yy00LjUtMi41LTkuNS0zLjgtMTUtMy44Yy01LjUsMC0xMC41LDEuMi0xNSwzLjhzLTgsNi0xMC42LDEwLjRzLTMuOCw5LjQtMy44LDE0LjgKCQljMCw1LjUsMS4zLDEwLjQsMy44LDE0LjhjMi42LDQuNCw2LjEsNy45LDEwLjYsMTAuNHM5LjUsMy44LDE1LDMuOEM3MzIuMSwxOTQuOSw3MzcuMSwxOTMuNiw3NDEuNiwxOTEuMXoiLz4KCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik04NDcuNywyMDAuOWwtMTYtMjIuNWMtMS44LDAuMi0zLjcsMC4zLTUuNiwwLjNoLTE4Ljh2MjIuMmgtNy40di03MGgyNi4yYzguOSwwLDE1LjksMi4xLDIxLDYuNAoJCWM1LjEsNC4zLDcuNiwxMC4xLDcuNiwxNy42YzAsNS41LTEuNCwxMC4xLTQuMiwxMy44Yy0yLjgsMy44LTYuNyw2LjUtMTEuOCw4LjJsMTcuMSwyNEg4NDcuN3ogTTg0MS44LDE2Ny44CgkJYzMuNy0zLjEsNS41LTcuNCw1LjUtMTIuOWMwLTUuNy0xLjgtMTAtNS41LTEzYy0zLjctMy05LTQuNS0xNS45LTQuNWgtMTguNnYzNS4xaDE4LjZDODMyLjgsMTcyLjQsODM4LjEsMTcwLjgsODQxLjgsMTY3Ljh6Ii8+CjwvZz4KPC9zdmc+Cg=="}}]);