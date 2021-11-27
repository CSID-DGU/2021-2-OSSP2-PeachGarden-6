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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
var _templateObject;



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var TitleBadge = function TitleBadge(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleBadgeDiv, null, text);
};

var TitleBadgeDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 200px;\n  text-align: center;\n  padding: 10px 0;\n  font-size: 14px;\n  color: ", ";\n  background-color: ", ";\n"])), _constants_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].black, _constants_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].main);
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
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var MainSectionType1 = function MainSectionType1(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainSectionDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Badge_TitleBadge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: text
  }));
};

var MainSectionDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 45%;\n  height: 600px;\n  background-color: ", ";\n"])), _constants_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].mainFaded);
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
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




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

var BasicTableTable = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.table(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 400px;\n  margin-top: 20px;\n  background-color: ", ";\n"])), _constants_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].main);

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableBodyBody, null, data.map(function (_ref4, index) {
    var title = _ref4.title,
        list = _ref4.list;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableData, null, title), list.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicTableData, null, item);
    }));
  }));
};

var BasicTableHead = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.thead(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var BasicTableBodyBody = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tbody(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var BasicTableRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.tr(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
var BasicTableData = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.td(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 40px;\n  border: 2px solid ", ";\n"])), _constants_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].black);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_MainSectionType1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/MainSectionType1 */ "./components/common/MainSectionType1.js");
/* harmony import */ var _components_common_MainSectionType2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/MainSectionType2 */ "./components/common/MainSectionType2.js");
/* harmony import */ var _constants_dummy_mainpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/dummy/mainpage */ "./constants/dummy/mainpage.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






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
  data: _constants_dummy_mainpage__WEBPACK_IMPORTED_MODULE_5__["MAIN_RANK_DUMMY_DATA"]
}, {
  title: "팀 순위",
  type: 1,
  columns: ["순위", "팀명", "경기수", "승", "패", "무", "승차"],
  data: _constants_dummy_mainpage__WEBPACK_IMPORTED_MODULE_5__["LEADERBOARD_DUMMY_DATA"]
}, {
  title: "팀 분석(WAA)",
  type: 1,
  columns: ["팀", "타격", "주루", "수비", "선발", "구원"],
  data: _constants_dummy_mainpage__WEBPACK_IMPORTED_MODULE_5__["TEAM_WAA_DUMMY_DATA"]
}];

var Index = function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainPageDiv, null, MAIN_SECTION_LIST.map(function (_ref, index) {
    var title = _ref.title,
        type = _ref.type,
        columns = _ref.columns,
        data = _ref.data;
    return type === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common_MainSectionType1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: title,
      key: index
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common_MainSectionType2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: title,
      columnList: columns,
      parentIndex: index,
      data: data,
      key: index
    });
  }));
};

var MainPageDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 100%;\n"])));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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