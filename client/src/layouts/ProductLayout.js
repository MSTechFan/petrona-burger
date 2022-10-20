import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterBanner from '../components/FooterBanner'
import NavBar from '../components/NavBar'
import { BiSearchAlt2 } from 'react-icons/bi'


const ProductLayout = () => {
  return (
    <>
        <NavBar />
        <div>
          <div className='row'>
            <div className='col-8'>
              <span><BiSearchAlt2 /></span><input type="text" class="form-control" placeholder='Search product...'/>
            </div>
          </div>
          <div className='row'>
            <Outlet />
          </div>
        </div>
        <Outlet />
        <FooterBanner />
    </>
  )
}

export default ProductLayout