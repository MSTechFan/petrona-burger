import React from 'react'
import NavBar from '../components/NavBar'
import FooterBanner from '../components/FooterBanner'
import { Outlet } from 'react-router-dom'
import './login.css'

const NavFooter = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
          <NavBar />
        </div>
        <div className='row mainSection'>
          <div className='login'>
            <Outlet />
          </div>
        </div>
        <div className='row'>
          <FooterBanner />
        </div>
    </div>
  )
}

export default NavFooter