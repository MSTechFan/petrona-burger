import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterBanner from '../components/FooterBanner'
import NavBar from '../components/NavBar'
import { BiSearchAlt2 } from 'react-icons/bi'


const ProductLayout = () => {
  return (
    <>
        <NavBar />
        <div className='container-fluid' style={{marginTop: "40px"}}>
          <div className='row'>
            <div className='col-4'>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search product..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <span className="input-group-text" id="basic-addon2"><BiSearchAlt2/></span>
            </div>
            </div>
          </div>
          <div className='row'>
            <Outlet />
          </div>
        </div>
    </>
  )
}

export default ProductLayout