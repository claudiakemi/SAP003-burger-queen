(this["webpackJsonpburger-queen"]=this["webpackJsonpburger-queen"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.90578f51.png"},32:function(e,t,a){e.exports=a(58)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=a(8),o=a(11),u=(a(37),a(38),a(28)),m=a.n(u),d=function(){return r.a.createElement("img",{src:m.a,id:"logo",alt:"burger-logo"})},s=(a(39),function(e){return r.a.createElement("button",{id:e.id,className:e.class,onClick:e.handleClick},e.name)});function p(){return r.a.createElement("div",{id:"all"},r.a.createElement(d,null),r.a.createElement("hr",{id:"line"}),r.a.createElement("h2",{id:"work"},"Selecione sua fun\xe7\xe3o:"),r.a.createElement("section",{id:"buttons"},r.a.createElement(i.b,{to:"/pages/Waiter/index"},r.a.createElement(s,{class:"btn",name:"Gar\xe7om/Gar\xe7onete"})),r.a.createElement(i.b,{to:"/pages/Chef/index"},r.a.createElement(s,{class:"btn",name:"Cozinheiro(a)"}))))}c.a.render(p,document.getElementById("root"));var E=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(13),b=a(4),h=a(20),g=a.n(h);a(53);g.a.initializeApp({apiKey:"AIzaSyAYFnklriImQlD-Ha9yK37vRcPldoRsiOA",authDomain:"burger-queen-592d4.firebaseapp.com",databaseURL:"https://burger-queen-592d4.firebaseio.com",projectId:"burger-queen-592d4",storageBucket:"burger-queen-592d4.appspot.com",messagingSenderId:"253644947255",appId:"1:253644947255:web:a1123c834994ffd06664b2",measurementId:"G-ZS3Q0JDGZT",timestampsInSnapshots:!0});g.a.firestore();var v=g.a;a(54);var j=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("Em preparo"),o=Object(b.a)(c,2);return o[0],o[1],Object(n.useEffect)((function(){v.firestore().collection("orders").orderBy("timestamp","asc").get().then((function(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));l(t)}))}),[]),r.a.createElement("main",{id:"all"},r.a.createElement(d,null),r.a.createElement("hr",{id:"line"}),r.a.createElement("h1",null,"Pedidos"),r.a.createElement("div",null,a.map((function(e){return"Em preparo"===e.orderStatus?r.a.createElement("section",{id:"chef-card"},r.a.createElement("p",null,r.a.createElement("strong",null,"Mesa: ",e.table," - Cliente: ",e.client," - Hor\xe1rio: ",e.time)),r.a.createElement("hr",{id:"lines"}),e.order.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e.quantity," ",e.name," "),r.a.createElement("hr",{id:"lines"}))})),r.a.createElement("div",{id:"options-info"},""!==e.option?r.a.createElement("p",{id:"option"},e.option):"",0!==e.extra.length?r.a.createElement("p",{id:"extra"},e.extra):""),r.a.createElement("p",null,"Total: R$",e.total,",00"),r.a.createElement(s,{id:"pronto",class:"btn",handleClick:function(){return function(e){v.firestore().collection("orders").doc(e.id).update({orderStatus:"Pronto",timestampReady:(new Date).getTime()}).then((function(){window.location.reload()}))}(e)},name:"Pedido pronto"})):r.a.createElement(r.a.Fragment,null)})),r.a.createElement(i.b,{to:"/"},r.a.createElement(s,{class:"back",name:"Voltar"}))))},O=a(16),y=(a(55),a(56),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,e.label),r.a.createElement("input",{type:e.type,id:e.id,value:e.value,name:e.name,onChange:e.handleChange}))}),k=[];var C=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(b.a)(c,2),u=o[0],m=o[1],p=Object(n.useState)([]),E=Object(b.a)(p,2),h=E[0],g=E[1],j=Object(n.useState)(""),C=Object(b.a)(j,2),S=C[0],x=C[1],q=Object(n.useState)(""),w=Object(b.a)(q,2),R=w[0],T=w[1],P=Object(n.useState)(0),I=Object(b.a)(P,2),D=I[0],B=I[1],F=Object(n.useState)(""),M=Object(b.a)(F,2),$=M[0],A=M[1],W=Object(n.useState)([]),G=Object(b.a)(W,2),J=G[0],V=G[1],z=Object(n.useState)("Em preparo"),N=Object(b.a)(z,2),Q=N[0],H=N[1];function K(e){if("breakfast"===e.currentTarget.id){var t=a.filter((function(e){return!0===e.breakfast}));m(t)}else{var n=a.filter((function(e){return!1===e.breakfast}));m(n)}}function L(e){var t=e.currentTarget.id;A(t)}function Z(e){var t=e.currentTarget.id;k.push(t);1===k.length?B(D+1):B(D),V(t)}return Object(n.useEffect)((function(){v.firestore().collection("menu").get().then((function(e){var t=e.docs.map((function(e){return Object(f.a)({},e.data())}));l(t),m(t)}))}),[]),r.a.createElement("main",{id:"all-menu"},r.a.createElement(d,null),r.a.createElement("hr",{id:"line"}),r.a.createElement(i.b,{to:"/pages/Ready/index"},r.a.createElement(s,{class:"btn",name:"Ver pedidos prontos para entrega"})),r.a.createElement("hr",{id:"line"}),r.a.createElement("h1",{id:"waiter"},"Card\xe1pio"),r.a.createElement("div",null,r.a.createElement(s,{id:"breakfast",class:"btn",name:"Caf\xe9 da manh\xe3",handleClick:K}),r.a.createElement(s,{id:"lunch",class:"btn",name:"Almo\xe7o e Janta",handleClick:K})),r.a.createElement("section",{id:"client-form"},r.a.createElement(y,{type:"text",id:"input",label:"Nome do cliente: ",value:S,handleChange:function(e){return x(e.currentTarget.value)}}),r.a.createElement(y,{type:"text",id:"input-table",label:"N\xba da mesa: ",value:R,handleChange:function(e){return T(e.currentTarget.value)}})),r.a.createElement("ul",{id:"items-list"},u.map((function(e){return r.a.createElement("section",{id:"item-card"},r.a.createElement("figure",{id:"img-box"},r.a.createElement("img",{id:"photo",src:e.img})),r.a.createElement("article",{id:"product-info"},r.a.createElement("h3",null,e.name),r.a.createElement("div",{id:"quantity"},"Quantidade:",r.a.createElement(s,{id:"quant-btn",name:"-",handleClick:function(){var t;(t=e).quantity>0?(t.quantity-=1,g(Object(O.a)(h)),B(D-t.price)):(t.quantity=0,g(Object(O.a)(h)))}}),h.map((function(t){return t.name===e.name&&t.quantity>0&&t.quantity})),r.a.createElement(s,{id:"quant-btn",name:"+",handleClick:function(){return t=e,h.includes(t)?(t.quantity+=1,g(Object(O.a)(h))):(t.quantity=1,g((function(e){return[].concat(Object(O.a)(e),[t])}))),void B(D+t.price);var t}})),r.a.createElement("section",{id:"options"},e.options.map((function(e){return 0!==e.length?r.a.createElement(s,{name:e,id:e,class:"option-btn",handleClick:L}):""})),e.extra.map((function(e){return 0!==e.length?r.a.createElement(s,{name:e,id:e,class:"extra-btn",handleClick:Z}):""}))),r.a.createElement("p",null,"Pre\xe7o: R$",e.price,",00")))}))),r.a.createElement("hr",{id:"line"}),r.a.createElement("section",{id:"resume-card"},r.a.createElement("h1",{id:"resume"},"Resumo do pedido"),r.a.createElement("p",null,"Mesa: ",R," - Cliente: ",S),h.map((function(e){return r.a.createElement("section",{id:"order-card"},r.a.createElement("p",null,r.a.createElement("strong",null,e.quantity," ",e.name)),e.options.reduce((function(e){return 0!==e.length?r.a.createElement("p",null,$):""})),e.extra.reduce((function(e){return 0!==e.length?r.a.createElement("p",null,J):""})),r.a.createElement("p",null,"Pre\xe7o: R$",e.price,",00"),r.a.createElement(s,{id:"delete-item",handleClick:function(){return function(e){var t=h.filter((function(t){return t!==e}));g(t),B(D-e.price*e.quantity)}(e)},name:"Deletar item"}),r.a.createElement("hr",{id:"resume-line"}))})),r.a.createElement("p",null,"Total: R$",D,",00")),r.a.createElement(s,{class:"btn",handleClick:function(e){e.preventDefault(),v.firestore().collection("orders").add({order:h,client:S,table:R,option:$,extra:J,total:D,orderStatus:Q,timestamp:(new Date).getTime(),time:(new Date).toLocaleString("pt-BR")}).then((function(){g([]),x(""),T(""),A(""),V([]),B(0),H("Em preparo"),alert("Pedido enviado")}))},name:"Enviar para preparo"}),r.a.createElement(i.b,{to:"/"},r.a.createElement(s,{class:"back",name:"Voltar"})))};a(57);var S=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("Em preparo"),o=Object(b.a)(c,2);return o[0],o[1],Object(n.useEffect)((function(){v.firestore().collection("orders").orderBy("timestamp","asc").get().then((function(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));l(t)}))}),[]),r.a.createElement("main",{id:"all"},r.a.createElement(d,null),r.a.createElement("hr",{id:"line"}),r.a.createElement("h1",null,"Pedidos prontos para entrega"),r.a.createElement("div",null,a.map((function(e){return"Pronto"===e.orderStatus?r.a.createElement("section",{id:"chef-card"},r.a.createElement("p",null,r.a.createElement("strong",null,"Mesa: ",e.table," - Cliente: ",e.client," - Tempo de espera: ",function(e){var t=e.timestampReady-e.timestamp;return Math.floor(t/36e5%24)+":"+Math.floor(t/6e4%60)+":"+Math.floor(t/1e3%60)}(e))),r.a.createElement("hr",{id:"lines"}),e.order.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e.quantity," ",e.name," "),r.a.createElement("hr",{id:"lines"}))})),r.a.createElement("div",{id:"options-info"},""!==e.option?r.a.createElement("p",{id:"option"},e.option):"",0!==e.extra.length?r.a.createElement("p",{id:"extra"},e.extra):""),r.a.createElement("p",null,"Total: R$",e.total,",00"),r.a.createElement(s,{id:"entregue",class:"btn",handleClick:function(){return function(e){v.firestore().collection("orders").doc(e.id).update({orderStatus:"Entregue"}).then((function(){return window.location.reload()}))}(e)},name:"Pedido entregue"})):r.a.createElement(r.a.Fragment,null)})),r.a.createElement(i.b,{to:"/pages/Waiter/index"},r.a.createElement(s,{class:"back",name:"Voltar"}))))};c.a.render(r.a.createElement((function(){return r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement("div",null,r.a.createElement(o.a,{exact:!0,path:"/",component:E}),r.a.createElement(o.a,{path:"/pages/Waiter/index",component:C}),r.a.createElement(o.a,{path:"/pages/Chef/index",component:j}),r.a.createElement(o.a,{path:"/pages/Ready/index",component:S}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.e97236af.chunk.js.map