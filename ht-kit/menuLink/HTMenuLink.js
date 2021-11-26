"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./HTMenuLink.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTMenuLink = function HTMenuLink(_ref) {
  var label = _ref.label,
      to = _ref.to,
      activeOnlyWhenExact = _ref.activeOnlyWhenExact,
      disabled = _ref.disabled;
  var match = (0, _reactRouterDom.useRouteMatch)({
    path: to,
    exact: activeOnlyWhenExact
  });

  var linkClass = function linkClass() {
    if (disabled) return 'disabled';
    return match ? 'active' : '';
  };

  var LinkContent = function LinkContent() {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "ht-menu-link__link-block"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "link-block__text-block"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "text-block__text ".concat(linkClass())
    }, label)), /*#__PURE__*/_react.default.createElement("span", {
      className: "link-block__radio ".concat(linkClass())
    }));
  };

  return disabled ? /*#__PURE__*/_react.default.createElement("div", {
    className: "ht-menu-link"
  }, /*#__PURE__*/_react.default.createElement(LinkContent, null)) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "ht-menu-link",
    to: to
  }, /*#__PURE__*/_react.default.createElement(LinkContent, null));
};

var _default = HTMenuLink;
exports.default = _default;