"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./HTButton.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTButton = function HTButton(props) {
  var children = props.children,
      onClick = props.onClick,
      outlined = props.outlined,
      secondary = props.secondary,
      className = props.className,
      disabled = props.disabled;

  var isOutlined = function isOutlined() {
    return !outlined ? '' : 'ht-button__outlined';
  };

  var Color = function Color() {
    if (!secondary) {
      return '';
    }

    return outlined ? 'ht-button__outlined-secondary' : 'ht-button__secondary';
  };

  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    type: "button",
    className: "ht-button ".concat(isOutlined(), " ").concat(Color(), " ").concat(className || '', " ").concat(!disabled ? '' : 'disabled', " ")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "ht-button__content"
  }, children));
};

var _default = HTButton;
exports.default = _default;