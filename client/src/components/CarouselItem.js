import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { productListAPI } from '../API/fetchAPI'
import _  from 'lodash' 

const CarouselItem = () => {
  const [HEIGHT, WIDTH] = ["93vh", "100vw"]
  const COMBOS = _.sample(productListAPI(), 3)
  console.log(productListAPI())
  return (
    <Carousel>
      <Carousel.Item>
        <Link to='combos'>
          <img
            className="d-block"
            style={{height: HEIGHT, width: WIDTH}}
            src={COMBOS[0].imgUrl}
            alt="First slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>{COMBOS[0].name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="combos">
          <img
            className="d-block"
            style={{height: HEIGHT, width: WIDTH}}
            src={COMBOS[1].imgUrl}
            alt="Second slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>{COMBOS[1].name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="combos">
          <img
            className="d-block"
            style={{height: HEIGHT, width: WIDTH}}
            src={COMBOS[2].imgUrl}
            alt="Third slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>{COMBOS[2].name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselItem