"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

require("./HTFloatingButton.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTFloatingButton = function HTFloatingButton(_ref) {
  var icon = _ref.icon,
      onClick = _ref.onClick,
      size = _ref.size;
  return /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    size: size,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_core.Icon, null, icon));
};

var _default = HTFloatingButton;
exports.default = _default;