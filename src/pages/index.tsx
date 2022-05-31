import type { NextPage } from 'next'
import Head from 'next/head'
import s from '../../styles/Home.module.css'
import { Main } from '../components/Main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>test</title>
        <link rel='icon' href='#!' />
      </Head>
      start
      <Main />
    </div>
  )
}

export default Home
