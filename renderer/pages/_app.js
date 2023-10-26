import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Link from 'next/link'
import './globals.css'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>DeepDynamic PCM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
