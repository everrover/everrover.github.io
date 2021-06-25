import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import {IconLink, NavLink, Logo, HeadBox, Button} from '../components'
import { Footer } from '../containers'


function MyApp({ Component, pageProps }) {
  const [banner, setBanner] = useState({link: '/banner.png', title: "", subtitle: ""})
  const [showNav, setShowNav] = useState(false)
  return <div className="main-body flex flex-col justify-between" style={{scroll: showNav? "no": null}}>
    <HeadBox/>
    <div className="mb-4 header border-b border-green-400 border-opacity-25">
      <nav className="sticky navbar top-0">
        <div className="nav-block ml-4">
          <Link href="/">
            <a><Logo/></a>
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
      {banner && banner.link? <div className="banner top-0"><img src={banner.link} alt="Banner" className="banner_img"/></div>: null}
      {banner && banner.link? <div className="banner-overlay top-0 h-full w-full flex flex-col items-center justify-center bg-black bg-opacity-70">
        <div className='flex my-4 py-2 md:border-b-4 border-b-2 border-green-400 border-opacity-40'>
          <Logo size="md:text-5xl text-3xl"/>
        </div>
        <div className="my-2 mx-4 sm:mx-12 md:mx-36 text-center text-lg md:text-xl text-green-400 font-normal">
          Exploring web-development and technology.
        </div>
      </div>: null}
    </div>
    {
      showNav?
      <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-95 z-50">
        <div className="fixed right-0 z-40">
          <button className="px-4 py-2" onClick={e=>{e.preventDefault(); setShowNav(!showNav)}}>
            <i className="fa fa-times text-4xl md:text-5xl hover:text-green-400"/>
          </button>
        </div>
        <div className="h-full flex flex-col justify-center items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/archive/1">Archive</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>: null
    }
    <div className="2xl:mx-96 xl:mx-48 md:mx-32 sm:mx-16 mx-0 md:py-16 py-2">
      <Component {...pageProps}/>
    </div>
    <Footer></Footer>
  </div>
}

export default MyApp
