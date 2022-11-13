import {Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {productListAPI} from '../productListAPI'

const CarouselItem = () => {
  const [HEIGHT, WIDTH] = ["93vh", "100vw"]
  const COMBOS = productListAPI.combos.map(ele => ele)
  return (
    <Carousel>
      <Carousel.Item>
        <Link to='combos'>
          <img
            className="d-block"
            style={{height: HEIGHT, width: WIDTH}}
            src={COMBOS[0].img}
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
            src={COMBOS[1].img}
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
            src={COMBOS[2].img}
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