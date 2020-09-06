webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Components/Navigation.js":
/*!**************************************!*\
  !*** ./src/Components/Navigation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdbreact */ \"./node_modules/mdbreact/dist/mdbreact.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/Apollo/workspace/Anechoic/project3/echo-app/src/Components/Navigation.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nclass NavbarPage extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"state\", {\n      // collapse1: false,\n      // collapseID: '',\n      isOpen: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"toggleCollapse\", collapseID => () => {\n      this.setState(prevState => ({\n        collapseID: prevState.collapseID !== collapseID ? collapseID : ''\n      }));\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"toggleSingleCollapse\", collapseId => {\n      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {\n        [collapseId]: !this.state[collapseId]\n      }));\n      this.setState({\n        isOpen: !this.state.isOpen\n      });\n    });\n  }\n\n  render() {\n    return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBNavbar\"], {\n      style: {\n        marginTop: '0px',\n        zIndex: `100`,\n        position: 'absolute',\n        width: '100vw',\n        backdropFilter: 'blur(8px)'\n      },\n      light: true,\n      className: \"sr-orange2 z-depth-0 border-bottom border-dark\",\n      expand: \"md\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 4\n      }\n    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBContainer\"], {\n      className: \"\",\n      fluid: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }\n    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBNavbarBrand\"], {\n      className: \"white-text py-0\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 6\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 8\n      }\n    }, __jsx(\"h2\", {\n      className: \"\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }\n    }, \"E\")))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBNavbarToggler\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 6\n      }\n    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBHamburgerToggler\"], {\n      color: \"#016367\",\n      id: \"hamburger1\",\n      onClick: () => this.toggleSingleCollapse('collapse1'),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 7\n      }\n    })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBCollapse\"], {\n      className: \"nav-blur justify-content-end\",\n      isOpen: this.state.collapse3,\n      isOpen: this.state.isOpen,\n      navbar: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 6\n      }\n    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBNavbarNav\"], {\n      className: \"dropdown-menu-right\",\n      right: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }\n    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBNavItem\"], {\n      className: \"my-auto\",\n      right: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 8\n      }\n    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBContainer\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }\n    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBRow\"], {\n      className: \"\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 10\n      }\n    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBCol\"], {\n      size: \"5\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 11\n      }\n    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBBtn\"], {\n      outline: true,\n      rounded: true,\n      onClick: this.props.toggleWalletConnect,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 12\n      }\n    }, \"Login\")), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBCol\"], {\n      size: \"5\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      href: \"/\",\n      target: \"blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 12\n      }\n    }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_2__[\"MDBBtn\"], {\n      outline: true,\n      rounded: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 13\n      }\n    }, \"Logout\"))))))))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"withRouter\"])(NavbarPage));\n\nvar _c;\n\n$RefreshReg$(_c, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcz83NWNlIl0sIm5hbWVzIjpbIk5hdmJhclBhZ2UiLCJDb21wb25lbnQiLCJpc09wZW4iLCJjb2xsYXBzZUlEIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJjb2xsYXBzZUlkIiwic3RhdGUiLCJyZW5kZXIiLCJtYXJnaW5Ub3AiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsIndpZHRoIiwiYmFja2Ryb3BGaWx0ZXIiLCJ0b2dnbGVTaW5nbGVDb2xsYXBzZSIsImNvbGxhcHNlMyIsInByb3BzIiwidG9nZ2xlV2FsbGV0Q29ubmVjdCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWVBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBTixTQUF5QkMsK0NBQXpCLENBQW1DO0FBQUE7QUFBQTs7QUFBQSw2R0FDMUI7QUFDUDtBQUNBO0FBQ0FDLFlBQU0sRUFBRTtBQUhELEtBRDBCOztBQUFBLHNIQU9oQkMsVUFBRCxJQUFnQixNQUFNO0FBQ3RDLFdBQUtDLFFBQUwsQ0FBZUMsU0FBRCxLQUFnQjtBQUFFRixrQkFBVSxFQUFFRSxTQUFTLENBQUNGLFVBQVYsS0FBeUJBLFVBQXpCLEdBQXNDQSxVQUF0QyxHQUFtRDtBQUFqRSxPQUFoQixDQUFkO0FBQ0EsS0FUaUM7O0FBQUEsNEhBV1ZHLFVBQUQsSUFBZ0I7QUFDdEMsV0FBS0YsUUFBTCxpQ0FDSSxLQUFLRyxLQURUO0FBRUMsU0FBQ0QsVUFBRCxHQUFjLENBQUMsS0FBS0MsS0FBTCxDQUFXRCxVQUFYO0FBRmhCO0FBSUEsV0FBS0YsUUFBTCxDQUFjO0FBQUVGLGNBQU0sRUFBRSxDQUFDLEtBQUtLLEtBQUwsQ0FBV0w7QUFBdEIsT0FBZDtBQUNBLEtBakJpQztBQUFBOztBQW1CbENNLFFBQU0sR0FBRztBQUNSLFdBQ0MsTUFBQyxrREFBRDtBQUNDLFdBQUssRUFBRTtBQUNOQyxpQkFBUyxFQUFFLEtB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Y2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0TURCTmF2YmFyLFxuXHRNREJOYXZiYXJCcmFuZCxcblx0TURCTmF2YmFyTmF2LFxuXHRNREJOYXZJdGVtLFxuXHRNREJOYXZMaW5rLFxuXHRNREJDb2xsYXBzZSxcblx0TURCQ29udGFpbmVyLFxuXHRNREJIYW1idXJnZXJUb2dnbGVyLFxuXHRNREJOYXZiYXJUb2dnbGVyLFxuXHRNREJJY29uLFxuXHRNREJCdG4sXG5cdE1EQlJvdyxcblx0TURCQ29sLFxufSBmcm9tICdtZGJyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY2xhc3MgTmF2YmFyUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdC8vIGNvbGxhcHNlMTogZmFsc2UsXG5cdFx0Ly8gY29sbGFwc2VJRDogJycsXG5cdFx0aXNPcGVuOiBmYWxzZSxcblx0fTtcblxuXHR0b2dnbGVDb2xsYXBzZSA9IChjb2xsYXBzZUlEKSA9PiAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoeyBjb2xsYXBzZUlEOiBwcmV2U3RhdGUuY29sbGFwc2VJRCAhPT0gY29sbGFwc2VJRCA/IGNvbGxhcHNlSUQgOiAnJyB9KSk7XG5cdH07XG5cblx0dG9nZ2xlU2luZ2xlQ29sbGFwc2UgPSAoY29sbGFwc2VJZCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Li4udGhpcy5zdGF0ZSxcblx0XHRcdFtjb2xsYXBzZUlkXTogIXRoaXMuc3RhdGVbY29sbGFwc2VJZF0sXG5cdFx0fSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuIH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1EQk5hdmJhclxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdG1hcmdpblRvcDogJzBweCcsXG5cdFx0XHRcdFx0ekluZGV4OiBgMTAwYCxcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHRcdFx0XHR3aWR0aDogJzEwMHZ3Jyxcblx0XHRcdFx0XHRiYWNrZHJvcEZpbHRlcjogJ2JsdXIoOHB4KScsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGxpZ2h0XG5cdFx0XHRcdGNsYXNzTmFtZT1cInNyLW9yYW5nZTIgei1kZXB0aC0wIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmtcIlxuXHRcdFx0XHRleHBhbmQ9XCJtZFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxNREJDb250YWluZXIgY2xhc3NOYW1lPVwiXCIgZmx1aWQ+XG5cdFx0XHRcdFx0PE1EQk5hdmJhckJyYW5kIGNsYXNzTmFtZT1cIndoaXRlLXRleHQgcHktMFwiPlxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIlwiPkU8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9NREJOYXZiYXJCcmFuZD5cblx0XHRcdFx0XHQ8TURCTmF2YmFyVG9nZ2xlcj5cblx0XHRcdFx0XHRcdDxNREJIYW1idXJnZXJUb2dnbGVyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwiIzAxNjM2N1wiXG5cdFx0XHRcdFx0XHRcdGlkPVwiaGFtYnVyZ2VyMVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlU2luZ2xlQ29sbGFwc2UoJ2NvbGxhcHNlMScpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L01EQk5hdmJhclRvZ2dsZXI+XG5cdFx0XHRcdFx0PE1EQkNvbGxhcHNlXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuYXYtYmx1ciBqdXN0aWZ5LWNvbnRlbnQtZW5kXCJcblx0XHRcdFx0XHRcdGlzT3Blbj17dGhpcy5zdGF0ZS5jb2xsYXBzZTN9XG5cdFx0XHRcdFx0XHRpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufVxuXHRcdFx0XHRcdFx0bmF2YmFyXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PE1EQk5hdmJhck5hdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LXJpZ2h0XCIgcmlnaHQ+XG5cdFx0XHRcdFx0XHRcdHsvKiA8TURCTmF2SXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3NlcnZpY2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGZvbnQtb3N3YWxkIG5hdi1mb250IGZvbnQtd2VpZ2h0LWJvbGRlclwiPlNlcnZpY2U8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L01EQk5hdkl0ZW0+XG5cdFx0XHRcdFx0XHRcdDxNREJOYXZJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGZvbnQtb3N3YWxkIG5hdi1mb250IGZvbnQtd2VpZ2h0LWJvbGRlclwiPkFib3V0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PC9NREJOYXZJdGVtPlxuXHRcdFx0XHRcdFx0XHQ8TURCTmF2SXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Ake3dpdGhSb3V0ZXIucGF0aG5hbWV9P2NvbnRhY3Q9Y29udGFjdGB9IGFzPXt3aXRoUm91dGVyLnBhdGhuYW1lfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZm9udC1vc3dhbGQgbmF2LWZvbnQgZm9udC13ZWlnaHQtYm9sZGVyXCI+Q29udGFjdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PC9NREJOYXZJdGVtPiAqL31cblxuXHRcdFx0XHRcdFx0XHQ8TURCTmF2SXRlbSBjbGFzc05hbWU9XCJteS1hdXRvXCIgcmlnaHQ+XG5cdFx0XHRcdFx0XHRcdFx0PE1EQkNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdFx0XHRcdDxNREJSb3cgY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxNREJDb2wgc2l6ZT0nNSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxNREJJY29uIHNpemU9XCIyeFwiIGljb249XCJob21lXCIgLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE1EQkJ0biBvdXRsaW5lIHJvdW5kZWQgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGVXYWxsZXRDb25uZWN0fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdExvZ2luXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NREJCdG4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTURCQ29sPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TURCQ29sIHNpemU9JzUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvXCIgdGFyZ2V0PVwiYmxhbmtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8TURCSWNvbiBzaXplPVwiMnhcIiBpY29uPVwid2FsbGV0XCIgLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TURCQnRuIG91dGxpbmUgcm91bmRlZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0TG9nb3V0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01EQkJ0bj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTURCQ29sPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPE1EQkNvbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiL1wiIHRhcmdldD1cImJsYW5rXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TURCSWNvbiBzaXplPVwiMnhcIiBpY29uPVwicGx1c1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01EQkNvbD4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01EQlJvdz5cblx0XHRcdFx0XHRcdFx0XHQ8L01EQkNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdFx0PC9NREJOYXZJdGVtPlxuXHRcdFx0XHRcdFx0PC9NREJOYXZiYXJOYXY+XG5cdFx0XHRcdFx0PC9NREJDb2xsYXBzZT5cblx0XHRcdFx0PC9NREJDb250YWluZXI+XG5cdFx0XHQ8L01EQk5hdmJhcj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2YmFyUGFnZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Navigation.js\n");

/***/ })

})