(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(8),r=a.n(c),i=(a(14),a(6)),u=a.n(i),o=a(9),l=a(2),d=(a(16),a(17),a(0)),j=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("div",{children:"Contacts"})})},b=(a(19),function(e){return Object(d.jsxs)("div",{className:"bar",children:[Object(d.jsx)("img",{className:"loupe",src:"/React-Contact-List/images/loupe.svg",alt:"loupe"}),Object(d.jsx)("input",{className:"searchInput",onChange:function(t){e.setInputValue(t.target.value)}})]})}),h=a(7),m=(a(20),function(e){var t=n.a.useState(!1),a=Object(l.a)(t,2),s=a[0],c=a[1],r=function(){c(!s),!1===s?(e.setInputsChecked([].concat(Object(h.a)(e.inputsChecked),[e.userData.id])),console.log([].concat(Object(h.a)(e.inputsChecked),[e.userData.id]))):(e.setInputsChecked(e.inputsChecked.filter((function(t){return t!==e.userData.id}))),console.log(e.inputsChecked.filter((function(t){return t!==e.userData.id}))))};return null!==e.userData.avatar?Object(d.jsxs)("div",{className:"user",onClick:r,children:[Object(d.jsx)("img",{className:"avatar",src:e.userData.avatar,alt:e.userData.first_name[0]+" "+e.userData.last_name[0]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:e.userData.first_name+" "+e.userData.last_name}),Object(d.jsx)("div",{children:e.userData.email})]}),Object(d.jsx)("div",{className:"spaceFiller"}),Object(d.jsx)("input",{type:"checkbox",disabled:!0,checked:s})]}):Object(d.jsxs)("div",{className:"user",onClick:r,children:[Object(d.jsx)("div",{className:"noImage",children:Object(d.jsx)("div",{children:e.userData.first_name[0]+e.userData.last_name[0]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:e.userData.first_name+" "+e.userData.last_name}),Object(d.jsx)("div",{children:e.userData.email})]}),Object(d.jsx)("div",{className:"spaceFiller"}),Object(d.jsx)("input",{type:"checkbox",disabled:!0,checked:s})]})});var p=function(){var e=n.a.useState(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],c=n.a.useState([]),r=Object(l.a)(c,2),i=r[0],h=r[1],p=n.a.useState(""),f=Object(l.a)(p,2),v=f[0],O=f[1],x=function(e,t){return e.last_name<t.last_name?-1:e.last_name>t.last_name?1:0};function C(){return(C=Object(o.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=(a=e.sent).sort(x),s(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var D=void 0;return!1!==a&&(D=a.filter((function(e){return""===v||e.first_name.toLowerCase().includes(v.toLowerCase())||e.last_name.toLowerCase().includes(v.toLowerCase())||(e.first_name.toLowerCase()+" "+e.last_name.toLowerCase()).includes(v.toLowerCase())?e:void 0})).map((function(e){return Object(d.jsx)(m,{userData:e,inputsChecked:i,setInputsChecked:h})}))),!1!==a?Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{}),Object(d.jsx)(b,{setInputValue:O}),D]}):Object(d.jsx)("div",{loadData:function(){return C.apply(this,arguments)}(),children:"Loading..."})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}],[[21,1,2]]]);
//# sourceMappingURL=main.8b72ca34.chunk.js.map