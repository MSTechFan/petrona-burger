import React from 'react'
import {RiTwitterLine} from 'react-icons/ri'
import {RiGithubLine} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
import './footerBanner.css'

const FooterBanner = () => {
  const StylesIcons = {
    width: "20px",
    height: "20px",
    color: "#0d3b66"
  }
  return (
    <>
        <div className='footer-banner'>
          <div className='row' style={{height: "100%"}}>
                <div className='col-6 d-flex justify-content-center align-items-center' style={{height: "100%"}}>
                  <div className='d-flex justify-content-between align-items-center' style={{width: "60px", height: "60px"}}>
                    <a href='https://twitter.com/MSTechFan' target="_blank" style={{marginLeft: "5px"}}><RiTwitterLine style={StylesIcons}/></a>
                    <a href='https://www.instagram.com/mstechfan/' target="_blank" style={{marginLeft: "5px"}}><RiInstagramLine style={StylesIcons}/></a>
                    <a href='https://github.com/MSTechFan' target="_blank" style={{marginLeft: "5px"}}><RiGithubLine style={StylesIcons}/></a>
                  </div>
                </div>
                <div className='col-6 d-flex justify-content-center align-items-center'>
                  <ul className='d-flex flex-row flex-wrap' style={{listStyle: "none"}}>
                    <a><li>About Us</li></a>
                    <a><li>Work with Us</li></a>
                    <a><li>Terms and Conditions</li></a>
                  </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterBanner