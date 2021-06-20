import Head from 'next/head'
import PropTypes from 'prop-types'

function HeadBox(props) {
  return (
    <Head>
      
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      
      <meta charset="utf-8" />
      <link rel="icon" href="/er-logo-svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>
      <link href="/fontawesome/css/all.css" rel="stylesheet"/>
      <title>Everrover.com | Home</title> 
    </Head>
  )
}

HeadBox.propTypes = {

}

export default HeadBox

