!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return u.default(e)||a.default(e)||l.default(e)||f.default()};var u=c(o("kMC0W")),a=c(o("7AJDX")),f=c(o("8CtQK")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var d,s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",v=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,g=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,j=_||x||Function("return this")(),O=Object.prototype.toString,h=Math.max,M=Math.min,w=function(){return j.Date.now()};function S(e,t,r){var n,o,i,u,a,f,l=0,c=!1,d=!1,s=!0;if("function"!=typeof e)throw new TypeError(p);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function y(e){return l=e,a=setTimeout(b,t),c?v(e):u}function m(e){var r=e-f;return void 0===f||r>=t||r<0||d&&e-l>=i}function b(){var e=w();if(m(e))return g(e);a=setTimeout(b,function(e){var r=t-(e-f);return d?M(r,i-(e-l)):r}(e))}function g(e){return a=void 0,s&&n?v(e):(n=o=void 0,u)}function _(){var e=w(),r=m(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return y(f);if(d)return a=setTimeout(b,t),v(f)}return void 0===a&&(a=setTimeout(b,t)),u}return t=T(t)||0,I(r)&&(c=!!r.leading,i=(d="maxWait"in r)?h(T(r.maxWait)||0,t):i,s="trailing"in r?!!r.trailing:s),_.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},_.flush=function(){return void 0===a?u:g(w())},_}function I(t){var r=void 0===t?"undefined":e(s)(t);return!!t&&("object"==r||"function"==r)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(s)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(I(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=I(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=m.test(t);return n||b.test(t)?g(t.slice(2),n?2:8):y.test(t)?NaN:+t}d=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return I(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),S(e,t,{leading:n,maxWait:t,trailing:o})};var A=document.querySelector(".feedback-form"),E=e(i)(A.querySelectorAll("[name]"));E.forEach((function(e){localStorage.getItem("".concat(e.name))&&(e.value=localStorage.getItem("".concat(e.name)))})),A.addEventListener("input",e(d)((function(e){!function(e,t){localStorage.setItem("".concat(e),t.target.value)}(e.target.name,e)}),500)),A.addEventListener("submit",(function(e){e.preventDefault();var t={};E.forEach((function(e){t[e.name]=e.value,localStorage.removeItem("".concat(e.name))})),console.log(t),A.reset()}))}();
//# sourceMappingURL=03-feedback.fa6dd47c.js.map