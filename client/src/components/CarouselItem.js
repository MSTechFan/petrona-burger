import React from 'react'
import {Carousel} from 'react-bootstrap'

const CarouselItem = () => {
  const [HEIGHT, WIDTH] = ["100vh", "100vw"]
  
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: HEIGHT, width: WIDTH}}
          src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/YHIW6C2CZBHIFGPLWQCFLXGDJI.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: HEIGHT, width: WIDTH}}
          src="https://media-cdn.tripadvisor.com/media/photo-s/1c/68/36/43/carro-chefe-da-casa-criado.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: HEIGHT, width: WIDTH}}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWqjaIbCwgNYN_ihoh4_2AD5LMxt0stshqtlP0c80PLFzsnDfDC_qrYw_XGfyq7-2x8E&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselItem


/* 




*/