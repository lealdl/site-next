(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{2651:function(e,a,s){"use strict";var t=s(5893);a.Z=function(e){return(0,t.jsx)("div",{children:(0,t.jsx)("footer",{children:(0,t.jsxs)("span",{children:[e.data.footer_desc," ",(0,t.jsx)("a",{href:e.data.footer_link,children:e.data.footer_text_link})]})})})}},1205:function(e,a,s){"use strict";var t=s(5893);a.Z=function(){return(0,t.jsx)("div",{children:(0,t.jsx)("nav",{className:"navbar",children:(0,t.jsxs)("div",{className:"max-width",children:[(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)("a",{href:"/",children:"Clinihard"})}),(0,t.jsxs)("ul",{className:"menu",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/",className:"menu-btn",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/sobre-empresa",className:"menu-btn",children:"Sobre"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/contato",className:"menu-btn",children:"Contato"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/chamados",className:"menu-btn",children:"Chamados"})})]}),(0,t.jsx)("div",{className:"menu-btn",children:(0,t.jsx)("i",{className:"fas fa-bars"})})]})})})}},3306:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSP:function(){return p}});var t=s(5893),n=s(7757),i=s.n(n),r=s(5861),c=s(4942),o=s(7294),d=s(9008),l=s(4298),m=s(1205),h=s(2651);function u(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function x(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){(0,c.Z)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}var p=!0;a.default=function(e){var a=e.data,s=(0,o.useState)({nome:"",whatsapp:"",endereco:"",equipamento:"",marca:"",modelo:"",defeito:"",fechado:"N\xc3O"}),n=s[0],u=s[1],p=(0,o.useState)({formSave:!1,type:"",mensagem:""}),j=p[0],f=p[1],v=function(e){return u(x(x({},n),{},(0,c.Z)({},e.target.name,e.target.value)))},N=function(){var e=(0,r.Z)(i().mark((function e(a){var s,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),f({formSave:!0}),e.prev=2,e.next=5,fetch("https://back-end-adm.herokuapp.com/add-chamado",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:return s=e.sent,e.next=8,s.json();case 8:(t=e.sent).erro?f({formSave:!1,type:"error",mensagem:t.mensagem}):(f({formSave:!1,type:"success",mensagem:t.mensagem}),u({nome:"",whatsapp:"",endereco:"",equipamento:"",marca:"",modelo:"",defeito:"",fechado:""})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),f({formSave:!1,type:"error",mensagem:"Erro: Chamado n\xe3o enviado!"});case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(a){return e.apply(this,arguments)}}(),b=(0,o.useState)(0),g=(b[0],b[1]);return(0,t.jsxs)("div",{children:[(0,t.jsxs)(d.default,{children:[(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("html",{lang:"pt-BR"}),(0,t.jsx)("meta",{name:"robots",content:"index, follow"}),(0,t.jsx)("meta",{name:"description",content:"Contato com a empresa ..."}),(0,t.jsx)("meta",{name:"author",content:"Clinihard - Clinihard Sistemas"}),(0,t.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"}),(0,t.jsx)("title",{children:"Chamados - Clinihard Sistemas"})]}),(0,t.jsx)(m.Z,{}),(0,t.jsx)("section",{className:"chamados",children:(0,t.jsxs)("div",{className:"max-width",children:[(0,t.jsx)("h2",{className:"title",children:a.dataChamados.title_chamados}),(0,t.jsxs)("div",{className:"chamados-content",children:[(0,t.jsxs)("div",{className:"column left",children:[(0,t.jsx)("p",{children:a.dataChamados.desc_chamados}),(0,t.jsxs)("div",{className:"icons",children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("i",{className:a.dataChamados.icon_company}),(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("div",{className:"head",children:a.dataChamados.title_company}),(0,t.jsx)("div",{className:"sub-title",children:a.dataChamados.desc_company})]})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("i",{className:a.dataChamados.icon_address}),(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("div",{className:"head",children:a.dataChamados.title_address}),(0,t.jsx)("div",{className:"sub-title",children:a.dataChamados.desc_address})]})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("i",{className:a.dataChamados.icon_email}),(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("div",{className:"head",children:a.dataChamados.title_email}),(0,t.jsx)("div",{className:"sub-title",children:a.dataChamados.desc_email})]})]})]})]}),(0,t.jsxs)("div",{className:"column right",children:[(0,t.jsx)("div",{className:"text",children:a.dataChamados.title_form}),"error"===j.type?(0,t.jsx)("p",{className:"alert-danger",children:j.mensagem}):"","success"===j.type?(0,t.jsx)("p",{className:"alert-success",children:j.mensagem}):"",(0,t.jsxs)("form",{onSubmit:N,children:[(0,t.jsxs)("div",{className:"select-tipo",children:[(0,t.jsx)("label",{className:"sub-title",children:"Equipamento: "}),(0,t.jsxs)("select",{name:"equipamento",onChange:v,value:n.equipamento,children:[(0,t.jsx)("option",{className:"select-tipo",value:"",children:"Tipo de Equipamento"}),(0,t.jsx)("option",{value:"Desktop",children:"Desktop"}),(0,t.jsx)("option",{value:"Notebook",children:"Notebook"}),(0,t.jsx)("option",{value:"Outro",children:"Outro"})]})]}),(0,t.jsx)("input",{type:"hidden",name:"equipamento",placeholder:"Digite o seu equipamento",onChange:g,value:n.equipamento}),(0,t.jsxs)("div",{className:"fields",children:[(0,t.jsx)("div",{className:"field name",children:(0,t.jsx)("input",{type:"text",name:"nome",placeholder:"Digite seu nome",onChange:v,value:n.nome,required:!0})}),(0,t.jsx)("div",{className:"field text",children:(0,t.jsx)("input",{type:"text",name:"whatsapp",placeholder:"Digite seu WhatsApp",onChange:v,value:n.whatsapp,required:!0})}),(0,t.jsx)("div",{className:"field text",children:(0,t.jsx)("input",{type:"text",name:"endereco",placeholder:"Digite seu endereco",onChange:v,value:n.endereco,required:!0})}),(0,t.jsx)("div",{className:"field text",children:(0,t.jsx)("input",{type:"text",name:"marca",placeholder:"Digite a marca do equipamento",onChange:v,value:n.marca})}),(0,t.jsx)("div",{className:"field text",children:(0,t.jsx)("input",{type:"text",name:"modelo",placeholder:"Digite o modelo do equipamento",onChange:v,value:n.modelo})})]}),(0,t.jsx)("div",{className:"field textarea",children:(0,t.jsx)("textarea",{cols:"30",name:"defeito",rows:"10",placeholder:"Digite o defeito",onChange:v,value:n.defeito})}),(0,t.jsx)("div",{className:"button-area",children:j.formSave?(0,t.jsx)("button",{type:"submit",disabled:!0,children:"Enviando..."}):(0,t.jsx)("button",{type:"submit",children:"Enviar"})})]})]})]})]})}),(0,t.jsx)(h.Z,{data:a.dataFooter}),(0,t.jsx)(l.default,{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",strategy:"beforeInteractive"}),(0,t.jsx)(l.default,{src:"custom.js",strategy:"afterInteractive"})]})}},4333:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chamados",function(){return s(3306)}])},9008:function(e,a,s){e.exports=s(639)},4298:function(e,a,s){e.exports=s(7926)},5861:function(e,a,s){"use strict";function t(e,a,s,t,n,i,r){try{var c=e[i](r),o=c.value}catch(d){return void s(d)}c.done?a(o):Promise.resolve(o).then(t,n)}function n(e){return function(){var a=this,s=arguments;return new Promise((function(n,i){var r=e.apply(a,s);function c(e){t(r,n,i,c,o,"next",e)}function o(e){t(r,n,i,c,o,"throw",e)}c(void 0)}))}}s.d(a,{Z:function(){return n}})}},function(e){e.O(0,[774,888,179],(function(){return a=4333,e(e.s=a);var a}));var a=e.O();_N_E=a}]);