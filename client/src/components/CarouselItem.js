import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCombos } from '../features/productSlice'
import _ from 'lodash'


const CarouselItem = () => {
  const [HEIGHT, WIDTH] = ["93vh", "100vw"]
  const combos = useSelector(state => state.product)
  const combosToShow = _.sampleSize(combos.products, 3)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCombos())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <Carousel>
      {combos.loading && <div>Loading ... </div>}
      {!combos.loading && combos.error ? <div>Error: {combos.error}</div> : null}
      {
        !combos.loading && combos.products.length ? (
            combosToShow.map( combo => (
              <Carousel.Item key={combo._id}>
                <Link to='combos'>
                  <img
                    className="d-block"
                    style={{height: HEIGHT, width: WIDTH}}
                    src={combo.imgUrl}
                    alt={combo.name}
                  />
                </Link>
                <Carousel.Caption>
                  <h3>{combo.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )
          )
        ): null}
    </Carousel>
  )
}

export default CarouselItem