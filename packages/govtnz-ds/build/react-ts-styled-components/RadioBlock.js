"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  position: relative;\n  min-height: 40px;\n  margin-bottom: 10px;\n  padding: 0 0 0 40px;\n  clear: left;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :last-child,\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-right: 20px;\n    float: left;\n    clear: none;\n  }\n  margin-right: 0;\n  float: none;\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  position: relative;\n  min-height: 40px;\n  margin-bottom: 10px;\n  padding: 0 0 0 40px;\n  clear: left;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :last-child,\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-right: 20px;\n    float: left;\n    clear: none;\n  }\n  margin-right: 0;\n  float: none;\n  margin-top: 0px;\n"])));
var StyledInput = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  margin-top: 0px;\n"], ["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  margin-top: 0px;\n"])));
var StyledLabel = styled_components_1.default.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  margin-bottom: 0;\n  padding: 8px 15px 5px;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  ::before {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    background: transparent;\n  }\n  ::after {\n    content: \"\";\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 0;\n    height: 0;\n    border: 10px solid currentColor;\n    border-radius: 50%;\n    opacity: 0;\n    background: currentColor;\n  }\n  :focus + .g-radios__label::before,\n  :focus + .g-radios__label::before {\n    outline: 3px solid transparent;\n    outline-offset: 3px;\n    box-shadow: 0 0 0 4px #ffbf47;\n  }\n  :checked + .g-radios__label::after,\n  :checked + .g-radios__label::after {\n    opacity: 1;\n  }\n  :disabled + .g-radios__label,\n  :disabled + .g-radios__label {\n    cursor: default;\n  }\n  :disabled + .g-radios__label,\n  :disabled + .g-radios__label {\n    opacity: 0.5;\n  }\n  margin-top: 0px;\n"], ["\n  display: inline-block;\n  margin-bottom: 0;\n  padding: 8px 15px 5px;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  ::before {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    background: transparent;\n  }\n  ::after {\n    content: \"\";\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 0;\n    height: 0;\n    border: 10px solid currentColor;\n    border-radius: 50%;\n    opacity: 0;\n    background: currentColor;\n  }\n  :focus + .g-radios__label::before,\n  :focus + .g-radios__label::before {\n    outline: 3px solid transparent;\n    outline-offset: 3px;\n    box-shadow: 0 0 0 4px #ffbf47;\n  }\n  :checked + .g-radios__label::after,\n  :checked + .g-radios__label::after {\n    opacity: 1;\n  }\n  :disabled + .g-radios__label,\n  :disabled + .g-radios__label {\n    cursor: default;\n  }\n  :disabled + .g-radios__label,\n  :disabled + .g-radios__label {\n    opacity: 0.5;\n  }\n  margin-top: 0px;\n"])));
var StyledDiv2 = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-top: 0px;\n"], ["\n  display: block;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-top: 0px;\n"])));
var RadioBlock = function (_a) {
    var errorId = _a.errorId, id = _a.id, hintId = _a.hintId, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, checked = _a.checked, onChange = _a.onChange, ref = _a.ref, label = _a.label, hint = _a.hint;
    return (react_1.default.createElement(StyledDiv, { errorId: errorId },
        " ",
        react_1.default.createElement(StyledInput, { "aria-describedby": hintId, id: id, name: name, type: "radio", disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange, ref: ref }),
        " ",
        react_1.default.createElement(StyledLabel, { htmlFor: id },
            " ",
            label !== undefined ? (label) : (react_1.default.createElement(react_1.default.Fragment, null, "Label text")),
            " "),
        " ",
        hintId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
            " ",
            react_1.default.createElement(StyledDiv2, { id: hintId },
                " ",
                hint !== undefined ? (hint) : (react_1.default.createElement(react_1.default.Fragment, null, "Hint text")),
                " "),
            " ")) : (""),
        " "));
};
exports.default = RadioBlock;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=RadioBlock.js.map