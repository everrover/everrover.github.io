exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 4399:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ ContextProvider; },
/* harmony export */   "b": function() { return /* binding */ useAppContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  banner: '/images/banner.png',
  pageType: 'home',
  pageTitle: '',
  pageSubtitle: '',
  publishedAt: Date.now(),
  tags: [],
  category: null
};
const store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initState);
function ContextProvider(props) {
  const {
    Provider,
    Consumer
  } = store;
  const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(store); // to fetch the context data 

  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((state, action) => {
    console.log(action);
    const {
      type
    } = action;

    let newState = _objectSpread({}, state);

    switch (type) {
      case 'about-page-visit':
      case 'home-page-visit':
      case 'archive-page-visit':
      case 'article-page-visit':
        newState = _objectSpread(_objectSpread({}, state), action);
        return newState;

      default:
        console.log("Context global action illegal!!");
        return newState;
    }
  }, initState); // console.log(value)

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Provider, {
    value: {
      state,
      dispatch
    },
    children: props.children
  });
}
function useAppContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(store);
}

/***/ }),

/***/ 204:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": function() { return /* reexport */ components_Button; },
  "qK": function() { return /* reexport */ components_HeadBox; },
  "JH": function() { return /* reexport */ components_IconLink; },
  "TR": function() { return /* reexport */ Logo; },
  "FN": function() { return /* reexport */ LogoImg_Logo; },
  "l0": function() { return /* reexport */ components_PostInfo; },
  "Vp": function() { return /* reexport */ components_Tag; }
});

// UNUSED EXPORTS: NavLink, Pagination, RenderedImage

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/components/Tag.module.scss
var Tag_module = __webpack_require__(7991);
var Tag_module_default = /*#__PURE__*/__webpack_require__.n(Tag_module);
;// CONCATENATED MODULE: ./components/Tag.jsx

 // import PropTypes from 'prop-types'



function Tag(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Tag_module_default()).tag,
    children: props.children
  });
}

/* harmony default export */ var components_Tag = (Tag);
;// CONCATENATED MODULE: ./components/PostInfo.jsx




 // import PropTypes from 'prop-types'

function PostInfo(props) {
  const {
    title,
    subtitle,
    slug = "#",
    date,
    tags = [],
    category
  } = props;
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col justify-center items-start px-2 py-4 bg-opacity-10 ",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-gray-100 hover:text-green-300 hover:underline text-2xl font-bold my-2 cursor-pointer",
      onClick: e => {
        e.preventDefault();
        router.push("/article/" + slug);
      },
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "my-1 text-lg font-thin",
      children: subtitle
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "my-1 text-sm ",
      children: ["Posted on ", external_dayjs_default()(date).format("YYYY MMMM, DD, dddd")]
    }), tags.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-wrap items-center",
      children: [category ? /*#__PURE__*/jsx_runtime_.jsx(components_Tag, {
        children: category
      }, category) : null, tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(components_Tag, {
        children: tag
      }, tag))]
    }) : null]
  });
}

/* harmony default export */ var components_PostInfo = (PostInfo);
;// CONCATENATED MODULE: ./components/Logo.jsx



function Logo(props) {
  const {
    size = "text-3xl",
    inline = false
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${inline ? "inline-block" : "flex items-center"}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${inline ? "inline" : ""} logo ${size} text-green-400`,
      children: "Ever"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${inline ? "inline" : ""} logo ${size} text-blue-400`,
      children: "Rover"
    })]
  });
}
;// CONCATENATED MODULE: ./components/LogoImg.jsx


/* eslint-disable @next/next/no-img-element */

