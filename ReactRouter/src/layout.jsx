import React from 'react'
import Home from './Components/Home/home'
import Footer from './Components/Footer/footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
     <Home/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout
