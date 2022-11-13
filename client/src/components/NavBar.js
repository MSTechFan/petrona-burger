import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'


const NavBar = () => {
  return (
        <nav className='navbar navbar-expand-lg'>
            <div className="container-fluid row" style={{width: "100vw"}}>
                <div className='col-2'>
                    <h2>Petrona Burger</h2>
                </div>
                <div className='col-4 text-end'>
                    <ShoppingCart/>
                </div>
                <div className='col-3'>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse col-3" id="navbarSupportedContent" style={{}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontWeight: "700"}}>
                            <li className="nav-item">
                                <Link to='/' className='nav-link primary text-decoration-none'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/menu' className='nav-link primary text-decoration-none'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className='nav-link primary text-decoration-none'>Login</Link>
                            </li>
                        </ul>
                </div>
            </div>            
        </nav>
  )
}

export default NavBar