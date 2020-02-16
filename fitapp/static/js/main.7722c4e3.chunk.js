(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,t,a){e.exports=a(380)},380:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),i=a(15),o=a(33),s=a(19),u=a(16),m=a(18),p=a(95),d=a(10),b=a(27),f=a(5),E=a(7),v=a.n(E),g=a(26),h=a(175),y=a.n(h).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://safe-retreat-01562.herokuapp.com"}),S=a(25),O=Object(S.b)(),I=function(){document.getElementById("All").style.display="block",document.getElementById("loader").style.display="none"},k=function(){document.getElementById("All").style.display="none",document.getElementById("loader").style.display="block"},j=function(){return function(){var e=Object(g.a)(v.a.mark(function e(t,a){var n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a().user.isSigned){e.next=9;break}return n={id:a().user.user.userId},k(),e.next=5,y.post("/meals",{id:n,token:a().user.token});case 5:r=e.sent,I(),localStorage.setItem("meals",JSON.stringify(r.data)),t({type:"GET_MEALS",payload:r.data});case 9:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},w=function(){return function(){var e=Object(g.a)(v.a.mark(function e(t,a){var n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a().user.isSigned){e.next=9;break}return n={id:a().user.user.userId},k(),e.next=5,y.post("/activities",{id:n,token:a().user.token});case 5:r=e.sent,I(),localStorage.setItem("activities",JSON.stringify(r.data)),t({type:"GET_ACTIVITIES",payload:r.data});case 9:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(g.a)(v.a.mark(function t(a,n){var r,c,l,i;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n().user.isSigned){t.next=12;break}return r={_id:n().user.user.userId},k(),t.next=5,y.post("/users/bmr",Object(f.a)({},e,{_id:r,token:n().user.token}));case 5:c=t.sent,I(),l=JSON.parse(localStorage.getItem("user")),i={id:l.userId,height:c.data.height,weight:c.data.weight,activity:c.data.activity,sex:c.data.sex,age:c.data.age,bmr:c.data.bmr},localStorage.setItem("bmr",JSON.stringify(i)),a({type:"BMR",payload:i}),O.push("/");case 12:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},A=(a(232),a(101),a(58)),C=a(51),T=a.n(C),x=a(59),_=a.n(x);T.a.locale("en"),_()();var R=function(e){var t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return t<10?a<10?n+"-0"+a+"-0"+t:n+"-"+a+"-0"+t:a<10?t<10?n+"-0"+a+"-0"+t:n+"-0"+a+"-"+t:n+"-"+a+"-"+t},M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={date:R(new Date),meals:null,activities:null,bmr:null,countermeals:{},counteractivities:{}},a.renderAvg=function(){try{if(null!==a.props.bmr.bmr.bmr){var e=0,t=0,n=0;try{t=a.state.countermeals.gcounter}catch(i){}try{n=a.state.counteractivities.gcounter}catch(i){}try{e=a.state.countermeals.days}catch(i){}var c=(t-n)/e,l="";return l=R(new Date)!==a.state.date?"".concat(a.state.date,"/").concat(R(new Date)):"dzisiaj",r.a.createElement("div",{className:"data"},r.a.createElement("table",{className:"ui celled table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u015aredni bilans dzienny: ",l))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,isNaN(String(c))?"0":String(c)," kcal")))))}}catch(i){}},a.onDateChange=function(e){a.setState({date:R(e)}),a.props.getCounterMeals(R(e)),a.props.getCounterActivities(R(e))},a.renderItems=function(e,t,n,r){var c=0;try{var l=e.map(function(e){if(String(e.date)===String(a.state.date))return c+=parseInt(e.kcal),e});if(0!==(l=l.filter(function(e){return void 0!==e})).length)return a.renderTable(l,t,c,n)}catch(i){}},a.onElementClick=function(e,t){a.props.deleteItem(e,t)},a.renderTable=function(e,t,n,c){var l=e.map(function(e){try{return r.a.createElement("tr",{key:e._id,onClick:a.onElementClick.bind(Object(p.a)(a),e,c)},r.a.createElement("th",null,e.name),r.a.createElement("td",null,e.kcal," kcal"),r.a.createElement("td",null,e.description))}catch(t){return""}});return r.a.createElement("div",{className:"data"},r.a.createElement("table",{className:"ui celled striped  table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,c))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,n," kcal")))),r.a.createElement("br",null),r.a.createElement("table",{className:"ui celled table meals"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,t),r.a.createElement("th",null))),r.a.createElement("tbody",null,l)))},a.renderBMR=function(){try{if(null!==a.props.bmr.bmr.bmr)return r.a.createElement("div",{className:"data"},r.a.createElement("table",{className:"ui celled table bilance"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"BMR"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,a.renderbmr()))))}catch(e){}},a.renderbmr=function(){if(null!==a.props.bmr.bmr.bmr)return r.a.createElement("td",null,a.props.bmr.bmr.bmr)},a.render=function(){return a.props.user.isSigned?r.a.createElement("div",{className:"main"},r.a.createElement("div",{id:"my-buttons"},r.a.createElement(b.b,{to:"/addmeal",className:"ui button"},"Dodaj posi\u0142ek"),r.a.createElement(b.b,{to:"/addactivity",className:"ui button"},"Dodaj aktywno\u015b\u0107")),r.a.createElement("div",{id:"raport"},a.renderBMR(),r.a.createElement("br",null),a.onDateSelected(),r.a.createElement("br",null),a.renderAvg(),r.a.createElement("br",null),a.renderItems(a.state.meals,"Posi\u0142ki","Zjedzone Kalorie:","meals"),r.a.createElement("br",null),a.renderItems(a.state.activities,"Aktywno\u015bci","Spalone Kalorie:","activities"))):(O.push("/login"),r.a.createElement("div",null,"Niezalogowany"))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){try{this.setState({bmr:this.props.bmr.bmr.bmr})}catch(e){}try{this.setState({counteractivities:this.props.counterActivities.counteractivities})}catch(e){}try{this.setState({countermeals:this.props.counterMeals.countermeals})}catch(e){}this.props.getMeals(),this.props.getActivities(),this.props.getCounterMeals(this.state.date),this.props.getCounterActivities(this.state.date)}},{key:"componentWillReceiveProps",value:function(e){if(e.meals!==this.props.meals)try{this.setState({meals:e.meals[0].items})}catch(t){}if(e.activities!==this.props.activities)try{this.setState({activities:e.activities[0].items})}catch(t){}if(e.counterMeals!==this.props.counterMeals)try{this.setState({countermeals:e.counterMeals.countermeals})}catch(t){}if(e.counterActivities!==this.props.counterActivities)try{this.setState({counteractivities:e.counterActivities.counteractivities})}catch(t){}}},{key:"onDateSelected",value:function(){return r.a.createElement(A.DateTimePicker,{value:new Date(this.state.date),selected:new Date(this.state.date),time:!1,onChange:this.onDateChange})}}]),t}(r.a.Component),D=Object(d.b)(function(e){return{user:e.user,meals:Object.values(e.meals),activities:Object.values(e.activities),bmr:e.bmr,counterMeals:e.countermeals,counterActivities:e.counteractivities}},{getMeals:j,getActivities:w,clearActivities:function(){return localStorage.setItem("activities",null),{type:"CLEAR_ACTIVITIES",payload:null}},clearMeals:function(){return localStorage.setItem("meals",null),{type:"CLEAR_MEALS",payload:null}},refreshMeals:function(){return O.push("/"),{type:"REFRESH_MEALS"}},getCounterMeals:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(a,n){var r,c;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n().user.isSigned){t.next=9;break}return r={id:n().user.user.userId},k(),t.next=5,y.post("/meals/getCounter",{id:r,date:e,token:n().user.token});case 5:c=t.sent,I(),localStorage.setItem("countermeals",JSON.stringify({counter:c.data.counter,gcounter:c.data.gcounter,days:c.data.days,name:"countermeals"})),a({type:"GET_COUNTER_MEALS",payload:{counter:c.data.counter,gcounter:c.data.gcounter,days:c.data.days,name:"countermeals"}});case 9:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},getCounterActivities:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(a,n){var r,c;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n().user.isSigned){t.next=9;break}return r={id:n().user.user.userId},k(),t.next=5,y.post("/activities/getCounter",{id:r,date:e,token:n().user.token});case 5:c=t.sent,I(),localStorage.setItem("counteractivities",JSON.stringify({counter:c.data.counter,gcounter:c.data.gcounter,days:c.data.days,name:"counteractivities"})),a({type:"GET_COUNTER_ACTIVITIES",payload:{counter:c.data.counter,gcounter:c.data.gcounter,days:c.data.days,name:"counteractivities"}});case 9:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},deleteItem:function(e,t){return function(){var a=Object(g.a)(v.a.mark(function a(n,r){var c,l,i,o;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!r().user.isSigned){a.next=23;break}if(c={id:e._id},l={id:r().user.user.userId},"Zjedzone Kalorie:"!==t){a.next=13;break}return k(),a.next=7,y.delete("/meals/delete/".concat(c.id,"/").concat(l.id,"/").concat(r().user.token));case 7:I(),(i=JSON.parse(localStorage.getItem("countermeals"))).gcounter=parseInt(i.gcounter)-parseInt(e.kcal),localStorage.setItem("countermeals",JSON.stringify(i)),n({type:"REFRESH_COUNTER_MEALS",payload:i});try{n({type:"DELETE_MEAL",payload:e._id})}catch(s){alert("UPS... Co\u015b posz\u0142o nie tak.."),I()}case 13:if("Spalone Kalorie:"!==t){a.next=23;break}return k(),a.next=17,y.delete("/activities/delete/".concat(c.id,"/").concat(l.id,"/").concat(r().user.token));case 17:I(),(o=JSON.parse(localStorage.getItem("counteractivities"))).gcounter=parseInt(o.gcounter)-parseInt(e.kcal),localStorage.setItem("counteractivities",JSON.stringify(o)),n({type:"REFRESH_COUNTER_ACTIVITIES"}),n({type:"DELETE_ACTIVITY",payload:e._id});case 23:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()}})(M),L=a(170),z=a(171);T.a.locale("en"),_()();var U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={startDate:new Date},a.onSubmit=function(e){a.props.addMeal(e)},a.renderInputDate=function(e){var t=e.input.onChange,a=e.label;e.meta;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement(A.DateTimePicker,{time:!1,onChange:t}))},a.renderInput=function(e){var t=e.input,a=e.label;e.meta;return"kcal"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off",type:"number",required:!0}))):r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})))},a.renderMealType=function(e){var t=e.input,a=e.label;e.meta;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("select",t,r.a.createElement("option",{value:"\u015bniadanie"}),r.a.createElement("option",{value:"\u015bniadanie"},"\u015bniadanie"),r.a.createElement("option",{value:"lunch"},"lunch"),r.a.createElement("option",{value:"obiad"},"obiad"),r.a.createElement("option",{value:"podwieczorek"},"podwieczorek"),r.a.createElement("option",{value:"kolacja"},"kolacja"),r.a.createElement("option",{value:"przek\u0105ska"},"przek\u0105ska")))},a.checkUser=function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:a.props.handleSubmit(a.onSubmit),className:"ui form"},r.a.createElement(L.a,{name:"meal",component:a.renderMealType,label:"Wprowad\u017a posi\u0142ek"}),r.a.createElement(L.a,{name:"kcal",component:a.renderInput,label:"Zjedzone kalorie"}),r.a.createElement(L.a,{name:"date",showTime:!1,component:a.renderInputDate,label:"Wprowad\u017a dat\u0119"}),r.a.createElement(L.a,{name:"description",component:a.renderInput,label:"Wprowad\u017a opis"}),r.a.createElement("button",{className:"ui button"},"Dodaj")))},a.render=function(){return a.props.user.isSigned?r.a.createElement("div",{id:"meals"},a.checkUser()):(O.push("/login"),r.a.createElement("div",null,"Niezalogowany"))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}}]),t}(r.a.Component),J=Object(z.a)({form:"addmeal"})(U),P=Object(d.b)(function(e){return{user:e.user,meals:Object.values(e.meals)}},{addMeal:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(a,n){var r,c,l;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n().user.isSigned){t.next=18;break}return r={id:n().user.user.userId},t.prev=2,k(),t.next=6,y.post("/meals/add",Object(f.a)({},e,{id:r,token:n().user.token}));case 6:c=t.sent,I(),null===(l=JSON.parse(localStorage.getItem("meals")))?localStorage.setItem("meals",JSON.stringify(c.data)):(l.items.push(c.data),localStorage.setItem("meals",JSON.stringify(l))),a({type:"ADD_MEAL",payload:l}),O.push("/"),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),alert("Wyst\u0105pi\u0142 problem z wyborem daty"),I();case 18:case"end":return t.stop()}},t,null,[[2,14]])}));return function(e,a){return t.apply(this,arguments)}}()}})(J),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).onSubmit=function(e){a.props.signUp(e)},a.renderInput=function(e){var t=e.input,a=e.label;e.meta;return"password"===t.name||"password2"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off",type:"password",required:!0}))):"email"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off",type:"email",required:!0}))):r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off",required:!0})))},a.checkUser=function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:a.props.handleSubmit(a.onSubmit),className:"ui form"},r.a.createElement(L.a,{name:"username",component:a.renderInput,label:"Wprowad\u017a login"}),r.a.createElement(L.a,{name:"email",component:a.renderInput,label:"Wprowad\u017a email"}),r.a.createElement(L.a,{name:"name",component:a.renderInput,label:"Wprowad\u017a imi\u0119"}),r.a.createElement(L.a,{name:"password",component:a.renderInput,label:"Wprowad\u017a has\u0142o"}),r.a.createElement(L.a,{name:"password2",component:a.renderInput,label:"Wprowad\u017a has\u0142o ponownie"}),r.a.createElement("button",{className:"ui button"},"Zarejestruj")))},a.render=function(){return a.props.user.isSigned?r.a.createElement("div",{className:"ui red message"},"Zalogowany"):r.a.createElement("div",{id:"register"},a.checkUser())},a}return Object(m.a)(t,e),t}(r.a.Component),G=Object(z.a)({form:"register"})(W),V=Object(d.b)(function(e){return{user:e.user}},{signUp:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return k(),t.next=3,y.post("/users/register",e);case 3:n=t.sent,I(),a({type:"SIGN_UP",payload:n.data}),O.push("/login");case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(G),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).onSubmit=function(e){a.props.signIn(e)},a.renderInput=function(e){var t=e.input,a=e.label;e.meta;return"password"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off",type:"password",required:!0}))):r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off",required:!0})))},a.checkUser=function(){return r.a.createElement("div",{className:"column form-container"},r.a.createElement("form",{onSubmit:a.props.handleSubmit(a.onSubmit),className:"ui form"},r.a.createElement(L.a,{name:"username",component:a.renderInput,label:"Wprowad\u017a login"}),r.a.createElement(L.a,{name:"password",component:a.renderInput,label:"Wprowad\u017a has\u0142o"}),r.a.createElement("button",{className:"ui button"},"Zaloguj"),r.a.createElement(b.b,{className:"ui button",to:"/changepassword"},"Zapomnia\u0142e\u015b has\u0142a?")))},a.render=function(){return r.a.createElement("div",{id:"login"},a.checkUser())},a}return Object(m.a)(t,e),t}(r.a.Component),F=Object(z.a)({form:"login"})(B),Z=Object(d.b)(function(e){return{user:e.user}},{signIn:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(a){var n,r,c;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.setItem("activities",null),localStorage.setItem("meals",null),t.prev=2,k(),t.next=6,y.post("/users/login",e);case 6:n=t.sent,I(),r={userId:n.data.user._id,username:n.data.user.username,email:n.data.user.email},c={id:n.data.user._id,height:n.data.user.height,weight:n.data.user.weight,activity:n.data.user.activity,sex:n.data.user.sex,age:n.data.user.age,bmr:n.data.user.bmr},localStorage.setItem("bmr",JSON.stringify(c)),localStorage.setItem("user",JSON.stringify(r)),localStorage.setItem("token",JSON.stringify(n.data.user.token)),localStorage.setItem("isSigned",!0),a({type:"BMR",payload:c}),a({type:"TOKEN",payload:n.data.user.token}),a({type:"SIGN_IN",payload:r}),O.push("/"),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(2),alert("UPS... Co\u015b posz\u0142o nie tak.."),I();case 24:case"end":return t.stop()}},t,null,[[2,20]])}));return function(e){return t.apply(this,arguments)}}()},getMeals:j,getActivities:w})(F),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).onLogOutClick=function(){a.props.logOut()},a.onLogOff=function(){return r.a.createElement("div",{className:"header-panel"},r.a.createElement("div",{className:"logo"},r.a.createElement("i",{className:" apple icon large"}),r.a.createElement("div",{className:"title"},"FIT APP - Dziennik kaloryczny")),r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(b.b,{to:"/login",className:"item"},"Logowanie"),r.a.createElement(b.b,{to:"/register",className:"item"},"Rejestracja")))},a.onLogIn=function(){return r.a.createElement("div",{className:"header-panel"},r.a.createElement("div",{className:"logo"},r.a.createElement("i",{className:" apple icon large"}),r.a.createElement("div",{className:"title"},"FIT APP - Dziennik kaloryczny")),r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(b.b,{to:"/",className:"item"},"Raport"),r.a.createElement("div",{className:"right menu"},r.a.createElement(b.b,{to:"/bmr",className:"item"},"Bmr"),r.a.createElement(b.b,{to:"/login",className:"item",onClick:a.onLogOutClick},"Wyloguj(",a.props.user.user.username,")"))))},a.checkLogStatus=function(){return a.props.user.isSigned?a.onLogIn():a.onLogOff()},a.render=function(){return r.a.createElement("div",{className:"header"},a.checkLogStatus())},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}}]),t}(r.a.Component),H=Object(d.b)(function(e){return{user:e.user,meals:e.meals,activities:e.activities}},{logOut:function(){return function(){var e=Object(g.a)(v.a.mark(function e(t,a){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.clear(),localStorage.setItem("meals",null),localStorage.setItem("activities",null),!a().user.isSigned){e.next=13;break}return n={id:a().user.user.userId},k(),e.next=8,y.post("/users/logout",{id:n});case 8:I(),localStorage.setItem("user",null),localStorage.setItem("isSigned",!1),t({type:"LOG_OUT"}),O.push("/login");case 13:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}})(q);T.a.locale("en"),_()();var K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={startDate:new Date},a.onSubmit=function(e){a.props.addActivity(e)},a.renderInputDate=function(e){var t=e.input.onChange,a=e.label;e.meta;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement(A.DateTimePicker,{time:!1,onChange:t}))},a.renderInput=function(e){var t=e.input,a=e.label;e.meta;return"kcal"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off",type:"number",required:!0}))):"description"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"}))):r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off",required:!0})))},a.checkUser=function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:a.props.handleSubmit(a.onSubmit),className:"ui form"},r.a.createElement(L.a,{name:"activity",component:a.renderInput,label:"Nazwa aktywno\u015bci"}),r.a.createElement(L.a,{name:"kcal",component:a.renderInput,label:"Spalone kalorie"}),r.a.createElement(L.a,{name:"date",showTime:!1,component:a.renderInputDate,label:"Wprowad\u017a dat\u0119"}),r.a.createElement(L.a,{name:"description",component:a.renderInput,label:"Wprowad\u017a opis"}),r.a.createElement("button",{className:"ui button"},"Zatwierd\u017a")))},a.render=function(){return a.props.user.isSigned?r.a.createElement("div",{id:"bmr"},a.checkUser()):(O.push("/login"),r.a.createElement("div",null,"Niezalogowany"))},a}return Object(m.a)(t,e),t}(r.a.Component),Y=Object(z.a)({form:"addactivity"})(K),Q=Object(d.b)(function(e){return{user:e.user,activities:Object.values(e.activities)}},{addActivity:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(a,n){var r,c,l;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n().user.isSigned){t.next=18;break}return r={id:n().user.user.userId},t.prev=2,k(),t.next=6,y.post("/activities/add",Object(f.a)({},e,{id:r,token:n().user.token}));case 6:c=t.sent,I(),O.push("/"),null===(l=JSON.parse(localStorage.getItem("activities")))?localStorage.setItem("activities",JSON.stringify(c.data)):(l.items.push(c.data),localStorage.setItem("activities",JSON.stringify(l))),a({type:"ADD_ACTIVITY",payload:l}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),alert("Wyst\u0105pi\u0142 problem z wyborem daty"),I();case 18:case"end":return t.stop()}},t,null,[[2,14]])}));return function(e,a){return t.apply(this,arguments)}}()}})(Y),X=a(42),$=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).onSubmit=function(e){a.props.bmr(e)},a.renderInput=function(e){var t=e.input,a=e.label;e.meta;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({type:"text"},t,{autoComplete:"off"})))},a.renderActivitySelect=function(e){var t=e.input,a=e.label;e.meta;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("select",t,r.a.createElement("option",null),r.a.createElement("option",{value:"1.1"},"1.1"),r.a.createElement("option",{value:"1.2"},"1.2"),r.a.createElement("option",{value:"1.3"},"1.3"),r.a.createElement("option",{value:"1.4"},"1.4"),r.a.createElement("option",{value:"1.5"},"1.5"),r.a.createElement("option",{value:"1.6"},"1.6"),r.a.createElement("option",{value:"1.7"},"1.7"),r.a.createElement("option",{value:"1.8"},"1.8"),r.a.createElement("option",{value:"1.9"},"1.9"),r.a.createElement("option",{value:"2.0"},"2.0")))},a.renderSexSelect=function(e){var t=e.input,a=e.label;e.meta;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("select",t,r.a.createElement("option",null),r.a.createElement("option",{value:"m"},"m\u0119\u017cczyzna"),r.a.createElement("option",{value:"k"},"kobieta")))},a.checkUser=function(){return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:a.props.handleSubmit(a.onSubmit),className:"ui form"},r.a.createElement(L.a,{name:"weight",component:a.renderInput,label:"Aktualna waga"}),r.a.createElement(L.a,{name:"height",component:a.renderInput,label:"Aktualny wzrost"}),r.a.createElement(L.a,{name:"activity",component:a.renderActivitySelect,label:"Wsp\xf3\u0142czynnik aktywno\u015bci"}),r.a.createElement(L.a,{name:"age",component:a.renderInput,label:"Tw\xf3j wiek"}),r.a.createElement(L.a,{name:"sex",component:a.renderSexSelect,label:"P\u0142e\u0107"}),r.a.createElement("button",{className:"ui button"},"Zatwierd\u017a")))},a.render=function(){return a.props.user.isSigned?r.a.createElement("div",{id:"bmr"},a.checkUser()):(O.push("/login"),r.a.createElement("div",null,"Niezalogowany"))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.user.isSigned&&(this.props.initialize({weight:this.props.bmR.bmr.weight,height:this.props.bmR.bmr.height,activity:this.props.bmR.bmr.activity,sex:this.props.bmR.bmr.sex,age:this.props.bmR.bmr.age}),this.props.dispatch(Object(X.a)("bmr","anotherField","value")))}}]),t}(r.a.Component),ee=function(e){return{user:e.user,bmR:e.bmr}},te=Object(z.a)({form:"bmr"})($),ae=Object(d.b)(function(e){return ee},{bmr:N,initialValues:{weight:N.weight,height:N.height,activity:N.activity,sex:N.sex,age:N.age}})(te),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).onSubmit=function(e){a.props.changePassword(e)},a.renderInput=function(e){var t=e.input,a=e.label;e.meta;return"newpassword"===t.name?r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off",type:"password"}))):r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})))},a.sendEmail=function(e){a.props.sendEmail(e)},a.checkUser=function(){return r.a.createElement("div",{className:"column form-container"},r.a.createElement("form",{onSubmit:a.props.handleSubmit(a.sendEmail),className:"ui form sendmail"},r.a.createElement(L.a,{name:"username",component:a.renderInput,label:"Nazwa u\u017cytkownika"}),r.a.createElement("button",{className:"ui button"},"Wy\u015blij maila")),r.a.createElement("form",{onSubmit:a.props.handleSubmit(a.onSubmit),className:"ui form changepassword"},r.a.createElement(L.a,{name:"code",component:a.renderInput,label:"Kod z wiadomo\u015bci email"}),r.a.createElement(L.a,{name:"newpassword",component:a.renderInput,label:"Wprowad\u017a nowe has\u0142o"}),r.a.createElement("button",{className:"ui button"},"Zmie\u0144 has\u0142o")))},a.render=function(){return a.props.user.isSigned?(O.push("/"),r.a.createElement("div",null,"Zalogowany")):r.a.createElement("div",{id:"changePassword"},a.checkUser())},a}return Object(m.a)(t,e),t}(r.a.Component),re=Object(z.a)({form:"changepassword"})(ne),ce=Object(d.b)(function(e){return{user:e.user}},{changePassword:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(a,n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k(),t.next=4,y.post("/users/changepassword",e);case 4:I(),O.push("/login"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),alert("UPS... Spr\xf3buj jeszcze raz.."),I();case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,a){return t.apply(this,arguments)}}()},sendEmail:function(e){return function(){var t=Object(g.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.username,k(),t.next=5,y.post("/users/sendemail",{username:n});case 5:I(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),alert("UPS... Nie ma takiego u\u017cytkownika.."),I();case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()}})(re),le=a(45),ie=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"App"},r.a.createElement("div",{className:"ui active inverted dimmer",id:"loader"},r.a.createElement("div",{className:"ui massive text loader"},"\u0141adowanie...")),r.a.createElement("div",{id:"All"},r.a.createElement(b.a,{history:O},r.a.createElement(H,null),r.a.createElement(le.a,{path:"/",exact:!0,component:D}),r.a.createElement(le.a,{path:"/changepassword",exact:!0,component:ce}),r.a.createElement(le.a,{path:"/register",exact:!0,component:V}),r.a.createElement(le.a,{path:"/login",exact:!0,component:Z}),r.a.createElement(le.a,{path:"/addmeal",exact:!0,component:P}),r.a.createElement(le.a,{path:"/addactivity",exact:!0,component:Q}),r.a.createElement(le.a,{path:"/bmr",exact:!0,component:ae}))))}}]),t}(r.a.Component),oe=a(178),se=a(8),ue=a(172),me={meals:JSON.parse(localStorage.getItem("meals"))},pe={user:JSON.parse(localStorage.getItem("user")),isSigned:JSON.parse(localStorage.getItem("isSigned")),token:JSON.parse(localStorage.getItem("token"))},de={activities:JSON.parse(localStorage.getItem("activities"))},be={bmr:JSON.parse(localStorage.getItem("bmr"))},fe={countermeals:JSON.parse(localStorage.getItem("countermeals"))},Ee={counteractivities:JSON.parse(localStorage.getItem("counteractivities"))},ve=Object(se.c)({meals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MEALS":case"ADD_MEAL":return Object(f.a)({},e,{meals:t.payload});case"CLEAR_MEALS":return Object(f.a)({},e,{meals:null});case"REFRESH_MEALS":return Object(f.a)({},e,{INITIAL_STATE:me});case"DELETE_MEAL":return Object(f.a)({},e,{meals:Object(f.a)({},e.meals,{items:e.meals.items.filter(function(e){return e._id!==t.payload})})});default:return e}},form:ue.a,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_UP":return Object(f.a)({},e,{registration:t.payload});case"SIGN_UP_PROBLEM":return Object(f.a)({},e,{errors:t.payload});case"SIGN_IN":return Object(f.a)({},e,{user:t.payload,isSigned:!0});case"SIGN_IN_PROBLEM":return Object(f.a)({},e,{errors:t.payload});case"LOG_OUT":return Object(f.a)({},e,{user:pe,isSigned:!1});case"TOKEN":return Object(f.a)({},e,{token:t.payload});default:return e}},bmr:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BMR":return Object(f.a)({},e,{bmr:t.payload});default:return e}},countermeals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COUNTER_MEALS":case"REFRESH_COUNTER_MEALS":return Object(f.a)({},e,{countermeals:t.payload});default:return e}},counteractivities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COUNTER_ACTIVITIES":case"REFRESH_COUNTER_ACTIVITIES":return Object(f.a)({},e,{counteractivities:t.payload});default:return e}},activities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ACTIVITIES":case"ADD_ACTIVITY":return Object(f.a)({},e,{activities:t.payload});case"CLEAR_ACTIVITIES":return Object(f.a)({},e,{activities:null});case"REFRESH_ACTIVITIES":return Object(f.a)({},e,{INITIAL_STATE:de});case"DELETE_ACTIVITY":return Object(f.a)({},e,{activities:Object(f.a)({},e.activities,{items:e.activities.items.filter(function(e){return e._id!==t.payload})})});default:return e}}}),ge=Object(se.e)(ve,Object(se.d)(Object(se.a)(oe.a)));l.a.render(r.a.createElement(d.a,{store:ge},r.a.createElement(ie,null)),document.querySelector("#root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.7722c4e3.chunk.js.map