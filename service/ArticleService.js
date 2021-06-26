import SculptureAPI from './SculptureAPI.js'

const sculptureAPI = new SculptureAPI()

class ArticleService{
  constructor (debug=false) {
    if (this.constructor === ArticleService) {
      throw Error("Abstract classes can't be instantiated.")
    }
    ArticleService.cache = {}
    ArticleService.debug = debug
  }
  
  static getArticleList = async (page=1, PAGE_SIZE = 5) => { 
    const ORDER_BY = "updatedAt"
    try{
      // console.log("[ArticleService | getArticleList] get all articles. Params: ", page, PAGE_SIZE, ORDER_BY)
      const response = await sculptureAPI.get(`/entity/articles?page=${page}&size=${PAGE_SIZE}&orderBy=${ORDER_BY}`)
      if(response && response.data && response.data.status){
        // console.log("[ArticleService | getArticleList] get all articles | response: ", response.data)
        return [...response.data.body]
      }
      return []
    }catch(e){
      return []
    } 
  }

  static cache = {}

  static getMetaData = async () => {
    const PAGE_SIZE = 5
    // if(ArticleService.cache.meta) return cache.meta
    try{
      // console.log("[ArticleService | getMetaData] get articles meta data.", ArticleService.cache)
      const response = await sculptureAPI.get(`/entity/articles/meta`)
      if(response && response.data && response.data.status){
        // console.log("[ArticleService | getMetaData] get articles meta data | response: ", response.data)
        const start = 1
        const end = Math.ceil(response.data.body.count/PAGE_SIZE)
        const data = {start, end}
        // ArticleService.cache.meta = data
        return data 
      }
      return null
    }catch(e){
      return null
    } 
  }
  
  static getArticleDetails = async (id) => {

    try{
      console.log("[ArticleService | getArticleDetails] Get artice details. Params: ", id)
      const response = await sculptureAPI.get(`/entity/article/${id}`)
      // console.log("[ArticleService | getArticleDetails] Get artice details | response: ", response)
      console.log("[ArticleService | getArticleDetails] Get artice details ")
      if(response && response.data && response.data.status){
        return {...response.data.body}
      }
      return {}
    }catch(e){
      return null
    } 
  }

  static errorBlock = async (func, ...params) => {
    try{
      return await func(...params)
    }catch(e){
      console.log(e)
      return this.handleErrors(e)
    }
  }

  static handleErrors(err){

    if(ArticleService.debug){
      console.log("Data: ", err)
    }
    return null
  }
}

export default ArticleService