"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2262],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(b,s(s({ref:n},c),{},{components:t})):r.createElement(b,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9381:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),s=["components"],o={},u="Using SQL databases",l={unversionedId:"atmo/usage/using-sql-databases",id:"atmo/usage/using-sql-databases",title:"Using SQL databases",description:"To connect Atmo with your SQL database, you will define the",source:"@site/docs/atmo/usage/using-sql-databases.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/using-sql-databases",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/atmo/usage/using-sql-databases",editUrl:"https://github.com/suborbital/docs/docs/atmo/usage/using-sql-databases.md",tags:[],version:"current",lastUpdatedAt:1645041596,formattedLastUpdatedAt:"2/16/2022",frontMatter:{},sidebar:"docs",previous:{title:"GraphQL client",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/atmo/runnable-api/graphql-client"},next:{title:"Accessing cache",permalink:"/docs/laurea/issue66-change-path-in-code-block-on-deploying-atmo-page/atmo/runnable-api/cache"}},c=[{value:"Defining queries",id:"defining-queries",children:[],level:2},{value:"Query variables",id:"query-variables",children:[],level:2},{value:"How it works",id:"how-it-works",children:[],level:2},{value:"Executing queries",id:"executing-queries",children:[],level:2}],d={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-sql-databases"},"Using SQL databases"),(0,i.kt)("p",null,"To connect Atmo with your SQL database, you will define the\nconnection using the ",(0,i.kt)("inlineCode",{parentName:"p"},"connections")," section of the Directive,\nand then define queries that your Runnables can execute.\nRunnables are not allowed to execute arbitrary queries.\nInstead, a list of named queries are provided in a Queries.yaml file.\nYour Runnables are then allowed to execute them."),(0,i.kt)("p",null,"If you haven't already, take a look at Connections to define the connection\nto your database, then come back here."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"This feature is in preview!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Atmo's Database capability is in preview, and we would love your feedback on\nthe approach as well as the Rust APIs. We are eager to improve it, and we hope\nyou'll try it out!"),(0,i.kt)("p",{parentName:"div"},"Please join our ",(0,i.kt)("a",{parentName:"p",href:"http://chat.suborbital.dev"},"Discord")," to give us feedback."))),(0,i.kt)("h2",{id:"defining-queries"},"Defining queries"),(0,i.kt)("p",null,"Once the connection to your database is defined, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queries.yaml")," file\nin your project's directory, right next to ",(0,i.kt)("inlineCode",{parentName:"p"},"Directive.yaml"),"."),(0,i.kt)("p",null,"It will have this structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'queries:\n  - name: "InsertUser"\n    query: |-\n      INSERT INTO users (uuid, email, created_at, state, identifier)\n      VALUES ($1, $2, NOW(), \'A\', 12345)\n\n  - name: "SelectUserWithUUID"\n    query: |-\n      SELECT * FROM users\n      WHERE uuid = $1\n\n  - name: "UpdateUserWithUUID"\n    query: |-\n      UPDATE users SET state=\'B\'\n      WHERE uuid = $1\n')),(0,i.kt)("p",null,"You can define any number of queries. Each query must have a name and a query value."),(0,i.kt)("p",null,"Queries can optionally have a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field (specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"select | update | insert | delete"),")\nand a ",(0,i.kt)("inlineCode",{parentName:"p"},"varCount")," field to specify the number of variables in the query. In most circumstances,\nthese optional fields are detected automatically by Atmo, but if for any reason they are\ndetected incorrectly, you can set them explicitly."),(0,i.kt)("h2",{id:"query-variables"},"Query variables"),(0,i.kt)("p",null,"Queries can contain variables in either the MySQL style ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," or in the PostgreSQL style ",(0,i.kt)("inlineCode",{parentName:"p"},"$1"),".\nBoth will be auto-detected by Atmo, and Runnables will be required to provide the correct\nnumber of arguments to fill those variables whenever a query is called."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"SQL queries in Atmo are automatically turned into prepared statements that ensure your\nqueries are executed safely. Atmo uses industry-standard database drivers to maintain\na connection pool with your database. Runnables are allowed to execute the defined\nqueries and provide the arguments to be inserted into those queries. Your code does\nnot need to concern itself with the underlying database connections, pooling, credentials, etc.\nYou can focus on building your business logic."),(0,i.kt)("h2",{id:"executing-queries"},"Executing queries"),(0,i.kt)("p",null,"Once you've defined queries in your Queries.yaml file,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"suborbital")," Rust crate has APIs for executing various query types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use suborbital::runnable::*;\nuse suborbital::db;\nuse suborbital::db::query;\nuse suborbital::log;\nuse uuid::Uuid;\n\nstruct CreateUser{}\n\nimpl Runnable for CreateUser {\n    fn run(&self, _: Vec<u8>) -> Result<Vec<u8>, RunErr> {\n        let uuid = Uuid::new_v4().to_string();\n\n        let mut args: Vec<query::QueryArg> = Vec::new();\n        args.push(query::QueryArg::new("uuid", uuid.as_str()));\n        args.push(query::QueryArg::new("email", "connor@suborbital.dev"));\n\n        match db::insert("InsertUser", args) {\n            Ok(_) => log::info("insert successful"),\n            Err(e) => {\n                return Err(RunErr::new(500, e.message.as_str()))\n            }\n        };\n\n        let mut args2: Vec<query::QueryArg> = Vec::new();\n        args2.push(query::QueryArg::new("uuid", uuid.as_str()));\n\n        match db::update("UpdateUserWithUUID", args2.clone()) {\n            Ok(_) => log::info("update successful"),\n            Err(e) => {\n                return Err(RunErr::new(500, e.message.as_str()))\n            }\n        };\n\n        match db::select("SelectUserWithUUID", args2) {\n            Ok(result) => Ok(result),\n            Err(e) => {\n                Err(RunErr::new(500, e.message.as_str()))\n            }\n        }\n    }\n}\n\n// initialize the runner, do not edit below //\nstatic RUNNABLE: &CreateUser = &CreateUser{};\n\n#[no_mangle]\npub extern fn _start() {\n    use_runnable(RUNNABLE);\n}\n\n')),(0,i.kt)("p",null,"Runnables can execute any of the queries defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"Queries.yaml"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," they provide are inserted into the queries' variables by Atmo, and then executed.\nThe query's results are returned to the Runnable in JSON form."))}p.isMDXComponent=!0}}]);