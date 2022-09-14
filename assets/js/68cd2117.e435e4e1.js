"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[252],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,s=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(s,i(i({ref:t},d),{},{components:n})):r.createElement(s,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const o={id:"auth",title:"\u8ba4\u8bc1",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP","Auth"]},i=void 0,l={unversionedId:"component/middleware/auth",id:"component/middleware/auth",title:"\u8ba4\u8bc1",description:"Auth \u4e2d\u95f4\u4ef6\u7528\u4e8e\u8ba4\u8bc1\u8bf7\u6c42\u3002\u53ea\u6709\u901a\u8fc7\u8ba4\u8bc1\u7684\u8bf7\u6c42\u624d\u80fd\u88ab\u5904\u7406\uff0c\u7ed3\u5408 selector \u4e2d\u95f4\u4ef6\u53ef\u5b9e\u73b0\u767d\u540d\u5355\u3002\u76ee\u524d\u63d0\u4f9b\u57fa\u4e8eJWT\u8ba4\u8bc1\u7684\u4e2d\u95f4\u4ef6\u3002",source:"@site/docs/component/middleware/02-auth.md",sourceDirName:"component/middleware",slug:"/component/middleware/auth",permalink:"/docs/component/middleware/auth",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/02-auth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"auth",title:"\u8ba4\u8bc1",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP","Auth"]},sidebar:"docs",previous:{title:"\u6982\u89c8",permalink:"/docs/component/middleware/overview"},next:{title:"\u7194\u65ad\u5668",permalink:"/docs/component/middleware/circuitbreaker"}},p={},c=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"server",id:"server",level:4},{value:"client",id:"client",level:4},{value:"\u914d\u7f6eOptions",id:"\u914d\u7f6eoptions",level:3},{value:"<code>WithSigningMethod()</code>",id:"withsigningmethod",level:4},{value:"<code>WithClaims()</code>",id:"withclaims",level:4},{value:"\u7b80\u6613Demo",id:"\u7b80\u6613demo",level:3},{value:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f",id:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f",level:3},{value:"\u767d\u540d\u5355\u53c2\u8003\u65b9\u6848",id:"\u767d\u540d\u5355\u53c2\u8003\u65b9\u6848",level:3},{value:"\u7b7e\u53d1 <code>JWT Token</code>",id:"\u7b7e\u53d1-jwt-token",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Auth")," \u4e2d\u95f4\u4ef6\u7528\u4e8e\u8ba4\u8bc1\u8bf7\u6c42\u3002\u53ea\u6709\u901a\u8fc7\u8ba4\u8bc1\u7684\u8bf7\u6c42\u624d\u80fd\u88ab\u5904\u7406\uff0c\u7ed3\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," \u4e2d\u95f4\u4ef6\u53ef\u5b9e\u73b0\u767d\u540d\u5355\u3002\u76ee\u524d\u63d0\u4f9b\u57fa\u4e8eJWT\u8ba4\u8bc1\u7684\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h4",{id:"server"},"server"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," \u79d8\u94a5\u751f\u6210\u51fd\u6570\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"http")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'httpSrv := http.NewServer(\n    http.Address(":8000"),\n    http.Middleware(\n        jwt.Server(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(testKey), nil\n        }),\n    ),\n)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"grpc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'grpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        jwt.Server(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(testKey), nil\n        }),\n    ),\n)\n')),(0,a.kt)("h4",{id:"client"},"client"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," \u79d8\u94a5\u751f\u6210\u51fd\u6570\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"http")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\n    context.Background(),\n    http.WithEndpoint("127.0.0.1:8000"),\n    http.WithMiddleware(\n        jwt.Client(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(serviceTestKey), nil\n        }),\n    ),\n)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"grpc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'con, _ := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("xxx.xxx.domain"),\n    grpc.WithMiddleware(\n        jwt.Client(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(serviceTestKey), nil\n        }),\n    ),\n)\n')),(0,a.kt)("h3",{id:"\u914d\u7f6eoptions"},"\u914d\u7f6eOptions"),(0,a.kt)("h4",{id:"withsigningmethod"},(0,a.kt)("inlineCode",{parentName:"h4"},"WithSigningMethod()")),(0,a.kt)("p",null,"\u7528\u4e8e\u914d\u7f6eJWT\u7b7e\u540d\u7684\u7b97\u6cd5\u3002\u9002\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"client"),"\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import jwtv4 "github.com/golang-jwt/jwt/v4"\n\njwt.WithSigningMethod(jwtv4.SigningMethodHS256)\n')),(0,a.kt)("h4",{id:"withclaims"},(0,a.kt)("inlineCode",{parentName:"h4"},"WithClaims()")),(0,a.kt)("p",null,"\u7528\u4e8e\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"claims"),"\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"client")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"claims"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"claims := &jwtv4.StandardClaims{}\njwt.WithClaims(func()jwtv4.Claims{return claims})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"server")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"claims"),"\uff1a")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"claims")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," \u7684\u914d\u7f6e\u65b9\u5f0f\u6709\u4e00\u5b9a\u7684\u533a\u522b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u65b0\u5bf9\u8c61\u3002\u76ee\u7684\u4e3a\u4e86\u907f\u514d\u51fa\u73b0\u5e76\u53d1\u5199\u7684\u95ee\u9898\u3002"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"jwt.WithClaims(func()jwtv4.Claims{return &jwtv4.StandardClaims{}})\n"))),(0,a.kt)("h3",{id:"\u7b80\u6613demo"},"\u7b80\u6613Demo"),(0,a.kt)("p",null,"\u4e00\u4e2a\u7b80\u6613\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/9743ad8d32890258177e0335d1a0741e9d45833e/examples/auth/jwt/main.go"},"demo"),"\uff0c\u5305\u542b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," \u7684\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," \u914d\u7f6e\u7684\u662f\u53e6\u5916\u4e00\u4e2a\u76d1\u542c\u4e869001\u7684\u670d\u52a1\uff0c\u5e76\u4e14\u8be5\u670d\u52a1\u7684key\u548c\u8fd9\u91cc\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"serviceTestKey")," \u4e00\u6837\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'con, _ := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("dns:///127.0.0.1:9001"), // \u672c\u5730\u76849001\u670d\u52a1\n    grpc.WithMiddleware(\n        jwt.Client(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(serviceTestKey), nil\n        }),\n    ),\n)\n')),(0,a.kt)("h3",{id:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f"},"\u83b7\u53d6\u7528\u6237\u4fe1\u606f"),(0,a.kt)("p",null,"\u4f7f\u7528\u8005\u53ef\u901a\u8fc7\u63d0\u4f9b\u7684\u63a5\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt.FromContext(ctx)")," \u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT Token")," \u7684\u8bf7\u6c42\uff0c\u7ecf\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u4fa7\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt")," \u4e2d\u95f4\u4ef6\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"token")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"claims")," \u4f1a\u653e\u8fdb\u4e0a\u4e0b\u6587 ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u4e2d\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6b64\u65f6\u4f7f\u7528\u8005\u901a\u8fc7\u63d0\u4f9b\u7684\u63a5\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt.FromContext(ctx)")," \u5373\u53ef\u83b7\u53d6\u4e0a\u4e0b\u6587\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"claims")," \u5bf9\u8c61\uff0c\u800c\u4e00\u822c\u7528\u6237\u4fe1\u606f\u662f\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"claims")," \u91cc\u9762\u7684\u3002\u4f7f\u7528\u8005\u9700\u8981\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"claims")," \u65ad\u8a00\u540e\u624d\u80fd\u8fdb\u4e00\u6b65\u5904\u7406\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"claims")," \u7c7b\u578b\u7684\u5b9a\u4e49\u504f\u4e1a\u52a1\u6027\u8d28\uff0c\u548ctoken\u7b7e\u53d1\u7684\u4e1a\u52a1\u8026\u5408\u3002\u7b7e\u53d1\u65f6\u4f7f\u7528\u7684\u7c7b\u578b\uff0c\u8fd9\u91cc\u5c31\u9700\u8981\u65ad\u8a00\u5bf9\u5e94\u7684\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u63a5\u53e3\u539f\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"func FromContext(ctx context.Context) (token jwt.Claims, ok bool)\n")),(0,a.kt)("h3",{id:"\u767d\u540d\u5355\u53c2\u8003\u65b9\u6848"},"\u767d\u540d\u5355\u53c2\u8003\u65b9\u6848"),(0,a.kt)("p",null,"\u7ed3\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," \u4e2d\u95f4\u4ef6\u4f7f\u7528\u5b9e\u73b0\u767d\u540d\u5355\u673a\u5236\u3002\u53ef\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/beer-shop/blob/b12402ebc618c4563e69757e65a6db4dd767a869/app/shop/interface/internal/server/http.go#L26"},"\u6b64\u5904"),"\u3002"),(0,a.kt)("h3",{id:"\u7b7e\u53d1-jwt-token"},"\u7b7e\u53d1 ",(0,a.kt)("inlineCode",{parentName:"h3"},"JWT Token")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8fd9\u91cc\u7b7e\u53d1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT Token")," \u53ea\u662f\u7528\u4e8e\u670d\u52a1\u95f4\u7b80\u5355\u8ba4\u8bc1\uff0c\u5e76\u4e0d\u80fd\u4f5c\u4e3a\u4e1a\u52a1\u4ee4\u724c\u4f7f\u7528\u3002\u56e0\u6b64\u4e5f\u6ca1\u6709\u5f00\u653e\u7b7e\u53d1\u7684\u63a5\u53e3\uff0c\u4e1a\u52a1\u4ee4\u724c\u9700\u8981\u4f7f\u7528\u8005\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u81ea\u884c\u5b9e\u73b0\u7b7e\u53d1\u903b\u8f91\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Token")," \u7684\u7b7e\u53d1\u53d1\u751f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," \u4fa7\uff0c\u4f7f\u7528\u8005\u786e\u4fdd ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u4f7f\u7528\u76f8\u540c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," \u548c\u7b7e\u540d\u7b97\u6cd5\u5373\u53ef\u3002\u7b7e\u53d1\u65f6\u9644\u5e26\u7684\u7528\u6237\u4fe1\u606f\u6216\u8005\u5176\u4ed6\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"WithClaims()")," \u6765\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u53c2\u8003\u6e90\u7801\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/9743ad8d32890258177e0335d1a0741e9d45833e/middleware/auth/jwt/jwt.go#L124"},"https://github.com/go-kratos/kratos/blob/9743ad8d32890258177e0335d1a0741e9d45833e/middleware/auth/jwt/jwt.go#L124")))}u.isMDXComponent=!0}}]);