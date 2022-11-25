import { useEffect } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import { EvalEleAndAddToCart } from '../features/cartSlice'
import { SearchProduct, fetchProducts } from '../features/productSlice'

const Menu = () => {
    const Product = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <div className='container-fluid' style={{width: "100vw"}}>
            <NavBar />
            <div className='container-fluid' style={{marginTop: "40px"}}>
                <div className='row'>
                    <div className='col-8 col-md-4'>
                        <SearchBar searchAction={SearchProduct}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='d-flex flex-row flex-wrap'>
                        {Product.products.map((ele) => {
                            return (
                                <div className="card dynamic-card" key={ele.id}>
                                    <img src={ele.imgUrl} className="card-img-top" alt={ele.name}/>
                                    <div className="card-body">
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

export default Menu