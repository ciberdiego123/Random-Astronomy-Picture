(this["webpackJsonpnasa-app"]=this["webpackJsonpnasa-app"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),c=t(3),i=t.n(c),r=(t(12),t(13),t(4)),s=t(5),l=t(7),p=t(6),u=t(0),d=function(e){Object(l.a)(t,e);var n=Object(p.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=n.call(this,e)).onGeneratePictureLink=function(){fetch("https://api.nasa.gov/planetary/apod?api_key=teiQ9tQnpMwYAkL2pHG9FiEVH3NM6Sul8Dl0lgc1&count=1",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){(console.log("Get Request Executed"),console.log(e),e.ok)&&e.json().then((function(e){console.log("Picture URL ",e[0].url),o.apod=e[0].url,o.setState({render:!0})}))})).catch((function(e){console.log("ERROR executing Get Request"),console.log(e)}))},o.apod="",o.state={render:!1},o.onGeneratePictureLink(),o}return Object(s.a)(t,[{key:"render",value:function(){return""===this.apod?Object(u.jsx)("span",{children:"Loading picture link..."}):Object(u.jsx)("a",{className:"App-link",href:this.apod,target:"_blank",rel:"noopener noreferrer",children:"Random Astronomy Picture"})}}]),t}(a.a.Component);var h=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",className:"App-logo",alt:"logo"}),Object(u.jsx)(d,{})]})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),a(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.c965bd87.chunk.js.map