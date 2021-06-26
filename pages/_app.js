import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import {IconLink, NavLink, Logo, HeadBox, Button} from '../components'
import { Footer, Header } from '../containers'


function MyApp({ Component, pageProps }) {
  return <div className="main-body flex flex-col justify-between" >
    <HeadBox/>
    <Header/>
    <div className="2xl:mx-96 xl:mx-48 md:mx-32 sm:mx-16 mx-0 md:py-16 py-2">
      <Component {...pageProps}/>
    </div>
    <Footer></Footer>
  </div>
}

export default MyApp
