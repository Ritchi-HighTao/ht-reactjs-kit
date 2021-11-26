"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _core.createTheme)({
  palette: {
    primary: {
      main: '#17963E'
    },
    secondary: {
      main: '#707070',
      light: '#FFFFFF'
    },
    warning: {
      main: '#cddc39'
    },
    popo: {
      main: '#000000'
    }
  }
});

var HTTheme = function HTTheme(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_core.ThemeProvider, {
    theme: theme
  }, children);
};

var _default = HTTheme;
exports.default = _default;