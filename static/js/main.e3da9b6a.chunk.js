(this.webpackJsonpvirtualso=this.webpackJsonpvirtualso||[]).push([[0],{101:function(e,t){},102:function(e,t){},116:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(35),r=n.n(c),o=(n(42),n(21)),i=n.n(o),u=n(36),v=n(10),l=n(11),d=n(13),h=n(12),p=n(37),j=n.n(p),g=n(0),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:this.props.data.name}),Object(g.jsxs)("p",{children:[this.props.data.desc," ",Object(g.jsx)("span",{children:this.props.data.date})]})]})}}]),n}(a.Component),b=f,O=new j.a({apiKey:"keynmrOvRll58ERY7"}).base("appRTSRlXjQ67gLwM"),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).getEvents=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],O("Events").select({maxRecords:3,view:"Grid view"}).eachPage((function(e,t){a.setState({events:a.recordsToEventData(e)}),t()}),(function(e){e&&console.log(e)})),console.log(t),a.setState({events:t});case 4:case"end":return e.stop()}}),e)}))),a.state={events:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getEvents()}},{key:"recordsToEventData",value:function(e){var t=[];return e.forEach((function(e){console.log("Retrieved",e.get("Event Name")),t.push({name:e.get("Event Name"),type:e.get("Event Type"),desc:e.get("Description"),image:e.get("Image"),date:e.get("Date"),diversity:e.get("Diversity")})})),t}},{key:"render",value:function(){var e=[];console.log("made list"),console.log(this.state.events.length);for(var t=0;t<this.state.events.length;t++)e.push(Object(g.jsx)(b,{data:this.state.events[t]},t));return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"VIRTUALSO"}),e]})}}]),n}(a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(m,{})}),document.getElementById("root")),y()},42:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.e3da9b6a.chunk.js.map