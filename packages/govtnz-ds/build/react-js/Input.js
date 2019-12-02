"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  width: {
    "2": "g-input--width-2",
    "3": "g-input--width-3",
    "4": "g-input--width-4",
    "5": "g-input--width-5",
    "10": "g-input--width-10",
    "20": "g-input--width-20",
    "30": "g-input--width-30"
  }
};

var Input = function Input(_ref) {
  var width = _ref.width,
      error = _ref.error,
      fakeFocus = _ref.fakeFocus,
      inputId = _ref.inputId,
      describedBy = _ref.describedBy,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      spellCheck = _ref.spellCheck,
      maxLength = _ref.maxLength,
      autoComplete = _ref.autoComplete,
      onChange = _ref.onChange;
  return _react["default"].createElement("input", {
    "aria-describedby": describedBy,
    className: "g-input".concat(constants.width[width] !== undefined ? " " + constants.width[width] : "").concat(error ? " g-input--error" : "").concat(fakeFocus ? " :focus" : ""),
    id: inputId,
    name: name,
    type: "text",
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    spellCheck: spellCheck,
    maxLength: maxLength,
    autoComplete: autoComplete,
    onChange: onChange
  });
};

var _default = Input;
exports["default"] = _default;