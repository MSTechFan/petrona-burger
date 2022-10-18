import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavFooter from './layouts/NavFooter'
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import NewUser from './pages/NewUser'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route element={<NavFooter />}>
        <Route path='/login' element={<Login />}/>
        <Route path='/newUser' element={<NewUser />}/>
      </Route>  
      <Route path='/menu' element={<Menu />}>
        <Route path='/combos' element={""}/>
        <Route path='/hamburgers' element={""}/>
        <Route path='/news' element={""}/>
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App