import dayjs from 'dayjs'
import {useRouter} from 'next/router'
import Tag from './Tag.jsx'
// import PropTypes from 'prop-types'

function PostInfo(props) {
  const {title, subtitle, slug="#", date, tags=[], category} = props
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-start md:px-8 px-2 py-4 bg-opacity-10 ">
      <div className="text-green-100 hover:text-green-400 md:text-4xl text-2xl font-bold my-2 cursor-pointer" onClick={e=>{
        e.preventDefault()
        router.push("/article/"+slug)
      }}>{title}</div>
      <div className="my-1 md:text-2xl text-xl font-thin">{subtitle}</div>
      <div className="my-1 md:text-md text-sm ">Published on {dayjs(date).format("YYYY MMMM, DD")}</div>
      {tags.length>0? 
        <div className="flex flex-wrap items-center">
          {category? <Tag key={category}>{category}</Tag>: null}
          {tags.map(tag=><Tag key={tag}>{tag}</Tag>)}
        </div>: null}
    </div>
  )
}

PostInfo.propTypes = {

}

export default PostInfo

