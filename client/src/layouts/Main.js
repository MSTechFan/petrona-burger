import React from 'react'
import CarouselItem from '../components/CarouselItem'
import { Cards } from '../components/Cards'

const Main = () => {
  return (
    <div>
        <div className='row'>
          <CarouselItem />
        </div>
        <div className='d-flex flex-row flex-wrap justify-content-evenly' style={{margin: "20px 0"}}>
          {Cards}
        </div>
    </div>
  )
}

export default Main