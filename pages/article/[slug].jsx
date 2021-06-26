import { promises as fs } from 'fs'
// import PropTypes from 'prop-types'
import { ArticleMDBlock } from '../../containers'
import ArticleService from '../../service/ArticleService'

function ArticlePage(props) {
  const { article } = props
  return (
    <div className="w-full border bg-black bg-opacity-75 border-green-400 border-opacity-20 px-16 py-4">
      <div><ArticleMDBlock>{article}</ArticleMDBlock></div>
    </div>
  )
}

ArticlePage.propTypes = {

}

export async function getStaticProps(context) {
  const {params} = context
  console.log(params)
  const articleDetails = await ArticleService.getArticleDetails(params.slug)
  console.log()
  // const filePath = path.join(process.cwd(), 'Floyds_algorithm.md')
  const fc = await fs.readFile("public/Floyds-algorithm.md", 'utf8')
  console.log(params)
  return {
    props: {
      article: articleDetails.content
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths(){
  const articles = await ArticleService.getArticleList(1, 100)
  return{ 
    paths: [
      ...articles.map(article=>({params: { slug: article.id }}))
    ],
    fallback: true
  }
}

export default ArticlePage

