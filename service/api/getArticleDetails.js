import {articles as db} from '../firebase.js'

export default function getArticleDetails(req, res) {

  const response = await db.where("slug", "==", id).get()
  response.forEach(doc=>match.push(doc.data()))
  if(match.length > 0){
    const data = match[0];
    LOG.info("[getArticle] Doc rcv for slug: ", data, id)
    const content = await FetchService.getArticle(data.contentSource)
    return {status: true, message: "Found article with slug.", body: {...data, content}}
  }
  res.status(200).json({ name: 'John Doe' })
}
