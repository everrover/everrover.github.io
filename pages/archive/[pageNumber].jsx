import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import {Button, Pagination, PostInfo} from '../../components'
import ArticleService from '../../service/ArticleService'
import { ArchivePageComponent } from '../../containers'

function ArchivePage(props) {
  return (<ArchivePageComponent {...props}/>)
}

ArchivePage.propTypes = {

}

export async function getStaticProps(context) {
  const {pageNumber} = context.params
  const articles = await ArticleService.getArticleList(pageNumber)
  const {start, end} = await ArticleService.getMetaData()
  return {
    props: {
      articles: articles.map(article=>({...article, slug: article.id, tags: article.tags.map(tag=>tag.title), category: article.category.title, date: article.publishedAt? article.publishedAt: null})),
      start,
      end,
      current: pageNumber
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const meta = await ArticleService.getMetaData()
  const paths = []
  for(let i=(meta.start === 1? 2: meta.start); i<=meta.end; i++){
    paths.push({params: {pageNumber: i.toString()}})
  }
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}
  
export default ArchivePage

