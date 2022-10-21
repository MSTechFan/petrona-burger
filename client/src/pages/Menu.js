import React from 'react'
import { AllProducts } from '../components/AllProducts'



const Menu = () => {
    return (
        <div className='d-flex flex-row flex-wrap'>
            {AllProducts}
        </div>
    )
}

export default Menu