// import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { ArticleMDBlock } from '../../containers'
import { useAppContext } from '../../Context'
import getArticleDetails from '../../service/api/getArticleDetails.js'
import getArticlesList from '../../service/api/getArticlesList.js'

function ArticlePage(props) {
  const { content, title, punlishedAt, subtitle, banner, tags=[], category=null } = props
  const context = useAppContext()
  useEffect(()=>{
    context.dispatch({
      title, banner, subtitle, type: "article-page-visit", pageType: 'article', punlishedAt, tags: tags.map(tag=>tag.title), category: category? category.title: null
    })
  }, [])
  console.log(context.state, props)
  return (
    <div className="w-full border bg-black bg-opacity-75 border-green-400 border-opacity-50 px-8 py-4">
      <div><ArticleMDBlock>{content}</ArticleMDBlock></div>
    </div>
  )
}

ArticlePage.propTypes = {

}

export async function getStaticProps(context) {
  const {params} = context
  console.log(params)
  const articleDetails = await getArticleDetails(params.slug)
  console.log(params)
  return {
    props: {
      ...articleDetails,
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths(){
  const articles = await getArticlesList(1, 100)
  return{
    paths: [
      ...articles.map(article=>({params: { slug: article.id }}))
    ],
    fallback: false // disabled for export
  }
}

export default ArticlePage

