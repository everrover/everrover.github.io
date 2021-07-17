exports.id = 283;
exports.ids = [283];
exports.modules = {

/***/ 4283:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NH": function() { return /* reexport */ containers_ArchivePageComponent; },
  "bO": function() { return /* reexport */ ArticleMDBlock; },
  "$_": function() { return /* reexport */ containers_Footer; },
  "h4": function() { return /* reexport */ containers_Header; }
});

// UNUSED EXPORTS: CodeBlock

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__(3703);
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);
// EXTERNAL MODULE: external "remark-gfm"
var external_remark_gfm_ = __webpack_require__(7964);
var external_remark_gfm_default = /*#__PURE__*/__webpack_require__.n(external_remark_gfm_);
// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__(7424);
// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
var prism_ = __webpack_require__(328);
;// CONCATENATED MODULE: ./containers/CodeBlock.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/no-children-prop */

/* Use `…/dist/cjs/…` if you’re not in ESM! */



function CodeBlock(_ref) {
  let {
    node,
    inline,
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["node", "inline", "className", "children"]);

  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? /*#__PURE__*/jsx_runtime_.jsx(external_react_syntax_highlighter_.Prism, _objectSpread({
    showLineNumbers: true,
    lineNumberStyle: {
      paddingRight: "0.25rem",
      marginRight: "0.5rem",
      borderRight: "rgba(243, 244, 246, 0.5) 1px solid"
    },
    customStyle: {
      paddingLeft: "0.1rem",
      borderRadius: 0,
      background: "rgba(17, 24, 39 , 1)",
      fontFamily: "'Fira Code', monospace"
    },
    style: prism_.darcula,
    language: match[1],
    children: String(children).replace(/\n$/, '')
  }, props)) : /*#__PURE__*/jsx_runtime_.jsx("code", _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
}

/* harmony default export */ var containers_CodeBlock = (CodeBlock);
// EXTERNAL MODULE: ./components/index.js + 10 modules
var components = __webpack_require__(204);
// EXTERNAL MODULE: external "remark-footnotes"
var external_remark_footnotes_ = __webpack_require__(2793);
var external_remark_footnotes_default = /*#__PURE__*/__webpack_require__.n(external_remark_footnotes_);
;// CONCATENATED MODULE: ./containers/ArticleMDBlock.jsx

 // import PropTypes from 'prop-types'







function ArticleElem(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "control md:px-8 md:py-4 px-2 py-2",
    children: /*#__PURE__*/jsx_runtime_.jsx("article", {
      className: "article-elem",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
        remarkPlugins: [(external_remark_gfm_default()), (external_remark_footnotes_default())],
        components: {
          code: containers_CodeBlock
        },
        children: props.children
      })
    })
  });
}

/* harmony default export */ var ArticleMDBlock = (ArticleElem);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./Context.js
var Context = __webpack_require__(4399);
;// CONCATENATED MODULE: ./containers/ArchivePageComponent.jsx


 // import PropTypes from 'prop-types'





function ArchivePageComponent(props) {
  const {
    content,
    title,
    punlishedAt,
    subtitle,
    banner,
    tags = [],
    category = null
  } = props;
  const context = (0,Context/* useAppContext */.b)();
  (0,external_react_.useEffect)(() => {
    context.dispatch({
      title: "Archive",
      banner: "/archive.jpeg",
      subtitle: "Enjoy the ride via mannual search only. Pagination coming soon.",
      type: "archive-page-visit",
      pageType: 'archive'
    });
  }, []);
  const {
    articles,
    start,
    end,
    current
  } = props;
  console.log("page:", props);
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "w-full border bg-black bg-opacity-75 border-green-400 border-opacity-50 px-16 py-4",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-5xl font-semibold w-full border-green-400 border-opacity-50 border-b py-3 px-4 text-center",
      children: "Posts"
    }), articles && articles.length > 0 ? articles.map(article => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "post-info-block ",
      children: /*#__PURE__*/jsx_runtime_.jsx(components/* PostInfo */.l0, {
        slug: article.slug,
        title: article.title,
        subtitle: article.subtitle,
        date: article.date,
        tags: article.tags
      })
    }, article.slug)) : null, /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-5xl font-semibold w-full py-3 px-4 text-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(components/* Pagination */.tl, {
        start: start,
        end: end,
        current: parseInt(current),
        setPage: val => {
          router.push(`/archive/${val}`);
        }
      })
    })]
  });
}

/* harmony default export */ var containers_ArchivePageComponent = (ArchivePageComponent);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: ./styles/containers/Header.module.scss
var Header_module = __webpack_require__(3760);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./service/static_content.json
var static_content = __webpack_require__(7135);
;// CONCATENATED MODULE: ./containers/Header.jsx












