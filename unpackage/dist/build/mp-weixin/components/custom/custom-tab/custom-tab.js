(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom/custom-tab/custom-tab"],{"470b":function(t,n,a){},"6d6e":function(t,n,a){"use strict";var i=a("470b"),e=a.n(i);e.a},7072:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"s-tab",inject:["$tabs"],props:{title:{type:String,default:""}},data:function(){return{id:"s-tab-id-"+Math.random().toString(36).substr(2)}},mounted:function(){var t=this.id,n=this.title;this.$tabs.navList=this.$tabs.navList.concat({id:t,title:n})},beforeDestroy:function(){var t=this;this.$tabs.navList=this.$tabs.navList.filter((function(n){return n.id!==t.id}))}};n.default=i},7883:function(t,n,a){"use strict";var i,e=function(){var t=this,n=t.$createElement;t._self._c},u=[];a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return i}))},9451:function(t,n,a){"use strict";a.r(n);var i=a("7883"),e=a("aa07");for(var u in e)"default"!==u&&function(t){a.d(n,t,(function(){return e[t]}))}(u);a("6d6e");var r,s=a("f0c5"),o=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=o.exports},aa07:function(t,n,a){"use strict";a.r(n);var i=a("7072"),e=a.n(i);for(var u in i)"default"!==u&&function(t){a.d(n,t,(function(){return i[t]}))}(u);n["default"]=e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom/custom-tab/custom-tab-create-component',
    {
        'components/custom/custom-tab/custom-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9451"))
        })
    },
    [['components/custom/custom-tab/custom-tab-create-component']]
]);
