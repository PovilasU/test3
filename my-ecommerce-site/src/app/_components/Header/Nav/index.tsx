'use client'

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'
import SearchBar from '@/app/components/SearchBar'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav
      className={[
        classes.nav,
        // fade the nav in on user load to avoid flash of content and layout shift
        // Vercel also does this in their own website header, see https://vercel.com
        user === undefined && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* <SearchBar /> */}
      {/* <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Iveskite preke kurios ieskote..."
          className={classes.searchInput}
        />
        <button className={classes.searchButton}>
          <i className="lnr lnr-magnifier">S</i>
        </button>
      </div> */}

      <div className={classes.searchContainer}>
        <input type="text" placeholder="Search..." className={classes.searchInput} />
        <button className={classes.searchButton}>
          <i className="lnr lnr-magnifier">O</i>
        </button>
      </div>

      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}

      {user && <Link href="/account">Account</Link>}
      {!user && (
        <React.Fragment>
          <Link href="/login">Prisijungti</Link>
          <Link href="/create-account">Registruotis</Link>
          <Link href="#">Mano Pageidavimai</Link>
          {/* <Link href="#">Palyginti</Link> */}
        </React.Fragment>
      )}
      <CartLink />
    </nav>
  )
}
