import { LoginForm } from '../components/LoginForm'
import FooterBanner from '../components/FooterBanner'


const Login = () => {
  return (
    <div className='container-fluid page-container'>
        <div className='row mainSection content-wrap'>
          <div className='login' style={{marginTop: "50px", marginBottom: "50px"}}>
            <LoginForm />
          </div>
        </div>
          <FooterBanner />
    </div>
  )
}

export default Login