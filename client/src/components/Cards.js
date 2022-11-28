import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPromos } from '../features/productSlice'

const Cards = () => {
  const Newfecth = useSelector((state) => state.product)
  const News = Newfecth.products.slice(-4)
  const dispatch = useDispatch()

  console.log(Newfecth.products)

  useEffect(() => {
    dispatch(fetchPromos())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='d-flex flex-row flex-wrap justify-content-evenly' style={{margin: "20px 0"}}>
    {
      News.map(ele => (
        <div className="card" style={{width: "350px", height: "20rem", marginTop: "10px"}} key={ele._id}>
          <img src={ele.imgUrl} style={{width: "100%", height: "220px"}} className="card-img-top" alt={ele.name}/>
          <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <Link to="news" className="btn-primary">Ir</Link>
          </div>
        </div>
        )
      )
    }
    </div>
  )

}

export default Cards