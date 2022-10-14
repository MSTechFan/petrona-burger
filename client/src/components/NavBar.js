import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import ShoppingCart from './ShoppingCart'


const NavBar = () => {
  return (
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className="container-fluid row">
                <div className='col-2'>
                    <h2>Petrona Burger</h2>
                </div>
                <div className='col-4 text-end'>
                    <ShoppingCart/>
                </div>
                <div className='col-3 text-end'>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse col-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className='text-decoration-none'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/menu' className='text-decoration-none'>Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className='text-decoration-none'>Login</Link>
                            </li>
                        </ul>
                </div>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-5 d-flex justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-end">
                        <li className="nav-item">
                            <Link to='/' className='text-decoration-none'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/menu' className='text-decoration-none'>Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className='text-decoration-none'>Login</Link>
                        </li>
                    </ul>
                </div> */}
            </div>            
        </nav>
  )
}

export default NavBar