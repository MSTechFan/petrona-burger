// import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import Combos from './pages/Combos'
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import News from './pages/News'
import NewUser from './pages/NewUser'
import NotFound from './pages/NotFound'

const App = () => {
  const userToken = localStorage.getItem('userDetails')
  // const navigate = useNavigate()

  function redirectRoute (route) {
    if(userToken) {
      return route
    } else {
      return (
        <Login />
      )
    }
  }
  


  return (
    <Routes>
      <Route path="/" element={userToken ? <Navigate to="/home" /> : <Navigate to="/login" />} />
      <Route path='login' element={<Login />}/> 
      <Route path='newUser' element={<NewUser />}/> 
      <Route path='home' element={redirectRoute(<Home/>)}/>
      <Route path='menu' element={redirectRoute(<Menu/>)}/>
      <Route path='combos' element={redirectRoute(<Combos/>)}/>
      <Route path='news' element={redirectRoute(<News/>)}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App