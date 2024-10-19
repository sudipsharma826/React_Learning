import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import CardHolder from '../components/CardHolder'
import GetNotified from '../components/GetNotified'

const HomePage = () => {
  return (
    <>
    < NavBar />
    <HeroSection />
    <h2 className="text-4xl font-extrabold text-center mt-10 text-gray-800 dark:text-white tracking-tight">
  <span className="block text-indigo-600">Products</span>
</h2>
<div className ="flex space-x-7 mt-7">
<CardHolder />
<CardHolder />
< CardHolder />
</div>
< GetNotified />
<Footer />
    </>

  )
}

export default HomePage