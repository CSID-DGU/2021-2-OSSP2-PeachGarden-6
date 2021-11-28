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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Badge/TitleBadge.js":
/*!****************************************!*\
  !*** ./components/Badge/TitleBadge.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants_colors__WEBPACK_IMPORTED_MODULE_2__);





var TitleBadge = function TitleBadge(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleBadgeDiv, null, text);
};

var TitleBadgeDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "TitleBadge__TitleBadgeDiv",
  componentId: "sc-hhmlpw-0"
})(["width:200px;text-align:center;padding:10px 0;font-size:14px;color:", ";background-color:", ";"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].black, _constants_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].main);
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(TitleBadge));

/***/ }),

/***/ "./components/common/MainSectionType1.js":
/*!***********************************************!*\
  !*** ./components/common/MainSectionType1.js ***!
  \***********************************************/
/*! exports provided: MainSectionDiv, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSectionDiv", function() { return MainSectionDiv; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants_colors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Badge_TitleBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Badge/TitleBadge */ "./components/Badge/TitleBadge.js");





var MainSectionType1 = function MainSectionType1(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainSectionDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Badge_TitleBadge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: text
  }));
};

var MainSectionDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MainSectionType1__MainSectionDiv",
  componentId: "sc-e3zb7n-0"
})(["width:45%;height:600px;background-color:", ";"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].mainFaded);
/* harmony default export */ __webpack_exports__["default"] = (MainSectionType1);

/***/ }),

/***/ "./components/common/MainSectionType2.js":
/*!***********************************************!*\
  !*** ./components/common/MainSectionType2.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Badge_TitleBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Badge/TitleBadge */ "./components/Badge/TitleBadge.js");
/* harmony import */ var _graph_BasicTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graph/BasicTable */ "./components/graph/BasicTable.js");
/* harmony import */ var _MainSectionType1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainSectionType1 */ "./components/common/MainSectionType1.js");





var MainSectionType2 = function MainSectionType2(_ref) {
  var text = _ref.text,
      columnList = _ref.columnList,
      parentIndex = _ref.parentIndex,
      data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainSectionType1__WEBPACK_IMPORTED_MODULE_3__["MainSectionDiv"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Badge_TitleBadge__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: text
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_graph_BasicTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    columnList: columnList,
    parentIndex: parentIndex,
    data: data
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainSectionType2);

/***/ }),

/***/ "./components/graph/BasicTable.js":
/*!****************************************!*\
  !*** ./components/graph/BasicTable.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/colors */ "./constants/colors.js");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants_colors__WEBPACK_IMPORTED_MODULE_2__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var BasicTable = function BasicTable(_ref) {
  var columnList = _ref.columnList,
      parentIndex = _ref.parentIndex,
      data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableTable, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableColumn, {
    columnList: columnList,
    parentIndex: parentIndex
  }), data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableBody, {
    data: data
  }));
};

var BasicTableTable = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.table.withConfig({
  displayName: "BasicTable__BasicTableTable",
  componentId: "sc-9bgcdk-0"
})(["width:100%;height:400px;margin-top:20px;background-color:", ";"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].main);

var BasicTableColumn = function BasicTableColumn(_ref2) {
  var columnList = _ref2.columnList,
      parentIndex = _ref2.parentIndex;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableHead, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableRow, null, columnList.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableData, {
      key: parentIndex + index
    }, item));
  })));
};

var BasicTableBody = function BasicTableBody(_ref3) {
  var data = _ref3.data;

  var renderer = function renderer(data) {
    var _iterator = _createForOfIteratorHelper(data),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        console.log(item);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableBodyBody, null, data.map(function (_ref4, index) {
    var title = _ref4.title,
        list = _ref4.list;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableData, null, title), list.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableData, null, item);
    }));
  }));
};

var BasicTableHead = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.thead.withConfig({
  displayName: "BasicTable__BasicTableHead",
  componentId: "sc-9bgcdk-1"
})(["width:100%;"]);
var BasicTableBodyBody = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tbody.withConfig({
  displayName: "BasicTable__BasicTableBodyBody",
  componentId: "sc-9bgcdk-2"
})(["width:100%;"]);
var BasicTableRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tr.withConfig({
  displayName: "BasicTable__BasicTableRow",
  componentId: "sc-9bgcdk-3"
})([""]);
var BasicTableData = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.td.withConfig({
  displayName: "BasicTable__BasicTableData",
  componentId: "sc-9bgcdk-4"
})(["width:100px;height:40px;border:2px solid ", ";"], _constants_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].black);
/* harmony default export */ __webpack_exports__["default"] = (BasicTable);

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

