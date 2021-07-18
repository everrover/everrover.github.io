import {articles as db} from '../firebase.js'

async function getArticleList(req, res) {
  const {page, size, orderBy, isP} = req
  LOG.info("[getArticleList] Req rcv: ", page, size, orderBy, isP)
  let results = []
  let response = await db.orderBy(orderBy? orderBy: "updatedAt").limit(size*3)
  while (page-->1) {
    const offset = await response.get().then(docSnap=>docSnap.docs[docSnap.docs.length-1])
    response = await db.orderBy(orderBy? orderBy: "updatedAt").startAfter(offset).limit(size)
  }
  await response.get().then(snap=>snap.forEach(doc=>{
    const data = doc.data()
    if(isP) {
      if(doc && data.isPublished) results.push({id: doc.id, ...data})
    }else{
      results.push({id: doc.id, ...data})
    }
  }))
  LOG.info("[getArticleList] Doc rcv for slug: ", results)
  results = results.map(doc=>clean({...doc, banner: null, contentSource: null, content: null, createdAt: null, updatedAt: null}))
  LOG.info("[getArticleList] Response rcv. documents: ", results)
  return results
}

export default getArticleList
