(this["webpackJsonpwolfpack-frontend-assessment"]=this["webpackJsonpwolfpack-frontend-assessment"]||[]).push([[0],{62:function(e,t,n){},64:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),l=n(49),s=n.n(l),r=n(6),i=(n(62),n(31)),o=n(32),d=n(53),j=n(52),b=n(3),m=(n(63),n(64),n(7)),u=n(4),h=n(2),O=n(50),f=n.n(O).a.create({baseURL:"https://join.wolfpackit.nl/api/v1",headers:{"Content-type":"application/json",Authorization:"Bearer 9bAqXRPplyiGfF6n81NVUGpAqeLI1QHw46aqICVL1BLaGI6"}}),g={getAll:function(){return f.get("/wolves")},get:function(e){return f.get("/wolves/".concat(e))},create:function(e){return f.post("/wolves",e)},update:function(e,t){return f.put("/wolves/".concat(e),t)},remove:function(e){return f.delete("/wolves/".concat(e))}},x=function(){var e={id:null,name:"",gender:"",birthday:""},t=Object(a.useState)(e),n=Object(h.a)(t,2),l=n[0],s=n[1],i=Object(a.useState)(!1),o=Object(h.a)(i,2),d=o[0],j=o[1],b=Object(a.useState)({name:" ",gender:" ",birthday:" "}),O=Object(h.a)(b,2),f=O[0],x=O[1],p=Object(a.useState)(!0),v=Object(h.a)(p,2),N=v[0],k=v[1],y=function(e){var t=e.target,n=t.name,c=t.value;s(Object(u.a)(Object(u.a)({},l),{},Object(m.a)({},n,c))),w(n,c)},w=function(e,t){var n=Object(u.a)({},f);switch(e){case"name":n.name=t.length<1?"No name given!!":"";break;case"gender":n.gender="female"===t||"male"===t?"":"Gender not male or female";break;case"birthday":n.birthday=Date.parse(t)?"":"Invalid date given!"}x(n),k(F(n).length>0)},F=function(e){return Object.values(e).filter((function(e){return e.length>0}))};return Object(c.jsx)("div",{className:"submit-form",children:d?Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Your wolf has been submitted successfully"}),Object(c.jsx)("button",{className:"btn btn-success",onClick:function(){s(e),j(!1)},children:"Add another one"}),Object(c.jsx)(r.c,{to:"/wolves",className:"btn btn-primary ml-3",children:"Back to list"})]}):Object(c.jsxs)("div",{className:"form",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-form-label",children:"Name"}),Object(c.jsx)("input",{className:"form-control",id:"name",required:!0,value:l.name,onChange:y,name:"name"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("legend",{className:"col-form-label",children:"Gender"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsxs)("div",{className:"form-check",children:[Object(c.jsx)("input",{className:"form-check-input",type:"radio",name:"gender",id:"male",value:"male",checked:"male"===l.gender,onChange:y}),Object(c.jsx)("label",{className:"form-check-label",htmlFor:"male",children:"Male"})]}),Object(c.jsxs)("div",{className:"form-check",children:[Object(c.jsx)("input",{className:"form-check-input",type:"radio",name:"gender",id:"female",value:"female",checked:"female"===l.gender,onChange:y}),Object(c.jsx)("label",{className:"form-check-label",htmlFor:"female",children:"Female"})]})]})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"birthday",className:"col-form-label",children:"Birthday"}),Object(c.jsx)("input",{type:"date",className:"form-control",id:"birthday",required:!0,value:l.birthday,onChange:y,name:"birthday"})]}),F(f)&&F(f).map((function(e){return e.trim().length>0?Object(c.jsx)("div",{className:"alert alert-danger",role:"alert",children:e}):""})),Object(c.jsx)("button",{onClick:function(){var e={name:l.name,gender:l.gender,birthday:l.birthday};N?console.error("Invalid Form"):g.create(e).then((function(e){s({id:e.data.id,name:e.data.name,gender:e.data.gender,birthday:e.data.birthday}),j(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},disabled:N,className:"btn btn-success",children:"Submit"})]})})},p=function(e){var t=Object(a.useState)({id:null,name:"",gender:"",birthday:""}),n=Object(h.a)(t,2),l=n[0],s=n[1],r=Object(a.useState)(""),i=Object(h.a)(r,2),o=i[0],d=i[1],j=Object(a.useState)({id:"",name:"",gender:"",birthday:""}),b=Object(h.a)(j,2),O=b[0],f=b[1],x=Object(a.useState)(!1),p=Object(h.a)(x,2),v=p[0],N=p[1],k=function(e){var t=e.target,n=t.name,c=t.value;s(Object(u.a)(Object(u.a)({},l),{},Object(m.a)({},n,c))),y(n,c)},y=function(e,t){var n=Object(u.a)({},O);switch(e){case"id":n.id=t<0?"No id specified!":"";break;case"name":n.name=t.trim().length<1?"No name given!":"";break;case"gender":n.gender="female"===t||"male"===t?"":"Gender not male or female";break;case"birthday":n.birthday=Date.parse(t)?"":"Invalid date given!"}f(n),N(w(n).length>0)},w=function(e){return Object.values(e).filter((function(e){return e.length>0}))};Object(a.useEffect)((function(){var t;t=e.match.params.id,g.get(t).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);return Object(c.jsx)("div",{children:l?Object(c.jsxs)("div",{className:"edit-form",children:[Object(c.jsxs)("h4",{children:["Wolf ",l.id]}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name"}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",required:!0,value:l.name,onChange:k})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("legend",{className:"col-form-label",children:"Gender"}),Object(c.jsxs)("div",{className:"col-sm-10",children:[Object(c.jsxs)("div",{className:"form-check",children:[Object(c.jsx)("input",{className:"form-check-input",type:"radio",name:"gender",id:"male",value:"male",checked:"male"===l.gender,onChange:k}),Object(c.jsx)("label",{className:"form-check-label",htmlFor:"male",children:"Male"})]}),Object(c.jsxs)("div",{className:"form-check",children:[Object(c.jsx)("input",{className:"form-check-input",type:"radio",name:"gender",id:"female",value:"female",checked:"female"===l.gender,onChange:k}),Object(c.jsx)("label",{className:"form-check-label",htmlFor:"female",children:"Female"})]})]})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"birthday",children:"Birthday"}),Object(c.jsx)("input",{type:"date",className:"form-control",id:"birthday",required:!0,value:l.birthday,onChange:k,name:"birthday"})]})]}),w(O)&&w(O).map((function(e){return Object(c.jsx)("div",{className:"alert alert-danger",role:"alert",children:e},e)})),Object(c.jsx)("button",{className:"btn btn-danger mr-2",onClick:function(){g.remove(l.id).then((function(t){console.log(t.data),e.history.push("/wolves")})).catch((function(e){console.log(e)}))},children:"Delete"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(){v?console.error("Invalid Form"):g.update(l.id,l).then((function(e){console.log(e.data),d("The wolf was updates successfully")})).catch((function(e){console.log(e)}))},disabled:v,children:"Update"}),Object(c.jsx)("p",{children:o})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Unable to load Wolf"})]})})},v=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],l=t[1],s=Object(a.useState)(null),i=Object(h.a)(s,2),o=i[0],d=i[1],j=Object(a.useState)(-1),b=Object(h.a)(j,2),m=b[0],u=b[1];Object(a.useEffect)((function(){O()}),[]);var O=function(){g.getAll().then((function(e){l(e.data),console.log(e.data)})).catch((function(e){console.log.apply(e)}))};return Object(c.jsxs)("div",{className:"list row",children:[Object(c.jsxs)("div",{className:"col-md-6",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("h4",{children:["Wolves List",Object(c.jsx)(r.c,{to:"/addwolf",className:"btn btn-primary ml-3",children:"Add new wolf"})]})}),Object(c.jsx)("ul",{className:"list-group",children:n&&n.map((function(e,t){return Object(c.jsx)("li",{className:"list-group-item "+(t===m?"active":""),onClick:function(){return function(e,t){d(e),u(t)}(e,t)},children:e.name},t)}))})]}),Object(c.jsx)("div",{className:"col-md-6",children:o?Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Wolf"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:Object(c.jsx)("strong",{children:"Name:"})})," ",o.name]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:Object(c.jsx)("strong",{children:"Birtday:"})})," ",o.birthday]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:Object(c.jsx)("strong",{children:"Gender:"})})," ",o.gender]}),Object(c.jsx)(r.c,{to:"/wolves/"+o.id,className:"btn btn-warning",children:"Edit"})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Please select on a Wolf..."})]})})]})},N={getAll:function(){return f.get("/packs")},get:function(e){return f.get("/packs/".concat(e))},create:function(e){return f.post("/packs",e)},update:function(e,t){return f.put("/packs/".concat(e),t)},remove:function(e){return f.delete("/packs/".concat(e))},addwolf:function(e,t){return f.post("/packs/".concat(e,"/wolf/").concat(t))},removewolf:function(e,t){return f.delete("/packs/".concat(e,"/wolf/").concat(t))}},k=n(26),y=function(e){return Object(c.jsxs)(k.ComposableMap,{children:[Object(c.jsx)(k.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",fill:"#D6D6DA",stroke:"#FFFFFF",strokeWidth:.5,children:function(e){return e.geographies.map((function(e){return Object(c.jsx)(k.Geography,{geography:e},e.rsmKey)}))}}),e.packs&&e.packs.map((function(t){return Object(c.jsxs)(k.Marker,{coordinates:[t.lng,t.lat],children:[Object(c.jsx)("circle",{r:6,fill:e.currentPack&&t.id===e.currentPack.id?"#F00":"#999",stroke:"#fff",strokeWidth:2}),Object(c.jsx)("text",{textAnchor:"middle",y:"-15",style:{fontFamily:"system-ui",fill:"#222"},children:t.name})]},t.id)}))]})},w=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],l=t[1],s=Object(a.useState)(null),i=Object(h.a)(s,2),o=i[0],d=i[1],j=Object(a.useState)(-1),b=Object(h.a)(j,2),m=b[0],u=b[1];Object(a.useEffect)((function(){O()}),[]);var O=function(){N.getAll().then((function(e){l(e.data),console.log(e.data)})).catch((function(e){console.log.apply(e)}))};return Object(c.jsxs)("div",{className:"list row",children:[Object(c.jsxs)("div",{className:"col-md-6",children:[Object(c.jsxs)("h4",{children:["Packs List ",Object(c.jsx)(r.c,{to:"/addpack",className:"btn btn-primary ml-3",children:"Add new pack"})]}),Object(c.jsx)("ul",{className:"list-group",children:n&&n.map((function(e,t){return Object(c.jsx)("li",{className:"list-group-item "+(t===m?"active":""),onClick:function(){return function(e,t){d(e),u(t)}(e,t)},children:e.name},t)}))})]}),Object(c.jsx)("div",{className:"col-md-6",children:o?Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Pack"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:Object(c.jsx)("strong",{children:"Name:"})})," ",o.name]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:Object(c.jsx)("strong",{children:"Longitude:"})})," ",o.lng]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:Object(c.jsx)("strong",{children:"Latitude:"})})," ",o.lat]}),Object(c.jsx)(r.c,{to:"/packs/"+o.id,className:"btn btn-warning",children:"Edit"})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Please click on a Pack..."})]})}),Object(c.jsx)(y,{packs:n,currentPack:o})]})},F=function(e){var t=Object(a.useState)({id:null,name:"",lng:"",lat:"",wolves:[]}),n=Object(h.a)(t,2),l=n[0],s=n[1],r=Object(a.useState)(""),i=Object(h.a)(r,2),o=i[0],d=i[1],j=Object(a.useState)({id:"",name:"",lng:"",lat:""}),b=Object(h.a)(j,2),O=b[0],f=b[1],x=Object(a.useState)(!1),p=Object(h.a)(x,2),v=p[0],k=p[1],y=Object(a.useState)([]),w=Object(h.a)(y,2),F=w[0],C=w[1],S=function(e){var t=e.target,n=t.name,c=t.value;s(Object(u.a)(Object(u.a)({},l),{},Object(m.a)({},n,c))),A(n,c)},A=function(e,t){var n=Object(u.a)({},O);switch(e){case"id":n.id=t<0?"No id specified!":"";break;case"name":n.name=t.trim().length<1?"No name given!":"";break;case"lng":n.lng=isFinite(t)&&Math.abs(t)<=180?"":"Invalid longitude given!";break;case"lat":n.lat=isFinite(t)&&Math.abs(t)<=90?"":"Invalid latitude given!"}f(n),k(I(n).length>0)},I=function(e){return Object.values(e).filter((function(e){return e.length>0}))};Object(a.useEffect)((function(){var t;t=e.match.params.id,N.get(t).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);return Object(c.jsx)("div",{children:l?Object(c.jsxs)("div",{className:"edit-form",children:[Object(c.jsxs)("h4",{children:["Pack ",l.id]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name"}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",required:!0,value:l.name,onChange:S})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"lng",children:"Longitude"}),Object(c.jsx)("input",{type:"number",className:"form-control",id:"lng",name:"lng",min:"-180",max:"180",step:"any",required:!0,value:l.lng,onChange:S})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"lat",children:"Latitude"}),Object(c.jsx)("input",{type:"number",className:"form-control",id:"lat",name:"lat",min:"-90",max:"90",step:"any",required:!0,value:l.lat,onChange:S})]}),I(O)&&I(O).map((function(e){return Object(c.jsx)("div",{className:"alert alert-danger",role:"alert",children:e},e)})),Object(c.jsx)("button",{className:"btn btn-danger mr-2",onClick:function(){N.remove(l.id).then((function(t){console.log(t.data),e.history.push("/packs")})).catch((function(e){console.log(e)}))},children:"Delete"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(){N.update(l.id,l).then((function(e){console.log(e.data),d("The pack was updates successfully"),setTimeout((function(){d("")}),5e3)})).catch((function(e){console.log(e)}))},disabled:v,children:"Update pack information"}),o?Object(c.jsx)("p",{children:o}):""]}),Object(c.jsx)("br",{}),Object(c.jsxs)("h4",{children:["Wolves in pack ",l.id]}),Object(c.jsx)("ul",{className:"list-group",name:"wolves",children:l.wolves&&l.wolves.map((function(e,t){return Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(c.jsxs)("h5",{children:[" ",e.id," ",e.name]}),Object(c.jsx)("button",{type:"button",className:"btn btn-danger btn-sm",onClick:function(){return t=e.id,void N.removewolf(l.id,t).then((function(e){console.log(e.data);var n=F.slice();n.push(l.wolves.find((function(e){return e.id===t}))),C(n),s(Object(u.a)(Object(u.a)({},l),{},{wolves:l.wolves.filter((function(e){return e.id!==t}))}))})).catch((function(e){console.log(e)}));var t},children:"Remove from pack"})]},t)}))}),F.length>0?Object(c.jsx)("div",{children:Object(c.jsx)("ul",{className:"list-group",children:F&&F.map((function(e,t){return Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(c.jsxs)("h5",{children:[" ",e.id," ",e.name]}),Object(c.jsx)("button",{type:"button",className:"btn btn-success btn-sm",onClick:function(){return t=e.id,void N.addwolf(l.id,t).then((function(e){console.log(e.data);var n=l.wolves.slice();n.push(F.find((function(e){return e.id===t}))),s(Object(u.a)(Object(u.a)({},l),{},{wolves:n})),C(F.filter((function(e){return e.id!==t})))})).catch((function(e){console.log(e)}));var t},children:"Add to pack"})]},t)}))})}):Object(c.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg btn-block",onClick:function(){g.getAll().then((function(e){var t=e.data.filter((function(e){return!l.wolves.find((function(t){return e.id===t.id}))}));C(t),console.log(e.data)})).catch((function(e){console.log.apply(e)}))},children:"Add new wolf to pack"})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Unable to load Pack"})]})})},C=function(){var e={id:null,name:"",lng:"",lat:""},t=Object(a.useState)(e),n=Object(h.a)(t,2),l=n[0],s=n[1],i=Object(a.useState)(!1),o=Object(h.a)(i,2),d=o[0],j=o[1],b=Object(a.useState)({name:" ",lng:" ",lat:" "}),O=Object(h.a)(b,2),f=O[0],g=O[1],x=Object(a.useState)(!0),p=Object(h.a)(x,2),v=p[0],k=p[1],y=function(e){var t=e.target,n=t.name,c=t.value;s(Object(u.a)(Object(u.a)({},l),{},Object(m.a)({},n,c))),w(n,c)},w=function(e,t){var n=Object(u.a)({},f);switch(e){case"name":n.name=t.length<1?"No name given!!":"";break;case"lng":n.lng=isFinite(t)&&Math.abs(t)<=180?"":"Invalid longitude given!";break;case"lat":n.lat=isFinite(t)&&Math.abs(t)<=90?"":"Invalid latitude given!"}g(n),k(F(n).length>0)},F=function(e){return Object.values(e).filter((function(e){return e.length>0}))};return Object(c.jsx)("div",{className:"submit-form",children:d?Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Your pack has been submitted successfully"}),Object(c.jsx)("button",{className:"btn btn-success",onClick:function(){s(e),j(!1)},children:"Add another one"}),Object(c.jsx)(r.c,{to:"/packs",className:"btn btn-primary ml-3",children:"Back to list"})]}):Object(c.jsxs)("div",{className:"form",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"name",className:"col-form-label",children:"Name"}),Object(c.jsx)("input",{className:"form-control",id:"name",required:!0,value:l.name,onChange:y,name:"name"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"lng",children:"Longitude"}),Object(c.jsx)("input",{type:"number",className:"form-control",id:"lng",name:"lng",min:"-180",max:"180",step:"any",required:!0,value:l.lng,onChange:y})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"lat",children:"Latitude"}),Object(c.jsx)("input",{type:"number",className:"form-control",id:"lat",name:"lat",min:"-90",max:"90",step:"any",required:!0,value:l.lat,onChange:y})]}),F(f)&&F(f).map((function(e){return e.trim().length>0?Object(c.jsx)("div",{className:"alert alert-danger",role:"alert",children:e}):""})),Object(c.jsx)("button",{onClick:function(){var e={name:l.name,lat:l.lat,lng:l.lng};v?console.error("Invalid Form"):N.create(e).then((function(e){s({id:e.data.id,name:e.data.name,lat:e.data.lat,lng:e.data.lng}),j(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},disabled:v,className:"btn btn-success",children:"Submit"})]})})},S=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(r.b,{children:[Object(c.jsxs)("nav",{className:"navbar navbar-expand navbar-light bg-light",children:[Object(c.jsx)("a",{href:"/wolves",className:"navbar-brand",children:"Toan"}),Object(c.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.c,{to:"/wolves",className:"nav-link",children:"Wolves"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.c,{to:"/packs",className:"nav-link",children:"Packs"})})]})]}),Object(c.jsx)("div",{className:"container mt-3",children:Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:["/","/wolves"],component:v}),Object(c.jsx)(b.a,{exact:!0,path:"/addwolf",component:x}),Object(c.jsx)(b.a,{path:"/wolves/:id",component:p}),Object(c.jsx)(b.a,{exact:!0,path:["/packs"],component:w}),Object(c.jsx)(b.a,{exact:!0,path:"/addpack",component:C}),Object(c.jsx)(b.a,{path:"/packs/:id",component:F})]})})]})}}]),n}(a.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),l(e),s(e)}))};s.a.render(Object(c.jsx)(r.a,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),A()}},[[94,1,2]]]);
//# sourceMappingURL=main.2344f520.chunk.js.map