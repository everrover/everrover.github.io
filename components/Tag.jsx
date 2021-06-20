import React from 'react'
// import PropTypes from 'prop-types'

function Tag(props) {
  return (
    <div className="tag">
      {props.children}
    </div>
  )
}

Tag.propTypes = {

}

export default Tag

