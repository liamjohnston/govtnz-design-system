!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),o={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.marginBottom0,u=e.id,i=e.children;return a.createElement("h1",{className:(void 0!==o[t]?o[t]:"")+(n?" g-heading-mb-8":"")+(r?" g-heading-mb-0":""),id:u},void 0!==i?i:a.createElement(a.Fragment,null,"Example text"))}},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.children;return a.createElement("span",{className:"g-caption-xl"},void 0!==t?t:a.createElement(a.Fragment,null,"Example text"))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),u=n.n(o),i=n(2),l=n.n(i),c=n(3),f=n.n(c);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},p=function(e){return a.a.createElement(g,s({title:"Example: Headings with captions inside the h1 (Typography)"},v({})),a.a.createElement(l.a,s({styleSize:"xlarge"},v({})),a.a.createElement(f.a,v({}),"caption-xl"),"g-heading-xl"))},v=function(e){var t=d(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],o=d(Object(r.useState)(e&&e.value2),2),u=o[0],i=o[1],l=d(Object(r.useState)(e&&e.value3),2),c=l[0],f=l[1];return{value:n,value2:u,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return f(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(a.a.createElement(p,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);