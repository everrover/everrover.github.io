import Link from 'next/link'
import PropTypes from 'prop-types'

function NavLink(props) {
  const {to="#"} = props
  return (
    <Link href={to}>
      <div className="nav-element-link text-xl link">
        {props.children}
      </div>
    </Link>
  )
}

NavLink.propTypes = {

}

export default NavLink

