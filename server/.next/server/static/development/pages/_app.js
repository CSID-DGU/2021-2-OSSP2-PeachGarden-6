module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_constants_colors__WEBPACK_IMPORTED_MODULE_3__);






var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderTitleDiv, null, "PLAYER - BATTLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Header));
var HeaderDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__HeaderDiv",
  componentId: "sc-14sgk44-0"
})(["z-index:100;top:0;position:fixed;width:100%;background-color:", ";"], _constants_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].main);
var HeaderTitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__HeaderTitleDiv",
  componentId: "sc-14sgk44-1"
})(["width:100%;font-size:18px;padding:20px 0;text-align:center;color:#ffffff;"]);

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var NAVIGATION_LIST = [{
  text: "Main",
  href: "/"
}, {
  text: "선수 검색",
  href: "/search"
}, {
  text: "팀 기록",
  href: "/team"
}, {
  text: "선수 칭호",
  href: "/style"
}];

var Navigation = function Navigation() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationDiv, null, NAVIGATION_LIST.map(function (_ref, index) {
    var text = _ref.text,
        href = _ref.href;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavButton, {
      text: text,
      href: href,
      key: index
    });
  }));
};

var NavButton = function NavButton(_ref2) {
  var text = _ref2.text,
      href = _ref2.href;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavButtonButton, null, text));
};

var NavigationDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Navigation__NavigationDiv",
  componentId: "sc-jvyhur-0"
})(["width:800px;padding:0 calc(50% - 400px);height:fit-content;background-color:#000000;display:flex;justify-content:space-between;"]);
var NavButtonButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Navigation__NavButtonButton",
  componentId: "sc-jvyhur-1"
})(["width:200px;padding:10px;font-size:14px;color:#ffffff;text-align:center;border:unset;background-color:unset;"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Navigation));

/***/ }),

/***/ "./constants/colors.js":
/*!*****************************!*\
  !*** ./constants/colors.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var colors = {
  main: "#df9977",
  mainFaded: "#a3c2db",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#AAAAAA",
  lightgray: "#d9d9d9",
  red: "#FF0000"
};
module.exports = {
  colors: colors
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var window_or_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! window-or-global */ "window-or-global");
/* harmony import */ var window_or_global__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(window_or_global__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var Root = function Root(props) {
  var store = props.store,
      pageProps = props.pageProps,
      Component = props.Component,
      router = props.router;
  var comparePath = router.route.indexOf("compare");
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {}, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(recoil__WEBPACK_IMPORTED_MODULE_4__["RecoilRoot"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, comparePath === -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", null, "Static Website")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MainArea, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, pageProps))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", null, "\uBE44\uAD50 \uACB0\uACFC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, pageProps))));
};

Root.defaultProps = {
  pageProps: {}
};

Root.getInitialProps = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var pageProps, ctx;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pageProps = {};
            ctx = context.ctx;

            if (!context.Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return context.Component.getInitialProps(ctx);

          case 5:
            pageProps = _context.sent;

          case 6:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

var MainArea = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "_app__MainArea",
  componentId: "sc-18jabd8-0"
})(["position:relative;width:800px;padding:102px calc(50% - 400px);"]);
/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recoil");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "window-or-global":
/*!***********************************!*\
  !*** external "window-or-global" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("window-or-global");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map