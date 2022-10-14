import React from 'react'
import FooterBanner from '../components/FooterBanner'
import NavBar from '../components/NavBar'
import MenuLayout from '../layouts/MenuLayout'


const Menu = () => {
    return (
        <div className="container-fluid mt-7">
            <NavBar />
            <MenuLayout />
            <FooterBanner />
        </div>
    )
}

export default Menu