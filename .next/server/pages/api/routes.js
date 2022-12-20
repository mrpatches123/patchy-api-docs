"use strict";
(() => {
var exports = {};
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 8353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ routeHandler)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/routes.ts

const { promises: fs  } = external_fs_namespaceObject;

function snakeToPascal(string) {
    return string.replace(/(_\w)/g, (m)=>m[1].toUpperCase()).replace(/^\w/, (m)=>m.toUpperCase());
}
async function routeHandler(request, response) {
    const directoryRelativeToPagesFolder = "doc_pages";
    const directory = external_path_default().resolve("./pages", directoryRelativeToPagesFolder);
    const filenames = await fs.readdir(directory);
    const paths = filenames.map((name)=>{
        name = name.replace(".tsx", "");
        return {
            path: external_path_default().join("/", directoryRelativeToPagesFolder, name).replaceAll("\\", "/"),
            text: snakeToPascal(name)
        };
    });
    response.status(200).json(paths);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8353));
module.exports = __webpack_exports__;

})();