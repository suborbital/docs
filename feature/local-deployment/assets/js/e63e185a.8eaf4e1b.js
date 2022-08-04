"use strict";(self.webpackChunksuborbital_docs=self.webpackChunksuborbital_docs||[]).push([[2501],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(b,s(s({ref:n},c),{},{components:t})):a.createElement(b,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5902:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],o={},u="Using SQL databases",l={unversionedId:"atmo/runnable-api/sql-databases",id:"atmo/runnable-api/sql-databases",title:"Using SQL databases",description:"To connect Atmo with your SQL database, you will define the connection using the connections section of the Directive, and then define queries that your Runnables can execute.",source:"@site/docs/atmo/runnable-api/sql-databases.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/sql-databases",permalink:"/docs/feature/local-deployment/atmo/runnable-api/sql-databases",draft:!1,editUrl:"https://github.com/suborbital/docs/edit/main/website/docs/atmo/runnable-api/sql-databases.md",tags:[],version:"current",lastUpdatedAt:1647046484,formattedLastUpdatedAt:"3/12/2022",frontMatter:{},sidebar:"docs",previous:{title:"GraphQL client",permalink:"/docs/feature/local-deployment/atmo/runnable-api/graphql-client"},next:{title:"Accessing cache",permalink:"/docs/feature/local-deployment/atmo/runnable-api/cache"}},c={},d=[{value:"Defining queries",id:"defining-queries",level:2},{value:"Query variables",id:"query-variables",level:2},{value:"Executing queries",id:"executing-queries",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-sql-databases"},"Using SQL databases"),(0,i.kt)("p",null,"To connect Atmo with your SQL database, you will define the connection using the ",(0,i.kt)("inlineCode",{parentName:"p"},"connections")," section of the Directive, and then define queries that your Runnables can execute."),(0,i.kt)("p",null,"Runnables are not allowed to execute arbitrary queries. Instead, a list of named queries are provided in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queries.yaml")," file. Your Runnables are then allowed to execute them."),(0,i.kt)("p",null,"If you haven't already, take a look at ",(0,i.kt)("a",{parentName:"p",href:"/docs/feature/local-deployment/atmo/usage/connections"},"Connections")," to define the connection to your database, then come back here."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"This feature is in preview!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Atmo's Database capability is in preview, and we would love your feedback on\nthe approach as well as the Rust APIs. We are eager to improve it, and we hope\nyou'll try it out!"),(0,i.kt)("p",{parentName:"div"},"Please join our ",(0,i.kt)("a",{parentName:"p",href:"http://chat.suborbital.dev"},"Discord")," to give us feedback."))),(0,i.kt)("h2",{id:"defining-queries"},"Defining queries"),(0,i.kt)("p",null,"Once the connection to your database is defined, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queries.yaml")," file in your project's directory, right next to ",(0,i.kt)("inlineCode",{parentName:"p"},"Directive.yaml"),"."),(0,i.kt)("p",null,"It will have this structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'queries:\n  - name: "InsertUser"\n    query: |-\n      INSERT INTO users (uuid, email, created_at, state, identifier)\n      VALUES ($1, $2, NOW(), \'A\', 12345)\n\n  - name: "SelectUserWithUUID"\n    query: |-\n      SELECT * FROM users\n      WHERE uuid = $1\n\n  - name: "UpdateUserWithUUID"\n    query: |-\n      UPDATE users SET state=\'B\'\n      WHERE uuid = $1\n')),(0,i.kt)("p",null,"You can define any number of queries. Each query must have a name and a query value."),(0,i.kt)("p",null,"Queries can optionally have a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field (specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"select | update | insert | delete"),") and a ",(0,i.kt)("inlineCode",{parentName:"p"},"varCount")," field to specify the number of variables in the query. In most circumstances, these optional fields are detected automatically by Atmo, but if for any reason they are detected incorrectly, you can set them explicitly."),(0,i.kt)("h2",{id:"query-variables"},"Query variables"),(0,i.kt)("p",null,"Queries can contain variables in either the MySQL style ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," or in the PostgreSQL style ",(0,i.kt)("inlineCode",{parentName:"p"},"$1"),"."),(0,i.kt)("p",null,"Both will be auto-detected by Atmo, and Runnables will be required to provide the correct number of arguments to fill those variables whenever a query is called."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"How does it work?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"SQL queries in Atmo are automatically turned into prepared statements that ensure your queries are executed safely. Atmo uses industry-standard database drivers to maintain a connection pool with your database. Runnables are allowed to execute the defined queries and provide the arguments to be inserted into those queries."),(0,i.kt)("p",{parentName:"div"},"Your code does not need to concern itself with the underlying database connections, pooling, credentials, etc. -- you can focus on building your business logic."))),(0,i.kt)("h2",{id:"executing-queries"},"Executing queries"),(0,i.kt)("p",null,"Once you've defined queries in your Queries.yaml file,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"suborbital")," Rust crate has APIs for executing various query types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use suborbital::runnable::*;\nuse suborbital::db;\nuse suborbital::db::query;\nuse suborbital::log;\nuse uuid::Uuid;\n\nstruct CreateUser{}\n\nimpl Runnable for CreateUser {\n    fn run(&self, _: Vec<u8>) -> Result<Vec<u8>, RunErr> {\n        let uuid = Uuid::new_v4().to_string();\n\n        let mut args: Vec<query::QueryArg> = Vec::new();\n        args.push(query::QueryArg::new("uuid", uuid.as_str()));\n        args.push(query::QueryArg::new("email", "connor@suborbital.dev"));\n\n        match db::insert("InsertUser", args) {\n            Ok(_) => log::info("insert successful"),\n            Err(e) => {\n                return Err(RunErr::new(500, e.message.as_str()))\n            }\n        };\n\n        let mut args2: Vec<query::QueryArg> = Vec::new();\n        args2.push(query::QueryArg::new("uuid", uuid.as_str()));\n\n        match db::update("UpdateUserWithUUID", args2.clone()) {\n            Ok(_) => log::info("update successful"),\n            Err(e) => {\n                return Err(RunErr::new(500, e.message.as_str()))\n            }\n        };\n\n        match db::select("SelectUserWithUUID", args2) {\n            Ok(result) => Ok(result),\n            Err(e) => {\n                Err(RunErr::new(500, e.message.as_str()))\n            }\n        }\n    }\n}\n\n// initialize the runner, do not edit below //\nstatic RUNNABLE: &CreateUser = &CreateUser{};\n\n#[no_mangle]\npub extern fn _start() {\n    use_runnable(RUNNABLE);\n}\n\n')),(0,i.kt)("p",null,"Runnables can execute any of the queries defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"Queries.yaml"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," they provide are inserted into the queries' variables by Atmo, and then executed.\nThe query's results are returned to the Runnable in JSON form."),(0,i.kt)("p",null,"The API is also available for JavaScript and TypeScript via the ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," import:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { db } from "@suborbital/runnable"\n\ndb.select(\n    name: string,\n    variables?: Variables\n): object\n\ndb.insert(\n    name: string,\n    variables?: Variables\n): { lastInsertID?: number | string }\n\ndb.update(\n    name: string,\n    variables?: Variables\n): { rowsAffected: number }\n\ndb.delete(\n    name: string,\n    variables?: Variables\n): { rowsAffected: number }\n')))}m.isMDXComponent=!0}}]);