import React from 'react'
import NavBar from '../components/NavBar'

const NotFound = () => {
  return (
    <div className='container-fluid' style={{height: "100vh"}}>
        <NavBar />
        <section className="error-container">
          <span><span>4</span></span>
          <span>0</span>
          <span><span>4</span></span>
          <p>Oops...Page Not Found</p>
        </section>
        
    </div>
  )
}

export default NotFound