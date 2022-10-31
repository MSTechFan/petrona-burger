import React from 'react'
import FooterBanner from '../components/FooterBanner'
import NavBar from '../components/NavBar'
import Main from '../layouts/Main'

const Home = () => {
  return (
    <div className='page-container'>
        <div className='content-wrap'>
          <NavBar />
          <Main />
        </div>
        <FooterBanner />
    </div>
        
  )
}

export default Home