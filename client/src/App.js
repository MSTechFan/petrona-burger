import { Route, Routes } from 'react-router-dom'
import Combos from './pages/Combos'
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import News from './pages/News'
import NewUser from './pages/NewUser'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>  
      <Route path='/' element={<Home/>} />
      <Route path='newUser' element={<NewUser />}/>
      <Route path='login' element={<Login />}/>
      <Route path='menu' element={<Menu />}/>
      <Route path='combos' element={<Combos />}/>
      <Route path='news' element={<News />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App