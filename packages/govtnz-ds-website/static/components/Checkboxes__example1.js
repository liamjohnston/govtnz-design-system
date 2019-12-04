!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.checkboxId,r=e.hintId,n=e.name,l=e.disabled,o=e.readOnly,i=e.autoFocus,c=e.value,u=e.checked,d=e.onChange,s=e.label,m=e.hint;return a.createElement("div",{className:"g-checkboxes__item"},a.createElement("input",{"aria-describedby":r,className:"g-checkboxes__input",id:t,type:"checkbox",name:n,disabled:l,readOnly:o,autoFocus:i,value:c,checked:u,onChange:d}),a.createElement("label",{className:"g-checkboxBlock-label g-checkboxes__label",htmlFor:t},void 0!==s?s:a.createElement(a.Fragment,null,"Label text")),void 0!==r?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-checkboxBlock-hint g-checkboxes__hint",id:r},void 0!==m?m:a.createElement(a.Fragment,null,"Hint text"))):"")}},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.hintId,n=e.legend,l=e.hint,o=e.error,i=e.children;return a.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.createElement("fieldset",{"aria-describedby":void 0!==r||void 0!==t?(r||"")+(t?" "+t:""):void 0,className:"g-fieldset"},a.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:a.createElement(a.Fragment,null,"Legend text")),void 0!==r?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-fieldsetBlock-hint",id:r},void 0!==l?l:a.createElement(a.Fragment,null,"Hint text"))):"",void 0!==t?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==o?o:a.createElement(a.Fragment,null,"Error text"))):"",a.createElement("div",null,void 0!==i?i:a.createElement(a.Fragment,null,"Fieldset contents"))))}},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom8,n=e.marginBottom0,o=e.id,i=e.children;return a.createElement("h1",{className:(void 0!==l[t]?l[t]:"")+(r?" g-heading-mb-8":"")+(n?" g-heading-mb-0":""),id:o},void 0!==i?i:a.createElement(a.Fragment,null,"Example text"))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(2),o=r.n(l),i=r(3),c=r.n(i),u=r(4),d=r.n(u),s=r(1),m=r.n(s);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw l}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},h=function(e){return a.a.createElement(g,f({title:"Example: Error state (Checkboxes)"},b({})),a.a.createElement(c.a,f({legend:a.a.createElement(d.a,{styleSize:"large",id:"providerChoiceTitle2",marginBottom8:!0},"Who are your providers?"),hint:a.a.createElement("p",null,"Select all that apply."),hintId:"hintId21",errorId:"errorId21",error:"You must choose at least one provider."},b({})),a.a.createElement(m.a,f({label:"Aardvark Access",checkboxId:"anyCheckboxId21",value:"provider1",name:"providerChoice2",labelId:"labelId21"},b({value:"provider1"}))),a.a.createElement(m.a,f({label:"Bumblebee Business",checkboxId:"anyCheckboxId22",value:"provider2",name:"providerChoice2",labelId:"labelId22"},b({value:"provider2"}))),a.a.createElement(m.a,f({label:"Caterpillar Company",checkboxId:"anyCheckboxId23",value:"provider3",name:"providerChoice2",labelId:"labelId23"},b({value:"provider3"})))))},b=function(e){var t=v(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],l=v(Object(n.useState)(e&&e.value2),2),o=l[0],i=l[1],c=v(Object(n.useState)(e&&e.value3),2),u=c[0],d=c[1];return{value:r,value2:o,value3:u,onChange:function(e){return a(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return d(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(h,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);