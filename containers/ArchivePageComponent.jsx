import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { Pagination, PostInfo } from '../components'
import { useAppContext } from '../Context'

function ArchivePageComponent(props) {
  const { content, title, punlishedAt, subtitle, banner, tags=[], category=null } = props
  const context = useAppContext()
  useEffect(()=>{
    context.dispatch({
      title: "Archive", banner: "/archive.jpeg", subtitle: "Enjoy the ride via mannual search only. Pagination coming soon.", type: "archive-page-visit", pageType: 'archive'
    })
  }, [])
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

ArchivePageComponent.propTypes = {

}

export default ArchivePageComponent

