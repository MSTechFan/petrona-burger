import NavBar from '../components/NavBar'
import FooterBanner from '../components/FooterBanner'
import { Outlet } from 'react-router-dom'

const NavFooter = () => {
  return (
    <div className='container-fluid page-container' style={{height: "100vh"}}>
        {/* <div className='row'>
          <NavBar />
        </div> */}
        <div className='row mainSection content-wrap'>
          <NavBar />
          <div className='login' style={{marginTop: "50px"}}>
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