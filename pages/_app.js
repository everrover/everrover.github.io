import '../styles/globals.scss'
import '../styles/tailwind.scss'
import '../styles/combined_classes.scss'
import "../styles/index.scss"
import {IconLink, NavLink, Logo, HeadBox, Button} from '../components'
import { Footer, Header } from '../containers'
import {ContextProvider} from '../Context.js'

function MyApp(props) {
  const { Component, pageProps} = props

  return(
    <ContextProvider>
      <div className="main-body flex flex-col justify-between" >
        <HeadBox/>
        <Header/>
        <div className="page-content">
          <Component {...pageProps}/>
        </div>
        <Footer></Footer>
      </div>
    </ContextProvider>
  )
}

export default MyApp
