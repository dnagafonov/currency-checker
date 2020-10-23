(this["webpackJsonpcurrency-checker"]=this["webpackJsonpcurrency-checker"]||[]).push([[0],{266:function(e,t,a){e.exports=a(507)},271:function(e,t,a){},449:function(e,t,a){},467:function(e,t,a){},468:function(e,t,a){},504:function(e,t,a){},505:function(e,t,a){},507:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),u=a.n(c),o=(a(271),a(77)),i=function(e){return e.startDate},s=function(e){return e.endDate},l=function(e){return e.activeCurrency},f=function(e){return e.currencies[e.activeCurrency]},E=function(e){return e.rates},m=a(51),d=(a(449),Object(n.memo)((function(e){var t=e.rates;return r.a.createElement(m.d,{width:700,height:400,data:t,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(m.a,{strokeDasharray:"3 3"}),r.a.createElement(m.f,{dataKey:"Date"}),r.a.createElement(m.g,{dataKey:"Cur_OfficialRate",type:"category"}),r.a.createElement(m.e,null),r.a.createElement(m.b,null),r.a.createElement(m.c,{type:"monotone",dataKey:"Cur_OfficialRate",stroke:"#82ca9d"}))}))),D=a(147),h=a.n(D),v=a(221),y=a(61),p=function(e){return y.b.error(e,{position:y.b.POSITION.TOP_CENTER,autoClose:5e3})},C=a(450).default.create({baseURL:"https://us-central1-currency-checker-server.cloudfunctions.net/app"}),g=Object(o.b)((function(e){return{startDate:i(e),endDate:s(e),currencyID:f(e),rates:E(e)}}),{getExchangeRates:function(e,t,a){return function(){var n=Object(v.a)(h.a.mark((function n(r){var c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u="Loading...",y.b.info(u,{position:y.b.POSITION.TOP_CENTER,autoClose:3e3}),n.next=4,C.get("/exchange?startDate=".concat(e,"&endDate=").concat(t,"&currencyID=").concat(a)).then((function(e){return e.data})).catch((function(e){return console.error(e.message)}));case 4:c=n.sent,r({type:"SET_EXCHANGE_RATES",rates:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),p("Error receiving data");case 11:case"end":return n.stop()}var u}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.startDate,a=e.endDate,c=e.currencyID,u=e.rates,o=e.getExchangeRates;return Object(n.useEffect)((function(){o(t,a,c)}),[t,a,c]),null===u?r.a.createElement("div",{className:"loading h2"},"Loading..."):r.a.createElement(d,{rates:u})})),b=(a(467),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"h4"},"Currency checker"))}),O=a(512),R=a(513),T=a(39),S=a.n(T),w=(a(468),a(469),O.a.RangePicker),_=function(e){var t=e.startDate,a=e.endDate,n=e.activeCurrency,c=e.onCurrencyChange,u=e.onDateChange;return r.a.createElement("div",{className:"widget"},r.a.createElement(R.a,{defaultValue:n,onChange:c},r.a.createElement(R.a.Option,{value:"USD"},"USD"),r.a.createElement(R.a.Option,{value:"EUR"},"EUR"),r.a.createElement(R.a.Option,{value:"RUB"},"RUB")),r.a.createElement(w,{defaultValue:[S()(t),S()(a)],onChange:u}))},k=Object(o.b)((function(e){return{startDate:i(e),endDate:s(e),activeCurrency:l(e)}}),{setDate:function(e){try{var t=e.map((function(e){return e.format().slice(0,10)}));return{type:"SET_DATE",startDate:t[0],endDate:t[1]}}catch(a){p("Incorrect date")}},setActiveCurrency:function(e){return{type:"SET_ACTIVE_CURRENCY",currency:e}}})((function(e){var t=e.setDate,a=e.setActiveCurrency,c=e.startDate,u=e.endDate,o=e.activeCurrency;return Object(n.useEffect)((function(){}),[]),r.a.createElement(_,{startDate:c,endDate:u,activeCurrency:o,onDateChange:t,onCurrencyChange:a})}));a(504),a(505),a(506);var N=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(b,null),r.a.createElement(g,null),r.a.createElement(k,null),r.a.createElement(y.a,{limit:3}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(68),j=a(232),I=a(233),A=a(234),x=a(150),B=function(e){return e.toISOString().slice(0,10)},P={currencies:{USD:145,EUR:292,RUB:298},activeCurrency:"USD",startDate:B(new Date("2020-10-13")),endDate:B(new Date),rates:null},V=Object(A.a)((function(e,t){switch(t.type){case"SET_ACTIVE_CURRENCY":return e.activeCurrency=t.currency,e;case"SET_DATE":return e.startDate=t.startDate,e.endDate=t.endDate,e;case"SET_EXCHANGE_RATES":var a=t.rates.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{Date:e.Date.slice(0,10)})}));return e.rates=a,e;default:return e}}),P),K=Object(U.createStore)(V,Object(j.composeWithDevTools)(Object(U.applyMiddleware)(I.a)));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:K},r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[266,1,2]]]);
//# sourceMappingURL=main.5dacb846.chunk.js.map