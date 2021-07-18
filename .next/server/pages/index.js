(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7406:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8349);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(204);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4399);
/* harmony import */ var _service_ArticleService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(518);
/* harmony import */ var _service_static_content_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7135);
/* harmony import */ var _styles_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6746);
/* harmony import */ var _styles_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import Link from 'next/link'
// import PropTypes from 'prop-types'







function Home(props) {
  const {
    articles
  } = props;
  const context = (0,_Context__WEBPACK_IMPORTED_MODULE_5__/* .useAppContext */ .b)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    context.dispatch({
      type: "home-page-visit",
      pageType: 'home',
      banner: _service_static_content_json__WEBPACK_IMPORTED_MODULE_7__/* .home.BANNER */ .LE.Mk
    });
  }, [_service_static_content_json__WEBPACK_IMPORTED_MODULE_7__/* .home.BANNER */ .LE.Mk]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "w-full border-all bg-black bg-opacity-75 md:px-16 px-4 pt-4 pb-12",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-4xl font-semibold w-full text-green-500 border-bo py-3 px-4 text-center",
        children: "Recent posts"
      }), articles && articles.length > 0 ? articles.map(article => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_pages_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().post_info_block),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .PostInfo */ .l0, {
          category: article.category,
          slug: article.slug,
          title: article.title,
          subtitle: article.subtitle,
          date: article.date,
          tags: article.tags
        })
      }, article.slug)) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "w-full border-all md:border bg-black md:px-16 px-4 py-4 mt-4",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-4xl font-semibold w-full text-green-500 border-bo py-3 px-4 text-center",
        children: "About me"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-4 mx-6 text-center text-xl",
        children: _service_static_content_json__WEBPACK_IMPORTED_MODULE_7__/* .home.ABOUT_ME.SECTION_ONE */ .LE.lz.FH
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-4 mx-6 text-center text-xl bg-gray-500 bg-opacity-20 px-4 py-2 rounded-md",
        children: _service_static_content_json__WEBPACK_IMPORTED_MODULE_7__/* .home.ABOUT_ME.INTENDED_MISSION */ .LE.lz.z5
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full py-3 px-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .zx, {
          action: () => router.push(_service_static_content_json__WEBPACK_IMPORTED_MODULE_7__/* .links.TWITTER */ .Ok.Ib),
          children: ["Let's meet", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: "ml-2 text-black fa fa-paper-plane"
          })]
        })
      })]
    })]
  });
}

async function getStaticProps(context) {
  const articles = await _service_ArticleService__WEBPACK_IMPORTED_MODULE_6__/* .default.getArticleList */ .Z.getArticleList(1);
  console.log(articles);
  return {
    props: {
      articles: articles.map(article => {
        return _objectSpread(_objectSpread({}, article), {}, {
          slug: article.id,
          tags: article.tags.map(tag => tag.title),
          category: article.category ? article.category.title : null,
          date: article.publishedAt ? article.publishedAt : null
        });
      })
    } // will be passed to the page component as props

  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 6746:
/***/ (function(module) {

// Exports
module.exports = {
	"post_info_block": "Home_post_info_block__39tO2"
};


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

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,61,59,135,518], function() { return __webpack_exec__(7406); });
module.exports = __webpack_exports__;

})();