/***/ "./constants/dummy/mainpage.js":
/*!*************************************!*\
  !*** ./constants/dummy/mainpage.js ***!
  \*************************************/
/*! exports provided: MAIN_RANK_DUMMY_DATA, LEADERBOARD_DUMMY_DATA, TEAM_WAA_DUMMY_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_RANK_DUMMY_DATA", function() { return MAIN_RANK_DUMMY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEADERBOARD_DUMMY_DATA", function() { return LEADERBOARD_DUMMY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEAM_WAA_DUMMY_DATA", function() { return TEAM_WAA_DUMMY_DATA; });
var MAIN_RANK_DUMMY_DATA = [{
  title: "타율",
  list: ["이정후", 0.360, "전준우", 0.347, "강백호", 0.347]
}, {
  title: "출루율",
  list: ["홍창기", 0.456, "강백호", 0.445, "이정후", 0.438]
}, {
  title: "장타율",
  list: ["양의지", 0.581, "최정", 0.562, "한유섬", 0.534]
}, {
  title: "타점",
  list: ["양의지", 111, "강백호", 102, "김재환", 102]
}, {
  title: "득점",
  list: ["구자욱", 107, "홍창기", 103, "피렐라", 102]
}, {
  title: "홈런",
  list: ["최정", 35, "나성범", 33, "알테어", 0.32]
}, {
  title: "도루",
  list: ["김혜성", 46, "최원준", 40, "박해민", 36]
}, {
  title: "방어율",
  list: ["미란다", 2.33, "백정현", 2.63, "고영표", 2.92]
}, {
  title: "삼진",
  list: ["미란다", 225, "카펜터", 179, "루친스키", 177]
}, {
  title: "다승",
  list: ["뷰캐넌", 16, "요키시", 16, "루친스키", 15]
}, {
  title: "세이브",
  list: ["오승환", 44, "김원중", 35, "정해영", 34]
}, {
  title: "홀드",
  list: ["장현식", 34, "정우영", 27, "주권", 27]
}];
var LEADERBOARD_DUMMY_DATA = [{
  title: "1",
  list: ["KT", 144, 76, 59, 9, 0.563, 0]
}, {
  title: "2",
  list: ["삼성", 144, 76, 59, 9, 0.563, 0]
}, {
  title: "3",
  list: ["LG", 144, 72, 58, 14, 0.554, 1.5]
}, {
  title: "4",
  list: ["두산", 144, 71, 65, 8, 0.522, 5.5]
}, {
  title: "5",
  list: ["키움", 144, 70, 67, 7, 0.511, 7]
}, {
  title: "6",
  list: ["SSG", 144, 66, 64, 14, 0.508, 7.5]
}, {
  title: "7",
  list: ["NC", 144, 67, 68, 9, 0.496, 9]
}, {
  title: "8",
  list: ["롯데", 144, 65, 71, 8, 0.478, 11.5]
}, {
  title: "9",
  list: ["KIA", 144, 58, 71, 8, 0.433, 17.5]
}, {
  title: "10",
  list: ["한화", 144, 49, 83, 12, 0.371, 25.5]
}];
var TEAM_WAA_DUMMY_DATA = [{
  title: "KT",
  list: [0.12, 0.55, 1.56, 4.67, 3.15]
}, {
  title: "삼성",
  list: [0.26, 0.30, 0.01, 4.58, -1.86]
}, {
  title: "LG",
  list: [-0.77, 0.65, 2.71, 2.71, 7.00]
}, {
  title: "두산",
  list: [4.81, -0.32, -1.45, 1.55, 2.75]
}, {
  title: "키움",
  list: [-0.44, 1.12, 0.91, 0.15, -3.13]
}, {
  title: "SSG",
  list: [5.77, 0.47, 0.87, -6.53, 0.00]
}, {
  title: "NC",
  list: [2.71, -0.23, -0.96, 1.16, -1.14]
}, {
  title: "롯데",
  list: [3.58, -0.93, -3.31, -2.95, -3.13]
}, {
  title: "KIA",
  list: [-9.40, -1.38, -2.18, -2.34, 0.51]
}, {
  title: "한화",
  list: [-8.78, -0.63, 2.08, -2.61, -4.19]
}];

/***/ }),

