"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

require("./HTInputText.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var HTInputText = function HTInputText(props) {
  var startIconText = props.startIconText,
      startIconImage = props.startIconImage,
      endIcon = props.endIcon,
      startIconTextColor = props.startIconTextColor,
      placeholder = props.placeholder,
      iconButton = props.iconButton,
      iconButtonColor = props.iconButtonColor,
      iconButtonClick = props.iconButtonClick,
      onChange = props.onChange,
      error = props.error,
      key = props.key,
      success = props.success,
      name = props.name,
      value = props.value,
      onKeyPress = props.onKeyPress,
      label = props.label,
      endText = props.endText,
      type = props.type,
      onBlur = props.onBlur,
      disabled = props.disabled,
      max = props.max,
      min = props.min,
      onFocus = props.onFocus;
  return /*#__PURE__*/_react.default.createElement(_core.TextField, {
    onKeyPress: onKeyPress,
    onChange: onChange,
    name: name,
    type: type,
    onBlur: onBlur,
    onFocus: onFocus,
    disabled: disabled,
    key: key,
    value: value,
    fullWidth: true,
    className: "ht-input-text ".concat(success ? 'success' : ''),
    error: error,
    placeholder: placeholder,
    InputProps: {
      startAdornment: _typeof(startIconImage) === 'object' || typeof startIconText === 'string' || typeof label === 'string' ? /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
        position: "start"
      }, startIconText ? /*#__PURE__*/_react.default.createElement(_core.Icon, {
        color: startIconTextColor
      }, startIconText) : _typeof(startIconImage) === 'object' ? /*#__PURE__*/_react.default.createElement("img", {
        src: startIconImage.src,
        width: "24px",
        height: "24px",
        alt: startIconImage.alt,
        style: {
          paddingBottom: 5
        }
      }) : typeof label === 'string' && label) : null,
      endAdornment: typeof endIcon === 'string' || typeof iconButton === 'string' || typeof endText === 'string' ? /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
        position: "end"
      }, typeof endIcon === 'string' ? /*#__PURE__*/_react.default.createElement(_core.Icon, {
        color: "primary"
      }, endIcon) : typeof iconButton === 'string' ? /*#__PURE__*/_react.default.createElement(_core.IconButton, {
        onClick: iconButtonClick
      }, /*#__PURE__*/_react.default.createElement(_core.Icon, {
        color: iconButtonColor
      }, iconButton)) : typeof endText === 'string' && endText) : null,
      inputProps: {
        max: max,
        min: min
      }
    }
  });
};

var _default = HTInputText;
exports.default = _default;