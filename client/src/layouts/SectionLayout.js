import React from 'react'
import Navbar from '../components/NavBar'
import FooterBanner from '../components/FooterBanner'

const SectionLayout = () => {
  return (
    <div className='container-fluid'>
        <Navbar/>
        <div style={{width: "100vw", height: "100vh", backgroundColor: "red"}}></div>
        <FooterBanner/>
    </div>
  )
}

export default SectionLayout