/***/ "./constants/urls.js":
/*!***************************!*\
  !*** ./constants/urls.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var apiUrl = '/api';
var API_URL_MAIN = "".concat(apiUrl);
var API_URL_SEARCH = "".concat(apiUrl, "/search");
var API_URL_RANK = "".concat(apiUrl, "/rank");
var urlSet = {
  mainPage: "".concat(API_URL_MAIN),
  leaderboard: "".concat(API_URL_RANK, "/leaderboard"),
  topThree: "".concat(API_URL_RANK, "/topThree"),
  waa: "".concat(API_URL_RANK, "/waa"),
  searchPlayer: "".concat(API_URL_SEARCH)
};
module.exports = {
  urlSet: urlSet
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common_MainSectionType1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common/MainSectionType1 */ "./components/common/MainSectionType1.js");
/* harmony import */ var _components_common_MainSectionType2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/MainSectionType2 */ "./components/common/MainSectionType2.js");
/* harmony import */ var _constants_dummy_mainpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/dummy/mainpage */ "./constants/dummy/mainpage.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/urls */ "./constants/urls.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_constants_urls__WEBPACK_IMPORTED_MODULE_8__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








 // type:
// 0: 걍 사진
// 1: 그래프

var MAIN_SECTION_LIST = [{
  title: "선수 검색",
  type: 0
}, {
  title: "주요 순위",
  type: 1,
  columns: ["항목", "1위", "", "2위", "", "3위", ""],
  data: _constants_dummy_mainpage__WEBPACK_IMPORTED_MODULE_7__["MAIN_RANK_DUMMY_DATA"]
}, {
  title: "팀 순위",
  type: 1,
  columns: ["순위", "팀명", "경기수", "승", "패", "무", "승차"],
  data: _constants_dummy_mainpage__WEBPACK_IMPORTED_MODULE_7__["LEADERBOARD_DUMMY_DATA"]
}, {
  title: "팀 분석(WAA)",
  type: 1,
  columns: ["팀", "타격", "주루", "수비", "선발", "구원"],
  data: _constants_dummy_mainpage__WEBPACK_IMPORTED_MODULE_7__["TEAM_WAA_DUMMY_DATA"]
}];

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      leaderboardList = _useState2[0],
      setleaderboardList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_constants_urls__WEBPACK_IMPORTED_MODULE_8__["urlSet"].leaderboard).then(function (_ref2) {
              var data = _ref2.data.data;

              if (data) {
                setleaderboardList(data.resultList);
              } else {
                setleaderboardList([]);
              }
            }).catch(function (e) {
              console.error(e);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      topThreeList = _useState4[0],
      setTopThreeList = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_constants_urls__WEBPACK_IMPORTED_MODULE_8__["urlSet"].topThree).then(function (_ref4) {
              var data = _ref4.data.data;

              if (data) {
                setTopThreeList(data.resultList);
              } else {
                setTopThreeList([]);
              }
            }).catch(function (e) {
              console.error(e);
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      waaList = _useState6[0],
      setWaaList = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_constants_urls__WEBPACK_IMPORTED_MODULE_8__["urlSet"].waa).then(function (_ref6) {
              var data = _ref6.data.data;

              if (data) {
                setWaaList(data.resultList);
              } else {
                setWaaList([]);
              }
            }).catch(function (e) {
              console.error(e);
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MainPageDiv, null, MAIN_SECTION_LIST.map(function (_ref7, index) {
    var title = _ref7.title,
        type = _ref7.type,
        columns = _ref7.columns,
        data = _ref7.data;
    return type === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_common_MainSectionType1__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: title,
      key: index
    }) : null;
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_common_MainSectionType2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: "주요 순위",
    columnList: ["항목", "1위", "", "2위", "", "3위", ""],
    parentIndex: 1,
    data: topThreeList,
    key: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_common_MainSectionType2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: "팀 순위",
    columnList: ["순위", "팀명", "경기수", "승", "패", "무", "승률", "승차"],
    parentIndex: 1,
    data: leaderboardList,
    key: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_common_MainSectionType2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: "팀 WAA",
    columnList: ["항목", "타격", "주루", "수비", "선발", "구원"],
    parentIndex: 1,
    data: waaList,
    key: 1
  }));
};

var MainPageDiv = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "pages__MainPageDiv",
  componentId: "sc-1mnxjqd-0"
})(["position:relative;display:flex;flex-wrap:wrap;justify-content:space-around;width:100%;"]);
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map