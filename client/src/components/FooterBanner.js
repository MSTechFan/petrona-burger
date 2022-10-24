import React from 'react'
import {RiTwitterLine} from 'react-icons/ri'
import {RiGithubLine} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
import './footerBanner.css'

const FooterBanner = () => {
  return (
    <>
        <div className='footer-banner'>
            <div className='row'>
                <div className='col-6'>
                  <RiTwitterLine/>
                  <RiInstagramLine/>
                  <RiGithubLine/>
                </div>
                <div className='col-6'>
                  <ul className='d-flex flex-row flex-wrap justify-content-center align-items-center' style={{listStyle: "none"}}>
                    <li>About Us</li>
                    <li>Work with Us</li>
                    <li>Terms and Conditions</li>
                  </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterBanner