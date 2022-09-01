"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[3800],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9253:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={pagination_prev:null},i="Reactr",l={unversionedId:"reactr/reactr",id:"reactr/reactr",title:"Reactr",description:"The next-gen function scheduler for Go and WebAssembly",source:"@site/docs/reactr/reactr.md",sourceDirName:"reactr",slug:"/reactr/",permalink:"/docs/laura/166-update-compute-deployment-docs/reactr/",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/reactr/reactr.md",tags:[],version:"current",lastUpdatedAt:1656622516,formattedLastUpdatedAt:"Jun 30, 2022",frontMatter:{pagination_prev:null},sidebar:"docs",next:{title:"Reactr \u2764\ufe0f WebAssembly",permalink:"/docs/laura/166-update-compute-deployment-docs/reactr/wasm"}},s={},u=[{value:"The next-gen function scheduler for Go and WebAssembly",id:"the-next-gen-function-scheduler-for-go-and-webassembly",level:2},{value:"The Basics",id:"the-basics",level:3},{value:"Runnables pt. 2",id:"runnables-pt-2",level:2},{value:"Groups",id:"groups",level:3},{value:"Pools",id:"pools",level:3},{value:"Autoscaling pools",id:"autoscaling-pools",level:3},{value:"Timeouts",id:"timeouts",level:3},{value:"Schedules",id:"schedules",level:3},{value:"Advanced Runnables",id:"advanced-runnables",level:3},{value:"Pre-warming",id:"pre-warming",level:3},{value:"Shortcuts",id:"shortcuts",level:3},{value:"Additional features",id:"additional-features",level:2}],c={toc:u};function p(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reactr"},"Reactr"),(0,a.kt)("h2",{id:"the-next-gen-function-scheduler-for-go-and-webassembly"},"The next-gen function scheduler for Go and WebAssembly"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reactr Logo",src:t(5767).Z,width:"3830",height:"1364"})),(0,a.kt)("h3",{id:"the-basics"},"The Basics"),(0,a.kt)("p",null,"First, install Reactr's core package ",(0,a.kt)("inlineCode",{parentName:"p"},"rt"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/suborbital/reactr/rt\n")),(0,a.kt)("p",null,"And then get started by defining something ",(0,a.kt)("inlineCode",{parentName:"p"},"Runnable"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "github.com/suborbital/reactr/rt"\n)\n\ntype generic struct{}\n\n// Run runs a generic job\nfunc (g generic) Run(job rt.Job, ctx *rt.Ctx) (interface{}, error) {\n    fmt.Println("doing job:", job.String()) // get the string value of the job\'s data\n\n    // do your work here\n\n    return fmt.Sprintf("finished %s", job.String()), nil\n}\n\n// OnChange is called when Reactr starts or stops a worker to handle jobs,\n// and allows the Runnable to set up before receiving jobs or tear down if needed.\nfunc (g generic) OnChange(change rt.ChangeEvent) error {\n    return nil\n}\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Runnable")," is something that can take care of a job - all it needs to do is conform to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Runnable")," interface as you see above."),(0,a.kt)("p",null,"Once you have a Runnable, create a Reactr instance, register it, and ",(0,a.kt)("inlineCode",{parentName:"p"},"Do")," some work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "log"\n\n    "github.com/suborbital/reactr/rt"\n)\n\nfunc main() {\n    r := rt.New()\n\n    r.Register("generic", generic{})\n\n    result := r.Do(r.Job("generic", "hard work"))\n\n    res, err := result.Then()\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    fmt.Println("done!", res.(string))\n}\n')),(0,a.kt)("p",null,"When you ",(0,a.kt)("inlineCode",{parentName:"p"},"Do")," some work, you get a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),". A result is like a Rust future or a JavaScript promise; it is something you can get the job's result from once it is finished."),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Then()")," will block until the job is complete, and then give you the return value from the Runnable's ",(0,a.kt)("inlineCode",{parentName:"p"},"Run"),". Cool, right?"),(0,a.kt)("h2",{id:"runnables-pt-2"},"Runnables pt. 2"),(0,a.kt)("p",null,"There are some more complicated things you can do with Runnables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type recursive struct{}\n\n// Run runs a recursive job\nfunc (r recursive) Run(job rt.Job, ctx *rt.Ctx) (interface{}, error) {\n    fmt.Println("doing job:", job.String())\n\n    if job.String() == "first" {\n        return ctx.Do(rt.NewJob("recursive", "second")), nil\n    } else if job.String() == "second" {\n        return ctx.Do(rt.NewJob("recursive", "last")), nil\n    }\n\n    return fmt.Sprintf("finished %s", job.String()), nil\n}\n\nfunc (r recursive) OnChange(change rt.ChangeEvent) error {\n    return nil\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rt.Ctx")," you see there is the job context, and one of the things it can do is run more things!"),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.Do")," will schedule another job to be executed and give you a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),". If you return a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"Run"),", then the caller will recursively receive that ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," when they call ",(0,a.kt)("inlineCode",{parentName:"p"},"Then()"),"!"),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'r := r.Do(r.Job("recursive", "first"))\n\nres, err := r.Then()\nif err != nil {\n    log.Fatal(err)\n}\n\nfmt.Println("done!", res.(string))\n')),(0,a.kt)("p",null,"Will cause this output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"doing job: first\ndoing job: second\ndoing job: last\ndone! finished last\n")),(0,a.kt)("p",null,"The ability to chain jobs is quite powerful!"),(0,a.kt)("p",null,"You won't always need or care about a job's output, and in those cases, make sure to call ",(0,a.kt)("inlineCode",{parentName:"p"},"Discard()")," on the result to allow the underlying resources to be deallocated!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'r.Do(r.Job("recursive", "first")).Discard()\n')),(0,a.kt)("p",null,"To do something asynchronously with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," once it completes, call ",(0,a.kt)("inlineCode",{parentName:"p"},"ThenDo")," on the result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'r.Do(r.Job("generic", "first")).ThenDo(func(res interface{}, err error) {\n    if err != nil {\n        // do something with the error\n    }\n\n    //do something with the result\n})\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ThenDo")," will return immediately, and provided callback will be run on a background goroutine. This is useful for handling results that don't need to be consumed by your main program execution."),(0,a.kt)("h3",{id:"groups"},"Groups"),(0,a.kt)("p",null,"A reactr ",(0,a.kt)("inlineCode",{parentName:"p"},"Group")," is a set of ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"s that belong together. If you're familiar with Go's ",(0,a.kt)("inlineCode",{parentName:"p"},"errgroup.Group{}"),", it is similar. Adding results to a group will allow you to evaluate them all together at a later time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'grp := rt.NewGroup()\n\ngrp.Add(ctx.Do(rt.NewJob("recursive", "first")))\ngrp.Add(ctx.Do(rt.NewJob("generic", "group work")))\ngrp.Add(ctx.Do(rt.NewJob("generic", "group work")))\n\nif err := grp.Wait(); err != nil {\n    log.Fatal(err)\n}\n')),(0,a.kt)("p",null,"Will print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"doing job: first\ndoing job: group work\ndoing job: group work\ndoing job: second\ndoing job: last\n")),(0,a.kt)("p",null,'As you can see, the "recursive" jobs from the ',(0,a.kt)("inlineCode",{parentName:"p"},"generic")," runner get queued up after the two jobs that don't recurse."),(0,a.kt)("p",null,"Note that you cannot get result values from result groups, the error returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"Wait()")," will be the first error from any of the results in the group, if any. To get result values from a group of jobs, put them in an array and call ",(0,a.kt)("inlineCode",{parentName:"p"},"Then")," on them individually."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TIP")," If you return a group from a Runnable's ",(0,a.kt)("inlineCode",{parentName:"p"},"Run"),", calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Then()")," on the result will recursively call ",(0,a.kt)("inlineCode",{parentName:"p"},"Wait()")," on the group and return the error to the original caller! You can easily chain jobs and job groups in various orders."),(0,a.kt)("h3",{id:"pools"},"Pools"),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Runnable")," that you register is given a worker to process their jobs. By default, each worker has one work thread processing jobs in sequence. If you want a particular worker to process more than one job concurrently, you can increase its ",(0,a.kt)("inlineCode",{parentName:"p"},"PoolSize"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'doGeneric := r.Register("generic", generic{}, rt.PoolSize(3))\n\ngrp := rt.NewGroup()\ngrp.Add(doGeneric("first"))\ngrp.Add(doGeneric("second"))\ngrp.Add(doGeneric("random"))\n\nif err := grp.Wait(); err != nil {\n    log.Fatal(err)\n}\n')),(0,a.kt)("p",null,"Passing ",(0,a.kt)("inlineCode",{parentName:"p"},"PoolSize(3)")," will spawn three work threads to process ",(0,a.kt)("inlineCode",{parentName:"p"},"generic")," jobs."),(0,a.kt)("h3",{id:"autoscaling-pools"},"Autoscaling pools"),(0,a.kt)("p",null,"By default, defining a pool size causes a static number of work threads to be started and will continue to run for the duration of the program's lifetime. If you have more variable workloads and need to scale your compute up and down to compensate, Reactr can handle that with the Autoscale option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'doGeneric := r.Register("generic", generic{}, rt.Autoscale(0))\n\nfor i := 0; i < 10000; i++ {\n    doGeneric("lots to do").Discard()\n}\n')),(0,a.kt)("p",null,"By passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"rt.Autoscale")," option, we indicate to Reactr that the worker should create and destroy threads as needed to handle the amount of work to be done. The parameter passed to Autoscale indicates the maximum number of threads. If you pass 0, it will default to the number of available CPUs."),(0,a.kt)("h3",{id:"timeouts"},"Timeouts"),(0,a.kt)("p",null,"By default, if a job becomes stuck and is blocking execution, it will block forever. If you want to have a worker time out after a certain amount of seconds on a stuck job, pass ",(0,a.kt)("inlineCode",{parentName:"p"},"rt.TimeoutSeconds")," to Handle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'h := rt.New()\n\ndoTimeout := r.Register("timeout", timeoutRunner{}, rt.TimeoutSeconds(3))\n')),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"TimeoutSeconds")," is set and a job executes for longer than the provided number of seconds, the worker will move on to the next job and ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrJobTimeout")," will be returned to the Result. The failed job will continue to execute in the background, but its result will be discarded."),(0,a.kt)("h3",{id:"schedules"},"Schedules"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"r.Do")," method will run your job immediately, but if you need to run a job at a later time, at a regular interval, or on some other schedule, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"Schedule")," interface will help. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Schedule")," interface allows for an object to choose when to execute a job. Any object that conforms to the interface can be used as a Schedule:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Schedule is a type that returns an *optional* job if there is something that should be scheduled.\n// Reactr will poll the Check() method at regular intervals to see if work is available.\ntype Schedule interface {\n    Check() *Job\n    Done() bool\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"r.Schedule")," method will allow you to register a Schedule, and there are two built-in schedules(",(0,a.kt)("inlineCode",{parentName:"p"},"Every")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"After"),") to help:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'r := rt.New()\n\nr.Register("worker", &workerRunner{})\n\n// runs every hour\nr.Schedule(rt.Every(60*60, func() Job {\n    return NewJob("worker", nil)\n}))\n')),(0,a.kt)("p",null,"Reactr will poll all registered Schedules at a 1 second interval to ",(0,a.kt)("inlineCode",{parentName:"p"},"Check")," for new jobs. Schedules can end their own execution by returning ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Done")," method. You can use the Schedules provided with Reactr or develop your own."),(0,a.kt)("p",null,"Scheduled jobs' results are discarded automatically using ",(0,a.kt)("inlineCode",{parentName:"p"},"Discard()")),(0,a.kt)("h3",{id:"advanced-runnables"},"Advanced Runnables"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Runnable")," interface defines an ",(0,a.kt)("inlineCode",{parentName:"p"},"OnChange")," function which gives the Runnable a chance to prepare itself for changes to the worker running it. For example, when a Runnable is registered with a pool size greater than 1, the Runnable may need to provision resources for itself to enable handling jobs concurrently, and ",(0,a.kt)("inlineCode",{parentName:"p"},"OnChange")," will be called once each time a new worker starts up. Our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/reactr/blob/main/engine/wasmrunnable.go"},"Wasm implementation")," is a good example of this."),(0,a.kt)("p",null,"Most Runnables can return ",(0,a.kt)("inlineCode",{parentName:"p"},"nil")," from this function, however returning an error will cause the worker start to be paused and retried until the required pool size has been achieved. The number of seconds between retries (default 3) and the maximum number of retries (default 5) can be configured when registering a Runnable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'doBad := r.Register("badRunner", badRunner{}, rt.RetrySeconds(1), rt.MaxRetries(10))\n')),(0,a.kt)("p",null,"Any error from a failed worker will be returned to the first job that is attempted for that Runnable."),(0,a.kt)("h3",{id:"pre-warming"},"Pre-warming"),(0,a.kt)("p",null,"When a Runnable is mounted, it is simply registered as available to receive work. The Runnable is not actually invoked until the first job of the given type is received. For basic Runnables, this is normally fine, but for Runnables who use the ",(0,a.kt)("inlineCode",{parentName:"p"},"OnChange")," method to provision resources, this can cause the first job to be slow. The ",(0,a.kt)("inlineCode",{parentName:"p"},"PreWarm")," option is available to allow Runnables to be started as soon as they are mounted, rather than waiting for the first job. This mitigates cold-starts when anything expensive is needed at startup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'doExpensive := r.Register("expensive", expensiveRunnable{}, rt.PreWarm())\n')),(0,a.kt)("h3",{id:"shortcuts"},"Shortcuts"),(0,a.kt)("p",null,"There are also some shortcuts to make working with Reactr a bit easier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type input struct {\n    First, Second int\n}\n\ntype math struct{}\n\n// Run runs a math job\nfunc (g math) Run(job rt.Job, ctx *rt.Ctx) (interface{}, error) {\n    in := job.Data().(input)\n\n    return in.First + in.Second, nil\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'doMath := r.Register("math", math{})\n\nfor i := 1; i < 10; i++ {\n    equals, _ := doMath(input{i, i * 3}).ThenInt()\n    fmt.Println("result", equals)\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Register")," function returns an optional helper function. Instead of passing a job name and full ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"r.Do"),", you can use the helper function to instead just pass the input data for the job, and you receive a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," as normal. ",(0,a.kt)("inlineCode",{parentName:"p"},"doMath"),"!"),(0,a.kt)("h2",{id:"additional-features"},"Additional features"),(0,a.kt)("p",null,"Reactr can integrate with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suborbital/grav"},"Grav"),", which is the decentralized message bus developed as part of the Suborbital Development Platform. Read about the integration on ",(0,a.kt)("a",{parentName:"p",href:"/docs/laura/166-update-compute-deployment-docs/reactr/grav"},"the grav documentation page.")),(0,a.kt)("p",null,"Reactr provides the building blocks for scalable asynchronous systems. This should be everything you need to help you improve the performance of your application. When you are looking to take advantage of Reactr's other features, check out its ",(0,a.kt)("a",{parentName:"p",href:"/docs/laura/166-update-compute-deployment-docs/reactr/wasm"},"Wasm")," capabilities!"))}p.isMDXComponent=!0},5767:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/SOS_Reactr-Long-FullColour0-4ec64877c7617e110263aa3bc9559d22.svg"}}]);