import React from 'react'
import { LoginForm } from '../components/LoginForm'
import FooterBanner from '../components/FooterBanner'
import NavBar from '../components/NavBar'
import './login.css'


const Login = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
          <NavBar />
        </div>
        <div className='row mainSection'>
          <div className='login'>
            <LoginForm />
          </div>
          
        </div>
        <div className='row'>
          <FooterBanner />
        </div>
    </div>
  )
}

export default Login