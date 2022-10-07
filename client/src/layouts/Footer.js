import React from 'react'
import {RiTwitterLine} from 'react-icons/ri'
import {RiGithubLine} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
import './footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer-banner container-fluid mt-5 mb-3 text-center">
            <div className="row">
                <div className="col">
                  <RiTwitterLine/>
                </div>
                <div className="col">
                  <RiGithubLine/>
                </div>
                <div className="col">
                  <RiInstagramLine/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer