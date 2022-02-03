"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[8397],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2547:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={},s=void 0,d={unversionedId:"reactr/faas",id:"reactr/faas",title:"faas",description:"Reactr FaaS \u2601\ufe0f",source:"@site/docs/reactr/faas.md",sourceDirName:"reactr",slug:"/reactr/faas",permalink:"/docs/docs/reactr/faas",editUrl:"https://github.com/suborbital/docs/docs/reactr/faas.md",tags:[],version:"current",lastUpdatedAt:1642876873,formattedLastUpdatedAt:"1/22/2022",frontMatter:{},sidebar:"docs",previous:{title:"Reactr \u2795 Grav",permalink:"/docs/docs/reactr/grav"},next:{title:"The Vektor Guide \ud83d\uddfa",permalink:"/docs/docs/vektor/getting-started"}},p=[{value:"Reactr FaaS \u2601\ufe0f",id:"reactr-faas-\ufe0f",children:[],level:2},{value:"Schedule a Job",id:"schedule-a-job",children:[],level:2},{value:"Get a result",id:"get-a-result",children:[],level:2}],c={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"reactr-faas-\ufe0f"},"Reactr FaaS \u2601\ufe0f"),(0,l.kt)("p",null,"Reactr has built-in support for acting as a Functions-as-a-Service system (FaaS). Reactr Runnables can be exposed as endpoints to be triggered by an API request. Reactr will automatically create and manage the server on your behalf and allow for efficient execution of your Runnables over the network."),(0,l.kt)("p",null,"Reactr FaaS operates with similar semantics to the Reactr Go library. Jobs are triggered by making a POST request, and the caller receives a result ID in return. The job will be automatically scheduled and the result can be fetched later by passing the result ID in a later GET request. Results can optionally be waited for by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"?then=true")," query parameter."),(0,l.kt)("p",null,"An example of creating a Reactr FaaS server can be found in ",(0,l.kt)("a",{parentName:"p",href:"../rfaasservertest/main.go"},"servertest"),". Reactr FaaS uses Suborbital's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suborbital/vektor"},"Vektor API framework"),", and so all of its options are available, and the resulting server object can be optionally extended with other handlers. Below are the API calls available for Reactr jobs."),(0,l.kt)("h2",{id:"schedule-a-job"},"Schedule a Job"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"URI:"),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"th"},"/do/:jobname")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Method:"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"POST"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Body:"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Job payload (raw bytes)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Response:"),(0,l.kt)("td",{parentName:"tr",align:"left"},"JSON bytes representing the result")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Parameter")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Effect"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"then=true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"When provided, causes the request to wait until the scheduled job is completed, and returns the job result as raw bytes. If the job result was a struct, an attempt will be made to JSON marshal it before sending. If any error occurs, the response will have a non-200 HTTP status code and a body containing an error message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"callback={url}")),(0,l.kt)("td",{parentName:"tr",align:"left"},"When provided, a webhook POST request will be sent to the provided URL when the job completes. The request will contain the bytes of the job result. If the job result was a struct, an attempt will be made to JSON marshal it before sending. If any error occurs, the request payload will be a string beginning with ",(0,l.kt)("inlineCode",{parentName:"td"},"job_err_result")," followed by an error message. When ",(0,l.kt)("inlineCode",{parentName:"td"},"callback")," is set, ",(0,l.kt)("inlineCode",{parentName:"td"},"then")," will be ignored, and the response to the caller will be empty with HTTP status 200 OK.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Example Request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Example Response"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"POST")," ",(0,l.kt)("inlineCode",{parentName:"td"},"/do/compressimage")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},'{"resultId":"7gj9n0adohm36zeqbfys4re6"}'))))),(0,l.kt)("h2",{id:"get-a-result"},"Get a result"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"URI:"),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"th"},"/then/:resultid")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Method:"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GET"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Body:"),(0,l.kt)("td",{parentName:"tr",align:"left"},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Response:"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Job result (raw bytes)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Example Request")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Example Response"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"td"},"/then/7gj9n0adohm36zeqbfys4re6")),(0,l.kt)("td",{parentName:"tr",align:"left"},"{job result bytes}")))))}m.isMDXComponent=!0}}]);