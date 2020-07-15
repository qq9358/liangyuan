(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesOrder-order-detail"],{"48ff":function(e,t,a){"use strict";var i=a("ee27");a("4de4"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("54f8"));a("96cf");var n=i(a("c964")),o=i(a("fe95")),d=i(a("ad77")),s=i(a("e680")),l=i(a("7ae3")),c={data:function(){return{orderInfo:{details:[]},currentBarcode:"",countdownText:"",timer:-1,saving:!1,isLoadingData:!1,allowLeave:!1}},computed:{statusInfo:function(){switch(this.orderInfo.orderStatusName){case"待付款":return"库存有限，请尽快完成付款";case"退款中":return"退款申请已提交，我们将尽快为您处理";case"已取消":return"您的订单已取消，欢迎重新预订";case"已审核":return"预订已成功，祝您出游愉快"}return""},allowCancel:function(){return this.orderInfo.shouldPay||0==this.orderInfo.totalMoney},refundText:function(){return this.allowCancel?"申请取消":"申请退款"},changCiOrderDetails:function(){return this.orderInfo.details.filter((function(e){return e.groundChangCis&&e.groundChangCis.length>0}))}},onLoad:function(e){var t=this;return(0,n.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.listNo=e.listNo,a.next=3,t.loadData();case 3:case"end":return a.stop()}}),a)})))()},onPullDownRefresh:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadData();case 2:case"end":return t.stop()}}),t)})))()},beforeRouteLeave:function(e,t,a){var i=this;return(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.allowLeave){e.next=3;break}return a(),e.abrupt("return");case 3:clearInterval(i.timer),a();case 5:case"end":return e.stop()}}),e)})))()},methods:{loadData:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getOrderInfo();case 2:e.startCountdown();case 3:case"end":return t.stop()}}),t)})))()},getOrderInfo:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoadingData=!0,e.currentBarcode="",uni.showLoading({duration:0,title:"加载中..."}),t.next=6,s.default.getOrderInfoForMobileAsync(e.listNo);case 6:return a=t.sent,a.hasContact=a.contact.contactName||a.contact.contactCertNo||a.contact.contactMobile,t.next=10,e.generateQRCodeAsync(a);case 10:e.orderInfo=a,console.log(orderInfo),t.next=17;break;case 14:return t.prev=14,t.t0=t["catch"](0),t.abrupt("return");case 17:return t.prev=17,uni.hideLoading(),e.isLoadingData=!1,t.finish(17);case 21:case"end":return t.stop()}}),t,null,[[0,14,17,21]])})))()},generateQRCodeAsync:function(e){var t=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var i,n,o,s,l,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.hasDetail=e.details&&e.details.length>0,e.hasDetail){a.next=3;break}return a.abrupt("return");case 3:i=(0,r.default)(e.details),a.prev=4,i.s();case 6:if((n=i.n()).done){a.next=34;break}if(o=n.value,o.hasTicket=o.tickets&&o.tickets.length>0,o.hasTicket){a.next=11;break}return a.abrupt("continue",32);case 11:s=(0,r.default)(o.tickets),a.prev=12,s.s();case 14:if((l=s.n()).done){a.next=24;break}if(c=l.value,c.isUsable){a.next=18;break}return a.abrupt("continue",22);case 18:return a.next=20,d.default.createQRCodeAsync(c.ticketCode);case 20:c.qrcode=a.sent,t.currentBarcode||(t.currentBarcode=c.ticketCode);case 22:a.next=14;break;case 24:a.next=29;break;case 26:a.prev=26,a.t0=a["catch"](12),s.e(a.t0);case 29:return a.prev=29,s.f(),a.finish(29);case 32:a.next=6;break;case 34:a.next=39;break;case 36:a.prev=36,a.t1=a["catch"](4),i.e(a.t1);case 39:return a.prev=39,i.f(),a.finish(39);case 42:case"end":return a.stop()}}),a,null,[[4,36,39,42],[12,26,29,32]])})))()},startCountdown:function(){var e=this;if(clearInterval(this.timer),this.orderInfo.shouldPay){var t=(0,o.default)("2018-01-01 00:00:00"),a=t.clone().addSeconds(this.orderInfo.expireSeconds),i=this.orderInfo.expireSeconds>3600?"HH:mm:ss":"mm:ss";this.countdownText=a.format(i),this.timer=setInterval((function(){a=a.subtract(1,"seconds"),e.countdownText=a.format(i),a.isSame(t)&&(clearInterval(e.timer),e.getOrderInfo())}),1e3)}},onBarcodeClick:function(e){this.currentBarcode=e.ticketCode},isBarcodeCollapse:function(e){return this.currentBarcode!==e.ticketCode},pay:function(){uni.navigateTo({url:"/pages/payment/wx-js-pay?listNo="+this.listNo})},refund:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.allowCancel){t.next=5;break}return t.next=3,e.cancelOrder();case 3:t.next=6;break;case 5:uni.navigateTo({url:"/pages/order/refund-ticket?listNo="+e.listNo});case 6:case"end":return t.stop()}}),t)})))()},cancelOrder:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.saving=!0,t.next=4,uni.showModal({content:"确定取消订单？"});case 4:if(a=t.sent,!a[1].confirm){t.next=13;break}return t.next=8,s.default.cancelOrderAsync(e.listNo);case 8:if(i=t.sent,!i.success){t.next=13;break}return l.default.noneToast("取消成功"),t.next=13,e.getOrderInfo();case 13:t.next=18;break;case 15:return t.prev=15,t.t0=t["catch"](0),t.abrupt("return");case 18:return t.prev=18,e.saving=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,15,18,21]])})))()},buyAgain:function(){uni.switchTab({url:"/pages/index/index"})},refundDetail:function(){uni.navigateTo({url:"/pages/order/refnd-detail?listNo="+this.listNo})},enrollFace:function(){uni.navigateTo({url:"/pages/member/enroll-face?listNo="+this.listNo})}}};t.default=c},"54f8":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));a("a4d3"),a("e01a"),a("d28b"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0");var i=a("dde1");function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(i["a"])(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,o=!0,d=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){d=!0,n=e},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(d)throw n}}}}},"615b":function(e,t,a){"use strict";var i,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"order-detail-wrapper"},[a("v-uni-view",{staticClass:"van-pull-refresh-blue",on:{refresh:function(t){arguments[0]=t=e.$handleEvent(t),e.loadData.apply(void 0,arguments)}},model:{value:e.isLoadingData,callback:function(t){e.isLoadingData=t},expression:"isLoadingData"}},[e.isLoadingData?e._e():a("div",{staticClass:"order-detail"},[a("section",{staticClass:"order-detail-status"},[a("v-uni-view",[a("v-uni-text",{staticClass:"iconfont icon-more-o"}),a("span",[e._v(e._s(e.orderInfo.orderStatusName))])],1),e.statusInfo?a("div",{staticClass:"order-detail-status-info"},[e._v(e._s(e.statusInfo))]):e._e()],1),e.orderInfo.shouldPay?a("section",{staticClass:"order-detail-countdown"},[a("div",[a("span",{staticClass:"order-detail-countdown-title"},[e._v("剩余支付时间")]),a("span",[e._v(e._s(e.countdownText))])]),a("v-uni-button",{attrs:{type:"price",square:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pay.apply(void 0,arguments)}}},[e._v("继续支付")])],1):e._e(),a("section",{staticClass:"order-detail-action margin-bottom-10"},[a("div",{staticClass:"order-detail-action-total"},[a("div",[a("v-uni-label",[e._v("订单总额")]),a("span",{staticClass:"order-detail-action-total-price"},[a("v-uni-text",[e._v("¥")]),a("span",[e._v(e._s(e.orderInfo.totalMoney))])],1)],1)])]),e.orderInfo.refundStatusName?a("section",{staticClass:"order-detail-refund"},[a("div",[e._v(e._s(e.orderInfo.refundStatusName))]),a("div",{staticClass:"order-detail-refund-action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.refundDetail.apply(void 0,arguments)}}},[a("span",[e._v("查看详情")]),a("v-uni-text",{staticClass:"iconfont icon-arrow"})],1)]):e._e(),e.orderInfo.hasDetail?a("section",e._l(e.orderInfo.details,(function(t,i){return a("div",{key:i,staticClass:"order-detail-list margin-bottom-10"},[a("ul",[a("li",[a("h3",{staticClass:"order-detail-list-title"},[e._v(e._s(t.ticketTypeName))])]),a("li",[a("p",[a("v-uni-label",{staticClass:"order-detail-list-label"},[e._v("使用日期")]),a("span",{staticClass:"order-detail-list-text"},[a("span",[e._v(e._s(e.orderInfo.travelDate))]),t.eTime&&t.eTime!=e.orderInfo.travelDate?a("span",[e._v("至"+e._s(t.eTime))]):e._e()])],1),a("p",[a("v-uni-label",{staticClass:"order-detail-list-label"},[e._v("购买份数")]),a("span",{staticClass:"order-detail-list-text"},[a("v-uni-text",[e._v("￥")]),e._v(e._s(t.reaPrice)+" X "+e._s(t.totalNum)+"份")],1)],1),t.usableQuantity>0?a("p",[a("v-uni-label",{staticClass:"order-detail-list-label"},[e._v("可用数量")]),a("span",{staticClass:"order-detail-list-text"},[e._v(e._s(t.usableQuantity))])],1):e._e()]),a("li",{staticStyle:{"border-bottom":"none"}},[a("p",[a("v-uni-label",{staticClass:"order-detail-list-label"},[e._v("使用方法")]),a("span",{staticClass:"order-detail-list-text"},[a("span",[e._v("凭")]),t.hasTicket?a("span",[e._v("以下")]):e._e(),a("span",[e._v("二维码换腕带卡进场")])])],1),t.hasTicket?a("div",e._l(t.tickets,(function(t,i){return a("div",{key:t.ticketCode,staticClass:"order-detail-code-item",class:{pb16:t.isUsable&&!e.isBarcodeCollapse(t)},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onBarcodeClick(t)}}},[a("div",{staticClass:"order-detail-code-item-angle"},[a("span",{staticClass:"order-detail-code-item-angle-index"},[e._v(e._s(i+1))])]),a("div",{staticClass:"order-detail-code-item-text",class:{"order-detail-code-item-text-disable":!t.isUsable}},[a("span",[e._v("入园凭证：")]),a("span",[e._v(e._s(t.ticketCode))])]),t.isUsable?a("div",{staticClass:"order-detail-code-item-img"},[e.isBarcodeCollapse(t)?a("div",{staticClass:"order-detail-code-item-img-btn"},[a("v-uni-text",{staticClass:"iconfont icon-qr"}),a("span",[e._v("查看二维码")])],1):e._e(),e.isBarcodeCollapse(t)?e._e():a("img",{staticClass:"order-detail-code-item-img-src",attrs:{src:t.qrcode}})]):e._e()])})),0):e._e()])]),e._e(),e._e()])})),0):e._e(),e.changCiOrderDetails.length>0?a("section",{staticClass:"order-detail-list margin-bottom-10"},[a("h3",{staticClass:"order-detail-list-title-gray"},[e._v("场次信息")]),e._l(e.changCiOrderDetails,(function(t,i){return a("ul",{key:i,staticClass:"order-detail-list-reset"},e._l(t.groundChangCis,(function(t,i){return a("li",{key:i},[a("span",{staticClass:"order-detail-list-text"},[e._v(e._s(t.groundName)+"，"+e._s(e.orderInfo.travelDate)+"日"+e._s(t.changCiName)),e._l(t.seats,(function(t,i){return a("span",{key:i},[e._v("，"+e._s(t.seatName))])}))],2)])})),0)}))],2):e._e(),e.orderInfo.tourists&&e.orderInfo.tourists.length>0?a("section",{staticClass:"order-detail-list margin-bottom-10"},[a("h3",{staticClass:"order-detail-list-title-gray"},[e._v("出行人信息")]),a("div",{staticClass:"order-detail-list-tourist-box"},e._l(e.orderInfo.tourists,(function(t,i){return a("div",{key:i,staticClass:"order-detail-list-tourist",class:{"no-border":i==e.orderInfo.tourists.length-1}},[a("v-uni-label",{staticClass:"order-detail-list-label"},[e._v("出行人"+e._s(i+1))]),a("div",{staticStyle:{flex:"1"}},[t.name?a("div",{staticClass:"order-detail-list-tourist-item"},[e._v(e._s(t.name))]):e._e(),t.mobile?a("div",{staticClass:"order-detail-list-tourist-item"},[e._v("手机号码 "+e._s(t.mobile))]):e._e(),t.certNo?a("div",{staticClass:"order-detail-list-tourist-item"},[e._v("身份证 "+e._s(t.certNo))]):e._e()])],1)})),0)]):e._e(),e.orderInfo.hasContact?a("section",{staticClass:"order-detail-list margin-bottom-10"},[a("h3",{staticClass:"order-detail-list-title-gray"},[e._v("联系信息")]),a("ul",{staticClass:"order-detail-list-reset"},[e.orderInfo.contact.contactName?a("li",[a("v-uni-label",{staticClass:"order-detail-list-label"},[e._v("姓名")]),a("span",{staticClass:"order-detail-list-text"},[e._v(e._s(e.orderInfo.contact.contactName))])],1):e._e(),e.orderInfo.contact.contactMobile?a("li",[a("v-uni-label",{staticClass:"order-detail-list-label"},[e._v("联系手机")]),a("span",{staticClass:"order-detail-list-text"},[e._v(e._s(e.orderInfo.contact.contactMobile))])],1):e._e(),e.orderInfo.contact.contactCertNo?a("li",[a("v-uni-label",{staticClass:"order-detail-list-label"},[e._v("身份证")]),a("span",{staticClass:"order-detail-list-text"},[e._v(e._s(e.orderInfo.contact.contactCertNo))])],1):e._e()])]):e._e(),a("section",{staticClass:"order-detail-list"},[a("h3",{staticClass:"order-detail-list-title-gray"},[e._v("订单信息")]),a("ul",{staticClass:"order-detail-list-reset"},[a("li",[a("v-uni-label",{staticClass:"order-detail-list-label"},[e._v("订单编号")]),a("span",{staticClass:"order-detail-list-text"},[e._v(e._s(e.orderInfo.listNo))])],1),a("li",[a("v-uni-label",{staticClass:"order-detail-list-label"},[e._v("下单时间")]),a("span",{staticClass:"order-detail-list-text"},[e._v(e._s(e.orderInfo.cTime))])],1)])]),a("section",{staticClass:"action-button-box"},[e.orderInfo.allowCancel?a("v-uni-button",{staticClass:"plain-button",attrs:{type:"primary",plain:!0,loading:e.saving},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.refund.apply(void 0,arguments)}}},[e._v(e._s(e.refundText))]):e._e(),e.orderInfo.allowCancel?e._e():a("v-uni-button",{staticClass:"plain-button",attrs:{type:"primary",plain:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.buyAgain.apply(void 0,arguments)}}},[e._v("再次预订")]),e.orderInfo.showFace?a("v-uni-button",{staticClass:"plain-button",attrs:{type:"primary",plain:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.enrollFace.apply(void 0,arguments)}}},[e._v("登记人脸")]):e._e()],1)])])],1)},n=[];a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}))},"63ea":function(e,t,a){var i=a("6705");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("d77b91f6",i,!0,{sourceMap:!1,shadowMode:!1})},6705:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * scss预处理 内置的常用样式变量\r\n * 后期项目会考虑使用scss\r\n*/\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pb16[data-v-074d29e2]{padding-bottom:16px}.order-detail-wrapper[data-v-074d29e2]{background-color:#19a0f0}.order-detail[data-v-074d29e2]{background-color:#c0c7cf;padding-bottom:10px;min-height:calc(100vh - 106px);margin-bottom:50px}.order-detail-status[data-v-074d29e2]{background-color:#19a0f0;padding:0 15px 12px;color:#fff;word-break:break-all}.order-detail-status i[data-v-074d29e2]{margin-right:10px;font-size:16px}.order-detail-status h1[data-v-074d29e2]{font-size:23px;font-weight:400}.order-detail-status-info[data-v-074d29e2]{padding-left:22px;font-size:12px}.order-detail-countdown[data-v-074d29e2]{display:-webkit-box;display:-webkit-flex;display:flex;padding-left:15px;height:45px;line-height:45px;background-color:#fefcf3;font-size:16px;color:#481a03;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.order-detail-countdown-title[data-v-074d29e2]{margin-left:0;margin-right:6px;font-weight:400}.order-detail-countdown span[data-v-074d29e2]{font-size:18px}.order-detail-countdown uni-button[data-v-074d29e2]{height:45px;line-height:45px;width:30%;font-size:18px;padding:0}.order-detail-action[data-v-074d29e2]{background:#fff;overflow:hidden}.order-detail-action-total[data-v-074d29e2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:54px;padding-left:15px;padding-right:15px}.order-detail-action-total uni-label[data-v-074d29e2]{margin-right:15px}.order-detail-action-total-price[data-v-074d29e2]{color:#f40}.order-detail-action-total-price span[data-v-074d29e2]{font-size:21px}.order-detail-action-button[data-v-074d29e2]{padding-bottom:15px;padding-left:10px;padding-right:10px}.order-detail-action-button uni-button[data-v-074d29e2]{border:#099fde solid 1px;border-radius:5px;font-size:16px;width:100%;color:#099fde}.order-detail-textbutton[data-v-074d29e2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:13px;line-height:.0028px;color:#099fde;text-decoration:none}.order-detail-textbutton i[data-v-074d29e2]{font-size:10px}.order-detail-buy[data-v-074d29e2]{height:40px;background-color:#fff;border-top:1px solid #ececec}.order-detail-buy i[data-v-074d29e2]{margin-right:2px}.order-detail-info[data-v-074d29e2]{padding:11px 14px 9px 15px;background:#fffdf2}.order-detail-info p[data-v-074d29e2]{line-height:18px;color:#481a03;font-size:13px}.order-detail-refund[data-v-074d29e2]{border-radius:5px;padding:10px 15px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-content:center;align-content:center;background-color:#fff;font-size:13px;margin:0 6px 10px}.order-detail-refund-action span[data-v-074d29e2]{display:inline-block;vertical-align:middle}.order-detail-refund-action i[data-v-074d29e2]{vertical-align:middle;margin-top:-2px}.order-detail-list[data-v-074d29e2]{border-radius:5px;margin-right:6px;margin-left:6px;background-color:#fff;box-shadow:0 1px 0 0 #a3aab2;overflow:hidden}.order-detail-list ul[data-v-074d29e2]{border-bottom:1px solid #ececec;padding-bottom:10px}.order-detail-list li[data-v-074d29e2]{margin-left:15px;padding:6px 15px 5px 0;line-height:29px;position:relative;border-bottom:1px solid #ececec;list-style:none}.order-detail-list-title[data-v-074d29e2]{line-height:18px;padding:8px 0 4px;font-size:16px;color:#000;font-weight:400}.order-detail-list-title-gray[data-v-074d29e2]{position:relative;padding:10px 38px 8px 15px;font-size:14px;line-height:1.3;color:grey;background:#eff0f2}.order-detail-list-label[data-v-074d29e2]{color:#666;display:table-cell;width:85px;font-size:14px;vertical-align:top;line-height:22px;padding:4px 0}.order-detail-list-text[data-v-074d29e2]{display:table-cell;word-break:break-all;padding-top:5px;line-height:21px}.order-detail-list-reset[data-v-074d29e2]{padding-bottom:0!important}.order-detail-list-reset li[data-v-074d29e2]{padding-top:10px;padding-bottom:10px}.order-detail-list-tourist[data-v-074d29e2]{padding:5px 15px 5px 0;margin-left:15px;line-height:16px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #ececec}.order-detail-list-tourist-box[data-v-074d29e2]{padding:5px 0}.order-detail-list-tourist-item[data-v-074d29e2]{display:inline-block;vertical-align:middle;width:100%;font-size:12px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.order-detail-rules[data-v-074d29e2]{height:37px}.order-detail-rules i[data-v-074d29e2]{margin-left:2px}.order-detail-rules i[data-v-074d29e2]::before{-webkit-transition:.3s;transition:.3s;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.order-detail-code-item[data-v-074d29e2]{background-color:#f7f9fa;margin-bottom:10px;border-radius:6px;position:relative;overflow:hidden}.order-detail-code-item-angle[data-v-074d29e2]{width:0;height:0;border-top:30px solid #e9edf0;border-left:30px solid transparent;position:absolute;right:0;top:0;color:#6d6e6f;text-align:center;line-height:30px;font-size:10px}.order-detail-code-item-angle-index[data-v-074d29e2]{position:absolute;left:-24px;top:-35px;width:30px;height:30px}.order-detail-code-item-text[data-v-074d29e2]{padding:16px;font-size:14px;line-height:14px}.order-detail-code-item-text-disable[data-v-074d29e2]{color:#dededf;text-decoration:line-through;font-size:16px}.order-detail-code-item-img-btn[data-v-074d29e2]{color:#099fde;font-size:14px;line-height:.0028px;padding:0 16px 16px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order-detail-code-item-img-btn i[data-v-074d29e2]{margin-right:5px}.order-detail-code-item-img-border[data-v-074d29e2]{margin:0 16px}.order-detail-code-item-img-src[data-v-074d29e2]{display:block;margin:auto;background-color:#fff;border-radius:4px;width:200px}.action-button-box[data-v-074d29e2]{position:fixed;bottom:0;left:0;height:50px;width:100%;padding:0 10px;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.action-button-box .button[data-v-074d29e2]{margin-left:10px}.no-border[data-v-074d29e2]{border:none}.plain-button[data-v-074d29e2]{margin-left:10px}',""]),e.exports=t},"7ae3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={noneToast:function(e){uni.showToast({title:e,icon:"none"})}};t.default=i},acbb:function(e,t,a){"use strict";a.r(t);var i=a("48ff"),r=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=r.a},b6802:function(e,t,a){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}a.d(t,"a",(function(){return i}))},dde1:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("a630"),a("fb6a"),a("d3b7"),a("25f0"),a("3ca3");var i=a("b6802");function r(e,t){if(e){if("string"===typeof e)return Object(i["a"])(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(i["a"])(e,t):void 0}}},dfba:function(e,t,a){"use strict";var i=a("63ea"),r=a.n(i);r.a},ee21:function(e,t,a){"use strict";a.r(t);var i=a("615b"),r=a("acbb");for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);a("dfba");var o,d=a("f0c5"),s=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"074d29e2",null,!1,i["a"],o);t["default"]=s.exports}}]);