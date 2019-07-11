"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Discount = void 0;

var _react = _interopRequireDefault(require("react"));

var _indexModule = _interopRequireDefault(require("./index.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Discount = function Discount() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
    className: _indexModule.default.title
  }, "\u0421\u043A\u0438\u0434\u043A\u0430"), _react.default.createElement("div", {
    className: _indexModule.default.wrapper
  }, "\u043E\u0442 ", _react.default.createElement("input", {
    className: _indexModule.default.discountValue,
    placeholder: "30"
  }), "%"));
};

exports.Discount = Discount;