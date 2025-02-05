"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [savedData, setSavedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [lastPost, setLastPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showAll, setShowAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [editingPost, setEditingPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Track editing post\n    const saveData = async ()=>{\n        if (editingPost) {\n            await fetch(\"http://localhost:3001/post/\".concat(editingPost.id), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    title,\n                    description\n                })\n            });\n            setEditingPost(null);\n        } else {\n            await fetch(\"http://localhost:3001/post\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    title,\n                    description\n                })\n            });\n        }\n        setTitle(\"\");\n        setDescription(\"\");\n    };\n    const fetchData = async (showAllPosts)=>{\n        try {\n            const url = showAllPosts ? \"http://localhost:3001/post\" : \"http://localhost:3001/post?last=true\";\n            const res = await fetch(url);\n            const data = await res.json();\n            if (showAllPosts) {\n                setSavedData(Array.isArray(data) ? data : []);\n                setLastPost(null);\n            } else {\n                setLastPost(data ? data : null);\n                setSavedData(null);\n            }\n            setShowAll(showAllPosts);\n        } catch (error) {\n            console.error(\"Error fetching posts:\", error);\n            setSavedData([]);\n        }\n    };\n    const deletePost = async (id)=>{\n        try {\n            await fetch(\"http://localhost:3001/post/\".concat(id), {\n                method: \"DELETE\"\n            });\n            fetchData(showAll);\n        } catch (error) {\n            console.error(\"Error deleting post:\", error);\n        }\n    };\n    const startEditing = (post)=>{\n        setEditingPost(post);\n        setTitle(post.title);\n        setDescription(post.description);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 max-w-lg mx-auto mt-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold\",\n                children: \"Simple Note App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Title\",\n                value: title,\n                onChange: (e)=>setTitle(e.target.value),\n                className: \"w-full p-2 border rounded my-2 text-black\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"Description\",\n                value: description,\n                onChange: (e)=>setDescription(e.target.value),\n                className: \"w-full p-2 border rounded my-2 text-black\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: saveData,\n                className: \"bg-blue-500 text-white p-2 rounded\",\n                children: editingPost ? \"Update\" : \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>fetchData(false),\n                className: \"bg-gray-500 text-white p-2 rounded ml-2\",\n                children: \"Show Last Saved\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>fetchData(true),\n                className: \"bg-green-500 text-white p-2 rounded ml-2\",\n                children: \"Show All\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            lastPost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 border p-2 rounded bg-yellow-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold text-black\",\n                        children: \"Last Saved Post\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"font-semibold text-black\",\n                        children: lastPost.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-black\",\n                        children: lastPost.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>deletePost(lastPost.id),\n                        className: \"bg-red-500 text-white p-2 rounded mt-2\",\n                        children: \"Delete\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>startEditing(lastPost),\n                        className: \"bg-yellow-500 text-white p-2 rounded mt-2 ml-2\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, this),\n            showAll && savedData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold\",\n                        children: \"All Saved Posts\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, this),\n                    savedData.length > 0 ? savedData.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border p-2 my-2 rounded\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold\",\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>deletePost(post.id),\n                                    className: \"bg-red-500 text-white p-2 rounded mt-2\",\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>startEditing(post),\n                                    className: \"bg-yellow-500 text-white p-2 rounded mt-2 ml-2\",\n                                    children: \"Edit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, post.id, true, {\n                            fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                            lineNumber: 135,\n                            columnNumber: 15\n                        }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500\",\n                        children: \"No saved posts yet.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\subha\\\\Desktop\\\\Fullstack\\\\frontend\\\\app\\\\page.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MCGKqIm8oRm6/xST+2GM+KBx5m0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2tcXGZyb250ZW5kXFxhcHBcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQb3N0IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzYXZlZERhdGEsIHNldFNhdmVkRGF0YV0gPSB1c2VTdGF0ZTxQb3N0W10gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbbGFzdFBvc3QsIHNldExhc3RQb3N0XSA9IHVzZVN0YXRlPFBvc3QgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc2hvd0FsbCwgc2V0U2hvd0FsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2VkaXRpbmdQb3N0LCBzZXRFZGl0aW5nUG9zdF0gPSB1c2VTdGF0ZTxQb3N0IHwgbnVsbD4obnVsbCk7IC8vIFRyYWNrIGVkaXRpbmcgcG9zdFxyXG5cclxuICBjb25zdCBzYXZlRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChlZGl0aW5nUG9zdCkge1xyXG4gICAgICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3Bvc3QvJHtlZGl0aW5nUG9zdC5pZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRFZGl0aW5nUG9zdChudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Bvc3RcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIHNldERlc2NyaXB0aW9uKFwiXCIpO1xyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoc2hvd0FsbFBvc3RzOiBib29sZWFuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1cmwgPSBzaG93QWxsUG9zdHMgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0XCIgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0P2xhc3Q9dHJ1ZVwiO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChzaG93QWxsUG9zdHMpIHtcclxuICAgICAgICBzZXRTYXZlZERhdGEoQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbXSk7XHJcbiAgICAgICAgc2V0TGFzdFBvc3QobnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0TGFzdFBvc3QoZGF0YSA/IGRhdGEgOiBudWxsKTtcclxuICAgICAgICBzZXRTYXZlZERhdGEobnVsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFNob3dBbGwoc2hvd0FsbFBvc3RzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwb3N0czpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRTYXZlZERhdGEoW10pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVBvc3QgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wb3N0LyR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmZXRjaERhdGEoc2hvd0FsbCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgcG9zdDpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0RWRpdGluZyA9IChwb3N0OiBQb3N0KSA9PiB7XHJcbiAgICBzZXRFZGl0aW5nUG9zdChwb3N0KTtcclxuICAgIHNldFRpdGxlKHBvc3QudGl0bGUpO1xyXG4gICAgc2V0RGVzY3JpcHRpb24ocG9zdC5kZXNjcmlwdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG1heC13LWxnIG14LWF1dG8gbXQtMjBcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+U2ltcGxlIE5vdGUgQXBwPC9oMT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkIG15LTIgdGV4dC1ibGFja1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkIG15LTIgdGV4dC1ibGFja1wiXHJcbiAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICBcclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlRGF0YX0gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZFwiPlxyXG4gICAgICAgIHtlZGl0aW5nUG9zdCA/IFwiVXBkYXRlXCIgOiBcIlNhdmVcIn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIFxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZldGNoRGF0YShmYWxzZSl9IGNsYXNzTmFtZT1cImJnLWdyYXktNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQgbWwtMlwiPlxyXG4gICAgICAgIFNob3cgTGFzdCBTYXZlZFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmZXRjaERhdGEodHJ1ZSl9IGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkIG1sLTJcIj5cclxuICAgICAgICBTaG93IEFsbFxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiBEaXNwbGF5IGxhc3Qgc2F2ZWQgcG9zdCAqL31cclxuICAgICAge2xhc3RQb3N0ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgYm9yZGVyIHAtMiByb3VuZGVkIGJnLXllbGxvdy0xMDBcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibGFja1wiPkxhc3QgU2F2ZWQgUG9zdDwvaDI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrXCI+e2xhc3RQb3N0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+e2xhc3RQb3N0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdChsYXN0UG9zdC5pZCl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZCBtdC0yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3RhcnRFZGl0aW5nKGxhc3RQb3N0KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkIG10LTIgbWwtMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIERpc3BsYXkgYWxsIHNhdmVkIHBvc3RzICovfVxyXG4gICAgICB7c2hvd0FsbCAmJiBzYXZlZERhdGEgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkFsbCBTYXZlZCBQb3N0czwvaDI+XHJcbiAgICAgICAgICB7c2F2ZWREYXRhLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgIHNhdmVkRGF0YS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwiYm9yZGVyIHAtMiBteS0yIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e3Bvc3QudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPntwb3N0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdChwb3N0LmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkIG10LTJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdGFydEVkaXRpbmcocG9zdCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZCBtdC0yIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5ObyBzYXZlZCBwb3N0cyB5ZXQuPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwic2F2ZWREYXRhIiwic2V0U2F2ZWREYXRhIiwibGFzdFBvc3QiLCJzZXRMYXN0UG9zdCIsInNob3dBbGwiLCJzZXRTaG93QWxsIiwiZWRpdGluZ1Bvc3QiLCJzZXRFZGl0aW5nUG9zdCIsInNhdmVEYXRhIiwiZmV0Y2giLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoRGF0YSIsInNob3dBbGxQb3N0cyIsInVybCIsInJlcyIsImRhdGEiLCJqc29uIiwiQXJyYXkiLCJpc0FycmF5IiwiZXJyb3IiLCJjb25zb2xlIiwiZGVsZXRlUG9zdCIsInN0YXJ0RWRpdGluZyIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsImgzIiwicCIsImxlbmd0aCIsIm1hcCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});