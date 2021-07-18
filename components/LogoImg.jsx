/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Logo(props) {
  const {size="h-20 w-20"} = props
  return (
    <div className={`${size} m-auto text-center mr-2`}>
      <img src="/logo.svg" alt="logo" title="Everrover" layout="responsive" loading="eager"/>
    </div>
  )
}
