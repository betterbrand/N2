/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero.jsx":
/*!*********************************!*\
  !*** ./src/components/Hero.jsx ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CallToAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CallToAction */ \"./src/components/CallToAction.jsx\");\n/* harmony import */ var _components_Faqs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Faqs */ \"./src/components/Faqs.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.jsx\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Hero */ \"./src/components/Hero.jsx\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_Hero__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pricing */ \"./src/components/Pricing.jsx\");\n/* harmony import */ var _components_PrimaryFeatures__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PrimaryFeatures */ \"./src/components/PrimaryFeatures.jsx\");\n/* harmony import */ var _components_Reviews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Reviews */ \"./src/components/Reviews.jsx\");\n/* harmony import */ var _components_SecondaryFeatures__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SecondaryFeatures */ \"./src/components/SecondaryFeatures.jsx\");\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Network Nation - Stake For Freedom.\"\n                    }, void 0, false, {\n                        fileName: \"/home/pj/Desktop/network-nation/src/pages/index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.\"\n                    }, void 0, false, {\n                        fileName: \"/home/pj/Desktop/network-nation/src/pages/index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/pj/Desktop/network-nation/src/pages/index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__.Header, {}, void 0, false, {\n                fileName: \"/home/pj/Desktop/network-nation/src/pages/index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_6__.Hero, {}, void 0, false, {\n                    fileName: \"/home/pj/Desktop/network-nation/src/pages/index.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/pj/Desktop/network-nation/src/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.Footer, {}, void 0, false, {\n                fileName: \"/home/pj/Desktop/network-nation/src/pages/index.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFFNkI7QUFDaEI7QUFDSTtBQUNBO0FBQ0o7QUFDTTtBQUNnQjtBQUNoQjtBQUNvQjtBQUVwRCxTQUFTVSxPQUFPO0lBQzdCLHFCQUNFOzswQkFDRSw4REFBQ1Ysa0RBQUlBOztrQ0FDSCw4REFBQ1c7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ1Ysc0RBQU1BOzs7OzswQkFDUCw4REFBQ1c7MEJBQ0MsNEVBQUNWLGtEQUFJQTs7Ozs7Ozs7OzswQkFHUCw4REFBQ0Ysc0RBQU1BOzs7Ozs7O0FBR2IsQ0FBQztLQWxCdUJPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCB7IENhbGxUb0FjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FsbFRvQWN0aW9uJ1xuaW1wb3J0IHsgRmFxcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvRmFxcydcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJ1xuaW1wb3J0IHsgUHJpY2luZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJpY2luZydcbmltcG9ydCB7IFByaW1hcnlGZWF0dXJlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJpbWFyeUZlYXR1cmVzJ1xuaW1wb3J0IHsgUmV2aWV3cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvUmV2aWV3cydcbmltcG9ydCB7IFNlY29uZGFyeUZlYXR1cmVzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWNvbmRhcnlGZWF0dXJlcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXR3b3JrIE5hdGlvbiAtIFN0YWtlIEZvciBGcmVlZG9tLjwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQnkgbGV2ZXJhZ2luZyBpbnNpZ2h0cyBmcm9tIG91ciBuZXR3b3JrIG9mIGluZHVzdHJ5IGluc2lkZXJzLCB5b3XigJlsbCBrbm93IGV4YWN0bHkgd2hlbiB0byBidXkgdG8gbWF4aW1pemUgcHJvZml0LCBhbmQgZXhhY3RseSB3aGVuIHRvIHNlbGwgdG8gYXZvaWQgcGFpbmZ1bCBsb3NzZXMuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8SGVybyAvPlxuICAgICAgIFxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkNhbGxUb0FjdGlvbiIsIkZhcXMiLCJGb290ZXIiLCJIZWFkZXIiLCJIZXJvIiwiUHJpY2luZyIsIlByaW1hcnlGZWF0dXJlcyIsIlJldmlld3MiLCJTZWNvbmRhcnlGZWF0dXJlcyIsIkhvbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});