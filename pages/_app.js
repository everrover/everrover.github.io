import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import {IconLink, NavLink, Logo, HeadBox} from '../components'
import { Footer } from '../containers'


function MyApp({ Component, pageProps }) {
  const [banner, setBanner] = useState({link: '/banner.png', title: "", subtitle: ""})
  return <div className="main-body flex flex-col justify-between">
    <HeadBox/>
    <div className="mb-4 header border-b border-green-400 border-opacity-25">
      <nav className="sticky navbar top-0">
        <div className="nav-block ml-4">
          <Link href="/">
            <div className="link"><Logo/></div>
          </Link>
        </div>
        <div className="nav-block">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/archive/1">Archive</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
      {banner && banner.link? <div className="banner top-0"><img src={banner.link} alt="Banner" className="banner_img"/></div>: null}
      {banner && banner.link? <div className="banner-overlay top-0 h-full w-full flex flex-col items-center justify-center bg-black bg-opacity-70">
        <div className='flex my-4 py-2 border-b-4 border-green-400 border-opacity-40'>
          <Logo size="text-5xl"/>
        </div>
        <div className="my-2 mx-36 text-center text-xl text-green-400 font-medium">
          Exploring web-development and technology.
        </div>
      </div>: null}
    </div>

    <div className="2xl:mx-96 xl:mx-48 md:mx-32 sm:mx-16 mx-2 md:py-16 py-2">
      <Component {...pageProps}/>
    </div>
    <Footer></Footer>
  </div>
}

export default MyApp
