import React from 'react'
import { IconLink, Logo } from '../../components'
// import Image from 'next/image'
// import NodeJSImage from '/node_logo.png'
// import ReactJSImage from '/react_logo.png'
// import PropTypes from 'prop-types'
import './Footer.module.scss'

const NextLogo = (props) => <img src={'/nextjs_logo.png'} className="inline bg-gray-100 w-16 h-8 px-1 rounded-sm" alt="Next Logo" title="Next.js"/>
const NodeLogo = (props) => <img src={'/node_logo.png'} className="inline bg-gray-100 inline bg-opacity-10 bg-transparent w-9 h-9 rounded-sm" alt="Next Logo" title="Next.js"/>
const ReactLogo = (props) => <img src={'/react_logo.png'} className="inline bg-gray-300 bg-opacity-10 w-9 h-9 p-1 rounded-sm" alt="Next Logo" title="Next.js"/>
// const NextLogo = (props) => <img src={'/nextjs_logo.png'} className="bg-gray-100 w-16 h-9 p-1 rounded-sm" alt="Next Logo" title="Next.js"/>

function Footer(props) {
  return (
    <footer className="bg-black border-t border-green-400 border-opacity-25 flex flex-col items-center justify-center mt-4 ">
      <div className="mt-8 mb-2 pb-2 flex items-center justify-center w-4/5 sm:w-2/5 border-b border-green-400 border-opacity-50 flex-wrap">
        <IconLink icon='paper-plane' brand={false}/>
        <IconLink icon='github'/>
        <IconLink icon='linkedin'/>
        <IconLink icon='twitter'/>
      </div>
      <div className="justify-center flex items-center md:text-md text-sm md:mx-3 mx-6 mb-8 mt-6 flex-wrap">
        <div className="text-center inline-block">
          Created using <NextLogo/>,&nbsp;<NodeLogo/> and <ReactLogo/> by yours truly,&nbsp; <Logo size="text-base" inline={true}/>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {

}

export default Footer

