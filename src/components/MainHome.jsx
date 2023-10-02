import React from 'react'

import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import HomePage from './Home/HomePage'
import UpcomigEvents from './Events/UpcomigEvents'
import Footer from './footer/Footer'

const MainHome = () => {
  return (
    <>
    <NavBar/>

    <Home/>

    <UpcomigEvents/>

    <HomePage/>

    <Footer/>
    </>
  )
}

export default MainHome