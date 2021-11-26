"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./HTLogo.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTLogo = function HTLogo(_ref) {
  var logo = _ref.logo;
  return /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    alt: "logo"
  });
};

var _default = HTLogo;
exports.default = _default;