!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var o=r("1WSnx"),l=document.querySelector('input[name="email"]'),i=document.querySelector('textarea[name="message"]'),u=document.querySelector(".feedback-form"),d="feedback-form-state",s=e(o).throttle((function(){var e={email:l.value,message:i.value};localStorage.setItem(d,JSON.stringify(e))}),500);u.addEventListener("input",s),window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem(d));e&&(l.value=e.email,i.value=e.message)})),u.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem(d));t.email&&t.message?(console.log(t),localStorage.removeItem(d),l.value="",i.value=""):alert("Всі поля форми повинні бути заповненні!")}))}();
//# sourceMappingURL=03-feedback.96492d3a.js.map