function Header(props) {
  // const [showNav, setShowNav] = useState(false) 
  const context = (0,Context/* useAppContext */.b)();
  let {
    title,
    page,
    subtitle,
    banner,
    pageType = "home",
    publishedAt,
    tags = [],
    category
  } = context.state; // CSS var params

  let centerSubtitle = true,
      showPublishedDate = false,
      showTags = false,
      hideNav = true;

  switch (pageType) {
    case 'article':
      title = /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-4xl text-left font-bold text-green-400 border-bo pb-3",
        children: title
      });
      centerSubtitle = false;
      showPublishedDate = true;
      showTags = true;
      hideNav = false;
      break;
    // case 'about': break
    // case 'archive': 
    //   title= <div className="text-4xl text-center font-bold text-green-400">{title}</div>
    //   break

    case 'home':
      title = /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(components/* LogoImg */.FN, {
          size: "text-5xl"
        }), /*#__PURE__*/jsx_runtime_.jsx(components/* Logo */.TR, {
          size: "text-5xl"
        })]
      });
      subtitle = static_content/* home.SUBTITLE */.LE.yv;
      centerSubtitle = true;
      showPublishedDate = false;
      showTags = false;
      hideNav = true;
      break;

    default:
      break;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mb-4 header border-bo",
      children: [hideNav ? null : /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: (Header_module_default()).navbar,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "nav-block ml-4",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "flex items-center",
              children: /*#__PURE__*/jsx_runtime_.jsx(components/* LogoImg */.FN, {})
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "nav-block mr-3"
        })]
      }), banner ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "banner top-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: banner,
          alt: "Banner",
          className: "banner_img",
          layout: "fill",
          objectPosition: "left",
          objectFit: "cover",
          quality: 70
        })
      }) : null, banner ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "banner-overlay",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `mx-10 my-4 flex flex-col flex-wrap ${centerSubtitle ? "items-center" : "items-start header-elements"}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex py-2",
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `my-2 ${centerSubtitle ? "text-center" : "text-left"} text-2xl text-green-500 font-normal`,
            children: subtitle
          }), showPublishedDate ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `my-2 italic ${centerSubtitle ? "text-center" : "text-left"} text-lg text-xl text-green-100 font-light`,
            children: ["Posted by ", /*#__PURE__*/jsx_runtime_.jsx(components/* Logo */.TR, {
              size: "text-lg",
              inline: true
            }), " on ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: external_dayjs_default()(publishedAt).format("D MMMM, YYYY, dddd")
            })]
          }) : null, showTags > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-wrap items-center",
            children: [category ? /*#__PURE__*/jsx_runtime_.jsx(components/* Tag */.Vp, {
              children: category
            }, category) : null, tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(components/* Tag */.Vp, {
              children: tag
            }, tag))]
          }) : null]
        })
      }) : null]
    })
  });
}

/* harmony default export */ var containers_Header = (Header);
// EXTERNAL MODULE: ./styles/containers/Footer.module.scss
var Footer_module = __webpack_require__(3144);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./containers/Footer.jsx



/* eslint-disable @next/next/no-img-element */

 // import Image from 'next/image'
// import NodeJSImage from '/node_logo.png'
// import ReactJSImage from '/react_logo.png'
// import PropTypes from 'prop_types'




const NextLogo = props => /*#__PURE__*/jsx_runtime_.jsx("img", {
  src: '/nextjs_logo.png',
  className: (Footer_module_default()).footer_nextjs_logo,
  alt: "Next Logo",
  title: "Next.js"
});

const NodeLogo = props => /*#__PURE__*/jsx_runtime_.jsx("img", {
  src: '/node_logo.png',
  className: (Footer_module_default()).footer_nodejs_logo,
  alt: "Next Logo",
  title: "Next.js"
});

const ReactLogo = props => /*#__PURE__*/jsx_runtime_.jsx("img", {
  src: '/react_logo.png',
  className: (Footer_module_default()).footer_reactjs_logo,
  alt: "Next Logo",
  title: "Next.js"
});

function Footer(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (Footer_module_default()).footer_block,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Footer_module_default()).footer_icons_section,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components/* IconLink */.JH, {
        icon: "instagram",
        to: static_content/* links.INSTAGRAM */.Ok.Er
      }), /*#__PURE__*/jsx_runtime_.jsx(components/* IconLink */.JH, {
        icon: "github",
        to: static_content/* links.GITHUB */.Ok.W3
      }), /*#__PURE__*/jsx_runtime_.jsx(components/* IconLink */.JH, {
        icon: "linkedin",
        to: static_content/* links.LINKEDIN */.Ok.fW
      }), /*#__PURE__*/jsx_runtime_.jsx(components/* IconLink */.JH, {
        icon: "twitter",
        to: static_content/* links.TWITTER */.Ok.Ib
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Footer_module_default()).footer_message_section,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).footer_message,
        children: ["Created using ", /*#__PURE__*/jsx_runtime_.jsx(NextLogo, {}), ",\xA0", /*#__PURE__*/jsx_runtime_.jsx(NodeLogo, {}), " and ", /*#__PURE__*/jsx_runtime_.jsx(ReactLogo, {}), " by yours truly,\xA0 ", /*#__PURE__*/jsx_runtime_.jsx(components/* Logo */.TR, {
          size: "text-xl",
          inline: true
        })]
      })
    })]
  });
}

/* harmony default export */ var containers_Footer = (Footer);
;// CONCATENATED MODULE: ./containers/index.js






/***/ }),

/***/ 3144:
/***/ (function(module) {

// Exports
module.exports = {
	"footer_nextjs_logo": "Footer_footer_nextjs_logo__28deP",
	"footer_nodejs_logo": "Footer_footer_nodejs_logo__293dz",
	"footer_reactjs_logo": "Footer_footer_reactjs_logo__3MrU7",
	"footer_block": "Footer_footer_block__3Ua-W",
	"footer_icons_section": "Footer_footer_icons_section__ssToD",
	"footer_message_section": "Footer_footer_message_section__2NgtI",
	"footer_message": "Footer_footer_message__2oWRm"
};


/***/ }),

/***/ 3760:
/***/ (function(module) {

// Exports
module.exports = {
	"header-elements": "Header_header-elements__3GVIS",
	"nav_panel": "Header_nav_panel__7bO_k",
	"nav_panel_items": "Header_nav_panel_items__2bb_W",
	"navbar": "Header_navbar__3CYhe"
};


/***/ })

};
;