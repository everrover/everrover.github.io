import React from 'react'

export default function Logo(props) {
  const {size = "text-3xl", inline=false} = props
  return (
    <div className={`${inline? "inline-block": "flex items-center"}`}>
      <div className={`${inline? "inline": ""} logo ${size} text-green-400`}>Ever</div>
      <div className={`${inline? "inline": ""} logo ${size} text-blue-400`}>Rover</div>
    </div>
  )
}
