"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/layout/Sidebar.jsx":
/*!***************************************!*\
  !*** ./components/layout/Sidebar.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ \"./components/index.jsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Sidebar = function(param) {\n    var isSideBarOpen = param.isSideBarOpen, setIsSideBarOpen = param.setIsSideBarOpen;\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().asPath;\n    // NavItem\n    var NavItem = function(param) {\n        var icon = param.icon, label = param.label, link = param.link;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: link || \"/\".concat(label.toLowerCase()),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"text-sm normal-case px-0 justify-start hover:text-softOrange hover:bg-transparent \".concat(asPath === (link || \"/\".concat(label.toLowerCase())) ? \"text-orange hover:!text-orange\" : asPath.includes(\"/\".concat(label.toLowerCase())) ? \"text-orange hover:!text-orange\" : \"text-[#4A5568]\"),\n                        startIcon: icon,\n                        fullWidth: true,\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 19\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 16\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n            lineNumber: 13,\n            columnNumber: 10\n        }, _this);\n    };\n    // fuctions\n    var handleBackdropClose = function() {\n        setIsSideBarOpen(!isSideBarOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"w-[245px] min-w-[245px] bg-white pl-8 py-6 h-screen fixed overflow-y-auto z-20 transition-transform transform lg:transform-none \".concat(isSideBarOpen ? \"translate-0\" : \"-translate-x-full\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Logo, {\n                        width: \"91.2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                        onClick: handleBackdropClose,\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.MenuHamburger, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"space-y-4 lg:space-y-4 mt-10 lg:mt-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Home, {}, void 0, false, void 0, void 0),\n                                label: \"Home\",\n                                link: \"/dashboard\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Users, {}, void 0, false, void 0, void 0),\n                                label: \"Users\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Products, {}, void 0, false, void 0, void 0),\n                                label: \"Products\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Adminstrators, {}, void 0, false, void 0, void 0),\n                                label: \"Adminstrators\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Roles, {}, void 0, false, void 0, void 0),\n                                label: \"Roles and Priviledges\",\n                                link: \"/roles_and_priviledges\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 16\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                lineNumber: 43,\n                columnNumber: 10\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Backdrop, {\n                open: isSideBarOpen,\n                onClick: handleBackdropClose,\n                sx: {\n                    zIndex: \"10\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                lineNumber: 75,\n                columnNumber: 10\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Sidebar, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFFSixtQkFBbUI7Z0JBQzVCYSxFQUFFLEVBQUU7b0JBQUVDLE1BQU0sRUFBRSxJQUFJO2lCQUFFOzs7OztxQkFDbEI7O29CQUNMLENBQ0o7QUFDTCxDQUFDO0dBM0VLOUIsT0FBTzs7UUFDU0gsa0RBQVM7OztBQUR6QkcsS0FBQUEsT0FBTztBQTZFYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L1NpZGViYXIuanN4PzQ0NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkJ1dHRvbiwgQmFja2Ryb3AsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uJztcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyBpc1NpZGVCYXJPcGVuLCBzZXRJc1NpZGVCYXJPcGVuIH0pID0+IHtcclxuICAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgLy8gTmF2SXRlbVxyXG4gICBjb25zdCBOYXZJdGVtID0gKHsgaWNvbiwgbGFiZWwsIGxpbmsgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsgfHwgYC8ke2xhYmVsLnRvTG93ZXJDYXNlKCl9YH0+XHJcbiAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtc20gbm9ybWFsLWNhc2UgcHgtMCBqdXN0aWZ5LXN0YXJ0IGhvdmVyOnRleHQtc29mdE9yYW5nZSBob3ZlcjpiZy10cmFuc3BhcmVudCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGggPT09IChsaW5rIHx8IGAvJHtsYWJlbC50b0xvd2VyQ2FzZSgpfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtb3JhbmdlIGhvdmVyOiF0ZXh0LW9yYW5nZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc1BhdGguaW5jbHVkZXMoYC8ke2xhYmVsLnRvTG93ZXJDYXNlKCl9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1vcmFuZ2UgaG92ZXI6IXRleHQtb3JhbmdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LVsjNEE1NTY4XSdcclxuICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcblxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgIH07XHJcblxyXG4gICAvLyBmdWN0aW9uc1xyXG4gICBjb25zdCBoYW5kbGVCYWNrZHJvcENsb3NlID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc1NpZGVCYXJPcGVuKCFpc1NpZGVCYXJPcGVuKTtcclxuICAgfTtcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgIDxuYXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1bMjQ1cHhdIG1pbi13LVsyNDVweF0gYmctd2hpdGUgcGwtOCBweS02IGgtc2NyZWVuIGZpeGVkIG92ZXJmbG93LXktYXV0byB6LTIwIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBsZzp0cmFuc2Zvcm0tbm9uZSAke1xyXG4gICAgICAgICAgICAgICBpc1NpZGVCYXJPcGVuID8gJ3RyYW5zbGF0ZS0wJyA6ICctdHJhbnNsYXRlLXgtZnVsbCdcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgPFNWRy5Mb2dvIHdpZHRoPSc5MS4yJyAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQmFja2Ryb3BDbG9zZX0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTVkcuTWVudUhhbWJ1cmdlciAvPlxyXG4gICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdzcGFjZS15LTQgbGc6c3BhY2UteS00IG10LTEwIGxnOm10LTE2Jz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxOYXZJdGVtIGljb249ezxTVkcuSG9tZSAvPn0gbGFiZWw9J0hvbWUnIGxpbms9Jy9kYXNoYm9hcmQnIC8+XHJcbiAgICAgICAgICAgICAgIDxOYXZJdGVtIGljb249ezxTVkcuVXNlcnMgLz59IGxhYmVsPSdVc2VycycgLz5cclxuICAgICAgICAgICAgICAgPE5hdkl0ZW0gaWNvbj17PFNWRy5Qcm9kdWN0cyAvPn0gbGFiZWw9J1Byb2R1Y3RzJyAvPlxyXG4gICAgICAgICAgICAgICB7LyogPE5hdkl0ZW0gaWNvbj17PFNWRy5UcmFuc2FjdGlvbnMgLz59IGxhYmVsPSdUcmFuc2FjdGlvbnMnIC8+ICovfVxyXG4gICAgICAgICAgICAgICA8TmF2SXRlbSBpY29uPXs8U1ZHLkFkbWluc3RyYXRvcnMgLz59IGxhYmVsPSdBZG1pbnN0cmF0b3JzJyAvPlxyXG4gICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgICBpY29uPXs8U1ZHLlJvbGVzIC8+fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nUm9sZXMgYW5kIFByaXZpbGVkZ2VzJ1xyXG4gICAgICAgICAgICAgICAgICBsaW5rPScvcm9sZXNfYW5kX3ByaXZpbGVkZ2VzJ1xyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgey8qIEJhY2tkcm9wICovfVxyXG5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICA8QmFja2Ryb3BcclxuICAgICAgICAgICAgb3Blbj17aXNTaWRlQmFyT3Blbn1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja2Ryb3BDbG9zZX1cclxuICAgICAgICAgICAgc3g9e3sgekluZGV4OiAnMTAnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIl0sIm5hbWVzIjpbIkljb25CdXR0b24iLCJCYWNrZHJvcCIsIkJ1dHRvbiIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIlNWRyIsIlNpZGViYXIiLCJpc1NpZGVCYXJPcGVuIiwic2V0SXNTaWRlQmFyT3BlbiIsImFzUGF0aCIsIk5hdkl0ZW0iLCJpY29uIiwibGFiZWwiLCJsaW5rIiwibGkiLCJocmVmIiwidG9Mb3dlckNhc2UiLCJhIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJzdGFydEljb24iLCJmdWxsV2lkdGgiLCJoYW5kbGVCYWNrZHJvcENsb3NlIiwibmF2IiwiTG9nbyIsIndpZHRoIiwib25DbGljayIsIk1lbnVIYW1idXJnZXIiLCJ1bCIsIkhvbWUiLCJVc2VycyIsIlByb2R1Y3RzIiwiQWRtaW5zdHJhdG9ycyIsIlJvbGVzIiwib3BlbiIsInN4IiwiekluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Sidebar.jsx\n"));

/***/ })

});