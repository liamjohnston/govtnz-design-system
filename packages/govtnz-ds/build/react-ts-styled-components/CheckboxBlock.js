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
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  position: relative;\n  min-height: 40px;\n  margin-bottom: 16px;\n  padding: 0 0 0 40px;\n  clear: left;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :last-child,\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  position: relative;\n  min-height: 40px;\n  margin-bottom: 16px;\n  padding: 0 0 0 40px;\n  clear: left;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  :last-child,\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  margin-top: 0px;\n"])));
var StyledInput = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  margin-top: 0px;\n"], ["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  margin-top: 0px;\n"])));
var StyledLabel = styled_components_1.default.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    color: #000000;\n  }\n  display: inline-block;\n  margin-bottom: 0;\n  padding: 8px 15px 5px;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  ::before {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n    border: 2px solid currentColor;\n    background: transparent;\n  }\n  ::after {\n    content: \"\";\n    position: absolute;\n    top: 11px;\n    left: 9px;\n    width: 18px;\n    height: 7px;\n    -webkit-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    border: solid;\n    border-width: 0 0 5px 5px;\n    border-top-color: transparent;\n    opacity: 0;\n    background: transparent;\n  }\n  :focus + .g-checkboxes__label::before,\n  :focus + .g-checkboxes__label::before {\n    outline: 3px solid transparent;\n    outline-offset: 3px;\n    box-shadow: 0 0 0 3px #ffbf47;\n  }\n  :checked + .g-checkboxes__label::after,\n  :checked + .g-checkboxes__label::after {\n    opacity: 1;\n  }\n  :disabled + .g-checkboxes__label,\n  :disabled + .g-checkboxes__label {\n    cursor: default;\n  }\n  :disabled + .g-checkboxes__label,\n  :disabled + .g-checkboxes__label {\n    opacity: 0.5;\n  }\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    color: #000000;\n  }\n  display: inline-block;\n  margin-bottom: 0;\n  padding: 8px 15px 5px;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  ::before {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 40px;\n    height: 40px;\n    border: 2px solid currentColor;\n    background: transparent;\n  }\n  ::after {\n    content: \"\";\n    position: absolute;\n    top: 11px;\n    left: 9px;\n    width: 18px;\n    height: 7px;\n    -webkit-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    border: solid;\n    border-width: 0 0 5px 5px;\n    border-top-color: transparent;\n    opacity: 0;\n    background: transparent;\n  }\n  :focus + .g-checkboxes__label::before,\n  :focus + .g-checkboxes__label::before {\n    outline: 3px solid transparent;\n    outline-offset: 3px;\n    box-shadow: 0 0 0 3px #ffbf47;\n  }\n  :checked + .g-checkboxes__label::after,\n  :checked + .g-checkboxes__label::after {\n    opacity: 1;\n  }\n  :disabled + .g-checkboxes__label,\n  :disabled + .g-checkboxes__label {\n    cursor: default;\n  }\n  :disabled + .g-checkboxes__label,\n  :disabled + .g-checkboxes__label {\n    opacity: 0.5;\n  }\n  margin-top: 0px;\n"])));
var StyledDiv2 = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  color: #595959;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: -5px;\n  display: block;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-top: 0px;\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  display: block;\n  margin-bottom: 15px;\n  color: #595959;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  margin-top: -5px;\n  display: block;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-top: 0px;\n"])));
var StyledDiv3 = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var StyledSpan = styled_components_1.default.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 0px;\n"], ["\n  margin-top: 0px;\n"])));
var CheckboxBlock = function (_a) {
    var errorId = _a.errorId, id = _a.id, hintId = _a.hintId, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, checked = _a.checked, onChange = _a.onChange, ref = _a.ref, label = _a.label, hint = _a.hint, error = _a.error;
    return (react_1.default.createElement(StyledDiv, { errorId: errorId },
        " ",
        react_1.default.createElement(StyledInput, { "aria-describedby": hintId, id: id, type: "checkbox", disabled: disabled !== undefined ? disabled.toString() === "true" : undefined, readOnly: readOnly, autoFocus: autoFocus, name: name, value: value, checked: checked, onChange: onChange, ref: ref }),
        " ",
        react_1.default.createElement(StyledLabel, { htmlFor: id }, label !== undefined ? (label) : (react_1.default.createElement(react_1.default.Fragment, null, "Label text"))),
        " ",
        hintId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
            " ",
            react_1.default.createElement(StyledDiv2, { id: hintId },
                " ",
                hint !== undefined ? (hint) : (react_1.default.createElement(react_1.default.Fragment, null, "Hint text")),
                " "),
            " ")) : (""),
        " ",
        errorId !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
            " ",
            react_1.default.createElement(StyledDiv3, { id: errorId },
                " ",
                react_1.default.createElement(StyledSpan, null, " Error: "),
                " ",
                error !== undefined ? (error) : (react_1.default.createElement(react_1.default.Fragment, null, "Error text")),
                " "),
            " ")) : (""),
        " "));
};
exports.default = CheckboxBlock;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=CheckboxBlock.js.map