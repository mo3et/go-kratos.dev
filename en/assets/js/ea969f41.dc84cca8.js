"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9644],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(r),h=o,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9030:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return d}});var n=r(3117),o=(r(7294),r(3905));const i={id:"http",title:"HTTP",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},s=void 0,a={unversionedId:"component/transport/http",id:"component/transport/http",title:"HTTP",description:"Transporter/http is based on the gorilla/mux HTTP routing framework to implement Transporter to register http to kratos.Server().",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/transport/02-http.md",sourceDirName:"component/transport",slug:"/component/transport/http",permalink:"/en/docs/component/transport/http",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/transport/02-http.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"http",title:"HTTP",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Overview",permalink:"/en/docs/component/transport/overview"},next:{title:"gRPC",permalink:"/en/docs/component/transport/grpc"}},l={},d=[{value:"Server",id:"server",level:2},{value:"Configuration",id:"configuration",level:3},{value:"<code>Network(network string) ServerOption</code>",id:"networknetwork-string-serveroption",level:4},{value:"<code>Address(addr string) ServerOption</code>",id:"addressaddr-string-serveroption",level:4},{value:"<code>Timeout(timeout time.Duration) ServerOption</code>",id:"timeouttimeout-timeduration-serveroption",level:4},{value:"<code>Logger(logger log.Logger) ServerOption</code>",id:"loggerlogger-loglogger-serveroption",level:4},{value:"<code>Middleware(m ...middleware.Middleware) ServerOption</code>",id:"middlewarem-middlewaremiddleware-serveroption",level:4},{value:"<code>Filter(filters ...FilterFunc) ServerOption</code>",id:"filterfilters-filterfunc-serveroption",level:4},{value:"<code>RequestDecoder(dec DecodeRequestFunc) ServerOption</code>",id:"requestdecoderdec-decoderequestfunc-serveroption",level:4},{value:"<code>ResponseEncoder(en EncodeResponseFunc) ServerOption</code>",id:"responseencoderen-encoderesponsefunc-serveroption",level:4},{value:"<code>ErrorEncoder(en EncodeErrorFunc) ServerOption</code>",id:"errorencoderen-encodeerrorfunc-serveroption",level:4},{value:"<code>TLSConfig(c *tls.Config) ServerOption</code>",id:"tlsconfigc-tlsconfig-serveroption",level:4},{value:"<code>StrictSlash(strictSlash bool) ServerOption</code>",id:"strictslashstrictslash-bool-serveroption",level:4},{value:"<code>Listener(lis net.Listener) ServerOption</code>",id:"listenerlis-netlistener-serveroption",level:4},{value:"Start Server",id:"start-server",level:3},{value:"<code>NewServer(opts ...ServerOption) *Server</code>",id:"newserveropts-serveroption-server",level:4},{value:"Use kratos middleware in HTTP server",id:"use-kratos-middleware-in-http-server",level:4},{value:"Handling http requests in middleware",id:"handling-http-requests-in-middleware",level:4},{value:"Server Router",id:"server-router",level:3},{value:"<code>func (s *Server) Route(prefix string, filters ...FilterFunc) *Router</code>",id:"func-s-server-routeprefix-string-filters-filterfunc-router",level:4},{value:"<code>func (s *Server) Handle(path string, h http.Handler)</code>",id:"func-s-server-handlepath-string-h-httphandler",level:4},{value:"<code>func (s *Server) HandlePrefix(prefix string, h http.Handler)</code>",id:"func-s-server-handleprefixprefix-string-h-httphandler",level:4},{value:"<code>func (s *Server) ServeHTTP(res http.ResponseWriter, req *http.Request)</code>",id:"func-s-server-servehttpres-httpresponsewriter-req-httprequest",level:4},{value:"Client",id:"client",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"<code>WithTransport(trans http.RoundTripper) ClientOption</code>",id:"withtransporttrans-httproundtripper-clientoption",level:4},{value:"<code>WithTimeout(d time.Duration) ClientOption</code>",id:"withtimeoutd-timeduration-clientoption",level:4},{value:"<code>WithUserAgent(ua string) ClientOption</code>",id:"withuseragentua-string-clientoption",level:4},{value:"<code>WithMiddleware(m ...middleware.Middleware) ClientOption</code>",id:"withmiddlewarem-middlewaremiddleware-clientoption",level:4},{value:"<code>WithEndpoint(endpoint string) ClientOption</code>",id:"withendpointendpoint-string-clientoption",level:4},{value:"<code>WithDiscovery(d registry.Discovery) ClientOption</code>",id:"withdiscoveryd-registrydiscovery-clientoption",level:4},{value:"<code>WithRequestEncoder(encoder EncodeRequestFunc) ClientOption</code>",id:"withrequestencoderencoder-encoderequestfunc-clientoption",level:4},{value:"<code>WithResponseDecoder(decoder DecodeResponseFunc) ClientOption</code>",id:"withresponsedecoderdecoder-decoderesponsefunc-clientoption",level:4},{value:"<code>WithErrorDecoder(errorDecoder DecodeErrorFunc) ClientOption</code>",id:"witherrordecodererrordecoder-decodeerrorfunc-clientoption",level:4},{value:"<code>WithBalancer(b balancer.Balancer) ClientOption</code>",id:"withbalancerb-balancerbalancer-clientoption",level:4},{value:"<code>WithBlock() ClientOption</code>",id:"withblock-clientoption",level:4},{value:"<code>WithTLSConfig(c *tls.Config) ClientOption</code>",id:"withtlsconfigc-tlsconfig-clientoption",level:4},{value:"Client usage",id:"client-usage",level:3},{value:"Create a client connection",id:"create-a-client-connection",level:4},{value:"Use middleware",id:"use-middleware",level:4},{value:"Use service discovery",id:"use-service-discovery",level:4}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Transporter/http is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gorilla/mux"},"gorilla/mux")," HTTP routing framework to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"Transporter")," to register http to ",(0,o.kt)("inlineCode",{parentName:"p"},"kratos.Server()"),"."),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("h4",{id:"networknetwork-string-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Network(network string) ServerOption")),(0,o.kt)("p",null,"Configure the network protocol of the server, such as tcp"),(0,o.kt)("h4",{id:"addressaddr-string-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Address(addr string) ServerOption")),(0,o.kt)("p",null,"Configure the server listening address"),(0,o.kt)("h4",{id:"timeouttimeout-timeduration-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Timeout(timeout time.Duration) ServerOption")),(0,o.kt)("p",null,"Configure server timeout settings"),(0,o.kt)("h4",{id:"loggerlogger-loglogger-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Logger(logger log.Logger) ServerOption")),(0,o.kt)("p",null,"Configure log which used in http server"),(0,o.kt)("h4",{id:"middlewarem-middlewaremiddleware-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Middleware(m ...middleware.Middleware) ServerOption")),(0,o.kt)("p",null,"Configure the kratos service middleware on the server side"),(0,o.kt)("h4",{id:"filterfilters-filterfunc-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Filter(filters ...FilterFunc) ServerOption")),(0,o.kt)("p",null,"Configure the server-side kratos global HTTP native Fitler, the execution order of this Filter is before the Service middleware"),(0,o.kt)("h4",{id:"requestdecoderdec-decoderequestfunc-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"RequestDecoder(dec DecodeRequestFunc) ServerOption")),(0,o.kt)("p",null,"Configure the HTTP Request Decode method of the Kratos server to parse the Request Body into a user-defined pb structure\nLet's see how the default RequestDecoder in kratos is implemented:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func DefaultRequestDecoder(r *http.Request, v interface{}) error {\n    // Extract the corresponding decoder from the Content-Type of the Request Header\n    codec, ok := CodecForRequest(r, "Content-Type")\n    // If the corresponding decoder cannot be found, an error will be reported at this time\n    if !ok {\n        return errors.BadRequest("CODEC", r.Header.Get("Content-Type"))\n    }\n    data, err := ioutil.ReadAll(r.Body)\n    if err != nil {\n        return errors.BadRequest("CODEC", err.Error())\n    }\n    if err = codec.Unmarshal(data, v); err != nil {\n        return errors.BadRequest("CODEC", err.Error())\n    }\n    return nil\n}\n\n')),(0,o.kt)("p",null,"Then if we want to extend or replace the parsing implementation corresponding to Content-Type, we can use http.RequestDecoder() to replace Kratos\u2019s default RequestDecoder,\nOr it can be extended by registering or overwriting a codec corresponding to a Content-Type in encoding"),(0,o.kt)("h4",{id:"responseencoderen-encoderesponsefunc-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"ResponseEncoder(en EncodeResponseFunc) ServerOption")),(0,o.kt)("p",null,"Configure the HTTP Response Encode method of the Kratos server to serialize the reply structure in the user pb definition and write it into the Response Body\nLet's see how the default ResponseEncoder in kratos is implemented:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func DefaultResponseEncoder(w http.ResponseWriter, r *http.Request, v interface{}) error {\n    // Extract the corresponding encoder from the Accept of Request Header\n    // If not found, ignore the error and use the default json encoder\n    codec, _ := CodecForRequest(r, "Accept")\n    data, err := codec.Marshal(v)\n    if err != nil {\n        return err\n    }\n    // Write the scheme of the encoder in the Response Header\n    w.Header().Set("Content-Type", httputil.ContentType(codec.Name()))\n    w.Write(data)\n    return nil\n}\n')),(0,o.kt)("p",null,"Then if we want to extend or replace the serialization implementation corresponding to Accept, we can use http.ResponseEncoder() to replace the default ResponseEncoder of Kratos,\nOr it can be extended by registering or overwriting a codec corresponding to Accept in encoding"),(0,o.kt)("h4",{id:"errorencoderen-encodeerrorfunc-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"ErrorEncoder(en EncodeErrorFunc) ServerOption")),(0,o.kt)("p",null,"Configure the HTTP Error Encode method of the Kratos server to serialize the error thrown by the business and write it into the Response Body, and set the HTTP Status Code\nLet's see how the default ErrorEncoder in kratos is implemented:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func DefaultErrorEncoder(w http.ResponseWriter, r *http.Request, err error) {\n    // Get error and convert it into kratos Error entity\n    se := errors.FromError(err)\n    // Extract the corresponding encoder from the Accept of Request Header\n    codec, _ := CodecForRequest(r, "Accept")\n    body, err := codec.Marshal(se)\n    if err != nil {\n        w.WriteHeader(http.StatusInternalServerError)\n        return\n    }\n    w.Header().Set("Content-Type", httputil.ContentType(codec.Name()))\n    // Set HTTP Status Code\n    w.WriteHeader(int(se.Code))\n    w.Write(body)\n}\n\n')),(0,o.kt)("h4",{id:"tlsconfigc-tlsconfig-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"TLSConfig(c *tls.Config) ServerOption")),(0,o.kt)("p",null,"Configure the TLSConfig of the kratos to encrypting http traffic.\nLet's see how the default TLSConfig in kratos is implemented:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TLSConfig with TLS config.\nfunc TLSConfig(c *tls.Config) ServerOption {\n    return func(o *Server) {\n        o.tlsConf = c\n    }\n}\n")),(0,o.kt)("h4",{id:"strictslashstrictslash-bool-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"StrictSlash(strictSlash bool) ServerOption")),(0,o.kt)("p",null,"Configure the StrictSlash of the kratos order the router to redirect URL routes with trailing slashes to those without them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// StrictSlash is with mux\'s StrictSlash\n// If true, when the path pattern is "/path/", accessing "/path" will\n// redirect to the former and vice versa.\nfunc StrictSlash(strictSlash bool) ServerOption {\n    return func(o *Server) {\n        o.strictSlash = strictSlash\n    }\n}\n')),(0,o.kt)("h4",{id:"listenerlis-netlistener-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Listener(lis net.Listener) ServerOption")),(0,o.kt)("p",null,"Configure the Listener of the kratos implement a generic network listener for stream-oriented protocols."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Listener with server lis\nfunc Listener(lis net.Listener) ServerOption {\n    return func(s *Server) {\n        s.lis = lis\n    }\n}\n")),(0,o.kt)("h3",{id:"start-server"},"Start Server"),(0,o.kt)("h4",{id:"newserveropts-serveroption-server"},(0,o.kt)("inlineCode",{parentName:"h4"},"NewServer(opts ...ServerOption) *Server")),(0,o.kt)("p",null,"Pass in opts configuration and start HTTP Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'hs := http.NewServer()\napp := kratos.New(\n    kratos.Name("kratos"),\n    kratos.Version("v1.0.0"),\n    kratos.Server(hs),\n)\n')),(0,o.kt)("h4",{id:"use-kratos-middleware-in-http-server"},"Use kratos middleware in HTTP server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'hs := http.NewServer(\n    http.Address(":8000"),\n    http.Middleware(\n        logging.Server(),\n    ),\n)\n')),(0,o.kt)("h4",{id:"handling-http-requests-in-middleware"},"Handling http requests in middleware"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"if tr, ok := transport.FromServerContext(ctx); ok {\n    kind = tr.Kind().String()\n    operation = tr.Operation()\n    // Assert that HTTP transport can get special information\n    if ht, ok := tr.(*http.Transport); ok {\n        fmt.Println(ht.Request())\n    }\n}\n")),(0,o.kt)("h3",{id:"server-router"},"Server Router"),(0,o.kt)("h4",{id:"func-s-server-routeprefix-string-filters-filterfunc-router"},(0,o.kt)("inlineCode",{parentName:"h4"},"func (s *Server) Route(prefix string, filters ...FilterFunc) *Router")),(0,o.kt)("p",null,"Create a new HTTP Server Router, which can pass Kraots' HTTP Filter interceptor at the same time\nLet's look at the usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'r := s.Route("/v1")\nr.GET("/helloworld/{name}", _Greeter_SayHello0_HTTP_Handler(srv))\n')),(0,o.kt)("h4",{id:"func-s-server-handlepath-string-h-httphandler"},(0,o.kt)("inlineCode",{parentName:"h4"},"func (s *Server) Handle(path string, h http.Handler)")),(0,o.kt)("p",null,"Add the path to the route and use the standard HTTP Handler to handle it"),(0,o.kt)("h4",{id:"func-s-server-handleprefixprefix-string-h-httphandler"},(0,o.kt)("inlineCode",{parentName:"h4"},"func (s *Server) HandlePrefix(prefix string, h http.Handler)")),(0,o.kt)("p",null,"The prefix matching method adds the prefix to the route and uses the standard HTTP Handler to handle it"),(0,o.kt)("h4",{id:"func-s-server-servehttpres-httpresponsewriter-req-httprequest"},(0,o.kt)("inlineCode",{parentName:"h4"},"func (s *Server) ServeHTTP(res http.ResponseWriter, req *http.Request)")),(0,o.kt)("p",null,"Implemented the HTTP Handler interface of the standard library"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Reference for other routing usage methods: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/examples/tree/main/http/middlewares"},"https://github.com/go-kratos/examples/tree/main/http/middlewares"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gin-gonic/gin"},"gin")," framework in Kratos HTTP: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/examples/http/gin/main.go"},"https://github.com/go-kratos/kratos/blob/main/examples/http/gin/main.go"))),(0,o.kt)("h2",{id:"client"},"Client"),(0,o.kt)("h3",{id:"configuration-1"},"Configuration"),(0,o.kt)("h4",{id:"withtransporttrans-httproundtripper-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithTransport(trans http.RoundTripper) ClientOption")),(0,o.kt)("p",null,"Configure the client's HTTP RoundTripper"),(0,o.kt)("h4",{id:"withtimeoutd-timeduration-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithTimeout(d time.Duration) ClientOption")),(0,o.kt)("p",null,"Configure the default timeout time of the client request, if there is a link timeout, the link timeout time is preferred"),(0,o.kt)("h4",{id:"withuseragentua-string-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithUserAgent(ua string) ClientOption")),(0,o.kt)("p",null,"Configure the default User-Agent of the client"),(0,o.kt)("h4",{id:"withmiddlewarem-middlewaremiddleware-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithMiddleware(m ...middleware.Middleware) ClientOption")),(0,o.kt)("p",null,"Configure the kratos client middleware used by the client"),(0,o.kt)("h4",{id:"withendpointendpoint-string-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithEndpoint(endpoint string) ClientOption")),(0,o.kt)("p",null,"Configure the peer connection address used by the client, if you do not use service discovery, it is ip:port, if you use service discovery, the format is discovery://\\<authority",">","/\\<serviceName",">",", here\\<authority",">"," You can fill in the blanks by default"),(0,o.kt)("h4",{id:"withdiscoveryd-registrydiscovery-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithDiscovery(d registry.Discovery) ClientOption")),(0,o.kt)("p",null,"Configure service discovery used by the client"),(0,o.kt)("h4",{id:"withrequestencoderencoder-encoderequestfunc-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithRequestEncoder(encoder EncodeRequestFunc) ClientOption")),(0,o.kt)("p",null,"Configure the HTTP Request Encode method of the client to serialize the user-defined pb structure to the Request Body\nLet's look at the default encoder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func DefaultRequestEncoder(ctx context.Context, contentType string, in interface{}) ([]byte, error) {\n    // Obtain the encoder type through the externally configured contentType\n    name := httputil.ContentSubtype(contentType)\n    // Get the actual encoder\n    body, err := encoding.GetCodec(name).Marshal(in)\n    if err != nil {\n        return nil, err\n    }\n    return body, err\n}\n")),(0,o.kt)("h4",{id:"withresponsedecoderdecoder-decoderesponsefunc-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithResponseDecoder(decoder DecodeResponseFunc) ClientOption")),(0,o.kt)("p",null,"Configure the HTTP Response Decode method of the client to parse the Response Body into a user-defined pb structure\nLet's see how the default decoder in kratos is implemented:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func DefaultResponseDecoder(ctx context.Context, res *http.Response, v interface{}) error {\n    defer res.Body.Close()\n    data, err := ioutil.ReadAll(res.Body)\n    if err != nil {\n        return err\n    }\n    // Here you get the corresponding decoder according to the Content-Type in the Response Header\n    // Then proceed to Unmarshal\n    return CodecForResponse(res).Unmarshal(data, v)\n}\n")),(0,o.kt)("h4",{id:"witherrordecodererrordecoder-decodeerrorfunc-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithErrorDecoder(errorDecoder DecodeErrorFunc) ClientOption")),(0,o.kt)("p",null,"Configure the client's Error parsing method\nLet's take a look at how the default error decoder in kratos is implemented:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func DefaultErrorDecoder(ctx context.Context, res *http.Response) error {\n    // HTTP Status Code is the highest priority\n    if res.StatusCode >= 200 && res.StatusCode <= 299 {\n        return nil\n    }\n    defer res.Body.Close()\n    data, err := ioutil.ReadAll(res.Body)\n    if err == nil {\n        e := new(errors.Error)\n        // Here you get the corresponding response decoder according to the Content-Type in the Response Header\n        // Then parse out the main content of the error\n        if err = CodecForResponse(res).Unmarshal(data, e); err == nil {\n            // HTTP Status Code is the highest priority\n            e.Code = int32(res.StatusCode)\n            return e\n        }\n    }\n    // If no valid Response Body is returned, the HTTP Status Code shall prevail\n    return errors.Errorf(res.StatusCode, errors.UnknownReason, err.Error())\n}\n")),(0,o.kt)("h4",{id:"withbalancerb-balancerbalancer-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithBalancer(b balancer.Balancer) ClientOption")),(0,o.kt)("p",null,"Configure the client's load balancing strategy"),(0,o.kt)("h4",{id:"withblock-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithBlock() ClientOption")),(0,o.kt)("p",null,"Configure the dial policy of the client to be blocking (it will not return until the service discovers the node), and the default is asynchronous and non-blocking"),(0,o.kt)("h4",{id:"withtlsconfigc-tlsconfig-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithTLSConfig(c *tls.Config) ClientOption")),(0,o.kt)("p",null,"Configure the client's tls config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// WithTLSConfig with tls config.\nfunc WithTLSConfig(c *tls.Config) ClientOption {\n    return func(o *clientOptions) {\n        o.tlsConf = c\n    }\n}\n")),(0,o.kt)("h3",{id:"client-usage"},"Client usage"),(0,o.kt)("h4",{id:"create-a-client-connection"},"Create a client connection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\n    context.Background(),\n    http.WithEndpoint("127.0.0.1:8000"),\n)\n')),(0,o.kt)("h4",{id:"use-middleware"},"Use middleware"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\n    context.Background(),\n    http.WithEndpoint("127.0.0.1:9000"),\n    http.WithMiddleware(\n        recovery.Recovery(),\n    ),\n)\n')),(0,o.kt)("h4",{id:"use-service-discovery"},"Use service discovery"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\n    context.Background(),\n    http.WithEndpoint("discovery:///helloworld"),\n    http.WithDiscovery(r),\n)\n')))}p.isMDXComponent=!0}}]);