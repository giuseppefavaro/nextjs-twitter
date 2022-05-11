import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import MessagesList from '../components/MessageList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Twitter</title>
        <meta name="description" content="NextJS Twitter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <MessagesList />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
