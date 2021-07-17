exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 518:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ service_ArticleService; }
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(6850);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);
;// CONCATENATED MODULE: ./service/utils/api.js
 // import applyConverters from 'axios-case-converter'

 // import http from 'http'
// import https from 'https'

const MS_IN_SEC = 1000;

class API {
  // timeout -> seconds
  // uri -> base initial uri to be used
  // headers -> include all headers in obj as key:value pairs
  constructor({
    url,
    timeout = 30,
    headers = {
      'accessToken': 'token'
    }
  }) {
    if (this.constructor === API) {
      // this is an abstract class
      throw new Error("Abstract classes can't be instantiated.");
    } // const httpAgent = new http.Agent({ keepAlive: true })
    // const httpsAgent = new https.Agent({ keepAlive: true })


    this.instance = external_axios_default().create({
      // httpAgent: httpAgent,
      // httpsAgent: httpsAgent,
      baseURL: url,
      timeout: timeout * MS_IN_SEC,
      headers: headers,
      paramsSerializer: function (params) {
        return external_qs_default().stringify(params, {
          arrayFormat: 'brackets'
        });
      }
    });
  } // get call


  async get(uri, params) {
    return await this.instance.get(uri, {
      params
    });
  } // delete call


  async delete(uri, params) {
    return await this.instance.delete(uri, {
      params
    });
  } // head call


  async head(uri, params) {
    return await this.instance.head(uri, {
      params
    });
  } // options call


  async option(uri, params) {
    return await this.instance.options(uri, {
      params
    });
  } // post call


  async post(uri, data, config) {
    return await this.instance.post(uri, data, config);
  } // put call


  async put(uri, data, config) {
    return await this.instance.put(uri, data, config);
  } // patch call


  async patch(uri, data, config) {
    return await this.instance.patch(uri, data, config);
  }

}

/* harmony default export */ var api = (API);
;// CONCATENATED MODULE: ./service/utils/index.js

// EXTERNAL MODULE: ./service/config.js
var config = __webpack_require__(1180);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./service/SculptureAPI.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ServiceAPI extends api {
  constructor(debug = false, working = "local") {
    // Singleton Pattern
    if (ServiceAPI._instance) {
      return ServiceAPI._instance;
    }

    super({
      url: (config_default()).local.url,
      headers: _objectSpread({}, (config_default()).local.headers)
    });
    ServiceAPI._instance = this;
    ServiceAPI.debug = debug; // Core logic

    this.updateHeaders = this.updateHeaders.bind(this);
    this.addHeaders = this.addHeaders.bind(this);
  }

  async get(uri, params) {
    try {
      let res = await super.get(uri, params);
      return res;
    } catch (e) {
      ServiceAPI.handleApiError(e);
      return null;
    }
  }

  async post(uri, data, options) {
    try {
      let res = await super.post(uri, data, options);
      return res;
    } catch (e) {
      ServiceAPI.handleApiError(e);
      return null;
    }
  }

  async put(uri, data, options) {
    try {
      let res = await super.put(uri, data, options);
      return res;
    } catch (e) {
      ServiceAPI.handleApiError(e);
      return null;
    }
  }

  async delete(url, options) {
    try {
      let res = await super.delete(url, options);
      return res;
    } catch (e) {
      ServiceAPI.handleApiError(e);
      return null;
    }
  }

  updateHeaders(headers = {}) {
    console.log(this.instance.defaults.headers.common); // purge existing headers in axios instance - idk if it works

    this.instance.defaults.headers.common = {};
    Object.keys(headers).forEach(header => {
      this.instance.defaults.headers.common[header] = headers[header];
    });
  }

  addHeaders(headers = {}) {
    console.log(this.instance.defaults.headers.common); // purge existing headers in axios instance - idk if it works

    this.instance.defaults.headers.common = _objectSpread({}, this.instance.defaults.headers);
    Object.keys(headers).forEach(header => {
      this.instance.defaults.headers.common[header] = headers[header];
    });
  }

  removeHeader(toRemoveHeader) {
    console.log(this.instance.defaults.headers.common); // purge existing headers in axios instance - idk if it works

    const headers = _objectSpread({}, this.instance.defaults.headers);

    this.instance.defaults.headers.common = {};
    Object.keys(headers).forEach(header => {
      if (toRemoveHeader.localeCompare(header) !== 0) {
        this.instance.defaults.headers.common[header] = headers[header];
      }
    });
  }

  static handleApiError(err) {
    // handle network errors on a global level
    if (ServiceAPI.debug) {
      console.log("Service API : ", err);
    }
  }

}

