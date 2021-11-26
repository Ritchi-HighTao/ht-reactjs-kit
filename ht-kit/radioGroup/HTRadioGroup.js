"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

require("./HTRadioGroup.scss");

var _HTRadioButton = _interopRequireDefault(require("../radio/HTRadioButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTRadioGroup = function HTRadioGroup(_ref) {
  var values = _ref.values,
      defaultValue = _ref.defaultValue;
  return /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    component: "fieldset"
  }, /*#__PURE__*/_react.default.createElement(_core.RadioGroup, {
    defaultValue: defaultValue
  }, values.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_core.FormControlLabel, {
      key: item,
      className: "ht-radio-form-label",
      value: item,
      control: /*#__PURE__*/_react.default.createElement(_HTRadioButton.default, null)
    });
  })));
};

var _default = HTRadioGroup;
exports.default = _default;