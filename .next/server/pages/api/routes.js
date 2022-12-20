"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/routes";
exports.ids = ["pages/api/routes"];
exports.modules = {

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/routes.ts":
/*!*****************************!*\
  !*** ./pages/api/routes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ routeHandler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\nconst { promises: fs  } = fs__WEBPACK_IMPORTED_MODULE_0__;\n\nfunction snakeToPascal(string) {\n    return string.replace(/(_\\w)/g, (m)=>m[1].toUpperCase()).replace(/^\\w/, (m)=>m.toUpperCase());\n}\nasync function routeHandler(request, response) {\n    const directoryRelativeToPagesFolder = \"doc_pages\";\n    const directory = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(\"./pages\", directoryRelativeToPagesFolder);\n    const filenames = await fs.readdir(directory);\n    const paths = filenames.map((name)=>{\n        name = name.replace(\".tsx\", \"\");\n        return {\n            path: path__WEBPACK_IMPORTED_MODULE_1___default().join(\"/\", directoryRelativeToPagesFolder, name).replaceAll(\"\\\\\", \"/\"),\n            text: snakeToPascal(name)\n        };\n    });\n    response.status(200).json(paths);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcm91dGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2dDO0FBQ2hDLE1BQU0sRUFBRUMsVUFBVUMsR0FBRSxFQUFFLEdBQUdGLCtCQUFTQTtBQUNWO0FBRXhCLFNBQVNJLGNBQWNDLE1BQWMsRUFBRTtJQUN0QyxPQUFPQSxPQUFPQyxPQUFPLENBQUMsVUFBVSxDQUFDQyxJQUFNQSxDQUFDLENBQUMsRUFBRSxDQUFDQyxXQUFXLElBQUlGLE9BQU8sQ0FBQyxPQUFPLENBQUNDLElBQU1BLEVBQUVDLFdBQVc7QUFDL0Y7QUFFZSxlQUFlQyxhQUFhQyxPQUF1QixFQUFFQyxRQUF5QixFQUFFO0lBQzlGLE1BQU1DLGlDQUFpQztJQUN2QyxNQUFNQyxZQUFZVixtREFBWSxDQUFDLFdBQVdTO0lBQzFDLE1BQU1HLFlBQVksTUFBTWIsR0FBR2MsT0FBTyxDQUFDSDtJQUVuQyxNQUFNSSxRQUFRRixVQUFVRyxHQUFHLENBQUNDLENBQUFBLE9BQVE7UUFDbkNBLE9BQU9BLEtBQUtiLE9BQU8sQ0FBQyxRQUFRO1FBQzVCLE9BQVE7WUFBRUgsTUFBTUEsZ0RBQVMsQ0FBQyxLQUFLUyxnQ0FBZ0NPLE1BQU1FLFVBQVUsQ0FBQyxNQUFNO1lBQU1DLE1BQU1sQixjQUFjZTtRQUFNO0lBQ3ZIO0lBQ0FSLFNBQVNZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNQO0FBQzNCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4vcGFnZXMvYXBpL3JvdXRlcy50cz8yNWUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0ICogYXMgZnNTdGFydGVyIGZyb20gJ2ZzJztcclxuY29uc3QgeyBwcm9taXNlczogZnMgfSA9IGZzU3RhcnRlcjtcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5mdW5jdGlvbiBzbmFrZVRvUGFzY2FsKHN0cmluZzogc3RyaW5nKSB7XHJcblx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oX1xcdykvZywgKG0pID0+IG1bMV0udG9VcHBlckNhc2UoKSkucmVwbGFjZSgvXlxcdy8sIChtKSA9PiBtLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByb3V0ZUhhbmRsZXIocmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuXHRjb25zdCBkaXJlY3RvcnlSZWxhdGl2ZVRvUGFnZXNGb2xkZXIgPSAnZG9jX3BhZ2VzJztcclxuXHRjb25zdCBkaXJlY3RvcnkgPSBwYXRoLnJlc29sdmUoJy4vcGFnZXMnLCBkaXJlY3RvcnlSZWxhdGl2ZVRvUGFnZXNGb2xkZXIpO1xyXG5cdGNvbnN0IGZpbGVuYW1lcyA9IGF3YWl0IGZzLnJlYWRkaXIoZGlyZWN0b3J5KTtcclxuXHJcblx0Y29uc3QgcGF0aHMgPSBmaWxlbmFtZXMubWFwKG5hbWUgPT4ge1xyXG5cdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgnLnRzeCcsICcnKTtcclxuXHRcdHJldHVybiAoeyBwYXRoOiBwYXRoLmpvaW4oJy8nLCBkaXJlY3RvcnlSZWxhdGl2ZVRvUGFnZXNGb2xkZXIsIG5hbWUpLnJlcGxhY2VBbGwoJ1xcXFwnLCAnLycpLCB0ZXh0OiBzbmFrZVRvUGFzY2FsKG5hbWUpIH0pO1xyXG5cdH0pO1xyXG5cdHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24ocGF0aHMpO1xyXG59OyJdLCJuYW1lcyI6WyJmc1N0YXJ0ZXIiLCJwcm9taXNlcyIsImZzIiwicGF0aCIsInNuYWtlVG9QYXNjYWwiLCJzdHJpbmciLCJyZXBsYWNlIiwibSIsInRvVXBwZXJDYXNlIiwicm91dGVIYW5kbGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGlyZWN0b3J5UmVsYXRpdmVUb1BhZ2VzRm9sZGVyIiwiZGlyZWN0b3J5IiwicmVzb2x2ZSIsImZpbGVuYW1lcyIsInJlYWRkaXIiLCJwYXRocyIsIm1hcCIsIm5hbWUiLCJqb2luIiwicmVwbGFjZUFsbCIsInRleHQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/routes.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/routes.ts"));
module.exports = __webpack_exports__;

})();