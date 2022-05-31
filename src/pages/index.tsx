import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Ubuntu:300,300italic,regular,italic,500,500italic,700,700italic'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Macondo:regular'
          rel='stylesheet'
        />
        <title>test</title>
        <link rel='icon' href='#!' />
      </Head>

      <h1 className='text-red-900 text-2xl'>start</h1>
      <h1 className='text-red-900 text-2xl font-mac'>start</h1>
      <a href='#!'>link</a>
    </div>
  )
}

export default Home
