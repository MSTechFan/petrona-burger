import { Link, useNavigate } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { manageLogOut } from '../features/sessionSlice'
import { useDispatch } from 'react-redux'

const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(manageLogOut())
        localStorage.removeItem('userDetails')
        navigate('/login')
      }

    return (
            <Navbar className='navbar' expand="lg">
                <div className="container-fluid row" style={{width: "100vw"}}>
                    <div className='col-2'>
                        <h2>Petrona Burger</h2>
                    </div>
                    <div className='col-4 text-end'>
                        <ShoppingCart/>
                    </div>
                    <div className='col-3'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <Navbar.Collapse className="collapse navbar-collapse col-3" id="basic-navbar-nav">
                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0" style={{fontWeight: "700"}}>
                            <Nav.Link>
                                <Link to='/' className='nav-link primary text-decoration-none'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/menu' className='nav-link primary text-decoration-none'>Products</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link onClick={() => handleLogOut()} className='nav-link primary text-decoration-none text-danger'>Log out</Link>
                            </Nav.Link>
                        </Nav>    
                    </Navbar.Collapse>
                </div>            
            </Navbar>
    )
}

export default NavBar