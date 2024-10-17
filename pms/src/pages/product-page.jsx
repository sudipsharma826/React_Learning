import React from 'react'
import NavBar from '../components/NavBar'
import CardHolder from '../components/CardHolder'
import Footer from '../components/Footer'

const Productpage = () => {
  return (
    <>
    < NavBar />
    <div className ="flex space-x-7 mt-7">
<CardHolder />
<CardHolder />
</div>
    <Footer />
    </>
  )
}

export default Productpage