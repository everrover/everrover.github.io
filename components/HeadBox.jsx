import Head from 'next/head'
import PropTypes from 'prop-types'
import { useAppContext } from '../Context'


function HeadBox(props) {
  const {state} = useAppContext()
  const {title} = state
  return (
    <Head>
      
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link rel="icon" href="/logo.svg" />
      {/* <link rel="icon" href="/er-logo-svg" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>
      <link href="/fontawesome/css/all.css" rel="stylesheet"/>
      <title>Everrover.com | {title? title: "Home"}</title> 
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
    </Head>
  )
}

HeadBox.propTypes = {

}

export default HeadBox

