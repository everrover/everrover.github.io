import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {Button, PostInfo} from '../components'
import ArticleService from '../service/ArticleService'

function Home(props) {
  const { articles } = props
  const router = useRouter()
  return (
    <div className="w-full border bg-black bg-opacity-75 border-green-400 border-opacity-20 px-16 py-4">
      <div className="text-5xl font-semibold w-full border-green-400 border-opacity-20 border-b py-3 px-4 text-center">Recent posts</div>
      {
        articles && articles.length>0?
        articles.map(article=><div className="post-info-block " key={article.slug} ><PostInfo slug={article.slug}  title={article.title} subtitle={article.subtitle} date={article.date} tags={article.tags} /></div>)
        :null
      }
      <div className="text-5xl font-semibold w-full py-3 px-4 text-center">
        <Button action={()=>router.push("/archive")}>Archive<i className="ml-2 text-black fa fa-arrow-right"></i></Button>
      </div>
    </div>
  )
}

Home.propTypes = {

}

export async function getStaticProps(context) {
  const articles = await ArticleService.getArticleList(1)
  console.log(articles)
  return {
    props: {
      articles: articles.map(article=>{return {...article, slug: article.id, tags: article.tags.map(tag=>tag.title), date: article.publishedAt}})
    }, // will be passed to the page component as props
  }
}

export default Home

