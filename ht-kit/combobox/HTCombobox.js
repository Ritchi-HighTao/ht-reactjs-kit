"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

require("./HTCombobox.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HTCombobox = function HTCombobox(_ref) {
  var label = _ref.label,
      onChange = _ref.onChange,
      items = _ref.items,
      freeSolo = _ref.freeSolo,
      blurOnSelect = _ref.blurOnSelect,
      multiple = _ref.multiple,
      placeholder = _ref.placeholder,
      inputClass = _ref.inputClass,
      values = _ref.values,
      defaultValue = _ref.defaultValue,
      name = _ref.name,
      onBlur = _ref.onBlur,
      inputValue = _ref.inputValue,
      getOptionLabel = _ref.getOptionLabel,
      getOptionDisabled = _ref.getOptionDisabled,
      _onDelete = _ref.onDelete,
      disableClearable = _ref.disableClearable,
      onInputChange = _ref.onInputChange,
      clearOnBlur = _ref.clearOnBlur,
      emptyText = _ref.emptyText;
  return /*#__PURE__*/_react.default.createElement(_lab.Autocomplete, {
    multiple: multiple,
    noOptionsText: emptyText || 'Introuvable !',
    inputValue: inputValue,
    value: values,
    getOptionLabel: getOptionLabel,
    options: items,
    clearOnBlur: clearOnBlur,
    openOnFocus: true,
    defaultValue: defaultValue,
    blurOnSelect: blurOnSelect,
    onBlur: onBlur,
    onInputChange: onInputChange,
    fullWidth: true,
    getOptionDisabled: getOptionDisabled,
    freeSolo: freeSolo,
    onChange: onChange,
    disableClearable: disableClearable,
    renderTags: function renderTags(value) {
      return value.map(function (option) {
        return /*#__PURE__*/_react.default.createElement(_core.Chip, {
          key: option.id,
          onDelete: function onDelete() {
            return _onDelete(option);
          },
          style: {
            marginBottom: 8,
            marginRight: 5
          },
          variant: "outlined",
          label: option.name
        });
      });
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react.default.createElement(_core.TextField, _extends({}, params, {
        label: label,
        fullWidth: true,
        name: name,
        placeholder: placeholder,
        className: inputClass
      }));
    }
  });
};

var _default = HTCombobox;
exports.default = _default;