(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t){},118:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=n(46),s=n(3),u=n(6),l=n(11),d=n(12),p=n(14),h=n(13),f=n(15),m=n(8),v=n.n(m),E=n(20),y=n(21),C=n.n(y);C.a.defaults.headers["Content-Type"]="application/json";var b=C.a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://still-sea-30153.herokuapp.com/"}),j=n(48),O=n.n(j),g=(n(118),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={selectedFrom:"",To:"",distance:""},n.fetch=function(){var e="";try{return e='<option value="" />',n.props.cities.state.forEach((function(t,n){e+="<option value=".concat(n,">").concat(t,"</option>")})),O()(e)}catch(t){}},n.onChangeFrom=function(e){n.setState({selectedFrom:e.target.value})},n.onChangeTo=function(e){n.setState({selectedTo:e.target.value})},n.onClick=function(){document.getElementById("distance").innerHTML="",n.props.checkDistance(n.state.selectedFrom,n.state.selectedTo)},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){void 0===this.props.distance.state?document.getElementById("distance").innerHTML="":document.getElementById("distance").innerHTML="".concat(JSON.stringify(this.props.distance.state),"km")}},{key:"render",value:function(){return c.a.createElement("div",{className:"Picker"},c.a.createElement("div",{id:"title"},"Czy Ciebie te\u017c irytuje czytanie tej ogromnej tabelki z wykazem odleg\u0142o\u015bci mi\u0119dzy stacjami od SKM?"),c.a.createElement("div",{id:"main"},"Od:",c.a.createElement("div",{id:"from"},c.a.createElement("select",{onChange:this.onChangeFrom},this.fetch())),"Do:",c.a.createElement("div",{id:"to"},c.a.createElement("select",{onChange:this.onChangeTo},this.fetch())),c.a.createElement("div",{id:"distance"})),c.a.createElement("div",{id:"submit"},c.a.createElement("div",{id:"button",onClick:this.onClick},"Sprawd\u017a")),c.a.createElement("footer",null,"\xa9 Copyright Miko\u0142aj Sojka"))}}]),t}(c.a.Component)),k=Object(u.b)((function(e){return{cities:e.cities,distance:e.distance}}),{checkDistance:function(e,t){return function(){var n=Object(E.a)(v.a.mark((function n(a){var c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.get("/distance/".concat(e,"/").concat(t));case 2:c=n.sent,a({type:"CHECK_DISTANCE",payload:c.data});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(g),T=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).componentDidMount=function(){n.props.fetchCities()},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null))}}]),t}(c.a.Component),w=Object(u.b)(null,{fetchCities:function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/cities");case 2:n=e.sent,t({type:"FETCH_CITIES",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(T),S=Object(s.c)({cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CITIES":return{state:t.payload};default:return e}},distance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DISTANCE":return{state:t.payload};default:return e}}}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,I=Object(s.e)(S,_(Object(s.a)(o.a)));i.a.render(c.a.createElement(u.a,{store:I},c.a.createElement(w,null)),document.querySelector("#root"))},49:function(e,t,n){e.exports=n(119)}},[[49,1,2]]]);
//# sourceMappingURL=main.ea647aa7.chunk.js.map