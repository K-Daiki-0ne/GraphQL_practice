import Head from 'next/head'
import { NextPage } from 'next';
import { Header } from '@src/components/molecules'
import { PostInterface } from '@src/interfaces/post.interface';
import { Post } from '@src/components/templates';
import styles from '../styles/Home.module.scss'


const Home:NextPage = (): JSX.Element => {
  const posts: PostInterface[] = [
    {
      id: "1",
      title: "Post one",
      body: "this is a post one item"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js GraphQL practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Post props={posts} />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home