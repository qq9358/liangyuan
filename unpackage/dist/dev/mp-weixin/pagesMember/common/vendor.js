(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesMember/common/vendor"],{

/***/ 115:
/*!***********************************************************!*\
  !*** D:/Code/Self/HBuilder/liangyuan/utils/validRules.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _validator = _interopRequireDefault(__webpack_require__(/*! ./validator.js */ 114));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//下拉选项 = 1,单选按钮 = 2,手机号码 = 3,身份证号码 = 4,数值类型 = 5,字符串 = 6,年龄 = 7
var _default = {
  getValidRules: function getValidRules(activityBindParamDto) {
    var rules = [
    {
      rule: "required" }];


    if (activityBindParamDto.validTypeId == "6") {
      if (activityBindParamDto.minValue > 0) {
        rules.push({
          rule: "minLength:" + activityBindParamDto.minValue });

      }
      if (activityBindParamDto.maxValue > 0) {
        rules.push({
          rule: "maxLength:" + activityBindParamDto.maxValue });

      }
    }

    if (activityBindParamDto.validTypeId == "5") {
      if (activityBindParamDto.minValue > 0) {
        rules.push({
          rule: "minNum:" + activityBindParamDto.minValue });

      }
      if (activityBindParamDto.maxValue > 0) {
        rules.push({
          rule: "maxNum:" + activityBindParamDto.maxValue });

      }
    }

    if (activityBindParamDto.validTypeId == "4") {
      rules.push({
        rule: "isIdCard" });

    }

    if (activityBindParamDto.validTypeId == "3") {
      rules.push({
        rule: "isMobile" });

    }

    return rules;
  },
  validParam: function validParam(param) {
    var rules = this.getValidRules(param);
    var result = (0, _validator.default)([
    {
      value: param.vmodel,
      name: param.label,
      rules: rules }]);


    param.error = !result.success;
    if (!result.success) {
      return result.message;
    } else {
      return "";
    }
  } };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesMember/common/vendor.js.map