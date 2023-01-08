import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
const PlateEditor = dynamic(() => import('../components/editor'), {
  ssr: false
})

export default function Index() {
  return (
    <>
      <Head>
        <title>Sell.app - Plate editor</title>
      </Head>
      <div style={{
        width: '75ch',
        margin: '0 auto',
        padding: '1em',
        height: '100vh',
      }}>
        <PlateEditor />
      </div>
    </>
  )
}