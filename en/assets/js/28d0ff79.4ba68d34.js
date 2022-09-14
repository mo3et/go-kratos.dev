"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4429],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,g=p["".concat(a,".").concat(d)]||p[d]||l[d]||i;return r?n.createElement(g,s(s({ref:t},m),{},{components:r})):n.createElement(g,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5845:function(e,t,r){r.r(t),r.d(t,{assets:function(){return a},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905));const i={id:"metrics",title:"Metrics",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},s=void 0,c={unversionedId:"component/middleware/metrics",id:"component/middleware/metrics",title:"Metrics",description:"Metrics middleware is used to monitor performance metrics for services, counting request time and request counts.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/05-metrics.md",sourceDirName:"component/middleware",slug:"/component/middleware/metrics",permalink:"/en/docs/component/middleware/metrics",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/05-metrics.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"metrics",title:"Metrics",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Logging",permalink:"/en/docs/component/middleware/logging"},next:{title:"Rate Limiter",permalink:"/en/docs/component/middleware/ratelimit"}},a={},u=[{value:"Configuration",id:"configuration",level:3},{value:"<code>WithSeconds()</code>",id:"withseconds",level:4},{value:"<code>WithRequests()</code>",id:"withrequests",level:4},{value:"Usage",id:"usage",level:3},{value:"Prometheus",id:"prometheus",level:4},{value:"To configure metrics in servers",id:"to-configure-metrics-in-servers",level:4},{value:"To configure metrics in clients",id:"to-configure-metrics-in-clients",level:4},{value:"References",id:"references",level:3}],m={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Metrics middleware is used to monitor performance metrics for services, counting request time and request counts."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Two configuration methods are available in metrics middleware ",(0,o.kt)("inlineCode",{parentName:"p"},"WithSeconds()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"WithRequests()"),"\u3002"),(0,o.kt)("h4",{id:"withseconds"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithSeconds()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func WithSeconds(c metrics.Observer) Option {\n    return func(o *options) {\n        o.seconds = c\n    }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Observer")," histogram used to set up the metrics middleware statistics request."),(0,o.kt)("h4",{id:"withrequests"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithRequests()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func WithRequests(c metrics.Counter) Option {\n    return func(o *options) {\n        o.requests = c\n    }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," counter used to set the metrics middleware statistics request count."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"prometheus"},"Prometheus"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// https://github.com/go-kratos/examples/tree/main/metrics\n_metricSeconds = prometheus.NewHistogramVec(prometheus.HistogramOpts{\n    Namespace: "server",\n    Subsystem: "requests",\n    Name:      "duration_ms",\n    Help:      "server requests duration(ms).",\n    Buckets:   []float64{5, 10, 25, 50, 100, 250, 500, 1000},\n}, []string{"kind", "operation"})\n\n_metricRequests = prometheus.NewCounterVec(prometheus.CounterOpts{\n    Namespace: "client",\n    Subsystem: "requests",\n    Name:      "code_total",\n    Help:      "The total number of processed requests",\n}, []string{"kind", "operation", "code", "reason"})\n    \nprometheus.MustRegister(_metricSeconds, _metricRequests)\n\nhttpSrv.Handle("/metrics", promhttp.Handler())\n')),(0,o.kt)("h4",{id:"to-configure-metrics-in-servers"},"To configure metrics in servers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// grpc sever\ngrpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        metrics.Server(\n            metrics.WithSeconds(prom.NewHistogram(_metricSeconds)),\n            metrics.WithRequests(prom.NewCounter(_metricRequests)),\n        ),\n    ),\n)\n\n// http server\nhttpSrv := http.NewServer(\n    http.Address(":8000"),\n    http.Middleware(\n        metrics.Server(\n            metrics.WithSeconds(prom.NewHistogram(_metricSeconds)),\n            metrics.WithRequests(prom.NewCounter(_metricRequests)),\n        ),\n    ),\n)\n')),(0,o.kt)("h4",{id:"to-configure-metrics-in-clients"},"To configure metrics in clients"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// grpc client\nconn, err := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("127.0.0.1:9000"),\n    grpc.WithMiddleware(\n        metrics.Client(\n            metrics.WithSeconds(prom.NewHistogram(_metricSeconds)),\n            metrics.WithRequests(prom.NewCounter(_metricRequests)),\n        ),\n    ),\n)\n\n// http client\nconn, err := http.NewClient(\n    context.Background(),\n    http.WithEndpoint("127.0.0.1:8000"),\n    http.WithMiddleware(\n        metrics.Client(\n            metrics.WithSeconds(prom.NewHistogram(_metricSeconds)),\n            metrics.WithRequests(prom.NewCounter(_metricRequests)),\n        ),\n    ),\n)\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/concepts/metric_types/"},"https://prometheus.io/docs/concepts/metric_types/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/examples/tree/main/metrics"},"https://github.com/go-kratos/examples/tree/main/metrics"))))}l.isMDXComponent=!0}}]);