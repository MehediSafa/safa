import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footers from '../footers/Footers'

const Layout = () => {
  return (
    <div> 
        <Header/>
        <Outlet/>
        <Footers/>
    </div>
  )
}

export default Layout