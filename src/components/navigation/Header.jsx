import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <>
        <header>
                <HeaderMain/>
                <MobileNav/>
        </header>
    </>
  )
}

export default Header