"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTClickAway = function HTClickAway(_ref) {
  var children = _ref.children,
      onClickAway = _ref.onClickAway;
  return /*#__PURE__*/_react.default.createElement(_core.ClickAwayListener, {
    onClickAway: onClickAway
  }, children);
};

var _default = HTClickAway;
exports.default = _default;