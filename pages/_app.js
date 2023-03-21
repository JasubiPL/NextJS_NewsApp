import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>NewsApp</title>
      <meta name='description' content='newsapp - the best app to read news'/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>newsapi</header>
    <Component {...pageProps} />
  </>
}
