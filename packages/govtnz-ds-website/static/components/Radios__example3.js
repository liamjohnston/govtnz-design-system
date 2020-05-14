!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.errorId,n=e.id,r=e.hintId,l=e.disabled,o=e.readOnly,u=e.autoFocus,i=e.name,c=e.value,d=e.checked,f=e.onChange,s=e.ref,m=e.label,g=e.hint;return a.default.createElement("div",{className:"g-radios__item"+(t?" g-radioBlock-form-group--error":"")},a.default.createElement("input",{"aria-describedby":r,className:"g-radios__input",id:n,name:i,type:"radio",disabled:void 0!==l&&"true"===l.toString(),readOnly:o,autoFocus:u,value:c,checked:d,onChange:f,ref:s}),a.default.createElement("label",{className:"g-radioBlock-label g-radios__label",htmlFor:n},void 0!==m?m:a.default.createElement(a.default.Fragment,null,"Label text")),void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-radioBlock-hint g-checkboxes__hint",id:r},void 0!==g?g:a.default.createElement(a.default.Fragment,null,"Hint text"))):"")}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.errorId,n=e.hintId,r=e.legend,l=e.hint,o=e.error,u=e.children;return a.default.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.default.createElement("fieldset",{"aria-describedby":void 0!==n||void 0!==t?(n||"")+(t?" "+t:""):void 0,className:"g-fieldset"},a.default.createElement("legend",{className:"g-fieldset__legend"},void 0!==r?r:a.default.createElement(a.default.Fragment,null,"Legend text")),void 0!==n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-hint",id:n},void 0!==l?l:a.default.createElement(a.default.Fragment,null,"Hint text"))):"",void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.default.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Error text"))):"",a.default.createElement("div",null,void 0!==u?u:a.default.createElement(a.default.Fragment,null,"Fieldset contents"))))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.marginBottom0,o=e.id,u=e.children;return a.default.createElement("h1",{className:(void 0!==l[t]?l[t]:"")+(n?" g-heading-mb-8":"")+(r?" g-heading-mb-0":""),id:o},void 0!==u?u:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.inline,n=e.children;return a.default.createElement("div",{className:"g-radios"+(t?" g-radios--inline":"")},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Radio components"))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(2),o=n.n(l),u=n(3),i=n.n(u),c=n(4),d=n.n(c),f=n(5),s=n.n(f),m=n(1),g=n.n(m);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},I=function(e){return a.a.createElement(S,j({title:"Example: Inline radio buttons"},P({})),a.a.createElement(i.a,j({legend:a.a.createElement(d.a,{styleSize:"large",id:"nameChangeId6"},"Have you changed your name?"),hint:a.a.createElement("p",null,"This includes changing your last name or spelling your name differently."),hintId:"hintId2221"},P({})),a.a.createElement(s.a,j({inline:!0},P({})),a.a.createElement(g.a,j({label:"Yes",id:"anyRadioId55",value:"true",name:"nameChange1",labelId:"labelId1"},P({value:"true"}))),a.a.createElement(g.a,j({label:"No",id:"anyRadioId2551",value:"false",name:"nameChange1",labelId:"labelId2"},P({value:"false"}))))))},F=a.a.createContext(void 0);r.Component;var P=function(e){var t=v(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],l=v(Object(r.useState)(e&&e.value2),2),o=l[0],u=l[1],i=v(Object(r.useState)(e&&e.value3),2),c=i[0],d=i[1];return{value:n,value2:o,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return d(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(I,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);