/* harmony default export */ var SculptureAPI = (ServiceAPI);
;// CONCATENATED MODULE: ./service/ArticleService.js
function ArticleService_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ArticleService_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ArticleService_ownKeys(Object(source), true).forEach(function (key) { ArticleService_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ArticleService_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ArticleService_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const sculptureAPI = new SculptureAPI();

class ArticleService {
  constructor(debug = false) {
    if (this.constructor === ArticleService) {
      throw Error("Abstract classes can't be instantiated.");
    }

    ArticleService.cache = {};
    ArticleService.debug = debug;
  }

  static handleErrors(err) {
    if (ArticleService.debug) {
      console.log("Data: ", err);
    }

    return null;
  }

}

ArticleService_defineProperty(ArticleService, "getArticleList", async (page = 1, PAGE_SIZE = 5) => {
  const ORDER_BY = "updatedAt";

  try {
    // console.log("[ArticleService | getArticleList] get all articles. Params: ", page, PAGE_SIZE, ORDER_BY)
    const response = await sculptureAPI.get(`/entity/articles?page=${page}&size=${PAGE_SIZE}&orderBy=${ORDER_BY}&isP=true`);

    if (response && response.data && response.data.status) {
      // console.log("[ArticleService | getArticleList] get all articles | response: ", response.data)
      return [...response.data.body];
    }

    return [];
  } catch (e) {
    return [];
  }
});

ArticleService_defineProperty(ArticleService, "cache", {});

ArticleService_defineProperty(ArticleService, "getMetaData", async () => {
  const PAGE_SIZE = 5; // if(ArticleService.cache.meta) return cache.meta

  try {
    // console.log("[ArticleService | getMetaData] get articles meta data.", ArticleService.cache)
    const response = await sculptureAPI.get(`/entity/articles/meta`);

    if (response && response.data && response.data.status) {
      // console.log("[ArticleService | getMetaData] get articles meta data | response: ", response.data)
      const start = 1;
      const end = Math.ceil(response.data.body.count / PAGE_SIZE);
      const data = {
        start,
        end
      }; // ArticleService.cache.meta = data

      return data;
    }

    return null;
  } catch (e) {
    return null;
  }
});

ArticleService_defineProperty(ArticleService, "getArticleDetails", async id => {
  try {
    console.log("[ArticleService | getArticleDetails] Get artice details. Params: ", id);
    const response = await sculptureAPI.get(`/entity/article/${id}`); // console.log("[ArticleService | getArticleDetails] Get artice details | response: ", response)

    console.log("[ArticleService | getArticleDetails] Get artice details ");

    if (response && response.data && response.data.status) {
      return ArticleService_objectSpread({}, response.data.body);
    }

    return {};
  } catch (e) {
    return null;
  }
});

ArticleService_defineProperty(ArticleService, "errorBlock", async (func, ...params) => {
  try {
    return await func(...params);
  } catch (e) {
    console.log(e);
    return ArticleService.handleErrors(e);
  }
});

/* harmony default export */ var service_ArticleService = (ArticleService);

/***/ }),

/***/ 1180:
/***/ (function(module) {

module.exports = {
  "local": {
    "url": "http://localhost:8000/api/v1",
    "headers": {//   "token": "token_is_me",
      //   "Access-Control-Expose-Headers": "Links",
      //   "Host": "http://localhost:3000/"
    }
  }
};

/***/ })

};
;