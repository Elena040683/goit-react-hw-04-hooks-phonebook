(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={input:"ContactForm_input__1DeER",label:"ContactForm_label__1rsX1",btn:"ContactForm_btn__1tsZv"}},,,function(e,t,n){e.exports={item:"OneContact_item__newsl",text:"OneContact_text__1FeJ3",btn:"OneContact_btn__35C_Z"}},,function(e,t,n){e.exports={filterInput:"Filter_filterInput__2pjmr",filterLabel:"Filter_filterLabel__NefOa"}},,function(e,t,n){e.exports={container:"Container_container__WG9Pj"}},function(e,t,n){e.exports={list:"ContactList_list__19EXX"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=(n(18),n(13)),s=n(2),l=(n(19),n(23)),u=n(10),b=n.n(u),m=n(0);var j=function(e){var t=e.children;return Object(m.jsx)("div",{className:b.a.container,children:t})},d=n(3),f=n.n(d);function O(e){var t=e.addNewContact,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],b=l[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":b(a);break;default:return}};return Object(m.jsxs)("form",{className:f.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:u}),i(""),b("")},children:[Object(m.jsxs)("label",{className:f.a.label,children:["Name",Object(m.jsx)("input",{className:f.a.input,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:j,required:!0})]}),Object(m.jsxs)("label",{className:f.a.label,children:["Number",Object(m.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:j,required:!0})]}),Object(m.jsx)("button",{className:f.a.btn,type:"submit",children:"Add contact"})]})}var p=n(11),h=n.n(p),x=n(6),_=n.n(x),v=function(e){var t=e.name,n=e.number,a=e.onDelete;return Object(m.jsxs)("div",{className:_.a.item,children:[Object(m.jsxs)("p",{className:_.a.text,children:[t,":",n]}),Object(m.jsx)("button",{className:_.a.btn,type:"button",onClick:a,children:"Delete"})]})},C=function(e){var t=e.contacts,n=e.deleteContact;return Object(m.jsx)("ul",{className:h.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(m.jsx)("li",{children:Object(m.jsx)(v,{name:a,number:c,onDelete:function(){return n(t)}})},t)}))})},N=n(8),g=n.n(N),S=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{className:g.a.filterLabel,children:["Find contacts by name",Object(m.jsx)("input",{className:g.a.filterInput,type:"text",value:t,onChange:n})]})},k=n(12),w=function(e){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:e})),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){localStorage.setItem(c,JSON.stringify("contacts"))}),[c]),[c,r]};function y(){var e=w(k),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),u=i[0],b=i[1],d=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return Object(m.jsxs)(j,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(O,{addNewContact:function(e){var t=e.name,a=e.number,r={id:Object(l.a)(),name:t,number:a};n.some((function(e){return e.name===t}))?alert("".concat(t," already exists")):c([].concat(Object(o.a)(n),[r]))}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(S,{value:u,onChange:function(e){b(e.target.value)}}),Object(m.jsx)(C,{contacts:d,deleteContact:function(e){return c(n.filter((function(t){return t.id!==e})))}})]})}i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.3b72c2ca.chunk.js.map