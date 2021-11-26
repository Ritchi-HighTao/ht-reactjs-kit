"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./HTButtonAuthentification.scss");

var _HTButton = _interopRequireDefault(require("../button/HTButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTButtonAuthentification = function HTButtonAuthentification(_ref) {
  var className = _ref.className,
      googleClick = _ref.googleClick,
      fbClick = _ref.fbClick,
      linkedinClick = _ref.linkedinClick,
      googleImg = _ref.googleImg,
      fbImg = _ref.fbImg,
      linkedinImg = _ref.linkedinImg;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ht-button-authentification ".concat(className || '')
  }, /*#__PURE__*/_react.default.createElement(_HTButton.default, {
    onClick: googleClick,
    className: "ht-button-authentification__google"
  }, /*#__PURE__*/_react.default.createElement("img", {
    width: "20",
    height: "20",
    src: googleImg,
    alt: "google"
  }), "Google"), /*#__PURE__*/_react.default.createElement(_HTButton.default, {
    onClick: fbClick,
    className: "ht-button-authentification__facebook"
  }, /*#__PURE__*/_react.default.createElement("img", {
    width: "20",
    height: "20",
    src: fbImg,
    alt: "facebook"
  }), "Facebook"), /*#__PURE__*/_react.default.createElement(_HTButton.default, {
    onClick: linkedinClick,
    className: "ht-button-authentification__linkedin"
  }, /*#__PURE__*/_react.default.createElement("img", {
    width: "20",
    height: "20",
    src: linkedinImg,
    alt: "linkedin"
  }), "LinkedIn"));
};

var _default = HTButtonAuthentification;
exports.default = _default;