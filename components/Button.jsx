import React from 'react'
// import PropTypes from 'prop-types'

function Button(props) {
  const {action, disabled=false} = props
  return (
    <button className={`${disabled?"bg-gray-600 cursor-not-allowed" :"bg-green-400 hover:bg-green-600"} text-black font-medium uppercase text-2xl rounded-sm px-4 py-2`} disabled={disabled} onClick={e=>{
      e.preventDefault()
      action()
    }}>
      {props.children}
    </button>
  )
}

Button.propTypes = {

}

export default Button

