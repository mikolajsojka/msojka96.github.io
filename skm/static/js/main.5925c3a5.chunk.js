(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t){},118:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(11),r=n.n(o),i=n(46),s=n(3),l=n(7),d=n(12),u=n(13),m=n(15),p=n(14),y=n(16),h=n(4),f=n.n(h),E=n(9),v=n(21),b=n.n(v);b.a.defaults.headers["Content-Type"]="application/json";var g=b.a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://still-sea-30153.herokuapp.com/"}),C=n(48),O=n.n(C),j=(n(118),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={selectedFrom:"",To:"",distance:""},n.renderMy=function(){void 0===n.props.distance.state?document.getElementById("distance").innerHTML="":document.getElementById("distance").innerHTML="".concat(JSON.stringify(n.props.distance.state),"km")},n.fetch=function(){var e="";try{return e='<option value="" />',n.props.cities.state.forEach((function(t,n){e+="<option value=".concat(n,">").concat(t,"</option>")})),document.getElementById("loader").style.display="none",document.getElementById("sec").style.display="block",O()(e)}catch(t){}},n.enableButton=function(){""!==document.getElementById("from").value&&""!==document.getElementById("to").value?document.getElementById("button").disabled=!1:document.getElementById("button").disabled=!0},n.onChangeFrom=function(e){n.setState({selectedFrom:e.target.value})},n.onChangeTo=function(e){n.setState({selectedTo:e.target.value})},n.onClick=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("loader").style.display="block",document.getElementById("sec").style.display="none",document.getElementById("distance").innerHTML="",e.next=5,n.props.checkDistance(n.state.selectedFrom,n.state.selectedTo);case 5:document.getElementById("loader").style.display="none",document.getElementById("sec").style.display="block";case 7:case"end":return e.stop()}}),e)}))),n}return Object(y.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){this.renderMy(),this.enableButton()}},{key:"componentDidMount",value:function(){this.renderMy()}},{key:"render",value:function(){return c.a.createElement("div",{className:"Picker"},c.a.createElement("div",{className:"ui active inverted dimmer",id:"loader"},c.a.createElement("div",{className:"ui text loader"},"\u0141adowanie...")),c.a.createElement("div",{id:"sec"},c.a.createElement("div",{className:"ui secondary  menu",id:"menu"},c.a.createElement("div",{className:"right menu"},c.a.createElement("div",{className:"ui item"},c.a.createElement("i",{className:"map icon"}),c.a.createElement("b",null,"SKM")))),c.a.createElement("div",{className:"ui segment",id:"body"},c.a.createElement("p",null,"Czy Ciebie te\u017c irytuje czytanie tej ogromnej tabelki z wykazem odleg\u0142o\u015bci mi\u0119dzy stacjami od SKM?"),c.a.createElement("div",{id:"selecting"},c.a.createElement("select",{className:"ui dropdown",id:"from",onChange:this.onChangeFrom},this.fetch(),">"),c.a.createElement("select",{className:"ui dropdown",id:"to",onChange:this.onChangeTo},this.fetch())),c.a.createElement("div",{id:"distance"}),c.a.createElement("button",{className:"ui secondary button",id:"button",onClick:this.onClick},"Sprawd\u017a"))))}}]),t}(c.a.Component)),k=Object(l.b)((function(e){return{cities:e.cities,distance:e.distance}}),{checkDistance:function(e,t){return function(){var n=Object(E.a)(f.a.mark((function n(a){var c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("/distance/".concat(e,"/").concat(t));case 2:c=n.sent,a({type:"CHECK_DISTANCE",payload:c.data});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(j),w=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).componentDidMount=function(){n.props.fetchCities()},n}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null))}}]),t}(c.a.Component),I=Object(l.b)(null,{fetchCities:function(){return function(){var e=Object(E.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/cities");case 2:n=e.sent,t({type:"FETCH_CITIES",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(w),N=Object(s.c)({cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CITIES":return{state:t.payload};default:return e}},distance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DISTANCE":return{state:t.payload};default:return e}}}),T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,B=Object(s.e)(N,T(Object(s.a)(i.a)));r.a.render(c.a.createElement(l.a,{store:B},c.a.createElement(I,null)),document.querySelector("#root"))},49:function(e,t,n){e.exports=n(119)}},[[49,1,2]]]);
//# sourceMappingURL=main.5925c3a5.chunk.js.map