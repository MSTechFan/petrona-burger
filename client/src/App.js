import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavFooter from './layouts/NavFooter'
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import NewUser from './pages/NewUser'
import NotFound from './pages/NotFound'
import CombosPage from './pages/CombosPage'
import HamburgersPage from './pages/HamburgersPage'
import NewsPage from './pages/NewsPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route element={<NavFooter />}>
        <Route path='/login' element={<Login />}/>
        <Route path='/newUser' element={<NewUser />}/>
      </Route>  
      <Route path='/menu' element={<Menu />} >
        <Route path='combos' element={<CombosPage />}/>
        <Route path='hamburgers' element={<HamburgersPage />}/>
        <Route path='news' element={<NewsPage />}/>
      </Route>  
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App