!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.id,n=e.label,o=e.hintId,l=e.hint,u=e.error,i=e.name,c=e.disabled,d=e.readOnly,s=e.rows,f=e.cols,m=e.autoFocus,v=e.spellCheck,p=e.autoComplete,g=e.maxLength,b=e.value,y=e.onChange;return a.createElement("div",{className:"g-textareaBlock-form-group"+(t?" g-textareaBlock-form-group--error":"")},a.createElement("label",{className:"g-textareaBlock-label",htmlFor:r},void 0!==n?n:a.createElement(a.Fragment,null,"Label text")),void 0!==o?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-textareaBlock-hint",id:o},void 0!==l?l:a.createElement(a.Fragment,null,"Hint text"))):"",void 0!==t?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-textareaBlock-error-message",id:t},a.createElement("span",{className:"g-textareaBlock-visually-hidden"},"Error:"),void 0!==u?u:a.createElement(a.Fragment,null,"Error text"))):"",a.createElement("textarea",{"aria-describedby":void 0!==o||void 0!==t?(o||"")+(t?" "+t:""):void 0,className:"g-textareaBlock-textarea",id:r,name:i,rows:s,disabled:c,readOnly:d,cols:f,autoFocus:m,spellCheck:v,autoComplete:p,maxLength:g,value:b,onChange:y}))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1),l=r.n(o),u=r(2),i=r.n(u);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},f=function(e){return a.a.createElement(s,d({title:"Example: Textarea error"},m({})),a.a.createElement(i.a,d({id:"detail",name:"detail",label:"Can you provide more detail?",hintId:"hint1",hint:"Do not include personal or financial information, like your IRD number or credit card details.",errorId:"errorId",error:"Enter more detail"},m({}))))},m=function(e){var t=c(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],o=c(Object(n.useState)(e&&e.value2),2),l=o[0],u=o[1],i=c(Object(n.useState)(e&&e.value3),2),d=i[0],s=i[1];return{value:r,value2:l,value3:d,onChange:function(e){return a(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return s(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?l.a.hydrate(a.a.createElement(f,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);