import configs from '../firebase.js'
import clean from '../clean.js'

async function getArticleDetails(slug) {
  console.log("[getArticleDetails] Req rcv.: ", slug)
  let response = await configs.articles.where("slug", "==", slug).get()
  response = response.forEach(doc=>({...doc.data()}))
  console.log("[getArticleDetails] Doc rcv for slug: ", response)
  return response
}

export default getArticleDetails
