(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0fdf":function(e,t,n){},"1b95":function(e,t,n){"use strict";(function(e){n("db7e");i(n("66fd"));var t=i(n("ffca"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"4d3b":function(e,t,n){"use strict";var i=n("8da2"),o=n.n(i);o.a},"8da2":function(e,t,n){},"8dad":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=f(n("4795")),o=f(n("a70c")),r=n("2f62"),c=n("1f1f"),a=f(n("63d4")),u=f(n("e984")),s=f(n("d976")),l=f(n("9fce"));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=g(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,r=!0,c=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return r=e.done,e},e:function(e){c=!0,o=e},f:function(){try{r||null==i.return||i.return()}finally{if(c)throw o}}}}function g(e,t){if(e){if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function y(e,t,n,i,o,r,c){try{var a=e[r](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(i,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var r=e.apply(t,n);function c(e){y(r,i,o,c,a,"next",e)}function a(e){y(r,i,o,c,a,"throw",e)}c(void 0)}))}}var T=(0,o.default)(),w=(0,o.default)().addDays(1),k={mixins:[c.mobileMixin],props:{publicSaleFlag:{type:[Boolean,String],default:!0}},data:function(){return{href:"https://uniapp.dcloud.io/collocation/pages?id=easycom",swiper:{indicatorDots:!0,autoplay:!0,interval:2e3,duration:500},introductionTitle:"景区特色  景区简介",categorys:[{id:1,name:"景区门票",items:[{id:1,name:"欢乐票",price:12.34},{id:2,name:"开发票",price:23.45}]},{id:2,name:"餐饮",items:[{id:1,name:"河粉",price:5.5},{id:2,name:"米饭",price:3}]}],scenic:{},ticketTypes:[],selectedTicketType:{},origin:"http://localhost:8080",shareImgUrl:"",groundId:1,showDescription:!1,showNotice:!1,swipeHeight:150,selectColors:[["#A5B4E4","#6361EE"],["#FB754E","#FB3A47"],["#254334","#BF94D8"]],showClothing:!1,showStudent:!0,showIntroduction:!1,showMemberSelect:!1,memberSelect:!1,images:[]}},onLoad:function(){var t=this;return v(i.default.mark((function n(){var r,c,f;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,l.default.loginFromMiniAsync();case 2:return r=e.getSystemInfoSync(),t.swipeHeight=r.screenWidth/640*360,n.next=6,s.default.getSettingsFromWeChatAsync();case 6:return c=a.default.getTicketTypesForWeiXinSaleAsync({publicSaleFlag:t.publicSaleFlag,groundId:""}).then((function(e){var n,i=m(e);try{for(i.s();!(n=i.n()).done;){var o=n.value;o.travelDateText=t.getTravelDateText(o),o.refundText=t.getRefundText(o)}}catch(r){i.e(r)}finally{i.f()}t.ticketTypes=e})),f=u.default.getScenicAsync().then((function(e){if(e.photoList&&e.photoList.length>0&&(t.images=e.photoList.map((function(e){return e.url})),t.shareImgUrl=t.images[0]),e.openTime&&e.closeTime){var n=(0,o.default)().toDateString(),i=(0,o.default)("".concat(n," ").concat(e.openTime,":00")),r=(0,o.default)("".concat(n," ").concat(e.closeTime,":00")),c=(0,o.default)();c.isBefore(i)?e.openText="未开园 ".concat(e.openTime,"开园"):c.isBetween(i,r)?e.openText="开放中 ".concat(e.closeTime,"闭园"):e.openText="已闭园 明日".concat(e.openTime,"开园")}t.scenic=e,t.setPageLabelMainText(t.scenic.pageLabelMainText)})).then((function(){"".concat(t.origin,"/tickettype/").concat(t.publicSaleFlag);t.groundId&&"?groundId=".concat(t.groundId)})),n.prev=8,n.next=11,Promise.all([c,f]);case 11:t.pageLoaded=!0;case 12:return n.prev=12,n.finish(12);case 14:case"end":return n.stop()}}),n,null,[[8,,12,14]])})))()},methods:p({onIntroduction:function(){this.showIntroduction=!0},onIntroductionClose:function(){this.showIntroduction=!1},onBook:function(){e.navigateTo({url:"../ticket/buy-ticket"})},onBuy:function(e){this.selectedTicketType=e,this.memberSelect?this.toBuy():this.showMemberSelect=!0},onShowDescription:function(e){this.selectedTicketType=e,this.showDescription=!0},getTravelDateText:function(e){var t=(0,o.default)(e.startTravelDate),n="";return n=t.isSameOrBefore(T)?"今日":t.isSameOrBefore(w)?"明日":t.format("MM月DD日"),"最早可订".concat(n,"票")},getRefundText:function(e){return!1===e.allowRefund?"不可退":e.refundLimited?"有条件退":"随时退"},getRefundColor:function(e){return!1===e.allowRefund?"#ff2f39":e.refundLimited?"#ffae13":"#099fde"},onShowNotice:function(){this.showNotice=!0},onCloseNotice:function(){this.showNotice=!1},onTicketClick:function(){e.navigateTo({url:"/pages/ticket/ticket-type"})},onDescriptionClose:function(){this.showDescription=!1},onMemberSelectClose:function(){this.showMemberSelect=!1,this.memberSelect=!0,this.toBuy()},toBuy:function(){this.selectedTicketType.shouldReadDescription?this.onShowDescription(this.selectedTicketType):e.navigateTo({url:"/pages/ticket/buy-ticket?ticketTypeId="+this.selectedTicketType.id})}},(0,r.mapMutations)(["setGroundId","setPageLabelMainText"]))};t.default=k}).call(this,n("543d")["default"])},"98d5":function(e,t,n){"use strict";var i={ticketNotice:function(){return n.e("components/ticket/ticket-notice/ticket-notice").then(n.bind(null,"aa70"))},ticketIntroduction:function(){return n.e("components/ticket/ticket-introduction/ticket-introduction").then(n.bind(null,"a31f"))},ticketTypeDescription:function(){return n.e("components/ticket/ticket-type-description/ticket-type-description").then(n.bind(null,"b6a7"))},ticketMemberSelect:function(){return n.e("components/ticket/ticket-member-select/ticket-member-select").then(n.bind(null,"e19d"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.categorys,(function(t,n){var i=e.__map(e.ticketTypes,(function(t,n){var i=e.getRefundColor(t);return{$orig:e.__get_orig(t),m0:i}}));return{$orig:e.__get_orig(t),l0:i}})));e.$mp.data=Object.assign({},{$root:{l1:n}})},r=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},c91b:function(e,t,n){"use strict";var i=n("0fdf"),o=n.n(i);o.a},de63:function(e,t,n){"use strict";n.r(t);var i=n("8dad"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},ffca:function(e,t,n){"use strict";n.r(t);var i=n("98d5"),o=n("de63");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("4d3b"),n("c91b");var c,a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);t["default"]=u.exports}},[["1b95","common/runtime","common/vendor"]]]);