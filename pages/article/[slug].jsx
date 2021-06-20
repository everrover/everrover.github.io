import PropTypes from 'prop-types'
import {PostInfo} from '../../components'

function ArticlePage(props) {
  const { articles } = props
  return (
    <div className="w-full border bg-black bg-opacity-75 border-green-400 border-opacity-20 px-16 py-4">
      {
        articles && articles.length>0?
        articles.map(article=><div className="post-info-block " key={article.slug} ><PostInfo slug={article.slug}  title={article.title} subtitle={article.subtitle} date={article.date} /></div>)
        :null
      }
    </div>
  )
}

ArticlePage.propTypes = {

}

export async function getStaticProps(context) {
  const {params} = context
  // process.cwd()
  console.log(params)
  return {
    props: {
      // article: "",
      // title: "",
      // subtitle: "",
      // tags: ["", "", ""]


    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths(){
  return{ 
    paths: [
      { params: { slug: "graph-db-awesome" } },
      { params: { slug: 'trial-and-error' } }
    ],
    fallback: true
  }
}

export default ArticlePage

