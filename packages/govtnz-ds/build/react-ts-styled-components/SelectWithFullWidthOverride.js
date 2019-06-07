"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled = __importStar(require("styled-components"));
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n"], ["\n  margin-bottom: 20px;\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n  :last-of-type {\n    margin-bottom: 0;\n  }\n  padding: 0;\n  border: 0;\n  margin-bottom: 5px;\n"])));
var StyledLabel = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #2a2a2a;\n  display: block;\n  margin-bottom: 5px;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n"])));
var StyledSelect = styled.select(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  max-width: 100%;\n  height: auto;\n  padding: 0.4rem 2.5rem 0.5rem 0.6rem;\n  border: 1px solid #000000;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background-repeat: no-repeat;\n  border-radius: 0;\n  background-position: right 0.7em top 50%;\n  background-size: 1rem auto;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%228.5%22%20viewBox%3D%220%200%2016%2010.5%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%201%20L8%208.5%20L15%201%22%20stroke-width%3D%223%22%20stroke%3D%22currentColor%22%20fill%3D%22transparent%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E\");\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.25;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :focus::-ms-value {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n  width: 100% !important;\n  ::-ms-expand {\n    display: none;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  max-width: 100%;\n  height: auto;\n  padding: 0.4rem 2.5rem 0.5rem 0.6rem;\n  border: 1px solid #000000;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background-repeat: no-repeat;\n  border-radius: 0;\n  background-position: right 0.7em top 50%;\n  background-size: 1rem auto;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%228.5%22%20viewBox%3D%220%200%2016%2010.5%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1%201%20L8%208.5%20L15%201%22%20stroke-width%3D%223%22%20stroke%3D%22currentColor%22%20fill%3D%22transparent%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fsvg%3E\");\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.25;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.25;\n  }\n  :focus {\n    outline: 3px solid #ffbf47;\n    outline-offset: 0;\n  }\n  :focus::-ms-value {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n  width: 100% !important;\n  ::-ms-expand {\n    display: none;\n  }\n"])));
var StyledOption = styled.option(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  :active,\n  :checked {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n"], ["\n  :active,\n  :checked {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n"])));
var StyledOption2 = styled.option(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  :active,\n  :checked {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n"], ["\n  :active,\n  :checked {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n"])));
var StyledOption3 = styled.option(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  :active,\n  :checked {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n"], ["\n  :active,\n  :checked {\n    color: #ffffff;\n    background-color: #005ea5;\n  }\n"])));
var SelectWithFullWidthOverride = function (_a) {
    var select1 = _a.select1, name = _a.name, multiple = _a.multiple, onChange = _a.onChange, selected = _a.selected, selected2 = _a.selected2, selected3 = _a.selected3;
    return (React.createElement(StyledDiv, null,
        React.createElement(StyledLabel, { htmlFor: select1 }, "Label text goes here"),
        React.createElement(StyledSelect, { id: select1, name: name, multiple: multiple, onChange: onChange },
            React.createElement(StyledOption, { value: "1", selected: selected }, "Govt.NZ frontend option 1"),
            React.createElement(StyledOption2, { selected: selected2, value: "2" }, "Govt.NZ frontend option 2"),
            React.createElement(StyledOption3, { disabled: false, value: "3", selected: selected3 }, "Govt.NZ frontend option 3"))));
};
SelectWithFullWidthOverride.props = [
    "select1",
    "name",
    "multiple",
    "onChange",
    "selected",
    "selected2",
    "selected3"
];
exports.default = SelectWithFullWidthOverride;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=SelectWithFullWidthOverride.js.map