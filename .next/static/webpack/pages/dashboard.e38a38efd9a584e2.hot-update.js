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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ \"./components/index.jsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Sidebar = function(param) {\n    var isSideBarOpen = param.isSideBarOpen, setIsSideBarOpen = param.setIsSideBarOpen;\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().asPath;\n    // const [toggle, settoggle]=React.useState(false)\n    // NavItem\n    var NavItem = function(param) {\n        var icon = param.icon, label = param.label, link = param.link;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: link || \"/\".concat(label.toLowerCase()),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        className: \"text-sm normal-case px-0 justify-start hover:text-softOrange hover:bg-transparent \".concat(asPath === (link || \"/\".concat(label.toLowerCase())) ? \"text-orange hover:!text-orange\" : asPath.includes(\"/\".concat(label.toLowerCase())) ? \"text-orange hover:!text-orange\" : \"text-[#4A5568]\"),\n                        startIcon: icon,\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 19\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 16\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n            lineNumber: 17,\n            columnNumber: 10\n        }, _this);\n    };\n    // fuctions\n    var handleBackdropClose = function() {\n        setIsSideBarOpen(!isSideBarOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"w-[245px] min-w-[245px] bg-white pl-8 py-6 h-screen fixed overflow-y-auto z-20 transition-transform transform lg:transform-none \".concat(isSideBarOpen ? \"translate-0\" : \"-translate-x-full\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Logo, {\n                    width: \"91.2\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                    onClick: handleBackdropClose,\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.MenuHamburger, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 19\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"space-y-4 lg:space-y-4 mt-10 lg:mt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Home, {}, void 0, false, void 0, void 0),\n                            label: \"Home\",\n                            link: \"/dashboard\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 16\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Products, {}, void 0, false, void 0, void 0),\n                            label: \"Products\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 16\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Adminstrators, {}, void 0, false, void 0, void 0),\n                            label: \"Adminstrators\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 16\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Roles, {}, void 0, false, void 0, void 0),\n                            label: \"Roles and Priviledges\",\n                            link: \"/roles_and_priviledges\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 16\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n            lineNumber: 45,\n            columnNumber: 10\n        }, _this)\n    }, void 0, false);\n};\n_s(Sidebar, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZGViYXIuanN4PzQ0NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkJ1dHRvbiwgQmFja2Ryb3AsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uJztcclxuaW1wb3J0IENsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyBpc1NpZGVCYXJPcGVuLCBzZXRJc1NpZGVCYXJPcGVuIH0pID0+IHtcclxuICAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgICAvLyBjb25zdCBbdG9nZ2xlLCBzZXR0b2dnbGVdPVJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgIFxyXG4gICAvLyBOYXZJdGVtXHJcbiAgIGNvbnN0IE5hdkl0ZW0gPSAoeyBpY29uLCBsYWJlbCwgbGluayB9KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rIHx8IGAvJHtsYWJlbC50b0xvd2VyQ2FzZSgpfWB9PlxyXG4gICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXNtIG5vcm1hbC1jYXNlIHB4LTAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LXNvZnRPcmFuZ2UgaG92ZXI6YmctdHJhbnNwYXJlbnQgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoID09PSAobGluayB8fCBgLyR7bGFiZWwudG9Mb3dlckNhc2UoKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LW9yYW5nZSBob3ZlcjohdGV4dC1vcmFuZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNQYXRoLmluY2x1ZGVzKGAvJHtsYWJlbC50b0xvd2VyQ2FzZSgpfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtb3JhbmdlIGhvdmVyOiF0ZXh0LW9yYW5nZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1bIzRBNTU2OF0nXHJcbiAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICBzdGFydEljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9IFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgIH07XHJcblxyXG4gICAvLyBmdWN0aW9uc1xyXG4gICBjb25zdCBoYW5kbGVCYWNrZHJvcENsb3NlID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc1NpZGVCYXJPcGVuKCFpc1NpZGVCYXJPcGVuKTtcclxuICAgfTtcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgIDxuYXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1bMjQ1cHhdIG1pbi13LVsyNDVweF0gYmctd2hpdGUgcGwtOCBweS02IGgtc2NyZWVuIGZpeGVkIG92ZXJmbG93LXktYXV0byB6LTIwIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBsZzp0cmFuc2Zvcm0tbm9uZSAke1xyXG4gICAgICAgICAgICAgICBpc1NpZGVCYXJPcGVuID8gJ3RyYW5zbGF0ZS0wJyA6ICctdHJhbnNsYXRlLXgtZnVsbCdcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgPFNWRy5Mb2dvIHdpZHRoPSc5MS4yJyAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQmFja2Ryb3BDbG9zZX0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTVkcuTWVudUhhbWJ1cmdlciAvPlxyXG4gICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdzcGFjZS15LTQgbGc6c3BhY2UteS00IG10LTEwIGxnOm10LTE2Jz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxOYXZJdGVtIGljb249ezxTVkcuSG9tZSAvPn0gbGFiZWw9J0hvbWUnIGxpbms9Jy9kYXNoYm9hcmQnIC8+XHJcbiAgICAgICAgICAgICAgIHsvKiA8TmF2SXRlbSBpY29uPXs8U1ZHLlVzZXJzIC8+fSBsYWJlbD0nVXNlcnMnIC8+ICovfVxyXG4gICAgICAgICAgICAgICA8TmF2SXRlbSBpY29uPXs8U1ZHLlByb2R1Y3RzIC8+fSBsYWJlbD0nUHJvZHVjdHMnIC8+XHJcbiAgICAgICAgICAgICAgIHsvKiA8TmF2SXRlbSBpY29uPXs8U1ZHLlRyYW5zYWN0aW9ucyAvPn0gbGFiZWw9J1RyYW5zYWN0aW9ucycgLz4gKi99XHJcbiAgICAgICAgICAgICAgIDxOYXZJdGVtIGljb249ezxTVkcuQWRtaW5zdHJhdG9ycyAvPn0gbGFiZWw9J0FkbWluc3RyYXRvcnMnIC8+XHJcbiAgICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGljb249ezxTVkcuUm9sZXMgLz59XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdSb2xlcyBhbmQgUHJpdmlsZWRnZXMnXHJcbiAgICAgICAgICAgICAgICAgIGxpbms9Jy9yb2xlc19hbmRfcHJpdmlsZWRnZXMnXHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICB7LyogQmFja2Ryb3AgKi99XHJcblxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgIHsvKiA8QmFja2Ryb3BcclxuICAgICAgICAgICAgb3Blbj17aXNTaWRlQmFyT3Blbn1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja2Ryb3BDbG9zZX1cclxuICAgICAgICAgICAgc3g9e3sgekluZGV4OiAnMTAnIH19XHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICA8Lz5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJuYW1lcyI6WyJJY29uQnV0dG9uIiwiQmFja2Ryb3AiLCJCdXR0b24iLCJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJTVkciLCJDbGFzc05hbWVzIiwiU2lkZWJhciIsImlzU2lkZUJhck9wZW4iLCJzZXRJc1NpZGVCYXJPcGVuIiwiYXNQYXRoIiwiTmF2SXRlbSIsImljb24iLCJsYWJlbCIsImxpbmsiLCJsaSIsImhyZWYiLCJ0b0xvd2VyQ2FzZSIsImEiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInN0YXJ0SWNvbiIsImhhbmRsZUJhY2tkcm9wQ2xvc2UiLCJuYXYiLCJMb2dvIiwid2lkdGgiLCJvbkNsaWNrIiwiTWVudUhhbWJ1cmdlciIsInVsIiwiSG9tZSIsIlByb2R1Y3RzIiwiQWRtaW5zdHJhdG9ycyIsIlJvbGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Sidebar.jsx\n"));

/***/ })

});