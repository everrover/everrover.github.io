import Link from 'next/link'
import PropTypes from 'prop-types'

function NavLink(props) {
  const {to="#"} = props
  return (
    <Link href={to}>
      <a className="nav-element-link text-2xl sm:text-3xl md:text-4xl bg-gray-800 px-4 py-2">
        {props.children}
      </a>
    </Link>
  )
}

NavLink.propTypes = {

}

export default NavLink

