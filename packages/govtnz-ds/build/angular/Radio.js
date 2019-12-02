"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Radio";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "fakeFocus", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "gov1", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "hintId", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "readOnly", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "autoFocus", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "checked", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-Radio",
            template: "\n    <input aria-describedby=\"{{ hintId }}\" class=\"g-radios__input{{\n      fakeFocus ? \" :focus\" : \"\"\n    }}\" id=\"{{ gov1 }}\" name=\"{{ name }}\" type=\"radio\" disabled=\"{{ disabled }}\"\n    readonly=\"{{ readOnly }}\" autofocus=\"{{ autoFocus }}\" value=\"{{ value }}\"\n    checked=\"{{ checked }}\"/>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=Radio.js.map