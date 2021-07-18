import configs from '../firebase.js'
const fs = require('fs')

async function getArticleDetails(slug) {
  // console.log("[getArticleDetails] Req rcv.: ", slug)
  let response = (await configs.articles.where("slug", "==", slug).get())
  let result = {}
  response.forEach(doc=>{result = doc.data()})
  // console.log("[getArticleDetails] Res rcv.: ", result)
  const fc = await fs.readFileSync(`service/articles/${result.contentSource}.md`, 'utf8')
  result = {...result, content: fc}
  // console.log("[getArticleDetails] Doc rcv for slug: ", result)
  return result
}

export default getArticleDetails
