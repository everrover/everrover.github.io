import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import {IconLink, NavLink, Logo} from '../components'


function MyApp({ Component, pageProps }) {
  const [banner, setBanner] = useState({link: '/banner.png', title: "", subtitle: ""})
  return <div className="main-body flex flex-col justify-between">
    <Head>
      <link href="/fontawesome/css/all.css" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>
    </Head>
    <div className="mb-4 header border-b border-green-400 border-opacity-25">
      <nav className="sticky navbar top-0">
        <div className="nav-block">
          <Link href="/">
            <Logo/>
          </Link>
        </div>
        <div className="nav-block">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/archive">Archive</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
      {banner && banner.link? <div className="banner top-0"><img src={banner.link} alt="Banner"/></div>: null}
      {banner && banner.link? <div className="banner-overlay top-0 h-full w-full flex flex-col items-center justify-center bg-black bg-opacity-40">
        <div className='flex my-4 py-2 border-b-4 border-green-400 border-opacity-40'>
          <Logo size="text-5xl"/>
        </div>
        <div className="my-2 mx-36 text-center text-xl text-green-400 font-semibold">What you are looking at is a presentation of my thoughts, ideas and work w.r.t. DSA and web development.</div>
      </div>: null}
    </div>

    <Component {...pageProps} setBanner={setBanner}/>
    
    <footer className="bg-black border-t border-green-400 border-opacity-25 flex flex-col items-center justify-center mt-4 ">
      <div className="mt-8 mb-2 flex items-center justify-center w-2/5">
        <IconLink icon='paper-plane' brand={false}/>
        <IconLink icon='github'/>
        <IconLink icon='linkedin'/>
        <IconLink icon='twitter'/>
      </div>
      <div className="flex items-center text-sm mx-3 mb-8 mt-2">
        <div className="">Created using nextJS, reactJS and nodeJS and by yours truly,&nbsp;</div>
        <Logo size="text-base"/>
      </div>
    </footer>
  </div>
}

export default MyApp
