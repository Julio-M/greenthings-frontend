(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a.p+"static/media/logo.e6c7e370.png"},107:function(e,t,a){},108:function(e,t,a){e.exports=a.p+"static/media/deer.6f840db7.png"},109:function(e,t,a){e.exports=a.p+"static/media/squirrel.1a0f3b35.png"},110:function(e,t,a){e.exports=a.p+"static/media/falcon.07374261.png"},111:function(e,t,a){e.exports=a.p+"static/media/pigeon.c278b1cb.png"},112:function(e,t,a){e.exports=a.p+"static/media/rat.a71720fb.png"},113:function(e,t,a){e.exports=a.p+"static/media/coyote.523493fd.png"},114:function(e,t,a){e.exports=a.p+"static/media/raccoon.35facfec.png"},117:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n);a(130);t.default=function(){return l.a.createElement("footer",null,"This is the footer")}},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},142:function(e,t,a){e.exports=a(203)},149:function(e,t,a){},184:function(e,t,a){var n={"./Footer":129,"./Footer.css":130,"./Footer.js":129,"./FormPage":70,"./FormPage.css":128,"./FormPage.js":70,"./Landing":76,"./Landing.css":131,"./Landing.js":76,"./Map":77,"./Map.js":77,"./NavBar":85,"./NavBar.css":135,"./NavBar.js":85,"./NewLeisureActivityForm":71,"./NewLeisureActivityForm.css":117,"./NewLeisureActivityForm.js":71,"./OutpostActivityForm":74,"./OutpostActivityForm.css":127,"./OutpostActivityForm.js":74,"./data/Avatars":75,"./data/Avatars.js":75,"./images/activity.png":194,"./images/coyote.png":113,"./images/deer.png":108,"./images/falcon.png":110,"./images/logo.png":106,"./images/map.png":195,"./images/park.png":196,"./images/pigeon.png":111,"./images/raccoon.png":114,"./images/rat.png":112,"./images/squirrel.png":109,"./map.css":134,"./myMap/CardGroup":79,"./myMap/CardGroup.js":79,"./myMap/EditModal":81,"./myMap/EditModal.js":81,"./myMap/EditModalLeisure":83,"./myMap/EditModalLeisure.js":83,"./myMap/Filters":84,"./myMap/Filters.js":84,"./myMap/Item":80,"./myMap/Item.js":80,"./myMap/LeisureItem":82,"./myMap/LeisureItem.js":82,"./myMap/MyMap":78,"./myMap/MyMap.js":78,"./myMap/cardgroup.css":197,"./myMap/editmodal.css":199,"./myMap/filters.css":133,"./myMap/item.css":107,"./myMap/mymap.css":132};function l(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}l.keys=function(){return Object.keys(n)},l.resolve=c,e.exports=l,l.id=184},194:function(e,t,a){e.exports=a.p+"static/media/activity.f3a6065b.png"},195:function(e,t,a){e.exports=a.p+"static/media/map.fcc2a1c9.png"},196:function(e,t,a){e.exports=a.p+"static/media/park.77a6fdbc.png"},197:function(e,t,a){},199:function(e,t,a){},201:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(136),r=a(59),o=a(6),i=(a(149),a(151),a(70)),m=a(76),s=a(77),u=(a(201),a(85));var p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.default,null),l.a.createElement(o.a,null))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,209)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};Object(c.createRoot)(document.getElementById("root")).render(l.a.createElement(r.a,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",element:l.a.createElement(p,null)},l.a.createElement(o.b,{index:!0,element:l.a.createElement(m.default,null)}),l.a.createElement(o.b,{path:"new-activity",element:l.a.createElement(i.default,null)}),l.a.createElement(o.b,{path:"map",element:l.a.createElement(s.default,null)}))))),d()},70:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(0),c=a.n(l),r=a(71),o=a(74),i=a(16),m=(a(128),a(22)),s=a(90),u=a(75);t.default=function(){var e=Object(l.useState)(""),t=Object(n.a)(e,2),p=t[0],d=t[1];function E(e){console.log(e.target.name),d(e.target.name)}var g=u.avatarOptions.map(function(e){return c.a.createElement(s.a,{key:e.id,id:e.name,className:"avatar-radio",type:"checkbox",name:e.name,value:e.name},c.a.createElement("img",{className:"form-logo-img",src:a(184)("".concat(e.src)),alt:e.name}))});return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{id:"form-header-text",style:{textAlign:"center",padding:"30px 40px"}},"C'mon now don't be shy! Post an activity."),c.a.createElement(m.a,{className:"form-choice-btn"},c.a.createElement("p",{style:{fontWeight:"bold"}},"Toggle between outpost and leisure activities."),c.a.createElement(i.a,{className:"choice-btn",name:"outpost",onClick:E},"Outpost Form"),c.a.createElement(i.a,{className:"choice-btn",name:"leisure",onClick:E},"Leisure Form")),"outpost"===p?c.a.createElement(o.default,{mappedRadioButtons:g}):c.a.createElement(r.default,{mappedRadioButtons:g}))}},71:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(2),c=a(10),r=a(0),o=a.n(r),i=a(7),m=a(16),s=(a(117),a(22)),u=a(27),p=a(17),d=a(86),E=a.n(d),g=a(89),f=a(58),y=a(12),h=a(6),v=a(100),b=Object(f.b)(f.a);t.default=function(e){var t=e.mappedRadioButtons,a=Object(h.g)(),d=Object(r.useState)(!1),f=Object(c.a)(d,2),O=f[0],j=f[1],C=Object(r.useState)(!1),k=Object(c.a)(C,2),w=k[0],L=k[1],x=Object(r.useState)(0),S=Object(c.a)(x,2),N=S[0],A=S[1],D=Object(r.useState)(""),F=Object(c.a)(D,2),T=F[0],M=F[1],_=Object(r.useState)(""),B=Object(c.a)(_,2),P=B[0],G=B[1],I=Object(r.useState)({avatar:"Deer",activity_type:"Picnic at the Park",leisure_location_id:"",description:"",datetime:Date.now(),image:"",rating:0,comment:""}),R=Object(c.a)(I,2),H=R[0],z=R[1],q=H.activity_type,J=H.description,U=H.datetime,Y=H.rating,V=H.comment;function W(e){var t=e.target.value;console.log(e.target.name),z(Object(l.a)({},H,Object(n.a)({},e.target.name,t)))}console.log("IMAGE",T);var K=N,Z=o.a.createElement(g.a,{now:K,label:"".concat(K,"%")}),Q=Object(r.useState)({isLoading:!1,options:[],value:""}),X=Object(c.a)(Q,2),$=X[0],ee=X[1];function te(e){var t=e.target.name;a("new-activity"===t||"try-again"===t?"/new-activity":"/map")}return console.log(H),o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"leisure-title",style:{textAlign:"center"}},"New ",o.a.createElement("span",{style:{color:"lightblue"}},"Leisure")," Activity"),o.a.createElement(i.a,{onSubmit:function(e){console.log("clicked"),e.preventDefault(),function(){var e={method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify(H)};fetch("https://secret-lowlands-44368.herokuapp.com/leisure-acivities",e).then(function(e){200===e.status?j(!0):L(!0)})}()},className:"new-leasure-form"},o.a.createElement(s.a,{fluid:!0},o.a.createElement(s.a,{className:"avatar-wrap"},o.a.createElement("h4",{style:{fontWeight:"bold"}},"--Choose an Avatar--"),o.a.createElement(v.a,{className:"avatar-group",type:"checkbox",value:P,onChange:function(e){G(e[1]),z(Object(l.a)({},H,{avatar:e[1]}))}},t)),o.a.createElement(u.a,null,o.a.createElement(p.a,{xs:12,md:4},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Activity Type"),o.a.createElement(i.a.Select,{name:"activity_type",value:q,size:"text",onChange:W},o.a.createElement("option",null,"Picnic at the Park"),o.a.createElement("option",null,"Picnic at the Beach"),o.a.createElement("option",null,"Frisbee"),o.a.createElement("option",null,"Pickup Soccer"),o.a.createElement("option",null,"Other Outdoor Sports")))),o.a.createElement(p.a,{xs:12,md:4},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Activity Location"),o.a.createElement(b,{id:"activity-location-input",onSearch:function(){ee(Object(l.a)({},$,{isLoading:!0})),fetch("https://secret-lowlands-44368.herokuapp.com/leisure-locations").then(function(e){return e.json()}).then(function(e){var t=e.map(function(e){return{id:e.id,name:e.name}});ee(Object(l.a)({},$,{isLoading:!1,options:t}))})},labelKey:function(e){return e.name},isLoading:$.isLoading,onChange:function(e){0!==e.length?(ee(Object(l.a)({},$,{value:e[0].name})),z(Object(l.a)({},H,{leisure_location_id:e[0].id}))):(ee(Object(l.a)({},$,{value:""})),z(Object(l.a)({},H,{leisure_location_id:""}))),console.log(e)},options:$.options}))),o.a.createElement(p.a,{xs:12,md:4},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Activity Date & Time"),o.a.createElement(i.a.Control,{name:"datetime",value:U,onChange:W,type:"datetime-local"})))),o.a.createElement(u.a,null,o.a.createElement(p.a,{xs:12,md:6},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Activity Description"),o.a.createElement(i.a.Control,{id:"description-box",name:"description",value:J,onChange:W,type:"text"}),o.a.createElement(i.a.Text,null,"Please limit text to no more than N characters."))),o.a.createElement(p.a,{xs:12,md:6},o.a.createElement(i.a.Group,{controlId:"formFile",className:"mb-3"},o.a.createElement(i.a.Label,null,"Upload Image"),o.a.createElement(i.a.Control,{type:"file",onChange:function(e){A(0);var t=e.target.files[0];M(t)}}),o.a.createElement(u.a,null,o.a.createElement(p.a,{xs:12,md:3},o.a.createElement(m.a,{variant:"outline-primary",type:"submit",onClick:function(e){e.preventDefault(),console.log(N);var t=new FormData;t.append("file",T),t.append("upload_preset","dyza3ykz"),E.a.post("https://api.cloudinary.com/v1_1/dimfaeuml/image/upload",t,{onUploadProgress:function(e){A(Math.round(e.loaded/e.total*100))}}).then(function(e){return z(Object(l.a)({},H,{image:e.data.secure_url}))})}},"Submit Image")),o.a.createElement(p.a,{xs:12,md:8},Z))))),o.a.createElement(u.a,null,o.a.createElement("hr",null),o.a.createElement(p.a,null,o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Location Rating"),o.a.createElement(i.a.Control,{name:"rating",value:Y,onChange:W,type:"number"})))),o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Leave a Comment About the Location!"),o.a.createElement(i.a.Control,{id:"comment-box",name:"comment",value:V,onChange:W,type:"text"})),o.a.createElement(s.a,{style:{textAlign:"center"}},o.a.createElement(m.a,{style:{margin:"20px 0px",backgroundColor:"#FFCC29",border:"none"},type:"submit"},"Add New Leisure Activity")))),o.a.createElement(y.a,{size:"sm",show:O,onHide:function(){return j(!1)}},o.a.createElement(y.a.Header,{closeButton:!0},o.a.createElement(y.a.Title,null,"You Successfully Posted Your Activity!")),o.a.createElement(y.a.Body,null,o.a.createElement("p",null,"Add a new activity or check out the map?")),o.a.createElement(y.a.Footer,null,o.a.createElement(m.a,{name:"new-activity",onClick:te},"New Activity"),o.a.createElement(m.a,{name:"map",onClick:te},"Live Map"))),o.a.createElement(y.a,{size:"sm",show:w,onHide:function(){return L(!1)}},o.a.createElement(y.a.Header,{closeButton:!0},o.a.createElement(y.a.Title,null,"Oops! Something went wrong")),o.a.createElement(y.a.Body,null,o.a.createElement("p",null,"Try again or go to live map?")),o.a.createElement(y.a.Footer,null,o.a.createElement(m.a,{name:"try-again",onClick:te},"Try again"),o.a.createElement(m.a,{name:"map",onClick:te},"Live Map"))))}},74:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(2),c=a(10),r=a(0),o=a.n(r),i=a(7),m=a(16),s=(a(127),a(22)),u=a(27),p=a(17),d=a(12),E=a(6),g=a(58),f=a(86),y=a.n(f),h=a(89),v=a(100),b=Object(g.b)(g.a);t.default=function(e){var t=e.mappedRadioButtons,a=Object(r.useState)(0),g=Object(c.a)(a,2),f=g[0],O=g[1],j=Object(r.useState)(""),C=Object(c.a)(j,2),k=C[0],w=C[1],L=Object(E.g)(),x=Object(r.useState)(""),S=Object(c.a)(x,2),N=S[0],A=S[1],D=Object(r.useState)({avatar:"Deer",activity_type:"Recycling",outpost_id:0,description:"",datetime:"",image:"",rating:0,comment:""}),F=Object(c.a)(D,2),T=F[0],M=F[1],_=T.activity_type,B=T.description,P=T.datetime,G=T.rating,I=T.comment,R=Object(r.useState)({isLoading:!1,options:[],value:""}),H=Object(c.a)(R,2),z=H[0],q=H[1],J=Object(r.useState)(!1),U=Object(c.a)(J,2),Y=U[0],V=U[1],W=Object(r.useState)(!1),K=Object(c.a)(W,2),Z=K[0],Q=K[1];function X(e){var t=e.target.value;console.log(e.target.name),M(Object(l.a)({},T,Object(n.a)({},e.target.name,t)))}function $(e){var t=e.target.name;L("new-activity"===t||"try-again"===t?"/new-activity":"/map")}console.log("IMAGE",k);var ee=f,te=o.a.createElement(h.a,{now:ee,label:"".concat(ee,"%")});return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:"outpost-title",style:{textAlign:"center"}},"New ",o.a.createElement("span",{style:{color:"brown"}},"Outpost")," Activity"),o.a.createElement(i.a,{onSubmit:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify(T)};fetch("https://secret-lowlands-44368.herokuapp.com/outpost-activities",t).then(function(e){200===e.status?V(!0):Q(!0)})},autoComplete:"off",className:"new-leasure-form"},o.a.createElement(s.a,{fluid:!0},o.a.createElement(s.a,{className:"avatar-wrap"},o.a.createElement("h4",{style:{fontWeight:"bold"}},"--Choose an Avatar--"),o.a.createElement(v.a,{className:"avatar-group",type:"checkbox",value:N,onChange:function(e){A(e[1]),M(Object(l.a)({},T,{avatar:e[1]}))}},t)),o.a.createElement(u.a,null,o.a.createElement(p.a,{xs:12,md:4},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Outpost Type"),o.a.createElement(i.a.Select,{name:"activity_type",value:_,size:"text",onChange:X},o.a.createElement("option",null,"Recycling"),o.a.createElement("option",null,"Composting"),o.a.createElement("option",null,"Gardening")))),o.a.createElement(p.a,{xs:12,md:4},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Outpost Location"),o.a.createElement(b,{id:"activity-location-input",onSearch:function(){q(Object(l.a)({},z,{isLoading:!0})),fetch("https://secret-lowlands-44368.herokuapp.com/outposts").then(function(e){return e.json()}).then(function(e){var t=e.map(function(e){return{id:e.id,name:e.name}});q(Object(l.a)({},z,{isLoading:!1,options:t}))})},labelKey:function(e){return e.name},isLoading:z.isLoading,onChange:function(e){0!==e.length?(q(Object(l.a)({},z,{value:e[0].name})),M(Object(l.a)({},T,{outpost_id:e[0].id}))):(q(Object(l.a)({},z,{value:""})),M(Object(l.a)({},T,{outpost_id:""}))),console.log(e)},options:z.options}))),o.a.createElement(p.a,{xs:12,md:4},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Activity Date & Time"),o.a.createElement(i.a.Control,{name:"datetime",value:P,onChange:X,type:"datetime-local"})))),o.a.createElement(u.a,null,o.a.createElement(p.a,{xs:12,md:6},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Activity Description"),o.a.createElement(i.a.Control,{id:"odb",name:"description",value:B,onChange:X,type:"text"}))),o.a.createElement(p.a,{xs:12,md:6},o.a.createElement(i.a.Group,{controlId:"formFile",className:"mb-3"},o.a.createElement(i.a.Label,null,"Upload Image"),o.a.createElement(i.a.Control,{type:"file",onChange:function(e){O(0);var t=e.target.files[0];w(t)}}),o.a.createElement(u.a,null,o.a.createElement(p.a,{xs:12,md:3},o.a.createElement(m.a,{variant:"outline-primary",type:"submit",onClick:function(e){e.preventDefault(),console.log(f);var t=new FormData;t.append("file",k),t.append("upload_preset","dyza3ykz"),y.a.post("https://api.cloudinary.com/v1_1/dimfaeuml/image/upload",t,{onUploadProgress:function(e){O(Math.round(e.loaded/e.total*100))}}).then(function(e){return M(Object(l.a)({},T,{image:e.data.secure_url}))})}},"Submit Image")),o.a.createElement(p.a,{xs:12,md:8},te))))),o.a.createElement("hr",null),o.a.createElement(u.a,null,o.a.createElement(p.a,{xs:12,md:6},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Outpost rating"),o.a.createElement(i.a.Control,{id:"orb",name:"rating",value:G,onChange:X,type:"number"})))),o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Leave a Comment About the Outpost Location!"),o.a.createElement(i.a.Control,{id:"ocb",name:"comment",value:I,onChange:X,type:"text"})),o.a.createElement(s.a,{style:{textAlign:"center"}},o.a.createElement(m.a,{style:{margin:"20px 0px",backgroundColor:"#A35709",border:"none"},type:"submit"},"Add New Outpost Activity")))),o.a.createElement(d.a,{size:"sm",show:Y,onHide:function(){return V(!1)}},o.a.createElement(d.a.Header,{closeButton:!0},o.a.createElement(d.a.Title,null,"You Successfully Posted Your Activity!")),o.a.createElement(d.a.Body,null,o.a.createElement("p",null,"Add a new activity or check out the map?")),o.a.createElement(d.a.Footer,null,o.a.createElement(m.a,{name:"new-activity",onClick:$},"New Activity"),o.a.createElement(m.a,{name:"map",onClick:$},"Live Map"))),o.a.createElement(d.a,{size:"sm",show:Z,onHide:function(){return Q(!1)}},o.a.createElement(d.a.Header,{closeButton:!0},o.a.createElement(d.a.Title,null,"Oops! Something went wrong")),o.a.createElement(d.a.Body,null,o.a.createElement("p",null,"Try again or go to live map?")),o.a.createElement(d.a.Footer,null,o.a.createElement(m.a,{name:"try-again",onClick:$},"Try again"),o.a.createElement(m.a,{name:"map",onClick:$},"Live Map"))))}},75:function(e,t,a){"use strict";a.r(t),a.d(t,"avatarOptions",function(){return n});var n=[{id:1,name:"Deer",src:"./images/deer.png"},{id:1,name:"Raccoon",src:"./images/raccoon.png"},{id:1,name:"Pigeon",src:"./images/pigeon.png"},{id:1,name:"Falcon",src:"./images/falcon.png"},{id:1,name:"Coyote",src:"./images/coyote.png"},{id:1,name:"Rat",src:"./images/rat.png"}]},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=(a(131),a(22)),r=a(27),o=a(17),i=a(16);t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{margin:"40px 50px",textAlign:"center"}},l.a.createElement("img",{id:"landing-logo",src:a(106),alt:"logo"}),l.a.createElement("h2",{id:"landing-subtext",style:{textAlign:"center"}},"View and participate in sustainable activities around New York City!"),l.a.createElement("div",{id:"landing-description"},l.a.createElement("p",null,"ActiveCritters is an app that encourages you to anonyously view and post about your green activities around New York City so that you can encourage others to do the same! Going to play frisbee at Prospect Park? Did you deposit your compostable food waste at a composting outpost in Astoria? Choose and avatar and inspire others to spend time outside or engage in sustainably conscious activites."))),l.a.createElement(c.a,{style:{marginBottom:"30px"}},l.a.createElement(r.a,null,l.a.createElement(o.a,{md:6},l.a.createElement("div",{id:"map-nav-card",className:"nav-card"},l.a.createElement("div",{className:"absolute-centered"},l.a.createElement("h3",{className:"rel-text"},"View Live Map"),l.a.createElement("p",{className:"rel-text"},"View what activities others around you are engaging in as we speak."),l.a.createElement(i.a,{className:"rel-text",style:{backgroundColor:"#F4A442",border:"none"},href:"/map"},"Live Map")))),l.a.createElement(o.a,{md:6},l.a.createElement("div",{id:"activity-nav-card",className:"nav-card"},l.a.createElement("div",{className:"absolute-centered"},l.a.createElement("h3",{className:"rel-text-header"},"Put yourself on the map!"),l.a.createElement("p",{className:"rel-text"},"Put yourself on the map and let others know what you're up to!"),l.a.createElement(i.a,{className:"rel-text",style:{backgroundColor:"#125C13",color:"white",border:"none"},href:"/new-activity"},"New Activity")))))))}},77:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(0),c=a.n(l),r=a(78),o=a(22),i=a(79);a(134);t.default=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),a=t[0],m=t[1],s=Object(l.useState)([]),u=Object(n.a)(s,2),p=u[0],d=u[1],E=function(e,t){fetch(e).then(function(e){return e.json()}).then(function(e){return t(e)}).catch(function(e){return console.log(e.message)})};return Object(l.useEffect)(function(){E("https://secret-lowlands-44368.herokuapp.com/outpost-activities",m),E("https://secret-lowlands-44368.herokuapp.com/leisure-activities",d)},[]),console.log("The outpost",a),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{fluid:!0},c.a.createElement("main",null,c.a.createElement("div",{className:"cardCol"},c.a.createElement(i.default,{className:"allcards",outpost:a,leisure:p,patchData:function(e,t,n){fetch("".concat(e,"+").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){return m(a.map(function(t){return t.id===e.id?e:t}))}).catch(function(e){return console.log(e.message)})},deleteDataOutpost:function(e,t){fetch("".concat(e,"+").concat(t),{method:"DELETE"}).then(m(a.filter(function(e){return t!==e.id}))).catch(function(e){return console.log(e.message)})},patchLeisureData:function(e,t,a){fetch("".concat(e,"+").concat(t),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){return d(p.map(function(t){return t.id===e.id?e:t}))}).catch(function(e){return console.log(e.message)})},deleteDataLeisure:function(e,t){fetch("".concat(e,"+").concat(t),{method:"DELETE"}).then(d(p.filter(function(e){return t!==e.id}))).catch(function(e){return console.log(e.message)})}}))),c.a.createElement("aside",null,c.a.createElement("div",{className:"mapCol"},c.a.createElement(r.default,{outpost:a,leisure:p})))))}},78:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(2),l=a(10),c=a(0),r=a.n(c),o=a(65),i=(a(132),a(20));function m(e){var t=e.outpost,a=e.leisure,m=Object(c.useState)(!1),s=Object(l.a)(m,2),u=s[0],p=s[1],d=Object(c.useState)([40.74253751019931,-73.99234182490424]),E=Object(l.a)(d,2),g=E[0],f=E[1],y=Object(c.useState)({image:"",title:"",comment:"",avatar:""}),h=Object(l.a)(y,2),v=h[0],b=h[1],O=function(e){var t=e.payload.image,a=e.payload.activity_type,l=e.payload.comment,c=e.payload.avatar;console.log("The payload",e.payload);var r=e.anchor;p(!0),b(t?Object(n.a)({},v,{image:t,title:a,comment:l,avatar:c}):Object(n.a)({},v,{image:"https://throughkelseyslens.com/wp-content/uploads/2019/09/The-Mall-2-819x1024.jpg",title:a,comment:l,avatar:c})),f(r)};console.log("Tooltip",v);var j=r.a.createElement(o.c,{anchor:g,offset:[0,0]},r.a.createElement(i.a,{border:"primary",style:{width:"18rem"}},r.a.createElement(i.a.Header,{style:{color:"black"}},v.title),r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Img,{variant:"top",src:v.image}),r.a.createElement(i.a.Text,{style:{color:"black"}},"A ",v.avatar.toLowerCase()," says ",v.comment)))),C=t.map(function(e){return r.a.createElement(o.b,{key:e.id,onClick:O,width:50,anchor:[parseFloat(e.outpost.latitude),parseFloat(e.outpost.longitude)],color:"#168513",payload:e})}),k=a.map(function(e){return r.a.createElement(o.b,{key:e.id,onClick:O,width:50,anchor:[parseFloat(e.leisure_location.latitude),parseFloat(e.leisure_location.longitude)],color:"#7393B3",payload:e})});return r.a.createElement(o.a,{onClick:function(e){p(!1)},height:1e3,defaultCenter:g,defaultZoom:11},C,k,u?j:null)}},79:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(27),c=a(17),r=a(80),o=a(82),i=a(0),m=a.n(i),s=a(84);t.default=function(e){var t=e.outpost,a=e.leisure,u=e.patchData,p=e.deleteDataOutpost,d=e.patchLeisureData,E=e.deleteDataLeisure,g=t.map(function(e){return m.a.createElement(c.a,null,m.a.createElement(r.default,{card:e,patchData:u,deleteDataOutpost:p}))}),f=a.map(function(e){return m.a.createElement(c.a,null,m.a.createElement(o.default,{card:e,patchLeisureData:d,deleteDataLeisure:E}))}),y=Object(i.useState)("All activities"),h=Object(n.a)(y,2),v=h[0],b=h[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement(s.default,{setDisplayStatus:b})),m.a.createElement(l.a,{xs:1,md:2,className:"g-6"},"All activities"===v?f&&g:null,"Outpost activities"===v?g:f))}},80:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(0),c=a.n(l),r=a(20),o=(a(107),a(16)),i=a(12),m=a(81);t.default=function(e){var t,s=e.card,u=e.patchData,p=e.deleteDataOutpost,d='https://76crb34usu-flywheel.netdna-ssl.com/wp-content/uploads/2017/12/iStock-902227708.jpg"',E=s.avatar,g=s.activity_type,f=s.description,y=s.image,h=s.comment,v=s.outpost,b=s.rating,O=Object(l.useState)(!1),j=Object(n.a)(O,2),C=j[0],k=j[1],w=Object(l.useState)(!1),L=Object(n.a)(w,2),x=L[0],S=L[1],N=function(){return S(!0)};switch(E){case"Deer":t=c.a.createElement("img",{className:"form-logo-img",src:a(108),alt:"deer"});break;case"Squirrel":t=c.a.createElement("img",{className:"form-logo-img",src:a(109),alt:"squirrel"});break;case"Falcon":t=c.a.createElement("img",{className:"form-logo-img",src:a(110),alt:"falcon"});break;case"Pigeon":t=c.a.createElement("img",{className:"form-logo-img",src:a(111),alt:"pigeon"});break;case"Rat":t=c.a.createElement("img",{className:"form-logo-img",src:a(112),alt:"rat"});break;case"Coyote":t=c.a.createElement("img",{className:"form-logo-img",src:a(113),alt:"coyote"});break;case"Raccoon":t=c.a.createElement("img",{className:"form-logo-img",src:a(114),alt:"racoon"})}return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,{className:"mycard",id:"outpostCard"},c.a.createElement(r.a.Img,{className:"cardImg",onClick:function(){return k(!0)},variant:"top",src:y||d}),c.a.createElement(r.a.Body,{className:"cardBody"},c.a.createElement(r.a.Title,null,t),c.a.createElement(r.a.Text,null,"Activity: ",g),c.a.createElement(r.a.Text,null,"Rating: ",b,"/10"),c.a.createElement(r.a.Text,null,v.name),c.a.createElement(o.a,{id:"editbtn",onClick:N,variant:"outline-primary"},"Edit"),c.a.createElement(o.a,{id:"dltbtn",onClick:function(){p("https://secret-lowlands-44368.herokuapp.com/outposts-activity/",s.id)},variant:"outline-secondary"},"Delete"))),c.a.createElement(i.a,{show:C,onHide:function(){return k(!1)}},c.a.createElement(i.a.Header,{closeButton:!0},c.a.createElement(i.a.Title,null,g)),c.a.createElement("img",{src:y||d,alt:"default"}),c.a.createElement(i.a.Body,null,c.a.createElement("small",null,t," * ",b,"/10"),c.a.createElement("h5",null,"Description"),c.a.createElement("p",null,f),c.a.createElement("h5",null,"Comments"),c.a.createElement("p",null,h),c.a.createElement("h5",null,"Location"),c.a.createElement("p",null,v.name))),c.a.createElement(m.default,{handleEditClose:function(){return S(!1)},handleEditShow:N,editShow:x,card:s,patchData:u}))}},81:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(2),c=a(10),r=a(0),o=a.n(r),i=a(7),m=a(16),s=a(12);t.default=function(e){e.handleEditShow;var t=e.handleEditClose,a=e.editShow,u=e.card,p=e.patchData,d=Object(r.useState)([]),E=Object(c.a)(d,2),g=E[0],f=E[1];Object(r.useEffect)(function(){fetch("https://secret-lowlands-44368.herokuapp.com/outposts").then(function(e){return e.json()}).then(function(e){return f(e)}).catch(function(e){return console.log(e.message)})},[]);var y=Object(r.useState)({}),h=Object(c.a)(y,2),v=h[0],b=h[1],O=function(e){var t;if(e.target.options){var a=e.target.options.selectedIndex;t=e.target.options[a].getAttribute("data-key")}var c=e.target.name,r=e.target.value;r&&!t?b(Object(l.a)({},v,Object(n.a)({},c,r))):r&&t&&b(Object(l.a)({},v,Object(n.a)({},c,t)))},j=g.map(function(e){return o.a.createElement("option",{"data-key":e.id,key:e.id},e.name)});return console.log(g),console.log(v,"id",u.id),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{show:a,onHide:t},o.a.createElement(s.a.Header,{closeButton:!0},o.a.createElement(s.a.Title,null,"Edit")),o.a.createElement(s.a.Body,null,o.a.createElement(i.a,{onSubmit:function(e){e.preventDefault(),0!==Object.keys(v).length?p("https://secret-lowlands-44368.herokuapp.com/outpost-activity/",u.id,v):alert("Can't submit an empty form")}},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Avatar"),o.a.createElement(i.a.Select,{name:"avatar",onChange:O},o.a.createElement("option",null,"Deer"),o.a.createElement("option",null,"Squirrel"),o.a.createElement("option",null,"Falcon"),o.a.createElement("option",null,"Pigeon"),o.a.createElement("option",null,"Rat"),o.a.createElement("option",null,"Coyote"))),o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Activity"),o.a.createElement(i.a.Select,{name:"activity_type",onChange:O},o.a.createElement("option",null,"Recycling"),o.a.createElement("option",null,"Composting"),o.a.createElement("option",null,"Gardening")),o.a.createElement(i.a.Label,null,"Location"),o.a.createElement(i.a.Select,{name:"outpost_id",onChange:O},j)),o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Activity Description"),o.a.createElement(i.a.Control,{"data-key":"0",name:"description",onChange:O,type:"text"})),o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Comments"),o.a.createElement(i.a.Control,{"data-key":"0",name:"comment",onChange:O,type:"text"})),o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Rating"),o.a.createElement(i.a.Control,{name:"rating",onChange:O,type:"number"})),o.a.createElement(m.a,{variant:"primary",type:"submit"},"Save Changes")))))}},82:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(0),c=a.n(l),r=a(20),o=(a(107),a(16)),i=a(12),m=a(83);t.default=function(e){var t,s=e.card,u=e.patchLeisureData,p=e.deleteDataLeisure,d=s.avatar,E=s.image,g=s.activity_type,f=s.description,y=s.rating,h=s.comment,v=s.leisure_location,b=Object(l.useState)(!1),O=Object(n.a)(b,2),j=O[0],C=O[1],k=Object(l.useState)(!1),w=Object(n.a)(k,2),L=w[0],x=w[1],S=function(){return x(!0)};switch(console.log("IMAGE",E),d){case"Deer":t=c.a.createElement("img",{className:"form-logo-img",src:a(108),alt:"deer"});break;case"Squirrel":t=c.a.createElement("img",{className:"form-logo-img",src:a(109),alt:"squirrel"});break;case"Falcon":t=c.a.createElement("img",{className:"form-logo-img",src:a(110),alt:"falcon"});break;case"Pigeon":t=c.a.createElement("img",{className:"form-logo-img",src:a(111),alt:"pigeon"});break;case"Rat":t=c.a.createElement("img",{className:"form-logo-img",src:a(112),alt:"rat"});break;case"Coyote":t=c.a.createElement("img",{className:"form-logo-img",src:a(113),alt:"coyote"});break;case"Raccoon":t=c.a.createElement("img",{className:"form-logo-img",src:a(114),alt:"racoon"})}return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,{className:"mycard",id:"leisureCard"},c.a.createElement(r.a.Img,{className:"cardImg",onClick:function(){return C(!0)},variant:"top",src:E||v.default_image}),c.a.createElement(r.a.Body,{className:"cardBody"},c.a.createElement(r.a.Title,null,t),c.a.createElement(r.a.Text,null,"Activity: ",g),c.a.createElement(r.a.Text,null,"Rating: ",y,"/10"),c.a.createElement(r.a.Text,null,v.name),c.a.createElement(o.a,{id:"editbtn",onClick:S,variant:"outline-primary"},"Edit"),c.a.createElement(o.a,{id:"dltbtn",onClick:function(){p("https://secret-lowlands-44368.herokuapp.com/leisure-activity/",s.id)},variant:"outline-secondary"},"Delete"))),c.a.createElement(i.a,{show:j,onHide:function(){return C(!1)}},c.a.createElement(i.a.Header,{closeButton:!0},c.a.createElement(i.a.Title,null,g)),c.a.createElement("img",{src:E||v.default_image,alt:"default"}),c.a.createElement(i.a.Body,null,c.a.createElement("small",null,t," * ",y,"/10"),c.a.createElement("h5",null,"Description"),c.a.createElement("p",null,f),c.a.createElement("h5",null,"Comments"),c.a.createElement("p",null,h),c.a.createElement("h5",null,"Location"),c.a.createElement("p",null,v.name))),c.a.createElement(m.default,{handleEditClose:function(){return x(!1)},handleEditShow:S,editShow:L,card:s,patchLeisureData:u}))}},83:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(2),c=a(10),r=a(0),o=a.n(r),i=a(7),m=a(16),s=a(12);t.default=function(e){e.handleEditShow;var t=e.handleEditClose,a=e.editShow,u=e.card,p=e.patchLeisureData,d=Object(r.useState)([]),E=Object(c.a)(d,2),g=E[0],f=E[1];Object(r.useEffect)(function(){fetch("https://secret-lowlands-44368.herokuapp.com/leisure-locations").then(function(e){return e.json()}).then(function(e){return f(e)}).catch(function(e){return console.log(e.message)})},[]);var y=Object(r.useState)({}),h=Object(c.a)(y,2),v=h[0],b=h[1],O=function(e){var t;if(e.target.options){var a=e.target.options.selectedIndex;t=e.target.options[a].getAttribute("data-key")}var c=e.target.name,r=e.target.value;r&&!t?b(Object(l.a)({},v,Object(n.a)({},c,r))):r&&t&&b(Object(l.a)({},v,Object(n.a)({},c,t)))},j=g.map(function(e){return o.a.createElement("option",{"data-key":e.id,key:e.id},e.name)});return console.log(g),console.log(v,"id",u.id),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{show:a,onHide:t},o.a.createElement(s.a.Header,{closeButton:!0},o.a.createElement(s.a.Title,null,"Edit")),o.a.createElement(s.a.Body,null,o.a.createElement(i.a,{onSubmit:function(e){e.preventDefault(),0!==Object.keys(v).length?p("https://secret-lowlands-44368.herokuapp.com/leisure-activity/",u.id,v):alert("Can't submit an empty form")}},o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Avatar"),o.a.createElement(i.a.Select,{name:"avatar",onChange:O},o.a.createElement("option",null,"Deer"),o.a.createElement("option",null,"Squirrel"),o.a.createElement("option",null,"Falcon"),o.a.createElement("option",null,"Pigeon"),o.a.createElement("option",null,"Rat"),o.a.createElement("option",null,"Coyote"))),o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Activity"),o.a.createElement(i.a.Select,{name:"activity_type",onChange:O},o.a.createElement("option",null,"Picnic at the Park"),o.a.createElement("option",null,"Picnic at the Beach"),o.a.createElement("option",null,"Frisbee"),o.a.createElement("option",null,"Pickup Soccer"),o.a.createElement("option",null,"Other Outdoor Sports")),o.a.createElement(i.a.Label,null,"Location"),o.a.createElement(i.a.Select,{name:"leisure_location_id",onChange:O},j)),o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Activity Description"),o.a.createElement(i.a.Control,{"data-key":"0",name:"description",onChange:O,type:"text"})),o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Comments"),o.a.createElement(i.a.Control,{"data-key":"0",name:"comment",onChange:O,type:"text"})),o.a.createElement(i.a.Group,null,o.a.createElement(i.a.Label,null,"Rating"),o.a.createElement(i.a.Control,{name:"rating",onChange:O,type:"number"})),o.a.createElement(m.a,{variant:"primary",type:"submit"},"Save Changes")))))}},84:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(67);a(133);t.default=function(e){var t=e.setDisplayStatus,a=function(e){var a=e.target.textContent;t(a)};return l.a.createElement("div",{className:"filters"},l.a.createElement(c.a,{horizontal:!0},l.a.createElement(c.a.Item,{onClick:a,className:"filterbtn"},"Leisure activities"),l.a.createElement(c.a.Item,{onClick:a,className:"filterbtn"},"Outpost activities"),l.a.createElement(c.a.Item,{onClick:a,className:"filterbtn"},"All activities")))}},85:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(115),r=a(66),o=a(22);a(135);t.default=function(){return l.a.createElement(c.a,{id:"global-nav"},l.a.createElement(o.a,{style:{margin:"0px"}},l.a.createElement(c.a.Brand,{id:"nav-brand",href:"/"},l.a.createElement("img",{alt:"ActiveCritters",src:a(106),width:"40",height:"40"})),l.a.createElement(r.a,{className:"me-auto"},l.a.createElement(r.a.Link,{href:"/"},"Home"),l.a.createElement(r.a.Link,{href:"map"},"Live Map"),l.a.createElement(r.a.Link,{href:"new-activity"},"Post Activity"))))}}},[[142,3,2]]]);
//# sourceMappingURL=main.b3ab0b7c.chunk.js.map