import React from 'react'
// import PropTypes from 'prop-types'
import Image from 'next/image'
import '../styles/components/Tag.module.scss'

function RenderedImage(props) {
  const {src, alt} = props
  return (
    <Image className="tag" objectFit="contain" objectPosition="center" src={src} alt={alt} quality={90} layout="fill"/>
  )
}

RenderedImage.propTypes = {

}

export default RenderedImage

