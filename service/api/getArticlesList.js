import configs from '../firebase.js'
import clean from '../clean.js'

const ORDER_BY ='updatedAt'

async function getArticlesList(page, size=100) {
  // console.log("[getArticleList] Req rcv: ", page, size)
  let results = []
  let response = await configs.articles.orderBy(ORDER_BY).limit(size*3)
  while (page-->1) {
    const offset = await response.get().then(docSnap=>docSnap.docs[docSnap.docs.length-1])
    response = await configs.articles.orderBy(ORDER_BY).startAfter(offset).limit(size)
  }
  await response.get().then(snap=>snap.forEach(doc=>{
    const data = doc.data()
    if(doc && data.isPublished) results.push({id: doc.id, ...data})
  }))
  // console.log("[getArticleList] Doc rcv for slug: ", results)
  results = results.map(doc=>clean({...doc, banner: null, contentSource: null, content: null, createdAt: null, updatedAt: null}))
  // console.log("[getArticleList] Response rcv. documents: ", results)
  return results.reverse()
}

export default getArticlesList
