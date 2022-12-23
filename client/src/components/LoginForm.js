import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { loginPost, manageLogOut } from '../features/sessionSlice'
import { useEffect } from 'react'

export const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  const {userToken} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(manageLogOut())
    localStorage.removeItem('userDetails')
    navigate('/login')
  }

  const saveTokenInLocalStorage = (tokenDetails) => {
    localStorage.setItem('userDetails', tokenDetails)
  }

  const onSubmit = (data) => {
      dispatch(loginPost(data))
  }

  useEffect(() => {
    if(userToken){
      // funcion para anular el token despues del tiempo
      setTimeout(() => {
        // salir de la sesión con la accion de logout
        dispatch(handleLogOut())
      }, 10000)
      saveTokenInLocalStorage(userToken)
      alert('You are logged in')
      navigate('/home')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken])

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input {... register("email")} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input {... register("password")} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type='submit' className="btn-primary m-3">Login</button>
            <Link to="/newUser" className="btn-primary m-3" role="button">Create New Account</Link>
        </form>
    </>
  )
}
