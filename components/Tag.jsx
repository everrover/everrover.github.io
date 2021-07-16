import React from 'react'
// import PropTypes from 'prop-types'
import styles from '../styles/components/Tag.module.scss'

function Tag(props) {
  return (
    <div className={styles.tag}>
      {props.children}
    </div>
  )
}

Tag.propTypes = {

}

export default Tag

