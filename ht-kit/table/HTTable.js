"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _xDataGrid = require("@mui/x-data-grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTTable = function HTTable(props) {
  return /*#__PURE__*/_react.default.createElement(_xDataGrid.DataGrid, props);
};

var _default = HTTable;
exports.default = _default;