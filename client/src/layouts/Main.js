import React from 'react'
import CarouselItem from '../components/CarouselItem'
import Card from '../components/Card'

const Main = () => {
  return (
    <div className='container-fluid'>
        <CarouselItem />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Main