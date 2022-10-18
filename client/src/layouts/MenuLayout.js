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
            <a href='#'><span className='text-decoration-underline'>Ver mas...</span></a>
        </div>
        <div className='row mt-7'>
            <h1>Combos</h1>
            {Combos}
            <a href='#'><span className='text-decoration-underline'>Ver mas...</span></a>
        </div>
        <div className='row mt-7'>
            <h1>Hamburguesas</h1>
            {Hamburguesas}
            <a href='#'><span className='text-decoration-underline'>Ver mas...</span></a>
        </div>
    </div>
  )
}

export default MenuLayout