/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { IconLink, Logo } from '../components'
// import Image from 'next/image'
// import NodeJSImage from '/node_logo.png'
// import ReactJSImage from '/react_logo.png'
// import PropTypes from 'prop_types'
import JSON from '../service/static_content.json'
import styles from '../styles/containers/Footer.module.scss'

const NextLogo = (props) => <img src={'/nextjs_logo.png'} className={styles.footer_nextjs_logo} alt="Next Logo" title="Next.js"/>
const NodeLogo = (props) => <img src={'/node_logo.png'} className={styles.footer_nodejs_logo} alt="Next Logo" title="Next.js"/>
const ReactLogo = (props) => <img src={'/react_logo.png'} className={styles.footer_reactjs_logo} alt="Next Logo" title="Next.js"/>

function Footer(props) {
  return (
    <footer className={styles.footer_block}>
      <div className={styles.footer_icons_section}>
        <IconLink icon='instagram' to={JSON.links.INSTAGRAM}/>
        <IconLink icon='github' to={JSON.links.GITHUB}/>
        <IconLink icon='linkedin' to={JSON.links.LINKEDIN}/>
        <IconLink icon='twitter' to={JSON.links.TWITTER}/>
      </div>
      <div className={styles.footer_message_section}>
        <div className={styles.footer_message}>
          Created using <NextLogo/>,&nbsp;<NodeLogo/> and <ReactLogo/> by yours truly,&nbsp; <Logo size="text_base" inline={true}/>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {

}

export default Footer

