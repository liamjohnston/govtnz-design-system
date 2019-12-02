"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var DateInput = function (_a) {
    var error = _a.error, hintId = _a.hintId, errorId = _a.errorId, label = _a.label, hint = _a.hint, id = _a.id, dayId = _a.dayId, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, value = _a.value, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, onChange = _a.onChange, monthId = _a.monthId, name2 = _a.name2, disabled2 = _a.disabled2, readOnly2 = _a.readOnly2, autoFocus2 = _a.autoFocus2, value2 = _a.value2, spellCheck2 = _a.spellCheck2, autoComplete2 = _a.autoComplete2, onChange2 = _a.onChange2, yearId = _a.yearId, name3 = _a.name3, disabled3 = _a.disabled3, readOnly3 = _a.readOnly3, autoFocus3 = _a.autoFocus3, value3 = _a.value3, spellCheck3 = _a.spellCheck3, autoComplete3 = _a.autoComplete3, onChange3 = _a.onChange3;
    return (React.createElement("div", { className: "g-dateInput-form-group" + (error ? " g-dateInput-form-group--error" : "") },
        React.createElement("fieldset", { "aria-describedby": hintId !== undefined || errorId !== undefined
                ? "" + (hintId ? hintId : "") + (errorId ? " " + errorId : "")
                : undefined, className: "g-fieldset", role: "group" },
            React.createElement("legend", { className: "g-fieldset__legend g-fieldset__legend--xl" }, label !== undefined ? (label) : (React.createElement(React.Fragment, null, "Example label"))),
            React.createElement("span", { className: "g-dateInput-hint", id: hintId }, hint !== undefined ? (hint) : (React.createElement(React.Fragment, null, "Example hint"))),
            error !== undefined ? (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "g-dateInput-error-message", id: errorId },
                    React.createElement("span", { className: "g-dateInput-visually-hidden" }, "Error: "),
                    error !== undefined ? (error) : (React.createElement(React.Fragment, null, "Example error"))))) : (""),
            React.createElement("div", { className: "g-date-input", id: id },
                React.createElement("div", { className: "g-date-input__item" },
                    React.createElement("div", { className: "g-dateInput-form-group" },
                        React.createElement("label", { className: "g-dateInput-label g-date-input__label", htmlFor: dayId }, "Day"),
                        React.createElement("input", { className: "g-dateInput-input g-date-input__input g-dateInput-input--width-2" + (error ? " g-dateInput-input--error" : ""), id: dayId, maxLength: 2, name: name, pattern: "[0-9]*", type: "text", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, autoComplete: autoComplete, onChange: onChange }))),
                React.createElement("div", { className: "g-date-input__item" },
                    React.createElement("div", { className: "g-dateInput-form-group" },
                        React.createElement("label", { className: "g-dateInput-label g-date-input__label", htmlFor: monthId }, "Month"),
                        React.createElement("input", { className: "g-dateInput-input g-date-input__input g-dateInput-input--width-2" + (error ? " g-dateInput-input--error" : ""), id: monthId, maxLength: 2, name: name2, pattern: "[0-9]*", type: "text", disabled: disabled2, readOnly: readOnly2, autoFocus: autoFocus2, value: value2, spellCheck: spellCheck2, autoComplete: autoComplete2, onChange: onChange2 }))),
                React.createElement("div", { className: "g-date-input__item" },
                    React.createElement("div", { className: "g-dateInput-form-group" },
                        React.createElement("label", { className: "g-dateInput-label govuk-date-input__label", htmlFor: yearId }, "Year"),
                        React.createElement("input", { className: "g-dateInput-input g-date-input__input g-dateInput-input--width-4" + (error ? " g-dateInput-input--error" : ""), id: yearId, maxLength: 4, name: name3, pattern: "[0-9]*", type: "text", disabled: disabled3, readOnly: readOnly3, autoFocus: autoFocus3, value: value3, spellCheck: spellCheck3, autoComplete: autoComplete3, onChange: onChange3 })))))));
};
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map