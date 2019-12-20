webpackHotUpdate("static/development/pages/index.js",{

/***/ "./client/components/NotesList/NotesList.js":
/*!**************************************************!*\
  !*** ./client/components/NotesList/NotesList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotesList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesList.scss */ "./client/components/NotesList/NotesList.scss");
/* harmony import */ var _NotesList_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NotesList_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yangxiaofu/work/work-note/work/my/blog/client/components/NotesList/NotesList.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notes-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "note-item",
      key: item.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/post/".concat(item.key, "/"),
      className: "note-item-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "create-time has-gray",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, item.createdAt));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.002abbe372fafec0ef54.hot-update.js.map