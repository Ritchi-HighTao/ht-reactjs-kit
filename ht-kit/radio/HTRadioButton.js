"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

require("./HTRadioButton.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HTRadioButton = function HTRadioButton(props) {
  return /*#__PURE__*/_react.default.createElement(_core.Radio, _extends({
    disableRipple: true,
    className: "ht-radio-button",
    checkedIcon: /*#__PURE__*/_react.default.createElement("span", {
      className: "ht-radio-button__icon ht-radio-button__checkedIcon"
    }),
    icon: /*#__PURE__*/_react.default.createElement("span", {
      className: "ht-radio-button__icon"
    })
  }, props));
};

var _default = HTRadioButton;
exports.default = _default;