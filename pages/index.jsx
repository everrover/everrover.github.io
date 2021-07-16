import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
// import Link from 'next/link'
// import PropTypes from 'prop-types'
import {Button, PostInfo} from '../components'
import { useAppContext } from '../Context'
import ArticleService from '../service/ArticleService'
import JSON from '../service/static_content.json'

function Home(props) {
  const { articles } = props
  const context = useAppContext()
  useEffect(()=>{
    context.dispatch({
      type: "home-page-visit", pageType: 'home'
    })
  }, [])
  const router = useRouter()
  return (
    <>
    <div className="w-full border bg-black bg-opacity-75 border-green-400 border-opacity-20 md:px-16 px-4 py-4">
      <div className="text-3xl md:text-5xl font-semibold w-full border-green-400 text-green-500 border-opacity-20 border-b py-3 px-4 text-center">Recent posts</div>
      {
        articles && articles.length>0?
        articles.map(
          article=>
          <div className="post-info-block " key={article.slug} >
            <PostInfo category={article.category} slug={article.slug}  title={article.title} subtitle={article.subtitle} date={article.date} tags={article.tags} />
          </div>
        )
        :null
      }
      <div className="text-5xl font-semibold w-full py-3 px-4 text-center">
        <Button action={()=>router.push("/archive")}>Archive<i className="ml-2 text-black fa fa-arrow-right"></i></Button>
      </div>
    </div>
    <div className="w-full border bg-black border-green-400 border-opacity-20 md:px-16 px-4 py-4 mt-4">
      <div className="text-3xl md:text-5xl font-semibold w-full border-green-400 text-green-500 border-opacity-20 border-b py-3 px-4 text-center">About</div>
      <div className="my-4 mx-6 text-center text-xl">{JSON.home.ABOUT_ME.SECTION_ONE}</div>
      <div className="my-4 mx-6 text-center text-xl bg-gray-500 bg-opacity-20 px-4 py-2">{JSON.home.ABOUT_ME.INTENDED_MISSION}</div>
      <div className="text-5xl font-bold w-full py-3 px-4 text-center">
        <Button action={()=>router.push("https://twitter.com/everrover")}>Let&apos;s meet<i className="ml-2 text-black fa fa-paper-plane"></i></Button>
      </div>
    </div>
    </>
  )
}

Home.propTypes = {

}

export async function getStaticProps(context) {
  const articles = await ArticleService.getArticleList(1)
  console.log(articles)
  return {
    props: {
      articles: articles.map(article=>{return {...article, slug: article.id, tags: article.tags.map(tag=>tag.title), category: article.category? article.category.title: null, date: article.publishedAt? article.publishedAt: null}})
    }, // will be passed to the page component as props
  }
}

export default Home