function LogoImg_Logo(props) {
  const {
    size = "h-20 w-20"
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${size} m-auto text-center mr-2`,
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/images/logo.svg",
      alt: "logo",
      title: "Everrover",
      layout: "responsive",
      loading: "eager"
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/NavLink.jsx





function NavLink(props) {
  const router = useRouter();
  const {
    to = "#",
    setShowNav = () => {}
  } = props;
  return /*#__PURE__*/_jsx("button", {
    className: styles["nav-element-link"],
    onClick: e => {
      e.preventDefault();
      router.push(to);
      setShowNav(false);
    },
    children: props.children
  });
}

/* harmony default export */ var components_NavLink = ((/* unused pure expression or super */ null && (NavLink)));
;// CONCATENATED MODULE: ./components/IconLink.jsx



function IconLink(props) {
  const {
    icon = null,
    to = "#",
    brand = true
  } = props;
  return icon ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: to,
    passHref: true,
    target: "_blank",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "icon_link mx-3 my-2 link",
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: `text-4xl hover:text-green-400 fa${brand ? "b" : ""} fa-${icon}`
      })
    })
  }) : null;
}

/* harmony default export */ var components_IconLink = (IconLink);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./Context.js
var Context = __webpack_require__(4399);
;// CONCATENATED MODULE: ./components/HeadBox.jsx



/* eslint-disable @next/next/no-page-custom-font */

/* eslint-disable @next/next/no-css-tags */



function HeadBox(props) {
  const {
    state
  } = (0,Context/* useAppContext */.b)();
  const {
    title
  } = state;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: "Web site created using create-react-app"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      href: "/images/logo.svg"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "theme-color",
      content: "#000000"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: "Web site created using create-react-app"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap",
      rel: "stylesheet"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      href: "/fontawesome/css/all.css",
      rel: "stylesheet"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
      children: ["Everrover.com | ", title ? title : "Home"]
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap",
      rel: "stylesheet"
    })]
  });
}

/* harmony default export */ var components_HeadBox = (HeadBox);
;// CONCATENATED MODULE: ./components/Button.jsx

 // import PropTypes from 'prop-types'

function Button_Button(props) {
  const {
    action,
    disabled = false,
    invisible = false
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    className: `${disabled ? "bg-gray-600 cursor-not-allowed" : "bg-green-400 hover:bg-green-600"} ${invisible ? "invisible" : ""} text-black font-medium uppercase text-xl rounded-sm px-3 py-2`,
    disabled: disabled,
    onClick: e => {
      e.preventDefault();
      action();
    },
    children: props.children
  });
}

/* harmony default export */ var components_Button = (Button_Button);
;// CONCATENATED MODULE: ./components/Pagination.jsx



 // import PropTypes from 'prop-types'

function Pagination(props) {
  const {
    start,
    end,
    current,
    setPage
  } = props;
  return start !== end ? /*#__PURE__*/_jsxs("div", {
    className: "w-full flex justify-between",
    children: [/*#__PURE__*/_jsxs(Button, {
      action: _ => {
        setPage(current - 1);
      },
      invisible: start > current - 1,
      children: [/*#__PURE__*/_jsx("i", {
        className: "mr-2 fa fa-arrow-left text-black"
      }), "Recent"]
    }), /*#__PURE__*/_jsxs(Button, {
      action: _ => {
        setPage(current + 1);
      },
      invisible: end < current + 1,
      children: ["Older", /*#__PURE__*/_jsx("i", {
        className: "ml-2 fa fa-arrow-right text-black"
      })]
    })]
  }) : null;
}

/* harmony default export */ var components_Pagination = ((/* unused pure expression or super */ null && (Pagination)));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/RenderedImage.jsx

 // import PropTypes from 'prop-types'




function RenderedImage(props) {
  const {
    src,
    alt
  } = props;
  return /*#__PURE__*/_jsx(Image, {
    className: "tag",
    objectFit: "contain",
    objectPosition: "center",
    src: src,
    alt: alt,
    quality: 90,
    layout: "fill"
  });
}

/* harmony default export */ var components_RenderedImage = ((/* unused pure expression or super */ null && (RenderedImage)));
;// CONCATENATED MODULE: ./components/index.js











/***/ }),

/***/ 7991:
/***/ (function(module) {

// Exports
module.exports = {
	"tag": "Tag_tag__3XvHY"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;