!function(e){var r={};function t(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(o,a,function(r){return e[r]}.bind(null,a));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r){e.exports=React},function(e,r){e.exports=ReactDOM},function(e,r,t){"use strict";t.r(r);var o=t(0),a=t.n(o),n=t(1),l=t.n(n),i=function(e){var r=e.fileUpload1,t=e.name,a=e.disabled,n=e.readOnly,l=e.autoFocus;return o.createElement("div",{className:"g-fileUpload-form-group"},o.createElement("label",{className:"g-fileUpload-label",htmlFor:r},"Upload a file"),o.createElement("input",{className:"g-file-upload",id:r,name:t,type:"file",disabled:a,readOnly:n,autoFocus:l}))},u=function(e){var r=e.fileUpload3,t=e.fileUpload3Hint,a=e.fileUpload3Error,n=e.name,l=e.disabled,i=e.readOnly,u=e.autoFocus;return o.createElement("div",{className:"g-fileUploadWithErrorMessage-form-group g-fileUploadWithErrorMessage-form-group--error"},o.createElement("label",{className:"g-fileUploadWithErrorMessage-label",htmlFor:r},"Upload a file"),o.createElement("span",{className:"g-fileUploadWithErrorMessage-hint",id:t},"Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto."),o.createElement("span",{className:"g-fileUploadWithErrorMessage-error-message",id:a},"Error message goes here"),o.createElement("input",{"aria-describedby":void 0!==t||void 0!==a?"".concat(t||"").concat(a?" "+a:""):void 0,className:"g-fileUploadWithErrorMessage-file-upload g-fileUploadWithErrorMessage-file-upload--error",id:r,name:n,type:"file",disabled:l,readOnly:i,autoFocus:u}))},d=function(e){var r=e.children;return a.a.createElement(o.Fragment,null,r)},c=function(e){return a.a.createElement(d,{},a.a.createElement(i,{}),a.a.createElement(u,{}))};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?l.a.render(a.a.createElement(c,null),e):console.error("Couldn't find app mount point ","#root")})}]);