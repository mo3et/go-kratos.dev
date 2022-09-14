"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3369],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||g[d]||a;return r?o.createElement(m,l(l({ref:t},c),{},{components:r})):o.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6490:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var o=r(3117),n=(r(7294),r(3905));const a={id:"api",title:"API \u5b9a\u4e49",description:"Kratos API \u4e0e\u7528\u6237\u7684\u901a\u4fe1\u534f\u8bae\uff0c\u901a\u5e38\u662f REST API \u548c RPC API \u4f5c\u4e3a\u4f20\u8f93\u5c42\u534f\u8bae\uff0c\u800c Kratos \u4e3b\u8981\u53c2\u8003 Google API \u6307\u5357\uff0c\u5b9e\u73b0\u4e86\u5bf9\u5e94\u901a\u4fe1\u534f\u8bae\u652f\u6301\uff0c\u5e76\u4e14\u9075\u5b88\u4e86 gRPC API \u4f7f\u7528 HTTP \u6620\u5c04\u529f\u80fd\u8fdb\u884c JSON/HTTP \u7684\u652f\u6301",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,p={unversionedId:"component/api",id:"component/api",title:"API \u5b9a\u4e49",description:"Kratos API \u4e0e\u7528\u6237\u7684\u901a\u4fe1\u534f\u8bae\uff0c\u901a\u5e38\u662f REST API \u548c RPC API \u4f5c\u4e3a\u4f20\u8f93\u5c42\u534f\u8bae\uff0c\u800c Kratos \u4e3b\u8981\u53c2\u8003 Google API \u6307\u5357\uff0c\u5b9e\u73b0\u4e86\u5bf9\u5e94\u901a\u4fe1\u534f\u8bae\u652f\u6301\uff0c\u5e76\u4e14\u9075\u5b88\u4e86 gRPC API \u4f7f\u7528 HTTP \u6620\u5c04\u529f\u80fd\u8fdb\u884c JSON/HTTP \u7684\u652f\u6301",source:"@site/docs/component/01-api.md",sourceDirName:"component",slug:"/component/api",permalink:"/docs/component/api",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/01-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"api",title:"API \u5b9a\u4e49",description:"Kratos API \u4e0e\u7528\u6237\u7684\u901a\u4fe1\u534f\u8bae\uff0c\u901a\u5e38\u662f REST API \u548c RPC API \u4f5c\u4e3a\u4f20\u8f93\u5c42\u534f\u8bae\uff0c\u800c Kratos \u4e3b\u8981\u53c2\u8003 Google API \u6307\u5357\uff0c\u5b9e\u73b0\u4e86\u5bf9\u5e94\u901a\u4fe1\u534f\u8bae\u652f\u6301\uff0c\u5e76\u4e14\u9075\u5b88\u4e86 gRPC API \u4f7f\u7528 HTTP \u6620\u5c04\u529f\u80fd\u8fdb\u884c JSON/HTTP \u7684\u652f\u6301",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u6846\u67b6\u7ec4\u4ef6",permalink:"/docs/category/\u6846\u67b6\u7ec4\u4ef6"},next:{title:"\u914d\u7f6e",permalink:"/docs/component/config"}},i={},s=[{value:"\u5b9a\u4e49\u63a5\u53e3",id:"\u5b9a\u4e49\u63a5\u53e3",level:2},{value:"\u751f\u6210\u63a5\u53e3",id:"\u751f\u6210\u63a5\u53e3",level:2},{value:"\u6ce8\u518c\u63a5\u53e3",id:"\u6ce8\u518c\u63a5\u53e3",level:2},{value:"References",id:"references",level:2}],c={toc:s};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"API \u4e0e\u7528\u6237\u7684\u901a\u4fe1\u534f\u8bae\uff0c\u901a\u5e38\u662f REST API \u548c RPC API \u4f5c\u4e3a\u4f20\u8f93\u5c42\u534f\u8bae\uff0c\u800c Kratos \u4e3b\u8981\u53c2\u8003 Google API \u6307\u5357\uff0c\u5b9e\u73b0\u4e86\u5bf9\u5e94\u901a\u4fe1\u534f\u8bae\u652f\u6301\uff0c\u5e76\u4e14\u9075\u5b88\u4e86 gRPC API \u4f7f\u7528 HTTP \u6620\u5c04\u529f\u80fd\u8fdb\u884c JSON/HTTP \u7684\u652f\u6301\u3002"),(0,n.kt)("p",null,"\u4e5f\u5c31\u662f\u901a\u8fc7\u5b9a\u4e49 proto \u5373\u53ef\u4f7f\u7528 REST API \u548c RPC API\uff0c\u901a\u8fc7\u7c7b\u4f3c Google API \u7684\u4ed3\u5e93\u65b9\u5f0f\u8fdb\u884c API Schema \u7684\u7ba1\u7406\u3002"),(0,n.kt)("h2",{id:"\u5b9a\u4e49\u63a5\u53e3"},"\u5b9a\u4e49\u63a5\u53e3"),(0,n.kt)("p",null,"\u901a\u8fc7 Protobuf IDL \u5b9a\u4e49\u5bf9\u5e94\u7684 REST API \u548c gRPC API\uff1a"),(0,n.kt)("p",null,"api/helloworld/v1/greeter.proto"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage helloworld.v1;\n\nimport "google/api/annotations.proto";\n\noption go_package = "github.com/go-kratos/service-layout/api/helloworld/v1;v1";\noption java_multiple_files = true;\noption java_package = "dev.kratos.api.helloworld.v1";\noption java_outer_classname = "HelloWorldProtoV1";\n\n// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply)  {\n    option (google.api.http) = {\n        // \u5b9a\u4e49\u4e00\u4e2a GET \u63a5\u53e3\uff0c\u5e76\u4e14\u628a name \u6620\u5c04\u5230 HelloRequest\n        get: "/helloworld/{name}",\n        // \u53ef\u4ee5\u6dfb\u52a0\u9644\u52a0\u63a5\u53e3\n        additional_bindings {\n            // \u5b9a\u4e49\u4e00\u4e2a POST \u63a5\u53e3\uff0c\u5e76\u4e14\u628a body \u6620\u5c04\u5230 HelloRequest\n            post: "/v1/greeter/say_hello",\n            body: "*",\n        }\n    };\n  }\n}\n\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n')),(0,n.kt)("h2",{id:"\u751f\u6210\u63a5\u53e3"},"\u751f\u6210\u63a5\u53e3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u751f\u6210 proto \u6a21\u677f\nkratos proto add api/helloworld/v1/greeter.proto\n# \u751f\u6210 client \u6e90\u7801\nkratos proto client api/helloworld/v1/greeter.proto\n# \u751f\u6210 server \u6e90\u7801\nkratos proto server api/helloworld/v1/greeter.proto -t internal/service\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-api"},"client:\n|____api\n| |____helloworld\n| | |____v1\n| | | |____greeter.pb.go\n| | | |____greeter.proto\n| | | |____greeter_http.pb.go\n| | | |____greeter_grpc.pb.go\n\nserver:\n| |____service\n| | |____greeter.go\n")),(0,n.kt)("h2",{id:"\u6ce8\u518c\u63a5\u53e3"},"\u6ce8\u518c\u63a5\u53e3"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HTTP API")," \u662f\u901a\u8fc7 protoc-gen-go-http \u63d2\u4ef6\u8fdb\u884c\u751f\u6210 http.Handler\uff0c\u7136\u540e\u53ef\u4ee5\u6ce8\u518c\u5230 HTTP Server \u4e2d\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/v2/transport/http"\n\ngreeter := &GreeterService{}\nsrv := http.NewServer(http.Address(":8000"))\nsrv.HandlePrefix("/", v1.NewGreeterHandler(greeter))\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"gRPC API")," \u662f\u901a\u8fc7 protoc-gen-go-grpc \u63d2\u4ef6\u8fdb\u884c\u751f\u6210 gRPC Register\uff0c\u7136\u540e\u53ef\u4ee5\u6ce8\u518c\u5230 GRPC Server \u4e2d\uff1b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/v2/transport/grpc"\n\ngreeter := &GreeterService{}\nsrv := grpc.NewServer(grpc.Address(":9000"))\nv1.RegisterGreeterServer(srv, greeter)\n')),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/apis/design"},"https://cloud.google.com/apis/design")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/endpoints/docs/grpc/transcoding"},"https://cloud.google.com/endpoints/docs/grpc/transcoding")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/googleapis/googleapis"},"https://github.com/googleapis/googleapis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://go-kratos.dev/docs/guide/api-protobuf/"},"https://go-kratos.dev/docs/guide/api-protobuf/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/style"},"https://developers.google.com/protocol-buffers/docs/style")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"https://developers.google.com/protocol-buffers/docs/proto3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://colobu.com/2017/03/16/Protobuf3-language-guide/"},"https://colobu.com/2017/03/16/Protobuf3-language-guide/"))))}g.isMDXComponent=!0}}]);