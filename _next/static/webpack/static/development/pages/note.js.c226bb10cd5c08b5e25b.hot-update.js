webpackHotUpdate("static/development/pages/note.js",{

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



var renderTags = function renderTags() {
  var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tag has-gray",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "#", tag);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notes-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "note-item",
      key: item.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/post/".concat(item.key, "/"),
      className: "note-item-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "create-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, item.createdAt));
  })));
});

/***/ })

})
//# sourceMappingURL=note.js.c226bb10cd5c08b5e25b.hot-update.js.map