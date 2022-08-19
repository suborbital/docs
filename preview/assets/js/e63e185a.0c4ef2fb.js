"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2501],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(t),b=a,m=p["".concat(u,".").concat(b)]||p[b]||d[b]||i;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={},s="Using SQL databases",o={unversionedId:"atmo/runnable-api/sql-databases",id:"atmo/runnable-api/sql-databases",title:"Using SQL databases",description:"To connect Atmo with your SQL database, you will define the connection using the connections section of the Directive, and then define queries that your Runnables can execute.",source:"@site/docs/atmo/runnable-api/sql-databases.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/sql-databases",permalink:"/docs/preview/atmo/runnable-api/sql-databases",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/runnable-api/sql-databases.md",tags:[],version:"current",lastUpdatedAt:1647046484,formattedLastUpdatedAt:"Mar 12, 2022",frontMatter:{},sidebar:"docs",previous:{title:"GraphQL client",permalink:"/docs/preview/atmo/runnable-api/graphql-client"},next:{title:"Accessing cache",permalink:"/docs/preview/atmo/runnable-api/cache"}},u={},l=[{value:"Defining queries",id:"defining-queries",level:2},{value:"Query variables",id:"query-variables",level:2},{value:"Executing queries",id:"executing-queries",level:2}],c={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-sql-databases"},"Using SQL databases"),(0,a.kt)("p",null,"To connect Atmo with your SQL database, you will define the connection using the ",(0,a.kt)("inlineCode",{parentName:"p"},"connections")," section of the Directive, and then define queries that your Runnables can execute."),(0,a.kt)("p",null,"Runnables are not allowed to execute arbitrary queries. Instead, a list of named queries are provided in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Queries.yaml")," file. Your Runnables are then allowed to execute them."),(0,a.kt)("p",null,"If you haven't already, take a look at ",(0,a.kt)("a",{parentName:"p",href:"/docs/preview/atmo/usage/connections"},"Connections")," to define the connection to your database, then come back here."),(0,a.kt)("admonition",{title:"This feature is in preview!",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Atmo's Database capability is in preview, and we would love your feedback on\nthe approach as well as the Rust APIs. We are eager to improve it, and we hope\nyou'll try it out!"),(0,a.kt)("p",{parentName:"admonition"},"Please join our ",(0,a.kt)("a",{parentName:"p",href:"http://chat.suborbital.dev"},"Discord")," to give us feedback.")),(0,a.kt)("h2",{id:"defining-queries"},"Defining queries"),(0,a.kt)("p",null,"Once the connection to your database is defined, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Queries.yaml")," file in your project's directory, right next to ",(0,a.kt)("inlineCode",{parentName:"p"},"Directive.yaml"),"."),(0,a.kt)("p",null,"It will have this structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'queries:\n  - name: "InsertUser"\n    query: |-\n      INSERT INTO users (uuid, email, created_at, state, identifier)\n      VALUES ($1, $2, NOW(), \'A\', 12345)\n\n  - name: "SelectUserWithUUID"\n    query: |-\n      SELECT * FROM users\n      WHERE uuid = $1\n\n  - name: "UpdateUserWithUUID"\n    query: |-\n      UPDATE users SET state=\'B\'\n      WHERE uuid = $1\n')),(0,a.kt)("p",null,"You can define any number of queries. Each query must have a name and a query value."),(0,a.kt)("p",null,"Queries can optionally have a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," field (specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"select | update | insert | delete"),") and a ",(0,a.kt)("inlineCode",{parentName:"p"},"varCount")," field to specify the number of variables in the query. In most circumstances, these optional fields are detected automatically by Atmo, but if for any reason they are detected incorrectly, you can set them explicitly."),(0,a.kt)("h2",{id:"query-variables"},"Query variables"),(0,a.kt)("p",null,"Queries can contain variables in either the MySQL style ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," or in the PostgreSQL style ",(0,a.kt)("inlineCode",{parentName:"p"},"$1"),"."),(0,a.kt)("p",null,"Both will be auto-detected by Atmo, and Runnables will be required to provide the correct number of arguments to fill those variables whenever a query is called."),(0,a.kt)("admonition",{title:"How does it work?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"SQL queries in Atmo are automatically turned into prepared statements that ensure your queries are executed safely. Atmo uses industry-standard database drivers to maintain a connection pool with your database. Runnables are allowed to execute the defined queries and provide the arguments to be inserted into those queries."),(0,a.kt)("p",{parentName:"admonition"},"Your code does not need to concern itself with the underlying database connections, pooling, credentials, etc. -- you can focus on building your business logic.")),(0,a.kt)("h2",{id:"executing-queries"},"Executing queries"),(0,a.kt)("p",null,"Once you've defined queries in your Queries.yaml file,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"suborbital")," Rust crate has APIs for executing various query types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use suborbital::runnable::*;\nuse suborbital::db;\nuse suborbital::db::query;\nuse suborbital::log;\nuse uuid::Uuid;\n\nstruct CreateUser{}\n\nimpl Runnable for CreateUser {\n    fn run(&self, _: Vec<u8>) -> Result<Vec<u8>, RunErr> {\n        let uuid = Uuid::new_v4().to_string();\n\n        let mut args: Vec<query::QueryArg> = Vec::new();\n        args.push(query::QueryArg::new("uuid", uuid.as_str()));\n        args.push(query::QueryArg::new("email", "connor@suborbital.dev"));\n\n        match db::insert("InsertUser", args) {\n            Ok(_) => log::info("insert successful"),\n            Err(e) => {\n                return Err(RunErr::new(500, e.message.as_str()))\n            }\n        };\n\n        let mut args2: Vec<query::QueryArg> = Vec::new();\n        args2.push(query::QueryArg::new("uuid", uuid.as_str()));\n\n        match db::update("UpdateUserWithUUID", args2.clone()) {\n            Ok(_) => log::info("update successful"),\n            Err(e) => {\n                return Err(RunErr::new(500, e.message.as_str()))\n            }\n        };\n\n        match db::select("SelectUserWithUUID", args2) {\n            Ok(result) => Ok(result),\n            Err(e) => {\n                Err(RunErr::new(500, e.message.as_str()))\n            }\n        }\n    }\n}\n\n// initialize the runner, do not edit below //\nstatic RUNNABLE: &CreateUser = &CreateUser{};\n\n#[no_mangle]\npub extern fn _start() {\n    use_runnable(RUNNABLE);\n}\n\n')),(0,a.kt)("p",null,"Runnables can execute any of the queries defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"Queries.yaml"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," they provide are inserted into the queries' variables by Atmo, and then executed.\nThe query's results are returned to the Runnable in JSON form."),(0,a.kt)("p",null,"The API is also available for JavaScript and TypeScript via the ",(0,a.kt)("inlineCode",{parentName:"p"},"db")," import:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { db } from "@suborbital/runnable"\n\ndb.select(\n    name: string,\n    variables?: Variables\n): object\n\ndb.insert(\n    name: string,\n    variables?: Variables\n): { lastInsertID?: number | string }\n\ndb.update(\n    name: string,\n    variables?: Variables\n): { rowsAffected: number }\n\ndb.delete(\n    name: string,\n    variables?: Variables\n): { rowsAffected: number }\n')))}d.isMDXComponent=!0}}]);