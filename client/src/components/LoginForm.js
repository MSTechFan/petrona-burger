import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { loginPost } from '../features/sessionSlice'

export const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(loginPost(data))
  }

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
