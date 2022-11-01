import React from 'react'
import NavBar from '../components/NavBar'

const NotFound = () => {
  return (
    <div className='container-fluid' style={{height: "100vh"}}>
        <NavBar />
        <h1>404 Error Page</h1>
        <p className="zoom-area"><b>Oops...</b>  something went wrong. </p>
        <section class="error-container">
          <span><span>4</span></span>
          <span>0</span>
          <span><span>4</span></span>
        </section>
        {/* <div class="link-container">
          <a target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/" class="more-link">Visit the original article</a>
        </div> */}
    </div>
  )
}

export default NotFound