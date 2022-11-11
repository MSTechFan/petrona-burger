import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { SearchProduct } from '../features/productSlice'
import { useState } from 'react'


const ProductLayout = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  return (
    <div style={{height: "100vh", width: "100vw"}}>
        <NavBar />
        <div className='container-fluid' style={{marginTop: "40px"}}>
          <div className='row'>
            <div className='col-8 col-md-4'>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search product..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={input} onChange={e => setInput(e.target.value)}/>
              <span className="input-group-text" id="basic-addon2"><BiSearchAlt2 onClick={() => dispatch(SearchProduct(input))}/></span>
            </div>
            </div>
          </div>
          <div className='row'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default ProductLayout