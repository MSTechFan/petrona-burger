import React from 'react'
import CarouselItem from '../components/CarouselItem'
import Card from '../components/Card'

const Main = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
          <CarouselItem />
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-3'>
            <Card />
          </div>
          <div className='col-md-6 col-lg-3'>
            <Card />
          </div>
          <div className='col-md-6 col-lg-3'>
            <Card />
          </div>
          <div className='col-md-6 col-lg-3'>
            <Card />
          </div>
        </div>
    </div>
  )
}

export default Main