import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/pages/Page404.module.scss'
import {useRouter} from 'next/router'
import { Button, LogoImg, Logo } from '../components'
function NotFound(props) {
  const router = useRouter()
  return (
    <div className={styles.page_404}>
      <div className={styles.page_404_panel}>
        <div className="flex justify-center mt-2 mb-2 border-bo pb-2"><LogoImg size="text-5xl"/><Logo size="text-5xl"/></div>
        <div className="text-center flex items-center my-1"><span className="mr-4 text-7xl text-blue-400">{"404"}</span><i className="text-6xl text-green-400 fa fa-paper-plane"></i></div>
        {/* <div className="text-2xl text-gray-50 my-1">{"Page not found"}</div> */}
        <div className="page-not-found-subtitle mt-2 mb-4 text-gray-50">{"'Guess you flew far-far away."}</div>
        <Button action={()=>router.push("/")}>HOME<i className="ml-2 text-xl text-black fa fa-home"></i></Button>
      </div>
    </div>
  )
}

NotFound.propTypes = {

}

export default NotFound

