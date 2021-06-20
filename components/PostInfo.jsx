import dayjs from 'dayjs'
import Link from 'next/link'
import Tag from './Tag'
// import PropTypes from 'prop-types'

function PostInfo(props) {
  const {title, subtitle, slug="#", date, tags=[]} = props
  return (
    <div className="flex flex-col justify-center items-start px-8 py-4 bg-opacity-10 ">
      <Link href={"article/"+slug}><div className="text-green-100 hover:text-green-400 text-4xl font-bold my-2">{title}</div></Link>
      <div className="my-1 text-2xl font-thin">{subtitle}</div>
      <div className="my-1">Published on {dayjs(date).format("YYYY MMMM, DD")}</div>
      {tags.length>0? <div className="flex flex-wrap items-center">{tags.map(tag=><Tag key={tag}>{tag}</Tag>)}</div>: null}
    </div>
  )
}

PostInfo.propTypes = {

}

export default PostInfo

