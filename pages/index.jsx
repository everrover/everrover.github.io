import PropTypes from 'prop-types'
import {PostInfo} from '../components'

function Home(props) {
  const { articles } = props
  return (
    <div className="w-full border bg-black bg-opacity-75 border-green-400 border-opacity-20 px-16 py-4">
      {
        articles && articles.length>0?
        articles.map(article=><div className="post-info-block " key={article.slug} ><PostInfo slug={article.slug}  title={article.title} subtitle={article.subtitle} date={article.date} tags={article.tags} /></div>)
        :null
      }
    </div>
  )
}

Home.propTypes = {

}

export async function getStaticProps(context) {
  return {
    props: {
      articles: [
        {title: "Graph databases are awesome!", subtitle: "This'll (or may) change the world", slug: "graph-db-awesome", date: Date.now(), tags: ["IT", "Graph database", "Graph"]},
        {title: "Graph databases are awesome!", subtitle: "This'll (or may) change the world", slug: "graph-db-awesome", date: Date.now(), tags: ["IT", "Graph database", "Graph"]},
        {title: "Graph databases are awesome!", subtitle: "This'll (or may) change the world", slug: "graph-db-awesome", date: Date.now(), tags: ["IT", "Graph database", "Graph"]},
        {title: "Graph databases are awesome!", subtitle: "This'll (or may) change the world", slug: "graph-db-awesome", date: Date.now(), tags: ["IT", "Graph database", "Graph"]},
        {title: "Trial and errors are fundamental", subtitle: "T & E", slug: "trial-and-error", date: Date.now(), tags: ["Chewbacca", "Chemistry"]},
        {title: "Trial and errors are fundamental", subtitle: "T & E", slug: "trial-and-error", date: Date.now(), tags: ["Chewbacca", "Chemistry"]},
        {title: "Trial and errors are fundamental", subtitle: "T & E", slug: "trial-and-error", date: Date.now(), tags: ["Chewbacca", "Chemistry"]},
      ]
    }, // will be passed to the page component as props
  }
}

export default Home

