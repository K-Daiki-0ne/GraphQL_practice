import Head from 'next/head'
import { NextPage } from 'next';
import styles from '../styles/Home.module.css'

const Home:NextPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js GraphQL practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Hello GraphQL</p>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home