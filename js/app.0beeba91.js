(function(t){function a(a){for(var e,c,o=a[0],l=a[1],r=a[2],d=0,m=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);u&&u(a);while(m.length)m.shift()();return n.push.apply(n,r||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(e=!1)}e&&(n.splice(a--,1),t=c(c.s=s[0]))}return t}var e={},i={app:0},n=[];function c(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=e,c.d=function(t,a,s){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)c.d(s,e,function(a){return t[a]}.bind(null,e));return s},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="https://msojka96.github.io/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var r=0;r<o.length;r++)a(o[r]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"1abc":function(t,a,s){},2662:function(t,a,s){"use strict";var e=s("f5ad"),i=s.n(e);i.a},"2ab0":function(t,a,s){},"2d43":function(t,a,s){"use strict";var e=s("3b43"),i=s.n(e);i.a},"342b":function(t,a,s){},"3b43":function(t,a,s){},"3cee":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Page"),s("About"),s("Projects"),s("Contact"),s("Footer")],1)},n=[],c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Header"),s("SideBar",{attrs:{clicked_menu:t.get_clicked_menu}})],1)},o=[],l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header",attrs:{id:"header"}},[s("Menu"),s("ProfilePhoto")],1)},r=[],u=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"profile"},[s("div",{staticClass:"profile-photo"}),s("div",{staticClass:"link"},[s("a",{staticClass:"a",attrs:{href:"https://www.linkedin.com/in/mikołaj-sojka-7b4680a0/"}},[s("v-icon",{staticClass:"icon-profile",attrs:{name:"linkedin"}})],1),s("a",{staticClass:"a",attrs:{href:"https://github.com/msojka96"}},[s("v-icon",{staticClass:"icon-profile",attrs:{name:"github"}})],1)])])},d=[],m={name:"ProfilePhoto"},v=m,_=(s("fdf7"),s("2877")),f=Object(_["a"])(v,u,d,!1,null,"1adcafbc",null),p=f.exports,h=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"menu"},[t._m(0),s("div",{class:t.get_clicked?"menu-icon clicked "+t.get_menu_icon_color:"menu-icon "+t.get_menu_icon_color,on:{click:t.sidebar_clicked}},[s("v-icon",{staticClass:"icon-menu",attrs:{name:"menu"}})],1),s("div",{staticClass:"position"},[t.get_responsive_pc?s("div",{staticClass:"route"},[t._m(1),s("Separator")],1):t._e(),t.get_responsive_pc?s("div",{staticClass:"route"},[t._m(2),s("Separator")],1):t._e(),t.get_responsive_pc?s("div",{staticClass:"route"},[t._m(3)]):t._e()]),t.get_responsive_pc&&t.get_responsive_mobile?s("div",{staticClass:"route"},[s("span",[t._v("Mikołaj Sojka")])]):t._e()])},C=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"name-surname"},[s("div",[t._v("Mikołaj Sojka")]),s("div",{staticClass:"front"},[t._v("Front-end develeper")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"#about"}},[s("span",{staticClass:"menu-item chosen"},[t._v("O mnie")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"#portfolio"}},[s("span",{staticClass:"menu-item"},[t._v("Projekty")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"#contact"}},[s("span",{staticClass:"menu-item"},[t._v("Kontakt")])])}],b=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"separator"},[t._v(t._s(t.name))])},g=[],k={name:"Separator",props:{name:{type:String,default:"/"}}},w=k,j=(s("8e81"),Object(_["a"])(w,b,g,!1,null,"a200af9e",null)),y=j.exports,z={name:"Menu",components:{Separator:y},data:function(){return{responsive_pc:!0,responsive_mobile:!0,clicked:!1,menu_icon_color:"default"}},mounted:function(){window.addEventListener("resize",this.resize),window.addEventListener("scroll",this.on_scroll),this.resize()},computed:{get_clicked:function(){return this.clicked},get_responsive_pc:function(){return this.responsive_pc},get_responsive_mobile:function(){return this.responsive_mobile},get_menu_icon_color:function(){return this.menu_icon_color}},methods:{on_scroll:function(){var t=document.getElementById("header").offsetHeight;this.menu_icon_color="default",window.scrollY>t/2&&(this.menu_icon_color="changed")},sidebar_clicked:function(t){this.clicked=!this.clicked,this.$parent.$emit("sidebar_clicked",t)},resize:function(){window.innerWidth<700?(this.responsive_pc=!1,this.responsive_mobile=!0):(this.responsive_pc=!0,this.responsive_mobile=!1)}}},x=z,E=(s("ccfb"),Object(_["a"])(x,h,C,!1,null,"5f0949e9",null)),P=E.exports,O={name:"Header",components:{ProfilePhoto:p,Menu:P},mounted:function(){this.$on("sidebar_clicked",this.sidebar_clicked)},methods:{sidebar_clicked:function(){this.$parent.$emit("sidebar_clicked")}}},$=O,M=(s("7679"),Object(_["a"])($,l,r,!1,null,null,null)),S=M.exports,B=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.is_visible,expression:"is_visible"}],staticClass:"side-bar"},[s("MenuButtons")],1)},H=[],N=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"menu-buttons"},[s("a",{attrs:{href:"#about"}},[s("div",{class:t.get_actual_cl_1},[s("v-icon",{staticClass:"menu-button-icon",attrs:{name:"info"}}),s("div",{staticClass:"button-name"},[t._v("o mnie")])],1)]),s("a",{attrs:{href:"#portfolio"}},[s("div",{class:t.get_actual_cl_2},[s("v-icon",{staticClass:"menu-button-icon",attrs:{name:"airplay"}}),s("div",{staticClass:"button-name"},[t._v("projekty")])],1)]),s("a",{attrs:{href:"#contact"}},[s("div",{class:t.get_actual_cl_3},[s("v-icon",{staticClass:"menu-button-icon",attrs:{name:"smartphone"}}),s("div",{staticClass:"button-name"},[t._v("kontakt")])],1)])])},R=[],A={name:"MenuButtons",data:function(){return{actual_class_1:"button",actual_class_2:"button br-top",actual_class_3:"button br-top",about:0,header:0,portfolio:0}},mounted:function(){window.addEventListener("scroll",this.set_cl),window.addEventListener("resize",this.resize),this.resize(),this.set_cl()},computed:{get_actual_cl_1:function(){return this.actual_class_1},get_actual_cl_2:function(){return this.actual_class_2},get_actual_cl_3:function(){return this.actual_class_3}},methods:{resize:function(){this.about=document.getElementById("about").scrollHeight,this.header=document.getElementById("header").scrollHeight,this.portfolio=document.getElementById("portfolio").scrollHeight},set_cl:function(){this.actual_class_1="button",this.actual_class_2="button br-top",this.actual_class_3="button br-top";var t=this.about,a=t+this.portfolio;window.scrollY<=t?this.actual_class_1="button chosen":window.scrollY>t&&window.scrollY<=a?this.actual_class_2="button chosen br-top":window.scrollY>a&&(this.actual_class_3="button chosen br-top")}}},K=A,I=(s("6450"),Object(_["a"])(K,N,R,!1,null,"5a14a729",null)),F=I.exports,L={name:"SideBar",props:{clicked_menu:{type:Boolean,default:!1}},components:{MenuButtons:F},computed:{is_visible:function(){return this.clicked_menu}}},D=L,W=(s("8c7f"),Object(_["a"])(D,B,H,!1,null,"81f4ae40",null)),Y=W.exports,J=(s("d5e8"),{name:"Page",components:{Header:S,SideBar:Y},data:function(){return{clicked_menu:!1}},mounted:function(){this.$on("sidebar_clicked",this.sidebar_clicked)},computed:{get_clicked_menu:function(){return this.clicked_menu}},methods:{sidebar_clicked:function(){this.clicked_menu=!this.clicked_menu}}}),T=J,G=(s("f78d"),Object(_["a"])(T,c,o,!1,null,null,null)),U=G.exports,V=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about",attrs:{id:"about"}},[s("div",{staticClass:"name"},[s("div",{staticClass:"title"},[t._v(" O MNIE ")])]),s("div",{staticClass:"description font desc-ext"},[t._v("Nazywam się Mikołaj Sojka, mam 23 lata i jestem Front-end developerem w firmie Posbit. Ukończyłem studia licencjackie na kierunku Informatyka na Uniwersytecie Gdańskim. Jestem nastawiony na rozwój. Planuję dalszą edukację od października. Moimi zainteresowaniami są: elektronika, sport, programowanie, majsterkowanie. W programowaniu najbardziej podoba mi się rozwiązywanie problemów, traktuję je jak łamigłówki, które sprawiają mi satysfakcję po rozwiązaniu. Moje podejście jest takie, że każdy problem da się rozwiązać. "),s("br"),s("br"),t._v(" Aktualnie korzystam z takich technologii jak: "),s("br"),s("br"),s("div",{staticClass:"tech"},[s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-react"}),s("div",{staticClass:"tech_name"},[t._v(" React & Redux ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-vuejs"}),s("div",{staticClass:"tech_name"},[t._v(" Vue & Vuex ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-node-js"}),s("div",{staticClass:"tech_name"},[t._v(" Node & Express ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-html5"}),s("div",{staticClass:"tech_name"},[t._v(" Html ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-css3"}),s("div",{staticClass:"tech_name"},[t._v(" Css ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-sass"}),s("div",{staticClass:"tech_name"},[t._v(" Sass ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-less"}),s("div",{staticClass:"tech_name"},[t._v(" Less ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-git-alt"}),s("div",{staticClass:"tech_name"},[t._v(" Git ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fas fa-database"}),s("div",{staticClass:"tech_name"},[t._v(" Mongo ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-linux"}),s("div",{staticClass:"tech_name"},[t._v(" Linux ")])])]),s("br"),t._v(" W ramach samorozwoju wykonałem dużo prywatnych projektów. Przy ich pisaniu kładłem nacisk na warstwę logiczną i nie jestem zadowolony z ich wyglądu. Znajdują się one na githubie. Pozostałe projekty załączone są w sekcji poniżej. ")])])}],q={name:"About"},Q=q,X=(s("c5ce"),Object(_["a"])(Q,V,Z,!1,null,null,null)),tt=X.exports,at=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about",attrs:{id:"portfolio"}},[t._m(0),s("div",{staticClass:"description no_pad"},[s("div",{staticClass:"pr-desc"},[s("div",{staticClass:"img-wrapper"},[s("div",{staticClass:"project pr_1"},[s("div",{staticClass:"project-title"},[s("v-icon",{staticClass:"title-icon",attrs:{name:"hash"}}),t._v(" SKM ")],1)])]),s("div",[s("div",{staticClass:"title-wrapper"},[s("div",{staticClass:"title-desc"},[s("div",{staticClass:"links-demo"},[s("a",{staticClass:"a",attrs:{href:"https://github.com/msojka96/inf_exp/tree/master/skm"}},[s("v-icon",{staticClass:"link-demo",attrs:{name:"code"}}),t._v(" KOD ")],1),s("a",{staticClass:"a",attrs:{href:"https://msojka96.github.io/skm/"}},[s("v-icon",{staticClass:"link-demo",attrs:{name:"chrome"}}),t._v(" DEMO ")],1)])])]),t._m(1)])])]),s("div",{staticClass:"description no_pad"},[s("div",{staticClass:"pr-desc"},[s("div",{staticClass:"img-wrapper"},[s("div",{staticClass:"project pr_2"},[s("div",{staticClass:"project-title"},[s("v-icon",{staticClass:"title-icon",attrs:{name:"hash"}}),t._v(" Fitapp ")],1)])]),s("div",[s("div",{staticClass:"title-wrapper"},[s("div",{staticClass:"title-desc"},[s("div",{staticClass:"links-demo"},[s("a",{staticClass:"a",attrs:{href:"https://github.com/msojka96/inf_exp/tree/master/fitApp"}},[s("v-icon",{staticClass:"link-demo",attrs:{name:"code"}}),t._v(" KOD ")],1),s("a",{staticClass:"a",attrs:{href:"https://msojka96.github.io/fitapp/"}},[s("v-icon",{staticClass:"link-demo",attrs:{name:"chrome"}}),t._v(" DEMO ")],1)])])]),t._m(2)])])])])},st=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"name"},[s("div",{staticClass:"title proj-title"},[t._v(" Portfolio ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pro-wrapper"},[s("div",{staticClass:"pro-desc"},[t._v("Aplikacja umożliwia sprawdzanie odległości między stacjami SKM. Pomysł narodził się z potrzeby własnej. W pewnym momencie zacząłem potrzebować znać odległości między stacjami SKM do kupowania biletów. "),s("br"),s("br"),s("div",{staticClass:"techs"},[s("div",{staticClass:"tech"},[s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-react"}),s("div",{staticClass:"tech_name"},[t._v(" React & Redux ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-node-js"}),s("div",{staticClass:"tech_name"},[t._v(" Node & Express ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-html5"}),s("div",{staticClass:"tech_name"},[t._v(" Html ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-css3"}),s("div",{staticClass:"tech_name"},[t._v(" Css ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fas fa-server"}),s("div",{staticClass:"tech_name"},[t._v(" Heroku ")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"pro-wrapper"},[s("div",{staticClass:"pro-desc"},[t._v("Inteligenty dzienniczek kaloryczny. Po autoryzacji użytkownika oraz wprowadzeniu danych metrycznych możemy zapisywać zjedzone posiłki, aktywność i z nich generować inteligentne raporty żywieniowe. "),s("br"),s("br"),s("div",{staticClass:"techs"},[s("div",{staticClass:"tech"},[s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-react"}),s("div",{staticClass:"tech_name"},[t._v(" React & Redux ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-less"}),s("div",{staticClass:"tech_name"},[t._v(" React & Redux ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-html5"}),s("div",{staticClass:"tech_name"},[t._v(" React & Redux ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fas fa-database"}),s("div",{staticClass:"tech_name"},[t._v(" Mongo ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fab fa-node-js"}),s("div",{staticClass:"tech_name"},[t._v(" Node ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fas fa-lock"}),s("div",{staticClass:"tech_name"},[t._v(" Passport Js ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fas fa-server"}),s("div",{staticClass:"tech_name"},[t._v(" Heroku ")])]),s("div",{staticClass:"technology"},[s("i",{staticClass:"fas fa-at"}),s("div",{staticClass:"tech_name"},[t._v(" Node mailer ")])])])])])])}],et={name:"Portfolio"},it=et,nt=(s("2d43"),Object(_["a"])(it,at,st,!1,null,null,null)),ct=nt.exports,ot=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about",attrs:{id:"contact"}},[t._m(0),s("div",{staticClass:"description contact"},[s("div",{staticClass:"mailing"},[s("div",{staticClass:"mail-item"},[s("v-icon",{staticClass:"mail-icon",attrs:{name:"mail"}}),s("div",{staticClass:"mail"},[t._v("mikolaj.sojka@gmail.com")])],1),s("div",{staticClass:"mail-item"},[s("v-icon",{staticClass:"mail-icon",attrs:{name:"map-pin"}}),s("div",{staticClass:"mail"},[t._v("Trójmiasto")])],1)]),s("div",{staticClass:"mailing"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{name:"email",type:"text",placeholder:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{name:"name",type:"text",placeholder:"imię"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"input",attrs:{name:"message",type:"text",placeholder:"wiadomość"},domProps:{value:t.message},on:{input:function(a){a.target.composing||(t.message=a.target.value)}}}),t._v(" "),s("div",{staticClass:"button1",on:{click:t.sendMail}},[t._v("Wyślij")])])])])},lt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"name"},[s("div",{staticClass:"title"},[t._v(" Kontakt ")])])}],rt=(s("99af"),s("b0c0"),{name:"Contact",data:function(){return{email:"",name:"",message:""}},methods:{sendMail:function(){window.open("mailto:mikolaj.sojka@gmail.com?subject=Mail z formularza kontaktowego portfolio: ".concat(this.name,"&body=").concat(this.message,"\n            %0D%0A Kontakt: ").concat(this.email))}}}),ut=rt,dt=(s("a93b"),Object(_["a"])(ut,ot,lt,!1,null,null,null)),mt=dt.exports,vt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header footer",attrs:{id:"footer"}},[s("div",{staticClass:"copyright"},[t._v("©2020 Mikołaj Sojka")]),s("div",{staticClass:"links-footer"},[s("a",{staticClass:"b",attrs:{href:"https://github.com/msojka96"}},[s("v-icon",{attrs:{name:"github"}})],1),s("a",{staticClass:"b",attrs:{href:"https://www.linkedin.com/in/mikołaj-sojka-7b4680a0/"}},[s("v-icon",{attrs:{name:"linkedin"}})],1)])])},_t=[],ft={name:"Footer"},pt=ft,ht=(s("6cc8"),Object(_["a"])(pt,vt,_t,!1,null,null,null)),Ct=ht.exports,bt={name:"App",components:{Footer:Ct,Contact:mt,Page:U,About:tt,Projects:ct}},gt=bt,kt=(s("2662"),Object(_["a"])(gt,i,n,!1,null,null,null)),wt=kt.exports,jt=s("3459");e["a"].use(jt["a"],"v-icon"),e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(wt)}}).$mount("#app")},6450:function(t,a,s){"use strict";var e=s("7a39"),i=s.n(e);i.a},"6cc8":function(t,a,s){"use strict";var e=s("81b9"),i=s.n(e);i.a},7679:function(t,a,s){"use strict";var e=s("ac9b"),i=s.n(e);i.a},"7a39":function(t,a,s){},"81b9":function(t,a,s){},"8c7f":function(t,a,s){"use strict";var e=s("1abc"),i=s.n(e);i.a},"8e81":function(t,a,s){"use strict";var e=s("2ab0"),i=s.n(e);i.a},a04f:function(t,a,s){},a93b:function(t,a,s){"use strict";var e=s("a04f"),i=s.n(e);i.a},ac9b:function(t,a,s){},b9ab:function(t,a,s){},c5ce:function(t,a,s){"use strict";var e=s("f0b0"),i=s.n(e);i.a},ccfb:function(t,a,s){"use strict";var e=s("3cee"),i=s.n(e);i.a},f0b0:function(t,a,s){},f5ad:function(t,a,s){},f78d:function(t,a,s){"use strict";var e=s("342b"),i=s.n(e);i.a},fdf7:function(t,a,s){"use strict";var e=s("b9ab"),i=s.n(e);i.a}});
//# sourceMappingURL=app.0beeba91.js.map