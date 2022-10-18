import React from 'react'
import { Link } from 'react-router-dom'
import  { Combos } from '../components/Combos'
import  { Hamburgers }  from '../components/Hamburgers'
import  { News } from '../components/News'

const MenuLayout = () => {
  return (
    <div className='container-fluid mt-10'>
        <div className='row mt-10'>
            <h1>Novedades</h1>
            {News}
            <Link to={"/menu/news"}><span className='text-decoration-underline'>Ver mas...</span></Link>
        </div>
        <div className='row mt-7'>
            <h1>Combos</h1>
            {Combos}
            <Link to={"/menu/combos"}><span className='text-decoration-underline'>Ver mas...</span></Link>
        </div>
        <div className='row mt-7'>
            <h1>Hamburguesas</h1>
            {Hamburgers}
            <Link to={"/menu/hamburgers"}><span className='text-decoration-underline'>Ver mas...</span></Link>
        </div>
    </div>
  )
}

export default MenuLayout