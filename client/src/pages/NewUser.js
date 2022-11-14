import { LoginForm } from '../components/LoginForm'
import NavBar from '../components/NavBar'
import FooterBanner from '../components/FooterBanner'


const NewUser = () => {
  return (
    <div className='container-fluid page-container' >
        <div className='row mainSection content-wrap'>
          <NavBar />
          <div className='login' style={{marginTop: "50px"}}>
            <LoginForm />
          </div>
        </div>
          <FooterBanner />
    </div>
  )
}

export default NewUser