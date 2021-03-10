import React, { FC } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss';

export const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.sample}>
      <Link href='/'>
        <p>Home</p>
      </Link>
      <Link href='/about'>
        <p>About</p>
      </Link>
    </header>
  )
}