import React from 'react'
import { Helmet } from "react-helmet";

const Helmets = ( { helmet}) => {

  return (
    <>
       <Helmet>
        <meta charSet="utf-8" />
        <title> Siddique | {helmet} </title>
        <link
          rel="icon"
          href="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
        />
      </Helmet>
    </>
  )
}

export default Helmets
