import { useState } from 'react';

import Head from 'next/head'
import styles from '../styles/Home.module.css'


import MessagesList from '../components/MessageList';
import AddNewMessage from '../components/AddNewMessage';

export default function Home() {

  const [reloadData, setReloadData] = useState(false);


  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Twitter</title>
        <meta name="description" content="NextJS Twitter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <AddNewMessage reloadData={reloadData} setReloadData={setReloadData} />
      <MessagesList reloadData={reloadData} setReloadData={setReloadData} />

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
