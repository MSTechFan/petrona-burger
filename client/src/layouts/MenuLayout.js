import React from 'react'
import  { Combos } from '../components/Combos'
import  { Hamburguesas }  from '../components/Hamburguesas'
import  { Novedades } from '../components/Novedades'

const MenuLayout = () => {
  return (
    <div className='container-fluid mt-7'>
        <div className='row'>
            <h1>Novedades</h1>
            {Novedades}
        </div>
        <div className='row'>
            <h1>Combos</h1>
            {Combos}
        </div>
        <div className='row'>
            <h1>Hamburguesas</h1>
            {Hamburguesas}
        </div>
    </div>
  )
}

export default MenuLayout