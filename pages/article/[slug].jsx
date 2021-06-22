import { promises as fs } from 'fs'
// import PropTypes from 'prop-types'
import { ArticleMDBlock } from '../../containers'

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
  // const filePath = path.join(process.cwd(), 'Floyds_algorithm.md')
  const fc = await fs.readFile("public/Floyds-algorithm.md", 'utf8')
  // console.log(fc)
  return {
    props: {
      article: fc
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

