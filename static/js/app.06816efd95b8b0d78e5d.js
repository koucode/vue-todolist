webpackJsonp([1],{"231T":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(e){n("PeNR")},null,null).exports,r=n("/ocq"),a=n("mvHQ"),u=n.n(a),c=function(){return JSON.parse(window.localStorage.getItem("todos-vuejs"))},l=function(e){window.localStorage.setItem("todos-vuejs",u()(e))},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"counter"}},[t("button",{on:{click:this.onClick}},[this._v("Add 1")]),this._v(" "),t("p",[this._v("The button above has been clicked "+this._s(this.counter)+" times.")])])},staticRenderFns:[]};var m=n("VU/8")({name:"Counter",data:function(){return{counter:0}},methods:{onClick:function(e){this.counter+=1}}},d,!1,function(e){n("231T")},"data-v-03e9ee68",null).exports,h={name:"TodoList",components:{Counter:m},data:function(){return{msg:"Todo List - 待办事项",todoItems:c(),newItem:""}},watch:{todoItems:{handler:function(e){l(e)},deep:!0}},created:function(){},methods:{toggleFinish:function(e){e.isFinished=!e.isFinished},addNew:function(){null!=this.todoItems&&void 0!=this.todoItems||(this.todoItems=[]),this.todoItems.push({label:this.newItem,isFinished:!1}),this.newItem=""}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"todolist"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem,expression:"newItem"}],domProps:{value:e.newItem},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.addNew(t):null},input:function(t){t.target.composing||(e.newItem=t.target.value)}}}),e._v(" "),n("h2",[e._v("未完成")]),e._v(" "),n("ul",e._l(e.todoItems,function(t){return t.isFinished?e._e():n("li",{key:t.label,on:{click:function(n){e.toggleFinish(t)}}},[e._v("\n      "+e._s(t.label)+"\n    ")])})),e._v(" "),n("h2",[e._v("已完成")]),e._v(" "),n("ul",e._l(e.todoItems,function(t){return t.isFinished?n("li",{key:t.label,staticClass:"finished",on:{click:function(n){e.toggleFinish(t)}}},[e._v("\n      "+e._s(t.label)+"\n    ")]):e._e()})),e._v(" "),n("counter")],1)},staticRenderFns:[]};var p=n("VU/8")(h,v,!1,function(e){n("VgJJ")},"data-v-183eaa05",null).exports;o.a.use(r.a);var f=new r.a({routes:[{path:"/",name:"TodoList",component:p},{path:"/counter",name:"Counter",component:m}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:f,components:{App:s},template:"<App/>"})},PeNR:function(e,t){},VgJJ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.06816efd95b8b0d78e5d.js.map