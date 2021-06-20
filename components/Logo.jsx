import React from 'react'

export default function Logo(props) {
  const {size = "text-3xl"} = props
  return (
    <div className="flex items-center">
      <div className={`logo ${size} text-green-400`}>Ever</div>
      <div className={`logo ${size} text-blue-400`}>Rover</div>
    </div>
  )
}
