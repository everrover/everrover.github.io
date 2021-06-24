import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {Button, Pagination, PostInfo} from '../../components'
import ArticleService from '../../service/ArticleService'

function ArchivePage(props) {
  const { articles, start, end, current } = props
  console.log("page:", props)
  const router = useRouter()
  return (
    <div className="w-full border bg-black bg-opacity-75 border-green-400 border-opacity-20 px-16 py-4">
      <div className="text-5xl font-semibold w-full border-green-400 border-opacity-20 border-b py-3 px-4 text-center">Posts</div>
      {
        articles && articles.length>0?
        articles.map(article=><div className="post-info-block " key={article.slug} ><PostInfo slug={article.slug}  title={article.title} subtitle={article.subtitle} date={article.date} tags={article.tags} /></div>)
        :null
      }
      <div className="text-5xl font-semibold w-full py-3 px-4 text-center">
        <Pagination start={start} end={end} current={parseInt(current)} setPage={(val)=>{router.push(`/archive/${val}`)}}/>
      </div>
    </div>
  )
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
  for(let i=meta.start; i<=meta.end; i++){
    paths.push({params: {pageNumber: i.toString()}})
  }
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}
  
export default ArchivePage

