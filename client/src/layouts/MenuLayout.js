import React from 'react'
import  { Combos } from '../components/Combos'
import  { Hamburguesas }  from '../components/Hamburguesas'
import  { Novedades } from '../components/Novedades'

const MenuLayout = () => {
  return (
    <div className='container-fluid mt-10'>
        <div className='row mt-10'>
            <h1>Novedades</h1>
            {Novedades}
            <span className='text-decoration-underline'>Ver mas...</span>
        </div>
        <div className='row mt-7'>
            <h1>Combos</h1>
            {Combos}
            <span className='text-decoration-underline'>Ver mas...</span>
        </div>
        <div className='row mt-7'>
            <h1>Hamburguesas</h1>
            {Hamburguesas}
            <span className='text-decoration-underline'>Ver mas...</span>
        </div>
    </div>
  )
}

export default MenuLayout