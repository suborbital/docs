"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[130],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9872:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],c={},l="Connections",i={unversionedId:"atmo/usage/connections",id:"atmo/usage/connections",title:"Connections",description:"In order to build a useful application, Atmo needs to be able to connect to external resources. Currently, Atmo can connect to NATS, Redis, Kafka, MySQL, and PostgreSQL. Upcoming releases will include additional data sources as well.",source:"@site/docs/atmo/usage/connections.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/connections",permalink:"/docs/laura/82-create-contributingmd-for-docs/atmo/usage/connections",editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/usage/connections.md",tags:[],version:"current",lastUpdatedAt:1647288527,formattedLastUpdatedAt:"3/14/2022",frontMatter:{},sidebar:"docs",previous:{title:"Streams",permalink:"/docs/laura/82-create-contributingmd-for-docs/atmo/usage/streams"},next:{title:"Introduction to the Runnable API",permalink:"/docs/laura/82-create-contributingmd-for-docs/atmo/runnable-api/introduction"}},u=[{value:"Stream sources",id:"stream-sources",children:[],level:2},{value:"Data sources",id:"data-sources",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connections"},"Connections"),(0,o.kt)("p",null,"In order to build a useful application, Atmo needs to be able to connect to external resources. Currently, Atmo can connect to ",(0,o.kt)("a",{parentName:"p",href:"https://nats.io/"},"NATS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis"),", ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Kafka"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.mysql.com/"},"MySQL"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),". Upcoming releases will include additional data sources as well."),(0,o.kt)("p",null,"To create connections, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"connections")," section to your Directive. When Atmo starts up, it will establish the connections you've configured, and make them available to your application in a few different ways."),(0,o.kt)("h2",{id:"stream-sources"},"Stream sources"),(0,o.kt)("p",null,"There are two available stream sources (NATS and Kafka) that can be used as sources for your handlers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"connections:\n  nats:\n    serverAddress: nats://localhost:4222\n  kafka:\n    brokerAddress: localhost:9092\n")),(0,o.kt)("p",null,"The NATS or Kafka connection is made available as a stream source:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  - type: stream\n    source: nats\n    resource: user.created\n    steps:\n      - fn: record-signup\n")),(0,o.kt)("p",null,"By setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," field of the handler, we tell Atmo to listen to that particular connection and handle messages it sends us. The ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," field dictates which topic or subject the handler is listening to, which is useful for messaging systems such as NATS and Kafka."),(0,o.kt)("p",null,"Streams that use an external source can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"respondTo")," field to set which topic or subject the response message is sent to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: stream\n    source: nats\n    resource: user.login\n    steps:\n      - fn: record-login\n    respondTo: user.send-login-email\n")),(0,o.kt)("h2",{id:"data-sources"},"Data sources"),(0,o.kt)("p",null,"SQL databases and caches can be connected to Atmo to be made available to your Runnables using the Runnable API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"connections:\n  database:\n    type: postgresql\n    connectionString: env(DATABASE)\n  redis:\n    serverAddress: localhost:6379\n")),(0,o.kt)("p",null,"SQL database connections of type ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"postgresql")," are also available, and they are discussed in detail in the ",(0,o.kt)("a",{parentName:"p",href:"./using-sql-databases.md"},"Using SQL Databases")," section."),(0,o.kt)("p",null,"Redis connections are made available to Runnables utilizing the ",(0,o.kt)("inlineCode",{parentName:"p"},"cache")," capability:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use suborbital::runnable::*;\nuse suborbital::req;\nuse suborbital::cache;\n\nstruct CacheGet{}\n\nimpl Runnable for CacheGet {\n    fn run(&self, _: Vec<u8>) -> Result<Vec<u8>, RunErr> {\n        let key = req::url_param("key");\n\n        let val = cache::get(key.as_str()).unwrap_or_default();\n    \n        Ok(val)\n    }\n}\n')))}d.isMDXComponent=!0}}]);