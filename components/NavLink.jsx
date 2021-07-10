import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import styles from '../styles/components/NavLink.module.scss'
function NavLink(props) {
  const router = useRouter()
  const {to="#", setShowNav=()=>{}} = props
  return (
    <button className={styles["nav-element-link"]} onClick={e=>{
      e.preventDefault()
      router.push(to)
      setShowNav(false)
    }}>
      {props.children}
    </button>
  )
}

NavLink.propTypes = {

}

export default NavLink

