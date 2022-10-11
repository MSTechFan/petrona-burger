import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import ShoppingCart from './ShoppingCart'


const NavBar = () => {
  return (
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Petrona Burger</a>
                <ShoppingCart/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/' className='text-decoration-none'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/menu' className='text-decoration-none'>Productos</Link>
                    </li>
                </ul>
                <Link to='/login' className='text-decoration-none'>Login</Link>
                </div>
            </div>            
        </nav>
  )
}

export default NavBar