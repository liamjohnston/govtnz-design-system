!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),a={2:"g-inputBlock-input--width-2",3:"g-inputBlock-input--width-3",4:"g-inputBlock-input--width-4",5:"g-inputBlock-input--width-5",10:"g-inputBlock-input--width-10",20:"g-inputBlock-input--width-20",30:"g-inputBlock-input--width-30"};t.default=function(e){var t=e.errorId,n=e.id,r=e.label,l=e.hint,u=e.hintId,i=e.error,c=e.width,d=e.disabled,f=e.readOnly,s=e.autoFocus,p=e.name,m=e.value,g=e.min,y=e.max,v=e.type,b=e.spellCheck,h=e.maxLength,O=e.autoComplete,E=e.onChange,j=e.ref;return o.default.createElement("div",{className:"g-inputBlock-form-group"+(t?" g-inputBlock-form-group--error":"")}," ",o.default.createElement("label",{className:"g-inputBlock-label",htmlFor:n}," ",void 0!==r?r:o.default.createElement(o.default.Fragment,null,"Example text")," ")," ",void 0!==l?o.default.createElement(o.default.Fragment,null," ",o.default.createElement("div",{className:"g-inputBlock-hint",id:u}," ",void 0!==l?l:o.default.createElement(o.default.Fragment,null,"Example text")," ")," "):""," ",void 0!==t?o.default.createElement(o.default.Fragment,null," ",o.default.createElement("div",{className:"g-inputBlock-error-message",id:t}," ",o.default.createElement("span",{className:"g-inputBlock-visually-hidden"},"Error: ")," ",void 0!==i?i:o.default.createElement(o.default.Fragment,null,"Example text")," ")," "):""," ",o.default.createElement("input",{"aria-describedby":void 0!==u||void 0!==t?(u||"")+(t?" "+t:""):void 0,className:"g-inputBlock-input"+(void 0!==a[c]?" "+a[c]:"")+(i?" g-inputBlock-input--error":""),id:n,name:p,disabled:void 0!==d?"true"===d.toString():void 0,readOnly:f,autoFocus:s,value:m,min:g,max:y,type:v,spellCheck:b,maxLength:h,autoComplete:O,onChange:E,ref:j})," ")}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.default=function(e){var t=e.errorId,n=e.hintId,r=e.legend,a=e.hint,l=e.error,u=e.children;return o.default.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")}," ",o.default.createElement("fieldset",{"aria-describedby":void 0!==n||void 0!==t?(n||"")+(t?" "+t:""):void 0,className:"g-fieldsetBlock-fieldset"}," ",o.default.createElement("legend",{className:"g-fieldsetBlock-fieldset__legend"}," ",void 0!==r?r:o.default.createElement(o.default.Fragment,null,"Legend text")," ")," ",void 0!==n?o.default.createElement(o.default.Fragment,null," ",o.default.createElement("div",{className:"g-fieldsetBlock-hint",id:n}," ",void 0!==a?a:o.default.createElement(o.default.Fragment,null,"Hint text")," ")," "):""," ",void 0!==t?o.default.createElement(o.default.Fragment,null," ",o.default.createElement("div",{className:"g-fieldsetBlock-error-message",id:t}," ",o.default.createElement("span",{className:"g-fieldsetBlock-visually-hidden"}," ","Error:"," ")," ",void 0!==l?l:o.default.createElement(o.default.Fragment,null,"Error text")," ")," "):""," ",o.default.createElement("div",null,void 0!==u?u:o.default.createElement(o.default.Fragment,null,"Fieldset contents"))," ")," ")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),a={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.marginBottom0,l=e.id,u=e.children;return o.default.createElement("h1",{className:"g-heading"+(void 0!==a[t]?" "+a[t]:"")+(n?" g-heading-mb-8":"")+(r?" g-heading-mb-0":""),id:l}," ",void 0!==u?u:o.default.createElement(o.default.Fragment,null,"Example text")," ")}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),l=n.n(a),u=n(3),i=n.n(u),c=n(4),d=n.n(c),f=n(1),s=n.n(f);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),e}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var B=function(e){var t=e.children;return o.a.createElement(r.Fragment,null,t)},C=function(e){return o.a.createElement(B,P({title:"Example: Fieldset"},M({})),o.a.createElement(i.a,P({id:"addressId",legend:o.a.createElement(d.a,{styleSize:"large"},"What is your address?")},M({})),o.a.createElement(s.a,P({type:"text",label:"Street address",name:"streetAddress",id:"streetAddressId",autoComplete:"street-address"},M({}))),o.a.createElement(s.a,P({type:"text",label:"Town or city",name:"town",id:"townId",autoComplete:"address-level2"},M({}))),o.a.createElement(s.a,P({type:"text",label:"Postcode",name:"postcode",id:"postcodeId",width:"5",autoComplete:"postal-code"},M({})))))},F=o.a.createContext(void 0),M=(r.Component,o.a.Component,o.a.Component,function(e){var t=p(Object(r.useState)(e&&e.value),2),n=t[0],o=t[1],a=p(Object(r.useState)(e&&e.value2),2),l=a[0],u=a[1],i=p(Object(r.useState)(e&&e.value3),2),c=i[0],d=i[1];return{value:n,value2:l,value3:c,onChange:function(e){return o(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return d(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?l.a.hydrate(o.a.createElement(C,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);