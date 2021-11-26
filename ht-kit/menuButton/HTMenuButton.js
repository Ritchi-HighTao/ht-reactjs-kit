"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./HTMenuButton.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTMenuButton = function HTMenuButton(_ref) {
  var onClick = _ref.onClick,
      active = _ref.active,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "ht-menu-button ".concat(className || ''),
    htmlFor: "ht-menu-button__input"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: active ? 'active' : '',
    onClick: onClick,
    type: "checkbox",
    id: "ht-menu-button__input"
  }), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null));
};

var _default = HTMenuButton;
exports.default = _default;