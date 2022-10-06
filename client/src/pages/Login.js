import React from 'react'
import { LoginForm } from '../components/LoginForm'
import Header from '../layouts/Header'

const Login = () => {
  return (
    <div className='container-fluid'>
        <Header />
        <LoginForm />
    </div>
  )
}

export default Login