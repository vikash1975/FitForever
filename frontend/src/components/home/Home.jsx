import React from 'react'
import Hero from './Hero'
import Section from './Section'
import About from './About'
import Programs from './Programs'
import Pricing from './Pricing'
import Footer from './footer'
import Navbar from './Navbar'
import AboutPrograms from '../../programs/AboutPrograms'


function Home() {
  return (
    <div>
      <Navbar />
        <Hero />
        <Section />
        <About />
        <AboutPrograms />
        <Pricing />
        <Footer />
    </div>
  )
}

export default Home