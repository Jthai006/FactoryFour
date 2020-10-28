(this["webpackJsonpinterview-question"]=this["webpackJsonpinterview-question"]||[]).push([[0],{50:function(t,e,s){},51:function(t,e,s){},74:function(t,e,s){"use strict";s.r(e);var a=s(2),r=s(1),c=s.n(r),n=s(30),o=s.n(n),i=(s(50),s.p,s(51),s(21)),u=s.n(i),h=s(31),f=s(32),d=s(13),m=s(38),p=s(37),l=s(4),j=s.n(l),g=s(92),b=s(94),v=s(95),y=s(96),S=Object(g.a)({card:{minHeight:"180px",width:"100%"}});function x(t){var e=S(),s="Error",r="Red",c=t.name.toUpperCase(),n="",o="",i="",u="";return void 0!==t.data.message&&(t.data.message.includes("Healthy")?(s="Healthy",r="Green",o=t.data.hostname,n=function(t){var e=new Date(t),s=e.getHours(),a="0"+e.getMinutes(),r="0"+e.getSeconds();return s+":"+a.substr(-2)+":"+r.substr(-2)}(t.data.time)):void 0!==t.data.error&&(i=t.data.error.status,u=t.data.error.statusText)),Object(a.jsx)(b.a,{className:e.card,variant:"outlined",children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(y.a,{variant:"h5",component:"h2",children:c}),Object(a.jsx)(y.a,{style:{color:"White",backgroundColor:r},color:"textSecondary",children:s}),Object(a.jsx)(y.a,{variant:"body2",component:"p",children:o}),Object(a.jsx)(y.a,{variant:"body2",component:"p",children:n}),"Error"===s?Object(a.jsxs)("div",{children:[Object(a.jsx)(y.a,{style:{color:"Red"},variant:"h6",component:"p",children:"OUTAGE"}),Object(a.jsx)(y.a,{style:{color:"Red"},variant:"body2",component:"p",children:i}),Object(a.jsx)(y.a,{style:{color:"Red"},variant:"body2",component:"p",children:u})]}):null]})})}var O=s(97),w=s(39);function k(t){return Object(a.jsx)(O.a,{container:!0,justify:"center",style:{minHeight:"100vh"},children:Object(a.jsx)(O.a,{container:!0,alignItems:"flex-start",item:!0,xs:11,style:{marginTop:"10vh",minHeight:"100vh"},children:Object(a.jsx)(O.a,{container:!0,justify:"center",spacing:4,children:Object.keys(t.data).map((function(e,s){return Object(a.jsx)(O.a,{sm:4,md:3,lg:2,item:!0,children:Object(a.jsx)(w.a,{elevation:10,children:Object(a.jsx)(x,{name:e,data:t.data[e]})})},s)}))})})})}var C=s(98),I=s(99),H=Object(g.a)((function(t){return{root:{flexGrow:1},bar:{backgroundColor:"#344152!important"},text:{color:"white"}}}));function A(){var t=H();return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(C.a,{className:t.bar,position:"static",children:Object(a.jsx)(I.a,{variant:"dense",children:Object(a.jsx)(y.a,{className:t.text,variant:"h6",children:"Status Dashboard"})})})})}var N=function(t){Object(m.a)(s,t);var e=Object(p.a)(s);function s(t){var a;return Object(f.a)(this,s),(a=e.call(this,t)).state={accounts:{},assets:{},customers:{},datapoints:{},devices:{},documents:{},forms:{},invites:{},media:{},messages:{},namespaces:{},orders:{},patients:{},relationships:{},rules:{},templates:{},users:{},workflows:{}},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=this;this.fetchAPI();try{setInterval(Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetchAPI();case 1:case"end":return e.stop()}}),e)}))),15e3)}catch(e){console.log(e)}}},{key:"fetchAPI",value:function(){var t=this;j.a.get("https://api.factoryfour.com/accounts/health/status").then((function(e){return t.setState({accounts:e.data})})).catch((function(e){t.setState({accounts:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/assets/health/status").then((function(e){return t.setState({assets:e.data})})).catch((function(e){t.setState({assets:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/customers/health/status").then((function(e){return t.setState({customers:e.data})})).catch((function(e){t.setState({customers:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/datapoints/health/status").then((function(e){return t.setState({datapoints:e.data})})).catch((function(e){t.setState({datapoints:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/devices/health/status").then((function(e){return t.setState({devices:e.data})})).catch((function(e){t.setState({devices:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/documents/health/status").then((function(e){return t.setState({documents:e.data})})).catch((function(e){t.setState({documents:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/forms/health/status").then((function(e){return t.setState({forms:e.data})})).catch((function(e){t.setState({forms:{success:!1,message:"error"}})})),j.a.get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/invites/health/status").then((function(e){return t.setState({invites:e.data})})).catch((function(e){t.setState({invites:{success:!1,message:"error",error:e.response}})})),j.a.get("https://api.factoryfour.com/media/health/status").then((function(e){return t.setState({media:e.data})})).catch((function(e){t.setState({media:{success:!1,message:"error"}})})),j.a.get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/messages/health/status").then((function(e){return t.setState({messages:e.data})})).catch((function(e){t.setState({messages:{success:!1,message:"error",error:e.response}})})),j.a.get("https://api.factoryfour.com/namespaces/health/status").then((function(e){return t.setState({namespaces:e.data})})).catch((function(e){t.setState({assets:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/orders/health/status").then((function(e){return t.setState({orders:e.data})})).catch((function(e){t.setState({orders:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/patients/health/status").then((function(e){return t.setState({patients:e.data})})).catch((function(e){t.setState({patients:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/relationships/health/status").then((function(e){return t.setState({relationships:e.data})})).catch((function(e){t.setState({relationships:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/rules/health/status").then((function(e){return t.setState({rules:e.data})})).catch((function(e){t.setState({rules:{success:!1,message:"error"}})})),j.a.get("https://api.factoryfour.com/templates/health/status").then((function(e){return t.setState({templates:e.data})})).catch((function(e){t.setState({templates:{success:!1,message:"error"}})})),j.a.get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/users/health/status").then((function(e){return t.setState({users:e.data})})).catch((function(e){t.setState({users:{success:!1,message:"error",error:e.response}})})),j.a.get("https://api.factoryfour.com/workflows/health/status").then((function(e){return t.setState({workflows:e.data})})).catch((function(e){t.setState({workflows:{success:!1,message:"error"}})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(A,{}),Object(a.jsx)(k,{data:this.state})]})}}]),s}(r.Component);var P=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(N,{})})},T=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,101)).then((function(e){var s=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,n=e.getTTFB;s(t),a(t),r(t),c(t),n(t)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),T()}},[[74,1,2]]]);
//# sourceMappingURL=main.9e7cdcad.chunk.js.map