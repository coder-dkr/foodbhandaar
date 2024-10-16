import React from 'react'
import Navbar from './components/Navbar'
import HeroSlides from './components/HeroSlides'
import Featured from './components/Featured'
import OrderBtn from './components/OrderBtn'
import About from './components/About'
import Cuisine from './components/Cuisine'
import Menu from './components/Menu'
import Booking from './components/Booking'
import Testimonial from './components/Testimonial'
import Rateus from './components/Rateus'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSlides/>
      <Featured/>
      <About/>
      <Cuisine/>
      <OrderBtn/>
      <Menu/>
      <Booking/>
      <Testimonial/>
      <p className='text-center font-black text-8xl opacity-5 italic my-5'>STILL HERE ??</p>
      <Rateus/>
      <Footer/>
    </>
  )
}

export default App
