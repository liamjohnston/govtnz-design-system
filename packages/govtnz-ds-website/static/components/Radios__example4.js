!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),i=n.n(l),o=function(e){var t=e.hintId,n=e.legend,r=e.hint,l=e.children;return a.createElement("div",{className:"g-fieldsetBlock-form-group"},a.createElement("fieldset",{"aria-describedby":t,className:"g-fieldset"},a.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:a.createElement(a.Fragment,null,"Legend text")),void 0!==t?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-fieldsetBlock-hint",id:t},void 0!==r?r:a.createElement(a.Fragment,null,"Hint text"))):"",a.createElement("div",null,void 0!==l?l:a.createElement(a.Fragment,null,"Fieldset contents"))))},d={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},c=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.id,l=e.children;return a.createElement("h1",{className:"".concat(void 0!==d.styleSize[t]?d.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:r},void 0!==l?l:a.createElement(a.Fragment,null,"Example text"))},u=function(e){var t=e.fakeFocus,n=e.radioId,r=e.hintId,l=e.name,i=e.disabled,o=e.readOnly,d=e.autoFocus,c=e.value,u=e.checked,s=e.onChange,m=e.label,g=e.hint;return a.createElement("div",{className:"g-radios__item"},a.createElement("input",{"aria-describedby":r,className:"g-radios__input".concat(t?" :focus":""),id:n,type:"radio",name:l,disabled:i,readOnly:o,autoFocus:d,value:c,checked:u,onChange:s}),a.createElement("label",{className:"g-radios-label g-radios__label",htmlFor:n},void 0!==m?m:a.createElement(a.Fragment,null,"Label text")),a.createElement("div",{className:"g-radios-hint g-radios__hint",id:r},void 0!==g?g:a.createElement(a.Fragment,null,"Hint text")))};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=function(e){var t=e.children;return r.a.createElement(a.Fragment,null,t)},g=function(e){return r.a.createElement(m,{},r.a.createElement(o,s({},{},{legend:r.a.createElement(c,s({},{},{styleSize:"large",id:"providerChoiceTitle1"}),"Choose one provider"),hint:r.a.createElement("p",null,"Select one provider."),hintId:"hintId"}),r.a.createElement(u,s({},{},{label:"Sign in with Aardvark services",hint:"North Island only",hintId:"someHintId7",radioId:"anyRadioId7234",name:"providerChoice3",value:"provider1",labelId:"labelId5"})),r.a.createElement(u,s({},{},{label:"Sign in with Bumblebee services",hint:"North and South Island",hintId:"someHintId8",radioId:"anyRadioId8234",name:"providerChoice3",value:"provider2",labelId:"labelId8"})),r.a.createElement(u,s({},{},{label:"Sign in with Caterpillar company",hint:"All new Zealand territories",hintId:"someHintId7234",radioId:"anyRadioId9f",name:"providerChoice3",value:"provider3",labelId:"labelId9"}))))};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?i.a.hydrate(r.a.createElement(g,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);