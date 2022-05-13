import { useState } from 'react';
import Image from 'next/image';

import Head from 'next/head'
import styles from '../styles/Home.module.scss'
// import LayoutDefault from "../components/LayoutDefault";
import logo from "../public/logo.svg"

import MessagesList from '../components/MessageList';
import AddNewMessage from '../components/AddNewMessage';

import Link from "next/link";

export default function Home() {

  const [reloadData, setReloadData] = useState(false);


  return (
    <>

      <Head>
        <title>NextJS Twitter</title>
        <meta name="description" content="NextJS Twitter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapperLeft}>
        <div>
        <Image className={styles.wrapperLeft__logo} src={logo} width="100px" height="100px" alt="Twitter Logo" />
        <AddNewMessage reloadData={reloadData} setReloadData={setReloadData} />
        </div>
      </div>

      <div className={styles.wrapperRight}>
        <MessagesList reloadData={reloadData} setReloadData={setReloadData} /> 
      </div>

      <Link href="/messages" ><a className={styles.allMessagesBtn}>Vedi tutti i messaggi</a></Link>

    </>
  )
}
