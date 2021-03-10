import React, { FC } from 'react'
import Link from 'next/link'

export const Header: FC = (): JSX.Element => {
  return (
    <header>
      <Link href='/'>
        <p>Home</p>
      </Link>
      <Link href='/about'>
        <p>About</p>
      </Link>
    </header>
  )
}