(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesMember-bind-member"],{"22b8":function(e,r,t){"use strict";t.r(r);var n=t("3bc6"),a=t("3386");for(var u in a)"default"!==u&&function(e){t.d(r,e,(function(){return a[e]}))}(u);t("9488");var i,o=t("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"3bf815ce",null,!1,n["a"],i);r["default"]=s.exports},2477:function(e,r,t){"use strict";var n=t("ee27");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("96cf");var a=n(t("c964")),u=(n(t("499e")),n(t("55a6"))),i=n(t("7ae3")),o=n(t("7cfa")),s=(n(t("d7bf")),t("ead2")),c={mixins:[s.mobileMixin],data:function(){return{params:[{label:"手机号码",vmodel:"",placeholder:"请输入手机号码",error:!1,validTypeId:3},{label:"验证码",vmodel:"",placeholder:"请输入验证码",error:!1,validTypeId:6,endTypeId:4,endValue:"验证码",isCountdownStart:!1,second:60}],timer:-1}},methods:{validParams:function(){for(var e="",r=0;r<this.params.length;r++){var t=this.params[r];e+=u.default.validParam(t)}return e},onEndClick:function(e){var r=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"验证码"==e.label&&(r.params[1].isCountdownStart||(n=u.default.validParam(r.params[0]),n&&i.default.noneToast(n)));case 1:case"end":return t.stop()}}),t)})))()},btnBind:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t=e.validParams(),!t){r.next=5;break}i.default.noneToast(t),r.next=13;break;case 5:return r.prev=5,r.next=8,o.default.bindFromWeChatAsync({mobile:e.params[0].vmodel,verificationCode:e.params[1].vmodel});case 8:n=r.sent,console.log(n),n.error?i.default.noneToast(n.error):uni.navigateBack({delta:1});case 11:return r.prev=11,r.finish(11);case 13:case"end":return r.stop()}}),r,null,[[5,,11,13]])})))()}}};r.default=c},3386:function(e,r,t){"use strict";t.r(r);var n=t("2477"),a=t.n(n);for(var u in n)"default"!==u&&function(e){t.d(r,e,(function(){return n[e]}))}(u);r["default"]=a.a},"3bc6":function(e,r,t){"use strict";var n={customField:t("3a5f").default},a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"view-regist-member"},[t("v-uni-view",{staticClass:"view-regist-input"},e._l(e.params,(function(r,n){return t("custom-field",{key:n,attrs:{param:r},on:{end:function(t){arguments[0]=t=e.$handleEvent(t),e.onEndClick(r)}}})})),1),t("v-uni-view",{staticClass:"view-regist-button"},[t("v-uni-button",{staticClass:"enter-button",attrs:{loading:e.isLoading},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.btnBind.apply(void 0,arguments)}}},[e._v("立即绑定")])],1)],1)},u=[];t.d(r,"b",(function(){return a})),t.d(r,"c",(function(){return u})),t.d(r,"a",(function(){return n}))},"55a6":function(e,r,t){"use strict";var n=t("ee27");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(t("499e")),u={getValidRules:function(e){var r=[{rule:"required"}];return"6"==e.validTypeId&&(e.minValue>0&&r.push({rule:"minLength:"+e.minValue}),e.maxValue>0&&r.push({rule:"maxLength:"+e.maxValue})),"5"==e.validTypeId&&(e.minValue>0&&r.push({rule:"minNum:"+e.minValue}),e.maxValue>0&&r.push({rule:"maxNum:"+e.maxValue})),"4"==e.validTypeId&&r.push({rule:"isIdCard"}),"3"==e.validTypeId&&r.push({rule:"isMobile"}),r},validParam:function(e){var r=this.getValidRules(e),t=(0,a.default)([{value:e.vmodel,name:e.label,rules:r}]);return e.error=!t.success,t.success?"":t.message}};r.default=u},"6ea7":function(e,r,t){var n=t("24fb");r=n(!1),r.push([e.i,'@charset "UTF-8";\r\n/**\r\n * scss预处理 内置的常用样式变量\r\n * 后期项目会考虑使用scss\r\n*/\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.view-regist-member .view-regist-input[data-v-3bf815ce]{padding:0 5px 0 5px;background:#fff;border-top:1px solid #efefef}.view-regist-member .view-regist-button[data-v-3bf815ce]{padding:30px 20px 0 20px}',""]),e.exports=r},"737e":function(e,r,t){var n=t("6ea7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("07d35703",n,!0,{sourceMap:!1,shadowMode:!1})},"7cfa":function(e,r,t){"use strict";var n=t("ee27");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("96cf");var a=n(t("c964")),u=n(t("2a13")),i=n(t("66d9")),o={loginFromWeChatAsync:function(e){var r=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.default.post("/member/LoginFromWeChatAsync",e);case 2:n=t.sent,r.setMember(n);case 4:case"end":return t.stop()}}),t)})))()},loginFromMiniAsync:function(e){var r=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r,t.next=3,uni.login({success:function(r){return(0,a.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.code){t.next=12;break}if(!e){t.next=8;break}return i={code:r.code,userInfo:e},t.next=5,u.default.post("/member/LoginFromWechatMiniProgramAsync",i).then((function(e){n.setMember(e)}));case 5:t.sent,t.next=10;break;case 8:return t.next=10,uni.getUserInfo({success:function(e){return(0,a.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={code:r.code,userInfo:e.userInfo},t.next=3,u.default.post("/member/LoginFromWechatMiniProgramAsync",a).then((function(e){n.setMember(e)}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()}});case 10:t.next=13;break;case 12:console.log("登录失败！"+r.errMsg);case 13:case"end":return t.stop()}}),t)})))()}});case 3:case"end":return t.stop()}}),t)})))()},bindStaffAsync:function(e){var r=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.default.post("/member/BindStaffAsync",e);case 2:n=t.sent,r.setMember(n);case 4:case"end":return t.stop()}}),t)})))()},registMemberCardAsync:function(e){return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.default.post("/member/RegistMemberCardAsync",e);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},getElectronicMemberCardAsync:function(){return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.default.get("/member/GetElectronicMemberCardAsync");case 2:return r=e.sent,e.abrupt("return",r.result);case 4:case"end":return e.stop()}}),e)})))()},renewMemberCardAsync:function(e){return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.default.post("/member/RenewMemberCardAsync",{id:e});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()},validRepeatMobileAsync:function(e){return(0,a.default)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.default.post("/member/ValidRepeatMobileAsync?mobile=".concat(e));case 2:return t=r.sent,r.abrupt("return",t.result);case 4:case"end":return r.stop()}}),r)})))()},bindFromWeChatAsync:function(e){var r=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.default.post("/member/BindFromWeChatAsync",e);case 2:return n=t.sent,n.result.error||r.setMember(n),t.abrupt("return",n.result);case 5:case"end":return t.stop()}}),t)})))()},registFromWeChatAsync:function(e){var r=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.default.post("/member/RegistFromWeChatAsync",e);case 2:return n=t.sent,n.result.error||r.setMember(n),t.abrupt("return",n.result);case 5:case"end":return t.stop()}}),t)})))()},bindSendVerificationCodeAsync:function(e){return(0,a.default)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.default.post("/member/BindSendVerificationCodeAsync?mobile=".concat(e));case 2:return t=r.sent,r.abrupt("return",t.result);case 4:case"end":return r.stop()}}),r)})))()},registSendVerificationCodeAsync:function(e){return(0,a.default)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.default.post("/member/RegistSendVerificationCodeAsync?mobile=".concat(e));case 2:return t=r.sent,r.abrupt("return",t.result);case 4:case"end":return r.stop()}}),r)})))()},setMember:function(e){var r=e.result.member;r.permissions=e.result.permissions,uni.setStorageSync("member",JSON.stringify(r)),i.default.setToken(e.result.token)},getMember:function(){var e=uni.getStorageSync("member");return e?JSON.parse(e):null}};r.default=o},9488:function(e,r,t){"use strict";var n=t("737e"),a=t.n(n);a.a},d7bf:function(e,r,t){"use strict";var n=t("ee27");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("96cf");var a=n(t("c964")),u=n(t("2a13")),i={logError:function(e){return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return"object"==typeof e&&(e=JSON.stringify(e)),r.next=3,u.default.post("/common/LogError?message=".concat(e));case 3:case"end":return r.stop()}}),r)})))()},getEducationComboboxItems:function(){return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.default.get("/common/GetEducationComboboxItems");case 2:return r=e.sent,e.abrupt("return",r.result);case 4:case"end":return e.stop()}}),e)})))()},getNationComboboxItems:function(){return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.default.get("/common/GetNationComboboxItems");case 2:return r=e.sent,e.abrupt("return",r.result);case 4:case"end":return e.stop()}}),e)})))()},getAgeRangeComboboxItemsAsync:function(){return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.default.get("/common/GetAgeRangeComboboxItemsAsync");case 2:return r=e.sent,e.abrupt("return",r.result);case 4:case"end":return e.stop()}}),e)})))()},getTouristOriginTreeAsync:function(){return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.default.get("/common/GetTouristOriginTreeAsync");case 2:return r=e.sent,e.abrupt("return",r.result);case 4:case"end":return e.stop()}}),e)})))()},sendVerificationCodeAsync:function(e){return(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.default.post("/common/SendVerificationCodeAsync?address=".concat(e));case 2:case"end":return r.stop()}}),r)})))()}};r.default=i},ead2:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.mobileMixin=void 0;var n={data:function(){return{isLoading:!1,pageLoaded:!1}},beforeRouteLeave:function(e,r,t){t()},methods:{isIphone:function(){return/iphone|ipod|ipad/i.test(navigator.appVersion)},loading:function(){uni.showLoading({duration:0,title:"加载中..."}),this.isLoading=!0},loaded:function(){this.isLoading=!1,uni.hideLoading()},normalizeImage:function(e){}}};r.mobileMixin=n}}]);