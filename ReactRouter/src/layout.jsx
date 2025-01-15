import React from 'react'
import Footer from './Components/Footer/footer'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header/header'

function Layout() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout
