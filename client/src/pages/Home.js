import React from 'react'
import FooterBanner from '../components/FooterBanner'
import NavBar from '../components/NavBar'
import Main from '../layouts/Main'

const Home = () => {
  return (
    <div className='container-fluid'>
        <NavBar />
        <Main />
        <FooterBanner />
    </div>
        
  )
}

export default Home