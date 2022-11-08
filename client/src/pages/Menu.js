import { fullListProducts } from '../productListAPI'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { EvalEleAndAddToCart } from '../features/cartSlice'

const Menu = () => {
    const dispatch = useDispatch()
    return (
        <div className='d-flex flex-row flex-wrap'>
            {fullListProducts.map((ele) => {
                return (
                    <div className="card" style={{width: "18rem", margin: 5}} key={ele.id}>
                          <img src={ele.img} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <h2 className="card-title">{ele.name}</h2>
                              <p className="card-text">{ele.description}</p>
                              <AiFillPlusCircle style={{width: "30px", height: "30px"}} onClick={() => dispatch(EvalEleAndAddToCart(ele))}/>
                          </div>
                    </div>
                )    
            })}
        </div>
    )
}

export default Menu