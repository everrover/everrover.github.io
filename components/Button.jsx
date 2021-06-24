import React from 'react'
// import PropTypes from 'prop-types'

function Button(props) {
  const {action, disabled=false} = props
  return (
    <button className={`${disabled?"bg-gray-600 cursor-not-allowed" :"bg-green-400 hover:bg-green-600"} text-black font-medium uppercase text-lg md:text-2xl rounded-sm md:px-4 px-2 md:py-2 py-1`} disabled={disabled} onClick={e=>{
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

