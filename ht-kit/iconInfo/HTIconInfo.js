"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./HTIconInfo.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTIconInfo = function HTIconInfo(_ref) {
  var onClick = _ref.onClick,
      active = _ref.active;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "ht-icon-info ".concat(active ? 'active' : ''),
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(-1059 -168)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(1059 168)",
    strokeWidth: "1"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "16",
    stroke: "none"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "15.5",
    fill: "none"
  })), /*#__PURE__*/_react.default.createElement("g", {
    transform: "translate(1070 174)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M39.25,16.881l-.264,1.081q-1.19.47-1.9.715a5.008,5.008,0,0,1-1.646.246,3.287,3.287,0,0,1-2.24-.7,2.274,2.274,0,0,1-.8-1.785,6.312,6.312,0,0,1,.06-.859q.061-.439.193-.991l.991-3.509q.132-.5.223-.955a4.152,4.152,0,0,0,.09-.822,1.272,1.272,0,0,0-.277-.938,1.567,1.567,0,0,0-1.06-.265,2.778,2.778,0,0,0-.788.12c-.27.08-.5.157-.694.228L31.4,7.364q.974-.4,1.864-.679A5.575,5.575,0,0,1,34.953,6.4a3.206,3.206,0,0,1,2.206.691,2.294,2.294,0,0,1,.775,1.8c0,.152-.017.421-.053.805a5.385,5.385,0,0,1-.2,1.058L36.7,14.248a9.282,9.282,0,0,0-.217.963,4.955,4.955,0,0,0-.1.817,1.177,1.177,0,0,0,.311.949,1.755,1.755,0,0,0,1.08.252,3.118,3.118,0,0,0,.816-.126A4.565,4.565,0,0,0,39.25,16.881ZM39.5,2.21a2.045,2.045,0,0,1-.691,1.556,2.351,2.351,0,0,1-1.663.644,2.377,2.377,0,0,1-1.671-.644,2.04,2.04,0,0,1-.7-1.556,2.061,2.061,0,0,1,.7-1.562,2.467,2.467,0,0,1,3.334,0A2.065,2.065,0,0,1,39.5,2.21Z",
    transform: "translate(-31.139)"
  }))));
};

var _default = HTIconInfo;
exports.default = _default;