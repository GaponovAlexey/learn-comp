import type { NextPage } from 'next'
import Head from 'next/head'
import s from '../../styles/Home.module.css'

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

      <div className='bg-gradient-to-r from-blue-200 to-blue-500 rounded-md p-8 -m-2'>
        <h1 className='text-3xl font-bold mb-4 '>subscribe me</h1>
        <form action='' className='flex text-lg w-2/3'>
          <input
            type='text'
            className='border-2 border-blue-400 rounded-md placeholder-blue-400 px-4 py-2 m-2 w-2/5'
            placeholder='Your name'
          />
          <input
            type='email'
            className='border-2 border-blue-400 rounded-md placeholder-blue-400 px-4 py-2 m-2 w-2/5'
            placeholder='email'
          />
          <button
            className='border-2 border-blue-400 rounded-md bg-blue-400 placeholder-blue-400 px-4 py-2 m-2 w-1/5'
            type='submit'
          >
            subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
