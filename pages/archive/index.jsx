import dayjs from 'dayjs'

import ArticleService from '../../service/ArticleService'
import { ArchivePageComponent } from '../../containers'

function MainArchivePage(props) {
  return (
    <ArchivePageComponent {...props}/>
  )
}

MainArchivePage.propTypes = {

}

export async function getStaticProps(context) {
  const pageNumber = 1
  const articles = await ArticleService.getArticleList(pageNumber)
  const {start, end} = await ArticleService.getMetaData()
  return {
    props: {
      articles: articles.map(article=>({...article, slug: article.id, tags: article.tags.map(tag=>tag.title), category: article.category? article.category.title: null, date: article.publishedAt? article.publishedAt: null})),
      start,
      end,
      current: pageNumber
    }, // will be passed to the page component as props
  }
}

export default MainArchivePage

