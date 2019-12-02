"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Textarea = function Textarea(_ref) {
  var moreDetail = _ref.moreDetail,
      moreDetailHint = _ref.moreDetailHint,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      rows = _ref.rows,
      cols = _ref.cols,
      autoFocus = _ref.autoFocus,
      spellCheck = _ref.spellCheck,
      autoComplete = _ref.autoComplete,
      maxLength = _ref.maxLength,
      value = _ref.value,
      onChange = _ref.onChange;
  return _react["default"].createElement("div", {
    className: "g-textarea-form-group"
  }, _react["default"].createElement("label", {
    className: "g-textarea-label",
    htmlFor: moreDetail
  }, "Can you provide more detail?"), _react["default"].createElement("span", {
    className: "g-textarea-hint",
    id: moreDetailHint
  }, "Don't include personal or financial information, eg your National Insurance number or credit card details."), _react["default"].createElement("textarea", {
    "aria-describedby": moreDetailHint,
    className: "g-textarea",
    id: moreDetail,
    name: name,
    rows: rows,
    disabled: disabled,
    readOnly: readOnly,
    cols: cols,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    autoComplete: autoComplete,
    maxLength: maxLength,
    value: value,
    onChange: onChange
  }));
};

var _default = Textarea;
exports["default"] = _default;