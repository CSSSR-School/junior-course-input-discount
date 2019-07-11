"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _indexModule = _interopRequireDefault(require("./index.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Discount = function Discount(_ref) {
  var title = _ref.title,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
    className: _indexModule.default.title
  }, title), _react.default.createElement("div", {
    className: _indexModule.default.wrapper
  }, "\u043E\u0442 ", _react.default.createElement("input", {
    className: _indexModule.default.discountValue,
    name: name,
    value: value,
    onChange: onChange
  }), "%"));
};

Discount.propTypes = {
  value: pt.number.isRequired,
  onChange: pt.func.isRequired,
  name: pt.string.isRequired,
  title: pt.string.isRequired
};
var _default = Discount;
exports.default = _default;