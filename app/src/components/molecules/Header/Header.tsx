import React, { FC } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss';

export const Header: FC = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <header className={styles.content}>
        <h1 className={styles.title}>GraphQL practice with NextJS</h1>
        <nav className={styles.navagation}>
          <Link href='/' >
            <a className={styles.linkPage}>Home</a>
          </Link>
          <Link href='/about'>
            <a className={styles.linkPage}>About</a>
          </Link>
        </nav>
      </header>
    </div>
  )
}