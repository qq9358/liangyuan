(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/bind-member"],{"0f6d":function(e,n,t){"use strict";t.r(n);var a=t("266b"),r=t("225b");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("a0d8");var o,i=t("f0c5"),c=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=c.exports},"12fd":function(e,n,t){},"225b":function(e,n,t){"use strict";t.r(n);var a=t("5ac7"),r=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);n["default"]=r.a},"266b":function(e,n,t){"use strict";var a={customField:function(){return t.e("components/custom/custom-field/custom-field").then(t.bind(null,"3a5f"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return a}))},"5ac7":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=c(t("4795")),r=(c(t("499e")),c(t("55a6"))),u=c(t("7ae3")),o=c(t("7cfa")),i=(c(t("d7bf")),t("ead2"));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,n,t,a,r,u,o){try{var i=e[u](o),c=i.value}catch(d){return void t(d)}i.done?n(c):Promise.resolve(c).then(a,r)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var u=e.apply(n,t);function o(e){d(u,a,r,o,i,"next",e)}function i(e){d(u,a,r,o,i,"throw",e)}o(void 0)}))}}var f={mixins:[i.mobileMixin],data:function(){return{params:[{label:"手机号码",vmodel:"",placeholder:"请输入手机号码",error:!1,validTypeId:3},{label:"验证码",vmodel:"",placeholder:"请输入验证码",error:!1,validTypeId:6,endTypeId:4,endValue:"验证码",isCountdownStart:!1,second:60}],timer:-1}},methods:{validParams:function(){for(var e="",n=0;n<this.params.length;n++){var t=this.params[n];e+=r.default.validParam(t)}return e},onEndClick:function(e){var n=this;return l(a.default.mark((function t(){var o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"验证码"==e.label&&(n.params[1].isCountdownStart||(o=r.default.validParam(n.params[0]),o&&u.default.noneToast(o)));case 1:case"end":return t.stop()}}),t)})))()},btnBind:function(){var n=this;return l(a.default.mark((function t(){var r,i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=n.validParams(),!r){t.next=5;break}u.default.noneToast(r),t.next=13;break;case 5:return t.prev=5,t.next=8,o.default.bindFromWeChatAsync({mobile:n.params[0].vmodel,verificationCode:n.params[1].vmodel});case 8:i=t.sent,console.log(i),i.error?u.default.noneToast(i.error):e.navigateBack({delta:1});case 11:return t.prev=11,t.finish(11);case 13:case"end":return t.stop()}}),t,null,[[5,,11,13]])})))()}}};n.default=f}).call(this,t("543d")["default"])},"97ef":function(e,n,t){"use strict";(function(e){t("3dd4");a(t("66fd"));var n=a(t("0f6d"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a0d8:function(e,n,t){"use strict";var a=t("12fd"),r=t.n(a);r.a}},[["97ef","common/runtime","common/vendor"]]]);