import React from 'react'
import Image from 'next/image'
// import Logo from '/logo.svg';

export default function Logo(props) {
  const {size="h-20 w-20"} = props
  return (
    <div className={`${size} m-auto text-center mr-2`}>
      <Image src="/logo.svg" alt="logo" title="Everrover" height="64" width="64" layout="responsive" loading="eager"/>
    </div>
  )
}
