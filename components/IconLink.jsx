import PropTypes from 'prop-types'
import Link from 'next/link'

function IconLink(props) {
  const {icon=null, to="#", brand=true} = props
  return icon?(<Link href={to}><div className="icon_link mx-3 my-2 link"><i className={`text-4xl hover:text-green-400 fa${brand? "b": ""} fa-${icon}`}/></div></Link>):null
}

IconLink.propTypes = {

}

export default IconLink

