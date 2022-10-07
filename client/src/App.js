import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import NewUser from './pages/NewUser'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>  
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/newUser' element={<NewUser />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App