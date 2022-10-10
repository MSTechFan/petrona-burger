import React from 'react'
import FooterBanner from '../components/FooterBanner'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import CarouselItem from '../components/CarouselItem'

const Home = () => {
  return (
    <div className='container-fluid'>
        <NavBar />
        <CarouselItem />
        <Card />
        <Card />
        <Card />
        <Card />
        <FooterBanner />
    </div>
        
  )
}

export default Home