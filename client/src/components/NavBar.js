import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'


const NavBar = () => {
  return (
        <nav className="fixed-top navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Petrona Burger</a>
                <button type="button" className="btn btn-warning">Pide ya!</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/' className='btn btn-primary'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/menu' className='btn btn-primary'>Productos</Link>
                    </li>
                </ul>
                <Link to='/login' className='btn btn-primary'>Login</Link>
                </div>
            </div>            
        </nav>
  )
}

export default NavBar