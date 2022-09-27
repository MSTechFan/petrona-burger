import React from 'react'
import {RiTwitterLine} from 'react-icons/ri'
import {RiGithubLine} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
import './footer.css'

const Footer = () => {
  return (
    <>
        <div class="footer-banner container-fluid mt-5 mb-3 text-center">
            <div class="row">
                <div class="col">
                  <RiTwitterLine/>
                </div>
                <div class="col">
                  <RiGithubLine/>
                </div>
                <div class="col">
                  <RiInstagramLine/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer