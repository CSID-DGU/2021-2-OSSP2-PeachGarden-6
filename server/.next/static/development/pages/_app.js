((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_constants_colors__WEBPACK_IMPORTED_MODULE_3__);






var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderTitleDiv, null, "PLAYER - BATTLE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Header));
var HeaderDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__HeaderDiv",
  componentId: "sc-14sgk44-0"
})(["z-index:100;top:0;position:fixed;width:100%;background-color:", ";"], _constants_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].main);
var HeaderTitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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

var NavigationDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Navigation__NavigationDiv",
  componentId: "sc-jvyhur-0"
})(["width:800px;padding:0 calc(50% - 400px);height:fit-content;background-color:#000000;display:flex;justify-content:space-between;"]);
var NavButtonButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
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
  lightgray: "#d9d9d9"
};
module.exports = {
  colors: colors
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/reflect/construct.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/set.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! ../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__(/*! ../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/promise.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/promise.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/reflect/construct.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/reflect/construct.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.reflect.construct */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.reflect.construct.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Reflect.construct;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/set.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/set.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.set.js");
__webpack_require__(/*! ../modules/es7.set.to-json */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__(/*! ../modules/es7.set.of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__(/*! ../modules/es7.set.from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_bind.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_bind.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_task.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.reflect.construct.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.reflect.construct.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/next/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/app */ "./node_modules/next/dist/lib/app.js")


/***/ }),

/***/ "./node_modules/next/dist/lib/EventEmitter.js":
/*!****************************************************!*\
  !*** ./node_modules/next/dist/lib/EventEmitter.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    (0, _classCallCheck2.default)(this, EventEmitter);
    (0, _defineProperty2.default)(this, "listeners", {});
  }

  (0, _createClass2.default)(EventEmitter, [{
    key: "on",
    value: function on(event, cb) {
      if (!this.listeners[event]) {
        this.listeners[event] = new _set.default();
      }

      if (this.listeners[event].has(cb)) {
        throw new Error("The listener already exising in event: ".concat(event));
      }

      this.listeners[event].add(cb);
      return this;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      var listeners = this.listeners[event];
      var hasListeners = listeners && listeners.size;

      if (!hasListeners) {
        return false;
      }

      listeners.forEach(function (cb) {
        return cb.apply(void 0, data);
      }); // eslint-disable-line standard/no-callback-literal

      return true;
    }
  }, {
    key: "off",
    value: function off(event, cb) {
      this.listeners[event].delete(cb);
      return this;
    }
  }]);
  return EventEmitter;
}();

exports.default = EventEmitter;

/***/ }),

/***/ "./node_modules/next/dist/lib/app.js":
/*!*******************************************!*\
  !*** ./node_modules/next/dist/lib/app.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUrl = createUrl;
exports.Container = exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/next/dist/lib/utils.js");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/lib/router/index.js");

var App =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(App, _Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      var headManager = this.props.headManager;
      return {
        headManager: headManager,
        router: (0, _router.makePublicRouterInstance)(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return _react.default.createElement(Container, null, _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.next = 3;
                return (0, _utils.loadGetInitialProps)(Component, ctx);

              case 3:
                pageProps = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return App;
}(_react.Component);

exports.default = App;
(0, _defineProperty2.default)(App, "childContextTypes", {
  headManager: _propTypes.default.object,
  router: _propTypes.default.object
});

var Container =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(Container, _Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(_react.Component);

exports.Container = Container;
var warnUrl = (0, _utils.execOnce)(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/lib/head.js":
/*!********************************************!*\
  !*** ./node_modules/next/dist/lib/head.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultHead = defaultHead;
exports.default = void 0;

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/lib/side-effect.js"));

var Head =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Head, _React$Component);

  function Head() {
    (0, _classCallCheck2.default)(this, Head);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Head).apply(this, arguments));
  }

  (0, _createClass2.default)(Head, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Head;
}(_react.default.Component);

(0, _defineProperty2.default)(Head, "contextTypes", {
  headManager: _propTypes.default.object
});
var NEXT_HEAD_IDENTIFIER = 'next-head';

function defaultHead() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NEXT_HEAD_IDENTIFIER;
  return [_react.default.createElement("meta", {
    key: "charSet",
    charSet: "utf-8",
    className: className
  })];
}

function reduceComponents(components) {
  return components.map(function (component) {
    return _react.default.Children.toArray(component.props.children);
  }).reduce(function (a, b) {
    return a.concat(b);
  }, []).reduce(function (a, b) {
    if (_react.default.Fragment && b.type === _react.default.Fragment) {
      return a.concat(_react.default.Children.toArray(b.props.children));
    }

    return a.concat(b);
  }, []).reverse().concat(defaultHead('')).filter(Boolean).filter(unique()).reverse().map(function (c, i) {
    var className = (c.props && c.props.className ? c.props.className + ' ' : '') + NEXT_HEAD_IDENTIFIER;
    var key = c.key || i;
    return _react.default.cloneElement(c, {
      key: key,
      className: className
    });
  });
}

function mapOnServer(head) {
  return head;
}

function onStateChange(head) {
  if (this.context && this.context.headManager) {
    this.context.headManager.updateHead(head);
  }
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp', 'property'];
var ALLOWED_DUPLICATES = ['article:tag', 'og:image', 'og:image:alt', 'og:image:width', 'og:image:height', 'og:image:type', 'og:image:secure_url', 'og:image:url'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>,
 except we explicit allow it in ALLOWED_DUPLICATES array
*/

function unique() {
  var keys = new _set.default();
  var tags = new _set.default();
  var metaTypes = new _set.default();
  var metaCategories = {};
  return function (h) {
    if (h.key && h.key.indexOf('.$') === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
    }

    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set.default();
            if (categories.has(category) && ALLOWED_DUPLICATES.indexOf(category) === -1) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}

var _default = (0, _sideEffect.default)(reduceComponents, onStateChange, mapOnServer)(Head);

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/*!********************************************!*\
  !*** ./node_modules/next/dist/lib/link.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _router = _interopRequireWildcard(__webpack_require__(/*! ./router */ "./node_modules/next/dist/lib/router/index.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/next/dist/lib/utils.js");

/* global __NEXT_DATA__ */
function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "formatUrls", memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? (0, _url.format)(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? (0, _url.format)(asHref) : asHref
      };
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "linkClicked", function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      var replace = _this.props.replace;
      var changeMethod = replace ? 'replace' : 'push'; // straight up redirect

      _router.default[changeMethod](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/lib/p-queue.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/lib/p-queue.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

// based on https://github.com/sindresorhus/p-queue (MIT)
// modified for browser support
var Queue =
/*#__PURE__*/
function () {
  function Queue() {
    (0, _classCallCheck2.default)(this, Queue);
    this._queue = [];
  }

  (0, _createClass2.default)(Queue, [{
    key: "enqueue",
    value: function enqueue(run) {
      this._queue.push(run);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this._queue.shift();
    }
  }, {
    key: "size",
    get: function get() {
      return this._queue.length;
    }
  }]);
  return Queue;
}();

var PQueue =
/*#__PURE__*/
function () {
  function PQueue(opts) {
    (0, _classCallCheck2.default)(this, PQueue);
    opts = (0, _assign.default)({
      concurrency: Infinity,
      queueClass: Queue
    }, opts);

    if (opts.concurrency < 1) {
      throw new TypeError('Expected `concurrency` to be a number from 1 and up');
    }

    this.queue = new opts.queueClass(); // eslint-disable-line new-cap

    this._pendingCount = 0;
    this._concurrency = opts.concurrency;

    this._resolveEmpty = function () {};
  }

  (0, _createClass2.default)(PQueue, [{
    key: "_next",
    value: function _next() {
      this._pendingCount--;

      if (this.queue.size > 0) {
        this.queue.dequeue()();
      } else {
        this._resolveEmpty();
      }
    }
  }, {
    key: "add",
    value: function add(fn, opts) {
      var _this = this;

      return new _promise.default(function (resolve, reject) {
        var run = function run() {
          _this._pendingCount++;
          fn().then(function (val) {
            resolve(val);

            _this._next();
          }, function (err) {
            reject(err);

            _this._next();
          });
        };

        if (_this._pendingCount < _this._concurrency) {
          run();
        } else {
          _this.queue.enqueue(run, opts);
        }
      });
    }
  }, {
    key: "onEmpty",
    value: function onEmpty() {
      var _this2 = this;

      return new _promise.default(function (resolve) {
        var existingResolve = _this2._resolveEmpty;

        _this2._resolveEmpty = function () {
          existingResolve();
          resolve();
        };
      });
    }
  }, {
    key: "size",
    get: function get() {
      return this.queue.size;
    }
  }, {
    key: "pending",
    get: function get() {
      return this._pendingCount;
    }
  }]);
  return PQueue;
}();

exports.default = PQueue;

/***/ }),

/***/ "./node_modules/next/dist/lib/router/index.js":
/*!****************************************************!*\
  !*** ./node_modules/next/dist/lib/router/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._rewriteUrlForNextExport = _rewriteUrlForNextExport;
exports.makePublicRouterInstance = makePublicRouterInstance;
Object.defineProperty(exports, "withRouter", {
  enumerable: true,
  get: function get() {
    return _withRouter.default;
  }
});
exports.Router = exports.createRouter = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/lib/router/router.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/lib/utils.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/lib/router/with-router.js"));

/* global window */
var SingletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return _router.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    _router.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});
var warnAboutRouterOnAppUpdated = (0, _utils.execOnce)(function () {
  console.warn("Router.onAppUpdated is removed - visit https://err.sh/zeit/next.js/no-on-app-updated-hook for more information.");
});
Object.defineProperty(SingletonRouter, 'onAppUpdated', {
  get: function get() {
    return null;
  },
  set: function set() {
    warnAboutRouterOnAppUpdated();
    return null;
  }
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


var _default = SingletonRouter; // Reexport the withRoute HOC

exports.default = _default;

// INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(_router.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.createRouter = createRouter;
var Router = _router.default;
exports.Router = Router;

function _rewriteUrlForNextExport(url) {
  var _url$split = url.split('#'),
      _url$split2 = (0, _slicedToArray2.default)(_url$split, 2),
      hash = _url$split2[1];

  url = url.replace(/#.*/, '');

  var _url$split3 = url.split('?'),
      _url$split4 = (0, _slicedToArray2.default)(_url$split3, 2),
      path = _url$split4[0],
      qs = _url$split4[1];

  path = path.replace(/\/$/, '');
  var newPath = path; // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) {
    newPath = "".concat(path, "/");
  }

  if (qs) {
    newPath = "".concat(newPath, "?").concat(qs);
  }

  if (hash) {
    newPath = "".concat(newPath, "#").concat(hash);
  }

  return newPath;
} // This function is used to create the `withRouter` router instance


function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _objectSpread2.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/lib/router/router.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/lib/router/router.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _url2 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var _EventEmitter = _interopRequireDefault(__webpack_require__(/*! ../EventEmitter */ "./node_modules/next/dist/lib/EventEmitter.js"));

var _shallowEquals = _interopRequireDefault(__webpack_require__(/*! ../shallow-equals */ "./node_modules/next/dist/lib/shallow-equals.js"));

var _pQueue = _interopRequireDefault(__webpack_require__(/*! ../p-queue */ "./node_modules/next/dist/lib/p-queue.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/lib/utils.js");

var _ = __webpack_require__(/*! ./ */ "./node_modules/next/dist/lib/router/index.js");

/* global __NEXT_DATA__ */
var Router =
/*#__PURE__*/
function () {
  function Router(_pathname, _query, _as2) {
    var _this = this;

    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        Component = _ref.Component,
        ErrorComponent = _ref.ErrorComponent,
        err = _ref.err;

    (0, _classCallCheck2.default)(this, Router);
    (0, _defineProperty2.default)(this, "onPopState", function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var pathname = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _url2.format)({
          pathname: pathname,
          query: query
        }), (0, _utils.getURL)());

        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (!_this._beforePopState(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    });
    // represents the current component key
    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (Component !== ErrorComponent) {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err
      };
    }

    this.components['/_app'] = {
      Component: App // Backwards compat for Router.router.events
      // TODO: Should be remove the following major version as it was never documented

    };
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.prefetchQueue = new _pQueue.default({
      concurrency: 2
    });
    this.ErrorComponent = ErrorComponent;
    this.pathname = _pathname;
    this.query = _query;
    this.asPath = _as2;
    this.subscriptions = new _set.default();
    this.componentLoadCancel = null;

    this._beforePopState = function () {
      return true;
    };

    if (typeof window !== 'undefined') {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', (0, _url2.format)({
        pathname: _pathname,
        query: _query
      }), (0, _utils.getURL)());
      window.addEventListener('popstate', this.onPopState);
    }
  }

  (0, _createClass2.default)(Router, [{
    key: "update",
    value: function update(route, Component) {
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = (0, _objectSpread2.default)({}, data, {
        Component: Component
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function () {
      var _reload = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(route) {
        var pathname, query, url, as, routeInfo, error;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                delete this.components[route];
                this.pageLoader.clearCache(route);

                if (!(route !== this.route)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                pathname = this.pathname, query = this.query;
                url = window.location.href; // This makes sure we only use pathname + query + hash, to mirror `asPath` coming from the server.

                as = window.location.pathname + window.location.search + window.location.hash;
                Router.events.emit('routeChangeStart', url);
                _context.next = 10;
                return this.getRouteInfo(route, pathname, query, as);

              case 10:
                routeInfo = _context.sent;
                error = routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                this.notify(routeInfo);

                if (!error) {
                  _context.next = 18;
                  break;
                }

                Router.events.emit('routeChangeError', error, url);
                throw error;

              case 18:
                Router.events.emit('routeChangeComplete', url);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function reload(_x) {
        return _reload.apply(this, arguments);
      }

      return reload;
    }()
  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(method, _url, _as, options) {
        var url, as, _parse, asPathname, asQuery, _parse2, pathname, query, route, _options$shallow, shallow, routeInfo, _routeInfo, error, hash;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // If url and as provided as an object representation,
                // we'll format them into the string version here.
                url = (0, _typeof2.default)(_url) === 'object' ? (0, _url2.format)(_url) : _url;
                as = (0, _typeof2.default)(_as) === 'object' ? (0, _url2.format)(_as) : _as; // Add the ending slash to the paths. So, we can serve the
                // "<page>/index.html" directly for the SSR page.

                if (__NEXT_DATA__.nextExport) {
                  as = (0, _._rewriteUrlForNextExport)(as);
                }

                this.abortComponentLoad(as); // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.

                if (!this.onlyAHashChange(as)) {
                  _context2.next = 10;
                  break;
                }

                Router.events.emit('hashChangeStart', as);
                this.changeState(method, url, as);
                this.scrollToHash(as);
                Router.events.emit('hashChangeComplete', as);
                return _context2.abrupt("return", true);

              case 10:
                _parse = (0, _url2.parse)(as, true), asPathname = _parse.pathname, asQuery = _parse.query;
                _parse2 = (0, _url2.parse)(url, true), pathname = _parse2.pathname, query = _parse2.query; // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)

                if (!this.urlIsNew(asPathname, asQuery)) {
                  method = 'replaceState';
                }

                route = toRoute(pathname);
                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeInfo = null;
                Router.events.emit('routeChangeStart', as); // If shallow === false and other conditions met, we reuse the
                // existing routeInfo for this route.
                // Because of this, getInitialProps would not run.

                if (!(shallow && this.isShallowRoutingPossible(route))) {
                  _context2.next = 21;
                  break;
                }

                routeInfo = this.components[route];
                _context2.next = 24;
                break;

              case 21:
                _context2.next = 23;
                return this.getRouteInfo(route, pathname, query, as);

              case 23:
                routeInfo = _context2.sent;

              case 24:
                _routeInfo = routeInfo, error = _routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context2.next = 27;
                  break;
                }

                return _context2.abrupt("return", false);

              case 27:
                Router.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, as, options);
                hash = window.location.hash.substring(1);
                this.set(route, pathname, query, as, (0, _objectSpread2.default)({}, routeInfo, {
                  hash: hash
                }));

                if (!error) {
                  _context2.next = 34;
                  break;
                }

                Router.events.emit('routeChangeError', error, as);
                throw error;

              case 34:
                Router.events.emit('routeChangeComplete', as);
                return _context2.abrupt("return", true);

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function change(_x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, null, as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(route, pathname, query, as) {
        var routeInfo, _routeInfo2, Component, ctx, _Component, _ctx;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                routeInfo = null;
                _context3.prev = 1;
                routeInfo = this.components[route];

                if (routeInfo) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 6;
                return this.fetchComponent(route, as);

              case 6:
                _context3.t0 = _context3.sent;
                routeInfo = {
                  Component: _context3.t0
                };

              case 8:
                _routeInfo2 = routeInfo, Component = _routeInfo2.Component;

                if (!(typeof Component !== 'function')) {
                  _context3.next = 11;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 11:
                ctx = {
                  pathname: pathname,
                  query: query,
                  asPath: as
                };
                _context3.next = 14;
                return this.getInitialProps(Component, ctx);

              case 14:
                routeInfo.props = _context3.sent;
                this.components[route] = routeInfo;
                _context3.next = 40;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t1 = _context3["catch"](1);

                if (!(_context3.t1.code === 'PAGE_LOAD_ERROR')) {
                  _context3.next = 24;
                  break;
                }

                // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.
                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So, we need to mark it as a cancelled error and stop the routing logic.

                _context3.t1.cancelled = true;
                return _context3.abrupt("return", {
                  error: _context3.t1
                });

              case 24:
                if (!_context3.t1.cancelled) {
                  _context3.next = 26;
                  break;
                }

                return _context3.abrupt("return", {
                  error: _context3.t1
                });

              case 26:
                _Component = this.ErrorComponent;
                routeInfo = {
                  Component: _Component,
                  err: _context3.t1
                };
                _ctx = {
                  err: _context3.t1,
                  pathname: pathname,
                  query: query
                };
                _context3.prev = 29;
                _context3.next = 32;
                return this.getInitialProps(_Component, _ctx);

              case 32:
                routeInfo.props = _context3.sent;
                _context3.next = 39;
                break;

              case 35:
                _context3.prev = 35;
                _context3.t2 = _context3["catch"](29);
                console.error('Error in error page `getInitialProps`: ', _context3.t2);
                routeInfo.props = {};

              case 39:
                routeInfo.error = _context3.t1;

              case 40:
                return _context3.abrupt("return", routeInfo);

              case 41:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 18], [29, 35]]);
      }));

      function getRouteInfo(_x6, _x7, _x8, _x9) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._beforePopState = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = (0, _slicedToArray2.default)(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = (0, _slicedToArray2.default)(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = (0, _slicedToArray2.default)(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(pathname, query) {
      return this.pathname !== pathname || !(0, _shallowEquals.default)(query, this.query);
    }
  }, {
    key: "isShallowRoutingPossible",
    value: function isShallowRoutingPossible(route) {
      return (// If there's cached routeInfo for the route.
        Boolean(this.components[route]) && // If the route is already rendered on the screen.
        this.route === route
      );
    }
  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(url) {
        var _this2 = this;

        var _parse3, pathname, route;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (false) {}

                return _context4.abrupt("return");

              case 2:
                _parse3 = (0, _url2.parse)(url), pathname = _parse3.pathname;
                route = toRoute(pathname);
                return _context4.abrupt("return", this.prefetchQueue.add(function () {
                  return _this2.fetchRoute(route);
                }));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x10) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(route, as) {
        var cancelled, cancel, Component, error;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.componentLoadCancel = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.fetchRoute(route);

              case 4:
                Component = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                return _context5.abrupt("return", Component);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x11, _x12) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(Component, ctx) {
        var cancelled, cancel, App, props, err;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cancelled = false;

                cancel = function cancel() {
                  cancelled = true;
                };

                this.componentLoadCancel = cancel;
                App = this.components['/_app'].Component;
                _context6.next = 6;
                return (0, _utils.loadGetInitialProps)(App, {
                  Component: Component,
                  router: this,
                  ctx: ctx
                });

              case 6:
                props = _context6.sent;

                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                if (!cancelled) {
                  _context6.next = 12;
                  break;
                }

                err = new Error('Loading initial props cancelled');
                err.cancelled = true;
                throw err;

              case 12:
                return _context6.abrupt("return", props);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getInitialProps(_x13, _x14) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "fetchRoute",
    value: function () {
      var _fetchRoute = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(route) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.pageLoader.loadPage(route));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function fetchRoute(_x15) {
        return _fetchRoute.apply(this, arguments);
      }

      return fetchRoute;
    }()
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.componentLoadCancel) {
        Router.events.emit('routeChangeError', new Error('Route Cancelled'), as);
        this.componentLoadCancel();
        this.componentLoadCancel = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      var App = this.components['/_app'].Component;
      this.subscriptions.forEach(function (fn) {
        return fn((0, _objectSpread2.default)({}, data, {
          App: App
        }));
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn) {
      var _this3 = this;

      this.subscriptions.add(fn);
      return function () {
        return _this3.subscriptions.delete(fn);
      };
    }
  }]);
  return Router;
}();

exports.default = Router;
(0, _defineProperty2.default)(Router, "events", new _EventEmitter.default());

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

/***/ }),

/***/ "./node_modules/next/dist/lib/router/with-router.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/lib/router/with-router.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withRouter;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/lib/utils.js");

function withRouter(ComposedComponent) {
  var displayName = (0, _utils.getDisplayName)(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(WithRouteWrapper, _Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        var props = (0, _objectSpread2.default)({
          router: this.context.router
        }, this.props);
        return _react.default.createElement(ComposedComponent, props);
      }
    }]);
    return WithRouteWrapper;
  }(_react.Component);

  (0, _defineProperty2.default)(WithRouteWrapper, "contextTypes", {
    router: _propTypes.default.object
  });
  (0, _defineProperty2.default)(WithRouteWrapper, "displayName", "withRouter(".concat(displayName, ")"));
  return (0, _hoistNonReactStatics.default)(WithRouteWrapper, ComposedComponent);
}

/***/ }),

/***/ "./node_modules/next/dist/lib/shallow-equals.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/lib/shallow-equals.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEquals;

function shallowEquals(a, b) {
  for (var i in a) {
    if (b[i] !== a[i]) return false;
  }

  for (var _i in b) {
    if (b[_i] !== a[_i]) return false;
  }

  return true;
}

/***/ }),

/***/ "./node_modules/next/dist/lib/side-effect.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/lib/side-effect.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withSideEffect;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/next/dist/lib/utils.js");

function withSideEffect(reduceComponentsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reduceComponentsToState !== 'function') {
    throw new Error('Expected reduceComponentsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = new _set.default();
    var state;

    function emitChange(component) {
      state = reduceComponentsToState((0, _toConsumableArray2.default)(mountedInstances));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient.call(component, state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(SideEffect, _Component);
      (0, _createClass2.default)(SideEffect, null, [{
        key: "peek",
        // Expose canUseDOM so tests can monkeypatch it
        // Try to use displayName of wrapped component
        value: function peek() {
          return state;
        }
      }, {
        key: "rewind",
        value: function rewind() {
          if (SideEffect.canUseDOM) {
            throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
          }

          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);

      function SideEffect(props) {
        var _this;

        (0, _classCallCheck2.default)(this, SideEffect);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SideEffect).call(this, props));

        if (!SideEffect.canUseDOM) {
          mountedInstances.add((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
          emitChange((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
        }

        return _this;
      }

      (0, _createClass2.default)(SideEffect, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          mountedInstances.delete(this);
          emitChange(this);
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(WrappedComponent, null, this.props.children);
        }
      }]);
      return SideEffect;
    }(_react.Component);

    (0, _defineProperty2.default)(SideEffect, "canUseDOM", typeof window !== 'undefined');
    (0, _defineProperty2.default)(SideEffect, "contextTypes", WrappedComponent.contextTypes);
    (0, _defineProperty2.default)(SideEffect, "displayName", "SideEffect(".concat((0, _utils.getDisplayName)(WrappedComponent), ")"));
    return SideEffect;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/lib/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/next/dist/lib/utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.execOnce = execOnce;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(_this, args);
    }
  };
}

function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  return Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(Component, ctx) {
    var compName, message, props, _compName, _message;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!(Component.prototype && Component.prototype.getInitialProps)) {
              _context.next = 5;
              break;
            }

            compName = getDisplayName(Component);
            message = "\"".concat(compName, ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 5:
            if (Component.getInitialProps) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {});

          case 7:
            _context.next = 9;
            return Component.getInitialProps(ctx);

          case 9:
            props = _context.sent;

            if (!(ctx.res && isResSent(ctx.res))) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", props);

          case 12:
            if (props) {
              _context.next = 16;
              break;
            }

            _compName = getDisplayName(Component);
            _message = "\"".concat(_compName, ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 16:
            return _context.abrupt("return", props);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/head */ "./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/link */ "./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/regenerator-runtime/runtime-module.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/regenerator-runtime/runtime-module.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/next/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/next/node_modules/regenerator-runtime/runtime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/node_modules/regenerator-runtime/runtime.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_202902f7c98643d43eb0 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_202902f7c98643d43eb0 */ "dll-reference dll_202902f7c98643d43eb0"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
var toObject = Object;
var $push = callBound('Array.prototype.push');
var $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

// eslint-disable-next-line no-unused-vars
module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if ($propIsEnumerable(source, key)) {
					$push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if ($propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.assign/shim.js");

var polyfill = callBind.apply(getPolyfill());
// eslint-disable-next-line no-unused-vars
var bound = function assign(target, source1) {
	return polyfill(Object, arguments);
};

defineProperties(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	/*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	/*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_202902f7c98643d43eb0 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_202902f7c98643d43eb0 */ "dll-reference dll_202902f7c98643d43eb0"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_202902f7c98643d43eb0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_202902f7c98643d43eb0 */ "dll-reference dll_202902f7c98643d43eb0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/recoil/es/recoil.js":
/*!******************************************!*\
  !*** ./node_modules/recoil/es/recoil.js ***!
  \******************************************/
/*! exports provided: default, DefaultValue, RecoilLoadable, RecoilRoot, atom, atomFamily, constSelector, errorSelector, isRecoilValue, noWait, readOnlySelector, retentionZone, selector, selectorFamily, snapshot_UNSTABLE, useGetRecoilValueInfo_UNSTABLE, useGotoRecoilSnapshot, useRecoilBridgeAcrossReactRoots_UNSTABLE, useRecoilCallback, useRecoilRefresher_UNSTABLE, useRecoilSnapshot, useRecoilState, useRecoilStateLoadable, useRecoilTransactionObserver_UNSTABLE, useRecoilTransaction_UNSTABLE, useRecoilValue, useRecoilValueLoadable, useResetRecoilState, useRetain, useSetRecoilState, useSetUnvalidatedAtomValues_UNSTABLE, useTransactionObservation_UNSTABLE, waitForAll, waitForAllSettled, waitForAny, waitForNone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValue", function() { return Recoil_index_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoilLoadable", function() { return Recoil_index_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoilRoot", function() { return Recoil_index_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atom", function() { return Recoil_index_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atomFamily", function() { return Recoil_index_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constSelector", function() { return Recoil_index_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorSelector", function() { return Recoil_index_11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRecoilValue", function() { return Recoil_index_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noWait", function() { return Recoil_index_13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readOnlySelector", function() { return Recoil_index_12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retentionZone", function() { return Recoil_index_35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return Recoil_index_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorFamily", function() { return Recoil_index_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshot_UNSTABLE", function() { return Recoil_index_33; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetRecoilValueInfo_UNSTABLE", function() { return Recoil_index_24; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGotoRecoilSnapshot", function() { return Recoil_index_28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecoilBridgeAcrossReactRoots_UNSTABLE", function() { return Recoil_index_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecoilCallback", function() { return Recoil_index_26; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecoilRefresher_UNSTABLE", function() { return Recoil_index_25; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecoilSnapshot", function() { return Recoil_index_29; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecoilState", function() { return Recoil_index_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecoilStateLoadable", function() { return Recoil_index_21; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecoilTransactionObserver_UNSTABLE", function() { return Recoil_index_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecoilTransaction_UNSTABLE", function() { return Recoil_index_27; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecoilValue", function() { return Recoil_index_18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRecoilValueLoadable", function() { return Recoil_index_19; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResetRecoilState", function() { return Recoil_index_23; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetain", function() { return Recoil_index_34; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetRecoilState", function() { return Recoil_index_22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetUnvalidatedAtomValues_UNSTABLE", function() { return Recoil_index_32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransactionObservation_UNSTABLE", function() { return Recoil_index_31; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForAll", function() { return Recoil_index_16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForAllSettled", function() { return Recoil_index_17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForAny", function() { return Recoil_index_15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForNone", function() { return Recoil_index_14; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function err(message) {
  const error = new Error(message); // In V8, Error objects keep the closure scope chain alive until the
  // err.stack property is accessed.

  if (error.stack === undefined) {
    // IE sets the stack only if error is thrown
    try {
      throw error;
    } catch (_) {} // eslint-disable-line fb-www/no-unused-catch-bindings, no-empty

  }

  return error;
}

var err_1 = err;

// @oss-only


var Recoil_err = err_1;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

// Split declaration and implementation to allow this function to pretend to
// check for actual instance of Promise instead of something with a `then`
// method.
// eslint-disable-next-line no-redeclare
function isPromise(p) {
  return !!p && typeof p.then === 'function';
}

var Recoil_isPromise = isPromise;

function nullthrows(x, message) {
  if (x != null) {
    return x;
  }

  throw Recoil_err(message !== null && message !== void 0 ? message : 'Got unexpected null or undefined');
}

var Recoil_nullthrows = nullthrows;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class BaseLoadable {
  getValue() {
    throw Recoil_err('BaseLoadable');
  }

  toPromise() {
    throw Recoil_err('BaseLoadable');
  }

  valueMaybe() {
    throw Recoil_err('BaseLoadable');
  }

  valueOrThrow() {
    // $FlowFixMe[prop-missing]
    throw Recoil_err(`Loadable expected value, but in "${this.state}" state`);
  }

  promiseMaybe() {
    throw Recoil_err('BaseLoadable');
  }

  promiseOrThrow() {
    // $FlowFixMe[prop-missing]
    throw Recoil_err(`Loadable expected promise, but in "${this.state}" state`);
  }

  errorMaybe() {
    throw Recoil_err('BaseLoadable');
  }

  errorOrThrow() {
    // $FlowFixMe[prop-missing]
    throw Recoil_err(`Loadable expected error, but in "${this.state}" state`);
  }

  is(other) {
    // $FlowFixMe[prop-missing]
    return other.state === this.state && other.contents === this.contents;
  }

  map(_map) {
    throw Recoil_err('BaseLoadable');
  }

}

class ValueLoadable extends BaseLoadable {
  constructor(value) {
    super();

    _defineProperty(this, "state", 'hasValue');

    _defineProperty(this, "contents", void 0);

    this.contents = value;
  }

  getValue() {
    return this.contents;
  }

  toPromise() {
    return Promise.resolve(this.contents);
  }

  valueMaybe() {
    return this.contents;
  }

  valueOrThrow() {
    return this.contents;
  }

  promiseMaybe() {
    return undefined;
  }

  errorMaybe() {
    return undefined;
  }

  map(map) {
    try {
      const next = map(this.contents);
      return Recoil_isPromise(next) ? loadableWithPromise(next) : isLoadable(next) ? next : loadableWithValue(next);
    } catch (e) {
      return Recoil_isPromise(e) ? // If we "suspended", then try again.
      // errors and subsequent retries will be handled in 'loading' case
      loadableWithPromise(e.next(() => this.map(map))) : loadableWithError(e);
    }
  }

}

class ErrorLoadable extends BaseLoadable {
  constructor(error) {
    super();

    _defineProperty(this, "state", 'hasError');

    _defineProperty(this, "contents", void 0);

    this.contents = error;
  }

  getValue() {
    throw this.contents;
  }

  toPromise() {
    return Promise.reject(this.contents);
  }

  valueMaybe() {
    return undefined;
  }

  promiseMaybe() {
    return undefined;
  }

  errorMaybe() {
    return this.contents;
  }

  errorOrThrow() {
    return this.contents;
  }

  map(_map) {
    // $FlowIssue[incompatible-return]
    return this;
  }

}

class LoadingLoadable extends BaseLoadable {
  constructor(promise) {
    super();

    _defineProperty(this, "state", 'loading');

    _defineProperty(this, "contents", void 0);

    this.contents = promise;
  }

  getValue() {
    throw this.contents;
  }

  toPromise() {
    return this.contents;
  }

  valueMaybe() {
    return undefined;
  }

  promiseMaybe() {
    return this.contents;
  }

  promiseOrThrow() {
    return this.contents;
  }

  errorMaybe() {
    return undefined;
  }

  map(map) {
    return loadableWithPromise(this.contents.then(value => {
      const next = map(value);

      if (isLoadable(next)) {
        const nextLoadable = next;

        switch (nextLoadable.state) {
          case 'hasValue':
            return nextLoadable.contents;

          case 'hasError':
            throw nextLoadable.contents;

          case 'loading':
            return nextLoadable.contents;
        }
      } // $FlowIssue[incompatible-return]


      return next;
    }).catch(e => {
      if (Recoil_isPromise(e)) {
        // we were "suspended," try again
        return e.then(() => this.map(map).contents);
      }

      throw e;
    }));
  }

}

function loadableWithValue(value) {
  return Object.freeze(new ValueLoadable(value));
}

function loadableWithError(error) {
  return Object.freeze(new ErrorLoadable(error));
}

function loadableWithPromise(promise) {
  return Object.freeze(new LoadingLoadable(promise));
}

function loadableLoading() {
  return Object.freeze(new LoadingLoadable(new Promise(() => {})));
}

function loadableAllArray(inputs) {
  return inputs.every(i => i.state === 'hasValue') ? loadableWithValue(inputs.map(i => i.contents)) : inputs.some(i => i.state === 'hasError') ? loadableWithError(Recoil_nullthrows(inputs.find(i => i.state === 'hasError'), 'Invalid loadable passed to loadableAll').contents) : loadableWithPromise(Promise.all(inputs.map(i => i.contents)));
}

function loadableAll(inputs) {
  const unwrapedInputs = Array.isArray(inputs) ? inputs : Object.getOwnPropertyNames(inputs).map(key => inputs[key]);
  const output = loadableAllArray(unwrapedInputs);
  return Array.isArray(inputs) ? // $FlowIssue[incompatible-return]
  output : // Object.getOwnPropertyNames() has consistent key ordering with ES6
  // $FlowIssue[incompatible-call]
  output.map(outputs => Object.getOwnPropertyNames(inputs).reduce((out, key, idx) => ({ ...out,
    [key]: outputs[idx]
  }), {}));
}

function isLoadable(x) {
  return x instanceof BaseLoadable;
}

const LoadableStaticInterface = {
  of: value => Recoil_isPromise(value) ? loadableWithPromise(value) : loadableWithValue(value),
  error: error => loadableWithError(error),
  // $FlowIssue[unclear-type]
  all: loadableAll,
  isLoadable
};
var Recoil_Loadable = {
  loadableWithValue,
  loadableWithError,
  loadableWithPromise,
  loadableLoading,
  loadableAll,
  isLoadable,
  RecoilLoadable: LoadableStaticInterface
};

var Recoil_Loadable_1 = Recoil_Loadable.loadableWithValue;
var Recoil_Loadable_2 = Recoil_Loadable.loadableWithError;
var Recoil_Loadable_3 = Recoil_Loadable.loadableWithPromise;
var Recoil_Loadable_4 = Recoil_Loadable.loadableLoading;
var Recoil_Loadable_5 = Recoil_Loadable.loadableAll;
var Recoil_Loadable_6 = Recoil_Loadable.isLoadable;
var Recoil_Loadable_7 = Recoil_Loadable.RecoilLoadable;

var Recoil_Loadable$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  loadableWithValue: Recoil_Loadable_1,
  loadableWithError: Recoil_Loadable_2,
  loadableWithPromise: Recoil_Loadable_3,
  loadableLoading: Recoil_Loadable_4,
  loadableAll: Recoil_Loadable_5,
  isLoadable: Recoil_Loadable_6,
  RecoilLoadable: Recoil_Loadable_7
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function sprintf(format, ...args) {
  let index = 0;
  return format.replace(/%s/g, () => String(args[index++]));
}

var sprintf_1 = sprintf;

function expectationViolation(format, ...args) {
  if (true) {
    const message = sprintf_1.call(null, format, ...args);
    const error = new Error(message);
    error.name = 'Expectation Violation';
    console.error(error);
  }
}

var expectationViolation_1 = expectationViolation;

// @oss-only


var Recoil_expectationViolation = expectationViolation_1;

var _useMutableSource;

 // FIXME T2710559282599660


const useMutableSource = // flowlint-line unclear-type:off
(_useMutableSource = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMutableSource) !== null && _useMutableSource !== void 0 ? _useMutableSource : react__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_useMutableSource; // flowlint-line unclear-type:off

function mutableSourceExists() {
  return useMutableSource && !(typeof window !== 'undefined' && window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE);
}

var Recoil_mutableSource = {
  mutableSourceExists,
  useMutableSource
};

const {
  mutableSourceExists: mutableSourceExists$1
} = Recoil_mutableSource;

const gks = new Map().set('recoil_hamt_2020', true).set('recoil_memory_managament_2020', true).set('recoil_suppress_rerender_in_callback', true);

function Recoil_gkx(gk) {
  var _gks$get;

  if (gk === 'recoil_early_rendering_2021' && !mutableSourceExists$1()) {
    return false;
  }

  return (_gks$get = gks.get(gk)) !== null && _gks$get !== void 0 ? _gks$get : false;
}

Recoil_gkx.setPass = gk => {
  gks.set(gk, true);
};

Recoil_gkx.setFail = gk => {
  gks.set(gk, false);
};

var Recoil_gkx_1 = Recoil_gkx; // @oss-only

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the mapper function.
 */

function mapIterable(iterable, callback) {
  // Use generator to create iterable/iterator
  return function* () {
    let index = 0;

    for (const value of iterable) {
      yield callback(value, index++);
    }
  }();
}

var Recoil_mapIterable = mapIterable;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function recoverableViolation(message, projectName, {
  error
} = {}) {
  if (true) {
    console.error(message, error);
  }

  return null;
}

var recoverableViolation_1 = recoverableViolation;

// @oss-only


var Recoil_recoverableViolation = recoverableViolation_1;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

// eslint-disable-next-line no-unused-vars
class AbstractRecoilValue {
  constructor(newKey) {
    _defineProperty(this, "key", void 0);

    this.key = newKey;
  }

}

class RecoilState extends AbstractRecoilValue {}

class RecoilValueReadOnly extends AbstractRecoilValue {}

function isRecoilValue(x) {
  return x instanceof RecoilState || x instanceof RecoilValueReadOnly;
}

var Recoil_RecoilValue = {
  AbstractRecoilValue,
  RecoilState,
  RecoilValueReadOnly,
  isRecoilValue
};

var Recoil_RecoilValue_1 = Recoil_RecoilValue.AbstractRecoilValue;
var Recoil_RecoilValue_2 = Recoil_RecoilValue.RecoilState;
var Recoil_RecoilValue_3 = Recoil_RecoilValue.RecoilValueReadOnly;
var Recoil_RecoilValue_4 = Recoil_RecoilValue.isRecoilValue;

var Recoil_RecoilValue$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AbstractRecoilValue: Recoil_RecoilValue_1,
  RecoilState: Recoil_RecoilValue_2,
  RecoilValueReadOnly: Recoil_RecoilValue_3,
  isRecoilValue: Recoil_RecoilValue_4
});

class DefaultValue {}

const DEFAULT_VALUE = new DefaultValue();

class RecoilValueNotReady extends Error {
  constructor(key) {
    super(`Tried to set the value of Recoil selector ${key} using an updater function, but it is an async selector in a pending or error state; this is not supported.`);
  }

}

// flowlint-next-line unclear-type:off
const nodes = new Map(); // flowlint-next-line unclear-type:off

const recoilValues = new Map();
/* eslint-disable no-redeclare */

function recoilValuesForKeys(keys) {
  return Recoil_mapIterable(keys, key => Recoil_nullthrows(recoilValues.get(key)));
}

function registerNode(node) {
  if (nodes.has(node.key)) {
    const message = `Duplicate atom key "${node.key}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`; // TODO Need to figure out if there is a standard/open-source equivalent to see if hot module replacement is happening:
    // prettier-ignore
    // @fb-only: if (__DEV__) {
    // @fb-only: const isAcceptingUpdate = require('__debug').isAcceptingUpdate;
    // prettier-ignore
    // @fb-only: if (typeof isAcceptingUpdate !== 'function' || !isAcceptingUpdate()) {
    // @fb-only: expectationViolation(message, 'recoil');
    // @fb-only: }
    // prettier-ignore
    // @fb-only: } else {
    // @fb-only: recoverableViolation(message, 'recoil');
    // @fb-only: }

    console.warn(message); // @oss-only
  }

  nodes.set(node.key, node);
  const recoilValue = node.set == null ? new Recoil_RecoilValue$1.RecoilValueReadOnly(node.key) : new Recoil_RecoilValue$1.RecoilState(node.key);
  recoilValues.set(node.key, recoilValue);
  return recoilValue;
}
/* eslint-enable no-redeclare */


class NodeMissingError extends Error {} // flowlint-next-line unclear-type:off


function getNode(key) {
  const node = nodes.get(key);

  if (node == null) {
    throw new NodeMissingError(`Missing definition for RecoilValue: "${key}""`);
  }

  return node;
} // flowlint-next-line unclear-type:off


function getNodeMaybe(key) {
  return nodes.get(key);
}

const configDeletionHandlers = new Map();

function deleteNodeConfigIfPossible(key) {
  var _node$shouldDeleteCon;

  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const node = nodes.get(key);

  if (node === null || node === void 0 ? void 0 : (_node$shouldDeleteCon = node.shouldDeleteConfigOnRelease) === null || _node$shouldDeleteCon === void 0 ? void 0 : _node$shouldDeleteCon.call(node)) {
    var _getConfigDeletionHan;

    nodes.delete(key);
    (_getConfigDeletionHan = getConfigDeletionHandler(key)) === null || _getConfigDeletionHan === void 0 ? void 0 : _getConfigDeletionHan();
    configDeletionHandlers.delete(key);
  }
}

function setConfigDeletionHandler(key, fn) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  if (fn === undefined) {
    configDeletionHandlers.delete(key);
  } else {
    configDeletionHandlers.set(key, fn);
  }
}

function getConfigDeletionHandler(key) {
  return configDeletionHandlers.get(key);
}

var Recoil_Node = {
  nodes,
  recoilValues,
  registerNode,
  getNode,
  getNodeMaybe,
  deleteNodeConfigIfPossible,
  setConfigDeletionHandler,
  getConfigDeletionHandler,
  recoilValuesForKeys,
  NodeMissingError,
  DefaultValue,
  DEFAULT_VALUE,
  RecoilValueNotReady
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function enqueueExecution(s, f) {
  f();
}

var Recoil_Queue = {
  enqueueExecution
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hamt_1 = createCommonjsModule(function (module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
    @fileOverview Hash Array Mapped Trie.

    Code based on: https://github.com/exclipy/pdata
*/


var hamt = {}; // export

/* Configuration
 ******************************************************************************/

var SIZE = 5;
var BUCKET_SIZE = Math.pow(2, SIZE);
var MASK = BUCKET_SIZE - 1;
var MAX_INDEX_NODE = BUCKET_SIZE / 2;
var MIN_ARRAY_NODE = BUCKET_SIZE / 4;
/*
 ******************************************************************************/

var nothing = {};

var constant = function constant(x) {
  return function () {
    return x;
  };
};
/**
    Get 32 bit hash of string.

    Based on:
    http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
*/


var hash = hamt.hash = function (str) {
  var type = typeof str === 'undefined' ? 'undefined' : _typeof(str);
  if (type === 'number') return str;
  if (type !== 'string') str += '';
  var hash = 0;

  for (var i = 0, len = str.length; i < len; ++i) {
    var c = str.charCodeAt(i);
    hash = (hash << 5) - hash + c | 0;
  }

  return hash;
};
/* Bit Ops
 ******************************************************************************/

/**
    Hamming weight.

    Taken from: http://jsperf.com/hamming-weight
*/


var popcount = function popcount(x) {
  x -= x >> 1 & 0x55555555;
  x = (x & 0x33333333) + (x >> 2 & 0x33333333);
  x = x + (x >> 4) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
};

var hashFragment = function hashFragment(shift, h) {
  return h >>> shift & MASK;
};

var toBitmap = function toBitmap(x) {
  return 1 << x;
};

var fromBitmap = function fromBitmap(bitmap, bit) {
  return popcount(bitmap & bit - 1);
};
/* Array Ops
 ******************************************************************************/

/**
    Set a value in an array.

    @param mutate Should the input array be mutated?
    @param at Index to change.
    @param v New value
    @param arr Array.
*/


var arrayUpdate = function arrayUpdate(mutate, at, v, arr) {
  var out = arr;

  if (!mutate) {
    var len = arr.length;
    out = new Array(len);

    for (var i = 0; i < len; ++i) {
      out[i] = arr[i];
    }
  }

  out[at] = v;
  return out;
};
/**
    Remove a value from an array.

    @param mutate Should the input array be mutated?
    @param at Index to remove.
    @param arr Array.
*/


var arraySpliceOut = function arraySpliceOut(mutate, at, arr) {
  var newLen = arr.length - 1;
  var i = 0;
  var g = 0;
  var out = arr;

  if (mutate) {
    i = g = at;
  } else {
    out = new Array(newLen);

    while (i < at) {
      out[g++] = arr[i++];
    }
  }

  ++i;

  while (i <= newLen) {
    out[g++] = arr[i++];
  }

  if (mutate) {
    out.length = newLen;
  }

  return out;
};
/**
    Insert a value into an array.

    @param mutate Should the input array be mutated?
    @param at Index to insert at.
    @param v Value to insert,
    @param arr Array.
*/


var arraySpliceIn = function arraySpliceIn(mutate, at, v, arr) {
  var len = arr.length;

  if (mutate) {
    var _i = len;

    while (_i >= at) {
      arr[_i--] = arr[_i];
    }

    arr[at] = v;
    return arr;
  }

  var i = 0,
      g = 0;
  var out = new Array(len + 1);

  while (i < at) {
    out[g++] = arr[i++];
  }

  out[at] = v;

  while (i < len) {
    out[++g] = arr[i++];
  }

  return out;
};
/* Node Structures
 ******************************************************************************/


var LEAF = 1;
var COLLISION = 2;
var INDEX = 3;
var ARRAY = 4;
/**
    Empty node.
*/

var empty = {
  __hamt_isEmpty: true
};

var isEmptyNode = function isEmptyNode(x) {
  return x === empty || x && x.__hamt_isEmpty;
};
/**
    Leaf holding a value.

    @member edit Edit of the node.
    @member hash Hash of key.
    @member key Key.
    @member value Value stored.
*/


var Leaf = function Leaf(edit, hash, key, value) {
  return {
    type: LEAF,
    edit: edit,
    hash: hash,
    key: key,
    value: value,
    _modify: Leaf__modify
  };
};
/**
    Leaf holding multiple values with the same hash but different keys.

    @member edit Edit of the node.
    @member hash Hash of key.
    @member children Array of collision children node.
*/


var Collision = function Collision(edit, hash, children) {
  return {
    type: COLLISION,
    edit: edit,
    hash: hash,
    children: children,
    _modify: Collision__modify
  };
};
/**
    Internal node with a sparse set of children.

    Uses a bitmap and array to pack children.

  @member edit Edit of the node.
    @member mask Bitmap that encode the positions of children in the array.
    @member children Array of child nodes.
*/


var IndexedNode = function IndexedNode(edit, mask, children) {
  return {
    type: INDEX,
    edit: edit,
    mask: mask,
    children: children,
    _modify: IndexedNode__modify
  };
};
/**
    Internal node with many children.

    @member edit Edit of the node.
    @member size Number of children.
    @member children Array of child nodes.
*/


var ArrayNode = function ArrayNode(edit, size, children) {
  return {
    type: ARRAY,
    edit: edit,
    size: size,
    children: children,
    _modify: ArrayNode__modify
  };
};
/**
    Is `node` a leaf node?
*/


var isLeaf = function isLeaf(node) {
  return node === empty || node.type === LEAF || node.type === COLLISION;
};
/* Internal node operations.
 ******************************************************************************/

/**
    Expand an indexed node into an array node.

  @param edit Current edit.
    @param frag Index of added child.
    @param child Added child.
    @param mask Index node mask before child added.
    @param subNodes Index node children before child added.
*/


var expand = function expand(edit, frag, child, bitmap, subNodes) {
  var arr = [];
  var bit = bitmap;
  var count = 0;

  for (var i = 0; bit; ++i) {
    if (bit & 1) arr[i] = subNodes[count++];
    bit >>>= 1;
  }

  arr[frag] = child;
  return ArrayNode(edit, count + 1, arr);
};
/**
    Collapse an array node into a indexed node.

  @param edit Current edit.
    @param count Number of elements in new array.
    @param removed Index of removed element.
    @param elements Array node children before remove.
*/


var pack = function pack(edit, count, removed, elements) {
  var children = new Array(count - 1);
  var g = 0;
  var bitmap = 0;

  for (var i = 0, len = elements.length; i < len; ++i) {
    if (i !== removed) {
      var elem = elements[i];

      if (elem && !isEmptyNode(elem)) {
        children[g++] = elem;
        bitmap |= 1 << i;
      }
    }
  }

  return IndexedNode(edit, bitmap, children);
};
/**
    Merge two leaf nodes.

    @param shift Current shift.
    @param h1 Node 1 hash.
    @param n1 Node 1.
    @param h2 Node 2 hash.
    @param n2 Node 2.
*/


var mergeLeaves = function mergeLeaves(edit, shift, h1, n1, h2, n2) {
  if (h1 === h2) return Collision(edit, h1, [n2, n1]);
  var subH1 = hashFragment(shift, h1);
  var subH2 = hashFragment(shift, h2);
  return IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), subH1 === subH2 ? [mergeLeaves(edit, shift + SIZE, h1, n1, h2, n2)] : subH1 < subH2 ? [n1, n2] : [n2, n1]);
};
/**
    Update an entry in a collision list.

    @param mutate Should mutation be used?
    @param edit Current edit.
    @param keyEq Key compare function.
    @param hash Hash of collision.
    @param list Collision list.
    @param f Update function.
    @param k Key to update.
    @param size Size ref.
*/


var updateCollisionList = function updateCollisionList(mutate, edit, keyEq, h, list, f, k, size) {
  var len = list.length;

  for (var i = 0; i < len; ++i) {
    var child = list[i];

    if (keyEq(k, child.key)) {
      var value = child.value;

      var _newValue = f(value);

      if (_newValue === value) return list;

      if (_newValue === nothing) {
        --size.value;
        return arraySpliceOut(mutate, i, list);
      }

      return arrayUpdate(mutate, i, Leaf(edit, h, k, _newValue), list);
    }
  }

  var newValue = f();
  if (newValue === nothing) return list;
  ++size.value;
  return arrayUpdate(mutate, len, Leaf(edit, h, k, newValue), list);
};

var canEditNode = function canEditNode(edit, node) {
  return edit === node.edit;
};
/* Editing
 ******************************************************************************/


var Leaf__modify = function Leaf__modify(edit, keyEq, shift, f, h, k, size) {
  if (keyEq(k, this.key)) {
    var _v = f(this.value);

    if (_v === this.value) return this;else if (_v === nothing) {
      --size.value;
      return empty;
    }

    if (canEditNode(edit, this)) {
      this.value = _v;
      return this;
    }

    return Leaf(edit, h, k, _v);
  }

  var v = f();
  if (v === nothing) return this;
  ++size.value;
  return mergeLeaves(edit, shift, this.hash, this, h, Leaf(edit, h, k, v));
};

var Collision__modify = function Collision__modify(edit, keyEq, shift, f, h, k, size) {
  if (h === this.hash) {
    var canEdit = canEditNode(edit, this);
    var list = updateCollisionList(canEdit, edit, keyEq, this.hash, this.children, f, k, size);
    if (list === this.children) return this;
    return list.length > 1 ? Collision(edit, this.hash, list) : list[0]; // collapse single element collision list
  }

  var v = f();
  if (v === nothing) return this;
  ++size.value;
  return mergeLeaves(edit, shift, this.hash, this, h, Leaf(edit, h, k, v));
};

var IndexedNode__modify = function IndexedNode__modify(edit, keyEq, shift, f, h, k, size) {
  var mask = this.mask;
  var children = this.children;
  var frag = hashFragment(shift, h);
  var bit = toBitmap(frag);
  var indx = fromBitmap(mask, bit);
  var exists = mask & bit;
  var current = exists ? children[indx] : empty;

  var child = current._modify(edit, keyEq, shift + SIZE, f, h, k, size);

  if (current === child) return this;
  var canEdit = canEditNode(edit, this);
  var bitmap = mask;
  var newChildren = void 0;

  if (exists && isEmptyNode(child)) {
    // remove
    bitmap &= ~bit;
    if (!bitmap) return empty;
    if (children.length <= 2 && isLeaf(children[indx ^ 1])) return children[indx ^ 1]; // collapse

    newChildren = arraySpliceOut(canEdit, indx, children);
  } else if (!exists && !isEmptyNode(child)) {
    // add
    if (children.length >= MAX_INDEX_NODE) return expand(edit, frag, child, mask, children);
    bitmap |= bit;
    newChildren = arraySpliceIn(canEdit, indx, child, children);
  } else {
    // modify
    newChildren = arrayUpdate(canEdit, indx, child, children);
  }

  if (canEdit) {
    this.mask = bitmap;
    this.children = newChildren;
    return this;
  }

  return IndexedNode(edit, bitmap, newChildren);
};

var ArrayNode__modify = function ArrayNode__modify(edit, keyEq, shift, f, h, k, size) {
  var count = this.size;
  var children = this.children;
  var frag = hashFragment(shift, h);
  var child = children[frag];

  var newChild = (child || empty)._modify(edit, keyEq, shift + SIZE, f, h, k, size);

  if (child === newChild) return this;
  var canEdit = canEditNode(edit, this);
  var newChildren = void 0;

  if (isEmptyNode(child) && !isEmptyNode(newChild)) {
    // add
    ++count;
    newChildren = arrayUpdate(canEdit, frag, newChild, children);
  } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
    // remove
    --count;
    if (count <= MIN_ARRAY_NODE) return pack(edit, count, frag, children);
    newChildren = arrayUpdate(canEdit, frag, empty, children);
  } else {
    // modify
    newChildren = arrayUpdate(canEdit, frag, newChild, children);
  }

  if (canEdit) {
    this.size = count;
    this.children = newChildren;
    return this;
  }

  return ArrayNode(edit, count, newChildren);
};

empty._modify = function (edit, keyEq, shift, f, h, k, size) {
  var v = f();
  if (v === nothing) return empty;
  ++size.value;
  return Leaf(edit, h, k, v);
};
/*
 ******************************************************************************/


function Map(editable, edit, config, root, size) {
  this._editable = editable;
  this._edit = edit;
  this._config = config;
  this._root = root;
  this._size = size;
}

Map.prototype.setTree = function (newRoot, newSize) {
  if (this._editable) {
    this._root = newRoot;
    this._size = newSize;
    return this;
  }

  return newRoot === this._root ? this : new Map(this._editable, this._edit, this._config, newRoot, newSize);
};
/* Queries
 ******************************************************************************/

/**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `alt` if none.
*/


var tryGetHash = hamt.tryGetHash = function (alt, hash, key, map) {
  var node = map._root;
  var shift = 0;
  var keyEq = map._config.keyEq;

  while (true) {
    switch (node.type) {
      case LEAF:
        {
          return keyEq(key, node.key) ? node.value : alt;
        }

      case COLLISION:
        {
          if (hash === node.hash) {
            var children = node.children;

            for (var i = 0, len = children.length; i < len; ++i) {
              var child = children[i];
              if (keyEq(key, child.key)) return child.value;
            }
          }

          return alt;
        }

      case INDEX:
        {
          var frag = hashFragment(shift, hash);
          var bit = toBitmap(frag);

          if (node.mask & bit) {
            node = node.children[fromBitmap(node.mask, bit)];
            shift += SIZE;
            break;
          }

          return alt;
        }

      case ARRAY:
        {
          node = node.children[hashFragment(shift, hash)];

          if (node) {
            shift += SIZE;
            break;
          }

          return alt;
        }

      default:
        return alt;
    }
  }
};

Map.prototype.tryGetHash = function (alt, hash, key) {
  return tryGetHash(alt, hash, key, this);
};
/**
    Lookup the value for `key` in `map` using internal hash function.

    @see `tryGetHash`
*/


var tryGet = hamt.tryGet = function (alt, key, map) {
  return tryGetHash(alt, map._config.hash(key), key, map);
};

Map.prototype.tryGet = function (alt, key) {
  return tryGet(alt, key, this);
};
/**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `undefined` if none.
*/


var getHash = hamt.getHash = function (hash, key, map) {
  return tryGetHash(undefined, hash, key, map);
};

Map.prototype.getHash = function (hash, key) {
  return getHash(hash, key, this);
};
/**
    Lookup the value for `key` in `map` using internal hash function.

    @see `get`
*/


var get = hamt.get = function (key, map) {
  return tryGetHash(undefined, map._config.hash(key), key, map);
};

Map.prototype.get = function (key, alt) {
  return tryGet(alt, key, this);
};
/**
    Does an entry exist for `key` in `map`? Uses custom `hash`.
*/


var hasHash = hamt.has = function (hash, key, map) {
  return tryGetHash(nothing, hash, key, map) !== nothing;
};

Map.prototype.hasHash = function (hash, key) {
  return hasHash(hash, key, this);
};
/**
    Does an entry exist for `key` in `map`? Uses internal hash function.
*/


var has = hamt.has = function (key, map) {
  return hasHash(map._config.hash(key), key, map);
};

Map.prototype.has = function (key) {
  return has(key, this);
};

var defKeyCompare = function defKeyCompare(x, y) {
  return x === y;
};
/**
    Create an empty map.

    @param config Configuration.
*/


hamt.make = function (config) {
  return new Map(0, 0, {
    keyEq: config && config.keyEq || defKeyCompare,
    hash: config && config.hash || hash
  }, empty, 0);
};
/**
    Empty map.
*/


hamt.empty = hamt.make();
/**
    Does `map` contain any elements?
*/

var isEmpty = hamt.isEmpty = function (map) {
  return map && !!isEmptyNode(map._root);
};

Map.prototype.isEmpty = function () {
  return isEmpty(this);
};
/* Updates
 ******************************************************************************/

/**
    Alter the value stored for `key` in `map` using function `f` using
    custom hash.

    `f` is invoked with the current value for `k` if it exists,
    or no arguments if no such value exists. `modify` will always either
    update or insert a value into the map.

    Returns a map with the modified value. Does not alter `map`.
*/


var modifyHash = hamt.modifyHash = function (f, hash, key, map) {
  var size = {
    value: map._size
  };

  var newRoot = map._root._modify(map._editable ? map._edit : NaN, map._config.keyEq, 0, f, hash, key, size);

  return map.setTree(newRoot, size.value);
};

Map.prototype.modifyHash = function (hash, key, f) {
  return modifyHash(f, hash, key, this);
};
/**
    Alter the value stored for `key` in `map` using function `f` using
    internal hash function.

    @see `modifyHash`
*/


var modify = hamt.modify = function (f, key, map) {
  return modifyHash(f, map._config.hash(key), key, map);
};

Map.prototype.modify = function (key, f) {
  return modify(f, key, this);
};
/**
    Store `value` for `key` in `map` using custom `hash`.

    Returns a map with the modified value. Does not alter `map`.
*/


var setHash = hamt.setHash = function (hash, key, value, map) {
  return modifyHash(constant(value), hash, key, map);
};

Map.prototype.setHash = function (hash, key, value) {
  return setHash(hash, key, value, this);
};
/**
    Store `value` for `key` in `map` using internal hash function.

    @see `setHash`
*/


var set = hamt.set = function (key, value, map) {
  return setHash(map._config.hash(key), key, value, map);
};

Map.prototype.set = function (key, value) {
  return set(key, value, this);
};
/**
    Remove the entry for `key` in `map`.

    Returns a map with the value removed. Does not alter `map`.
*/


var del = constant(nothing);

var removeHash = hamt.removeHash = function (hash, key, map) {
  return modifyHash(del, hash, key, map);
};

Map.prototype.removeHash = Map.prototype.deleteHash = function (hash, key) {
  return removeHash(hash, key, this);
};
/**
    Remove the entry for `key` in `map` using internal hash function.

    @see `removeHash`
*/


var remove = hamt.remove = function (key, map) {
  return removeHash(map._config.hash(key), key, map);
};

Map.prototype.remove = Map.prototype.delete = function (key) {
  return remove(key, this);
};
/* Mutation
 ******************************************************************************/

/**
    Mark `map` as mutable.
 */


var beginMutation = hamt.beginMutation = function (map) {
  return new Map(map._editable + 1, map._edit + 1, map._config, map._root, map._size);
};

Map.prototype.beginMutation = function () {
  return beginMutation(this);
};
/**
    Mark `map` as immutable.
 */


var endMutation = hamt.endMutation = function (map) {
  map._editable = map._editable && map._editable - 1;
  return map;
};

Map.prototype.endMutation = function () {
  return endMutation(this);
};
/**
    Mutate `map` within the context of `f`.
    @param f
    @param map HAMT
*/


var mutate = hamt.mutate = function (f, map) {
  var transient = beginMutation(map);
  f(transient);
  return endMutation(transient);
};

Map.prototype.mutate = function (f) {
  return mutate(f, this);
};
/* Traversal
 ******************************************************************************/

/**
    Apply a continuation.
*/


var appk = function appk(k) {
  return k && lazyVisitChildren(k[0], k[1], k[2], k[3], k[4]);
};
/**
    Recursively visit all values stored in an array of nodes lazily.
*/


var lazyVisitChildren = function lazyVisitChildren(len, children, i, f, k) {
  while (i < len) {
    var child = children[i++];
    if (child && !isEmptyNode(child)) return lazyVisit(child, f, [len, children, i, f, k]);
  }

  return appk(k);
};
/**
    Recursively visit all values stored in `node` lazily.
*/


var lazyVisit = function lazyVisit(node, f, k) {
  switch (node.type) {
    case LEAF:
      return {
        value: f(node),
        rest: k
      };

    case COLLISION:
    case ARRAY:
    case INDEX:
      var children = node.children;
      return lazyVisitChildren(children.length, children, 0, f, k);

    default:
      return appk(k);
  }
};

var DONE = {
  done: true
};
/**
    Javascript iterator over a map.
*/

function MapIterator(v) {
  this.v = v;
}

MapIterator.prototype.next = function () {
  if (!this.v) return DONE;
  var v0 = this.v;
  this.v = appk(v0.rest);
  return v0;
};

MapIterator.prototype[Symbol.iterator] = function () {
  return this;
};
/**
    Lazily visit each value in map with function `f`.
*/


var visit = function visit(map, f) {
  return new MapIterator(lazyVisit(map._root, f));
};
/**
    Get a Javascsript iterator of `map`.

    Iterates over `[key, value]` arrays.
*/


var buildPairs = function buildPairs(x) {
  return [x.key, x.value];
};

var entries = hamt.entries = function (map) {
  return visit(map, buildPairs);
};

Map.prototype.entries = Map.prototype[Symbol.iterator] = function () {
  return entries(this);
};
/**
    Get array of all keys in `map`.

    Order is not guaranteed.
*/


var buildKeys = function buildKeys(x) {
  return x.key;
};

var keys = hamt.keys = function (map) {
  return visit(map, buildKeys);
};

Map.prototype.keys = function () {
  return keys(this);
};
/**
    Get array of all values in `map`.

    Order is not guaranteed, duplicates are preserved.
*/


var buildValues = function buildValues(x) {
  return x.value;
};

var values = hamt.values = Map.prototype.values = function (map) {
  return visit(map, buildValues);
};

Map.prototype.values = function () {
  return values(this);
};
/* Fold
 ******************************************************************************/

/**
    Visit every entry in the map, aggregating data.

    Order of nodes is not guaranteed.

    @param f Function mapping accumulated value, value, and key to new value.
    @param z Starting value.
    @param m HAMT
*/


var fold = hamt.fold = function (f, z, m) {
  var root = m._root;
  if (root.type === LEAF) return f(z, root.value, root.key);
  var toVisit = [root.children];
  var children = void 0;

  while (children = toVisit.pop()) {
    for (var i = 0, len = children.length; i < len;) {
      var child = children[i++];

      if (child && child.type) {
        if (child.type === LEAF) z = f(z, child.value, child.key);else toVisit.push(child.children);
      }
    }
  }

  return z;
};

Map.prototype.fold = function (f, z) {
  return fold(f, z, this);
};
/**
    Visit every entry in the map, aggregating data.

    Order of nodes is not guaranteed.

    @param f Function invoked with value and key
    @param map HAMT
*/


var forEach = hamt.forEach = function (f, map) {
  return fold(function (_, value, key) {
    return f(value, key, map);
  }, null, map);
};

Map.prototype.forEach = function (f) {
  return forEach(f, this);
};
/* Aggregate
 ******************************************************************************/

/**
    Get the number of entries in `map`.
*/


var count = hamt.count = function (map) {
  return map._size;
};

Map.prototype.count = function () {
  return count(this);
};

Object.defineProperty(Map.prototype, 'size', {
  get: Map.prototype.count
});
/* Export
 ******************************************************************************/

if ( module.exports) {
  module.exports = hamt;
} else {
  undefined.hamt = hamt;
}
});

class BuiltInMap {
  constructor(existing) {
    _defineProperty(this, "_map", void 0);

    this._map = new Map(existing === null || existing === void 0 ? void 0 : existing.entries());
  }

  keys() {
    return this._map.keys();
  }

  entries() {
    return this._map.entries();
  }

  get(k) {
    return this._map.get(k);
  }

  has(k) {
    return this._map.has(k);
  }

  set(k, v) {
    this._map.set(k, v);

    return this;
  }

  delete(k) {
    this._map.delete(k);

    return this;
  }

  clone() {
    return persistentMap(this);
  }

  toMap() {
    return new Map(this._map);
  }

}

class HashArrayMappedTrieMap {
  // Because hamt.empty is not a function there is no way to introduce type
  // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
  // $FlowIssue
  constructor(existing) {
    _defineProperty(this, "_hamt", hamt_1.empty.beginMutation());

    if (existing instanceof HashArrayMappedTrieMap) {
      const h = existing._hamt.endMutation();

      existing._hamt = h.beginMutation();
      this._hamt = h.beginMutation();
    } else if (existing) {
      for (const [k, v] of existing.entries()) {
        this._hamt.set(k, v);
      }
    }
  }

  keys() {
    return this._hamt.keys();
  }

  entries() {
    return this._hamt.entries();
  }

  get(k) {
    return this._hamt.get(k);
  }

  has(k) {
    return this._hamt.has(k);
  }

  set(k, v) {
    this._hamt.set(k, v);

    return this;
  }

  delete(k) {
    this._hamt.delete(k);

    return this;
  }

  clone() {
    return persistentMap(this);
  }

  toMap() {
    return new Map(this._hamt);
  }

}

function persistentMap(existing) {
  if (Recoil_gkx_1('recoil_hamt_2020')) {
    return new HashArrayMappedTrieMap(existing);
  } else {
    return new BuiltInMap(existing);
  }
}

var Recoil_PersistentMap = {
  persistentMap
};

var Recoil_PersistentMap_1 = Recoil_PersistentMap.persistentMap;

var Recoil_PersistentMap$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  persistentMap: Recoil_PersistentMap_1
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a set containing all of the values from the first set that are not
 * present in any of the subsequent sets.
 *
 * Note: this is written procedurally (i.e., without filterSet) for performant
 * use in tight loops.
 */

function differenceSets(set, ...setsWithValuesToRemove) {
  const ret = new Set();

  FIRST: for (const value of set) {
    for (const otherSet of setsWithValuesToRemove) {
      if (otherSet.has(value)) {
        continue FIRST;
      }
    }

    ret.add(value);
  }

  return ret;
}

var Recoil_differenceSets = differenceSets;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a new Map object with the same keys as the original, but with the
 * values replaced with the output of the given callback function.
 */

function mapMap(map, callback) {
  const result = new Map();
  map.forEach((value, key) => {
    result.set(key, callback(value, key));
  });
  return result;
}

var Recoil_mapMap = mapMap;

function graph() {
  return {
    nodeDeps: new Map(),
    nodeToNodeSubscriptions: new Map()
  };
}

function cloneGraph(graph) {
  return {
    nodeDeps: Recoil_mapMap(graph.nodeDeps, s => new Set(s)),
    nodeToNodeSubscriptions: Recoil_mapMap(graph.nodeToNodeSubscriptions, s => new Set(s))
  };
} // Note that this overwrites the deps of existing nodes, rather than unioning
// the new deps with the old deps.


function mergeDependencyMapIntoGraph(deps, graph, // If olderGraph is given then we will not overwrite changes made to the given
// graph compared with olderGraph:
olderGraph) {
  const {
    nodeDeps,
    nodeToNodeSubscriptions
  } = graph;
  deps.forEach((upstreams, downstream) => {
    const existingUpstreams = nodeDeps.get(downstream);

    if (existingUpstreams && olderGraph && existingUpstreams !== olderGraph.nodeDeps.get(downstream)) {
      return;
    } // Update nodeDeps:


    nodeDeps.set(downstream, new Set(upstreams)); // Add new deps to nodeToNodeSubscriptions:

    const addedUpstreams = existingUpstreams == null ? upstreams : Recoil_differenceSets(upstreams, existingUpstreams);
    addedUpstreams.forEach(upstream => {
      if (!nodeToNodeSubscriptions.has(upstream)) {
        nodeToNodeSubscriptions.set(upstream, new Set());
      }

      const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(upstream));
      existing.add(downstream);
    }); // Remove removed deps from nodeToNodeSubscriptions:

    if (existingUpstreams) {
      const removedUpstreams = Recoil_differenceSets(existingUpstreams, upstreams);
      removedUpstreams.forEach(upstream => {
        if (!nodeToNodeSubscriptions.has(upstream)) {
          return;
        }

        const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(upstream));
        existing.delete(downstream);

        if (existing.size === 0) {
          nodeToNodeSubscriptions.delete(upstream);
        }
      });
    }
  });
}

function saveDependencyMapToStore(dependencyMap, store, version) {
  var _storeState$nextTree, _storeState$previousT, _storeState$previousT2, _storeState$previousT3;

  const storeState = store.getState();

  if (!(version === storeState.currentTree.version || version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
    Recoil_recoverableViolation('Tried to save dependencies to a discarded tree');
  } // Merge the dependencies discovered into the store's dependency map
  // for the version that was read:


  const graph = store.getGraph(version);
  mergeDependencyMapIntoGraph(dependencyMap, graph); // If this version is not the latest version, also write these dependencies
  // into later versions if they don't already have their own:

  if (version === ((_storeState$previousT2 = storeState.previousTree) === null || _storeState$previousT2 === void 0 ? void 0 : _storeState$previousT2.version)) {
    const currentGraph = store.getGraph(storeState.currentTree.version);
    mergeDependencyMapIntoGraph(dependencyMap, currentGraph, graph);
  }

  if (version === ((_storeState$previousT3 = storeState.previousTree) === null || _storeState$previousT3 === void 0 ? void 0 : _storeState$previousT3.version) || version === storeState.currentTree.version) {
    var _storeState$nextTree2;

    const nextVersion = (_storeState$nextTree2 = storeState.nextTree) === null || _storeState$nextTree2 === void 0 ? void 0 : _storeState$nextTree2.version;

    if (nextVersion !== undefined) {
      const nextGraph = store.getGraph(nextVersion);
      mergeDependencyMapIntoGraph(dependencyMap, nextGraph, graph);
    }
  }
}

function mergeDepsIntoDependencyMap(from, into) {
  from.forEach((upstreamDeps, downstreamNode) => {
    if (!into.has(downstreamNode)) {
      into.set(downstreamNode, new Set());
    }

    const deps = Recoil_nullthrows(into.get(downstreamNode));
    upstreamDeps.forEach(dep => deps.add(dep));
  });
}

function addToDependencyMap(downstream, upstream, dependencyMap) {
  if (!dependencyMap.has(downstream)) {
    dependencyMap.set(downstream, new Set());
  }

  Recoil_nullthrows(dependencyMap.get(downstream)).add(upstream);
}

var Recoil_Graph = {
  addToDependencyMap,
  cloneGraph,
  graph,
  mergeDepsIntoDependencyMap,
  saveDependencyMapToStore
};

const {
  persistentMap: persistentMap$1
} = Recoil_PersistentMap$1;

const {
  graph: graph$1
} = Recoil_Graph;

let nextTreeStateVersion = 0;

const getNextTreeStateVersion = () => nextTreeStateVersion++;

function makeEmptyTreeState() {
  const version = getNextTreeStateVersion();
  return {
    version,
    stateID: version,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: persistentMap$1(),
    nonvalidatedAtoms: persistentMap$1()
  };
}

function makeEmptyStoreState() {
  const currentTree = makeEmptyTreeState();
  return {
    currentTree,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(currentTree.version, graph$1()),
    versionsUsedByComponent: new Map(),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set()
    },
    nodeCleanupFunctions: new Map()
  };
}

var Recoil_State = {
  makeEmptyTreeState,
  makeEmptyStoreState,
  getNextTreeStateVersion
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function unionSets(...sets) {
  const result = new Set();

  for (const set of sets) {
    for (const value of set) {
      result.add(value);
    }
  }

  return result;
}

var Recoil_unionSets = unionSets;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Utilities for working with built-in Maps and Sets without mutating them.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function setByAddingToSet(set, v) {
  const next = new Set(set);
  next.add(v);
  return next;
}

function setByDeletingFromSet(set, v) {
  const next = new Set(set);
  next.delete(v);
  return next;
}

function mapBySettingInMap(map, k, v) {
  const next = new Map(map);
  next.set(k, v);
  return next;
}

function mapByUpdatingInMap(map, k, updater) {
  const next = new Map(map);
  next.set(k, updater(next.get(k)));
  return next;
}

function mapByDeletingFromMap(map, k) {
  const next = new Map(map);
  next.delete(k);
  return next;
}

function mapByDeletingMultipleFromMap(map, ks) {
  const next = new Map(map);
  ks.forEach(k => next.delete(k));
  return next;
}

var Recoil_CopyOnWrite = {
  setByAddingToSet,
  setByDeletingFromSet,
  mapBySettingInMap,
  mapByUpdatingInMap,
  mapByDeletingFromMap,
  mapByDeletingMultipleFromMap
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the filter function.
 */

function* filterIterable(iterable, predicate) {
  // Use generator to create iterable/iterator
  let index = 0;

  for (const value of iterable) {
    if (predicate(value, index++)) {
      yield value;
    }
  }
}

var Recoil_filterIterable = filterIterable;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

class RetentionZone {}

function retentionZone() {
  return new RetentionZone();
}

var Recoil_RetentionZone = {
  RetentionZone,
  retentionZone
};

const {
  setByAddingToSet: setByAddingToSet$1
} = Recoil_CopyOnWrite;







const {
  getNode: getNode$1,
  getNodeMaybe: getNodeMaybe$1,
  recoilValuesForKeys: recoilValuesForKeys$1
} = Recoil_Node;

const {
  RetentionZone: RetentionZone$1
} = Recoil_RetentionZone; // flowlint-next-line unclear-type:off


const emptySet = Object.freeze(new Set());

class ReadOnlyRecoilValueError extends Error {}

function initializeRetentionForNode(store, nodeKey, retainedBy) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return () => undefined;
  }

  const {
    nodesRetainedByZone
  } = store.getState().retention;

  function addToZone(zone) {
    let set = nodesRetainedByZone.get(zone);

    if (!set) {
      nodesRetainedByZone.set(zone, set = new Set());
    }

    set.add(nodeKey);
  }

  if (retainedBy instanceof RetentionZone$1) {
    addToZone(retainedBy);
  } else if (Array.isArray(retainedBy)) {
    for (const zone of retainedBy) {
      addToZone(zone);
    }
  }

  return () => {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    const nodesRetainedByZone = store.getState().retention.nodesRetainedByZone;

    function deleteFromZone(zone) {
      const set = nodesRetainedByZone.get(zone);

      if (set) {
        set.delete(nodeKey);
      }

      if (set && set.size === 0) {
        nodesRetainedByZone.delete(zone);
      }
    }

    if (retainedBy instanceof RetentionZone$1) {
      deleteFromZone(retainedBy);
    } else if (Array.isArray(retainedBy)) {
      for (const zone of retainedBy) {
        deleteFromZone(zone);
      }
    }
  };
}

function initializeNodeIfNewToStore(store, treeState, key, trigger) {
  const storeState = store.getState();

  if (storeState.nodeCleanupFunctions.has(key)) {
    return;
  }

  const config = getNode$1(key);
  const retentionCleanup = initializeRetentionForNode(store, key, config.retainedBy);
  const nodeCleanup = config.init(store, treeState, trigger);
  storeState.nodeCleanupFunctions.set(key, () => {
    nodeCleanup();
    retentionCleanup();
  });
}

function cleanUpNode(store, key) {
  var _state$nodeCleanupFun;

  const state = store.getState();
  (_state$nodeCleanupFun = state.nodeCleanupFunctions.get(key)) === null || _state$nodeCleanupFun === void 0 ? void 0 : _state$nodeCleanupFun();
  state.nodeCleanupFunctions.delete(key);
} // Get the current value loadable of a node and update the state.
// Update dependencies and subscriptions for selectors.
// Update saved value validation for atoms.


function getNodeLoadable(store, state, key) {
  initializeNodeIfNewToStore(store, state, key, 'get');
  return getNode$1(key).get(store, state);
} // Peek at the current value loadable for a node without any evaluation or state change


function peekNodeLoadable(store, state, key) {
  return getNode$1(key).peek(store, state);
} // Write value directly to state bypassing the Node interface as the node
// definitions may not have been loaded yet when processing the initial snapshot.


function setUnvalidatedAtomValue_DEPRECATED(state, key, newValue) {
  var _node$invalidate;

  const node = getNodeMaybe$1(key);
  node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
  return { ...state,
    atomValues: state.atomValues.clone().delete(key),
    nonvalidatedAtoms: state.nonvalidatedAtoms.clone().set(key, newValue),
    dirtyAtoms: setByAddingToSet$1(state.dirtyAtoms, key)
  };
} // Return the discovered dependencies and values to be written by setting
// a node value. (Multiple values may be written due to selectors getting to
// set upstreams; deps may be discovered because of reads in updater functions.)


function setNodeValue(store, state, key, newValue) {
  const node = getNode$1(key);

  if (node.set == null) {
    throw new ReadOnlyRecoilValueError(`Attempt to set read-only RecoilValue: ${key}`);
  }

  const set = node.set; // so flow doesn't lose the above refinement.

  initializeNodeIfNewToStore(store, state, key, 'set');
  return set(store, state, newValue);
}

function peekNodeInfo(store, state, key) {
  var _graph$nodeDeps$get, _storeState$nodeToCom, _storeState$nodeToCom2;

  const storeState = store.getState();
  const graph = store.getGraph(state.version);
  const type = storeState.knownAtoms.has(key) ? 'atom' : storeState.knownSelectors.has(key) ? 'selector' : undefined;
  const downstreamNodes = Recoil_filterIterable(getDownstreamNodes(store, state, new Set([key])), nodeKey => nodeKey !== key);
  return {
    loadable: peekNodeLoadable(store, state, key),
    isActive: storeState.knownAtoms.has(key) || storeState.knownSelectors.has(key),
    isSet: type === 'selector' ? false : state.atomValues.has(key),
    isModified: state.dirtyAtoms.has(key),
    type,
    // Report current dependencies.  If the node hasn't been evaluated, then
    // dependencies may be missing based on the current state.
    deps: recoilValuesForKeys$1((_graph$nodeDeps$get = graph.nodeDeps.get(key)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : []),
    // Reportsall "current" subscribers.  Evaluating other nodes or
    // previous in-progress async evaluations may introduce new subscribers.
    subscribers: {
      nodes: recoilValuesForKeys$1(downstreamNodes),
      components: Recoil_mapIterable((_storeState$nodeToCom = (_storeState$nodeToCom2 = storeState.nodeToComponentSubscriptions.get(key)) === null || _storeState$nodeToCom2 === void 0 ? void 0 : _storeState$nodeToCom2.values()) !== null && _storeState$nodeToCom !== void 0 ? _storeState$nodeToCom : [], ([name]) => ({
        name
      }))
    }
  };
} // Find all of the recursively dependent nodes


function getDownstreamNodes(store, state, keys) {
  const visitedNodes = new Set();
  const visitingNodes = Array.from(keys);
  const graph = store.getGraph(state.version);

  for (let key = visitingNodes.pop(); key; key = visitingNodes.pop()) {
    var _graph$nodeToNodeSubs;

    visitedNodes.add(key);
    const subscribedNodes = (_graph$nodeToNodeSubs = graph.nodeToNodeSubscriptions.get(key)) !== null && _graph$nodeToNodeSubs !== void 0 ? _graph$nodeToNodeSubs : emptySet;

    for (const downstreamNode of subscribedNodes) {
      if (!visitedNodes.has(downstreamNode)) {
        visitingNodes.push(downstreamNode);
      }
    }
  }

  return visitedNodes;
}

var Recoil_FunctionalCore = {
  getNodeLoadable,
  peekNodeLoadable,
  setNodeValue,
  cleanUpNode,
  setUnvalidatedAtomValue_DEPRECATED,
  peekNodeInfo,
  getDownstreamNodes,
  initializeNodeIfNewToStore
};

const {
  getDownstreamNodes: getDownstreamNodes$1,
  getNodeLoadable: getNodeLoadable$1,
  setNodeValue: setNodeValue$1
} = Recoil_FunctionalCore;

const {
  getNodeMaybe: getNodeMaybe$2
} = Recoil_Node;

const {
  DefaultValue: DefaultValue$1,
  RecoilValueNotReady: RecoilValueNotReady$1
} = Recoil_Node;

const {
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  isRecoilValue: isRecoilValue$1
} = Recoil_RecoilValue$1;

function getRecoilValueAsLoadable(store, {
  key
}, treeState = store.getState().currentTree) {
  var _storeState$nextTree, _storeState$previousT;

  // Reading from an older tree can cause bugs because the dependencies that we
  // discover during the read are lost.
  const storeState = store.getState();

  if (!(treeState.version === storeState.currentTree.version || treeState.version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || treeState.version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
    Recoil_recoverableViolation('Tried to read from a discarded tree');
  }

  const loadable = getNodeLoadable$1(store, treeState, key);

  if (loadable.state === 'loading') {
    loadable.contents.catch(() => {
      /**
       * HACK: intercept thrown error here to prevent an uncaught promise exception. Ideally this would happen closer to selector
       * execution (perhaps introducing a new ERROR class to be resolved by async selectors that are in an error state)
       */
      return;
    });
  }

  return loadable;
}

function applyAtomValueWrites(atomValues, writes) {
  const result = atomValues.clone();
  writes.forEach((v, k) => {
    if (v.state === 'hasValue' && v.contents instanceof DefaultValue$1) {
      result.delete(k);
    } else {
      result.set(k, v);
    }
  });
  return result;
}

function valueFromValueOrUpdater(store, state, {
  key
}, valueOrUpdater) {
  if (typeof valueOrUpdater === 'function') {
    // Updater form: pass in the current value. Throw if the current value
    // is unavailable (namely when updating an async selector that's
    // pending or errored):
    const current = getNodeLoadable$1(store, state, key);

    if (current.state === 'loading') {
      throw new RecoilValueNotReady$1(key);
    } else if (current.state === 'hasError') {
      throw current.contents;
    } // T itself may be a function, so our refinement is not sufficient:


    return valueOrUpdater(current.contents); // flowlint-line unclear-type:off
  } else {
    return valueOrUpdater;
  }
}

function applyAction(store, state, action) {
  if (action.type === 'set') {
    const {
      recoilValue,
      valueOrUpdater
    } = action;
    const newValue = valueFromValueOrUpdater(store, state, recoilValue, valueOrUpdater);
    const writes = setNodeValue$1(store, state, recoilValue.key, newValue);

    for (const [key, loadable] of writes.entries()) {
      writeLoadableToTreeState(state, key, loadable);
    }
  } else if (action.type === 'setLoadable') {
    const {
      recoilValue: {
        key
      },
      loadable
    } = action;
    writeLoadableToTreeState(state, key, loadable);
  } else if (action.type === 'markModified') {
    const {
      recoilValue: {
        key
      }
    } = action;
    state.dirtyAtoms.add(key);
  } else if (action.type === 'setUnvalidated') {
    var _node$invalidate;

    // Write value directly to state bypassing the Node interface as the node
    // definitions may not have been loaded yet when processing the initial snapshot.
    const {
      recoilValue: {
        key
      },
      unvalidatedValue
    } = action;
    const node = getNodeMaybe$2(key);
    node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
    state.atomValues.delete(key);
    state.nonvalidatedAtoms.set(key, unvalidatedValue);
    state.dirtyAtoms.add(key);
  } else {
    Recoil_recoverableViolation(`Unknown action ${action.type}`);
  }
}

function writeLoadableToTreeState(state, key, loadable) {
  if (loadable.state === 'hasValue' && loadable.contents instanceof DefaultValue$1) {
    state.atomValues.delete(key);
  } else {
    state.atomValues.set(key, loadable);
  }

  state.dirtyAtoms.add(key);
  state.nonvalidatedAtoms.delete(key);
}

function applyActionsToStore(store, actions) {
  store.replaceState(state => {
    const newState = copyTreeState(state);

    for (const action of actions) {
      applyAction(store, newState, action);
    }

    invalidateDownstreams(store, newState);
    return newState;
  });
}

function queueOrPerformStateUpdate(store, action) {
  if (batchStack.length) {
    const actionsByStore = batchStack[batchStack.length - 1];
    let actions = actionsByStore.get(store);

    if (!actions) {
      actionsByStore.set(store, actions = []);
    }

    actions.push(action);
  } else {
    applyActionsToStore(store, [action]);
  }
}

const batchStack = [];

function batchStart() {
  const actionsByStore = new Map();
  batchStack.push(actionsByStore);
  return () => {
    for (const [store, actions] of actionsByStore) {
      applyActionsToStore(store, actions);
    }

    const popped = batchStack.pop();

    if (popped !== actionsByStore) {
      Recoil_recoverableViolation('Incorrect order of batch popping');
    }
  };
}

function copyTreeState(state) {
  return { ...state,
    atomValues: state.atomValues.clone(),
    nonvalidatedAtoms: state.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(state.dirtyAtoms)
  };
}

function invalidateDownstreams(store, state) {
  // Inform any nodes that were changed or downstream of changes so that they
  // can clear out any caches as needed due to the update:
  const downstreams = getDownstreamNodes$1(store, state, state.dirtyAtoms);

  for (const key of downstreams) {
    var _getNodeMaybe, _getNodeMaybe$invalid;

    (_getNodeMaybe = getNodeMaybe$2(key)) === null || _getNodeMaybe === void 0 ? void 0 : (_getNodeMaybe$invalid = _getNodeMaybe.invalidate) === null || _getNodeMaybe$invalid === void 0 ? void 0 : _getNodeMaybe$invalid.call(_getNodeMaybe, state);
  }
}

function setRecoilValue(store, recoilValue, valueOrUpdater) {
  queueOrPerformStateUpdate(store, {
    type: 'set',
    recoilValue,
    valueOrUpdater
  });
}

function setRecoilValueLoadable(store, recoilValue, loadable) {
  if (loadable instanceof DefaultValue$1) {
    return setRecoilValue(store, recoilValue, loadable);
  }

  queueOrPerformStateUpdate(store, {
    type: 'setLoadable',
    recoilValue,
    loadable: loadable
  });
}

function markRecoilValueModified(store, recoilValue) {
  queueOrPerformStateUpdate(store, {
    type: 'markModified',
    recoilValue
  });
}

function setUnvalidatedRecoilValue(store, recoilValue, unvalidatedValue) {
  queueOrPerformStateUpdate(store, {
    type: 'setUnvalidated',
    recoilValue,
    unvalidatedValue
  });
}

let subscriptionID = 0;

function subscribeToRecoilValue(store, {
  key
}, callback, componentDebugName = null) {
  const subID = subscriptionID++;
  const storeState = store.getState();

  if (!storeState.nodeToComponentSubscriptions.has(key)) {
    storeState.nodeToComponentSubscriptions.set(key, new Map());
  }

  Recoil_nullthrows(storeState.nodeToComponentSubscriptions.get(key)).set(subID, [componentDebugName !== null && componentDebugName !== void 0 ? componentDebugName : '<not captured>', callback]); // Handle the case that, during the same tick that we are subscribing, an atom
  // has been updated by some effect handler. Otherwise we will miss the update.

  if (Recoil_gkx_1('recoil_early_rendering_2021')) {
    const nextTree = store.getState().nextTree;

    if (nextTree && nextTree.dirtyAtoms.has(key)) {
      callback(nextTree);
    }
  }

  return {
    release: () => {
      const storeState = store.getState();
      const subs = storeState.nodeToComponentSubscriptions.get(key);

      if (subs === undefined || !subs.has(subID)) {
        Recoil_recoverableViolation(`Subscription missing at release time for atom ${key}. This is a bug in Recoil.`);
        return;
      }

      subs.delete(subID);

      if (subs.size === 0) {
        storeState.nodeToComponentSubscriptions.delete(key);
      }
    }
  };
}

var Recoil_RecoilValueInterface = {
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  getRecoilValueAsLoadable,
  setRecoilValue,
  setRecoilValueLoadable,
  markRecoilValueModified,
  setUnvalidatedRecoilValue,
  subscribeToRecoilValue,
  isRecoilValue: isRecoilValue$1,
  applyAtomValueWrites,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart,
  writeLoadableToTreeState,
  invalidateDownstreams,
  copyTreeState,
  invalidateDownstreams_FOR_TESTING: invalidateDownstreams
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * The someSet() method tests whether some elements in the given Set pass the
 * test implemented by the provided function.
 */

function someSet(set, callback, context) {
  const iterator = set.entries();
  let current = iterator.next();

  while (!current.done) {
    const entry = current.value;

    if (callback.call(context, entry[1], entry[0], set)) {
      return true;
    }

    current = iterator.next();
  }

  return false;
}

var Recoil_someSet = someSet;

const {
  cleanUpNode: cleanUpNode$1
} = Recoil_FunctionalCore;

const {
  deleteNodeConfigIfPossible: deleteNodeConfigIfPossible$1,
  getNode: getNode$2
} = Recoil_Node;

const {
  RetentionZone: RetentionZone$2
} = Recoil_RetentionZone; // Components that aren't mounted after suspending for this long will be assumed
// to be discarded and their resources released.


const SUSPENSE_TIMEOUT_MS = 120000;
const emptySet$1 = new Set();

function releaseRetainablesNowOnCurrentTree(store, retainables) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;

  if (storeState.nextTree) {
    Recoil_recoverableViolation('releaseNodesNowOnCurrentTree should only be called at the end of a batch');
    return; // leak memory rather than erase something that's about to be used.
  }

  const nodes = new Set();

  for (const r of retainables) {
    if (r instanceof RetentionZone$2) {
      for (const n of nodesRetainedByZone(storeState, r)) {
        nodes.add(n);
      }
    } else {
      nodes.add(r);
    }
  }

  const releasableNodes = findReleasableNodes(store, nodes);

  for (const node of releasableNodes) {
    releaseNode(store, treeState, node);
  }
}

function findReleasableNodes(store, searchFromNodes) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;
  const graph = store.getGraph(treeState.version);
  const releasableNodes = new Set(); // mutated to collect answer

  const nonReleasableNodes = new Set();
  findReleasableNodesInner(searchFromNodes);
  return releasableNodes;

  function findReleasableNodesInner(searchFromNodes) {
    const releasableNodesFoundThisIteration = new Set();
    const downstreams = getDownstreamNodesInTopologicalOrder(store, treeState, searchFromNodes, releasableNodes, // don't descend into these
    nonReleasableNodes // don't descend into these
    ); // Find which of the downstream nodes are releasable and which are not:

    for (const node of downstreams) {
      var _storeState$retention;

      // Not releasable if configured to be retained forever:
      if (getNode$2(node).retainedBy === 'recoilRoot') {
        nonReleasableNodes.add(node);
        continue;
      } // Not releasable if retained directly by a component:


      if (((_storeState$retention = storeState.retention.referenceCounts.get(node)) !== null && _storeState$retention !== void 0 ? _storeState$retention : 0) > 0) {
        nonReleasableNodes.add(node);
        continue;
      } // Not releasable if retained by a zone:


      if (zonesThatCouldRetainNode(node).some(z => storeState.retention.referenceCounts.get(z))) {
        nonReleasableNodes.add(node);
        continue;
      } // Not releasable if it has a non-releasable child (which will already be in
      // nonReleasableNodes because we are going in topological order):


      const nodeChildren = graph.nodeToNodeSubscriptions.get(node);

      if (nodeChildren && Recoil_someSet(nodeChildren, child => nonReleasableNodes.has(child))) {
        nonReleasableNodes.add(node);
        continue;
      }

      releasableNodes.add(node);
      releasableNodesFoundThisIteration.add(node);
    } // If we found any releasable nodes, we need to walk UP from those nodes to
    // find whether their parents can now be released as well:


    const parents = new Set();

    for (const node of releasableNodesFoundThisIteration) {
      for (const parent of (_graph$nodeDeps$get = graph.nodeDeps.get(node)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : emptySet$1) {
        var _graph$nodeDeps$get;

        if (!releasableNodes.has(parent)) {
          parents.add(parent);
        }
      }
    }

    if (parents.size) {
      findReleasableNodesInner(parents);
    }
  }
} // Children before parents


function getDownstreamNodesInTopologicalOrder(store, treeState, nodes, // Mutable set is destroyed in place
doNotDescendInto1, doNotDescendInto2) {
  const graph = store.getGraph(treeState.version);
  const answer = [];
  const visited = new Set();

  while (nodes.size > 0) {
    visit(Recoil_nullthrows(nodes.values().next().value));
  }

  return answer;

  function visit(node) {
    if (doNotDescendInto1.has(node) || doNotDescendInto2.has(node)) {
      nodes.delete(node);
      return;
    }

    if (visited.has(node)) {
      return;
    }

    const children = graph.nodeToNodeSubscriptions.get(node);

    if (children) {
      for (const child of children) {
        visit(child);
      }
    }

    visited.add(node);
    nodes.delete(node);
    answer.push(node);
  }
}

function releaseNode(store, treeState, node) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  } // Atom effects, in-closure caches, etc.:


  cleanUpNode$1(store, node); // Delete from store state:

  const storeState = store.getState();
  storeState.knownAtoms.delete(node);
  storeState.knownSelectors.delete(node);
  storeState.nodeTransactionSubscriptions.delete(node);
  storeState.retention.referenceCounts.delete(node);
  const zones = zonesThatCouldRetainNode(node);

  for (const zone of zones) {
    var _storeState$retention2;

    (_storeState$retention2 = storeState.retention.nodesRetainedByZone.get(zone)) === null || _storeState$retention2 === void 0 ? void 0 : _storeState$retention2.delete(node);
  } // Note that we DO NOT delete from nodeToComponentSubscriptions because this
  // already happens when the last component that was retaining the node unmounts,
  // and this could happen either before or after that.
  // Delete from TreeState and dep graph:


  treeState.atomValues.delete(node);
  treeState.dirtyAtoms.delete(node);
  treeState.nonvalidatedAtoms.delete(node);
  const graph = storeState.graphsByVersion.get(treeState.version);

  if (graph) {
    const deps = graph.nodeDeps.get(node);

    if (deps !== undefined) {
      graph.nodeDeps.delete(node);

      for (const dep of deps) {
        var _graph$nodeToNodeSubs;

        (_graph$nodeToNodeSubs = graph.nodeToNodeSubscriptions.get(dep)) === null || _graph$nodeToNodeSubs === void 0 ? void 0 : _graph$nodeToNodeSubs.delete(node);
      }
    } // No need to delete sub's deps as there should be no subs at this point.
    // But an invariant would require deleting nodes in topological order.


    graph.nodeToNodeSubscriptions.delete(node);
  } // Node config (for family members only as their configs can be recreated, and
  // only if they are not retained within any other Stores):


  deleteNodeConfigIfPossible$1(node);
}

function nodesRetainedByZone(storeState, zone) {
  var _storeState$retention3;

  return (_storeState$retention3 = storeState.retention.nodesRetainedByZone.get(zone)) !== null && _storeState$retention3 !== void 0 ? _storeState$retention3 : emptySet$1;
}

function zonesThatCouldRetainNode(node) {
  const retainedBy = getNode$2(node).retainedBy;

  if (retainedBy === undefined || retainedBy === 'components' || retainedBy === 'recoilRoot') {
    return [];
  } else if (retainedBy instanceof RetentionZone$2) {
    return [retainedBy];
  } else {
    return retainedBy; // it's an array of zones
  }
}

function scheduleOrPerformPossibleReleaseOfRetainable(store, retainable) {
  const state = store.getState();

  if (state.nextTree) {
    state.retention.retainablesToCheckForRelease.add(retainable);
  } else {
    releaseRetainablesNowOnCurrentTree(store, new Set([retainable]));
  }
}

function updateRetainCount(store, retainable, delta) {
  var _map$get;

  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const map = store.getState().retention.referenceCounts;
  const newCount = ((_map$get = map.get(retainable)) !== null && _map$get !== void 0 ? _map$get : 0) + delta;

  if (newCount === 0) {
    updateRetainCountToZero(store, retainable);
  } else {
    map.set(retainable, newCount);
  }
}

function updateRetainCountToZero(store, retainable) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const map = store.getState().retention.referenceCounts;
  map.delete(retainable);
  scheduleOrPerformPossibleReleaseOfRetainable(store, retainable);
}

function releaseScheduledRetainablesNow(store) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const state = store.getState();
  releaseRetainablesNowOnCurrentTree(store, state.retention.retainablesToCheckForRelease);
  state.retention.retainablesToCheckForRelease.clear();
}

function retainedByOptionWithDefault(r) {
  // The default will change from 'recoilRoot' to 'components' in the future.
  return r === undefined ? 'recoilRoot' : r;
}

var Recoil_Retention = {
  SUSPENSE_TIMEOUT_MS,
  updateRetainCount,
  updateRetainCountToZero,
  releaseScheduledRetainablesNow,
  retainedByOptionWithDefault
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Combines multiple Iterables into a single Iterable.
 * Traverses the input Iterables in the order provided and maintains the order
 * of their elements.
 *
 * Example:
 * ```
 * const r = Array.from(concatIterables(['a', 'b'], ['c'], ['d', 'e', 'f']));
 * r == ['a', 'b', 'c', 'd', 'e', 'f'];
 * ```
 */

function* concatIterables(iters) {
  for (const iter of iters) {
    for (const val of iter) {
      yield val;
    }
  }
}

var Recoil_concatIterables = concatIterables;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const isSSR = typeof window === 'undefined';
const isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative'; // eslint-disable-line fb-www/typeof-undefined

var Recoil_Environment = {
  isSSR,
  isReactNative
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */
const {
  unstable_batchedUpdates
} = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a;

var ReactBatchedUpdates = {
  unstable_batchedUpdates
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */
// @fb-only: const {unstable_batchedUpdates} = require('ReactDOMComet');
// prettier-ignore
const {
  unstable_batchedUpdates: unstable_batchedUpdates$1
} = ReactBatchedUpdates; // @oss-only


var Recoil_ReactBatchedUpdates = {
  unstable_batchedUpdates: unstable_batchedUpdates$1
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
const {
  batchStart: batchStart$1
} = Recoil_RecoilValueInterface;

const {
  unstable_batchedUpdates: unstable_batchedUpdates$2
} = Recoil_ReactBatchedUpdates;

let batcher = unstable_batchedUpdates$2; // flowlint-next-line unclear-type:off

/**
 * Sets the provided batcher function as the batcher function used by Recoil.
 *
 * Set the batcher to a custom batcher for your renderer,
 * if you use a renderer other than React DOM or React Native.
 */
const setBatcher = newBatcher => {
  batcher = newBatcher;
};
/**
 * Returns the current batcher function.
 */


const getBatcher = () => batcher;
/**
 * Calls the current batcher function and passes the
 * provided callback function.
 */


const batchUpdates = callback => {
  batcher(() => {
    let batchEnd = () => undefined;

    try {
      batchEnd = batchStart$1();
      callback();
    } finally {
      batchEnd();
    }
  });
};

var Recoil_Batching = {
  getBatcher,
  setBatcher,
  batchUpdates
};

const {
  isSSR: isSSR$1
} = Recoil_Environment;











const {
  batchUpdates: batchUpdates$1
} = Recoil_Batching;

const {
  initializeNodeIfNewToStore: initializeNodeIfNewToStore$1,
  peekNodeInfo: peekNodeInfo$1
} = Recoil_FunctionalCore;

const {
  graph: graph$2
} = Recoil_Graph;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$1,
  recoilValues: recoilValues$1,
  recoilValuesForKeys: recoilValuesForKeys$2
} = Recoil_Node;

const {
  AbstractRecoilValue: AbstractRecoilValue$2,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$1,
  setRecoilValue: setRecoilValue$1,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$1
} = Recoil_RecoilValueInterface;

const {
  updateRetainCount: updateRetainCount$1
} = Recoil_Retention;

const {
  getNextTreeStateVersion: getNextTreeStateVersion$1,
  makeEmptyStoreState: makeEmptyStoreState$1
} = Recoil_State; // Opaque at this surface because it's part of the public API from here.


const retainWarning = `
Recoil Snapshots only last for the duration of the callback they are provided to. To keep a Snapshot longer, do this:

  const release = snapshot.retain();
  try {
    await useTheSnapshotAsynchronously(snapshot);
  } finally {
    release();
  }

This is currently a DEV-only warning but will become a thrown exception in the next release of Recoil.
`; // A "Snapshot" is "read-only" and captures a specific set of values of atoms.
// However, the data-flow-graph and selector values may evolve as selector
// evaluation functions are executed and async selectors resolve.

class Snapshot {
  constructor(storeState) {
    _defineProperty(this, "_store", void 0);

    _defineProperty(this, "_refCount", 0);

    _defineProperty(this, "getLoadable", recoilValue => {
      this.checkRefCount_INTERNAL();
      return getRecoilValueAsLoadable$1(this._store, recoilValue);
    });

    _defineProperty(this, "getPromise", recoilValue => {
      this.checkRefCount_INTERNAL();
      return this.getLoadable(recoilValue).toPromise();
    });

    _defineProperty(this, "getNodes_UNSTABLE", opt => {
      this.checkRefCount_INTERNAL(); // TODO Deal with modified selectors

      if ((opt === null || opt === void 0 ? void 0 : opt.isModified) === true) {
        if ((opt === null || opt === void 0 ? void 0 : opt.isInitialized) === false) {
          return [];
        }

        const state = this._store.getState().currentTree;

        return recoilValuesForKeys$2(state.dirtyAtoms);
      }

      const knownAtoms = this._store.getState().knownAtoms;

      const knownSelectors = this._store.getState().knownSelectors;

      return (opt === null || opt === void 0 ? void 0 : opt.isInitialized) == null ? recoilValues$1.values() : opt.isInitialized === true ? recoilValuesForKeys$2(Recoil_concatIterables([this._store.getState().knownAtoms, this._store.getState().knownSelectors])) : Recoil_filterIterable(recoilValues$1.values(), ({
        key
      }) => !knownAtoms.has(key) && !knownSelectors.has(key));
    });

    _defineProperty(this, "getInfo_UNSTABLE", ({
      key
    }) => {
      this.checkRefCount_INTERNAL();
      return peekNodeInfo$1(this._store, this._store.getState().currentTree, key);
    });

    _defineProperty(this, "map", mapper => {
      this.checkRefCount_INTERNAL();
      const mutableSnapshot = new MutableSnapshot(this, batchUpdates$1);
      mapper(mutableSnapshot); // if removing batchUpdates from `set` add it here

      return cloneSnapshot(mutableSnapshot.getStore_INTERNAL());
    });

    _defineProperty(this, "asyncMap", async mapper => {
      this.checkRefCount_INTERNAL();
      const mutableSnapshot = new MutableSnapshot(this, batchUpdates$1);
      await mapper(mutableSnapshot);
      return cloneSnapshot(mutableSnapshot.getStore_INTERNAL());
    });

    this._store = {
      getState: () => storeState,
      replaceState: replacer => {
        storeState.currentTree = replacer(storeState.currentTree); // no batching so nextTree is never active
      },
      getGraph: version => {
        const graphs = storeState.graphsByVersion;

        if (graphs.has(version)) {
          return Recoil_nullthrows(graphs.get(version));
        }

        const newGraph = graph$2();
        graphs.set(version, newGraph);
        return newGraph;
      },
      subscribeToTransactions: () => ({
        release: () => {}
      }),
      addTransactionMetadata: () => {
        throw Recoil_err('Cannot subscribe to Snapshots');
      }
    }; // Initialize any nodes that are live in the parent store (primarily so that this
    // snapshot gets counted towards the node's live stores count).

    for (const nodeKey of this._store.getState().nodeCleanupFunctions.keys()) {
      initializeNodeIfNewToStore$1(this._store, storeState.currentTree, nodeKey, 'get');
      updateRetainCount$1(this._store, nodeKey, 1);
    }

    this.retain();
    this.autorelease_INTERNAL();
  }

  retain() {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return () => undefined;
    }

    this._refCount++;
    let released = false;
    return () => {
      if (!released) {
        released = true;
        this.release_INTERNAL();
      }
    };
  }

  autorelease_INTERNAL() {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    if (!isSSR$1) {
      window.setTimeout(() => this.release_INTERNAL(), 0);
    }
  }

  release_INTERNAL() {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    this._refCount--;

    if (this._refCount === 0) ;
  }

  checkRefCount_INTERNAL() {
    if (Recoil_gkx_1('recoil_memory_managament_2020') && this._refCount <= 0) {
      if (true) {
        Recoil_recoverableViolation(retainWarning);
      } // What we will ship later:
      // throw err(retainWarning);

    }
  }

  getStore_INTERNAL() {
    this.checkRefCount_INTERNAL();
    return this._store;
  }

  getID() {
    this.checkRefCount_INTERNAL();
    return this.getID_INTERNAL();
  }

  getID_INTERNAL() {
    this.checkRefCount_INTERNAL();
    return this._store.getState().currentTree.stateID;
  } // We want to allow the methods to be destructured and used as accessors
  // eslint-disable-next-line fb-www/extra-arrow-initializer


}

function cloneStoreState(store, treeState, bumpVersion = false) {
  const storeState = store.getState();
  const version = bumpVersion ? getNextTreeStateVersion$1() : treeState.version;
  return {
    currentTree: bumpVersion ? {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version,
      stateID: version,
      transactionMetadata: { ...treeState.transactionMetadata
      },
      dirtyAtoms: new Set(treeState.dirtyAtoms),
      atomValues: treeState.atomValues.clone(),
      nonvalidatedAtoms: treeState.nonvalidatedAtoms.clone()
    } : treeState,
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(storeState.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(storeState.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(version, store.getGraph(treeState.version)),
    versionsUsedByComponent: new Map(),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set()
    },
    nodeCleanupFunctions: new Map()
  };
} // Factory to build a fresh snapshot


function freshSnapshot(initializeState) {
  const snapshot = new Snapshot(makeEmptyStoreState$1());
  return initializeState != null ? snapshot.map(initializeState) : snapshot;
} // Factory to clone a snapahot state


function cloneSnapshot(store, version = 'current') {
  const storeState = store.getState();
  const treeState = version === 'current' ? storeState.currentTree : Recoil_nullthrows(storeState.previousTree);
  return new Snapshot(cloneStoreState(store, treeState));
}

class MutableSnapshot extends Snapshot {
  constructor(snapshot, batch) {
    super(cloneStoreState(snapshot.getStore_INTERNAL(), snapshot.getStore_INTERNAL().getState().currentTree, true));

    _defineProperty(this, "_batch", void 0);

    _defineProperty(this, "set", (recoilState, newValueOrUpdater) => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL(); // This batchUpdates ensures this `set` is applied immediately and you can
      // read the written value after calling `set`. I would like to remove this
      // behavior and only batch in `Snapshot.map`, but this would be a breaking
      // change potentially.

      this._batch(() => {
        updateRetainCount$1(store, recoilState.key, 1);
        setRecoilValue$1(this.getStore_INTERNAL(), recoilState, newValueOrUpdater);
      });
    });

    _defineProperty(this, "reset", recoilState => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL(); // See note at `set` about batched updates.

      this._batch(() => {
        updateRetainCount$1(store, recoilState.key, 1);
        setRecoilValue$1(this.getStore_INTERNAL(), recoilState, DEFAULT_VALUE$1);
      });
    });

    _defineProperty(this, "setUnvalidatedAtomValues_DEPRECATED", values => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL(); // See note at `set` about batched updates.

      batchUpdates$1(() => {
        for (const [k, v] of values.entries()) {
          updateRetainCount$1(store, k, 1);
          setUnvalidatedRecoilValue$1(store, new AbstractRecoilValue$2(k), v);
        }
      });
    });

    this._batch = batch;
  } // We want to allow the methods to be destructured and used as accessors
  // eslint-disable-next-line fb-www/extra-arrow-initializer


}

var Recoil_Snapshot = {
  Snapshot,
  MutableSnapshot,
  freshSnapshot,
  cloneSnapshot
};

var Recoil_Snapshot_1 = Recoil_Snapshot.Snapshot;
var Recoil_Snapshot_2 = Recoil_Snapshot.MutableSnapshot;
var Recoil_Snapshot_3 = Recoil_Snapshot.freshSnapshot;
var Recoil_Snapshot_4 = Recoil_Snapshot.cloneSnapshot;

var Recoil_Snapshot$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Snapshot: Recoil_Snapshot_1,
  MutableSnapshot: Recoil_Snapshot_2,
  freshSnapshot: Recoil_Snapshot_3,
  cloneSnapshot: Recoil_Snapshot_4
});

// @fb-only: const RecoilusagelogEvent = require('RecoilusagelogEvent');
// @fb-only: const RecoilUsageLogFalcoEvent = require('RecoilUsageLogFalcoEvent');
// @fb-only: const URI = require('URI');


const {
  getNextTreeStateVersion: getNextTreeStateVersion$2,
  makeEmptyStoreState: makeEmptyStoreState$2
} = Recoil_State;













const {
  cleanUpNode: cleanUpNode$2,
  getDownstreamNodes: getDownstreamNodes$2,
  setNodeValue: setNodeValue$2,
  setUnvalidatedAtomValue_DEPRECATED: setUnvalidatedAtomValue_DEPRECATED$1
} = Recoil_FunctionalCore;

const {
  graph: graph$3
} = Recoil_Graph;

const {
  cloneGraph: cloneGraph$1
} = Recoil_Graph;

const {
  applyAtomValueWrites: applyAtomValueWrites$1
} = Recoil_RecoilValueInterface;

const {
  releaseScheduledRetainablesNow: releaseScheduledRetainablesNow$1
} = Recoil_Retention;

const {
  freshSnapshot: freshSnapshot$1
} = Recoil_Snapshot$1;



const {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} = react__WEBPACK_IMPORTED_MODULE_0___default.a;

function notInAContext() {
  throw Recoil_err('This component must be used inside a <RecoilRoot> component.');
}

const defaultStore = Object.freeze({
  getState: notInAContext,
  replaceState: notInAContext,
  getGraph: notInAContext,
  subscribeToTransactions: notInAContext,
  addTransactionMetadata: notInAContext
});
let stateReplacerIsBeingExecuted = false;

function startNextTreeIfNeeded(store) {
  if (stateReplacerIsBeingExecuted) {
    throw Recoil_err('An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.');
  }

  const storeState = store.getState();

  if (storeState.nextTree === null) {
    if (Recoil_gkx_1('recoil_memory_managament_2020') && Recoil_gkx_1('recoil_release_on_cascading_update_killswitch_2021')) {
      // If this is a cascading update (that is, rendering due to one state change
      // invokes a second state change), we won't have cleaned up retainables yet
      // because this normally happens after notifying components. Do it before
      // proceeding with the cascading update so that it remains predictable:
      if (storeState.commitDepth > 0) {
        releaseScheduledRetainablesNow$1(store);
      }
    }

    const version = storeState.currentTree.version;
    const nextVersion = getNextTreeStateVersion$2();
    storeState.nextTree = { ...storeState.currentTree,
      version: nextVersion,
      stateID: nextVersion,
      dirtyAtoms: new Set(),
      transactionMetadata: {}
    };
    storeState.graphsByVersion.set(nextVersion, cloneGraph$1(Recoil_nullthrows(storeState.graphsByVersion.get(version))));
  }
}

const AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  current: defaultStore
});

const useStoreRef = () => useContext(AppContext);

const MutableSourceContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null); // TODO T2710559282599660

function useRecoilMutableSource() {
  const mutableSource = useContext(MutableSourceContext);

  if (mutableSource == null) {
    Recoil_expectationViolation('Attempted to use a Recoil hook outside of a <RecoilRoot>. ' + '<RecoilRoot> must be an ancestor of any component that uses ' + 'Recoil hooks.');
  }

  return mutableSource;
}

function notifyComponents(store, storeState, treeState) {
  const dependentNodes = getDownstreamNodes$2(store, treeState, treeState.dirtyAtoms);

  for (const key of dependentNodes) {
    const comps = storeState.nodeToComponentSubscriptions.get(key);

    if (comps) {
      for (const [_subID, [_debugName, callback]] of comps) {
        callback(treeState);
      }
    }
  }
}

function sendEndOfBatchNotifications(store) {
  const storeState = store.getState();
  const treeState = storeState.currentTree; // Inform transaction subscribers of the transaction:

  const dirtyAtoms = treeState.dirtyAtoms;

  if (dirtyAtoms.size) {
    // Execute Node-specific subscribers before global subscribers
    for (const [key, subscriptions] of storeState.nodeTransactionSubscriptions) {
      if (dirtyAtoms.has(key)) {
        for (const [_, subscription] of subscriptions) {
          subscription(store);
        }
      }
    }

    for (const [_, subscription] of storeState.transactionSubscriptions) {
      subscription(store);
    }

    if (!Recoil_gkx_1('recoil_early_rendering_2021') || storeState.suspendedComponentResolvers.size) {
      // Notifying components is needed to wake from suspense, even when using
      // early rendering.
      notifyComponents(store, storeState, treeState); // Wake all suspended components so the right one(s) can try to re-render.
      // We need to wake up components not just when some asynchronous selector
      // resolved, but also when changing synchronous values because this may cause
      // a selector to change from asynchronous to synchronous, in which case there
      // would be no follow-up asynchronous resolution to wake us up.
      // TODO OPTIMIZATION Only wake up related downstream components

      storeState.suspendedComponentResolvers.forEach(cb => cb());
      storeState.suspendedComponentResolvers.clear();
    }
  } // Special behavior ONLY invoked by useInterface.
  // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.


  storeState.queuedComponentCallbacks_DEPRECATED.forEach(cb => cb(treeState));
  storeState.queuedComponentCallbacks_DEPRECATED.splice(0, storeState.queuedComponentCallbacks_DEPRECATED.length);
}

function endBatch(storeRef) {
  const storeState = storeRef.current.getState();
  storeState.commitDepth++;

  try {
    const {
      nextTree
    } = storeState; // Ignore commits that are not because of Recoil transactions -- namely,
    // because something above RecoilRoot re-rendered:

    if (nextTree === null) {
      return;
    } // nextTree is now committed -- note that copying and reset occurs when
    // a transaction begins, in startNextTreeIfNeeded:


    storeState.previousTree = storeState.currentTree;
    storeState.currentTree = nextTree;
    storeState.nextTree = null;
    sendEndOfBatchNotifications(storeRef.current);

    if (storeState.previousTree != null) {
      storeState.graphsByVersion.delete(storeState.previousTree.version);
    } else {
      Recoil_recoverableViolation('Ended batch with no previous state, which is unexpected', 'recoil');
    }

    storeState.previousTree = null;

    if (Recoil_gkx_1('recoil_memory_managament_2020')) {
      releaseScheduledRetainablesNow$1(storeRef.current);
    }
  } finally {
    storeState.commitDepth--;
  }
}
/*
 * The purpose of the Batcher is to observe when React batches end so that
 * Recoil state changes can be batched. Whenever Recoil state changes, we call
 * setState on the batcher. Then we wait for that change to be committed, which
 * signifies the end of the batch. That's when we respond to the Recoil change.
 */


function Batcher({
  setNotifyBatcherOfChange
}) {
  const storeRef = useStoreRef();
  const [_, setState] = useState([]);
  setNotifyBatcherOfChange(() => setState({}));
  useEffect(() => {
    // enqueueExecution runs this function immediately; it is only used to
    // manipulate the order of useEffects during tests, since React seems to
    // call useEffect in an unpredictable order sometimes.
    Recoil_Queue.enqueueExecution('Batcher', () => {
      endBatch(storeRef);
    });
  }); // If an asynchronous selector resolves after the Batcher is unmounted,
  // notifyBatcherOfChange will still be called. An error gets thrown whenever
  // setState is called after a component is already unmounted, so this sets
  // notifyBatcherOfChange to be a no-op.

  useEffect(() => {
    return () => {
      setNotifyBatcherOfChange(() => {});
    };
  }, [setNotifyBatcherOfChange]);
  return null;
}

if (true) {
  if (typeof window !== 'undefined' && !window.$recoilDebugStates) {
    window.$recoilDebugStates = [];
  }
} // When removing this deprecated function, remove stateBySettingRecoilValue
// which will no longer be needed.


function initialStoreState_DEPRECATED(store, initializeState) {
  const initial = makeEmptyStoreState$2();
  initializeState({
    // $FlowFixMe[escaped-generic]
    set: (atom, value) => {
      const state = initial.currentTree;
      const writes = setNodeValue$2(store, state, atom.key, value);
      const writtenNodes = new Set(writes.keys());
      const nonvalidatedAtoms = state.nonvalidatedAtoms.clone();

      for (const n of writtenNodes) {
        nonvalidatedAtoms.delete(n);
      }

      initial.currentTree = { ...state,
        dirtyAtoms: Recoil_unionSets(state.dirtyAtoms, writtenNodes),
        atomValues: applyAtomValueWrites$1(state.atomValues, writes),
        // NB: PLEASE un-export applyAtomValueWrites when deleting this code
        nonvalidatedAtoms
      };
    },
    setUnvalidatedAtomValues: atomValues => {
      // FIXME replace this with a mutative loop
      atomValues.forEach((v, k) => {
        initial.currentTree = setUnvalidatedAtomValue_DEPRECATED$1(initial.currentTree, k, v);
      });
    }
  });
  return initial;
}

function initialStoreState(initializeState) {
  const snapshot = freshSnapshot$1().map(initializeState);
  return snapshot.getStore_INTERNAL().getState();
}

let nextID = 0;

function RecoilRoot_INTERNAL({
  initializeState_DEPRECATED,
  initializeState,
  store_INTERNAL: storeProp,
  // For use with React "context bridging"
  children
}) {
  var _createMutableSource;

  // prettier-ignore
  // @fb-only: useEffect(() => {
  // @fb-only: if (gkx('recoil_usage_logging')) {
  // @fb-only: try {
  // @fb-only: RecoilUsageLogFalcoEvent.log(() => ({
  // @fb-only: type: RecoilusagelogEvent.RECOIL_ROOT_MOUNTED,
  // @fb-only: path: URI.getRequestURI().getPath(),
  // @fb-only: }));
  // @fb-only: } catch {
  // @fb-only: recoverableViolation(
  // @fb-only: 'Error when logging Recoil Usage event',
  // @fb-only: 'recoil',
  // @fb-only: );
  // @fb-only: }
  // @fb-only: }
  // @fb-only: }, []);
  let storeState; // eslint-disable-line prefer-const

  const getGraph = version => {
    const graphs = storeState.current.graphsByVersion;

    if (graphs.has(version)) {
      return Recoil_nullthrows(graphs.get(version));
    }

    const newGraph = graph$3();
    graphs.set(version, newGraph);
    return newGraph;
  };

  const subscribeToTransactions = (callback, key) => {
    if (key == null) {
      // Global transaction subscriptions
      const {
        transactionSubscriptions
      } = storeRef.current.getState();
      const id = nextID++;
      transactionSubscriptions.set(id, callback);
      return {
        release: () => {
          transactionSubscriptions.delete(id);
        }
      };
    } else {
      // Node-specific transaction subscriptions:
      const {
        nodeTransactionSubscriptions
      } = storeRef.current.getState();

      if (!nodeTransactionSubscriptions.has(key)) {
        nodeTransactionSubscriptions.set(key, new Map());
      }

      const id = nextID++;
      Recoil_nullthrows(nodeTransactionSubscriptions.get(key)).set(id, callback);
      return {
        release: () => {
          const subs = nodeTransactionSubscriptions.get(key);

          if (subs) {
            subs.delete(id);

            if (subs.size === 0) {
              nodeTransactionSubscriptions.delete(key);
            }
          }
        }
      };
    }
  };

  const addTransactionMetadata = metadata => {
    startNextTreeIfNeeded(storeRef.current);

    for (const k of Object.keys(metadata)) {
      Recoil_nullthrows(storeRef.current.getState().nextTree).transactionMetadata[k] = metadata[k];
    }
  };

  const replaceState = replacer => {
    const storeState = storeRef.current.getState();
    startNextTreeIfNeeded(storeRef.current); // Use replacer to get the next state:

    const nextTree = Recoil_nullthrows(storeState.nextTree);
    let replaced;

    try {
      stateReplacerIsBeingExecuted = true;
      replaced = replacer(nextTree);
    } finally {
      stateReplacerIsBeingExecuted = false;
    }

    if (replaced === nextTree) {
      return;
    }

    if (true) {
      if (typeof window !== 'undefined') {
        window.$recoilDebugStates.push(replaced); // TODO this shouldn't happen here because it's not batched
      }
    } // Save changes to nextTree and schedule a React update:


    storeState.nextTree = replaced;

    if (Recoil_gkx_1('recoil_early_rendering_2021')) {
      notifyComponents(store, storeState, replaced);
    }

    Recoil_nullthrows(notifyBatcherOfChange.current)();
  };

  const notifyBatcherOfChange = useRef(null);
  const setNotifyBatcherOfChange = useCallback(x => {
    notifyBatcherOfChange.current = x;
  }, [notifyBatcherOfChange]); // FIXME T2710559282599660

  const createMutableSource = (_createMutableSource = react__WEBPACK_IMPORTED_MODULE_0___default.a.createMutableSource) !== null && _createMutableSource !== void 0 ? _createMutableSource : // flowlint-line unclear-type:off
  react__WEBPACK_IMPORTED_MODULE_0___default.a.unstable_createMutableSource; // flowlint-line unclear-type:off

  const store = storeProp !== null && storeProp !== void 0 ? storeProp : {
    getState: () => storeState.current,
    replaceState,
    getGraph,
    subscribeToTransactions,
    addTransactionMetadata
  };
  const storeRef = useRef(store);
  storeState = useRef(initializeState_DEPRECATED != null ? initialStoreState_DEPRECATED(store, initializeState_DEPRECATED) : initializeState != null ? initialStoreState(initializeState) : makeEmptyStoreState$2());
  const mutableSource = useMemo(() => createMutableSource ? createMutableSource(storeState, () => storeState.current.currentTree.version) : null, [createMutableSource, storeState]); // Cleanup when the <RecoilRoot> is unmounted

  useEffect(() => () => {
    for (const atomKey of storeRef.current.getState().knownAtoms) {
      cleanUpNode$2(storeRef.current, atomKey);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppContext.Provider, {
    value: storeRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MutableSourceContext.Provider, {
    value: mutableSource
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Batcher, {
    setNotifyBatcherOfChange: setNotifyBatcherOfChange
  }), children));
}

function RecoilRoot(props) {
  const {
    override,
    ...propsExceptOverride
  } = props;
  const ancestorStoreRef = useStoreRef();

  if (override === false && ancestorStoreRef.current !== defaultStore) {
    // If ancestorStoreRef.current !== defaultStore, it means that this
    // RecoilRoot is not nested within another.
    return props.children;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecoilRoot_INTERNAL, propsExceptOverride);
}

var Recoil_RecoilRoot_react = {
  useStoreRef,
  useRecoilMutableSource,
  RecoilRoot,
  notifyComponents_FOR_TESTING: notifyComponents,
  sendEndOfBatchNotifications_FOR_TESTING: sendEndOfBatchNotifications
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * MIT License
 *
 * Copyright (c) 2014-2019 Georg Tavonius
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const UNKNOWN_FUNCTION = '<unknown>';
/**
 * This parses the different stack traces and puts them into one format
 * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)
 */

function stackTraceParser(stackString) {
  const lines = stackString.split('\n');
  return lines.reduce((stack, line) => {
    const parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);

    if (parseResult) {
      stack.push(parseResult);
    }

    return stack;
  }, []);
}

const chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/;

function parseChrome(line) {
  const parts = chromeRe.exec(line);

  if (!parts) {
    return null;
  }

  const isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line

  const isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

  const submatch = chromeEvalRe.exec(parts[2]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line/column number
    parts[2] = submatch[1]; // url

    parts[3] = submatch[2]; // line

    parts[4] = submatch[3]; // column
  }

  return {
    file: !isNative ? parts[2] : null,
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: isNative ? [parts[2]] : [],
    lineNumber: parts[3] ? +parts[3] : null,
    column: parts[4] ? +parts[4] : null
  };
}

const winjsRe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseWinjs(line) {
  const parts = winjsRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

const geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
const geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

function parseGecko(line) {
  const parts = geckoRe.exec(line);

  if (!parts) {
    return null;
  }

  const isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
  const submatch = geckoEvalRe.exec(parts[3]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line number
    parts[3] = submatch[1];
    parts[4] = submatch[2];
    parts[5] = null; // no column when eval
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: parts[2] ? parts[2].split(',') : [],
    lineNumber: parts[4] ? +parts[4] : null,
    column: parts[5] ? +parts[5] : null
  };
}

const javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;

function parseJSC(line) {
  const parts = javaScriptCoreRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[4],
    column: parts[5] ? +parts[5] : null
  };
}

const nodeRe = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseNode(line) {
  const parts = nodeRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

var Recoil_stackTraceParser = stackTraceParser;

const {
  useRef: useRef$1
} = react__WEBPACK_IMPORTED_MODULE_0___default.a;

function useComponentName() {
  const nameRef = useRef$1();

  if (true) {
    if (Recoil_gkx_1('recoil_infer_component_names')) {
      var _nameRef$current;

      if (nameRef.current === undefined) {
        // There is no blessed way to determine the calling React component from
        // within a hook. This hack uses the fact that hooks must start with 'use'
        // and that hooks are either called by React Components or other hooks. It
        // follows therefore, that to find the calling component, you simply need
        // to look down the stack and find the first function which doesn't start
        // with 'use'. We are only enabling this in dev for now, since once the
        // codebase is minified, the naming assumptions no longer hold true.
        // eslint-disable-next-line fb-www/no-new-error
        const frames = Recoil_stackTraceParser(new Error().stack);

        for (const {
          methodName
        } of frames) {
          // I observed cases where the frame was of the form 'Object.useXXX'
          // hence why I'm searching for hooks following a word boundary
          if (!methodName.match(/\buse[^\b]+$/)) {
            return nameRef.current = methodName;
          }
        }

        nameRef.current = null;
      }

      return (_nameRef$current = nameRef.current) !== null && _nameRef$current !== void 0 ? _nameRef$current : '<unable to determine component name>';
    }
  } // @fb-only: return "<component name only available when both in dev mode and when passing GK 'recoil_infer_component_names'>";


  return '<component name not available>'; // @oss-only
}

var Recoil_useComponentName = useComponentName;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function shallowArrayEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

var Recoil_shallowArrayEqual = shallowArrayEqual;

const {
  useEffect: useEffect$1,
  useRef: useRef$2
} = react__WEBPACK_IMPORTED_MODULE_0___default.a;

function usePrevious(value) {
  const ref = useRef$2();
  useEffect$1(() => {
    ref.current = value;
  });
  return ref.current;
}

var Recoil_usePrevious = usePrevious;

const {
  useStoreRef: useStoreRef$1
} = Recoil_RecoilRoot_react;

const {
  SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS$1
} = Recoil_Retention;

const {
  updateRetainCount: updateRetainCount$2
} = Recoil_Retention;

const {
  RetentionZone: RetentionZone$3
} = Recoil_RetentionZone;

const {
  isSSR: isSSR$2
} = Recoil_Environment;







const {
  useEffect: useEffect$2,
  useRef: useRef$3
} = react__WEBPACK_IMPORTED_MODULE_0___default.a; // I don't see a way to avoid the any type here because we want to accept readable
// and writable values with any type parameter, but normally with writable ones
// RecoilState<SomeT> is not a subtype of RecoilState<mixed>.


// flowlint-line unclear-type:off
function useRetain(toRetain) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  } // eslint-disable-next-line fb-www/react-hooks


  return useRetain_ACTUAL(toRetain);
}

function useRetain_ACTUAL(toRetain) {
  const array = Array.isArray(toRetain) ? toRetain : [toRetain];
  const retainables = array.map(a => a instanceof RetentionZone$3 ? a : a.key);
  const storeRef = useStoreRef$1();
  useEffect$2(() => {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    const store = storeRef.current;

    if (timeoutID.current && !isSSR$2) {
      // Already performed a temporary retain on render, simply cancel the release
      // of that temporary retain.
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
    } else {
      for (const r of retainables) {
        updateRetainCount$2(store, r, 1);
      }
    }

    return () => {
      for (const r of retainables) {
        updateRetainCount$2(store, r, -1);
      }
    }; // eslint-disable-next-line fb-www/react-hooks-deps
  }, [storeRef, ...retainables]); // We want to retain if the component suspends. This is terrible but the Suspense
  // API affords us no better option. If we suspend and never commit after some
  // seconds, then release. The 'actual' retain/release in the effect above
  // cancels this.

  const timeoutID = useRef$3();
  const previousRetainables = Recoil_usePrevious(retainables);

  if (!isSSR$2 && (previousRetainables === undefined || !Recoil_shallowArrayEqual(previousRetainables, retainables))) {
    const store = storeRef.current;

    for (const r of retainables) {
      updateRetainCount$2(store, r, 1);
    }

    if (previousRetainables) {
      for (const r of previousRetainables) {
        updateRetainCount$2(store, r, -1);
      }
    }

    if (timeoutID.current) {
      window.clearTimeout(timeoutID.current);
    }

    timeoutID.current = window.setTimeout(() => {
      timeoutID.current = null;

      for (const r of retainables) {
        updateRetainCount$2(store, r, -1);
      }
    }, SUSPENSE_TIMEOUT_MS$1);
  }
}

var Recoil_useRetain = useRetain;

const {
  batchUpdates: batchUpdates$2
} = Recoil_Batching;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$2
} = Recoil_Node;

const {
  useRecoilMutableSource: useRecoilMutableSource$1,
  useStoreRef: useStoreRef$2
} = Recoil_RecoilRoot_react;

const {
  isRecoilValue: isRecoilValue$2
} = Recoil_RecoilValue$1;

const {
  AbstractRecoilValue: AbstractRecoilValue$3,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$2,
  setRecoilValue: setRecoilValue$2,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$2,
  subscribeToRecoilValue: subscribeToRecoilValue$1
} = Recoil_RecoilValueInterface;

const {
  setByAddingToSet: setByAddingToSet$2
} = Recoil_CopyOnWrite;









const {
  mutableSourceExists: mutableSourceExists$2,
  useMutableSource: useMutableSource$1
} = Recoil_mutableSource;





const {
  useCallback: useCallback$1,
  useEffect: useEffect$3,
  useMemo: useMemo$1,
  useRef: useRef$4,
  useState: useState$1
} = react__WEBPACK_IMPORTED_MODULE_0___default.a;

function handleLoadable(loadable, recoilValue, storeRef) {
  // We can't just throw the promise we are waiting on to Suspense.  If the
  // upstream dependencies change it may produce a state in which the component
  // can render, but it would still be suspended on a Promise that may never resolve.
  if (loadable.state === 'hasValue') {
    return loadable.contents;
  } else if (loadable.state === 'loading') {
    const promise = new Promise(resolve => {
      storeRef.current.getState().suspendedComponentResolvers.add(resolve);
    }); // $FlowFixMe Flow(prop-missing) for integrating with tools that inspect thrown promises @fb-only
    // @fb-only: promise.displayName = `Recoil State: ${recoilValue.key}`;

    throw promise;
  } else if (loadable.state === 'hasError') {
    throw loadable.contents;
  } else {
    throw Recoil_err(`Invalid value of loadable atom "${recoilValue.key}"`);
  }
}

function validateRecoilValue(recoilValue, hookName) {
  if (!isRecoilValue$2(recoilValue)) {
    throw Recoil_err(`Invalid argument to ${hookName}: expected an atom or selector but got ${String(recoilValue)}`);
  }
}

/**
 * Various things are broken with useRecoilInterface, particularly concurrent mode
 * and memory management. They will not be fixed.
 * */
function useRecoilInterface_DEPRECATED() {
  const storeRef = useStoreRef$2();
  const [, forceUpdate] = useState$1([]);
  const recoilValuesUsed = useRef$4(new Set());
  recoilValuesUsed.current = new Set(); // Track the RecoilValues used just during this render

  const previousSubscriptions = useRef$4(new Set());
  const subscriptions = useRef$4(new Map());
  const unsubscribeFrom = useCallback$1(key => {
    const sub = subscriptions.current.get(key);

    if (sub) {
      sub.release();
      subscriptions.current.delete(key);
    }
  }, [subscriptions]);
  const componentName = Recoil_useComponentName();
  useEffect$3(() => {
    const store = storeRef.current;

    function updateState(_state, key) {
      if (!subscriptions.current.has(key)) {
        return;
      }

      forceUpdate([]);
    }

    Recoil_differenceSets(recoilValuesUsed.current, previousSubscriptions.current).forEach(key => {
      if (subscriptions.current.has(key)) {
        Recoil_expectationViolation(`Double subscription to RecoilValue "${key}"`);
        return;
      }

      const sub = subscribeToRecoilValue$1(store, new AbstractRecoilValue$3(key), state => {
        updateState(state, key);
      }, componentName);
      subscriptions.current.set(key, sub);
      /**
       * Since we're subscribing in an effect we need to update to the latest
       * value of the atom since it may have changed since we rendered. We can
       * go ahead and do that now, unless we're in the middle of a batch --
       * in which case we should do it at the end of the batch, due to the
       * following edge case: Suppose an atom is updated in another useEffect
       * of this same component. Then the following sequence of events occur:
       * 1. Atom is updated and subs fired (but we may not be subscribed
       *    yet depending on order of effects, so we miss this) Updated value
       *    is now in nextTree, but not currentTree.
       * 2. This effect happens. We subscribe and update.
       * 3. From the update we re-render and read currentTree, with old value.
       * 4. Batcher's effect sets currentTree to nextTree.
       * In this sequence we miss the update. To avoid that, add the update
       * to queuedComponentCallback if a batch is in progress.
       */
      // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.

      const state = store.getState();

      if (state.nextTree) {
        store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          updateState(store.getState(), key);
        });
      } else {
        updateState(store.getState(), key);
      }
    });
    Recoil_differenceSets(previousSubscriptions.current, recoilValuesUsed.current).forEach(key => {
      unsubscribeFrom(key);
    });
    previousSubscriptions.current = recoilValuesUsed.current;
  });
  useEffect$3(() => {
    const subs = subscriptions.current;
    return () => subs.forEach((_, key) => unsubscribeFrom(key));
  }, [unsubscribeFrom]);
  return useMemo$1(() => {
    // eslint-disable-next-line no-shadow
    function useSetRecoilState(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useSetRecoilState');
      }

      return newValueOrUpdater => {
        setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
      };
    } // eslint-disable-next-line no-shadow


    function useResetRecoilState(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useResetRecoilState');
      }

      return () => setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    } // eslint-disable-next-line no-shadow


    function useRecoilValueLoadable(recoilValue) {
      var _storeState$nextTree;

      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
      }

      if (!recoilValuesUsed.current.has(recoilValue.key)) {
        recoilValuesUsed.current = setByAddingToSet$2(recoilValuesUsed.current, recoilValue.key);
      } // TODO Restore optimization to memoize lookup


      const storeState = storeRef.current.getState();
      return getRecoilValueAsLoadable$2(storeRef.current, recoilValue, Recoil_gkx_1('recoil_early_rendering_2021') ? (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree : storeState.currentTree);
    } // eslint-disable-next-line no-shadow


    function useRecoilValue(recoilValue) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilValue, 'useRecoilValue');
      }

      const loadable = useRecoilValueLoadable(recoilValue);
      return handleLoadable(loadable, recoilValue, storeRef);
    } // eslint-disable-next-line no-shadow


    function useRecoilState(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useRecoilState');
      }

      return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
    } // eslint-disable-next-line no-shadow


    function useRecoilStateLoadable(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useRecoilStateLoadable');
      }

      return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
    }

    return {
      getRecoilValue: useRecoilValue,
      getRecoilValueLoadable: useRecoilValueLoadable,
      getRecoilState: useRecoilState,
      getRecoilStateLoadable: useRecoilStateLoadable,
      getSetRecoilState: useSetRecoilState,
      getResetRecoilState: useResetRecoilState
    };
  }, [recoilValuesUsed, storeRef]);
}

const recoilComponentGetRecoilValueCount_FOR_TESTING = {
  current: 0
};

function useRecoilValueLoadable_MUTABLESOURCE(recoilValue) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
  }

  const storeRef = useStoreRef$2();
  const getLoadable = useCallback$1(() => {
    var _storeState$nextTree2;

    const store = storeRef.current;
    const storeState = store.getState();
    const treeState = Recoil_gkx_1('recoil_early_rendering_2021') ? (_storeState$nextTree2 = storeState.nextTree) !== null && _storeState$nextTree2 !== void 0 ? _storeState$nextTree2 : storeState.currentTree : storeState.currentTree;
    return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
  }, [storeRef, recoilValue]);
  const getLoadableWithTesting = useCallback$1(() => {
    if (true) {
      recoilComponentGetRecoilValueCount_FOR_TESTING.current++;
    }

    return getLoadable();
  }, [getLoadable]);
  const componentName = Recoil_useComponentName();
  const subscribe = useCallback$1((_storeState, callback) => {
    const store = storeRef.current;
    const subscription = subscribeToRecoilValue$1(store, recoilValue, () => {
      if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
        return callback();
      } // Only re-render if the value has changed.
      // This will evaluate the atom/selector now as well as when the
      // component renders, but that may help with prefetching.


      const newLoadable = getLoadable();

      if (!prevLoadableRef.current.is(newLoadable)) {
        callback();
      } // If the component is suspended then the effect setting prevLoadableRef
      // will not run.  So, set the previous value here when its subscription
      // is fired to wake it up.  We can't just rely on this, though, because
      // this only executes when an atom/selector is dirty and the atom/selector
      // passed to the hook can dynamically change.


      prevLoadableRef.current = newLoadable;
    }, componentName);
    return subscription.release;
  }, [storeRef, recoilValue, componentName, getLoadable]);
  const source = useRecoilMutableSource$1();
  const loadable = useMutableSource$1(source, getLoadableWithTesting, subscribe);
  const prevLoadableRef = useRef$4(loadable);
  useEffect$3(() => {
    prevLoadableRef.current = loadable;
  });
  return loadable;
}

function useRecoilValueLoadable_LEGACY(recoilValue) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
  }

  const storeRef = useStoreRef$2();
  const [_, forceUpdate] = useState$1([]);
  const componentName = Recoil_useComponentName();
  useEffect$3(() => {
    const store = storeRef.current;
    const storeState = store.getState();
    const subscription = subscribeToRecoilValue$1(store, recoilValue, _state => {
      var _prevLoadableRef$curr;

      if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
        return forceUpdate([]);
      }

      const newLoadable = getRecoilValueAsLoadable$2(store, recoilValue, store.getState().currentTree);

      if (!((_prevLoadableRef$curr = prevLoadableRef.current) === null || _prevLoadableRef$curr === void 0 ? void 0 : _prevLoadableRef$curr.is(newLoadable))) {
        forceUpdate(newLoadable);
      }

      prevLoadableRef.current = newLoadable;
    }, componentName);
    /**
     * Since we're subscribing in an effect we need to update to the latest
     * value of the atom since it may have changed since we rendered. We can
     * go ahead and do that now, unless we're in the middle of a batch --
     * in which case we should do it at the end of the batch, due to the
     * following edge case: Suppose an atom is updated in another useEffect
     * of this same component. Then the following sequence of events occur:
     * 1. Atom is updated and subs fired (but we may not be subscribed
     *    yet depending on order of effects, so we miss this) Updated value
     *    is now in nextTree, but not currentTree.
     * 2. This effect happens. We subscribe and update.
     * 3. From the update we re-render and read currentTree, with old value.
     * 4. Batcher's effect sets currentTree to nextTree.
     * In this sequence we miss the update. To avoid that, add the update
     * to queuedComponentCallback if a batch is in progress.
     */

    if (storeState.nextTree) {
      store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        prevLoadableRef.current = null;
        forceUpdate([]);
      });
    } else {
      var _prevLoadableRef$curr2;

      if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
        return forceUpdate([]);
      }

      const newLoadable = getRecoilValueAsLoadable$2(store, recoilValue, store.getState().currentTree);

      if (!((_prevLoadableRef$curr2 = prevLoadableRef.current) === null || _prevLoadableRef$curr2 === void 0 ? void 0 : _prevLoadableRef$curr2.is(newLoadable))) {
        forceUpdate(newLoadable);
      }

      prevLoadableRef.current = newLoadable;
    }

    return subscription.release;
  }, [componentName, recoilValue, storeRef]);
  const loadable = getRecoilValueAsLoadable$2(storeRef.current, recoilValue);
  const prevLoadableRef = useRef$4(loadable);
  useEffect$3(() => {
    prevLoadableRef.current = loadable;
  });
  return loadable;
}
/**
  Like useRecoilValue(), but either returns the value if available or
  just undefined if not available for any reason, such as pending or error.
*/


function useRecoilValueLoadable(recoilValue) {
  if (Recoil_gkx_1('recoil_memory_managament_2020')) {
    // eslint-disable-next-line fb-www/react-hooks
    Recoil_useRetain(recoilValue);
  }

  if (mutableSourceExists$2()) {
    // eslint-disable-next-line fb-www/react-hooks
    return useRecoilValueLoadable_MUTABLESOURCE(recoilValue);
  } else {
    // eslint-disable-next-line fb-www/react-hooks
    return useRecoilValueLoadable_LEGACY(recoilValue);
  }
}
/**
  Returns the value represented by the RecoilValue.
  If the value is pending, it will throw a Promise to suspend the component,
  if the value is an error it will throw it for the nearest React error boundary.
  This will also subscribe the component for any updates in the value.
  */


function useRecoilValue(recoilValue) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValue');
  }

  const storeRef = useStoreRef$2();
  const loadable = useRecoilValueLoadable(recoilValue);
  return handleLoadable(loadable, recoilValue, storeRef);
}
/**
  Returns a function that allows the value of a RecoilState to be updated, but does
  not subscribe the component to changes to that RecoilState.
*/


function useSetRecoilState(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useSetRecoilState');
  }

  const storeRef = useStoreRef$2();
  return useCallback$1(newValueOrUpdater => {
    setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
  }, [storeRef, recoilState]);
}
/**
  Returns a function that will reset the value of a RecoilState to its default
*/


function useResetRecoilState(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useResetRecoilState');
  }

  const storeRef = useStoreRef$2();
  return useCallback$1(() => {
    setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
  }, [storeRef, recoilState]);
}
/**
  Equivalent to useState(). Allows the value of the RecoilState to be read and written.
  Subsequent updates to the RecoilState will cause the component to re-render. If the
  RecoilState is pending, this will suspend the component and initiate the
  retrieval of the value. If evaluating the RecoilState resulted in an error, this will
  throw the error so that the nearest React error boundary can catch it.
*/


function useRecoilState(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useRecoilState');
  }

  return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
}
/**
  Like useRecoilState(), but does not cause Suspense or React error handling. Returns
  an object that indicates whether the RecoilState is available, pending, or
  unavailable due to an error.
*/


function useRecoilStateLoadable(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useRecoilStateLoadable');
  }

  return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
}

function useSetUnvalidatedAtomValues() {
  const storeRef = useStoreRef$2();
  return (values, transactionMetadata = {}) => {
    batchUpdates$2(() => {
      storeRef.current.addTransactionMetadata(transactionMetadata);
      values.forEach((value, key) => setUnvalidatedRecoilValue$2(storeRef.current, new AbstractRecoilValue$3(key), value));
    });
  };
}

var Recoil_Hooks = {
  recoilComponentGetRecoilValueCount_FOR_TESTING,
  useRecoilInterface: useRecoilInterface_DEPRECATED,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
  useResetRecoilState,
  useSetRecoilState,
  useSetUnvalidatedAtomValues
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a map containing all of the keys + values from the original map where
 * the given callback returned true.
 */

function filterMap(map, callback) {
  const result = new Map();

  for (const [key, value] of map) {
    if (callback(value, key)) {
      result.set(key, value);
    }
  }

  return result;
}

var Recoil_filterMap = filterMap;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a set containing all of the values from the original set where
 * the given callback returned true.
 */

function filterSet(set, callback) {
  const result = new Set();

  for (const value of set) {
    if (callback(value)) {
      result.add(value);
    }
  }

  return result;
}

var Recoil_filterSet = filterSet;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function mergeMaps(...maps) {
  const result = new Map();

  for (let i = 0; i < maps.length; i++) {
    const iterator = maps[i].keys();
    let nextKey;

    while (!(nextKey = iterator.next()).done) {
      // $FlowFixMe[incompatible-call] - map/iterator knows nothing about flow types
      result.set(nextKey.value, maps[i].get(nextKey.value));
    }
  }
  /* $FlowFixMe[incompatible-return] (>=0.66.0 site=www,mobile) This comment
   * suppresses an error found when Flow v0.66 was deployed. To see the error
   * delete this comment and run Flow. */


  return result;
}

var Recoil_mergeMaps = mergeMaps;

const {
  batchUpdates: batchUpdates$3
} = Recoil_Batching;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$3,
  getNode: getNode$3,
  nodes: nodes$1
} = Recoil_Node;

const {
  useStoreRef: useStoreRef$3
} = Recoil_RecoilRoot_react;

const {
  AbstractRecoilValue: AbstractRecoilValue$4,
  setRecoilValueLoadable: setRecoilValueLoadable$1
} = Recoil_RecoilValueInterface;

const {
  SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS$2
} = Recoil_Retention;

const {
  Snapshot: Snapshot$1,
  cloneSnapshot: cloneSnapshot$1
} = Recoil_Snapshot$1;

const {
  isSSR: isSSR$3
} = Recoil_Environment;















const {
  useCallback: useCallback$2,
  useEffect: useEffect$4,
  useRef: useRef$5,
  useState: useState$2
} = react__WEBPACK_IMPORTED_MODULE_0___default.a;

function useTransactionSubscription(callback) {
  const storeRef = useStoreRef$3();
  useEffect$4(() => {
    const sub = storeRef.current.subscribeToTransactions(callback);
    return sub.release;
  }, [callback, storeRef]);
}

function externallyVisibleAtomValuesInState(state) {
  const atomValues = state.atomValues.toMap();
  const persistedAtomContentsValues = Recoil_mapMap(Recoil_filterMap(atomValues, (v, k) => {
    const node = getNode$3(k);
    const persistence = node.persistence_UNSTABLE;
    return persistence != null && persistence.type !== 'none' && v.state === 'hasValue';
  }), v => v.contents); // Merge in nonvalidated atoms; we may not have defs for them but they will
  // all have persistence on or they wouldn't be there in the first place.

  return Recoil_mergeMaps(state.nonvalidatedAtoms.toMap(), persistedAtomContentsValues);
}

/**
  Calls the given callback after any atoms have been modified and the consequent
  component re-renders have been committed. This is intended for persisting
  the values of the atoms to storage. The stored values can then be restored
  using the useSetUnvalidatedAtomValues hook.

  The callback receives the following info:

  atomValues: The current value of every atom that is both persistable (persistence
              type not set to 'none') and whose value is available (not in an
              error or loading state).

  previousAtomValues: The value of every persistable and available atom before
               the transaction began.

  atomInfo: A map containing the persistence settings for each atom. Every key
            that exists in atomValues will also exist in atomInfo.

  modifiedAtoms: The set of atoms that were written to during the transaction.

  transactionMetadata: Arbitrary information that was added via the
          useSetUnvalidatedAtomValues hook. Useful for ignoring the useSetUnvalidatedAtomValues
          transaction, to avoid loops.
*/
function useTransactionObservation_DEPRECATED(callback) {
  useTransactionSubscription(useCallback$2(store => {
    let previousTree = store.getState().previousTree;
    const currentTree = store.getState().currentTree;

    if (!previousTree) {
      Recoil_recoverableViolation('Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil');
      previousTree = store.getState().currentTree; // attempt to trundle on
    }

    const atomValues = externallyVisibleAtomValuesInState(currentTree);
    const previousAtomValues = externallyVisibleAtomValuesInState(previousTree);
    const atomInfo = Recoil_mapMap(nodes$1, node => {
      var _node$persistence_UNS, _node$persistence_UNS2, _node$persistence_UNS3, _node$persistence_UNS4;

      return {
        persistence_UNSTABLE: {
          type: (_node$persistence_UNS = (_node$persistence_UNS2 = node.persistence_UNSTABLE) === null || _node$persistence_UNS2 === void 0 ? void 0 : _node$persistence_UNS2.type) !== null && _node$persistence_UNS !== void 0 ? _node$persistence_UNS : 'none',
          backButton: (_node$persistence_UNS3 = (_node$persistence_UNS4 = node.persistence_UNSTABLE) === null || _node$persistence_UNS4 === void 0 ? void 0 : _node$persistence_UNS4.backButton) !== null && _node$persistence_UNS3 !== void 0 ? _node$persistence_UNS3 : false
        }
      };
    }); // Filter on existance in atomValues so that externally-visible rules
    // are also applied to modified atoms (specifically exclude selectors):

    const modifiedAtoms = Recoil_filterSet(currentTree.dirtyAtoms, k => atomValues.has(k) || previousAtomValues.has(k));
    callback({
      atomValues,
      previousAtomValues,
      atomInfo,
      modifiedAtoms,
      transactionMetadata: { ...currentTree.transactionMetadata
      }
    });
  }, [callback]));
}

function useRecoilTransactionObserver(callback) {
  useTransactionSubscription(useCallback$2(store => {
    const snapshot = cloneSnapshot$1(store, 'current');
    const previousSnapshot = cloneSnapshot$1(store, 'previous');
    callback({
      snapshot,
      previousSnapshot
    });
  }, [callback]));
} // Return a snapshot of the current state and subscribe to all state changes


function useRecoilSnapshot() {
  const storeRef = useStoreRef$3();
  const [snapshot, setSnapshot] = useState$2(() => cloneSnapshot$1(storeRef.current));
  const previousSnapshot = Recoil_usePrevious(snapshot);
  const timeoutID = useRef$5();
  useEffect$4(() => {
    if (timeoutID.current && !isSSR$3) {
      window.clearTimeout(timeoutID.current);
    }

    return snapshot.retain();
  }, [snapshot]);
  useTransactionSubscription(useCallback$2(store => setSnapshot(cloneSnapshot$1(store)), []));

  if (previousSnapshot !== snapshot && !isSSR$3) {
    if (timeoutID.current) {
      previousSnapshot === null || previousSnapshot === void 0 ? void 0 : previousSnapshot.release_INTERNAL();
      window.clearTimeout(timeoutID.current);
    }

    snapshot.retain();
    timeoutID.current = window.setTimeout(() => {
      snapshot.release_INTERNAL();
      timeoutID.current = null;
    }, SUSPENSE_TIMEOUT_MS$2);
  }

  return snapshot;
}

function useGotoRecoilSnapshot() {
  const storeRef = useStoreRef$3();
  return useCallback$2(snapshot => {
    var _storeState$nextTree;

    const storeState = storeRef.current.getState();
    const prev = (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree;
    const next = snapshot.getStore_INTERNAL().getState().currentTree;
    batchUpdates$3(() => {
      const keysToUpdate = new Set();

      for (const keys of [prev.atomValues.keys(), next.atomValues.keys()]) {
        for (const key of keys) {
          var _prev$atomValues$get, _next$atomValues$get;

          if (((_prev$atomValues$get = prev.atomValues.get(key)) === null || _prev$atomValues$get === void 0 ? void 0 : _prev$atomValues$get.contents) !== ((_next$atomValues$get = next.atomValues.get(key)) === null || _next$atomValues$get === void 0 ? void 0 : _next$atomValues$get.contents) && getNode$3(key).shouldRestoreFromSnapshots) {
            keysToUpdate.add(key);
          }
        }
      }

      keysToUpdate.forEach(key => {
        setRecoilValueLoadable$1(storeRef.current, new AbstractRecoilValue$4(key), next.atomValues.has(key) ? Recoil_nullthrows(next.atomValues.get(key)) : DEFAULT_VALUE$3);
      });
      storeRef.current.replaceState(state => {
        return { ...state,
          stateID: snapshot.getID_INTERNAL()
        };
      });
    });
  }, [storeRef]);
}

var Recoil_SnapshotHooks = {
  useRecoilSnapshot,
  useGotoRecoilSnapshot,
  useRecoilTransactionObserver,
  useTransactionObservation_DEPRECATED,
  useTransactionSubscription_DEPRECATED: useTransactionSubscription
};

const {
  peekNodeInfo: peekNodeInfo$2
} = Recoil_FunctionalCore;

const {
  useStoreRef: useStoreRef$4
} = Recoil_RecoilRoot_react;

function useGetRecoilValueInfo() {
  const storeRef = useStoreRef$4();
  return ({
    key
  }) => peekNodeInfo$2(storeRef.current, storeRef.current.getState().currentTree, key);
}

var Recoil_useGetRecoilValueInfo = useGetRecoilValueInfo;

const {
  RecoilRoot: RecoilRoot$1,
  useStoreRef: useStoreRef$5
} = Recoil_RecoilRoot_react;



const {
  useMemo: useMemo$2
} = react__WEBPACK_IMPORTED_MODULE_0___default.a;

function useRecoilBridgeAcrossReactRoots() {
  const store = useStoreRef$5().current;
  return useMemo$2(() => {
    // eslint-disable-next-line no-shadow
    function RecoilBridge({
      children
    }) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecoilRoot$1, {
        store_INTERNAL: store
      }, children);
    }

    return RecoilBridge;
  }, [store]);
}

var Recoil_useRecoilBridgeAcrossReactRoots = useRecoilBridgeAcrossReactRoots;

const {
  loadableWithValue: loadableWithValue$1
} = Recoil_Loadable$1;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$4,
  getNode: getNode$4
} = Recoil_Node;

const {
  copyTreeState: copyTreeState$1,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$3,
  invalidateDownstreams: invalidateDownstreams$1,
  writeLoadableToTreeState: writeLoadableToTreeState$1
} = Recoil_RecoilValueInterface;



function isAtom(recoilValue) {
  return getNode$4(recoilValue.key).nodeType === 'atom';
}

class TransactionInterfaceImpl {
  constructor(store, treeState) {
    _defineProperty(this, "_store", void 0);

    _defineProperty(this, "_treeState", void 0);

    _defineProperty(this, "_changes", void 0);

    _defineProperty(this, "get", recoilValue => {
      if (this._changes.has(recoilValue.key)) {
        // $FlowFixMe[incompatible-return]
        return this._changes.get(recoilValue.key);
      }

      if (!isAtom(recoilValue)) {
        throw Recoil_err('Reading selectors within atomicUpdate is not supported');
      }

      const loadable = getRecoilValueAsLoadable$3(this._store, recoilValue, this._treeState);

      if (loadable.state === 'hasValue') {
        return loadable.contents;
      } else if (loadable.state === 'hasError') {
        throw loadable.contents;
      } else {
        throw Recoil_err(`Expected Recoil atom ${recoilValue.key} to have a value, but it is in a loading state.`);
      }
    });

    _defineProperty(this, "set", (recoilState, valueOrUpdater) => {
      if (!isAtom(recoilState)) {
        throw Recoil_err('Setting selectors within atomicUpdate is not supported');
      }

      if (typeof valueOrUpdater === 'function') {
        const current = this.get(recoilState);

        this._changes.set(recoilState.key, valueOrUpdater(current)); // flowlint-line unclear-type:off

      } else {
        this._changes.set(recoilState.key, valueOrUpdater);
      }
    });

    _defineProperty(this, "reset", recoilState => {
      this.set(recoilState, DEFAULT_VALUE$4);
    });

    this._store = store;
    this._treeState = treeState;
    this._changes = new Map();
  } // Allow destructing
  // eslint-disable-next-line fb-www/extra-arrow-initializer


  newTreeState_INTERNAL() {
    if (this._changes.size === 0) {
      return this._treeState;
    }

    const newState = copyTreeState$1(this._treeState);

    for (const [k, v] of this._changes) {
      writeLoadableToTreeState$1(newState, k, loadableWithValue$1(v));
    }

    invalidateDownstreams$1(this._store, newState);
    return newState;
  }

}

function atomicUpdater(store) {
  return fn => {
    store.replaceState(treeState => {
      const changeset = new TransactionInterfaceImpl(store, treeState);
      fn(changeset);
      return changeset.newTreeState_INTERNAL();
    });
  };
}

var Recoil_AtomicUpdates = {
  atomicUpdater
};

var Recoil_AtomicUpdates_1 = Recoil_AtomicUpdates.atomicUpdater;

var Recoil_AtomicUpdates$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  atomicUpdater: Recoil_AtomicUpdates_1
});

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

var invariant_1 = invariant;

// @oss-only


var Recoil_invariant = invariant_1;

const {
  atomicUpdater: atomicUpdater$1
} = Recoil_AtomicUpdates$1;

const {
  batchUpdates: batchUpdates$4
} = Recoil_Batching;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$5
} = Recoil_Node;

const {
  useStoreRef: useStoreRef$6
} = Recoil_RecoilRoot_react;

const {
  setRecoilValue: setRecoilValue$3
} = Recoil_RecoilValueInterface;

const {
  Snapshot: Snapshot$2,
  cloneSnapshot: cloneSnapshot$2
} = Recoil_Snapshot$1;





const {
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1
} = Recoil_SnapshotHooks;

const {
  useCallback: useCallback$3
} = react__WEBPACK_IMPORTED_MODULE_0___default.a;

class Sentinel {}

const SENTINEL = new Sentinel();

function useRecoilCallback(fn, deps) {
  const storeRef = useStoreRef$6();
  const gotoSnapshot = useGotoRecoilSnapshot$1();
  return useCallback$3((...args) => {
    function set(recoilState, newValueOrUpdater) {
      setRecoilValue$3(storeRef.current, recoilState, newValueOrUpdater);
    }

    function reset(recoilState) {
      setRecoilValue$3(storeRef.current, recoilState, DEFAULT_VALUE$5);
    } // Use currentTree for the snapshot to show the currently committed state


    const snapshot = cloneSnapshot$2(storeRef.current); // FIXME massive gains from doing this lazily

    const atomicUpdate = atomicUpdater$1(storeRef.current);
    let ret = SENTINEL;
    batchUpdates$4(() => {
      const errMsg = 'useRecoilCallback expects a function that returns a function: ' + 'it accepts a function of the type (RecoilInterface) => T = R ' + 'and returns a callback function T => R, where RecoilInterface is an ' + 'object {snapshot, set, ...} and T and R are the argument and return ' + 'types of the callback you want to create.  Please see the docs ' + 'at recoiljs.org for details.';

      if (typeof fn !== 'function') {
        throw Recoil_err(errMsg);
      } // flowlint-next-line unclear-type:off


      const cb = fn({
        set,
        reset,
        snapshot,
        gotoSnapshot,
        transact_UNSTABLE: atomicUpdate
      });

      if (typeof cb !== 'function') {
        throw Recoil_err(errMsg);
      }

      ret = cb(...args);
    });
    !!(ret instanceof Sentinel) ?  true ? Recoil_invariant(false, 'batchUpdates should return immediately') : undefined : void 0;
    return ret;
  }, deps != null ? [...deps, storeRef] : undefined // eslint-disable-line fb-www/react-hooks-deps
  );
}

var Recoil_useRecoilCallback = useRecoilCallback;

const {
  getNode: getNode$5
} = Recoil_Node;

const {
  useStoreRef: useStoreRef$7
} = Recoil_RecoilRoot_react;

const {
  useCallback: useCallback$4
} = react__WEBPACK_IMPORTED_MODULE_0___default.a;

function useRecoilRefresher(recoilValue) {
  const storeRef = useStoreRef$7();
  return useCallback$4(() => {
    var _node$clearCache;

    const store = storeRef.current;
    const {
      currentTree
    } = store.getState();
    const node = getNode$5(recoilValue.key);
    (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, currentTree);
  }, [recoilValue, storeRef]);
}

var Recoil_useRecoilRefresher = useRecoilRefresher;

const {
  atomicUpdater: atomicUpdater$2
} = Recoil_AtomicUpdates$1;

const {
  useStoreRef: useStoreRef$8
} = Recoil_RecoilRoot_react;

const {
  useMemo: useMemo$3
} = react__WEBPACK_IMPORTED_MODULE_0___default.a;

function useRecoilTransaction(fn, deps) {
  const storeRef = useStoreRef$8();
  return useMemo$3(() => (...args) => {
    const atomicUpdate = atomicUpdater$2(storeRef.current);
    atomicUpdate(transactionInterface => {
      fn(transactionInterface)(...args);
    });
  }, deps != null ? [...deps, storeRef] : undefined // eslint-disable-line fb-www/react-hooks-deps
  );
}

var Recoil_useRecoilTransaction = useRecoilTransaction;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function isNode(object) {
  var _ownerDocument, _doc$defaultView;

  if (typeof window === 'undefined') {
    return false;
  }

  const doc = object != null ? (_ownerDocument = object.ownerDocument) !== null && _ownerDocument !== void 0 ? _ownerDocument : object : document;
  const defaultView = (_doc$defaultView = doc.defaultView) !== null && _doc$defaultView !== void 0 ? _doc$defaultView : window;
  return !!(object != null && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

var Recoil_isNode = isNode;

const {
  isReactNative: isReactNative$1,
  isSSR: isSSR$4
} = Recoil_Environment;





function shouldNotBeFrozen(value) {
  // Primitives and functions:
  if (value === null || typeof value !== 'object') {
    return true;
  } // React elements:


  switch (typeof value.$$typeof) {
    case 'symbol':
      return true;

    case 'number':
      return true;
  } // Immutable structures:


  if (value['@@__IMMUTABLE_ITERABLE__@@'] != null || value['@@__IMMUTABLE_KEYED__@@'] != null || value['@@__IMMUTABLE_INDEXED__@@'] != null || value['@@__IMMUTABLE_ORDERED__@@'] != null || value['@@__IMMUTABLE_RECORD__@@'] != null) {
    return true;
  } // DOM nodes:


  if (Recoil_isNode(value)) {
    return true;
  }

  if (Recoil_isPromise(value)) {
    return true;
  }

  if (value instanceof Error) {
    return true;
  }

  if (ArrayBuffer.isView(value)) {
    return true;
  } // Some environments, just as Jest, don't work with the instanceof check


  if (!isSSR$4 && !isReactNative$1 && ( // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  value === window || value instanceof Window)) {
    return true;
  }

  return false;
} // Recursively freeze a value to enforce it is read-only.
// This may also have minimal performance improvements for enumerating
// objects (based on browser implementations, of course)


function deepFreezeValue(value) {
  if (typeof value !== 'object' || shouldNotBeFrozen(value)) {
    return;
  }

  Object.freeze(value); // Make all properties read-only

  for (const key in value) {
    // $FlowFixMe[method-unbinding] added when improving typing for this parameters
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      const prop = value[key]; // Prevent infinite recurssion for circular references.

      if (typeof prop === 'object' && prop != null && !Object.isFrozen(prop)) {
        deepFreezeValue(prop);
      }
    }
  }

  Object.seal(value); // This also makes existing properties non-configurable.
}

var Recoil_deepFreezeValue = deepFreezeValue;

const TIME_WARNING_THRESHOLD_MS = 15;

function stringify(x, opt, key) {
  // A optimization to avoid the more expensive JSON.stringify() for simple strings
  // This may lose protection for u2028 and u2029, though.
  if (typeof x === 'string' && !x.includes('"') && !x.includes('\\')) {
    return `"${x}"`;
  } // Handle primitive types


  switch (typeof x) {
    case 'undefined':
      return '';
    // JSON.stringify(undefined) returns undefined, but we always want to return a string

    case 'boolean':
      return x ? 'true' : 'false';

    case 'number':
    case 'symbol':
      // case 'bigint': // BigInt is not supported in www
      return String(x);

    case 'string':
      // Add surrounding quotes and escape internal quotes
      return JSON.stringify(x);

    case 'function':
      if ((opt === null || opt === void 0 ? void 0 : opt.allowFunctions) !== true) {
        throw Recoil_err('Attempt to serialize function in a Recoil cache key');
      }

      return `__FUNCTION(${x.name})__`;
  }

  if (x === null) {
    return 'null';
  } // Fallback case for unknown types


  if (typeof x !== 'object') {
    var _JSON$stringify;

    return (_JSON$stringify = JSON.stringify(x)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '';
  } // Deal with all promises as equivalent for now.


  if (Recoil_isPromise(x)) {
    return '__PROMISE__';
  } // Arrays handle recursive stringification


  if (Array.isArray(x)) {
    return `[${x.map((v, i) => stringify(v, opt, i.toString()))}]`;
  } // If an object defines a toJSON() method, then use that to override the
  // serialization.  This matches the behavior of JSON.stringify().
  // Pass the key for compatibility.
  // Immutable.js collections define this method to allow us to serialize them.


  if (typeof x.toJSON === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(x.toJSON(key), opt, key);
  } // For built-in Maps, sort the keys in a stable order instead of the
  // default insertion order.  Support non-string keys.


  if (x instanceof Map) {
    const obj = {};

    for (const [k, v] of x) {
      // Stringify will escape any nested quotes
      obj[typeof k === 'string' ? k : stringify(k, opt)] = v;
    }

    return stringify(obj, opt, key);
  } // For built-in Sets, sort the keys in a stable order instead of the
  // default insertion order.


  if (x instanceof Set) {
    return stringify(Array.from(x).sort((a, b) => stringify(a, opt).localeCompare(stringify(b, opt))), opt, key);
  } // Anything else that is iterable serialize as an Array.


  if (Symbol !== undefined && x[Symbol.iterator] != null && typeof x[Symbol.iterator] === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(Array.from(x), opt, key);
  } // For all other Objects, sort the keys in a stable order.


  return `{${Object.keys(x).filter(k => x[k] !== undefined).sort() // stringify the key to add quotes and escape any nested slashes or quotes.
  .map(k => `${stringify(k, opt)}:${stringify(x[k], opt, k)}`).join(',')}}`;
} // Utility similar to JSON.stringify() except:
// * Serialize built-in Sets as an Array
// * Serialize built-in Maps as an Object.  Supports non-string keys.
// * Serialize other iterables as arrays
// * Sort the keys of Objects and Maps to have a stable order based on string conversion.
//    This overrides their default insertion order.
// * Still uses toJSON() of any object to override serialization
// * Support Symbols (though don't guarantee uniqueness)
// * We could support BigInt, but Flow doesn't seem to like it.
// See Recoil_stableStringify-test.js for examples


function stableStringify(x, opt = {
  allowFunctions: false
}) {
  if (true) {
    if (typeof window !== 'undefined') {
      const startTime = window.performance ? window.performance.now() : 0;
      const str = stringify(x, opt);
      const endTime = window.performance ? window.performance.now() : 0;

      if (endTime - startTime > TIME_WARNING_THRESHOLD_MS) {
        /* eslint-disable fb-www/no-console */
        console.groupCollapsed(`Recoil: Spent ${endTime - startTime}ms computing a cache key`);
        console.warn(x, str);
        console.groupEnd();
        /* eslint-enable fb-www/no-console */
      }

      return str;
    }
  }

  return stringify(x, opt);
}

var Recoil_stableStringify = stableStringify;

class TreeCache {
  constructor(options) {
    var _options$onHit, _options$onSet, _options$mapNodeValue;

    _defineProperty(this, "_numLeafs", void 0);

    _defineProperty(this, "_root", void 0);

    _defineProperty(this, "_onHit", void 0);

    _defineProperty(this, "_onSet", void 0);

    _defineProperty(this, "_mapNodeValue", void 0);

    this._numLeafs = 0;
    this._root = null;
    this._onHit = (_options$onHit = options === null || options === void 0 ? void 0 : options.onHit) !== null && _options$onHit !== void 0 ? _options$onHit : () => {};
    this._onSet = (_options$onSet = options === null || options === void 0 ? void 0 : options.onSet) !== null && _options$onSet !== void 0 ? _options$onSet : () => {};
    this._mapNodeValue = (_options$mapNodeValue = options === null || options === void 0 ? void 0 : options.mapNodeValue) !== null && _options$mapNodeValue !== void 0 ? _options$mapNodeValue : val => val;
  }

  size() {
    return this._numLeafs;
  } // TODO: nodeCount(): number


  root() {
    return this._root;
  }

  get(getNodeValue, handlers) {
    var _this$getLeafNode;

    return (_this$getLeafNode = this.getLeafNode(getNodeValue, handlers)) === null || _this$getLeafNode === void 0 ? void 0 : _this$getLeafNode.value;
  }

  getLeafNode(getNodeValue, handlers) {
    return findLeaf(this.root(), nodeKey => this._mapNodeValue(getNodeValue(nodeKey)), {
      onNodeVisit: node => {
        handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);

        if (node.type === 'leaf') {
          this._onHit(node);
        }
      }
    });
  }

  set(route, value, handlers) {
    let leafNode;
    let newRoot = null;

    const setRetryablePart = () => {
      newRoot = addLeaf(this.root(), route.map(([nodeKey, nodeValue]) => [nodeKey, this._mapNodeValue(nodeValue)]), null, value, null, {
        onNodeVisit: node => {
          handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);

          if (node.type === 'leaf') {
            leafNode = node;
          }
        }
      }, () => {
        this.clear();
        setRetryablePart();
      });
    };

    setRetryablePart();

    if (!this.root()) {
      this._root = newRoot;
    }

    this._numLeafs++;

    this._onSet(Recoil_nullthrows(leafNode));
  }

  delete(node) {
    if (!this.root()) {
      return false;
    }

    const root = Recoil_nullthrows(this.root());
    const existsInTree = pruneNodeFromTree(root, node, node.parent);

    if (!existsInTree) {
      return false;
    }

    if (node === root || root.type === 'branch' && !root.branches.size) {
      this._root = null;
      this._numLeafs = 0;
      return true;
    }

    this._numLeafs -= countDownstreamLeaves(node);
    return true;
  }

  clear() {
    this._numLeafs = 0;
    this._root = null;
  }

}

const findLeaf = (root, getNodeValue, handlers) => {
  var _handlers$onNodeVisit;

  if (root == null) {
    return undefined;
  }

  handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit = handlers.onNodeVisit) === null || _handlers$onNodeVisit === void 0 ? void 0 : _handlers$onNodeVisit.call(handlers, root);

  if (root.type === 'leaf') {
    return root;
  }

  const nodeValue = getNodeValue(root.nodeKey);
  return findLeaf(root.branches.get(nodeValue), getNodeValue, handlers);
};

const addLeaf = (root, route, parent, value, branchKey, handlers, onAbort) => {
  var _handlers$onNodeVisit2;

  let node;

  if (root == null) {
    if (route.length === 0) {
      node = {
        type: 'leaf',
        value,
        parent,
        branchKey
      };
    } else {
      const [path, ...rest] = route;
      const [nodeKey, nodeValue] = path;
      node = {
        type: 'branch',
        nodeKey,
        parent,
        branches: new Map(),
        branchKey
      };
      node.branches.set(nodeValue, addLeaf(null, rest, node, value, nodeValue, handlers, onAbort));
    }
  } else {
    node = root;

    if (route.length) {
      const [path, ...rest] = route;
      const [nodeKey, nodeValue] = path;

      if (root.type !== 'branch' || root.nodeKey !== nodeKey) {
        Recoil_recoverableViolation('Existing cache must have a branch midway through the ' + 'route with matching node key. Resetting cache.');
        onAbort();
        return node; // ignored
      }

      root.branches.set(nodeValue, addLeaf(root.branches.get(nodeValue), rest, root, value, nodeValue, handlers, onAbort));
    }
  }

  handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit2 = handlers.onNodeVisit) === null || _handlers$onNodeVisit2 === void 0 ? void 0 : _handlers$onNodeVisit2.call(handlers, node);
  return node;
};

const pruneNodeFromTree = (root, node, parent) => {
  if (!parent) {
    return root === node;
  }

  parent.branches.delete(node.branchKey);
  return pruneUpstreamBranches(root, parent, parent.parent);
};

const pruneUpstreamBranches = (root, branchNode, parent) => {
  if (!parent) {
    return root === branchNode;
  }

  if (branchNode.branches.size === 0) {
    parent.branches.delete(branchNode.branchKey);
  }

  return pruneUpstreamBranches(root, parent, parent.parent);
};

const countDownstreamLeaves = node => node.type === 'leaf' ? 1 : Array.from(node.branches.values()).reduce((sum, currNode) => sum + countDownstreamLeaves(currNode), 0);

var Recoil_TreeCache = {
  TreeCache
};

var Recoil_TreeCache_1 = Recoil_TreeCache.TreeCache;

var Recoil_TreeCache$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TreeCache: Recoil_TreeCache_1
});

class LRUCache {
  constructor(options) {
    var _options$mapKey;

    _defineProperty(this, "_maxSize", void 0);

    _defineProperty(this, "_size", void 0);

    _defineProperty(this, "_head", void 0);

    _defineProperty(this, "_tail", void 0);

    _defineProperty(this, "_map", void 0);

    _defineProperty(this, "_keyMapper", void 0);

    this._maxSize = options.maxSize;
    this._size = 0;
    this._head = null;
    this._tail = null;
    this._map = new Map();
    this._keyMapper = (_options$mapKey = options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : v => v;
  }

  head() {
    return this._head;
  }

  tail() {
    return this._tail;
  }

  size() {
    return this._size;
  }

  maxSize() {
    return this._maxSize;
  }

  has(key) {
    return this._map.has(this._keyMapper(key));
  }

  get(key) {
    const mappedKey = this._keyMapper(key);

    const node = this._map.get(mappedKey);

    if (!node) {
      return undefined;
    }

    this.set(key, node.value);
    return node.value;
  }

  set(key, val) {
    const mappedKey = this._keyMapper(key);

    const existingNode = this._map.get(mappedKey);

    if (existingNode) {
      this.delete(key);
    }

    const head = this.head();
    const node = {
      key,
      right: head,
      left: null,
      value: val
    };

    if (head) {
      head.left = node;
    } else {
      this._tail = node;
    }

    this._map.set(mappedKey, node);

    this._head = node;
    this._size++;

    this._maybeDeleteLRU();
  }

  _maybeDeleteLRU() {
    if (this.size() > this.maxSize()) {
      this.deleteLru();
    }
  }

  deleteLru() {
    const tail = this.tail();

    if (tail) {
      this.delete(tail.key);
    }
  }

  delete(key) {
    const mappedKey = this._keyMapper(key);

    if (!this._size || !this._map.has(mappedKey)) {
      return;
    }

    const node = Recoil_nullthrows(this._map.get(mappedKey));
    const right = node.right;
    const left = node.left;

    if (right) {
      right.left = node.left;
    }

    if (left) {
      left.right = node.right;
    }

    if (node === this.head()) {
      this._head = right;
    }

    if (node === this.tail()) {
      this._tail = left;
    }

    this._map.delete(mappedKey);

    this._size--;
  }

  clear() {
    this._size = 0;
    this._head = null;
    this._tail = null;
    this._map = new Map();
  }

}

var Recoil_LRUCache = {
  LRUCache
};

var Recoil_LRUCache_1 = Recoil_LRUCache.LRUCache;

var Recoil_LRUCache$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LRUCache: Recoil_LRUCache_1
});

const {
  LRUCache: LRUCache$1
} = Recoil_LRUCache$1;

const {
  TreeCache: TreeCache$1
} = Recoil_TreeCache$1;

function treeCacheLRU(maxSize, mapNodeValue = v => v) {
  const lruCache = new LRUCache$1({
    maxSize
  });
  const cache = new TreeCache$1({
    mapNodeValue,
    onHit: node => {
      lruCache.set(node, true);
    },
    onSet: node => {
      const lruNode = lruCache.tail();
      lruCache.set(node, true);

      if (lruNode && cache.size() > maxSize) {
        cache.delete(lruNode.key);
      }
    }
  }); // $FlowFixMe[method-unbinding]

  return cache;
}

var Recoil_treeCacheLRU = treeCacheLRU;

const {
  TreeCache: TreeCache$2
} = Recoil_TreeCache$1;



const defaultPolicy = {
  equality: 'reference',
  eviction: 'keep-all',
  maxSize: Infinity
};

function treeCacheFromPolicy({
  equality = defaultPolicy.equality,
  eviction = defaultPolicy.eviction,
  maxSize = defaultPolicy.maxSize
} = defaultPolicy) {
  const valueMapper = getValueMapper(equality);
  const treeCache = getTreeCache(eviction, maxSize, valueMapper);
  return treeCache;
}

function getValueMapper(equality) {
  switch (equality) {
    case 'reference':
      return val => val;

    case 'value':
      return val => Recoil_stableStringify(val);
  }

  throw Recoil_err(`Unrecognized equality policy ${equality}`);
}

function getTreeCache(eviction, maxSize, mapNodeValue) {
  switch (eviction) {
    case 'keep-all':
      // $FlowFixMe[method-unbinding]
      return new TreeCache$2({
        mapNodeValue
      });

    case 'lru':
      return Recoil_treeCacheLRU(Recoil_nullthrows(maxSize), mapNodeValue);

    case 'most-recent':
      return Recoil_treeCacheLRU(1, mapNodeValue);
  }

  throw Recoil_err(`Unrecognized eviction policy ${eviction}`);
}

var Recoil_treeCacheFromPolicy = treeCacheFromPolicy;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is a stub for some integration into FB internal stuff
 */
function startPerfBlock(_id) {
  return () => null;
}

var Recoil_PerformanceTimings = {
  startPerfBlock
};

const {
  loadableWithError: loadableWithError$1,
  loadableWithPromise: loadableWithPromise$1,
  loadableWithValue: loadableWithValue$2
} = Recoil_Loadable$1;



const {
  getNodeLoadable: getNodeLoadable$2,
  peekNodeLoadable: peekNodeLoadable$1,
  setNodeValue: setNodeValue$3
} = Recoil_FunctionalCore;

const {
  saveDependencyMapToStore: saveDependencyMapToStore$1
} = Recoil_Graph;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$6,
  RecoilValueNotReady: RecoilValueNotReady$2,
  getConfigDeletionHandler: getConfigDeletionHandler$1,
  getNode: getNode$6,
  registerNode: registerNode$1
} = Recoil_Node;

const {
  isRecoilValue: isRecoilValue$3
} = Recoil_RecoilValue$1;

const {
  AbstractRecoilValue: AbstractRecoilValue$5
} = Recoil_RecoilValue$1;

const {
  markRecoilValueModified: markRecoilValueModified$1,
  setRecoilValueLoadable: setRecoilValueLoadable$2
} = Recoil_RecoilValueInterface;

const {
  retainedByOptionWithDefault: retainedByOptionWithDefault$1
} = Recoil_Retention;

const {
  cloneSnapshot: cloneSnapshot$3
} = Recoil_Snapshot$1;













const {
  startPerfBlock: startPerfBlock$1
} = Recoil_PerformanceTimings;



class Canceled {}

const CANCELED = new Canceled();
/**
 * An ExecutionId is an arbitrary ID that lets us distinguish executions from
 * each other. This is necessary as we need a way of solving this problem:
 * "given 3 async executions, only update state for the 'latest' execution when
 * it finishes running regardless of when the other 2 finish". ExecutionIds
 * provide a convenient way of identifying executions so that we can track and
 * manage them over time.
 */

const dependencyStack = []; // for detecting circular dependencies.

const waitingStores = new Map();
/* eslint-disable no-redeclare */

const getNewExecutionId = (() => {
  let executionId = 0;
  return () => executionId++;
})();

function getInitialExecutionInfo() {
  return {
    depValuesDiscoveredSoFarDuringAsyncWork: null,
    latestLoadable: null,
    latestExecutionId: null,
    stateVersion: null
  };
}

function selector(options) {
  let recoilValue = null;
  const {
    key,
    get,
    cachePolicy_UNSTABLE: cachePolicy
  } = options;
  const set = options.set != null ? options.set : undefined; // flow

  if (true) {
    if (typeof key !== 'string') {
      throw Recoil_err('A key option with a unique string value must be provided when creating a selector.');
    }

    if (typeof get !== 'function') {
      throw Recoil_err('Selectors must specify a get callback option to get the selector value.');
    }
  } // This is every discovered dependency across executions


  const discoveredDependencyNodeKeys = new Set();
  const cache = Recoil_treeCacheFromPolicy(cachePolicy !== null && cachePolicy !== void 0 ? cachePolicy : {
    equality: 'reference',
    eviction: 'keep-all'
  });
  const retainedBy = retainedByOptionWithDefault$1(options.retainedBy_UNSTABLE);
  const executionInfoMap = new Map();
  let liveStoresCount = 0;

  function selectorIsLive() {
    return !Recoil_gkx_1('recoil_memory_managament_2020') || liveStoresCount > 0;
  }

  function getExecutionInfo(store) {
    if (!executionInfoMap.has(store)) {
      executionInfoMap.set(store, getInitialExecutionInfo());
    }

    return Recoil_nullthrows(executionInfoMap.get(store));
  }

  function selectorInit(store) {
    liveStoresCount++;
    store.getState().knownSelectors.add(key); // FIXME remove knownSelectors?

    return () => {
      liveStoresCount--;
      store.getState().knownSelectors.delete(key);
      executionInfoMap.delete(store);
    };
  }

  function selectorShouldDeleteConfigOnRelease() {
    return getConfigDeletionHandler$1(key) !== undefined && !selectorIsLive();
  }

  function notifyStoreWhenAsyncSettles(store, loadable, executionId) {
    if (loadable.state === 'loading') {
      let stores = waitingStores.get(executionId);

      if (stores == null) {
        waitingStores.set(executionId, stores = new Set());
      }

      stores.add(store);
    }
  }

  function notifyStoresOfSettledAsync(newLoadable, executionId) {
    const stores = waitingStores.get(executionId);

    if (stores !== undefined) {
      for (const store of stores) {
        setRecoilValueLoadable$2(store, new AbstractRecoilValue$5(key), newLoadable);
      }

      waitingStores.delete(executionId);
    }
  }

  function getCachedNodeLoadable(store, state, nodeKey) {
    const isKeyPointingToSelector = store.getState().knownSelectors.has(nodeKey);
    /**
     * It's important that we don't bypass calling getNodeLoadable for atoms
     * as getNodeLoadable has side effects in state
     */

    if (isKeyPointingToSelector && state.atomValues.has(nodeKey)) {
      return Recoil_nullthrows(state.atomValues.get(nodeKey));
    }

    const loadable = getNodeLoadable$2(store, state, nodeKey);

    if (loadable.state !== 'loading' && isKeyPointingToSelector) {
      state.atomValues.set(nodeKey, loadable);
    }

    return loadable;
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * returned from a selector's get() (either explicitly or implicitly by
   * running a function that uses the "async" keyword). If a selector's get()
   * returns a promise, we have two possibilities:
   *
   * 1. The promise will resolve, in which case it will have completely finished
   *    executing without any remaining pending dependencies. No more retries
   *    are needed and we can proceed with updating the cache and notifying
   *    subscribers (if it is the latest execution, otherwise only the cache
   *    will be updated and subscriptions will not be fired). This is the case
   *    handled by the attached then() handler.
   *
   * 2. The promise will throw because it either has an error or it came across
   *    an async dependency that has not yet resolved, in which case we will
   *    call wrapDepdencyPromise(), whose responsibility is to handle dependency
   *    promises. This case is handled by the attached catch() handler.
   *
   * Both branches will eventually resolve to the final result of the selector
   * (or an error if a real error occurred).
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was thrown--AKA a
   * dependency promise. Dependency promises should be passed to
   * wrapPendingDependencyPromise()).
   */


  function wrapPendingPromise(store, promise, state, depValues, executionId, loadingDepsState) {
    return promise.then(value => {
      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        throw CANCELED;
      }

      const loadable = loadableWithValue$2(value);
      maybeFreezeValue(value);
      setCache(state, depValuesToDepRoute(depValues), loadable);
      setDepsInStore(store, state, new Set(depValues.keys()), executionId);
      setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      return value;
    }).catch(errorOrPromise => {
      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        throw CANCELED;
      }

      if (isLatestExecution(store, executionId)) {
        updateExecutionInfoDepValues(depValues, store, executionId);
      }

      if (Recoil_isPromise(errorOrPromise)) {
        return wrapPendingDependencyPromise(store, errorOrPromise, state, depValues, executionId, loadingDepsState);
      }

      const loadable = loadableWithError$1(errorOrPromise);
      maybeFreezeValue(errorOrPromise);
      setCache(state, depValuesToDepRoute(depValues), loadable);
      setDepsInStore(store, state, new Set(depValues.keys()), executionId);
      setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      throw errorOrPromise;
    });
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * thrown from a selector's get(). If a selector's get() throws a promise,
   * we have two possibilities:
   *
   * 1. The promise will resolve, meaning one of our selector's dependencies is
   *    now available and we should "retry" our get() by running it again. This
   *    is the case handled by the attached then() handler.
   *
   * 2. The promise will throw because something went wrong with the dependency
   *    promise (in other words a real error occurred). This case is handled by
   *    the attached catch() handler. If the dependency promise throws, it is
   *    _always_ a real error and not another dependency promise (any dependency
   *    promises would have been handled upstream).
   *
   * The then() branch will eventually resolve to the final result of the
   * selector (or an error if a real error occurs), and the catch() will always
   * resolve to an error because the dependency promise is a promise that was
   * wrapped upstream, meaning it will only resolve to its real value or to a
   * real error.
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was returned from
   * get(). The intention is that this function is only passed promises that
   * were thrown due to a pending dependency. Promises returned by get() should
   * be passed to wrapPendingPromise() instead.
   */


  function wrapPendingDependencyPromise(store, promise, state, existingDeps, executionId, loadingDepsState) {
    return promise.then(resolvedDep => {
      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        throw CANCELED;
      } // Check if we are handling a pending Recoil dependency or if the user
      // threw their own Promise to "suspend" a selector evaluation.  We need
      // to check that the loadingDepPromise actually matches the promise that
      // we caught in case the selector happened to catch the promise we threw
      // for a pending Recoil dependency from `getRecoilValue()` and threw
      // their own promise instead.


      if (loadingDepsState.loadingDepKey != null && loadingDepsState.loadingDepPromise === promise) {
        /**
         * Note for async atoms, this means we are changing the atom's value
         * in the store for the given version. This should be alright because
         * the version of state is now stale and a new version will have
         * already been triggered by the atom being resolved (see this logic
         * in Recoil_atom.js)
         */
        state.atomValues.set(loadingDepsState.loadingDepKey, loadableWithValue$2(resolvedDep));
      } else {
        /**
         * If resolvedDepKey is not defined, the promise was a user-thrown
         * promise. User-thrown promises are an advanced feature and they
         * should be avoided in almost all cases. Using `loadable.map()` inside
         * of selectors for loading loadables and then throwing that mapped
         * loadable's promise is an example of a user-thrown promise.
         *
         * When we hit a user-thrown promise, we have to bail out of an optimization
         * where we bypass calculating selector cache keys for selectors that
         * have been previously seen for a given state (these selectors are saved in
         * state.atomValues) to avoid stale state as we have no way of knowing
         * what state changes happened (if any) in result to the promise resolving.
         *
         * Ideally we would only bail out selectors that are in the chain of
         * dependencies for this selector, but there's currently no way to get
         * a full list of a selector's downstream nodes because the state that
         * is executing may be a discarded tree (so store.getGraph(state.version)
         * will be empty), and the full dep tree may not be in the selector
         * caches in the case where the selector's cache was cleared. To solve
         * for this we would have to keep track  of all running selector
         * executions and their downstream deps. Because this only covers edge
         * cases, that complexity might not be justifyable.
         */
        store.getState().knownSelectors.forEach(nodeKey => {
          state.atomValues.delete(nodeKey);
        });
      }
      /**
       * Optimization: Now that the dependency has resolved, let's try hitting
       * the cache in case the dep resolved to a value we have previously seen.
       *
       * TODO:
       * Note this optimization is not perfect because it only prevents re-executions
       * _after_ the point where an async dependency is found. Any code leading
       * up to the async dependency may have run unnecessarily. The ideal case
       * would be to wait for the async dependency to resolve first, check the
       * cache, and prevent _any_ execution of the selector if the resulting
       * value of the dependency leads to a path that is found in the cache.
       * The ideal case is more difficult to implement as it would require that
       * we capture and wait for the the async dependency right after checking
       * the cache. The current approach takes advantage of the fact that running
       * the selector already has a code path that lets us exit early when
       * an async dep resolves.
       */


      const cachedLoadable = getValFromCacheAndUpdatedDownstreamDeps(store, state);

      if (cachedLoadable && cachedLoadable.state === 'hasValue') {
        setExecutionInfo(cachedLoadable, store);
        return cachedLoadable.contents;
      }
      /**
       * If this execution is stale, let's check to see if there is some in
       * progress execution with a matching state. If we find a match, then
       * we can take the value from that in-progress execution. Note this may
       * sound like an edge case, but may be very common in cases where a
       * loading dependency resolves from loading to having a value (thus
       * possibly triggering a re-render), and React re-renders before the
       * chained .then() functions run, thus starting a new execution as the
       * dep has changed value. Without this check we will run the selector
       * twice (once in the new execution and once again in this .then(), so
       * this check is necessary to keep unnecessary re-executions to a
       * minimum).
       *
       * Also note this code does not check across all executions that may be
       * running. It only optimizes for the _latest_ execution per store as
       * we currently do not maintain a list of all currently running executions.
       * This means in some cases we may run selectors more than strictly
       * necessary when there are multiple executions running for the same
       * selector. This may be a valid tradeoff as checking for dep changes
       * across all in-progress executions may take longer than just
       * re-running the selector. This will be app-dependent, and maybe in the
       * future we can make the behavior configurable. An ideal fix may be
       * to extend the tree cache to support caching loading states.
       */


      if (!isLatestExecution(store, executionId)) {
        var _executionInfo$latest;

        const executionInfo = getExecutionInfoOfInProgressExecution(state);

        if ((executionInfo === null || executionInfo === void 0 ? void 0 : (_executionInfo$latest = executionInfo.latestLoadable) === null || _executionInfo$latest === void 0 ? void 0 : _executionInfo$latest.state) === 'loading') {
          /**
           * Returning promise here without wrapping as the wrapper logic was
           * already done upstream when this promise was generated.
           */
          return executionInfo.latestLoadable.contents;
        }
      }

      const [loadable, depValues] = evaluateSelectorGetter(store, state, executionId);

      if (isLatestExecution(store, executionId)) {
        updateExecutionInfoDepValues(depValues, store, executionId);
      }

      if (loadable.state !== 'loading') {
        setCache(state, depValuesToDepRoute(depValues), loadable);
        setDepsInStore(store, state, new Set(depValues.keys()), executionId);
        setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      }

      if (loadable.state === 'hasError') {
        throw loadable.contents;
      }
      /**
       * Returning any promises here without wrapping as the wrapepr logic was
       * already done when we called evaluateSelectorGetter() to get this
       * loadable
       */


      return loadable.contents;
    }).catch(error => {
      if (error instanceof Canceled) {
        Recoil_recoverableViolation('Selector was released while it had dependencies');
        throw CANCELED;
      }

      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        throw CANCELED;
      }

      const loadable = loadableWithError$1(error);
      maybeFreezeValue(error);
      setCache(state, depValuesToDepRoute(existingDeps), loadableWithError$1(error));
      setDepsInStore(store, state, new Set(existingDeps.keys()), executionId);
      setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      throw error;
    });
  }

  function setLoadableInStoreToNotifyDeps(store, loadable, executionId) {
    if (isLatestExecution(store, executionId)) {
      setExecutionInfo(loadable, store);
      notifyStoresOfSettledAsync(loadable, executionId);
    }
  }

  function setDepsInStore(store, state, deps, executionId) {
    var _store$getState, _store$getState$curre, _store$getState2, _store$getState2$next;

    if (isLatestExecution(store, executionId) || state.version === ((_store$getState = store.getState()) === null || _store$getState === void 0 ? void 0 : (_store$getState$curre = _store$getState.currentTree) === null || _store$getState$curre === void 0 ? void 0 : _store$getState$curre.version) || state.version === ((_store$getState2 = store.getState()) === null || _store$getState2 === void 0 ? void 0 : (_store$getState2$next = _store$getState2.nextTree) === null || _store$getState2$next === void 0 ? void 0 : _store$getState2$next.version)) {
      var _store$getState$nextT, _store$getState3, _store$getState3$next;

      saveDependencyMapToStore$1(new Map([[key, deps]]), store, (_store$getState$nextT = (_store$getState3 = store.getState()) === null || _store$getState3 === void 0 ? void 0 : (_store$getState3$next = _store$getState3.nextTree) === null || _store$getState3$next === void 0 ? void 0 : _store$getState3$next.version) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree.version);
    }
  }

  function setNewDepInStore(store, state, deps, newDepKey, executionId) {
    deps.add(newDepKey);
    setDepsInStore(store, state, deps, executionId);
  }

  function evaluateSelectorGetter(store, state, executionId) {
    const endPerfBlock = startPerfBlock$1(key); // TODO T63965866: use execution ID here

    let result;
    let resultIsError = false;
    let loadable;
    const loadingDepsState = {
      loadingDepKey: null,
      loadingDepPromise: null
    };
    const depValues = new Map();
    /**
     * Starting a fresh set of deps that we'll be using to update state. We're
     * starting a new set versus adding it in existing state deps because
     * the version of state that we update deps for may be a more recent version
     * than the version the selector was called with. This is because the latest
     * execution will update the deps of the current/latest version of state (
     * this is safe to do because the fact that the selector is the latest
     * execution means the deps we discover below are our best guess at the
     * deps for the current/latest state in the store)
     */

    const deps = new Set();
    setDepsInStore(store, state, deps, executionId);

    function getRecoilValue(dep) {
      const {
        key: depKey
      } = dep;
      setNewDepInStore(store, state, deps, depKey, executionId);
      const depLoadable = getCachedNodeLoadable(store, state, depKey);
      depValues.set(depKey, depLoadable);

      switch (depLoadable.state) {
        case 'hasValue':
          return depLoadable.contents;

        case 'hasError':
          throw depLoadable.contents;

        case 'loading':
          loadingDepsState.loadingDepKey = depKey;
          loadingDepsState.loadingDepPromise = depLoadable.contents;
          throw depLoadable.contents;
      }

      throw Recoil_err('Invalid Loadable state');
    }

    let gateCallback = false;

    const getCallback = fn => {
      return (...args) => {
        if (!gateCallback) {
          throw Recoil_err('getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can obtain the current Recoil state without a subscription.');
        }

        const snapshot = cloneSnapshot$3(store);
        const cb = fn({
          snapshot
        });

        if (typeof cb !== 'function') {
          throw Recoil_err('getCallback() expects a function that returns a function.');
        }

        return cb(...args);
      };
    };

    try {
      result = get({
        get: getRecoilValue,
        getCallback
      });
      result = isRecoilValue$3(result) ? getRecoilValue(result) : result;
      gateCallback = true;

      if (Recoil_isPromise(result)) {
        result = wrapPendingPromise(store, result, state, depValues, executionId, loadingDepsState).finally(endPerfBlock);
      } else {
        endPerfBlock();
      }
    } catch (errorOrDepPromise) {
      result = errorOrDepPromise;

      if (Recoil_isPromise(result)) {
        result = wrapPendingDependencyPromise(store, result, state, depValues, executionId, loadingDepsState).finally(endPerfBlock);
      } else {
        resultIsError = true;
        endPerfBlock();
      }
    }

    if (resultIsError) {
      loadable = loadableWithError$1(result);
    } else if (Recoil_isPromise(result)) {
      loadable = loadableWithPromise$1(result);
    } else {
      loadable = loadableWithValue$2(result);
    }

    if (loadable.state !== 'loading') {
      maybeFreezeValue(loadable.contents);
    }

    return [loadable, depValues];
  }

  function getValFromCacheAndUpdatedDownstreamDeps(store, state) {
    const depsAfterCacheDone = new Set();
    const executionInfo = getExecutionInfo(store);
    let cachedVal;

    try {
      cachedVal = cache.get(nodeKey => {
        !(typeof nodeKey === 'string') ?  true ? Recoil_invariant(false, 'Cache nodeKey is type string') : undefined : void 0;
        const loadable = getCachedNodeLoadable(store, state, nodeKey);
        return loadable.contents;
      }, {
        onNodeVisit: node => {
          if (node.type === 'branch' && node.nodeKey !== key && typeof node.nodeKey === 'string') {
            depsAfterCacheDone.add(node.nodeKey);
            discoveredDependencyNodeKeys.add(node.nodeKey);
          }
        }
      });
    } catch (error) {
      throw Recoil_err(`Problem with cache lookup for selector "${key}": ${error.message}`);
    }
    /**
     * Ensure store contains correct dependencies if we hit the cache so that
     * the store deps and cache are in sync for a given state. This is important
     * because store deps are normally updated when new executions are created,
     * but cache hits don't trigger new executions but they still _may_ signifiy
     * a change in deps in the store if the store deps for this state are empty
     * or stale.
     */


    if (cachedVal) {
      setDepsInStore(store, state, depsAfterCacheDone, executionInfo.latestExecutionId);
    }

    return cachedVal;
  }
  /**
   * FIXME: dep keys should take into account the state of the loadable to
   * prevent the edge case where a loadable with an error and a loadable with
   * an error as a value are treated as the same thing incorrectly. For example
   * these two should be treated differently:
   *
   * selector({key: '', get: () => new Error('hi')});
   * selector({key: '', get () => {throw new Error('hi')}});
   *
   * With current implementation they are treated the same
   */


  function depValuesToDepRoute(depValues) {
    return Array.from(depValues.entries()).map(([depKey, valLoadable]) => [depKey, valLoadable.contents]);
  }

  function getValFromRunningNewExecutionAndUpdatedDeps(store, state) {
    const newExecutionId = getNewExecutionId();
    const [loadable, newDepValues] = evaluateSelectorGetter(store, state, newExecutionId);
    setExecutionInfo(loadable, store, newDepValues, newExecutionId, state);
    maybeSetCacheWithLoadable(state, depValuesToDepRoute(newDepValues), loadable);
    notifyStoreWhenAsyncSettles(store, loadable, newExecutionId);
    return loadable;
  }
  /**
   * Given a tree state, this function returns the "selector result", which is
   * defined as a size-2 tuple of [DependencyMap, Loadable<T>].
   *
   * The selector's get() function will only be re-evaluated if _both_ of the
   * following statements are true:
   *
   * 1. The current dep values from the given state produced a cache key that
   *    was not found in the cache.
   * 2. There is no currently running async execution OR there is an
   *    async execution that is running, but after comparing the dep values in
   *    the given state with the dep values that the execution has discovered so
   *    far we find that at least one dep value has changed, in which case we
   *    start a new execution (the previously running execution will continue to
   *    run to completion, but only the new execution will be deemed the
   *    'latest' execution, meaning it will be the only execution that will
   *    update global state when it is finished. Any non-latest executions will
   *    run to completion and update the selector cache but not global state).
   */


  function getSelectorValAndUpdatedDeps(store, state) {
    const cachedVal = getValFromCacheAndUpdatedDownstreamDeps(store, state);

    if (cachedVal != null) {
      setExecutionInfo(cachedVal, store);
      return cachedVal;
    }

    const inProgressExecutionInfo = getExecutionInfoOfInProgressExecution(state); // FIXME: this won't work with custom caching b/c it uses separate cache

    if (inProgressExecutionInfo) {
      const executionInfo = inProgressExecutionInfo;
      notifyStoreWhenAsyncSettles(store, Recoil_nullthrows(executionInfo.latestLoadable), Recoil_nullthrows(executionInfo.latestExecutionId)); // FIXME: check after the fact to see if we made the right choice by waiting

      return Recoil_nullthrows(executionInfo.latestLoadable);
    }

    return getValFromRunningNewExecutionAndUpdatedDeps(store, state);
  }
  /**
   * Searches execution info across all stores to see if there is an in-progress
   * execution whose dependency values match the values of the requesting store.
   */


  function getExecutionInfoOfInProgressExecution(state) {
    var _Array$from$find;

    const [, executionInfo] = (_Array$from$find = Array.from(executionInfoMap.entries()).find(([store, execInfo]) => {
      return execInfo.latestLoadable != null && execInfo.latestExecutionId != null && !haveAsyncDepsChanged(store, state);
    })) !== null && _Array$from$find !== void 0 ? _Array$from$find : [];
    return executionInfo;
  }

  const mapOfCheckedVersions = new Map();

  function haveAsyncDepsChanged(store, state) {
    var _executionInfo$depVal, _mapOfCheckedVersions;

    const executionInfo = getExecutionInfo(store);
    const oldDepValues = (_executionInfo$depVal = executionInfo.depValuesDiscoveredSoFarDuringAsyncWork) !== null && _executionInfo$depVal !== void 0 ? _executionInfo$depVal : new Map();
    const cachedDepValuesCheckedForThisVersion = Array(((_mapOfCheckedVersions = mapOfCheckedVersions.get(state.version)) !== null && _mapOfCheckedVersions !== void 0 ? _mapOfCheckedVersions : new Map()).entries());
    const isCachedVersionSame = mapOfCheckedVersions.has(state.version) && cachedDepValuesCheckedForThisVersion.length === oldDepValues.size && cachedDepValuesCheckedForThisVersion.every(([nodeKey, nodeVal]) => {
      return oldDepValues.get(nodeKey) === nodeVal;
    });

    if (oldDepValues == null || state.version === executionInfo.stateVersion || isCachedVersionSame) {
      return false;
    }

    mapOfCheckedVersions.set(state.version, new Map(oldDepValues));
    return Array.from(oldDepValues).some(([nodeKey, oldVal]) => {
      const loadable = getCachedNodeLoadable(store, state, nodeKey);
      return loadable.contents !== oldVal.contents;
    });
  }
  /**
   * This function will update the selector's execution info when the selector
   * has either finished running an execution or has started a new execution. If
   * the given loadable is in a 'loading' state, the intention is that a new
   * execution has started. Otherwise, the intention is that an execution has
   * just finished.
   */


  function setExecutionInfo(loadable, store, depValues, newExecutionId, state) {
    const executionInfo = getExecutionInfo(store);

    if (loadable.state === 'loading') {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
      executionInfo.latestExecutionId = newExecutionId;
      executionInfo.latestLoadable = loadable;
      executionInfo.stateVersion = state === null || state === void 0 ? void 0 : state.version;
    } else {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = null;
      executionInfo.latestExecutionId = null;
      executionInfo.latestLoadable = null;
      executionInfo.stateVersion = null;
    }
  }
  /**
   * Conditionally updates the cache with a given loadable.
   *
   * We only cache loadables that are not loading because our cache keys are
   * based on dep values, which are in an unfinished state for loadables that
   * have a 'loading' state (new deps may be discovered while the selector
   * runs its async code). We never want to cache partial dependencies b/c it
   * could lead to errors, such as prematurely returning the result based on a
   * partial list of deps-- we need the full list of deps to ensure that we
   * are returning the correct result from cache.
   */


  function maybeSetCacheWithLoadable(state, depRoute, loadable) {
    if (loadable.state !== 'loading') {
      setCache(state, depRoute, loadable);
    }
  }

  function updateExecutionInfoDepValues(depValues, store, executionId) {
    const executionInfo = getExecutionInfo(store);

    if (isLatestExecution(store, executionId)) {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
    }
  }

  function clearExecutionInfo(store, executionId) {
    if (isLatestExecution(store, executionId)) {
      executionInfoMap.delete(store);
    }
  }

  function isLatestExecution(store, executionId) {
    const executionInfo = getExecutionInfo(store);
    return executionId === executionInfo.latestExecutionId;
  }

  function maybeFreezeValue(val) {
    if (true) {
      if (Boolean(options.dangerouslyAllowMutability) === false) {
        Recoil_deepFreezeValue(val);
      }
    }
  }

  function setCache(state, cacheRoute, loadable) {
    state.atomValues.set(key, loadable);

    try {
      cache.set(cacheRoute, loadable);
    } catch (error) {
      throw Recoil_err(`Problem with setting cache for selector "${key}": ${error.message}`);
    }
  }

  function detectCircularDependencies(fn) {
    if (dependencyStack.includes(key)) {
      const message = `Recoil selector has circular dependencies: ${dependencyStack.slice(dependencyStack.indexOf(key)).join(' \u2192 ')}`;
      return loadableWithError$1(Recoil_err(message));
    }

    dependencyStack.push(key);

    try {
      return fn();
    } finally {
      dependencyStack.pop();
    }
  }

  function selectorPeek(store, state) {
    const cacheVal = cache.get(nodeKey => {
      !(typeof nodeKey === 'string') ?  true ? Recoil_invariant(false, 'Cache nodeKey is type string') : undefined : void 0;
      const peek = peekNodeLoadable$1(store, state, nodeKey);
      return peek === null || peek === void 0 ? void 0 : peek.contents;
    });
    return cacheVal;
  }

  function selectorGet(store, state) {
    return detectCircularDependencies(() => getSelectorValAndUpdatedDeps(store, state));
  }

  function invalidateSelector(state) {
    state.atomValues.delete(key);
  }

  function clearSelectorCache(store, treeState) {
    !(recoilValue != null) ?  true ? Recoil_invariant(false, 'Recoil Value can never be null') : undefined : void 0;

    for (const nodeKey of discoveredDependencyNodeKeys) {
      var _node$clearCache;

      const node = getNode$6(nodeKey);
      (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, treeState);
    }

    invalidateSelector(treeState);
    cache.clear();
    markRecoilValueModified$1(store, recoilValue);
  }

  if (set != null) {
    /**
     * ES5 strict mode prohibits defining non-top-level function declarations,
     * so don't use function declaration syntax here
     */
    const selectorSet = (store, state, newValue) => {
      let syncSelectorSetFinished = false;
      const writes = new Map();

      function getRecoilValue({
        key: depKey
      }) {
        if (syncSelectorSetFinished) {
          throw Recoil_err('Recoil: Async selector sets are not currently supported.');
        }

        const loadable = getCachedNodeLoadable(store, state, depKey);

        if (loadable.state === 'hasValue') {
          return loadable.contents;
        } else if (loadable.state === 'loading') {
          throw new RecoilValueNotReady$2(depKey);
        } else {
          throw loadable.contents;
        }
      }

      function setRecoilState(recoilState, valueOrUpdater) {
        if (syncSelectorSetFinished) {
          throw Recoil_err('Recoil: Async selector sets are not currently supported.');
        }

        const setValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
        // flowlint-next-line unclear-type:off
        valueOrUpdater(getRecoilValue(recoilState)) : valueOrUpdater;
        const upstreamWrites = setNodeValue$3(store, state, recoilState.key, setValue);
        upstreamWrites.forEach((v, k) => writes.set(k, v));
      }

      function resetRecoilState(recoilState) {
        setRecoilState(recoilState, DEFAULT_VALUE$6);
      }

      const ret = set({
        set: setRecoilState,
        get: getRecoilValue,
        reset: resetRecoilState
      }, newValue); // set should be a void method, but if the user makes it `async`, then it
      // will return a Promise, which we don't currently support.

      if (ret !== undefined) {
        throw Recoil_isPromise(ret) ? Recoil_err('Recoil: Async selector sets are not currently supported.') : Recoil_err('Recoil: selector set should be a void function.');
      }

      syncSelectorSetFinished = true;
      return writes;
    };

    return recoilValue = registerNode$1({
      key,
      nodeType: 'selector',
      peek: selectorPeek,
      get: selectorGet,
      set: selectorSet,
      init: selectorInit,
      invalidate: invalidateSelector,
      clearCache: clearSelectorCache,
      shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
      retainedBy
    });
  } else {
    return recoilValue = registerNode$1({
      key,
      nodeType: 'selector',
      peek: selectorPeek,
      get: selectorGet,
      init: selectorInit,
      invalidate: invalidateSelector,
      clearCache: clearSelectorCache,
      shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
      retainedBy
    });
  }
}
/* eslint-enable no-redeclare */


var Recoil_selector = selector;

// @fb-only: const {scopedAtom} = require('Recoil_ScopedAtom');
const {
  loadableWithError: loadableWithError$2,
  loadableWithPromise: loadableWithPromise$2,
  loadableWithValue: loadableWithValue$3
} = Recoil_Loadable$1;

const {
  peekNodeInfo: peekNodeInfo$3
} = Recoil_FunctionalCore;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$7,
  DefaultValue: DefaultValue$2,
  getConfigDeletionHandler: getConfigDeletionHandler$2,
  registerNode: registerNode$2,
  setConfigDeletionHandler: setConfigDeletionHandler$1
} = Recoil_Node;

const {
  isRecoilValue: isRecoilValue$4
} = Recoil_RecoilValue$1;

const {
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$4,
  markRecoilValueModified: markRecoilValueModified$2,
  setRecoilValue: setRecoilValue$4,
  setRecoilValueLoadable: setRecoilValueLoadable$3
} = Recoil_RecoilValueInterface;

const {
  retainedByOptionWithDefault: retainedByOptionWithDefault$2
} = Recoil_Retention;















function baseAtom(options) {
  const {
    key,
    persistence_UNSTABLE: persistence
  } = options;
  const retainedBy = retainedByOptionWithDefault$2(options.retainedBy_UNSTABLE);
  let liveStoresCount = 0;
  let defaultLoadable = Recoil_isPromise(options.default) ? loadableWithPromise$2(options.default.then(value => {
    defaultLoadable = loadableWithValue$3(value);
    return value;
  }).catch(error => {
    defaultLoadable = loadableWithError$2(error);
    throw error;
  })) : loadableWithValue$3(options.default);
  maybeFreezeValueOrPromise(options.default);
  let cachedAnswerForUnvalidatedValue = undefined; // Cleanup handlers for this atom
  // Rely on stable reference equality of the store to use it as a key per <RecoilRoot>

  const cleanupEffectsByStore = new Map();

  function maybeFreezeValueOrPromise(valueOrPromise) {
    if (true) {
      if (options.dangerouslyAllowMutability !== true) {
        if (Recoil_isPromise(valueOrPromise)) {
          return valueOrPromise.then(value => {
            Recoil_deepFreezeValue(value);
            return value;
          });
        } else {
          Recoil_deepFreezeValue(valueOrPromise);
          return valueOrPromise;
        }
      }
    }

    return valueOrPromise;
  }

  function wrapPendingPromise(store, promise) {
    const wrappedPromise = promise.then(value => {
      var _store$getState$nextT, _state$atomValues$get;

      const state = (_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree;

      if (((_state$atomValues$get = state.atomValues.get(key)) === null || _state$atomValues$get === void 0 ? void 0 : _state$atomValues$get.contents) === wrappedPromise) {
        setRecoilValue$4(store, node, value);
      }

      return value;
    }).catch(error => {
      var _store$getState$nextT2, _state$atomValues$get2;

      const state = (_store$getState$nextT2 = store.getState().nextTree) !== null && _store$getState$nextT2 !== void 0 ? _store$getState$nextT2 : store.getState().currentTree;

      if (((_state$atomValues$get2 = state.atomValues.get(key)) === null || _state$atomValues$get2 === void 0 ? void 0 : _state$atomValues$get2.contents) === wrappedPromise) {
        setRecoilValueLoadable$3(store, node, loadableWithError$2(error));
      }

      throw error;
    });
    return wrappedPromise;
  }

  function initAtom(store, initState, trigger) {
    liveStoresCount++;
    const alreadyKnown = store.getState().knownAtoms.has(key);
    store.getState().knownAtoms.add(key); // Setup async defaults to notify subscribers when they resolve

    if (defaultLoadable.state === 'loading') {
      const notifyDefaultSubscribers = () => {
        var _store$getState$nextT3;

        const state = (_store$getState$nextT3 = store.getState().nextTree) !== null && _store$getState$nextT3 !== void 0 ? _store$getState$nextT3 : store.getState().currentTree;

        if (!state.atomValues.has(key)) {
          markRecoilValueModified$2(store, node);
        }
      };

      defaultLoadable.contents.then(notifyDefaultSubscribers).catch(notifyDefaultSubscribers);
    } // Run Atom Effects
    // This state is scoped by Store, since this is in the initAtom() closure


    let initValue = DEFAULT_VALUE$7;
    let pendingSetSelf = null;

    if (options.effects_UNSTABLE != null && !alreadyKnown) {
      let duringInit = true;

      function getLoadable(recoilValue) {
        // Normally we can just get the current value of another atom.
        // But for our own value we need to check if there is a pending
        // initialized value or get the fallback default value.
        if (duringInit && recoilValue.key === key && !(initValue instanceof DefaultValue$2)) {
          // Cast T to S
          const retValue = initValue; // flowlint-line unclear-type:off

          return retValue instanceof DefaultValue$2 ? defaultLoadable : // flowlint-line unclear-type:off
          Recoil_isPromise(retValue) ? loadableWithPromise$2(retValue.then(v => v instanceof DefaultValue$2 ? // Cast T to S
          defaultLoadable.toPromise() // flowlint-line unclear-type:off
          : v)) : loadableWithValue$3(retValue);
        }

        return getRecoilValueAsLoadable$4(store, recoilValue);
      }

      function getPromise(recoilValue) {
        return getLoadable(recoilValue).toPromise();
      }

      function getInfo_UNSTABLE(recoilValue) {
        var _store$getState$nextT4;

        const info = peekNodeInfo$3(store, (_store$getState$nextT4 = store.getState().nextTree) !== null && _store$getState$nextT4 !== void 0 ? _store$getState$nextT4 : store.getState().currentTree, recoilValue.key);
        return duringInit && recoilValue.key === key && !(initValue instanceof DefaultValue$2) ? { ...info,
          isSet: true,
          loadable: getLoadable(recoilValue)
        } : info;
      }

      const setSelf = effect => valueOrUpdater => {
        if (duringInit) {
          const currentValue = initValue instanceof DefaultValue$2 || Recoil_isPromise(initValue) ? defaultLoadable.state === 'hasValue' ? defaultLoadable.contents : DEFAULT_VALUE$7 : initValue;
          initValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict T from being a function without losing support for opaque types
          valueOrUpdater(currentValue) // flowlint-line unclear-type:off
          : valueOrUpdater;

          if (Recoil_isPromise(initValue)) {
            initValue = initValue.then(value => {
              // Avoid calling onSet() when setSelf() initializes with a Promise
              pendingSetSelf = {
                effect,
                value
              };
              return value;
            });
          }
        } else {
          if (Recoil_isPromise(valueOrUpdater)) {
            throw Recoil_err('Setting atoms to async values is not implemented.');
          }

          if (typeof valueOrUpdater !== 'function') {
            pendingSetSelf = {
              effect,
              value: valueOrUpdater
            };
          }

          setRecoilValue$4(store, node, typeof valueOrUpdater === 'function' ? currentValue => {
            const newValue = // cast to any because we can't restrict T from being a function without losing support for opaque types
            valueOrUpdater(currentValue); // flowlint-line unclear-type:off

            pendingSetSelf = {
              effect,
              value: newValue
            };
            return newValue;
          } : valueOrUpdater);
        }
      };

      const resetSelf = effect => () => setSelf(effect)(DEFAULT_VALUE$7);

      const onSet = effect => handler => {
        store.subscribeToTransactions(currentStore => {
          var _currentTree$atomValu;

          // eslint-disable-next-line prefer-const
          let {
            currentTree,
            previousTree
          } = currentStore.getState();

          if (!previousTree) {
            Recoil_recoverableViolation('Transaction subscribers notified without a next tree being present -- this is a bug in Recoil');
            previousTree = currentTree; // attempt to trundle on
          }

          const newLoadable = (_currentTree$atomValu = currentTree.atomValues.get(key)) !== null && _currentTree$atomValu !== void 0 ? _currentTree$atomValu : defaultLoadable;

          if (newLoadable.state === 'hasValue') {
            var _previousTree$atomVal, _pendingSetSelf, _pendingSetSelf2, _pendingSetSelf3;

            const newValue = newLoadable.contents;
            const oldLoadable = (_previousTree$atomVal = previousTree.atomValues.get(key)) !== null && _previousTree$atomVal !== void 0 ? _previousTree$atomVal : defaultLoadable;
            const oldValue = oldLoadable.state === 'hasValue' ? oldLoadable.contents : DEFAULT_VALUE$7; // TODO This isn't actually valid, use as a placeholder for now.
            // Ignore atom value changes that were set via setSelf() in the same effect.
            // We will still properly call the handler if there was a subsequent
            // set from something other than an atom effect which was batched
            // with the `setSelf()` call.  However, we may incorrectly ignore
            // the handler if the subsequent batched call happens to set the
            // atom to the exact same value as the `setSelf()`.   But, in that
            // case, it was kind of a noop, so the semantics are debatable..

            if (((_pendingSetSelf = pendingSetSelf) === null || _pendingSetSelf === void 0 ? void 0 : _pendingSetSelf.effect) !== effect || ((_pendingSetSelf2 = pendingSetSelf) === null || _pendingSetSelf2 === void 0 ? void 0 : _pendingSetSelf2.value) !== newValue) {
              handler(newValue, oldValue, !currentTree.atomValues.has(key));
            } else if (((_pendingSetSelf3 = pendingSetSelf) === null || _pendingSetSelf3 === void 0 ? void 0 : _pendingSetSelf3.effect) === effect) {
              pendingSetSelf = null;
            }
          }
        }, key);
      };

      for (const effect of (_options$effects_UNST = options.effects_UNSTABLE) !== null && _options$effects_UNST !== void 0 ? _options$effects_UNST : []) {
        var _options$effects_UNST;

        const cleanup = effect({
          node,
          trigger,
          setSelf: setSelf(effect),
          resetSelf: resetSelf(effect),
          onSet: onSet(effect),
          getPromise,
          getLoadable,
          getInfo_UNSTABLE
        });

        if (cleanup != null) {
          var _cleanupEffectsByStor;

          cleanupEffectsByStore.set(store, [...((_cleanupEffectsByStor = cleanupEffectsByStore.get(store)) !== null && _cleanupEffectsByStor !== void 0 ? _cleanupEffectsByStor : []), cleanup]);
        }
      }

      duringInit = false;
    } // Mutate initial state in place since we know there are no other subscribers
    // since we are the ones initializing on first use.


    if (!(initValue instanceof DefaultValue$2)) {
      var _store$getState$nextT5;

      const frozenInitValue = maybeFreezeValueOrPromise(initValue);
      const initLoadable = Recoil_isPromise(frozenInitValue) ? loadableWithPromise$2(wrapPendingPromise(store, frozenInitValue)) : loadableWithValue$3(frozenInitValue);
      initState.atomValues.set(key, initLoadable); // If there is a pending transaction, then also mutate the next state tree.
      // This could happen if the atom was first initialized in an action that
      // also updated some other atom's state.

      (_store$getState$nextT5 = store.getState().nextTree) === null || _store$getState$nextT5 === void 0 ? void 0 : _store$getState$nextT5.atomValues.set(key, initLoadable);
    }

    return () => {
      var _cleanupEffectsByStor2;

      liveStoresCount--;
      (_cleanupEffectsByStor2 = cleanupEffectsByStore.get(store)) === null || _cleanupEffectsByStor2 === void 0 ? void 0 : _cleanupEffectsByStor2.forEach(cleanup => cleanup());
      cleanupEffectsByStore.delete(store);
      store.getState().knownAtoms.delete(key); // FIXME remove knownAtoms?
    };
  }

  function peekAtom(_store, state) {
    var _ref, _state$atomValues$get3;

    return (_ref = (_state$atomValues$get3 = state.atomValues.get(key)) !== null && _state$atomValues$get3 !== void 0 ? _state$atomValues$get3 : cachedAnswerForUnvalidatedValue) !== null && _ref !== void 0 ? _ref : defaultLoadable;
  }

  function getAtom(_store, state) {
    if (state.atomValues.has(key)) {
      // Atom value is stored in state:
      return Recoil_nullthrows(state.atomValues.get(key));
    } else if (state.nonvalidatedAtoms.has(key)) {
      // Atom value is stored but needs validation before use.
      // We might have already validated it and have a cached validated value:
      if (cachedAnswerForUnvalidatedValue != null) {
        return cachedAnswerForUnvalidatedValue;
      }

      if (persistence == null) {
        Recoil_expectationViolation(`Tried to restore a persisted value for atom ${key} but it has no persistence settings.`);
        return defaultLoadable;
      }

      const nonvalidatedValue = state.nonvalidatedAtoms.get(key);
      const validatorResult = persistence.validator(nonvalidatedValue, DEFAULT_VALUE$7);
      const validatedValueLoadable = validatorResult instanceof DefaultValue$2 ? defaultLoadable : loadableWithValue$3(validatorResult);
      cachedAnswerForUnvalidatedValue = validatedValueLoadable;
      return cachedAnswerForUnvalidatedValue;
    } else {
      return defaultLoadable;
    }
  }

  function invalidateAtom() {
    cachedAnswerForUnvalidatedValue = undefined;
  }

  function setAtom(_store, state, newValue) {
    // Bail out if we're being set to the existing value, or if we're being
    // reset but have no stored value (validated or unvalidated) to reset from:
    if (state.atomValues.has(key)) {
      const existing = Recoil_nullthrows(state.atomValues.get(key));

      if (existing.state === 'hasValue' && newValue === existing.contents) {
        return new Map();
      }
    } else if (!state.nonvalidatedAtoms.has(key) && newValue instanceof DefaultValue$2) {
      return new Map();
    }

    maybeFreezeValueOrPromise(newValue);
    cachedAnswerForUnvalidatedValue = undefined; // can be released now if it was previously in use

    return new Map().set(key, loadableWithValue$3(newValue));
  }

  function shouldDeleteConfigOnReleaseAtom() {
    return getConfigDeletionHandler$2(key) !== undefined && liveStoresCount <= 0;
  }

  const node = registerNode$2({
    key,
    nodeType: 'atom',
    peek: peekAtom,
    get: getAtom,
    set: setAtom,
    init: initAtom,
    invalidate: invalidateAtom,
    shouldDeleteConfigOnRelease: shouldDeleteConfigOnReleaseAtom,
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
    persistence_UNSTABLE: options.persistence_UNSTABLE ? {
      type: options.persistence_UNSTABLE.type,
      backButton: options.persistence_UNSTABLE.backButton
    } : undefined,
    shouldRestoreFromSnapshots: true,
    retainedBy
  });
  return node;
} // prettier-ignore


function atom(options) {
  if (true) {
    if (typeof options.key !== 'string') {
      throw Recoil_err('A key option with a unique string value must be provided when creating an atom.');
    }

    if (!('default' in options)) {
      throw Recoil_err('A default value must be specified when creating an atom.');
    }
  }

  const {
    default: optionsDefault,
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    ...restOptions
  } = options;

  if (isRecoilValue$4(optionsDefault) // Continue to use atomWithFallback for promise defaults for scoped atoms
  // for now, since scoped atoms don't support async defaults
  // @fb-only: || (isPromise(optionsDefault) && scopeRules_APPEND_ONLY_READ_THE_DOCS)
  ) {
      return atomWithFallback({ ...restOptions,
        default: optionsDefault // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,

      }); // @fb-only: } else if (scopeRules_APPEND_ONLY_READ_THE_DOCS && !isPromise(optionsDefault)) {
      // @fb-only: return scopedAtom<T>({
      // @fb-only: ...restOptions,
      // @fb-only: default: optionsDefault,
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: });
    } else {
    return baseAtom({ ...restOptions,
      default: optionsDefault
    });
  }
}

function atomWithFallback(options) {
  const base = atom({ ...options,
    default: DEFAULT_VALUE$7,
    persistence_UNSTABLE: options.persistence_UNSTABLE === undefined ? undefined : { ...options.persistence_UNSTABLE,
      validator: storedValue => storedValue instanceof DefaultValue$2 ? storedValue : Recoil_nullthrows(options.persistence_UNSTABLE).validator(storedValue, DEFAULT_VALUE$7)
    },
    // TODO Hack for now.
    // flowlint-next-line unclear-type: off
    effects_UNSTABLE: options.effects_UNSTABLE
  });
  const sel = Recoil_selector({
    key: `${options.key}__withFallback`,
    get: ({
      get
    }) => {
      const baseValue = get(base);
      return baseValue instanceof DefaultValue$2 ? options.default : baseValue;
    },
    set: ({
      set
    }, newValue) => set(base, newValue),
    dangerouslyAllowMutability: options.dangerouslyAllowMutability
  });
  setConfigDeletionHandler$1(sel.key, getConfigDeletionHandler$2(options.key));
  return sel;
}

var Recoil_atom = atom;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

class MapCache {
  constructor(options) {
    var _options$mapKey;

    _defineProperty(this, "_map", void 0);

    _defineProperty(this, "_keyMapper", void 0);

    this._map = new Map();
    this._keyMapper = (_options$mapKey = options === null || options === void 0 ? void 0 : options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : v => v;
  }

  size() {
    return this._map.size;
  }

  has(key) {
    return this._map.has(this._keyMapper(key));
  }

  get(key) {
    return this._map.get(this._keyMapper(key));
  }

  set(key, val) {
    this._map.set(this._keyMapper(key), val);
  }

  delete(key) {
    this._map.delete(this._keyMapper(key));
  }

  clear() {
    this._map.clear();
  }

}

var Recoil_MapCache = {
  MapCache
};

var Recoil_MapCache_1 = Recoil_MapCache.MapCache;

var Recoil_MapCache$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MapCache: Recoil_MapCache_1
});

const {
  LRUCache: LRUCache$2
} = Recoil_LRUCache$1;

const {
  MapCache: MapCache$1
} = Recoil_MapCache$1;

const defaultPolicy$1 = {
  equality: 'reference',
  eviction: 'none',
  maxSize: Infinity
};

function cacheFromPolicy({
  equality = defaultPolicy$1.equality,
  eviction = defaultPolicy$1.eviction,
  maxSize = defaultPolicy$1.maxSize
} = defaultPolicy$1) {
  const valueMapper = getValueMapper$1(equality);
  const cache = getCache(eviction, maxSize, valueMapper);
  return cache;
}

function getValueMapper$1(equality) {
  switch (equality) {
    case 'reference':
      return val => val;

    case 'value':
      return val => Recoil_stableStringify(val);
  }

  throw Recoil_err(`Unrecognized equality policy ${equality}`);
}

function getCache(eviction, maxSize, mapKey) {
  switch (eviction) {
    case 'keep-all':
      // $FlowFixMe[method-unbinding]
      return new MapCache$1({
        mapKey
      });

    case 'lru':
      // $FlowFixMe[method-unbinding]
      return new LRUCache$2({
        mapKey,
        maxSize: Recoil_nullthrows(maxSize)
      });

    case 'most-recent':
      // $FlowFixMe[method-unbinding]
      return new LRUCache$2({
        mapKey,
        maxSize: 1
      });
  }

  throw Recoil_err(`Unrecognized eviction policy ${eviction}`);
}

var Recoil_cacheFromPolicy = cacheFromPolicy;

const {
  setConfigDeletionHandler: setConfigDeletionHandler$2
} = Recoil_Node;





// Process scopeRules to handle any entries which are functions taking parameters
// prettier-ignore
// @fb-only: function mapScopeRules<P>(
// @fb-only: scopeRules?: ParameterizedScopeRules<P>,
// @fb-only: param: P,
// @fb-only: ): ScopeRules | void {
// @fb-only: return scopeRules?.map(rule =>
// @fb-only: Array.isArray(rule)
// @fb-only: ? rule.map(entry => (typeof entry === 'function' ? entry(param) : entry))
// @fb-only: : rule,
// @fb-only: );
// @fb-only: }

/*
A function which returns an atom based on the input parameter.

Each unique parameter returns a unique atom. E.g.,

  const f = atomFamily(...);
  f({a: 1}) => an atom
  f({a: 2}) => a different atom

This allows components to persist local, private state using atoms.  Each
instance of the component may have a different key, which it uses as the
parameter for a family of atoms; in this way, each component will have
its own atom not shared by other instances.  These state keys may be composed
into children's state keys as well.
*/
function atomFamily(options) {
  var _options$cachePolicyF, _options$cachePolicyF2;

  const atomCache = Recoil_cacheFromPolicy({
    equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : 'value',
    eviction: 'keep-all'
  }); // Simple atomFamily implementation to cache individual atoms based
  // on the parameter value equality.

  return params => {
    var _stableStringify;

    const cachedAtom = atomCache.get(params);

    if (cachedAtom != null) {
      return cachedAtom;
    }

    const {
      cachePolicyForParams_UNSTABLE,
      ...atomOptions
    } = options;
    const newAtom = Recoil_atom({ ...atomOptions,
      key: `${options.key}__${(_stableStringify = Recoil_stableStringify(params)) !== null && _stableStringify !== void 0 ? _stableStringify : 'void'}`,
      default: typeof options.default === 'function' ? // The default was parameterized
      // Flow doesn't know that T isn't a function, so we need to case to any
      options.default(params) // flowlint-line unclear-type:off
      : // Default may be a static value, promise, or RecoilValue
      options.default,
      retainedBy_UNSTABLE: typeof options.retainedBy_UNSTABLE === 'function' ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE,
      effects_UNSTABLE: typeof options.effects_UNSTABLE === 'function' ? options.effects_UNSTABLE(params) : options.effects_UNSTABLE // prettier-ignore
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
      // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: params,
      // @fb-only: ),

    });
    atomCache.set(params, newAtom);
    setConfigDeletionHandler$2(newAtom.key, () => {
      atomCache.delete(params);
    });
    return newAtom;
  };
}

var Recoil_atomFamily = atomFamily;

const {
  setConfigDeletionHandler: setConfigDeletionHandler$3
} = Recoil_Node;



 // Keep in mind the parameter needs to be serializable as a cahche key
// using Recoil_stableStringify


// Add a unique index to each selector in case the cache implementation allows
// duplicate keys based on equivalent stringified parameters
let nextIndex = 0;
/* eslint-disable no-redeclare */

// Return a function that returns members of a family of selectors of the same type
// E.g.,
//
// const s = selectorFamily(...);
// s({a: 1}) => a selector
// s({a: 2}) => a different selector
//
// By default, the selectors are distinguished by distinct values of the
// parameter based on value equality, not reference equality.  This allows using
// object literals or other equivalent objects at callsites to not create
// duplicate cache entries.  This behavior may be overridden with the
// cacheImplementationForParams option.
function selectorFamily(options) {
  var _options$cachePolicyF, _options$cachePolicyF2;

  const selectorCache = Recoil_cacheFromPolicy({
    equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : 'value',
    eviction: 'keep-all'
  });
  return params => {
    var _stableStringify;

    const cachedSelector = selectorCache.get(params);

    if (cachedSelector != null) {
      return cachedSelector;
    }

    const myKey = `${options.key}__selectorFamily/${(_stableStringify = Recoil_stableStringify(params, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: true
    })) !== null && _stableStringify !== void 0 ? _stableStringify : 'void'}/${nextIndex++}`; // Append index in case values serialize to the same key string

    const myGet = callbacks => options.get(params)(callbacks);

    const myCachePolicy = options.cachePolicy_UNSTABLE;
    const retainedBy = typeof options.retainedBy_UNSTABLE === 'function' ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE;
    let newSelector;

    if (options.set != null) {
      const set = options.set;

      const mySet = (callbacks, newValue) => set(params)(callbacks, newValue);

      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        set: mySet,
        cachePolicy_UNSTABLE: myCachePolicy,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: retainedBy
      });
    } else {
      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        cachePolicy_UNSTABLE: myCachePolicy,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: retainedBy
      });
    }

    selectorCache.set(params, newSelector);
    setConfigDeletionHandler$3(newSelector.key, () => {
      selectorCache.delete(params);
    });
    return newSelector;
  };
}
/* eslint-enable no-redeclare */


var Recoil_selectorFamily = selectorFamily;

// flowlint-next-line unclear-type:off


const constantSelector = Recoil_selectorFamily({
  key: '__constant',
  get: constant => () => constant,
  cachePolicyForParams_UNSTABLE: {
    equality: 'reference'
  }
}); // Function that returns a selector which always produces the
// same constant value.  It may be called multiple times with the
// same value, based on reference equality, and will provide the
// same selector.

function constSelector(constant) {
  return constantSelector(constant);
}

var Recoil_constSelector = constSelector;

// flowlint-next-line unclear-type:off


const throwingSelector = Recoil_selectorFamily({
  key: '__error',
  get: message => () => {
    throw Recoil_err(message);
  },
  // TODO Why?
  cachePolicyForParams_UNSTABLE: {
    equality: 'reference'
  }
}); // Function that returns a selector which always throws an error
// with the provided message.

function errorSelector(message) {
  return throwingSelector(message);
}

var Recoil_errorSelector = errorSelector;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Wraps another recoil value and prevents writing to it.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function readOnlySelector(atom) {
  // flowlint-next-line unclear-type: off
  return atom;
}

var Recoil_readOnlySelector = readOnlySelector;

const {
  loadableWithError: loadableWithError$3,
  loadableWithPromise: loadableWithPromise$3,
  loadableWithValue: loadableWithValue$4
} = Recoil_Loadable$1;



 /////////////////
//  TRUTH TABLE
/////////////////
// Dependencies        waitForNone         waitForAny        waitForAll       waitForAllSettled
//  [loading, loading]  [Promise, Promise]  Promise           Promise         Promise
//  [value, loading]    [value, Promise]    [value, Promise]  Promise         Promise
//  [value, value]      [value, value]      [value, value]    [value, value]  [value, value]
//
//  [error, loading]    [Error, Promise]    [Error, Promise]  Error           Promise
//  [error, error]      [Error, Error]      [Error, Error]    Error           [error, error]
//  [value, error]      [value, Error]      [value, Error]    Error           [value, error]
// Issue parallel requests for all dependencies and return the current
// status if they have results, have some error, or are still pending.


function concurrentRequests(getRecoilValue, deps) {
  const results = Array(deps.length).fill(undefined);
  const exceptions = Array(deps.length).fill(undefined);

  for (const [i, dep] of deps.entries()) {
    try {
      results[i] = getRecoilValue(dep);
    } catch (e) {
      // exceptions can either be Promises of pending results or real errors
      exceptions[i] = e;
    }
  }

  return [results, exceptions];
}

function isError(exp) {
  return exp != null && !Recoil_isPromise(exp);
}

function unwrapDependencies(dependencies) {
  return Array.isArray(dependencies) ? dependencies : Object.getOwnPropertyNames(dependencies).map(key => dependencies[key]);
}

function wrapResults(dependencies, results) {
  return Array.isArray(dependencies) ? results : // Object.getOwnPropertyNames() has consistent key ordering with ES6
  Object.getOwnPropertyNames(dependencies).reduce((out, key, idx) => ({ ...out,
    [key]: results[idx]
  }), {});
}

function wrapLoadables(dependencies, results, exceptions) {
  const output = exceptions.map((exception, idx) => exception == null ? loadableWithValue$4(results[idx]) : Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception));
  return wrapResults(dependencies, output);
}

function combineAsyncResultsWithSyncResults(syncResults, asyncResults) {
  return asyncResults.map((result, idx) =>
  /**
   * it's important we use === undefined as opposed to == null, because the
   * resolved value of the async promise could be `null`, in which case we
   * don't want to use syncResults[idx], which would be undefined. If async
   * promise resolves to `undefined`, that's ok because `syncResults[idx]`
   * will also be `undefined`. That's a little hacky, but it works.
   */
  result === undefined ? syncResults[idx] : result);
} // Selector that requests all dependencies in parallel and immediately returns
// current results without waiting.


const waitForNone = Recoil_selectorFamily({
  key: '__waitForNone',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // Always return the current status of the results; never block.

    return wrapLoadables(dependencies, results, exceptions);
  },
  dangerouslyAllowMutability: true
}); // Selector that requests all dependencies in parallel and waits for at least
// one to be available before returning results.  It will only error if all
// dependencies have errors.

const waitForAny = Recoil_selectorFamily({
  key: '__waitForAny',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If any results are available, value or error, return the current status

    if (exceptions.some(exp => !Recoil_isPromise(exp))) {
      return wrapLoadables(dependencies, results, exceptions);
    } // Otherwise, return a promise that will resolve when the next result is
    // available, whichever one happens to be next.  But, if all pending
    // dependencies end up with errors, then reject the promise.


    return new Promise(resolve => {
      for (const [i, exp] of exceptions.entries()) {
        if (Recoil_isPromise(exp)) {
          exp.then(result => {
            results[i] = result;
            exceptions[i] = undefined;
            resolve(wrapLoadables(dependencies, results, exceptions));
          }).catch(error => {
            exceptions[i] = error;
            resolve(wrapLoadables(dependencies, results, exceptions));
          });
        }
      }
    });
  },
  dangerouslyAllowMutability: true
}); // Selector that requests all dependencies in parallel and waits for all to be
// available before returning a value.  It will error if any dependencies error.

const waitForAll = Recoil_selectorFamily({
  key: '__waitForAll',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If all results are available, return the results

    if (exceptions.every(exp => exp == null)) {
      return wrapResults(dependencies, results);
    } // If we have any errors, throw the first error


    const error = exceptions.find(isError);

    if (error != null) {
      throw error;
    } // Otherwise, return a promise that will resolve when all results are available


    return Promise.all(exceptions).then(exceptionResults => wrapResults(dependencies, combineAsyncResultsWithSyncResults(results, exceptionResults)));
  },
  dangerouslyAllowMutability: true
});
const waitForAllSettled = Recoil_selectorFamily({
  key: '__waitForAllSettled',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If all results are available, return the results

    if (exceptions.every(exp => !Recoil_isPromise(exp))) {
      return wrapLoadables(dependencies, results, exceptions);
    } // Wait for all results to settle


    return Promise.all(exceptions.map((exp, i) => Recoil_isPromise(exp) ? exp.then(result => {
      results[i] = result;
      exceptions[i] = undefined;
    }).catch(error => {
      results[i] = undefined;
      exceptions[i] = error;
    }) : null)) // Then wrap them as loadables
    .then(() => wrapLoadables(dependencies, results, exceptions));
  },
  dangerouslyAllowMutability: true
});
const noWait = Recoil_selectorFamily({
  key: '__noWait',
  get: dependency => ({
    get
  }) => {
    try {
      return loadableWithValue$4(get(dependency));
    } catch (exception) {
      return Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception);
    }
  },
  dangerouslyAllowMutability: true
});
var Recoil_WaitFor = {
  waitForNone,
  waitForAny,
  waitForAll,
  waitForAllSettled,
  noWait
};

const {
  RecoilLoadable
} = Recoil_Loadable$1;

const {
  DefaultValue: DefaultValue$3
} = Recoil_Node;

const {
  RecoilRoot: RecoilRoot$2
} = Recoil_RecoilRoot_react;

const {
  isRecoilValue: isRecoilValue$5
} = Recoil_RecoilValue$1;

const {
  retentionZone: retentionZone$1
} = Recoil_RetentionZone;

const {
  freshSnapshot: freshSnapshot$2
} = Recoil_Snapshot$1;

const {
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useResetRecoilState: useResetRecoilState$1,
  useSetRecoilState: useSetRecoilState$1,
  useSetUnvalidatedAtomValues: useSetUnvalidatedAtomValues$1
} = Recoil_Hooks;

const {
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$2,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver: useRecoilTransactionObserver$1,
  useTransactionObservation_DEPRECATED: useTransactionObservation_DEPRECATED$1
} = Recoil_SnapshotHooks;



























const {
  noWait: noWait$1,
  waitForAll: waitForAll$1,
  waitForAllSettled: waitForAllSettled$1,
  waitForAny: waitForAny$1,
  waitForNone: waitForNone$1
} = Recoil_WaitFor;

var Recoil_index = {
  // Types
  DefaultValue: DefaultValue$3,
  isRecoilValue: isRecoilValue$5,
  RecoilLoadable,
  // Recoil Root
  RecoilRoot: RecoilRoot$2,
  useRecoilBridgeAcrossReactRoots_UNSTABLE: Recoil_useRecoilBridgeAcrossReactRoots,
  // Atoms/Selectors
  atom: Recoil_atom,
  selector: Recoil_selector,
  // Convenience Atoms/Selectors
  atomFamily: Recoil_atomFamily,
  selectorFamily: Recoil_selectorFamily,
  constSelector: Recoil_constSelector,
  errorSelector: Recoil_errorSelector,
  readOnlySelector: Recoil_readOnlySelector,
  // Concurrency Helpers for Atoms/Selectors
  noWait: noWait$1,
  waitForNone: waitForNone$1,
  waitForAny: waitForAny$1,
  waitForAll: waitForAll$1,
  waitForAllSettled: waitForAllSettled$1,
  // Hooks for Atoms/Selectors
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useSetRecoilState: useSetRecoilState$1,
  useResetRecoilState: useResetRecoilState$1,
  useGetRecoilValueInfo_UNSTABLE: Recoil_useGetRecoilValueInfo,
  useRecoilRefresher_UNSTABLE: Recoil_useRecoilRefresher,
  // Hooks for complex operations
  useRecoilCallback: Recoil_useRecoilCallback,
  useRecoilTransaction_UNSTABLE: Recoil_useRecoilTransaction,
  // Snapshots
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$2,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver_UNSTABLE: useRecoilTransactionObserver$1,
  useTransactionObservation_UNSTABLE: useTransactionObservation_DEPRECATED$1,
  useSetUnvalidatedAtomValues_UNSTABLE: useSetUnvalidatedAtomValues$1,
  snapshot_UNSTABLE: freshSnapshot$2,
  // Memory Management
  useRetain: Recoil_useRetain,
  retentionZone: retentionZone$1
};
var Recoil_index_1 = Recoil_index.DefaultValue;
var Recoil_index_2 = Recoil_index.isRecoilValue;
var Recoil_index_3 = Recoil_index.RecoilLoadable;
var Recoil_index_4 = Recoil_index.RecoilRoot;
var Recoil_index_5 = Recoil_index.useRecoilBridgeAcrossReactRoots_UNSTABLE;
var Recoil_index_6 = Recoil_index.atom;
var Recoil_index_7 = Recoil_index.selector;
var Recoil_index_8 = Recoil_index.atomFamily;
var Recoil_index_9 = Recoil_index.selectorFamily;
var Recoil_index_10 = Recoil_index.constSelector;
var Recoil_index_11 = Recoil_index.errorSelector;
var Recoil_index_12 = Recoil_index.readOnlySelector;
var Recoil_index_13 = Recoil_index.noWait;
var Recoil_index_14 = Recoil_index.waitForNone;
var Recoil_index_15 = Recoil_index.waitForAny;
var Recoil_index_16 = Recoil_index.waitForAll;
var Recoil_index_17 = Recoil_index.waitForAllSettled;
var Recoil_index_18 = Recoil_index.useRecoilValue;
var Recoil_index_19 = Recoil_index.useRecoilValueLoadable;
var Recoil_index_20 = Recoil_index.useRecoilState;
var Recoil_index_21 = Recoil_index.useRecoilStateLoadable;
var Recoil_index_22 = Recoil_index.useSetRecoilState;
var Recoil_index_23 = Recoil_index.useResetRecoilState;
var Recoil_index_24 = Recoil_index.useGetRecoilValueInfo_UNSTABLE;
var Recoil_index_25 = Recoil_index.useRecoilRefresher_UNSTABLE;
var Recoil_index_26 = Recoil_index.useRecoilCallback;
var Recoil_index_27 = Recoil_index.useRecoilTransaction_UNSTABLE;
var Recoil_index_28 = Recoil_index.useGotoRecoilSnapshot;
var Recoil_index_29 = Recoil_index.useRecoilSnapshot;
var Recoil_index_30 = Recoil_index.useRecoilTransactionObserver_UNSTABLE;
var Recoil_index_31 = Recoil_index.useTransactionObservation_UNSTABLE;
var Recoil_index_32 = Recoil_index.useSetUnvalidatedAtomValues_UNSTABLE;
var Recoil_index_33 = Recoil_index.snapshot_UNSTABLE;
var Recoil_index_34 = Recoil_index.useRetain;
var Recoil_index_35 = Recoil_index.retentionZone;

/* harmony default export */ __webpack_exports__["default"] = (Recoil_index);



/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return Je; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return Fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return Ke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return Ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return Xe; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/styled-components/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return"production"!=="development"&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.3",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:undefined;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?undefined:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),x=new Map,k=new Map,V=1,B=function(e){if(x.has(e))return x.get(e);for(;k.has(V);)V++;var t=V++;return"production"!=="development"&&((0|t)<0||t>1<<30)&&j(16,""+t),x.set(e,t),k.set(t,e),t},z=function(e){return k.get(e)},M=function(e,t){t>=V&&(V=t+1),x.set(e,t),k.set(t,e)},G="style["+A+'][data-styled-version="5.3.3"]',L=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(M(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.3");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(G),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.3"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"==="development"&&(void 0===n||n.isStatic)&&re(e),this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!=="development"&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ue)||he}function me(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(de)||pe}function ye(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(e.children):undefined))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return"production"!=="development"&&Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ae(Ne(g(w,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n))}catch(e){Ie.test(e.message)&&Pe.delete(n)}finally{console.error=r}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var xe=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&("production"==="development"||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ve(t)&&Ve(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&ze(e,i[a],a)}return e}var Ge=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),Le=Ge.Consumer;function Fe(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Ge),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return"production"==="development"||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ge.Provider,{value:n},e.children):null}var Ye={};function qe(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+xe("5.3.3"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!=="development"&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Re(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Ge),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return"production"!=="development"&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(i),"production"!=="development"&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:undefined),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],_):!N||Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:Te(_(e)));return qe(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}),"production"!=="development"&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e)}));var $e=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ce.apply(void 0,[e].concat(n)),a="sc-global-"+xe(JSON.stringify(i)),u=new $e(i,a);function l(e){var t=fe(),n=me(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Ge),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return"production"!=="development"&&react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."),"production"!=="development"&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&h(l,e,t,o,n),Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])((function(){if(!t.server)return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Re(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return"production"!=="development"&&Oe(a),react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(l)}function Ue(e){"production"!=="development"&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ce.apply(void 0,[e].concat(n)).join(""),s=xe(o);return new ve(s,o)}var Je=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.3"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.3",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Xe=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Ge),i=e.defaultProps,a=Re(t,o,i);return"production"!=="development"&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Ze=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Ge)},Ke={StyleSheet:Z,masterSheet:he};"production"!=="development"&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!=="development"&&"test"!=="development"&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (He);
//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-components/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["Component", "pageProps"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Root = /*#__PURE__*/function (_App) {
  _inherits(Root, _App);

  var _super = _createSuper(Root);

  function Root() {
    _classCallCheck(this, Root);

    return _super.apply(this, arguments);
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          other = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(recoil__WEBPACK_IMPORTED_MODULE_3__["RecoilRoot"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, "Static Website")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MainArea, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, pageProps))));
    }
  }]);

  return Root;
}(next_app__WEBPACK_IMPORTED_MODULE_0___default.a);

var MainArea = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "_app__MainArea",
  componentId: "sc-18jabd8-0"
})(["position:relative;width:800px;padding:102px calc(50% - 400px);"]);
/* harmony default export */ __webpack_exports__["default"] = (Root);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 1:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/_app', function() {
module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_202902f7c98643d43eb0":
/*!*******************************************!*\
  !*** external "dll_202902f7c98643d43eb0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_202902f7c98643d43eb0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=_app.js.map