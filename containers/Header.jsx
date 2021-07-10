import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import Image from 'next/image';
import { Logo, LogoImg, NavLink, Tag } from '../components';
import { useAppContext } from '../Context';
import dayjs from 'dayjs';
import styles from '../styles/containers/Header.module.scss';


function Header(props) {
  const [showNav, setShowNav] = useState(false) 
  const context = useAppContext()
  let {title, page, subtitle, banner, pageType="home", publishedAt, tags =[], category} = context.state

  // CSS var params
  let centerSubtitle = true, showPublishedDate = false, showTags = false
  switch(pageType){
    case 'article': 
      title= <div className="text-4xl text-left font-bold text-green-400">{title}</div>
      centerSubtitle = false
      showPublishedDate = true
      showTags = true
      break
    case 'about': break
    case 'archive': 
      title= <div className="text-4xl text-center font-bold text-green-400">{title}</div>
      break
    case 'home': 
      title=<Logo size="text-5xl"/>
      subtitle = "Exploring web-development and technology."
      break
    default: break
  }

  return (
    <>
      <div className="mb-4 header border-b border-green-400 border-opacity-25">
        <nav className="absolute navbar top-0">
          <div className="nav-block ml-4">
            <Link href="/">
              <a className="flex items-center"><LogoImg/></a>
            </Link>
          </div>
          <div className="nav-block mr-3">
            {
              !showNav?
              <button className="px-2 py-1" onClick={e=>{e.preventDefault(); setShowNav(!showNav)}}><i className="fa fa-bars text-3xl hover:text-green-600"/></button>:
              null
            }
          </div>
        </nav>
        {banner ? <div className="banner top-0"><Image src={banner} alt="Banner" className="banner_img" layout="fill" objectPosition="left" objectFit="cover" quality={70}/></div>: null}
        {banner ?
          <div className="banner-overlay">
            <div className={`flex flex-col flex-wrap ${centerSubtitle? "items-center": "items-start header-elements"}`}>
              <div className='flex m-4 py-2 md:border-b-2 border-b border-green-400 border-opacity-40 '>
                {title}
              </div>
              <div className={`my-2 mx-4 ${centerSubtitle? "text-center": "text-left"} text-2xl text-green-600 font-normal`}>
                {subtitle}
              </div>
              {
                showPublishedDate?
                <div className={`my-2 mx-4 italic ${centerSubtitle? "text-center": "text-left"} text-lg text-xl text-green-100 font-light`}>
                  Published by <Logo size="text-lg" inline={true}/> on <strong>{dayjs(publishedAt).format("D MMMM, YYYY, dddd")}</strong>
                </div>
                :null
              }
              {
                showTags>0? 
                <div className="flex flex-wrap items-center mx-4">
                  {category? <Tag key={category}>{category}</Tag>: null}
                  {tags.map(tag=><Tag key={tag}>{tag}</Tag>)}
                </div>: null
              }
            </div>
          </div>
        : null}
      </div>
      {
        showNav?
        <div className={styles.nav_panel}>
          <div className="fixed right-0 z-40">
            <button className="px-4 py-2" onClick={e=>{e.preventDefault(); setShowNav(!showNav)}}>
              <i className="fa fa-times text-5xl hover:text-green-400"/>
            </button>
          </div>
          <div className="h-full flex flex-col justify-center items-center">
            <NavLink setShowNav={setShowNav} to="/">Home</NavLink>
            <NavLink setShowNav={setShowNav} to="/archive">Archive</NavLink>
            <NavLink setShowNav={setShowNav} to="/about">About</NavLink>
          </div>
        </div>: null
      }
    </>
  )
}

Header.propTypes = {

}

export default Header

