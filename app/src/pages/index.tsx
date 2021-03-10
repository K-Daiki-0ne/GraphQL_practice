import Head from 'next/head'
import { NextPage } from 'next';
import { Header } from '@src/components/molecules'
import styles from '../styles/Home.module.scss'

const Home:NextPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js GraphQL practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <p>Hello GraphQL</p>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home