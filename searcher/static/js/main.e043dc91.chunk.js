(this.webpackJsonpsearcher=this.webpackJsonpsearcher||[]).push([[0],{29:function(e,t,a){e.exports=a(60)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),s=a.n(r),l=a(25),i=a(3),o=a(8),u=a(5),d=a(6),m=a(9),p=a(7),h=a(10),f=a(15),y=a.n(f),v=a(27),E=a(28),b=a.n(E).a.create({baseURL:"https://www.googleapis.com/customsearch"}),g=(a(57),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).handleKey=function(e){"Enter"===e.key&&(e.preventDefault(),e.target.value&&(a.props.Search(e.target.value),a.props.SearchGoogle(e.target.value)))},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"searchbar",className:"ui left icon input "},c.a.createElement("input",{type:"text",onKeyDown:this.handleKey,placeholder:"Szukaj..."}),c.a.createElement("i",{className:"search icon"}))}}]),t}(c.a.Component)),O=Object(o.b)((function(e){return{search:e.search}}),{Search:function(e){return{type:"SEARCH",payload:e}},SearchGoogle:function(e){return function(){var t=Object(v.a)(y.a.mark((function t(a){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("v1?key=AIzaSyDJgWH1lZGbIzbs1oqxqQ_cTQNg_myOMOs&cx=012857046315408621809:4wqnt24ljce&q=".concat(e));case 2:n=t.sent,a({type:"FETCH_SEARCH",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(g),j=(a(58),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={clicked:0},a.fillPhoto=function(){try{var e=a.props.searchresult.state.items[a.state.clicked].pagemap.cse_thumbnail[0].src;return c.a.createElement("img",{alt:"imgm",id:"imgm",src:e})}catch(t){return c.a.createElement("img",{alt:"imgm",id:"imgm",src:"./7.jpg"})}},a.fillResults=function(){try{return document.getElementById("next").style.display="flex",document.getElementById("prev").style.display="flex",document.getElementById("or").style.display="flex",c.a.createElement("div",{id:"result"},c.a.createElement("div",{id:"card",className:"ui card"},c.a.createElement("div",{className:"image",id:"photo"},a.fillPhoto()),c.a.createElement("div",{className:"content"},c.a.createElement("a",{href:a.props.searchresult.state.items[a.state.clicked].formattedUrl,className:"header"},a.props.searchresult.state.items[a.state.clicked].title),c.a.createElement("div",{className:"description"},a.props.searchresult.state.items[a.state.clicked].snippet))))}catch(e){return""}},a.next=function(){try{a.state.clicked+1<a.props.searchresult.state.items.length&&a.setState({clicked:a.state.clicked+1})}catch(e){}},a.prev=function(){try{a.state.clicked-1>=0&&a.setState({clicked:a.state.clicked-1})}catch(e){}},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"result"},c.a.createElement("div",{id:"buttons"},c.a.createElement("div",{className:"ui buttons",id:"uibuttons"},c.a.createElement("button",{className:"ui button",id:"prev",onClick:this.prev},"poprzedni"),c.a.createElement("div",{className:"or",id:"or"}),c.a.createElement("button",{className:"ui positive button",id:"next",onClick:this.next},"nast\u0119pny"))),this.fillResults())}}]),t}(c.a.Component)),k=Object(o.b)((function(e){return{searchresult:e.searchresult}}),{})(j),S=(a(59),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,null),c.a.createElement(k,null),c.a.createElement("footer",null,"\xa9Miko\u0142aj Sojka"))}}]),t}(c.a.Component)),N=Object(i.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return{state:t.payload};default:return e}},searchresult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SEARCH":return{state:t.payload};default:return e}}}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,x=Object(i.e)(N,w(Object(i.a)(l.a)));s.a.render(c.a.createElement(o.a,{store:x},c.a.createElement(S,null)),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e043dc91.chunk.js.map