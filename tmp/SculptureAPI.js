import {API} from './utils'
import config from './config'

class ServiceAPI extends API{
  constructor(debug=false, working="local") {

    // Singleton Pattern
    if (ServiceAPI._instance) {
      return ServiceAPI._instance
    }

    super({url: config.local.url, headers: {...config.local.headers}})
    
    ServiceAPI._instance = this
    ServiceAPI.debug = debug

    // Core logic
    this.updateHeaders = this.updateHeaders.bind(this)
    this.addHeaders = this.addHeaders.bind(this)
  }

  async get (uri, params) {
    try {
      let res = await super.get(uri, params)
      return res
    } catch (e) {
      ServiceAPI.handleApiError(e)
      return null
    }
  }

  async post (uri, data, options) {
    try {
      let res = await super.post(uri, data, options)
      return res
    } catch (e) {
      ServiceAPI.handleApiError(e)
      return null
    }
  }

  async put (uri, data, options) {
    try {
      let res = await super.put(uri, data, options)
      return res
    } catch (e) {
      ServiceAPI.handleApiError(e)
      return null
    }
  }

  async delete (url, options) {
    try {
      let res = await super.delete(url, options)
      return res
    } catch (e) {
      ServiceAPI.handleApiError(e)
      return null
    }
  }

  updateHeaders(headers={}){
    console.log(this.instance.defaults.headers.common)
    // purge existing headers in axios instance - idk if it works
    this.instance.defaults.headers.common = {}

    Object.keys(headers).forEach((header)=>{
      this.instance.defaults.headers.common[header] = headers[header]
    })
  }

  addHeaders(headers={}){
    console.log(this.instance.defaults.headers.common)
    // purge existing headers in axios instance - idk if it works
    this.instance.defaults.headers.common = {...this.instance.defaults.headers}

    Object.keys(headers).forEach((header)=>{
      this.instance.defaults.headers.common[header] = headers[header]
    })
  }

  removeHeader(toRemoveHeader){
    console.log(this.instance.defaults.headers.common)
    // purge existing headers in axios instance - idk if it works
    const headers = {...this.instance.defaults.headers}
    this.instance.defaults.headers.common = {}

    Object.keys(headers).forEach((header)=>{
      if(toRemoveHeader.localeCompare(header) !== 0){
        this.instance.defaults.headers.common[header] = headers[header]
      }
    })
  }

  static handleApiError(err){
    // handle network errors on a global level
    if(ServiceAPI.debug){
      console.log("Service API : ", err)
    }
  }
}

export default ServiceAPI