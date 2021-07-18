import axios from 'axios'
// import applyConverters from 'axios-case-converter'
import Qs from 'qs'
// import http from 'http'
// import https from 'https'

const MS_IN_SEC = 1000
class API{
  // timeout -> seconds
  // uri -> base initial uri to be used
  // headers -> include all headers in obj as key:value pairs
  constructor({url, timeout=30, headers={'accessToken': 'token'}}){
    if(this.constructor === API){
      // this is an abstract class
      throw new Error("Abstract classes can't be instantiated.")
    }

    // const httpAgent = new http.Agent({ keepAlive: true })
    // const httpsAgent = new https.Agent({ keepAlive: true })

    this.instance =  axios.create({
      // httpAgent: httpAgent,
      // httpsAgent: httpsAgent,
      baseURL: url,
      timeout: timeout*MS_IN_SEC,
      headers: headers,
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
      }
    })
  }
  // get call
  async get (uri, params){
    return await this.instance.get(uri, {params})
  }

  // delete call
  async delete (uri, params){
    return await this.instance.delete(uri, {params})
  }

  // head call
  async head (uri, params){
    return await this.instance.head(uri, {params})
  }

  // options call
  async option (uri, params){
    return await this.instance.options(uri, {params})
  }

  // post call
  async post (uri, data, config){
    return await this.instance.post(uri, data, config)
  }

  // put call
  async put (uri, data, config){
    return await this.instance.put(uri, data, config)
  }

  // patch call
  async patch (uri, data, config){
    return await this.instance.patch(uri, data, config)
  }

}

export default API