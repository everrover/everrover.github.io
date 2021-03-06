import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
// import Link from 'next/link'
// import PropTypes from 'prop-types'
import {Button, PostInfo} from '../components'
import { useAppContext } from '../Context'
import getArticlesList from '../service/api/getArticlesList.js'
import JSON from '../service/static_content.json'
import styles from '../styles/pages/Home.module.scss'

function Home(props) {
  const { articles } = props
  const context = useAppContext()
  useEffect(()=>{
    context.dispatch({
      type: "home-page-visit", pageType: 'home', banner: JSON.home.BANNER
    })
  }, [JSON.home.BANNER])
  const router = useRouter()
  return (
    <>
    <div className="w-full border-all bg-black bg-opacity-75 md:px-16 px-4 pt-4 pb-12">
      <div className="text-4xl font-semibold w-full text-green-500 border-bo py-3 px-4 text-center">Recent posts</div>
      {
        articles && articles.length>0?
        articles.map(
          article=>
          <div className={styles.post_info_block} key={article.slug} >
            <PostInfo category={article.category} slug={article.slug}  title={article.title} subtitle={article.subtitle} date={article.date} tags={article.tags} />
          </div>
        )
        :null
      }
      {/** after > 5 articles are added - todo
      <div className="text-5xl font-semibold w-full py-3 px-4 text-center">
        <Button action={()=>router.push("/archive")}>Archive<i className="ml-2 text-black fa fa-arrow-right"></i></Button>
      </div> 
      */}
    </div>
    <div className="w-full border-all md:border bg-black md:px-16 px-4 py-4 mt-4">
      <div className="text-4xl font-semibold w-full text-green-500 border-bo py-3 px-4 text-center">About me</div>
      <div className="my-4 mx-6 text-center text-xl">{JSON.home.ABOUT_ME.SECTION_ONE}</div>
      <div className="my-4 mx-6 text-center text-xl bg-gray-500 bg-opacity-20 px-4 py-2 rounded-md">{JSON.home.ABOUT_ME.INTENDED_MISSION}</div>
      <div className="w-full py-3 px-4 text-center">
        <Button action={()=>router.push(JSON.links.TWITTER)}>Let&apos;s meet<i className="ml-2 text-black fa fa-paper-plane"></i></Button>
      </div>
    </div>
    </>
  )
}

Home.propTypes = {

}

export async function getStaticProps(context) {

  console.log("[Home | Articles fetch list] Req rcv!")
  const articles = (await getArticlesList(1, 100)).map(article=>{return {...article, slug: article.id, tags: article.tags.map(tag=>tag.title), category: article.category? article.category.title: null, date: article.publishedAt? article.publishedAt: null}})
  console.log("[Home | Articles fetch list] Res rcv: ", articles)
  return {
    props: {articles}, // will be passed to the page component as props
  }
}

export default Home

