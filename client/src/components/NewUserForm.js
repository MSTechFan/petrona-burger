const NewUserForm = () => {
  return (
    <form>
        <div className="mb-3">
            <label htmlFor="nombreCompleto" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn-primary">Create</button>
    </form>
  )
}

export default NewUserForm