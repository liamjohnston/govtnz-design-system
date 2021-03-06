"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Textarea = function Textarea(_ref) {
  var id = _ref.id,
      describedById = _ref.describedById,
      name = _ref.name,
      required = _ref.required,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      rows = _ref.rows,
      cols = _ref.cols,
      autoFocus = _ref.autoFocus,
      spellCheck = _ref.spellCheck,
      autoComplete = _ref.autoComplete,
      maxLength = _ref.maxLength,
      value = _ref.value,
      onChange = _ref.onChange,
      ref = _ref.ref;
  return /*#__PURE__*/_react["default"].createElement("textarea", {
    "aria-describedby": describedById,
    className: "g-textarea",
    id: id,
    name: name,
    rows: rows,
    required: required,
    disabled: disabled !== undefined ? disabled.toString() === "true" : undefined,
    readOnly: readOnly,
    cols: cols,
    autoFocus: autoFocus,
    spellCheck: spellCheck,
    autoComplete: autoComplete,
    maxLength: maxLength,
    value: value,
    onChange: onChange,
    ref: ref
  });
};

var _default = Textarea;
exports["default"] = _default;