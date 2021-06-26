import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

function NavLink(props) {
  const router = useRouter()
  const {to="#", setShowNav=()=>{}} = props
  return (
    <button className="nav-element-link text-2xl sm:text-3xl md:text-4xl bg-gray-800 px-4 py-2" onClick={e=>{
      e.preventDefault()
      router.push(to)
      setShowNav(false)
    }}>
      <a >
        {props.children}
      </a>
    </button>
  )
}

NavLink.propTypes = {

}

export default NavLink

