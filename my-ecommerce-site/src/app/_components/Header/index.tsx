/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Link from 'next/link'
// search bar
import SearchBar from '../../components/SearchBar'

import type { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import { Gutter } from '../Gutter'
import { HeaderNav } from './Nav'

import classes from './index.module.scss'
import '../../styles/global.css'

//import logo from '../../images/3b.svg'
import logo from '../../images/3b.svg'

export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  return (
    <>
      {/* <div className="topBlock">
        <a>test</a>
      </div> */}
      <header className={classes.header}>
        <div className={classes['header-top']}>
          <Gutter className={classes.wrap}>
            <div className={classes['header-top-content']}>
              <span>Susisiekite : +370 682 06209</span>
              <div className={classes['header-top-links']}>
                {/* <span>prekybos vietos</span> */}
                <Link href="/login">
                  {' '}
                  <span>Prekybos vietos</span>
                </Link>
                {/* <Link href="/login">Login</Link>
                <Link href="/register">Register</Link> */}
              </div>
            </div>
          </Gutter>
        </div>
      </header>
      {/*  */}
      <header className={classes.header}>
        <Gutter className={classes.wrap}>
          <Link href="/">
            {/* Cannot use the `<picture>` element here with `srcSet`
                This is because the theme is able to be overridden by the user
                And so `@media (prefers-color-scheme: dark)` will not work
                Instead, we just use CSS to invert the color via `filter: invert(1)` based on `[data-theme="dark"]`
              */}
            <img
              className={classes.logo}
              alt="Payload Logo"
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
              // src="https://b3group.lt/image/cache/catalog/Group%207732-333x329.png.webp"
            />
          </Link>
          {/* <SearchBar /> */}
          {/* seach bar */}
          {/* <h1>Welcome to Our eShop</h1> */}
          {/* <SearchBar /> */}
          {/* seach bar */}
          <HeaderNav header={header} />
          <MenuBar /> {/* Add the MenuBar component here */}
        </Gutter>
        <div className="bg-red-500 p-4">This should have a red background and padding.</div>
      </header>
    </>
  )
}
const MenuBar: React.FC = () => {
  return (
    <nav className="flex space-x-4">
      <Link href="/" passHref>
        <span className="text-gray-700 hover:text-blue-500">Home</span>
      </Link>
      <Link href="/shop" passHref>
        <span className="text-gray-700 hover:text-blue-500">Shop</span>
      </Link>
      <Link href="/about" passHref>
        <span className="text-gray-700 hover:text-blue-500">About</span>
      </Link>
      <Link href="/contact" passHref>
        <span className="text-gray-700 hover:text-blue-500">Contact</span>
      </Link>
    </nav>
  )
}
