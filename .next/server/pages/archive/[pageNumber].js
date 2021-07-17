(function() {
var exports = {};
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 4581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8349);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(204);
/* harmony import */ var _service_ArticleService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4283);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function ArchivePage(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers__WEBPACK_IMPORTED_MODULE_4__/* .ArchivePageComponent */ .NH, _objectSpread({}, props));
}

async function getStaticProps(context) {
  const {
    pageNumber
  } = context.params;
  const articles = await _service_ArticleService__WEBPACK_IMPORTED_MODULE_3__/* .default.getArticleList */ .Z.getArticleList(pageNumber);
  const {
    start,
    end
  } = await _service_ArticleService__WEBPACK_IMPORTED_MODULE_3__/* .default.getMetaData */ .Z.getMetaData();
  return {
    props: {
      articles: articles.map(article => _objectSpread(_objectSpread({}, article), {}, {
        slug: article.id,
        tags: article.tags.map(tag => tag.title),
        category: article.category.title,
        date: article.publishedAt ? article.publishedAt : null
      })),
      start,
      end,
      current: pageNumber
    } // will be passed to the page component as props

  };
}
async function getStaticPaths() {
  const meta = await _service_ArticleService__WEBPACK_IMPORTED_MODULE_3__/* .default.getMetaData */ .Z.getMetaData();
  const paths = [];

  for (let i = meta.start === 1 ? 2 : meta.start; i <= meta.end; i++) {
    paths.push({
      params: {
        pageNumber: i.toString()
      }
    });
  }

  console.log(paths);
  return {
    paths,
    fallback: false
  };
}
/* harmony default export */ __webpack_exports__["default"] = (ArchivePage);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8349:
/***/ (function(module) {

"use strict";
module.exports = require("dayjs");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 6850:
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3703:
/***/ (function(module) {

"use strict";
module.exports = require("react-markdown");;

/***/ }),

/***/ 7424:
/***/ (function(module) {

"use strict";
module.exports = require("react-syntax-highlighter");;

/***/ }),

/***/ 328:
/***/ (function(module) {

"use strict";
module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 2793:
/***/ (function(module) {

"use strict";
module.exports = require("remark-footnotes");;

/***/ }),

/***/ 7964:
/***/ (function(module) {

"use strict";
module.exports = require("remark-gfm");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,313,283,518], function() { return __webpack_exec__(4581); });
module.exports = __webpack_exports__;

})();