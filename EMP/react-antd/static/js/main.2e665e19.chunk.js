(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{111:function(e,t,n){},112:function(e,t,n){var o={"./chart/index.jsx":[139,0,1,2,3,14],"./editor/brafteditor/index.jsx":[127,0,1,2,3,9],"./editor/foreditor/index.jsx":[128,0,1,2,3,15],"./editor/index.jsx":[132,0,1,2,3,8],"./form/index.jsx":[137,0,1,2,3,10],"./table/active/index.jsx":[133,0,1,2,3,12],"./table/index.jsx":[134,0,1,2,22],"./table/static/index.jsx":[135,0,1,2,4,13],"./tool/index.jsx":[136,0,1,2,3,11],"./tool/lrzpic/index.jsx":[131,0,1,2,3,16],"./tool/swiper/conf/index.jsx":[126,0,1,3,4,18],"./tool/swiper/index.jsx":[130,0,1,2,3,17],"./tool/zmage/index.jsx":[129,0,2,21,23]};function r(e){if(!n.o(o,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then(function(){return n(r)})}r.keys=function(){return Object.keys(o)},r.id=112,e.exports=r},125:function(e,t,n){"use strict";n.r(t);n(96);var o=n(10),r=(n(98),n(99),n(0)),a=n.n(r),i=n(16),c=n.n(i),l=n(26),s=n(15),u=n(27),p=n(12),f=n(28),h=Object(f.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t&&t.type?Object(p.a)({},e,Object(u.a)({},t.type,t.params)):e}),d=n(18),b=n(19),m=n(21),g=n(20),v=n(22),y=n(3),j=n(36),w=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).pathDeal=function(e){return e.indexOf(":")>0?e.substring(0,Number(e.indexOf(":"))-1):e},n.componentDeal=function(e,t){return t.length>1?e.substring(0,t.length):e},n.routersPage=function(){var e=j.a.find(function(e){return n.componentDeal(n.props.location.pathname,n.pathDeal(e.path))===n.pathDeal(e.path)});return!!e&&window.$globalmethod.flat(e.children,"children")},n.routeChange=function(e){var t=e||JSON.parse(sessionStorage.getItem("usrInfo"));t?(e||n.props.setInfo("usrInfo",t),n.props.history.replace({pathname:n.props.location.pathname&&"/login"!==n.props.location.pathname&&"/"!==n.props.location.pathname&&n.routersPage()?n.props.location.pathname:"/layout/chart/2D"})):(sessionStorage.clear(),n.props.history.replace({pathname:"/login"}))},h.subscribe(function(){var e=h.getState();n.routeChange(e.usrInfo)}),n.routeChange(n.props.tiger.usrInfo),n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"componentDidCatch",value:function(){this.props.history.push("/"),window.location.reload()}},{key:"render",value:function(){return a.a.createElement(j.b,null)}}]),t}(a.a.Component),O=Object(y.g)(Object(l.b)(function(e){return{tiger:e}},function(e){return{setInfo:function(t,n){return e({type:t,params:n})}}})(w)),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var E=n(29);window.$globalmethod={isEmpty:function(e){return""===e||void 0===e||null===e||"{}"===JSON.stringify(e)||"[]"===JSON.stringify(e)||"number"===typeof e&&isNaN(e)},flat:function(e,t){var n=this;return e.reduce(function(e,o){return Array.isArray(o[t])?[].concat(Object(E.a)(e),Object(E.a)(n.flat(o[t]))):[].concat(Object(E.a)(e),[o])},[])},leafzero:function(e,t,n){for(var o=0;o<e.length;o++)return n.push(e[o]),Array.isArray(e[o][t])&&e[o][t].length>0?this.leafzero(e[o][t],t,n):n},leaflist:function(e,t,n,o){for(var r=this,a=function(a){if(Array.isArray(e[a]))r.leaflist(e[a],t,n,o);else if(e[a][n]){o.push(Object(p.a)({},e[a],{pkey:e[a].pkey||e[a][t]}));var i=e[a][n].flatMap(function(n){return Object(p.a)({},n,{pkey:n.pkey||e[a][t]})});r.leaflist(i,t,n,o)}else o.push(Object(p.a)({},e[a],{pkey:e[a].pkey||e[a][t]}))},i=0;i<e.length;i++)a(i);return o},nodelist:function(e,t,n,o,r){var a=e.find(function(e){return t[n]===e[n]});if(r.unshift(a),a[n]!==a[o]){var i=e.find(function(e){return a[o]===e[n]});return this.nodelist(e,i,n,o,r)}return r},isEqual:function(e,t){var n=Object.getOwnPropertyNames(e),o=Object.getOwnPropertyNames(t);if(n.length!==o.length)return!1;for(var r=0;r<n.length;r++){var a=n[r],i=e[a],c=t[a];return"object"===typeof i?!!this.isObjectValueEqual(i,c):i===c}}};var N=n(64);c.a.render(a.a.createElement(l.a,{store:h},a.a.createElement(s.a,null,a.a.createElement(o.c,{locale:N.a},a.a.createElement(O,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");x?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):k(t,e)})}}()},36:function(e,t,n){"use strict";n.d(t,"a",function(){return g}),n.d(t,"b",function(){return v});n(79);var o=n(54),r=n(18),a=n(19),i=n(21),c=n(20),l=n(22),s=(n(111),n(0)),u=n.n(s),p=n(15),f=n(3),h=n(63),d=function(e){return u.a.lazy(function(){return n(112)("./".concat(e,"/index.jsx"))})},b=[{path:"/",exact:!0,component:u.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(5)]).then(n.bind(null,94))})},{path:"/login",exact:!0,component:u.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(5)]).then(n.bind(null,94))})},{path:"/layout",component:u.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,138))}),children:[{path:"/layout/chart/:part",component:d("chart")},{path:"/layout/table",component:d("table"),children:[{path:"/layout/table/static",component:d("table/static")},{path:"/layout/table/active",component:d("table/active")}]},{path:"/layout/form",component:d("form")},{path:"/layout/editor",component:d("editor")},{path:"/layout/tool",component:d("tool")}]}],m=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement(p.a,null,u.a.createElement(u.a.Suspense,{fallback:u.a.createElement("div",{className:"pageloading"},u.a.createElement(o.a,{tip:"\u7531\u4e8e\u4f7f\u7528Mock\u6a21\u62df\uff0c\u6570\u636e\u968f\u673a\u6027\u5f3a\uff0c\u53ef\u80fd\u4f1a\u91cd\u5b9a\u5411\u81f3\u9ed8\u8ba4\u9875\u9762\u3002\u3002\u3002"}))},u.a.createElement(f.b,{exact:!0,path:this.props.location.pathname?"/":"*",render:function(){return u.a.createElement(f.a,{to:b[1].path})}}),u.a.createElement(f.d,null,Object(h.a)(b))))}}]),t}(u.a.Component),g=b,v=Object(f.g)(m)},95:function(e,t,n){e.exports=n(125)},98:function(e,t,n){}},[[95,7,19]]]);
//# sourceMappingURL=main.2e665e19.chunk.js.map