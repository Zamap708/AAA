import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Voting from './components/Voting'
import Footer from './components/Footer'
import Nominees from './components/Nominees'
import News from './components/News'

export default function Home() {
  return (
    <div className='flex flex-col'>
      {/* <Navbar /> */}
      <Hero />
      <Voting />
      <Nominees />
      <News />
      {/* <Footer /> */}
    </div>
  )
}
