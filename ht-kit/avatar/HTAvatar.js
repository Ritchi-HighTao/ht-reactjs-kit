"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

require("./HTAvatar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTAvatar = function HTAvatar(_ref) {
  var image = _ref.image,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_core.Badge, {
    badgeContent: /*#__PURE__*/_react.default.createElement(_core.Icon, {
      className: "ht-avatar-icon",
      color: "primary"
    }, "arrow_drop_down"),
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    overlap: "circle"
  }, /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    alt: "avatar",
    src: image
  })));
};

var _default = HTAvatar;
exports.default = _default;