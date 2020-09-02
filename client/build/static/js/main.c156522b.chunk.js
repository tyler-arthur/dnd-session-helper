(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(95)},49:function(e,t,a){},76:function(e,t){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(41),c=a.n(l),o=(a(49),a(2)),u=r.a.createContext({}),i=a(42),s=a.n(i),m=a(3),h=a.n(m),p=function(e){h.a.post("/api/character",e).then(function(e){return console.log(e),e}).catch(function(e){return console.log(e)})},E=function(){return h.a.get("/api/character/all")},v=function(e){return h.a.get("/api/character/".concat(e))},f=a(10),d=a(43),b=function(e,t){var a=Object(n.useState)(e),r=Object(o.a)(a,2),l=r[0],c=r[1];return{handleChange:function(e){e.persist(),c(function(t){return Object(d.a)({},t,Object(f.a)({},e.target.name,e.target.value))})},handleSubmit:function(e){e&&e.preventDefault(),t()},values:l}},g=function(e){var t=e.state,a=e.setState,n=b({name:"",race:"",subrace:"",class:"",level:"",maxHP:"",currentHP:"",AC:"",initiative:"",perception:""},function(){console.log(l),l.currentHP=l.maxHP,p(l),a(!t)}),l=n.values,c=n.handleSubmit,o=n.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:c},r.a.createElement("label",null,"What is your character's name?"),r.a.createElement("input",{name:"name",type:"text",placeholder:"Enter name",onChange:o,value:l.name,required:!0}),r.a.createElement("label",null,"What is your character's race?"),r.a.createElement("input",{name:"race",type:"text",placeholder:"Enter race",onChange:o,value:l.race,required:!0}),r.a.createElement("label",null,"If applicable, What is your character's subrace?"),r.a.createElement("input",{name:"subrace",type:"text",placeholder:"Enter subrace",onChange:o,value:l.subrace}),r.a.createElement("label",null,"What is your character's class?"),r.a.createElement("input",{name:"class",type:"text",placeholder:"Enter class",onChange:o,value:l.class,required:!0}),r.a.createElement("label",null,"What is your character's level?"),r.a.createElement("input",{name:"level",type:"text",placeholder:"Enter level",onChange:o,value:l.level,required:!0}),r.a.createElement("label",null,"What is your character's max HP?"),r.a.createElement("input",{name:"maxHP",type:"text",placeholder:"Enter max HP",onChange:o,value:l.maxHP,required:!0}),r.a.createElement("label",null,"What is your character's armor class?"),r.a.createElement("input",{name:"AC",type:"text",placeholder:"Enter AC",onChange:o,value:l.AC,required:!0}),r.a.createElement("label",null,"What is your character's initiative bonus?"),r.a.createElement("input",{name:"initiative",type:"text",placeholder:"Enter initiative Bonus",onChange:o,value:l.initiative,required:!0}),r.a.createElement("label",null,"What is your character's passive perception?"),r.a.createElement("input",{name:"perception",type:"text",placeholder:"Enter perception bonus +10",onChange:o,value:l.perception,required:!0}),r.a.createElement("button",{type:"submit"},"Create character")),r.a.createElement("button",{onClick:function(){return a(!t)}},"Choose a Character"))},C=function(e){var t=e.character;return r.a.createElement("div",null,r.a.createElement("h1",null,"Name: ",t.name),r.a.createElement("span",null,r.a.createElement("h2",null,"Race: ",t.race),r.a.createElement("h2",null,"Subrace: ",t.subrace)),r.a.createElement("span",null,r.a.createElement("h2",null,"Class: ",t.class),r.a.createElement("h2",null,"Level: ",t.level)),r.a.createElement("span",null,r.a.createElement("h2",null,"Current HP: ",t.currentHP),r.a.createElement("h2",null,"Max HP: ",t.maxHP)),r.a.createElement("span",null,r.a.createElement("h2",null,"AC: ",t.AC),r.a.createElement("h2",null,"Initiative: ",t.initiative),r.a.createElement("h2",null,"Perception: ",t.perception)))},x=function(e){var t=e.socket,a=Object(n.useContext)(u).userCharacter,l=Object(n.useState)(a.currentHP),c=Object(o.a)(l,2),i=c[0],s=c[1],m=a.name;return Object(n.useEffect)(function(){},[t]),r.a.createElement("div",{className:"border-black"},r.a.createElement("h1",null,"Name: ",a.name),r.a.createElement("span",null,r.a.createElement("h2",null,"Race: ",a.race),r.a.createElement("h2",null,"Subrace: ",a.subrace)),r.a.createElement("span",null,r.a.createElement("h2",null,"Class: ",a.class),r.a.createElement("h2",null,"Level: ",a.level)),r.a.createElement("span",null,"Current HP",r.a.createElement("textarea",{value:i,onChange:function(e){s(e.target.value),console.log(i),t.emit("update-hp",{hpState:i,name:m})}}),r.a.createElement("h2",null,"Max HP: ",a.maxHP)),r.a.createElement("span",null,r.a.createElement("h2",null,"AC: ",a.AC),r.a.createElement("h2",null,"Initiative: ",a.initiative),r.a.createElement("h2",null,"Perception: ",a.perception)))},y=function(e){var t=e.socket,a=Object(n.useContext)(u).userCharacter,l=Object(n.useState)([]),c=Object(o.a)(l,2),i=c[0],s=c[1];return Object(n.useEffect)(function(){t.on("update-user-characters",function(e){console.log(e),s(e)})},[]),r.a.createElement("div",null,i.map(function(e){return e.name===a.name?r.a.createElement(x,{socket:t,key:a._id}):r.a.createElement(C,{character:e,key:e._id})}))},w=s()(),j=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),s=i[0],m=i[1],h=Object(n.useState)(""),p=Object(o.a)(h,2),f=p[0],d=p[1],b=Object(n.useState)({name:"",race:"",subrace:"",class:"",level:"",currentHP:"",maxHP:"",AC:"",initiative:"",perception:""}),C=Object(o.a)(b,2),x=C[0],j=C[1];return Object(n.useEffect)(function(){E().then(function(e){console.log(e.data);var t=e.data;m(t)})},[]),r.a.createElement(u.Provider,{value:{userCharacter:x}},r.a.createElement("div",null,""===x.name?!1===a?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(f).then(function(e){var t=e.data[0];j(t),console.log("UserCharacter",x),w.emit("add-user-character",t)}).catch(function(e){return console.log(e)})}},r.a.createElement("label",null,"Select Character"),r.a.createElement("select",{value:f,onChange:function(e){d(e.target.value)},id:"name",size:"6"},s.map(function(e){return r.a.createElement("option",{key:e._id,value:e.name},e.name)})),r.a.createElement("button",{type:"submit"},"Confirm")),r.a.createElement("button",{onClick:function(){return l(!a)}},"Create a Character")):r.a.createElement(g,{state:a,setState:l}):r.a.createElement("div",null,r.a.createElement(y,{socket:w}))))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):P(e)})}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.c156522b.chunk.js.map