import { useEffect } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import { EvalEleAndAddToCart } from '../features/cartSlice'
import { fetchCombos, SearchReducer } from '../features/productSlice'

const Combo = () => {
    const Combo = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCombos())
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <div style={{width: "100vw"}}>
        <NavBar />
        <div className='container-fluid' style={{marginTop: "40px"}}>
          <div className='row'>
            <div className='col-8 col-md-4'>
                <SearchBar searchAction={SearchReducer}/>
            </div>
          </div>
          <div className='row'>
            <div className='d-flex flex-row flex-wrap'>
                {Combo.products.map((ele) => {
                    return (
                        <div className="card dynamic-card"  key={ele._id}>
                            <img src={ele.imgUrl} className="card-img-top" alt={ele.name}/>
                            <div className="card-body" >
                                <h2 className="card-title">{ele.name}</h2>
                                <p className="card-text">{ele.description}</p>
                                <AiFillPlusCircle style={{width: "30px", height: "30px"}} onClick={() => dispatch(EvalEleAndAddToCart(ele))}/>
                            </div>
                        </div>
                    )    
                })}
                </div>
          </div>
        </div>
    </div>
    )
}

export default Combo