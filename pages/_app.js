import '../styles/globals.scss'
import '../styles/tailwind.scss'
import '../styles/combined_classes.scss'
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
        <div className="2xl:mx-96 xl:mx-48 md:mx-32 sm:mx-16 mx-0 md:py-16 py-2">
          <Component {...pageProps}/>
        </div>
        <Footer></Footer>
      </div>
    </ContextProvider>
  )
}

export default MyApp
