(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(36),o=a.n(s),c=(a(47),a(3)),r=a(1),l=a(4),m=a(5),p=a(6);a(48);var d=function(){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"navbar"},i.a.createElement("a",{href:"#A2"},"Miko\u0142aj Sojka")),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"nav"},i.a.createElement("a",{href:"#A1"},"Projekty")),i.a.createElement("div",{className:"nav"},i.a.createElement("a",{href:"#A3"},"Kontakt"))))},u=(a(49),a(50),a(19)),h=a.n(u),E=a(9),y=a.n(E),k=(a(13),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={list:"",presentation:"",mouseover:1,style:"",clicked:0},a.onMouseOver=function(e){window.innerWidth>900&&(document.getElementById("pres".concat(a.props.id)).style.display="none",document.getElementById("desc".concat(a.props.id)).style.display="block")},a.onClick=function(e){window.innerWidth<=900&&(0===a.state.clicked&&(document.getElementById("pres".concat(a.props.id)).style.display="none",document.getElementById("desc".concat(a.props.id)).style.display="block",a.setState({clicked:1})),1===a.state.clicked&&(document.getElementById("pres".concat(a.props.id)).style.display="flex",document.getElementById("desc".concat(a.props.id)).style.display="none",a.setState({clicked:0})))},a.onMouseOut=function(){window.innerWidth>900&&(document.getElementById("pres".concat(a.props.id)).style.display="flex",document.getElementById("desc".concat(a.props.id)).style.display="none")},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"updateSize",value:function(){document.getElementById("pres".concat(this.props.id)).style.display="flex",document.getElementById("desc".concat(this.props.id)).style.display="none"}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.updateSize.bind(this)),void 0===this.props.demo&&(console.log(this.props.demo),this.setState({style:"none"}));try{var t="<div class='div-ul'>";this.props.technology.map((function(a){return t+="<div class='div-li".concat(e.props.type,"'>").concat(a,"</div>"),0})),t+="</div>",this.setState({list:t}),"iframe"===this.props.presentation&&(t="<iframe\n            id=".concat(this.props.alt,'\n            type="text/html"\n            width="100%"\n            height="100%"\n            src=').concat(this.props.src,'\n            allowfullscreen="allowfullscreen"\n            mozallowfullscreen="mozallowfullscreen" \n            msallowfullscreen="msallowfullscreen" \n            oallowfullscreen="oallowfullscreen" \n            webkitallowfullscreen="webkitallowfullscreen"\n            frameborder="0"\n          />'),this.setState({presentation:t})),"image"===this.props.presentation&&(t="<img\n      src=".concat(this.props.src,"\n      id=").concat(this.props.id,"\n      alt=").concat(this.props.alt,"\n    />"),this.setState({presentation:t}))}catch(a){}}},{key:"renderDemo",value:function(){if(!this.state.style)return i.a.createElement("a",{href:this.props.demo},i.a.createElement("div",{id:"demo",className:"link ".concat(this.state.style," ").concat("l-"+this.props.type)},"Demo"))}},{key:"render",value:function(){return y.a.init(),i.a.createElement("div",{className:"project",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut,onClick:this.onClick},i.a.createElement("div",{className:"presentation",id:"pres"+this.props.id},h()(this.state.presentation)),i.a.createElement("div",{className:"description ".concat("t-"+this.props.type),id:"desc"+this.props.id},i.a.createElement("div",{className:"pro-title ".concat("tit-"+this.props.type)},this.props.title),i.a.createElement("div",{className:"links"},i.a.createElement("a",{href:this.props.href},i.a.createElement("div",{className:"first link ".concat("under"+this.props.type," ").concat("l-"+this.props.type)},"Github")),this.renderDemo()),i.a.createElement("div",{className:"pro-desc"},i.a.createElement("b",null,this.props.description)),h()(this.state.list)))}}]),t}(i.a.Component)),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){y.a.init()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"projects last",id:"A1"},i.a.createElement("div",{className:"title-p"},i.a.createElement("p",null,i.a.createElement("b",{className:"p"},"Projekty:"))),i.a.createElement("div",{id:"pros"},i.a.createElement(k,{technology:["HTML","CSS","REACT JS oraz REDUX","NODE JS - BACKEND (w\u0142asny serwer z danymi)"],type:"1",title:"Skm",description:"Aplikacja pozwala sprawdza\u0107 odleg\u0142o\u015bci mi\u0119dzy stacjami SKM.",image:"./7.png",alt:"skm",id:"skm",presentation:"image",src:"./7.png",href:"https://github.com/msojka96/inf_exp/tree/master/skm",demo:"https://msojka96.github.io/skm"}),i.a.createElement(k,{technology:["HTML","CSS/LESS","MONGO DB","NODE JS (BACKEND - w\u0142asny serwer)","REACT JS oraz REDUX","LOGOWANIE","REJESTRACJA"],type:"1",title:"FIT APP",description:"Dzienniczek kaloryczny online.",image:"./4.png",alt:"fitapp",id:"fitapp",presentation:"image",src:"./4.png",href:"https://github.com/msojka96/inf_exp/tree/master/fitApp",demo:"https://msojka96.github.io/fitapp"}),i.a.createElement(k,{technology:["HTML","CSS/LESS","VUE oraz VUEX","NODE JS (BACKEND - w\u0142asny serwer)","SOCKET IO","MONGO DB","LOGIN: administrator","HAS\u0141O: admin"],type:"1",title:"Konkurs pi\u0119kno\u015bci koni Arabskich",description:"Panel s\u0119dziowski do konkursu pi\u0119kno\u015bci dla koni.",image:"./2.png",alt:"konie arabskie",id:"horses",presentation:"image",src:"./2.png",href:"https://github.com/msojka96/inf_exp/tree/master/project-horses",demo:"https://msojka96.github.io/horses"}))),i.a.createElement("div",{className:"projects projects-2 last"},i.a.createElement(k,{technology:["HTML","CSS","REACT JS oraz REDUX","GOOGLE CUSTOM SEARCH API","SEMANTIC UI"],type:"2",title:"Wyszukiwarka",description:"Wyszukiwarka zapyta\u0144 z serwisu Wikipedia.",image:"./3.png",alt:"wyszukiwarka",id:"searcher",presentation:"image",src:"./3.png",href:"https://github.com/msojka96/inf_exp/tree/master/searcher",demo:"https://msojka96.github.io/searcher"}),i.a.createElement(k,{technology:["HTML","CSS/LESS","REACT JS oraz REDUX"],type:"2",title:"Generator CV",description:"Aplikacja zosta\u0142a stworzona w oparciu o moje potrzeby tworzenia CV bez u\u017cywania programu Word.",image:"./8.png",alt:"cv",id:"cv",presentation:"image",src:"./8.png",href:"https://github.com/msojka96/inf_exp/tree/master/cv",demo:"https://msojka96.github.io/cv"})),i.a.createElement("div",{className:"projects last"},i.a.createElement(k,{technology:["HTML","CSS/LESS","BOOTSTRAP","GOOGLE MAPS API"],type:"1",title:"Strona domki Rewa",description:"Niedoko\u0144czone zlecenie strony promuj\u0105cej wynajem domk\xf3w na Rewie.",image:"./1.png",alt:"domki rewa",id:"domki",presentation:"image",src:"./1.png",href:"https://github.com/msojka96/msojka96.github.io/tree/master/strona_domki",demo:"https://msojka96.github.io/strona_domki"})))}}]),t}(i.a.Component),f=(a(94),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){y.a.init()}},{key:"render",value:function(){return i.a.createElement("div",{className:"about",id:"A2"},i.a.createElement("div",{id:"box-1",className:"box"},i.a.createElement("div",{id:"about",className:"about-photo"},i.a.createElement("img",{src:"me.jpg",id:"me",alt:"me"})),i.a.createElement("div",{id:"life",className:"desc"},i.a.createElement("div",{className:"desc-text"},i.a.createElement("p",null,i.a.createElement("b",null,"O mnie :")),"Mam 22 lata. Uko\u0144czy\u0142em kierunek licencjacki: ",i.a.createElement("b",null,"informatyka")," ","na wydziale MFI na Uniwesytecie Gda\u0144skim ze specjalizacj\u0105:"," ",i.a.createElement("b",null,"aplikacje internetowe i bazy danych"),". Interesuj\u0119 si\u0119 napraw\u0105 urz\u0105dze\u0144 elektronicznych , jazd\u0105 wyczynow\u0105 na rolkach, jazd\u0105 wyczynow\u0105 na \u0142y\u017cwach, sportem oraz s\u0142uchaniem muzyki. Dodatkow\u0105 przyjemno\u015b\u0107 sprawia mi tworzenie aplikacji internetowych."))),i.a.createElement("div",{id:"box-2",className:"box"},i.a.createElement("div",{id:"skills",className:"desc"},i.a.createElement("p",null,i.a.createElement("b",null,"Umiej\u0119tno\u015bci :")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("b",null,"Javascript"),", wraz z Dom Api, Jquery oraz Ajax."),i.a.createElement("li",null,"ReactJS, wraz z Redux oraz Vue, wraz z Vuex."),i.a.createElement("li",null,"Html, CSS, Less, Sass."),i.a.createElement("li",null,"ExpressJS, pisanie w\u0142asnych serwer\xf3w."),i.a.createElement("li",null,"Znajomo\u015b\u0107 systemu Linux oraz Git."),i.a.createElement("li",null,"Bieg\u0142a obs\u0142uga program\xf3w: Excel oraz Word."),i.a.createElement("li",null,"Dodatkowo podczas studiowania mia\u0142em kontakt z j\u0119zykami: C, Java, C++, Ruby, Assembler, C#, batch, SQL, PostgreSQL."))),i.a.createElement("div",{id:"about",className:"about-photo"},i.a.createElement("img",{src:"me1.jpg",id:"me1",alt:"me1"}))),i.a.createElement("div",{id:"box-3",className:"box"},i.a.createElement("div",{id:"about",className:"about-photo"},i.a.createElement("img",{src:"me2.jpg",id:"me2",alt:"me2"})),i.a.createElement("div",{className:"desc"},i.a.createElement("p",null,i.a.createElement("b",null,"UWAGA!: ")),i.a.createElement("p",null,"Poni\u017cej znajduj\u0105 si\u0119 wybrane przeze mnie projekty wraz z przekierowaniami do ich repozytori\xf3w. Tworz\u0105c moje prywatne projekty staram si\u0119 u\u017cywa\u0107 w\u0142asnych umiej\u0119tno\u015bci CSS/LESS/SASS."))))}}]),t}(i.a.Component)),b=(a(95),a(39)),j=a.n(b),g=a(40),v=a.n(g),S=a(37),z=a.n(S),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"about",id:"A3"},i.a.createElement("p",{id:"contact"},i.a.createElement("b",null,"Kontakt:")),i.a.createElement("div",{className:"ainfo"},i.a.createElement(z.a,{className:"icons"})," \xa0"," ",i.a.createElement("a",{id:"github",href:"https://github.com/msojka96/"},"github")),i.a.createElement("div",{className:"ainfo"},i.a.createElement(j.a,{className:"icons"})," \xa0 690-819-235"),i.a.createElement("div",{className:"ainfo"},i.a.createElement(v.a,{className:"icons"})," \xa0 mikolaj.sojka@gmail.com"))}}]),t}(i.a.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={classname:"start"},a.handleClick=function(e){window.scrollTo(0,0)},a.handleScroll=function(){0!==window.scrollY?a.setState({classname:"update"}):a.setState({classname:"start"})},a.render=function(){return i.a.createElement("div",{className:"app"},i.a.createElement(d,null),i.a.createElement(f,null),i.a.createElement(w,{direction:"fade-down"}),i.a.createElement(O,{direction:"fade-down"}),i.a.createElement("div",{id:"button_top",className:a.state.classname,onClick:a.handleClick,color:"error"}),i.a.createElement("a",{href:"https://jigsaw.w3.org/css-validator/check/referer"},i.a.createElement("img",{id:"w3c",src:"https://jigsaw.w3.org/css-validator/images/vcss",alt:"Poprawny CSS!"})),i.a.createElement("footer",null,"\xa9 Copyright Miko\u0142aj Sojka"))},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,!0)}}]),t}(i.a.Component);o.a.render(i.a.createElement(N,null),document.getElementById("root"))},42:function(e,t,a){e.exports=a(102)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},75:function(e,t){},94:function(e,t,a){},95:function(e,t,a){}},[[42,1,2]]]);
//# sourceMappingURL=main.ebfed387.chunk.js.map