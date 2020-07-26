/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = self.AFAppX;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = self.React;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
var r={};function n(n){if(r[n])return r[n];function e(r){var n=r.children;return void 0===n?null:n}return e.displayName=n,r[n]=e,e}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
var e=Array.isArray;function r(r,f){var t=null;if(r)if(t=[],e(r))t=r.map(f);else if("number"===typeof r)for(var a=0;a<r;a++)t.push(f(a+1,a));else"object"===typeof r&&Object.keys(r).forEach((function(e){t.push(f(r[e],e))}));return t}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return e; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function e(e){return Array.isArray(e)&&react__WEBPACK_IMPORTED_MODULE_0__["Fragment"]?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(react__WEBPACK_IMPORTED_MODULE_0___default.a,[react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],null].concat(e)):e}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function a(a,e){var c=a;return Array.isArray(c)||(c=[c]),react__WEBPACK_IMPORTED_MODULE_0__["Fragment"]?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(react__WEBPACK_IMPORTED_MODULE_0___default.a,[react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],e].concat(c)):c}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return e; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var r=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r};function e(e,n,o,a){var c=e&&e.Component;return c?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(c,r({},n,{$context:a,key:o})):null}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function r(r,t){var n={};for(var e in r)t.indexOf(e)>=0||Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e]);return n}var n=react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent,e=parseInt(react__WEBPACK_IMPORTED_MODULE_0___default.a.version,10);function o(r){var n={};return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(r,(function(r){var t=r&&r.props&&r.props.slot||"$default",e=n[t]||[];e.push(r),n[t]=e})),n}/* harmony default export */ __webpack_exports__["default"] = (function(a,p){function c(){n.apply(this,arguments)}return c.displayName=a,(c.prototype=Object.create(n.prototype)).render=function(){var n=this.props,c=n.$context,l=(n.slot,n.children),i=r(n,["$context","slot","children"]);i.$slots=o(l);var u=p.call(c,i);return e<16&&react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(u)>1?(setTimeout((function(){throw new Error("template "+a+" can only has one render child!")}),0),null):u},c});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return r; });
var o={};function r(r,v,a,t){var e=r.$scopedSlots,i=void 0===e?o:e,s=r.$slots,d=void 0===s?o:s,f=i[v],n=void 0;if(f){n=[];var u=!0;f.forEach((function(o){var r=o(t);r&&(u=!1),n.push(r)})),u&&(n=a)}else{var c=d[v];n=c||a}return n}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return t; });
function t(t){var f={};return t.forEach((function(t){var n=t.slot,o=void 0===n?"$default":n,r=t.fn;f[o]=f[o]||[],f[o].push(r)})),f}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
function r(){}var e="$sjs_",t=new RegExp(e,"g"),n=new RegExp("\\s"+e,"g"),i=1;function a(r){return 0===r.lastIndexOf(e,0)}function f(r,e){return Object.prototype.toString.call(r)==="[object "+e+"]"}function prefix(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments[2];if(!r)return r;r.constructor;if(f(r,"String")||f(r,"Boolean")||f(r,"Number"))return r;if(f(r,"Object")){var o={};for(var u in r)if(r.hasOwnProperty(u)){var c=prefix(r[u],t,n);t?(a(u)||(u=e+u),o[u]=c):(a(u)&&(u=u.slice(e.length)),o[u]=c)}return o}if(Array.isArray(r)){for(var s=[],p=0;p<r.length;p++)s.push(prefix(r[p],t,n));return s}if(f(r,"Date")){var l=new Date;return l.setTime(r.getTime()),l}if(f(r,"RegExp")){var g="";return r.global&&(g+="g"),r.ignoreCase&&(g+="i"),r.multiline&&(g+="m"),new RegExp(r.source,g)}return f(r,"Function")&&n===i?r:null}/* harmony default export */ __webpack_exports__["default"] = (function(i,a){for(var f=i.slice(1),o=i[0],u=void 0,c=0;c<f.length&&null!=o;c++){u=o;var s=f[c];"string"===typeof s&&(s=e+s),o=o[s]}return a?"function"!==typeof o?r:function(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];i=i.map((function(r){return prefix(r)}));try{return prefix(o.apply(u,i),!1)}catch(r){throw r.message=r.message.replace(t,""),r.stack=r.stack.substring(0,r.stack.indexOf("\n",r.stack.lastIndexOf("at "+e))),r.stack=r.stack.replace(n," "),r}}:"function"===typeof o?(o.sjs=!0,o.prefix=prefix,o):prefix(o,!1)});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return n; });
function n(n){return null==n?n:n+""}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function n(){}var t=Function,r=eval;function e(n){return!(!n||n!==t&&n!==r)}/* harmony default export */ __webpack_exports__["default"] = (function(t,r){for(var i=t.slice(1),u=t[0],f=void 0,o=0;o<i.length;o++){if(e(u))return n;if(null==u)break;f=u,u=u[i[o]]}return r?"function"!==typeof u||e(u)?n:u.bind(f):e(u)?n:u});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var n=__webpack_require__(0),e=new n.StyleSheet({stylePath:"app.acss"});exports.default=e.exports(".a-page {\n    min-height: 100%;\n    background: #F5F5F5;\n  }\n  .container {\n    width: 100%;\n    min-height: 100%;\n  }\n  .bg-white {\n    background: #fff;\n  }\n  .content {\n    width: 100%;\n  }\n  .link {\n    text-align: center;\n    color: #0af;\n  }\n  .hairline, .hairline-top, .hairline-bottom {\n    position: relative;\n  }\n  .hairline-top:before, .hairline-bottom:after, .hairline:before, .hairline:after {\n    position: absolute;\n    content: '';\n    display: block;\n    left: 0;\n    right: 0;\n    height: 1px;\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5);\n    background-color: #eee;\n  }\n  .hairline-top:before, .hairline:before {\n    top: 0;\n  }\n  .hairline-bottom:after, .hairline:after {\n    bottom: 0;\n  }\n  .hairborder, .tiny-button {\n    position: relative;\n  }\n  .hairborder:after, .tiny-button:after {\n    content: '';\n    display: block;\n    box-sizing: border-box;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 200%;\n    height: 200%;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n  }\n  .hairborder-radius-4px:after {\n    border-radius: 8px;\n  }\n  .tiny-button {\n    font-size: 0.28rem;\n    padding: 0 0.7em;\n    height: 0.6rem;\n    line-height: 0.6rem;\n    text-align: center;\n    border-radius: 0.04rem;\n  }\n  .a-button.withIcon {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n  }\n  .a-button.withIcon:before {\n    content: '';\n    display: inline-block;\n    width: 0.34rem;\n    height: 0.34rem;\n    margin-right: 0.13rem;\n  }\n  .a-button.withIcon.plus:before {\n    background: url('../../assets/icon-plus.png') center no-repeat;\n    background-size: 100% 100%;\n  }"),module.exports=exports.default;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function e(){__webpack_require__(62)}self.bootstrapSubPackage("packages",{success:e});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var e=__webpack_require__(0);(0,e.Page)({pagePath:"packages/pages/index/index",usingComponents:{},render:function(){return __webpack_require__(63)},stylesheet:function(){return __webpack_require__(64)}});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=k;var e=__webpack_require__(1),r=M(e),t=__webpack_require__(2),a=M(t),l=__webpack_require__(0),u=__webpack_require__(3),n=M(u),i=__webpack_require__(4),m=M(i),o=__webpack_require__(5),p=M(o),s=__webpack_require__(6),d=M(s),f=__webpack_require__(7),c=M(f),y=__webpack_require__(8),q=M(y),g=__webpack_require__(9),v=M(g),E=__webpack_require__(10),H=M(E),S=__webpack_require__(11),$=M(S),x=__webpack_require__(12),C=M(x);function M(e){return e&&e.__esModule?e:{default:e}}var R=r.default&&r.default.createElement,_=function(e,r){return e.$getComponentEventHandler&&e.$getComponentEventHandler(r)},b=function(e,r){return e.$getEventHandler(r)},w=function(e,r){return e.$getRefHandler(r)},P=function(e,r){return e.$getComRefHandler&&e.$getComRefHandler(r)},T=l.View||(0,a.default)("view"),j={};function k(e){return(0,m.default)(r.default.createElement(T,null,(0,$.default)("New Page")))}module.exports=exports.default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var e=__webpack_require__(0),t=__webpack_require__(13),a=r(t);function r(e){return e&&e.__esModule?e:{default:e}}var s=new e.StyleSheet({stylePath:"packages/pages/index/index.acss"});s.imports(a.default),exports.default=s.exports(""),module.exports=exports.default;

/***/ })
/******/ ]);